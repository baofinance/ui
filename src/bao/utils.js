import { Fetcher, WETH, Route } from '@sushiswap/sdk'
import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { supportedPools } from './lib/constants'

BigNumber.config({
	EXPONENTIAL_AT: 1000,
	DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
	STAKING: {
		DEFAULT: 200000,
		SNX: 850000,
	},
}

export const getMasterChefAddress = (bao) => {
	return bao && bao.masterChefAddress
}

export const getWethPriceAddress = (bao) => {
	return bao && bao.wethPriceAddress
}

export const getBaoPriceAddress = (bao) => {
	return bao && bao.baoPriceAddress
}

export const getBaoAddress = (bao) => {
	return bao && bao.baoAddress
}
export const getWethContract = (bao) => {
	return bao && bao.contracts && bao.contracts.weth
}

export const getWethPriceContract = (bao) => {
	return bao && bao.contracts && bao.contracts.wethPrice
}

export const getBaoPriceContract = (bao) => {
	return bao && bao.contracts && bao.contracts.baoPrice
}

export const getMasterChefContract = (bao) => {
	return bao && bao.contracts && bao.contracts.masterChef
}
export const getBaoContract = (bao) => {
	return bao && bao.contracts && bao.contracts.bao
}

export const getFarms = (bao) => {
	return bao
		? bao.contracts.pools.map(
				({
					pid,
					name,
					symbol,
					icon,
					tokenAddress,
					denominatorAddress,
					mainnetDenominatorAddress,
					tokenDecimals,
					tokenSymbol,
					tokenContract,
					denominatorContract,
					lpAddress,
					lpContract,
					refUrl,
					poolType,
				}) => ({
					pid,
					id: symbol,
					name,
					lpToken: symbol,
					lpTokenAddress: lpAddress,
					lpContract,
					tokenAddress,
					denominatorAddress,
					mainnetDenominatorAddress,
					tokenDecimals,
					tokenSymbol,
					tokenContract,
					denominatorContract,
					earnToken: 'BAO',
					earnTokenAddress: bao.contracts.bao.options.address,
					icon,
					refUrl,
					poolType,
				}),
		  )
		: []
}

export const getPoolWeight = async (masterChefContract, pid, batchRequest) => {
	const [{ allocPoint }, totalAllocPoint] = await addCallsToBatch(
		batchRequest,
		[
			masterChefContract.methods.poolInfo(pid).call,
			masterChefContract.methods.totalAllocPoint().call,
		],
	)

	return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint))
}

export const getEarned = async (masterChefContract, pid, account) => {
	return masterChefContract.methods.pendingReward(pid, account).call()
}

export const getLockedEarned = async (baoContract, account) => {
	return baoContract.methods.lockOf(account).call()
}

export const addCallsToBatch = (batchRequest, calls) => {
	let promises = calls.map((call) => {
		return new Promise((resolve, reject) => {
			let request = call.request((error, data) => {
				if (error) {
					reject(error)
				} else {
					resolve(data)
				}
			})
			batchRequest.add(request)
		})
	})
	return Promise.all(promises)
}

export const getDenominatorWethValueAndDecimals = async (
	mainnetDenominatorAddress,
) => {
	try {
		const denominatorTokenDetails = await Fetcher.fetchTokenData(
			1,
			mainnetDenominatorAddress,
		)
		const denominatorWethPair = await Fetcher.fetchPairData(
			denominatorTokenDetails,
			WETH[1],
		)
		const route = new Route([denominatorWethPair], denominatorTokenDetails)
		return {
			wethValue: route.midPrice.toSignificant(6),
			decimals: denominatorTokenDetails.decimals,
		}
	} catch (e) {
		console.log(
			`Error getting stats for denominator with address ${mainnetDenominatorAddress}`,
			e,
		)
		return {
			wethValue: 1,
			decimals: 18,
		}
	}
}

export const getTotalLPWethValue = async (
	masterChefContract,
	lpContract,
	tokenContract,
	denominatorContract,
	mainnetDenominatorAddress,
	tokenDecimals,
	pid,
	batchRequest,
) => {
	const poolWeightPromise = getPoolWeight(masterChefContract, pid, batchRequest)

	// There is one farm on mainnet (xSushi) which doesn't require depositing LP
	// tokens but instead only the token itself. For farm like this we need a
	// slightly different calculation.
	const isTokenPool =
		tokenContract.options.address === lpContract.options.address

	// We'll need to find the price of the token as it won't be eth.
	if (isTokenPool) mainnetDenominatorAddress = tokenContract.options.address

	// Query contracts to get stats about the pool.
	const batchPromise = addCallsToBatch(batchRequest, [
		// Amount of token in the LP contract
		tokenContract.methods.balanceOf(lpContract.options.address).call,
		// Amount of LP token (or just token, if token only pool)
		// staked in masterchef contract
		isTokenPool
			? tokenContract.methods.balanceOf(masterChefContract.options.address).call
			: lpContract.methods.balanceOf(masterChefContract.options.address).call,
		// Get the total number of LP tokens
		lpContract.methods.totalSupply().call,
		// Amount of denominator (most commonly weth) in the LP contract
		denominatorContract.methods.balanceOf(lpContract.options.address).call,
	])

	// If no denominator address is supplied, default to the denominator being
	// in WETH (gwei).
	const denominatorWethValuePromise = mainnetDenominatorAddress
		? getDenominatorWethValueAndDecimals(mainnetDenominatorAddress)
		: { wethValue: 1, decimals: 18 }

	const [
		[tokenAmountWholeLP, balance, totalSupply, lpContractDenominator],
		poolWeight,
		denominatorWethValueAndDecimals,
	] = await Promise.all([
		batchPromise,
		poolWeightPromise,
		denominatorWethValuePromise,
	])

	const {
		wethValue: denominatorWethValue,
		decimals: denominatorDecimals,
	} = denominatorWethValueAndDecimals

	// Return p1 * w1 * 2
	const portionLp = !isTokenPool
		? new BigNumber(balance).div(new BigNumber(totalSupply))
		: new BigNumber(1)

	let lpWethWorth
	// note also true if token pool
	if (mainnetDenominatorAddress) {
		// we have WETH (not wei) per full denominator
		lpWethWorth = new BigNumber(!isTokenPool ? lpContractDenominator : balance)
			// convert to full denominator units (i.e. if it was ETH, wei to ETH)
			.div(new BigNumber(10).pow(denominatorDecimals))
			// multiply by our ETH value to get ETH
			.times(new BigNumber(denominatorWethValue)) // in ETH
			// convert to wei
			.times(new BigNumber(10).pow(18))
	} else {
		lpWethWorth = new BigNumber(lpContractDenominator)
	}

	// only multiply by two if this is a liquidity token, if it's just one token
	// then the ethValue is the 'denominator' value only.
	const totalLpWethValue = portionLp
		.times(lpWethWorth)
		.times(isTokenPool ? new BigNumber(1) : new BigNumber(2))
	// Calculate
	const tokenAmount = new BigNumber(!isTokenPool ? tokenAmountWholeLP : balance)
		.times(!isTokenPool ? portionLp : 1)
		.div(new BigNumber(10).pow(tokenDecimals))

	const denominatorAmount = new BigNumber(lpContractDenominator)
		.times(portionLp)
		.div(new BigNumber(10).pow(denominatorDecimals))

	const denominatorWethEquivalent = mainnetDenominatorAddress
		? denominatorAmount.times(new BigNumber(denominatorWethValue))
		: denominatorAmount

	return {
		tokenAmount,
		denominatorAmount,
		denominatorWethEquivalent,
		totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
		tokenPriceInDenominator: denominatorAmount.div(tokenAmount),
		poolWeight: poolWeight,
	}
}

export const approve = async (lpContract, masterChefContract, account) => {
	return lpContract.methods
		.approve(masterChefContract.options.address, ethers.constants.MaxUint256)
		.send({ from: account })
}

export const stake = async (masterChefContract, pid, amount, account, ref) => {
	return masterChefContract.methods
		.deposit(pid, ethers.utils.parseUnits(amount, 18), ref)
		.send({ from: account })
		.on('transactionHash', (tx) => {
			console.log(tx)
			return tx.transactionHash
		})
}

export const unstake = async (
	masterChefContract,
	pid,
	amount,
	account,
	ref,
) => {
	return masterChefContract.methods
		.withdraw(pid, ethers.utils.parseUnits(amount, 18), ref)
		.send({ from: account })
		.on('transactionHash', (tx) => {
			console.log(tx)
			return tx.transactionHash
		})
}
export const harvest = async (masterChefContract, pid, account) => {
	return masterChefContract.methods
		.claimReward(pid)
		.send({ from: account })
		.on('transactionHash', (tx) => {
			console.log(tx)
			return tx.transactionHash
		})
}

export const getStaked = async (masterChefContract, pid, account) => {
	try {
		const { amount } = await masterChefContract.methods
			.userInfo(pid, account)
			.call()
		return new BigNumber(amount)
	} catch {
		return new BigNumber(0)
	}
}

export const getWethPrice = async (bao) => {
	console.log(bao)
	const amount = await bao.contracts.wethPrice.methods.latestAnswer().call()
	return new BigNumber(amount)
}

export const getBaoPrice = async (bao) => {
	const addr = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
	const amount = await bao.contracts.baoPrice.methods
		.consult(addr.toString(), 1)
		.call()
	return new BigNumber(amount)
}

export const getBaoSupply = async (bao) => {
	return new BigNumber(await bao.contracts.bao.methods.totalSupply().call())
}

export const getReferrals = async (masterChefContract, account) => {
	return await masterChefContract.methods.getGlobalRefAmount(account).call()
}

export function getRefUrl() {
	var refer = '0x0000000000000000000000000000000000000000'
	const urlParams = new URLSearchParams(window.location.search)
	if (urlParams.has('ref')) {
		refer = urlParams.get('ref')
	}
	console.log(refer)

	return refer
}

export const redeem = async (masterChefContract, account) => {
	let now = new Date().getTime() / 1000
	if (now >= 1597172400) {
		return masterChefContract.methods
			.exit()
			.send({ from: account })
			.on('transactionHash', (tx) => {
				console.log(tx)
				return tx.transactionHash
			})
	} else {
		alert('pool not active')
	}
}

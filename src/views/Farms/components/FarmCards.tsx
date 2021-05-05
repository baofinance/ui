import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import Countdown from 'react-countdown'
import type { CountdownRenderProps } from 'react-countdown'
import styled, { keyframes } from 'styled-components'
import { useWallet } from 'use-wallet'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Loader from '../../../components/Loader'
import Spacer from '../../../components/Spacer'
import { Farm } from '../../../contexts/Farms'
import useAllStakedValue, {
	StakedValue,
} from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useBao from '../../../hooks/useBao'
import { getEarned, getMasterChefContract } from '../../../bao/utils'
import { bnToDec } from '../../../utils'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import './tab-styles.css'
import { PoolType } from '../../../contexts/Farms/types'

interface FarmWithStakedValue extends Farm, StakedValue {
	apy: BigNumber
}

const cardsPerRow = 3

const FarmCards: React.FC = () => {
	const [farms] = useFarms()
	const { account } = useWallet()
	const stakedValue = useAllStakedValue()

	const baoIndex = farms.findIndex(({ tokenSymbol }) => tokenSymbol === 'BAO')

	const baoPrice =
		baoIndex >= 0 && stakedValue[baoIndex]
			? stakedValue[baoIndex].tokenPriceInDenominator // (token price in weth)
			: new BigNumber(0)

	const BLOCKS_PER_YEAR = new BigNumber(2336000)
	const BAO_BER_BLOCK = new BigNumber(64000)

	const pools: { [key: string]: FarmWithStakedValue[] } = {
		[PoolType.UNI]: [],
		[PoolType.SUSHI]: [],
		[PoolType.ARCHIVED]: [],
	}

	farms.forEach((farm, i) => {
		const farmWithStakedValue = {
			...farm,
			...stakedValue[i],
			poolType: farm.poolType || PoolType.UNI,
			apy: stakedValue[i]
				? baoPrice
						.times(BAO_BER_BLOCK)
						.times(BLOCKS_PER_YEAR)
						.times(stakedValue[i].poolWeight)
						.div(stakedValue[i].totalWethValue)
				: null,
		}

		pools[farmWithStakedValue.poolType].push(farmWithStakedValue)
	})

	return (
		<Tabs>
			<TabList>
				<Tab>Uni Pools</Tab>
				<Tab>Sushi Pools</Tab>
				<Tab>Archived Pools</Tab>
			</TabList>

			<TabPanel>
				<StyledCards>
					{pools[PoolType.UNI].length ? (
						pools[PoolType.UNI].map((farm, i) => (
							<React.Fragment key={i}>
								<FarmCard farm={farm} />
								{(i + 1) % cardsPerRow !== 0 && <StyledSpacer />}
							</React.Fragment>
						))
					) : (
						<StyledLoadingWrapper>
							<Loader text="Cooking the rice ..." />
						</StyledLoadingWrapper>
					)}
				</StyledCards>
			</TabPanel>
			<TabPanel>
				<StyledCards>
					{pools[PoolType.SUSHI].length ? (
						pools[PoolType.SUSHI].map((farm, i) => (
							<React.Fragment key={i}>
								<FarmCard farm={farm} />
								{(i + 1) % cardsPerRow !== 0 && <StyledSpacer />}
							</React.Fragment>
						))
					) : (
						<StyledLoadingWrapper>
							<Loader text="Cooking the rice ..." />
						</StyledLoadingWrapper>
					)}
				</StyledCards>
			</TabPanel>
			<TabPanel>
				<StyledCards>
					{pools[PoolType.ARCHIVED].length ? (
						pools[PoolType.ARCHIVED].map((farm, i) => (
							<React.Fragment key={i}>
								<FarmCard farm={farm} />
								{(i + 1) % cardsPerRow !== 0 && <StyledSpacer />}
							</React.Fragment>
						))
					) : (
						<StyledLoadingWrapper>
							<Loader text="Cooking the rice ..." />
						</StyledLoadingWrapper>
					)}
				</StyledCards>
			</TabPanel>
		</Tabs>
	)
}

interface FarmCardProps {
	farm: FarmWithStakedValue
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
	const [startTime, setStartTime] = useState(0)
	const [harvestable, setHarvestable] = useState(0)

	const { account } = useWallet()
	const { lpTokenAddress } = farm
	const bao = useBao()

	const renderer = (countdownProps: CountdownRenderProps) => {
		const { hours, minutes, seconds } = countdownProps
		const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
		const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
		const paddedHours = hours < 10 ? `0${hours}` : hours
		return (
			<span style={{ width: '100%' }}>
				{paddedHours}:{paddedMinutes}:{paddedSeconds}
			</span>
		)
	}

	useEffect(() => {
		async function fetchEarned() {
			if (bao) return
			const earned = await getEarned(
				getMasterChefContract(bao),
				lpTokenAddress,
				account,
			)
			setHarvestable(bnToDec(earned))
		}
		if (bao && account) {
			fetchEarned()
		}
	}, [bao, lpTokenAddress, account, setHarvestable])

	const poolActive = true // startTime * 1000 - Date.now() <= 0
	const tokenBuy = 'Buy ' + farm.tokenSymbol
	const destination = farm.refUrl
	return (
		<StyledCardWrapper>
			{farm.tokenSymbol === 'BAO' && <StyledCardAccent />}
			<Card>
				<CardContent>
					<StyledContent>
						<CardIcon>
							<img src={farm.icon} alt="" height="50" />
						</CardIcon>
						<StyledTitle>{farm.name}</StyledTitle>
						<StyledDetails>
							<StyledDetail>Deposit {farm.lpToken.toUpperCase()}</StyledDetail>
							<StyledDetail>Earn {farm.earnToken.toUpperCase()}</StyledDetail>
						</StyledDetails>
						<Spacer />
						<Button
							disabled={!poolActive}
							text={poolActive ? 'Select' : undefined}
							to={`/farms/${farm.id}`}
						>
							{!poolActive && (
								<Countdown
									date={new Date(startTime * 1000)}
									renderer={renderer}
								/>
							)}
						</Button>
						<Spacer />
						<Button text={tokenBuy} href={destination}></Button>
						<StyledInsight>
							<span>APY</span>
							<span>
								{farm.apy
									? `${farm.apy
											.times(new BigNumber(100))
											.toNumber()
											.toLocaleString('en-US')
											.slice(0, -1)}%`
									: 'Loading ...'}
							</span>
							{/* <span>{farm.tokenSymbol}</span>
							<span>
								{farm.tokenAmount
									? (farm.tokenAmount.toNumber() || 0).toLocaleString()
									: '-'}
							</span>
							<span>{farm.denominatorSymbol || 'ETH'}</span>
							<span>
								{farm.denominatorWethEquivalent
									? (
											farm.denominatorWethEquivalent.toNumber() || 0
									  ).toLocaleString()
									: '-'}{' '}
							</span> */}
						</StyledInsight>
					</StyledContent>
				</CardContent>
			</Card>
		</StyledCardWrapper>
	)
}

const RainbowLight = keyframes`

	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCardAccent = styled.div`
	background: linear-gradient(
		45deg,
		rgba(255, 0, 0, 1) 0%,
		rgba(255, 154, 0, 1) 10%,
		rgba(208, 222, 33, 1) 20%,
		rgba(79, 220, 74, 1) 30%,
		rgba(63, 218, 216, 1) 40%,
		rgba(47, 201, 226, 1) 50%,
		rgba(28, 127, 238, 1) 60%,
		rgba(95, 21, 242, 1) 70%,
		rgba(186, 12, 248, 1) 80%,
		rgba(251, 7, 217, 1) 90%,
		rgba(255, 0, 0, 1) 100%
	);
	background-size: 300% 300%;
	animation: ${RainbowLight} 2s linear infinite;
	border-radius: 12px;
	filter: blur(6px);
	position: absolute;
	top: -2px;
	right: -2px;
	bottom: -2px;
	left: -2px;
	z-index: -1;
`

const StyledCards = styled.div`
	width: 900px;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
	@media (max-width: 768px) {
		width: 100%;
		flex-flow: column nowrap;
		align-items: center;
	}
`

const StyledLoadingWrapper = styled.div`
	align-items: center;
	display: flex;
	flex: 1;
	justify-content: center;
`

const StyledCardWrapper = styled.div`
	display: flex;
	margin-top: ${(props) => props.theme.spacing[4]}px;
	width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
	position: relative;
`

const StyledTitle = styled.h4`
	color: ${(props) => props.theme.color.grey[600]};
	font-size: 19px;
	font-weight: 700;
	margin: ${(props) => props.theme.spacing[2]}px 0 0;
	padding: 0;
`

const StyledContent = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
`

const StyledSpacer = styled.div`
	height: ${(props) => props.theme.spacing[4]}px;
	width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
	margin-top: ${(props) => props.theme.spacing[2]}px;
	text-align: center;
`

const StyledDetail = styled.div`
	color: ${(props) => props.theme.color.grey[500]};
`

const StyledInsight = styled.div`
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	border-radius: 8px;
	background: #fffdfa;
	color: #aa9584;
	width: 100%;
	margin-top: 12px;
	line-height: 32px;
	font-size: 13px;
	border: 1px solid #e6dcd5;
	padding: 0 12px;
`

export default FarmCards

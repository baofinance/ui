import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
	ONE_MINUTE_IN_SECONDS,
	ONE_HOUR_IN_SECONDS,
	ONE_DAY_IN_SECONDS,
	ONE_YEAR_IN_SECONDS,
	ZERO: new BigNumber(0),
	ONE: new BigNumber(1),
	ONES_31: new BigNumber('4294967295'), // 2**32-1
	ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
	ONES_255: new BigNumber(
		'115792089237316195423570985008687907853269984665640564039457584007913129639935',
	), // 2**256-1
	INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
	uniswapFactory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
	uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
	DAI: '0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea',
	wBTC: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
	USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
	LINK: '0x514910771af9ca656af840dff83e8264ecf986ca',
	USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
	cDAI: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
	OKB: '0x75231f58b43240c9718dd58b4967c5114342a86c',
	LEO: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
	UNI: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
	HT: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
	AAVE: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
	CEL: '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d',
	SNX: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
	CRV: '0xd533a949740bb3306d119cc777fa900ba034cd52',
	YFI: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
	COMP: '0xc00e94cb662c3520282e6f5717214004a7f26888',
	MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
	UMA: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
	FTT: '0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9',
	RENBTC: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
	BAT: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
	TUSD: '0x0000000000085d4780b73119b644ae5ecd22b376',
	HUSD: '0xdf574c24545e5ffecb9a659c229253d4111d87e1',
	ZRX: '0xe41d2489571d322189246dafa5ebde1f4699f498',
	aETH: '0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04',
	OCEAN: '0x967da4048cd07ab37855c090aaf366e4ce1b9f48',
	KNC: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
	AMPL: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
	wNXM: '0x0d438f3b5175bebc262bf23753c1e53d03432bde',
	RSR: '0x8762db106b2c2a0bccb3a80d1ed41273552616e8',
	ENJ: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c',
	BAND: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
	NMR: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671',
	BAL: '0xba100000625a3754423978a60c9317c58a424e3d',
	NEXO: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
	ANT: '0xa117000000f279d81a1d3cc75430faa017fa5a2e',
	MANA: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
	SNT: '0x744d70fdbe2ba4cf95131626614a1763df805b9e',
	ESD: '0x36f3fd68e7325a35eb768f1aedaae9ea0689d723',
	yUSD: '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c',
	MATIC: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
	PAXG: '0x45804880de22913dafe09f4980848ece6ecbaf78',
	GT: '0xe66747a101bff2dba3697199dcce5b743b454759',
	SXP: '0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9',
	REP: '0x1985365e9f78359a9b6ad760e32412f4a445e862',
	CVC: '0x41e5560054824ea6b0732e656e3ad64e20e94e45',
	HEGIC: '0x584bc13c7d411c00c01a62e8019472de68768430',
	wFIL: '0x6e1a19f235be7ed8e3369ef73b196c07257494de',
	HBTC: '0x0316eb71485b0ab14103307bf65a021042c6d380',
	cUNI: '0x35a18000230da775cac24873d00ff85bccded550',
	UOS: '0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c',
	UTK: '0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c',
	SHR: '0xd98f75b1a3261dab9eed4956c93f33749027a964',
	TITAN: '0x3a8cccb969a61532d1e6005e2ce12c200caece87',
	MPH: '0x4d96369002fc5b9687ee924d458a7e5baa5df34e',
	sUSD: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
	MATH: '0x08d967bb0134f2d07f7cfb6e246680c53927dd30',
	SRM: '0x476c5e26a75bd202a9683ffd34359c0cc15be0ff',
	c0x: '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407',
	RPL: '0xb4efd85c19999d84251304bda99e90b92300bd93',
	STORJ: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
	BNT: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
	ANKR: '0x8290333cef9e6d528dd5618fb97a76f268f3edd4',
	UBT: '0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e',
	FTM: '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
	AGI: '0x8eb24319393716668d768dcec29356ae9cffe285',
	POLY: '0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec',
	ELF: '0xbf2179859fc6d5bee9bf9158632dc51678a4100e',
	DNT: '0x0abdace70d3790235af448c88547603b945604ea',
	PNK: '0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d',
	HXRO: '0x4bd70556ae3f8a6ec6c4080a0c327b24325438f3',
	TRB: '0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5',
	NPXS: '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3',
	WZEC: '0x4a64515e5e1d1073e83f30cb97bed20400b66e10',
	CORE: '0x62359ed7505efc61ff1d56fef82158ccaffa23d7',
	mUSD: '0xe2f2a5c287993345a840db3b0845fbc70f5935a5',
	EURS: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
	AXS: '0xf5d669627376ebd411e34b98f19c868c8aba5ada',
	BTMX: '0xcca0c9c383076649604ee31b20248bc04fdf61ca',
	LPT: '0x58b6a8a3302369daec383334672404ee733ab239',
	DGTX: '0xc666081073e8dff8d3d1c2292a29ae1a2153ec09',
	ENG: '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4',
	FET: '0xaea46a60368a7bd060eec7df8cba43b7ef41ad85',
	FARM: '0xa0246c9032bc3a600820415ae600c6388619a14d',
	ADX: '0xade00c28244d5ce17d72e40330b1c318cd12b7c3',
	STAKE: '0x0ae055097c6d159879521c384f1d2123d1f195e6',
	BZRX: '0x56d811088235f11c8920698a204a5010a788f4b3',
	IDEX: '0xb705268213d593b8fd88d3fdeff93aff5cbdcfae',
	NEC: '0xcc80c051057b774cd75067dc48f8987c4eb97a5e',
	SAND: '0x3845badade8e6dff049820680d1f14bd3903a5d0',
	MLN: '0xec67005c4e498ec7f55e092bd1d35cbc47c91892',
	CREAM: '0x2ba592f78db6436527729929aaf6c908497cb200',
	DPI: '0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b',
	tBTC: '0x8daebade922df735c38c80c7ebd708af50815faa',
	LOOM: '0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0',
	MX: '0x11eef04c884e24d9b7b4760e7476d06ddf797f36',
	KP3R: '0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44',
	AKRO: '0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
	REQ: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
	QSP: '0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d',
	MTA: '0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2',
	AST: '0x27054b13b1b798b345b591a4d22e6562d47ea75a',
	DUSD: '0x5bc25f649fc4e26069ddf4cf4010f9f706c23831',
	BTSE: '0x666d875c600aa06ac1cf15641361dec3b00432ef',
	DF: '0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0',
	DMG: '0xed91879919b71bb6905f23af0a68d231ecf87b14',
	KARMA: '0xdfe691f37b6264a90ff507eb359c45d55037951c',
	TKN: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a',
	PNT: '0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed',
	YAM: '0x0aacfbec6a24756c20d41914f2caba817c0d8521',
	AUDIO: '0x18aaa7115705e8be94bffebde57af9bfc265b998',
	GHST: '0x3f382dbd960e3a9bbceae22651e88158d2791550',
	SWRV: '0xb8baa0e4287890a5f79863ab62b7f175cecbd433',
	FOAM: '0x4946fcea7c692606e8908002e55a582af44ac121',
	LIEN: '0xab37e1358b639fd877f015027bb62d3ddaa7557e',
	PRE: '0xec213f83defb583af3a000b1c0ada660b1902a0f',
	GEN: '0x543ff227f64aa17ea132bf9886cab5db55dcaddf',
	JRT: '0x8a9c67fee641579deba04928c4bc45f66e26343a',
	MEME: '0xd5525d397898e5502075ea5e830d8914f6f0affe',
	BOND: '0x0391d2021f89dc339f60fff84546ea23e337750f',
	APY: '0x95a4492f028aa1fd432ea71146b433e7b4446611',
	INDEX: '0x0954906da0bf32d5479e25f46056d22f08464cab',
	DHT: '0xca1207647ff814039530d7d35df0e1dd2e91fa84',
	DOUGH: '0xad32a8e6220741182940c5abf610bde99e737b2d',
	HGET: '0x7968bc6a03017ea2de509aaa816f163db0f35148',
	BFT: '0x01ff50f8b7f74e4f00580d9596cd3d0d6d6e326f',
	ROOK: '0xfa5047c9c78b8877af97bdcb85db743fd7313d4a',
	YAMV2: '0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a',
	DFD: '0x20c36f062a31865bed8a5b1e512d9a1a20aa333a',
	BLT: '0x107c4504cd79c5d2696ea0030a8dd4e92601b82e',
	SLP: '0x37236cd05b34cc79d3715af2383e96dd7443dcf1',
	HYDRO: '0xebbdf302c940c6bfd49c6b165f457fdb324649bc',
	KRL: '0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0',
	RSV: '0x196f4727526ea7fb1e17b2071b3d8eaa38486988',
	HOT: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
	ADEL: '0x94d863173ee77439e4292284ff13fad54b3ba182',
	SOCKS: '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
	WAR: '0xf4a81c18816c9b0ab98fac51b36dcb63b0e58fde',
	'0xBTC': '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
	DONUT: '0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9',
	TTT: '0x9f599410d207f3d2828a8712e5e543ac2e040382',
	REPv2: '0x221657776846890989a759ba2973e427dff5c9bb',
	GNO: '0x6810e776880c02933d47db1b9fc05908e5386b96',
	AUC: '0xc12d099be31567add4e4e4d0d45691c3f58f5663',
	YAX: '0xb1dc9124c395c1e97773ab855d66e879f053a289',
	OCTO: '0x7240ac91f01233baaf8b064248e80feaa5912ba3',
	VALUE: '0x49e833337ece7afe375e44f4e3e8481029218e5c',
	SHROOM: '0xed0439eacf4c4965ae4613d77a5c2efe10e5f183',
	RGT: '0xd291e7a03283640fdc51b121ac401383a46cc623',
	SEED: '0x30cf203b48edaa42c3b4918e955fed26cd012a3f',
	WG0: '0xa10740ff9ff6852eac84cdcff9184e1d6d27c057',
	WOA: '0xec0a0915a7c3443862b678b0d4721c7ab133fdcf',
	UBXT: '0x8564653879a18c560e7c0ea0e084c516c62f5653',
	BEST: '0x1b073382e63411e3bcffe90ac1b9a43fefa1ec6f',
	TOMOE: '0x05d3606d5c81eb9b7b18530995ec9b29da05faba',
	HEZ: '0xeef9f339514298c6a857efcfc1a762af84438dee',
	PICKLE: '0x429881672b9ae42b8eba0e26cd9c73711b891ca5',
	ENCORE: '0xe0e4839e0c7b2773c58764f9ec3b9622d01a0428',
	YFIM: '0x2e2f3246b6c65ccc4239c9ee556ec143a7e5de2c',
	ORO: '0xc3eb2622190c57429aac3901808994443b64b466',
	XOR: '0x40fd72257597aa14c7231a7b1aaa29fce868f677',
	REN: '0x408e41876cccdc0f92210600ef50372656052a38',
	LRC: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
	CVP: '0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1',
	JUL: '0x5580ab97f226c324c671746a1787524aef42e415',
	KEEP: '0x85eee30c52b0b379b046fb0f85f4f3dc3009afec',
	RMPL: '0xe17f017475a709de58e976081eb916081ff4c9d5',
	OWL: '0x2a7f709ee001069771ceb6d42e85035f7d18e736',
	RARI: '0xfca59cd816ab1ead66534d82bc21e7515ce441cf',
	SUSHI: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
	BAO: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
	ORN: '0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a',
	CHARTEX: '0x1d37986f252d0e349522ea6c3b98cb935495e63e',
	XIO: '0x0f7f961648ae6db43c75663ac7e5414eb79b5704',
	YFL: '0x28cb7e841ee97947a86b06fa4090c8451f64c0be',
	SWAP: '0xcc4304a31d09258b0029ea7fe63d032f52e44efe',
	BUSD: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
	POLS: '0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa',
	HAUT: '0x3142dad33b1c6e1371d8627365f2ee2095eb6b37',
	ALMX: '0x25a3dcabbf0070cb8e5baaa62d576cf6643afb5b',
	CANDY: '0x50eb346fc29a80d97563a50146c3fcf9423b5538',
	COKE: '0xa3a3f076413a362bb0d69eea1dc5b0e79c831edc',
	BUGS: '0xbc3ec4e491b835dce394a53e9a9a10ac19564839',
	sDEFI: '0xe1afe1fd76fd88f78cbf599ea1846231b8ba3b6b',
	ALPHA: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
	WVG0: '0x25c7b64a93eb1261e130ec21a3e9918caa38b611',
	KP4R: '0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e',
	IDLE: '0x875773784af8135ea0ef43b5a374aad105c5d39e',
	PERP: '0xbc396689893d065f41bc2c6ecbee5e0085233447',
	ZAP: '0x6781a0f84c7e9e846dcb84a9a5bd49333067b104',
	COVER: '0x5d8d9f5b96f4438195be9b99eee6118ed4304286',
	CRE: '0x115ec79f1de567ec68b7ae7eda501b406626478e',
	L2: '0xbbff34e47e559ef680067a6b1c980639eeb64d24',
	DODO: '0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd',
	API3: '0x0b38210ea11411557c13457d4da7dc6ea731b88a',
	FRONT: '0xf8c3527cc04340b208c854e985240c02f7b7793f',
	SKL: '0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7',
	TRU: '0x4c19596f5aaff459fa38b0f7ed92f11ae6543784',
	DEXT: '0x26ce25148832c04f3d7f26f32478a9fe55197166',
	eXRD: '0x6468e79a80c0eab0f9a2b574c8d5bc374af59414',
	SFI: '0xb753428af26e81097e7fd17f40c88aaa3e04902c',
	RFOX: '0xa1d6df714f91debf4e0802a542e13067f31b8262',
	RAMP: '0x33d0568941c0c64ff7e0fb4fba0b11bd37deed9f',
	SYN: '0x1695936d6a953df699c38ca21c2140d497c08bd9',
	BASE: '0x07150e919b4de5fd6a63de1f9384828396f25fdc',
	BADGER: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
	xSUSHI: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
	GRT: '0xc944e90c64b2c07662a292be6244bdf05cda44a7',
	RUNE: '0x3155ba85d5f96b2d030a4966af206230e46849cb',
	FIDA: '0xf40d9507a7d4850c52a45698c9410e2c345f7a94',
	NTFX: '0x87d73e916d7057945c9bcd8cdd94e42a6f47f776',
	sETH: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
	ankrETH: '0xe95a203b1a91a908f9b9ce46459d101078c2c3cb',
	stETH: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
	INJ: '0xe28b3b32b6c345a34ff64674606124dd5aceca30',
	GRO: '0x09e64c2b61a5f1690ee6fbed9baf5d6990f8dfd0',
	TVK: '0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988',
	FRAX: '0x853d955acef822db058eb8505911ed77f175b99e',
	LDO: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
	BOR: '0x3c9d6c1c73b31c837832c72e04d3152f051fc1a9',
	'1Inch': '0x111111111117dc0aa78b770fa6a738034120c302',
}

export const contractAddresses = {
	bao: {
		1: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
		4: '0xE5AFBb49BeB7552a1167df6aAED70d88279787e8',
	},
	masterChef: {
		1: '0xBD530a1c060DC600b951f16dc656E4EA451d1A2D',
		4: '0xdA6CFdB12112309E4587D4a747a55E2970Eda4f3',
	},
	weth: {
		1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
		4: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
	},
	wethPrice: {
		1: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
		4: '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e',
	},
	baoPrice: {
		1: '0xb2AaEDe065D3ede8Db0C7C25DD69B2A0d0ee4Da3',
		4: '0x649AfCf002742cf93CbE1F8C3832FD05ACA2D8ea',
	},
}
//
/*
BAO Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
	{
		pid: 0,
		lpAddresses: {
			1: '0x9973bb0fe5f8df5de730776df09e946c74254fb3',
		},
		tokenAddresses: {
			1: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
		},
		tokenDecimals: 18,
		name: 'BAO PARTY',
		symbol: 'BAO-ETH UNIV2',
		tokenSymbol: 'BAO',
		icon: '/bao.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/BAO',
	},
	{
		pid: 200,
		lpAddresses: {
			1: '0x0eee7f7319013df1f24f5eaf83004fcf9cf49245',
		},
		tokenAddresses: {
			1: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
		},
		tokenDecimals: 18,
		name: 'BAO PARTYv2',
		symbol: 'BAO-ETH SLP',
		tokenSymbol: 'BAO',
		poolType: 'sushi',
		icon: '/bao.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/BAO',
	},
	{
		pid: 201,
		lpAddresses: {
			1: '0x072b999fc3d82f9ea08b8adbb9d63a980ff2b14d',
		},
		tokenAddresses: {
			1: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
		},
		denominatorAddresses: {
			1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		},
		tokenDecimals: 18,
		name: 'Bao/USDC',
		symbol: 'BAO-USDC SLP',
		tokenSymbol: 'BAO',
		denominatorSymbol: 'USDC',
		poolType: 'sushi',
		icon: '/bao.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/BAO',
	},
	{
		pid: 202,
		lpAddresses: {
			1: '0x3442801e0ddb9a6d06bc232d51725a658c8bfe10',
		},
		tokenAddresses: {
			1: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
		},
		denominatorAddresses: {
			1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
		},
		tokenDecimals: 18,
		name: 'Bao/YFI',
		symbol: 'BAO-YFI SLP',
		tokenSymbol: 'BAO',
		denominatorSymbol: 'YFI',
		poolType: 'sushi',
		icon: '/bao.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/BAO',
	},
	{
		pid: 203,
		lpAddresses: {
			1: '0xc599f66e20a8420894d980624671937d5d7e4ea5',
		},
		tokenAddresses: {
			1: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
		},
		denominatorAddresses: {
			1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
		},
		tokenDecimals: 18,
		name: 'Bao/Sushi',
		symbol: 'BAO-SUSHI SLP',
		tokenSymbol: 'BAO',
		denominatorSymbol: 'SUSHI',
		poolType: 'sushi',
		icon: '/bao.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/BAO',
	},
	{
		pid: 204,
		lpAddresses: {
			1: '0x28bfcf4385c8d32566d8a89a64b7c1e079cb81e6',
		},
		tokenAddresses: {
			1: '0x374cb8c27130e2c9e04f44303f3c8351b9de61c1',
		},
		denominatorAddresses: {
			1: '0x6b175474e89094c44da98b954eedeac495271d0f',
		},
		tokenDecimals: 18,
		name: 'Bao/Dai',
		symbol: 'BAO-DAI SLP',
		tokenSymbol: 'BAO',
		denominatorSymbol: 'DAI',
		poolType: 'sushi',
		icon: '/bao.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/BAO',
	},
	{
		pid: 205,
		lpAddresses: {
			1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
		},
		tokenAddresses: {
			1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
		},
		tokenDecimals: 18,
		name: "xSushi·A'la·mode",
		symbol: 'xSushi',
		tokenSymbol: 'xSushi',
		poolType: 'sushi',
		icon: '/simplysushi.png',
		refUrl:
			'https://sushiswap.fi/token/0x8798249c2e607446efb7ad49ec89dd1865ff4272',
	},
	{
		pid: 206,
		lpAddresses: {
			1: '0x321198908bd33b066252d63d363667e3f7094a34',
		},
		tokenAddresses: {
			1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
		},
		denominatorAddresses: {
			1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
		},
		tokenDecimals: 18,
		name: 'Sushi Boat',
		symbol: 'Sushi-xSushi SLP',
		tokenSymbol: 'SUSHI',
		denominatorSymbol: 'xSUSHI',
		poolType: 'sushi',
		icon: '/simplysushi.png',
		refUrl:
			'https://sushiswap.fi/token/0x8798249c2e607446efb7ad49ec89dd1865ff4272',
	},
	{
		pid: 207,
		lpAddresses: {
			1: '0x36e2fcccc59e5747ff63a03ea2e5c0c2c14911e7',
		},
		tokenAddresses: {
			1: '0x8798249c2e607446efb7ad49ec89dd1865ff4272',
		},
		tokenDecimals: 18,
		name: 'xSushi Maki',
		symbol: 'xSushi-ETH SLP',
		tokenSymbol: 'xSUSHI',
		poolType: 'sushi',
		icon: '/simplysushi.png',
		refUrl:
			'https://sushiswap.fi/token/0x8798249c2e607446efb7ad49ec89dd1865ff4272',
	},
	{
		pid: 208,
		lpAddresses: {
			1: '0x2e81ec0b8b4022fac83a21b2f2b4b8f5ed744d70',
		},
		tokenAddresses: {
			1: '0xc944e90c64b2c07662a292be6244bdf05cda44a7',
		},
		tokenDecimals: 18,
		name: 'GRT Gummies',
		symbol: 'GRT-ETH UNIV2',
		tokenSymbol: 'GRT',
		poolType: 'uni',
		icon: '/gummy-bear.png',
		refUrl: 'https://ftx.com/trade/GRT/USD#a=getbao',
	},
	{
		pid: 209,
		lpAddresses: {
			1: '0xcc39592f5cb193a70f262aa301f54db1d600e6da',
		},
		tokenAddresses: {
			1: '0x3155ba85d5f96b2d030a4966af206230e46849cb',
		},
		tokenDecimals: 18,
		name: 'Rune Ramen',
		symbol: 'RUNE-ETH SLP',
		tokenSymbol: 'RUNE',
		poolType: 'sushi',
		icon: '/ramennoodle.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/RUNE',
	},
	{
		pid: 210,
		lpAddresses: {
			1: '0x26aad2da94c59524ac0d93f6d6cbf9071d7086f2',
		},
		tokenAddresses: {
			1: '0x111111111117dc0aa78b770fa6a738034120c302',
		},
		tokenDecimals: 18,
		name: '1Inch Nibbles',
		symbol: '1INCH-ETH UNIV2',
		tokenSymbol: '1INCH',
		poolType: 'uni',
		icon: '/moon-cakers.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/1INCH',
	},
	{
		pid: 211,
		lpAddresses: {
			1: '0x1985b987c21d896080ebdbb69dafe82b0f9eb207',
		},
		tokenAddresses: {
			1: '0xf40d9507a7d4850c52a45698c9410e2c345f7a94',
		},
		tokenDecimals: 18,
		name: 'FIDA Fondant',
		symbol: 'FIDA-ETH UNIV2',
		tokenSymbol: 'FIDA',
		poolType: 'uni',
		icon: '/unicorncake.png',
		refUrl: 'https://ftx.com/trade/FIDA/USD#a=getbao',
	},
	{
		pid: 212,
		lpAddresses: {
			1: '0x31d64f9403e82243e71c2af9d8f56c7dbe10c178',
		},
		tokenAddresses: {
			1: '0x87d73e916d7057945c9bcd8cdd94e42a6f47f776',
		},
		tokenDecimals: 18,
		name: 'NFTX Nuggets',
		symbol: 'NFTX-ETH SLP',
		tokenSymbol: 'NFTX',
		poolType: 'sushi',
		icon: '/nuggets.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/NFTX',
	},
	{
		pid: 1,
		lpAddresses: {
			1: '0xbb2b8038a1640196fbe3e38816f3e67cba72d940',
		},
		tokenAddresses: {
			1: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
		},
		tokenDecimals: 8,
		name: 'wBTC Wraps',
		symbol: 'WBTC-ETH UNIV2',
		tokenSymbol: 'wBTC',
		icon: '/wrap.png',
		refUrl: 'https://www.binance.com/en/register?ref=NFBFR4AC',
	},
	{
		pid: 2,
		lpAddresses: {
			1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
		},
		tokenAddresses: {
			1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
		},
		tokenDecimals: 6,
		name: 'Tether Truffles',
		symbol: 'USDT-ETH UNIV2',
		tokenSymbol: 'USDT',
		icon: '/chocolate.png',
		refUrl: 'https://ftx.com/trade/USDT/USD#a=getbao',
	},
	{
		pid: 3,
		lpAddresses: {
			1: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
		},
		tokenAddresses: {
			1: '0x514910771af9ca656af840dff83e8264ecf986ca',
		},
		tokenDecimals: 18,
		name: 'Link Lunch',
		symbol: 'LINK-ETH UNIV2',
		tokenSymbol: 'LINK',
		icon: '/sandwich.png',
		refUrl: 'https://ftx.com/trade/LINK/USD#a=getbao',
	},
	{
		pid: 4,
		lpAddresses: {
			1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
		},
		tokenAddresses: {
			1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		},
		tokenDecimals: 6,
		name: 'USDC Crunch',
		symbol: 'USDC-ETH UNIV2',
		tokenSymbol: 'USDC',
		icon: '/cereals.png',
		refUrl: 'https://www.binance.com/en/register?ref=NFBFR4AC',
	},
	{
		pid: 5,
		lpAddresses: {
			1: '0x9896bd979f9da57857322cc15e154222c4658a5a',
		},
		tokenAddresses: {
			1: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
		},
		tokenDecimals: 8,
		name: 'cDAI Double-Wrap',
		symbol: 'cDAI-ETH UNIV2',
		tokenSymbol: 'cDAI',
		icon: '/wrap-double.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/cDAI',
	},
	{
		pid: 6,
		lpAddresses: {
			1: '0x17782d58c715aa2a4458d5fb1c1d8e52a69a62fc',
		},
		tokenAddresses: {
			1: '0x75231f58b43240c9718dd58b4967c5114342a86c',
		},
		tokenDecimals: 18,
		name: 'OKB Okra',
		symbol: 'OKB-ETH UNIV2',
		tokenSymbol: 'OKB',
		icon: '/okra.png',
		refUrl: 'https://ftx.com/trade/OKB/USD#a=createtrade',
	},
	{
		pid: 7,
		lpAddresses: {
			1: '0x523a36ad73c402e456f49b04f0fe8eba5a8c85cd',
		},
		tokenAddresses: {
			1: '0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3',
		},
		tokenDecimals: 18,
		name: 'Leo Lo Mai Gai',
		symbol: 'LEO-ETH UNIV2',
		tokenSymbol: 'LEO',
		icon: '/cake.png',
		refUrl: 'https://ftx.com/trade/LEO/USD#a=createtrade',
	},
	{
		pid: 8,
		lpAddresses: {
			1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
		},
		tokenAddresses: {
			1: '0x6b175474e89094c44da98b954eedeac495271d0f',
		},
		tokenDecimals: 18,
		name: 'Dai Dan Tat',
		symbol: 'DAI-ETH UNIV2',
		tokenSymbol: 'DAI',
		icon: '/egg-tart.png',
		refUrl:
			'https://www.aex.plus/page/m_regist.html#/?invite_code=765759&invite_type=10',
	},
	{
		pid: 9,
		lpAddresses: {
			1: '0xd3d2e2692501a5c9ca623199d38826e513033a17',
		},
		tokenAddresses: {
			1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
		},
		tokenDecimals: 18,
		name: 'Uni Unagi',
		symbol: 'UNI-ETH UNIV2',
		tokenSymbol: 'UNI',
		icon: '/unagi.png',
		refUrl: 'https://ftx.com/trade/UNI/USD#a=createtrade',
	},
	{
		pid: 10,
		lpAddresses: {
			1: '0x26ce49c08ee71aff0c43db8f8b9bea950b6cdc67',
		},
		tokenAddresses: {
			1: '0x6f259637dcd74c767781e37bc6133cd6a68aa161',
		},
		tokenDecimals: 18,
		name: 'Huobi Har Gow',
		symbol: 'HT-ETH UNIV2',
		tokenSymbol: 'HT',
		icon: '/shrimp.png',
		refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33',
	},
	{
		pid: 11,
		lpAddresses: {
			1: '0xdfc14d2af169b0d36c4eff567ada9b2e0cae044f',
		},
		tokenAddresses: {
			1: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
		},
		tokenDecimals: 18,
		name: 'Aave Appetizer',
		symbol: 'AAVE-ETH UNIV2',
		tokenSymbol: 'AAVE',
		icon: '/appetizer.png',
		refUrl: 'https://app.aave.com/?referral=108',
	},
	{
		pid: 12,
		lpAddresses: {
			1: '0xa5e79baee540f000ef6f23d067cd3ac22c7d9fe6',
		},
		tokenAddresses: {
			1: '0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d',
		},
		tokenDecimals: 4,
		name: 'Celcius Compote',
		symbol: 'CEL-ETH UNIV2',
		tokenSymbol: 'CEL',
		icon: '/apple-jam.png',
		refUrl: 'https://www.hoozh.com/friends/26368269?localeLang=en&',
	},
	{
		pid: 13,
		lpAddresses: {
			1: '0x43ae24960e5534731fc831386c07755a2dc33d47',
		},
		tokenAddresses: {
			1: '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f',
		},
		tokenDecimals: 18,
		name: 'Synthetix Snacks',
		symbol: 'SNX-ETH UNIV2',
		tokenSymbol: 'SNX',
		icon: '/snack.png',
		refUrl: 'https://ftx.com/trade/UNI/USD#a=createtrade',
	},
	{
		pid: 14,
		lpAddresses: {
			1: '0x3da1313ae46132a397d90d95b1424a9a7e3e0fce',
		},
		tokenAddresses: {
			1: '0xd533a949740bb3306d119cc777fa900ba034cd52',
		},
		tokenDecimals: 18,
		name: 'Curve Custard',
		symbol: 'CRV-ETH UNIV2',
		tokenSymbol: 'CRV',
		icon: '/custard.png',
		refUrl: 'https://www.okex.com/join/3/1914410',
	},
	{
		pid: 15,
		lpAddresses: {
			1: '0x2fdbadf3c4d5a8666bc06645b8358ab803996e28',
		},
		tokenAddresses: {
			1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
		},
		tokenDecimals: 18,
		name: 'YFI Youtiao',
		symbol: 'YFI-ETH UNIV2',
		tokenSymbol: 'YFI',
		icon: '/churros.png',
		refUrl: 'https://phemex.com/bonus?group=737&referralCode=BVJCQ',
	},
	{
		pid: 16,
		lpAddresses: {
			1: '0xcffdded873554f362ac02f8fb1f02e5ada10516f',
		},
		tokenAddresses: {
			1: '0xc00e94cb662c3520282e6f5717214004a7f26888',
		},
		tokenDecimals: 18,
		name: 'Compound Congee',
		symbol: 'COMP-ETH UNIV2',
		tokenSymbol: 'COMP',
		icon: '/congee.png',
		refUrl: 'https://ftx.com/trade/COMP-PERP#a=createtrade',
	},
	{
		pid: 17,
		lpAddresses: {
			1: '0xc2adda861f89bbb333c90c492cb837741916a225',
		},
		tokenAddresses: {
			1: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
		},
		tokenDecimals: 18,
		name: 'Maker Mooncake',
		symbol: 'MKR-ETH UNIV2',
		tokenSymbol: 'MKR',
		icon: '/moon-cake.png',
		refUrl: 'https://ftx.com/trade/MKR-PERP#a=createtrade',
	},
	{
		pid: 18,
		lpAddresses: {
			1: '0x88d97d199b9ed37c29d846d00d443de980832a22',
		},
		tokenAddresses: {
			1: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
		},
		tokenDecimals: 18,
		name: 'Uma Umami',
		symbol: 'UMA-ETH UNIV2',
		tokenSymbol: 'UMA',
		icon: '/mushroom.png',
		refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33',
	},
	{
		pid: 19,
		lpAddresses: {
			1: '0xf04543fbf20daee9b0357db966428ef2a4ae0f5a',
		},
		tokenAddresses: {
			1: '0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9',
		},
		tokenDecimals: 18,
		name: 'FTX Fried Tofu (Vege!)',
		symbol: 'FTT-ETH UNIV2',
		tokenSymbol: 'FTT',
		icon: '/tofu.png',
		refUrl: 'https://ftx.com/trade/FTT/USD#a=createtrade',
	},
	{
		pid: 20,
		lpAddresses: {
			1: '0x81fbef4704776cc5bba0a5df3a90056d2c6900b3',
		},
		tokenAddresses: {
			1: '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d',
		},
		tokenDecimals: 8,
		name: 'RenBTC Red Bean Soup',
		symbol: 'RENBTC-ETH UNIV2',
		tokenSymbol: 'RENBTC',
		icon: '/soup.png',
		refUrl: 'https://virgox.com/login/register?code=gxkb7dva',
	},
	{
		pid: 21,
		lpAddresses: {
			1: '0xb6909b960dbbe7392d405429eb2b3649752b4838',
		},
		tokenAddresses: {
			1: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
		},
		tokenDecimals: 18,
		name: 'Brave Braised Pork',
		symbol: 'BAT-ETH UNIV2',
		tokenSymbol: 'BAT',
		icon: '/beef.png',
		refUrl: 'https://www.decoin.io/?ref=56336',
	},
	{
		pid: 22,
		lpAddresses: {
			1: '0xb4d0d9df2738abe81b87b66c80851292492d1404',
		},
		tokenAddresses: {
			1: '0x0000000000085d4780b73119b644ae5ecd22b376',
		},
		tokenDecimals: 18,
		name: 'TUSD Tea Egg',
		symbol: 'TUSD-ETH UNIV2',
		tokenSymbol: 'TUSD',
		icon: '/boiled-egg.png',
		refUrl: 'https://www.digifinex.com/en-ww/from/v7D3UM?channelCode=ljaUPp',
	},
	{
		pid: 23,
		lpAddresses: {
			1: '0x8749068c5b45fdaa369319e5daa1e5f332419c6d',
		},
		tokenAddresses: {
			1: '0xdf574c24545e5ffecb9a659c229253d4111d87e1',
		},
		tokenDecimals: 8,
		name: 'HUSD Hot Pot',
		symbol: 'HUSD-ETH UNIV2',
		tokenSymbol: 'HUSD',
		icon: '/chinese-food.png',
		urlRef: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33',
	},
	{
		pid: 24,
		lpAddresses: {
			1: '0xc6f348dd3b91a56d117ec0071c1e9b83c0996de4',
		},
		tokenAddresses: {
			1: '0xe41d2489571d322189246dafa5ebde1f4699f498',
		},
		tokenDecimals: 18,
		name: '0x Ox Tail',
		symbol: 'ZRX-ETH UNIV2',
		tokenSymbol: 'ZRX',
		icon: '/meat.png',
		urlRef: 'https://nominex.io/?r=33642',
	},
	{
		pid: 25,
		lpAddresses: {
			1: '0x3343d8fd46ba0469db160a82386a826214cefcb6',
		},
		tokenAddresses: {
			1: '0x3a3a65aab0dd2a17e3f1947ba16138cd37d08c04',
		},
		tokenDecimals: 18,
		name: 'Aave ETH Aperitif',
		symbol: 'aETH-ETH UNIV2',
		tokenSymbol: 'aETH',
		icon: '/cocktail.png',
		urlRef: 'https://app.aave.com/?referral=108',
	},
	{
		pid: 26,
		lpAddresses: {
			1: '0x9b7dad79fc16106b47a3dab791f389c167e15eb0',
		},
		tokenAddresses: {
			1: '0x967da4048cd07ab37855c090aaf366e4ce1b9f48',
		},
		tokenDecimals: 18,
		name: 'Ocean Orange Chicken',
		symbol: 'OCEAN-ETH UNIV2',
		tokenSymbol: 'OCEAN',
		icon: '/orange-chicken.png',
		urlRef: 'https://www.kucoin.com/ucenter/signup?rcode=Ptuf31',
	},
	{
		pid: 27,
		lpAddresses: {
			1: '0xf49c43ae0faf37217bdcb00df478cf793edd6687',
		},
		tokenAddresses: {
			1: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200',
		},
		tokenDecimals: 18,
		name: 'Kyber Kung Pao Chicken',
		symbol: 'KNC-ETH UNIV2',
		tokenSymbol: 'KNC',
		icon: '/kung-pao-chicken.png',
		refUrl: 'https://ftx.com/trade/KNC-PERP#a=createtrade',
	},
	{
		pid: 28,
		lpAddresses: {
			1: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
		},
		tokenAddresses: {
			1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
		},
		tokenDecimals: 9,
		name: 'AMPL Almond Chicken',
		symbol: 'AMPL-ETH UNIV2',
		tokenSymbol: 'AMPL',
		icon: '/chicken-rice.png',
		refUrl: 'https://ftx.com/trade/AMPL-PERP#a=createtrade',
	},
	{
		pid: 29,
		lpAddresses: {
			1: '0x23bff8ca20aac06efdf23cee3b8ae296a30dfd27',
		},
		tokenAddresses: {
			1: '0x0d438f3b5175bebc262bf23753c1e53d03432bde',
		},
		tokenDecimals: 18,
		name: '(w)NXM Naihuang BAO',
		symbol: 'wNXM-ETH UNIV2',
		tokenSymbol: 'wNXM',
		icon: '/bun.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 30,
		lpAddresses: {
			1: '0xba65016890709dbc9491ca7bf5de395b8441dc8b',
		},
		tokenAddresses: {
			1: '0x8762db106b2c2a0bccb3a80d1ed41273552616e8',
		},
		tokenDecimals: 18,
		name: 'Reserve Ragout',
		symbol: 'RSR-ETH UNIV2',
		tokenSymbol: 'RSR',
		icon: '/stew.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 31,
		lpAddresses: {
			1: '0xe56c60b5f9f7b5fc70de0eb79c6ee7d00efa2625',
		},
		tokenAddresses: {
			1: '0x8762db106b2c2a0bccb3a80d1ed41273552616e8',
		},
		tokenDecimals: 18,
		name: 'Enjin Egg',
		symbol: 'ENJ-ETH UNIV2',
		tokenSymbol: 'ENJ',
		icon: '/egg.png',
		refUrl: 'https://crypto.com/exch/93x4g2q4zk',
	},
	{
		pid: 32,
		lpAddresses: {
			1: '0xf421c3f2e695c2d4c0765379ccace8ade4a480d9',
		},
		tokenAddresses: {
			1: '0xba11d00c5f74255f56a5e366f4f77f5a186d7f55',
		},
		tokenDecimals: 18,
		name: 'Band Bird Nest Soup',
		symbol: 'BAND-ETH UNIV2',
		tokenSymbol: 'BAND',
		icon: '/bird-nest.png',
		refUrl: 'https://coinsbit.io/referral/fdfdc261-0d2c-4681-8878-5915c74af58e',
	},
	{
		pid: 33,
		lpAddresses: {
			1: '0xb784ced6994c928170b417bbd052a096c6fb17e2',
		},
		tokenAddresses: {
			1: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671',
		},
		tokenDecimals: 18,
		name: 'NMR Niurou Wan',
		symbol: 'NMR-ETH UNIV2',
		tokenSymbol: 'NMR',
		icon: '/meatballs.png',
		refUrl: 'https://www.digifinex.com/en-ww/from/?channelCode=ljaUPp',
	},
	{
		pid: 34,
		lpAddresses: {
			1: '0xa70d458a4d9bc0e6571565faee18a48da5c0d593',
		},
		tokenAddresses: {
			1: '0xba100000625a3754423978a60c9317c58a424e3d',
		},
		tokenDecimals: 18,
		name: 'Balancer Bento',
		symbol: 'BAL-ETH UNIV2',
		tokenSymbol: 'BAL',
		icon: '/bento.png',
		refUrl: 'https://ftx.com/trade/BAL-PERP#a=createtrade',
	},
	{
		pid: 35,
		lpAddresses: {
			1: '0x2615b89ad032ccda6d67e1d511f0e4c9e3a5dc13',
		},
		tokenAddresses: {
			1: '0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206',
		},
		tokenDecimals: 18,
		name: 'Nexo Noodles',
		symbol: 'NEXO-ETH UNIV2',
		tokenSymbol: 'NEXO',
		icon: '/noodles.png',
		refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33',
	},
	{
		pid: 36,
		lpAddresses: {
			1: '0x9def9511fec79f83afcbffe4776b1d817dc775ae',
		},
		tokenAddresses: {
			1: '0xa117000000f279d81a1d3cc75430faa017fa5a2e',
		},
		tokenDecimals: 18,
		name: 'Aragon Apple KitKats',
		symbol: 'ANT-ETH UNIV2',
		tokenSymbol: 'ANT',
		poolType: 'archived',
		icon: '/apple-chocolate.png',
		refUrl:
			'https://www.aex.plus/page/m_regist.html#/?invite_code=765759&invite_type=10',
	},
	{
		pid: 37,
		lpAddresses: {
			1: '0x11b1f53204d03e5529f09eb3091939e4fd8c9cf3',
		},
		tokenAddresses: {
			1: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
		},
		tokenDecimals: 18,
		name: 'Mana Miantiao',
		symbol: 'MANA-ETH UNIV2',
		tokenSymbol: 'MANA',
		poolType: 'archived',
		icon: '/Miantiao.png',
		refUrl: 'https://virgox.com/login/register?code=gxkb7dva',
	},
	{
		pid: 38,
		lpAddresses: {
			1: '0x59e7bee6374a3f6ecb33180ece978fd4f2b7cea2',
		},
		tokenAddresses: {
			1: '0x744d70fdbe2ba4cf95131626614a1763df805b9e',
		},
		tokenDecimals: 18,
		name: 'Status Soy Egg',
		symbol: 'SNT-ETH UNIV2',
		tokenSymbol: 'SNT',
		icon: '/soyegg.png',
		refUrl: 'https://www.bitfinex.com/?refcode=2f96mAtkD',
	},
	{
		pid: 39,
		lpAddresses: {
			1: '0x88ff79eb2bc5850f27315415da8685282c7610f9',
		},
		tokenAddresses: {
			1: '0x36f3fd68e7325a35eb768f1aedaae9ea0689d723',
		},
		denominatorAddresses: {
			1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		},
		tokenDecimals: 18,
		name: 'Empty Set Dollar Empty Bowl',
		symbol: 'ESD-USDC UNIV2',
		tokenSymbol: 'ESD',
		denominatorSymbol: 'USDC',
		icon: '/bowl.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 40,
		lpAddresses: {
			1: '0x9346c20186d1794101b8517177a1b15c49c9ff9b',
		},
		tokenAddresses: {
			1: '0x5dbcf33d8c2e976c6b560249878e6f1491bca25c',
		},
		tokenDecimals: 18,
		name: 'yVault Youtiao',
		symbol: 'yUSD-ETH UNIV2',
		tokenSymbol: 'yUSD',
		icon: '/churros.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/yyCurve',
	},
	{
		pid: 41,
		lpAddresses: {
			1: '0x819f3450da6f110ba6ea52195b3beafa246062de',
		},
		tokenAddresses: {
			1: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
		},
		tokenDecimals: 18,
		name: 'Matic Mandarin Fish',
		symbol: 'MATIC-ETH UNIV2',
		tokenSymbol: 'MATIC',
		icon: '/fish.png',
		refUrl: 'https://ftx.com/trade/MATIC-PERP#a=createtrade',
	},
	{
		pid: 42,
		lpAddresses: {
			1: '0x9c4fe5ffd9a9fc5678cfbd93aa2d4fd684b67c4c',
		},
		tokenAddresses: {
			1: '0x45804880de22913dafe09f4980848ece6ecbaf78',
		},
		tokenDecimals: 18,
		name: 'PAXG Pheonix Claws',
		symbol: 'PAXG-ETH UNIV2',
		tokenSymbol: 'PAXG',
		icon: '/chicken.png',
		refUrl: 'https://ftx.com/trade/PAXG-PERP#a=createtrade',
	},
	{
		pid: 43,
		lpAddresses: {
			1: '0x359c138b1666aa2167aafc205a841ff432a23040',
		},
		tokenAddresses: {
			1: '0xe66747a101bff2dba3697199dcce5b743b454759',
		},
		tokenDecimals: 18,
		name: 'Gate.io Gulaorou',
		symbol: 'GT-ETH UNIV2',
		tokenSymbol: 'GT',
		icon: '/sweetpork.png',
		refUrl: 'https://www.gate.io/ref/3066658',
	},
	{
		pid: 44,
		lpAddresses: {
			1: '0xac317d14738a454ff20b191ba3504aa97173045b',
		},
		tokenAddresses: {
			1: '0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9',
		},
		tokenDecimals: 18,
		name: 'SXP Suan La Tang',
		symbol: 'SXP-ETH UNIV2',
		tokenSymbol: 'SXP',
		icon: '/hotsour.png',
		refUrl: 'https://ftx.com/trade/SXP-PERP#a=createtrade',
	},
	{
		pid: 45,
		lpAddresses: {
			1: '0xec2d2240d02a8cf63c3fa0b7d2c5a3169a319496',
		},
		tokenAddresses: {
			1: '0x1985365e9f78359a9b6ad760e32412f4a445e862',
		},
		tokenDecimals: 18,
		name: 'Rep Ruge',
		symbol: 'REP-ETH UNIV2',
		tokenSymbol: 'REP',
		icon: '/plum.png',
		refUrl: 'https://www.digifinex.com/en-ww/from/?channelCode=ljaUPp',
	},
	{
		pid: 46,
		lpAddresses: {
			1: '0x123fca7e8272a8e9c3bb7113c259abc4901e792b',
		},
		tokenAddresses: {
			1: '0x41e5560054824ea6b0732e656e3ad64e20e94e45',
		},
		tokenDecimals: 8,
		name: 'Civic Chaofan',
		symbol: 'CVC-ETH UNIV2',
		tokenSymbol: 'CVC',
		poolType: 'archived',
		icon: '/fried-rice.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 47,
		lpAddresses: {
			1: '0x1273ad5d8f3596a7a39efdb5a4b8f82e8f003fc3',
		},
		tokenAddresses: {
			1: '0x584bc13c7d411c00c01a62e8019472de68768430',
		},
		tokenDecimals: 18,
		name: 'Hegic Hom Sui Gok',
		symbol: 'HEGIC-ETH UNIV2',
		tokenSymbol: 'HEGIC',
		icon: '/dumpling.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 48,
		lpAddresses: {
			1: '0x4f9356293dda89a31a924fe1f867825b3adda4d8',
		},
		tokenAddresses: {
			1: '0x039B5649A59967e3e936D7471f9c3700100Ee1ab',
		},
		denominatorAddresses: {
			1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		},
		tokenDecimals: 6,
		name: 'wFIL/USDC Flaming Crab',
		symbol: 'wFIL-USDC BAO',
		tokenSymbol: 'wFIL',
		denominatorSymbol: 'USDC',
		poolType: 'archived',
		icon: '/crab.png',
		refUrl:
			'https://app.uniswap.org/#/swap?inputCurrency=0x6e1a19f235be7ed8e3369ef73b196c07257494de&outputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
	},
	{
		pid: 49,
		lpAddresses: {
			1: '0xa6f4eae7fdaa20e632c45d4cd39e4f3961892322',
		},
		tokenAddresses: {
			1: '0x0316eb71485b0ab14103307bf65a021042c6d380',
		},
		tokenDecimals: 18,
		name: 'HBTC Har Cheung',
		symbol: 'HBTC-ETH UNIV2',
		tokenSymbol: 'HBTC',
		icon: '/egg-rolls.png',
		refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33',
	},
	{
		pid: 50,
		lpAddresses: {
			1: '0xf3ea2100e1b85772b76e342c955e22a01c970b8a',
		},
		tokenAddresses: {
			1: '0x35a18000230da775cac24873d00ff85bccded550',
		},
		tokenDecimals: 8,
		name: 'cUni Clams',
		symbol: 'cUNI-ETH UNIV2',
		tokenSymbol: 'cUNI',
		icon: '/cockles.png',
		refUrl: 'https://app.compound.finance/',
	},
	{
		pid: 51,
		lpAddresses: {
			1: '0x42d52847be255eacee8c3f96b3b223c0b3cc0438',
		},
		tokenAddresses: {
			1: '0xd13c7342e1ef687c5ad21b27c2b65d772cab5c8c',
		},
		tokenDecimals: 4,
		name: 'UOS Urchin',
		symbol: 'UOS-ETH UNIV2',
		tokenSymbol: 'UOS',
		icon: '/sea-urchin.png',
		refUrl: 'https://bitmax.io/register?inviteCode=MCTXZDRU',
	},
	{
		pid: 52,
		lpAddresses: {
			1: '0xc0fc2e4cbaf48b36948971c4afd487a90272ddfe',
		},
		tokenAddresses: {
			1: '0xdc9ac3c20d1ed0b540df9b1fedc10039df13f99c',
		},
		tokenDecimals: 18,
		name: 'UTrust Udon',
		symbol: 'UTK-ETH UNIV2',
		tokenSymbol: 'UTK',
		icon: '/instant-noodles.png',
		refUrl: 'https://www.digifinex.com/en-ww/from/?channelCode=ljaUPp',
	},
	{
		pid: 53,
		lpAddresses: {
			1: '0xd045110c466ccb2e57eb426baae7ce869458f173',
		},
		tokenAddresses: {
			1: '0xd98f75b1a3261dab9eed4956c93f33749027a964',
		},
		tokenDecimals: 2,
		name: 'SHR Siu Mai',
		symbol: 'SHR-ETH UNIV2',
		tokenSymbol: 'SHR',
		icon: '/dim-sum.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 54,
		lpAddresses: {
			1: '0x8f8d924ce28e33227be5162577c9fae6b76e08e0',
		},
		tokenAddresses: {
			1: '0x3a8cccb969a61532d1e6005e2ce12c200caece87',
		},
		tokenDecimals: 18,
		name: 'Titan Tea',
		symbol: 'TITAN-ETH UNIV2',
		tokenSymbol: 'TITAN',
		poolType: 'archived',
		icon: '/hot-green-tea.png',
		refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33',
	},
	{
		pid: 55,
		lpAddresses: {
			1: '0x4d96369002fc5b9687ee924d458a7e5baa5df34e',
		},
		tokenAddresses: {
			1: '0x8888801af4d980682e47f1a9036e589479e835c5',
		},
		tokenDecimals: 18,
		name: '88mph Chilis',
		symbol: 'MPH-ETH UNIV2',
		tokenSymbol: 'MPH',
		icon: '/chili.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 56,
		lpAddresses: {
			1: '0xf80758ab42c3b07da84053fd88804bcb6baa4b5c',
		},
		tokenAddresses: {
			1: '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
		},
		tokenDecimals: 18,
		name: 'sUSD Sticky Rice',
		symbol: 'sUSD-ETH UNIV2',
		tokenSymbol: 'sUSD',
		icon: '/sticky-rice.png',
		refUrl: 'https://virgox.com/login/register?code=gxkb7dva',
	},
	{
		pid: 57,
		lpAddresses: {
			1: '0x3006c0d2a6e54d3590a44384c6f066c9cf9a4cea',
		},
		tokenAddresses: {
			1: '0x08d967bb0134f2d07f7cfb6e246680c53927dd30',
		},
		tokenDecimals: 18,
		name: 'Math Mapo Tofu',
		symbol: 'MATH-ETH UNIV2',
		tokenSymbol: 'MATH',
		icon: '/mapo-tofu.png',
		refUrl: 'https://ftx.com/trade/MATH/USD#a=createtrade',
	},
	{
		pid: 58,
		lpAddresses: {
			1: '0xcc3d1ecef1f9fd25599dbea2755019dc09db3c54',
		},
		tokenAddresses: {
			1: '0x476c5e26a75bd202a9683ffd34359c0cc15be0ff',
		},
		tokenDecimals: 6,
		name: 'SRM Springrolls (Vegan)',
		symbol: 'SRM-ETH UNIV2',
		tokenSymbol: 'SRM',
		icon: '/spring-rolls.png',
		refUrl: 'https://ftx.com/trade/SRM/USD#a=createtrade',
	},
	{
		pid: 59,
		lpAddresses: {
			1: '0xa249e650737af19a294ef4b5ace26394b8287a24',
		},
		tokenAddresses: {
			1: '0xb3319f5d18bc0d84dd1b4825dcde5d5f7266d407',
		},
		tokenDecimals: 8,
		name: 'c0x 0x Tongue',
		symbol: 'c0x-ETH UNIV2',
		tokenSymbol: 'c0x',
		icon: '/bacon.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/cZRX',
	},
	{
		pid: 60,
		lpAddresses: {
			1: '0x70ea56e46266f0137bac6b75710e3546f47c855d',
		},
		tokenAddresses: {
			1: '0xb4efd85c19999d84251304bda99e90b92300bd93',
		},
		tokenDecimals: 18,
		name: 'Rocketpool Roe',
		symbol: 'RPL-ETH UNIV2',
		tokenSymbol: 'RPL',
		icon: '/caviar.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/RPL',
	},
	{
		pid: 61,
		lpAddresses: {
			1: '0xaef16913b6c50ebcf627a394921f306985fc8604',
		},
		tokenAddresses: {
			1: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
		},
		tokenDecimals: 8,
		name: 'Storj Siu Luhng Bao',
		symbol: 'STORJ-ETH UNIV2',
		tokenSymbol: 'STORJ',
		poolType: 'archived',
		icon: '/xiao-long-bao.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/STORJ',
	},
	{
		pid: 62,
		lpAddresses: {
			1: '0x3fd4cf9303c4bc9e13772618828712c8eac7dd2f',
		},
		tokenAddresses: {
			1: '0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c',
		},
		tokenDecimals: 18,
		name: 'Bancor Black Bean Sauce',
		symbol: 'BNT-ETH UNIV2',
		tokenSymbol: 'BNT',
		icon: '/soy-sauce.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 63,
		lpAddresses: {
			1: '0x5201883feeb05822ce25c9af8ab41fc78ca73fa9',
		},
		tokenAddresses: {
			1: '0x8290333cef9e6d528dd5618fb97a76f268f3edd4',
		},
		tokenDecimals: 18,
		name: 'Ankr Almond Soo Guy',
		symbol: 'ANKR-ETH UNIV2',
		tokenSymbol: 'ANKR',
		icon: '/fried-chicken.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 64,
		lpAddresses: {
			1: '0xb27de0ba2abfbfdf15667a939f041b52118af5ba',
		},
		tokenAddresses: {
			1: '0x8400d94a5cb0fa0d041a3788e395285d61c9ee5e',
		},
		tokenDecimals: 8,
		name: 'UBT Umeboshi',
		symbol: 'UBT-ETH UNIV2',
		tokenSymbol: 'UBT',
		icon: '/dried-fruit.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 65,
		lpAddresses: {
			1: '0x1ffc57cada109985ad896a69fbcebd565db4290e',
		},
		tokenAddresses: {
			1: '0x4e15361fd6b4bb609fa63c81a2be19d873717870',
		},
		tokenDecimals: 18,
		name: 'FTM Fong Djau',
		symbol: 'FTM-ETH UNIV2',
		tokenSymbol: 'FTM',
		icon: '/chicken.png',
		refUrl: 'https://www.digifinex.com/en-ww/from/?channelCode=ljaUPp',
	},
	{
		pid: 66,
		lpAddresses: {
			1: '0x3d2d3c4446e8a82445418523b9b5b376765e55a8',
		},
		tokenAddresses: {
			1: '0x8eb24319393716668d768dcec29356ae9cffe285',
		},
		tokenDecimals: 8,
		name: 'AGI Avocado',
		symbol: 'AGI-ETH UNIV2',
		tokenSymbol: 'AGI',
		icon: '/avocado.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/AGI',
	},
	{
		pid: 67,
		lpAddresses: {
			1: '0xc03c6f5d6c5bf2959a4e74e10fd916b5b50bf102',
		},
		tokenAddresses: {
			1: '0x9992ec3cf6a55b00978cddf2b27bc6882d88d1ec',
		},
		tokenDecimals: 18,
		name: 'Polymath Pai Gwut',
		symbol: 'POLY-ETH UNIV2',
		tokenSymbol: 'POLY',
		icon: '/spareribs.png',
		refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33',
	},
	{
		pid: 68,
		lpAddresses: {
			1: '0xa6be7f7c6c454b364cda446ea39be9e5e4369de8',
		},
		tokenAddresses: {
			1: '0xbf2179859fc6d5bee9bf9158632dc51678a4100e',
		},
		tokenDecimals: 18,
		name: 'Elf Eggplant (Stuffed)',
		symbol: 'ELF-ETH UNIV2',
		tokenSymbol: 'ELF',
		poolType: 'archived',
		icon: '/eggplant.png',
		refUrl: 'https://www.digifinex.com/en-ww/from/?channelCode=ljaUPp',
	},
	{
		pid: 69,
		lpAddresses: {
			1: '0xb062fcbb48154fd385f104b38a2f9f3ffd82ffe0',
		},
		tokenAddresses: {
			1: '0x0abdace70d3790235af448c88547603b945604ea',
		},
		tokenDecimals: 18,
		name: 'DNT Djing Lahp Cheung Goon',
		symbol: 'DNT-ETH UNIV2',
		tokenSymbol: 'DNT',
		icon: '/sausage.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/DNT',
	},
	{
		pid: 70,
		lpAddresses: {
			1: '0x343fd171caf4f0287ae6b87d75a8964dc44516ab',
		},
		tokenAddresses: {
			1: '0x93ed3fbe21207ec2e8f2d3c3de6e058cb73bc04d',
		},
		tokenDecimals: 18,
		name: 'PNK Pad Thai',
		symbol: 'PNK-ETH UNIV2',
		tokenSymbol: 'PNK',
		icon: '/pad-thai.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 71,
		lpAddresses: {
			1: '0xd64224a4c2bed96c75df9517b2d77aebb13f0e37',
		},
		tokenAddresses: {
			1: '0x4bd70556ae3f8a6ec6c4080a0c327b24325438f3',
		},
		tokenDecimals: 18,
		name: 'HXRO Har Cheung',
		symbol: 'HXRO-ETH UNIV2',
		tokenSymbol: 'HXRO',
		icon: '/harcheung.png',
		refUrl: 'https://ftx.com/trade/HXRO/USD#a=createtrade',
	},
	{
		pid: 72,
		lpAddresses: {
			1: '0x70258aa9830c2c84d855df1d61e12c256f6448b4',
		},
		tokenAddresses: {
			1: '0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5',
		},
		tokenDecimals: 18,
		name: 'Trellor Tripe',
		symbol: 'TRB-ETH UNIV2',
		tokenSymbol: 'TRB',
		icon: '/meats.png',
		refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33',
	},
	{
		pid: 73,
		lpAddresses: {
			1: '0x5d81b25054833fdfa023a1c46ad9dc2cdb8eaddf',
		},
		tokenAddresses: {
			1: '0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3',
		},
		tokenDecimals: 18,
		name: 'NPXS Noodle Soup',
		symbol: 'NPXS-ETH UNIV2',
		tokenSymbol: 'NPXS',
		icon: '/noodlesoup.png',
		refUrl: 'https://www.digifinex.com/en-ww/from/?channelCode=ljaUPp',
	},
	{
		pid: 74,
		lpAddresses: {
			1: '0x2590f6b37796f192a93db7206b7b6158e89c9e5e',
		},
		tokenAddresses: {
			1: '0x4a64515e5e1d1073e83f30cb97bed20400b66e10',
		},
		denominatorAddresses: {
			1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		},
		tokenDecimals: 18,
		name: '(w)ZEC Zhaziji',
		symbol: 'wZEC-USDC BAO',
		tokenSymbol: 'ZB',
		denominatorSymbol: 'USDC',
		poolType: 'archived',
		icon: '/zhaziji.png',
		refUrl:
			'https://app.uniswap.org/#/swap?inputCurrency=0x4a64515e5e1d1073e83f30cb97bed20400b66e10',
	},
	{
		pid: 75,
		lpAddresses: {
			1: '0x32ce7e48debdccbfe0cd037cc89526e4382cb81b',
		},
		tokenAddresses: {
			1: '0x62359ed7505efc61ff1d56fef82158ccaffa23d7',
		},
		tokenDecimals: 18,
		name: 'Core Cha Siu Bao',
		symbol: 'CORE-ETH UNIV2',
		tokenSymbol: 'CORE',
		icon: '/buns.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/CORE',
	},
	{
		pid: 76,
		lpAddresses: {
			1: '0xfa28af6be3649e90ed76b8269db65b236f716fbe',
		},
		tokenAddresses: {
			1: '0xe2f2a5c287993345a840db3b0845fbc70f5935a5',
		},
		tokenDecimals: 18,
		name: 'mUSD Meatballs',
		symbol: 'mUSD-ETH UNIV2',
		tokenSymbol: 'mUSD',
		icon: '/meatball.png',
		refUrl: 'https://virgox.com/login/register?code=gxkb7dva',
	},
	{
		pid: 77,
		lpAddresses: {
			1: '0x7cc34ea5d7103d01b76e0dccf1ddad9f376801e9',
		},
		tokenAddresses: {
			1: '0xdb25f211ab05b1c97d595516f45794528a807ad8',
		},
		tokenDecimals: 2,
		name: 'EURS Eclairs',
		symbol: 'EURS-ETH UNIV2',
		tokenSymbol: 'EURS',
		icon: '/eclair.png',
		refUrl: 'https://virgox.com/login/register?code=gxkb7dva',
	},
	{
		pid: 78,
		lpAddresses: {
			1: '0x24b24af104c961da1ba5bccce4410d49aa558477',
		},
		tokenAddresses: {
			1: '0xf5d669627376ebd411e34b98f19c868c8aba5ada',
		},
		tokenDecimals: 18,
		name: 'AXS Ahi Tuna',
		symbol: 'AXS-ETH UNIV2',
		tokenSymbol: 'AXS',
		icon: '/salmon.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 79,
		lpAddresses: {
			1: '0xa3bc32ccc6edacc429a577572b51a118c3a4c562',
		},
		tokenAddresses: {
			1: '0xcca0c9c383076649604ee31b20248bc04fdf61ca',
		},
		tokenDecimals: 18,
		name: 'Bitmax Bolou Bao',
		symbol: 'BTMX-ETH UNIV2',
		tokenSymbol: 'BTMX',
		icon: '/boloubao.png',
		urlRef: 'https://ftx.com/trade/BTMX-PERP#a=createtrade',
	},
	{
		pid: 80,
		lpAddresses: {
			1: '0x755c1a8f71f4210cd7b60b9439451efcbeba33d1',
		},
		tokenAddresses: {
			1: '0x58b6a8a3302369daec383334672404ee733ab239',
		},
		tokenDecimals: 18,
		name: 'Livepeer Lemon Chicken',
		symbol: 'LPT-ETH UNIV2',
		tokenSymbol: 'LPT',
		icon: '/jerk-chicken.png',
		urlRef:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/LPT',
	},
	{
		pid: 81,
		lpAddresses: {
			1: '0xf4ef707f3f4166cc79af15959014dbe0ecd7efa3',
		},
		tokenAddresses: {
			1: '0xc666081073e8dff8d3d1c2292a29ae1a2153ec09',
		},
		tokenDecimals: 18,
		name: 'DGTX Dumpling Soup',
		symbol: 'DGTX-ETH UNIV2',
		tokenSymbol: 'DGTX',
		icon: '/hot-soup.png',
		urlRef: 'https://www.kucoin.com/ucenter/signup?rcode=Ptuf31',
	},
	{
		pid: 82,
		lpAddresses: {
			1: '0x67167a6223763518485392b579d433a43cd94215',
		},
		tokenAddresses: {
			1: '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4',
		},
		tokenDecimals: 8,
		name: 'Engima Mystery Stew',
		symbol: 'ENG-ETH UNIV2',
		tokenSymbol: 'ENG',
		poolType: 'archived',
		icon: '/mysterystew.png',
		urlRef:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ENG/ETH',
	},
	{
		pid: 83,
		lpAddresses: {
			1: '0x4042a04c54ef133ac2a3c93db69d43c6c02a330b',
		},
		tokenAddresses: {
			1: '0xaea46a60368a7bd060eec7df8cba43b7ef41ad85',
		},
		tokenDecimals: 18,
		name: 'Fetch.ai Fu Pi Juan',
		symbol: 'FET-ETH UNIV2',
		tokenSymbol: 'FET',
		icon: '/fu-pi-juan.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 84,
		lpAddresses: {
			1: '0x514906fc121c7878424a5c928cad1852cc545892',
		},
		tokenAddresses: {
			1: '0xa0246c9032bc3a600820415ae600c6388619a14d',
		},
		tokenDecimals: 18,
		name: 'FARM Fresh Greens',
		symbol: 'FARM-ETH UNIV2',
		tokenSymbol: 'FARM',
		icon: '/salad.png',
		refUrl: 'https://www.gate.io/ref/3066658',
	},
	{
		pid: 85,
		lpAddresses: {
			1: '0xd3772a963790fede65646cfdae08734a17cd0f47',
		},
		tokenAddresses: {
			1: '0xade00c28244d5ce17d72e40330b1c318cd12b7c3',
		},
		tokenDecimals: 18,
		name: 'Adx Apricots',
		symbol: 'ADX-ETH UNIV2',
		tokenSymbol: 'ADX',
		icon: '/apricot.png',
		refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33',
	},
	{
		pid: 86,
		lpAddresses: {
			1: '0x3b3d4eefdc603b232907a7f3d0ed1eea5c62b5f7',
		},
		tokenAddresses: {
			1: '0x0ae055097c6d159879521c384f1d2123d1f195e6',
		},
		tokenDecimals: 18,
		name: 'Stake Soy Sauce',
		symbol: 'STAKE-ETH UNIV2',
		tokenSymbol: 'STAKE',
		icon: '/soy.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 87,
		lpAddresses: {
			1: '0xb9b752f7f4a4680eeb327ffe728f46666763a796',
		},
		tokenAddresses: {
			1: '0x56d811088235f11c8920698a204a5010a788f4b3',
		},
		tokenDecimals: 18,
		name: 'BZRX Beef Tendon',
		symbol: 'BZRX-ETH UNIV2',
		tokenSymbol: 'BZRX',
		icon: '/ham.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 88,
		lpAddresses: {
			1: '0xfcfe058efa0be5bccfdd45e2c079997935fe0a64',
		},
		tokenAddresses: {
			1: '0xb705268213d593b8fd88d3fdeff93aff5cbdcfae',
		},
		tokenDecimals: 18,
		name: 'IDEX Ice Cream',
		symbol: 'IDEX-ETH UNIV2',
		tokenSymbol: 'IDEX',
		icon: '/ice-cream-cup.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 89,
		lpAddresses: {
			1: '0x2dda09fb929c576a6ab6c1d1ee62e8af72b2f6a7',
		},
		tokenAddresses: {
			1: '0xcc80c051057b774cd75067dc48f8987c4eb97a5e',
		},
		tokenDecimals: 18,
		name: 'Nectar Nectar',
		symbol: 'NEC-ETH UNIV2',
		tokenSymbol: 'NEC',
		icon: '/nectar.png',
		refUrl: 'https://www.hoozh.com/friends/26368269?localeLang=en&',
	},
	{
		pid: 90,
		lpAddresses: {
			1: '0x3dd49f67e9d5bc4c5e6634b3f70bfd9dc1b6bd74',
		},
		tokenAddresses: {
			1: '0x3845badade8e6dff049820680d1f14bd3903a5d0',
		},
		tokenDecimals: 18,
		name: 'SAND(which)',
		symbol: 'SAND-ETH UNIV2',
		tokenSymbol: 'SAND',
		icon: '/brunch.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 91,
		lpAddresses: {
			1: '0x15ab0333985fd1e289adf4fbbe19261454776642',
		},
		tokenAddresses: {
			1: '0xec67005c4e498ec7f55e092bd1d35cbc47c91892',
		},
		tokenDecimals: 18,
		name: 'Melon Marmalade',
		symbol: 'MLN-ETH UNIV2',
		tokenSymbol: 'MLN',
		icon: '/marmalade.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 92,
		lpAddresses: {
			1: '0xddf9b7a31b32ebaf5c064c80900046c9e5b7c65f',
		},
		tokenAddresses: {
			1: '0x2ba592f78db6436527729929aaf6c908497cb200',
		},
		tokenDecimals: 18,
		name: 'CREAM...',
		symbol: 'CREAM-ETH UNIV2',
		tokenSymbol: 'CREAM',
		icon: '/groceries.png',
		refUrl: 'https://ftx.com/trade/CREAM-PERP#a=createtrade',
	},
	{
		pid: 93,
		lpAddresses: {
			1: '0x4d5ef58aac27d99935e5b6b4a6778ff292059991',
		},
		tokenAddresses: {
			1: '0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b',
		},
		tokenDecimals: 18,
		name: 'DPI Deep Fried Shrimp',
		symbol: 'DPI-ETH UNIV2',
		tokenSymbol: 'DPI',
		icon: '/tempura.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 94,
		lpAddresses: {
			1: '0x854056fd40c1b52037166285b2e54fee774d33f6',
		},
		tokenAddresses: {
			1: '0x8daebade922df735c38c80c7ebd708af50815faa',
		},
		tokenDecimals: 18,
		name: 'tBTC Taro Dumpling',
		symbol: 'tBTC-ETH UNIV2',
		tokenSymbol: 'tBTC',
		icon: '/taro.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/tBTC',
	},
	{
		pid: 95,
		lpAddresses: {
			1: '0x8a4615a8a1ad94257567762c16007d02f76ede00',
		},
		tokenAddresses: {
			1: '0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0',
		},
		tokenDecimals: 18,
		name: 'LOOM Leftovers',
		symbol: 'LOOM-ETH UNIV2',
		tokenSymbol: 'LOOM',
		icon: '/hot.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 96,
		lpAddresses: {
			1: '0xdf4aa141031e85468137ed125749c4f6a57f8f5b',
		},
		tokenAddresses: {
			1: '0x11eef04c884e24d9b7b4760e7476d06ddf797f36',
		},
		tokenDecimals: 18,
		name: 'MX Mangguo Baobing',
		symbol: 'MX-ETH UNIV2',
		tokenSymbol: 'MX',
		icon: '/ice-cream.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 97,
		lpAddresses: {
			1: '0x87febfb3ac5791034fd5ef1a615e9d9627c2665d',
		},
		tokenAddresses: {
			1: '0x1ceb5cb57c4d4e2b2433641b95dd330a33185a44',
		},
		tokenDecimals: 18,
		name: 'KP3R Kebab',
		symbol: 'KP3R-ETH UNIV2',
		tokenSymbol: 'KP3R',
		icon: '/kebab.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 98,
		lpAddresses: {
			1: '0x8cb77ea869def8f7fdeab9e4da6cf02897bbf076',
		},
		tokenAddresses: {
			1: '0x8ab7404063ec4dbcfd4598215992dc3f8ec853d7',
		},
		tokenDecimals: 18,
		name: 'Akro Amygdalota',
		symbol: 'AKRO-ETH UNIV2',
		tokenSymbol: 'AKRO',
		icon: '/cookie.png',
		refUrl: 'https://ftx.com/trade/AKRO/USD#a=createtrade',
	},
	{
		pid: 99,
		lpAddresses: {
			1: '0x4a7d4be868e0b811ea804faf0d3a325c3a29a9ad',
		},
		tokenAddresses: {
			1: '0x8f8221afbb33998d8584a2b05749ba73c37a938a',
		},
		tokenDecimals: 18,
		name: 'REQ Ramune',
		symbol: 'REQ-ETH UNIV2',
		tokenSymbol: 'REQ',
		poolType: 'archived',
		icon: '/ramune.png',
		refUrl: 'https://www.bitfinex.com/?refcode=2f96mAtkD',
	},
	{
		pid: 100,
		lpAddresses: {
			1: '0x0a05e2e9d6333387d4f634b08fff5210292f5561',
		},
		tokenAddresses: {
			1: '0x99ea4db9ee77acd40b119bd1dc4e33e1c070b80d',
		},
		tokenDecimals: 18,
		name: 'QSP Quail Eggs',
		symbol: 'QSP-ETH UNIV2',
		tokenSymbol: 'QSP',
		icon: '/eggs.png',
		refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33',
	},
	{
		pid: 101,
		lpAddresses: {
			1: '0x0d0d65e7a7db277d3e0f5e1676325e75f3340455',
		},
		tokenAddresses: {
			1: '0xa3bed4e1c75d00fa6f4e5e6922db7261b5e9acd2',
		},
		tokenDecimals: 18,
		name: 'MTA Mantou',
		symbol: 'MTA-ETH UNIV2',
		tokenSymbol: 'MTA',
		icon: '/mantou.png',
		refUrl: 'https://ftx.com/trade/MTA-PERP#a=createtrade',
	},
	{
		pid: 102,
		lpAddresses: {
			1: '0xca9c4cc09e901f4d2aa072ed1aa95dcbe3a7a8e5',
		},
		tokenAddresses: {
			1: '0x27054b13b1b798b345b591a4d22e6562d47ea75a',
		},
		tokenDecimals: 4,
		name: 'AST Anko',
		symbol: 'AST-ETH UNIV2',
		tokenSymbol: 'AST',
		icon: '/red-bean-paste.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/AST',
	},
	{
		pid: 103,
		lpAddresses: {
			1: '0x8ccd68af5e35fe01c56ad40cd2ed27cbd7767fb1',
		},
		tokenAddresses: {
			1: '0x5bc25f649fc4e26069ddf4cf4010f9f706c23831',
		},
		tokenDecimals: 18,
		name: 'DUSD Dja Leung',
		symbol: 'DUSD-ETH UNIV2',
		tokenSymbol: 'DUSD',
		icon: '/djaleung.png',
		refUrl:
			'https://balancer.exchange/#/swap/ether/0x5bc25f649fc4e26069ddf4cf4010f9f706c23831',
	},
	{
		pid: 104,
		lpAddresses: {
			1: '0x9660882055eeb18e54deee7725dec5a4b6ae1138',
		},
		tokenAddresses: {
			1: '0x666d875c600aa06ac1cf15641361dec3b00432ef',
		},
		tokenDecimals: 8,
		name: 'BTSE Braised Pork Belly',
		symbol: 'BTSE-ETH UNIV2',
		tokenSymbol: 'BTSE',
		icon: '/pork.png',
		refUrl: 'https://www.btse.com/en/ref?c=Q3edyP',
	},
	{
		pid: 105,
		lpAddresses: {
			1: '0x232818620877fd9232e9ade0c91ef5518eb11788',
		},
		tokenAddresses: {
			1: '0x431ad2ff6a9c365805ebad47ee021148d6f7dbe0',
		},
		tokenDecimals: 18,
		name: 'Dforce Dongpo rou',
		symbol: 'DF-ETH UNIV2',
		tokenSymbol: 'DF',
		icon: '/butcher.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 106,
		lpAddresses: {
			1: '0x8175362afbeee32afb22d05adc0bbd08de32f5ae',
		},
		tokenAddresses: {
			1: '0xed91879919b71bb6905f23af0a68d231ecf87b14',
		},
		tokenDecimals: 18,
		name: 'DMG Fake Crab',
		symbol: 'DMG-ETH UNIV2',
		tokenSymbol: 'DMG',
		poolType: 'archived',
		icon: '/sushi.png',
		refUrl: 'https://ftx.com/trade/DMG-PERP#a=createtrade',
	},
	{
		pid: 107,
		lpAddresses: {
			1: '0x78467084b9edc2672c28c5cd8f076dc6f2ec1a66',
		},
		tokenAddresses: {
			1: '0xdfe691f37b6264a90ff507eb359c45d55037951c',
		},
		tokenDecimals: 4,
		name: 'Karma Friendship Roll',
		symbol: 'KARMA-ETH UNIV2',
		tokenSymbol: 'KARMA',
		poolType: 'archived',
		icon: '/maki.png',
		refUrl: 'https://www.hotbit.io/register?ref=669143',
	},
	{
		pid: 108,
		lpAddresses: {
			1: '0x050397956e1fc8a0a2e62af035275f8a415b85a7',
		},
		tokenAddresses: {
			1: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a',
		},
		tokenDecimals: 8,
		name: 'Monolith Matcha',
		symbol: 'TKN-ETH UNIV2',
		tokenSymbol: 'TKN',
		icon: '/matcha-tea.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 109,
		lpAddresses: {
			1: '0x77bbc2b409c2c75e4999e8e3eb8309efff37cf2d',
		},
		tokenAddresses: {
			1: '0x89ab32156e46f46d02ade3fecbe5fc4243b9aaed',
		},
		tokenDecimals: 18,
		name: 'PNT Pi Dan',
		symbol: 'PNT-ETH UNIV2',
		tokenSymbol: 'PNT',
		icon: '/black-egg.png',
		refUrl: 'https://www.bitfinex.com/?refcode=2f96mAtkD',
	},
	{
		pid: 110,
		lpAddresses: {
			1: '0xe2aab7232a9545f29112f9e6441661fd6eeb0a5d',
		},
		tokenAddresses: {
			1: '0x0aacfbec6a24756c20d41914f2caba817c0d8521',
		},
		tokenDecimals: 18,
		name: 'Yam Roll!',
		symbol: 'YAM-ETH UNIV2',
		tokenSymbol: 'YAM',
		icon: '/yammaki.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 111,
		lpAddresses: {
			1: '0xc730ef0f4973da9cc0ab8ab291890d3e77f58f79',
		},
		tokenAddresses: {
			1: '0x18aaa7115705e8be94bffebde57af9bfc265b998',
		},
		tokenDecimals: 18,
		name: 'Audio Arame',
		symbol: 'AUDIO-ETH UNIV2',
		tokenSymbol: 'AUDIO',
		icon: '/spices.png',
		refUrl: 'https://ftx.com/trade/AUDIO/USD#a=createtrade',
	},
	{
		pid: 112,
		lpAddresses: {
			1: '0xab659dee3030602c1af8c29d146facd4aed6ec85',
		},
		tokenAddresses: {
			1: '0x3f382dbd960e3a9bbceae22651e88158d2791550',
		},
		tokenDecimals: 18,
		name: 'GHST Peppers',
		symbol: 'GHST-ETH UNIV2',
		tokenSymbol: 'GHST',
		icon: '/chili-pepper.png',
		refUrl: 'https://www.hotbit.io/register?ref=669143',
	},
	{
		pid: 113,
		lpAddresses: {
			1: '0xc139d8450177c0b8c3788608518687b585f7ae5a',
		},
		tokenAddresses: {
			1: '0xb8baa0e4287890a5f79863ab62b7f175cecbd433',
		},
		tokenDecimals: 18,
		name: 'SWRV Sweetener',
		symbol: 'SWRV-ETH UNIV2',
		tokenSymbol: 'GHST',
		icon: '/sugar-free.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 114,
		lpAddresses: {
			1: '0xd9d39540d61f8d6eb2ee7eedfae93cc09cc24f0e',
		},
		tokenAddresses: {
			1: '0x4946fcea7c692606e8908002e55a582af44ac121',
		},
		tokenDecimals: 18,
		name: 'FOAM Fondue',
		symbol: 'FOAM-ETH UNIV2',
		tokenSymbol: 'FOAM',
		poolType: 'archived',
		icon: '/fondue.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 115,
		lpAddresses: {
			1: '0x3859b3d01b4eac043a5070d3911a7ccd873ec6ac',
		},
		tokenAddresses: {
			1: '0xab37e1358b639fd877f015027bb62d3ddaa7557e',
		},
		tokenDecimals: 8,
		name: 'Lien Lo mein',
		symbol: 'Lien-ETH UNIV2',
		tokenSymbol: 'Lien',
		icon: '/wonton-noodles.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 116,
		lpAddresses: {
			1: '0xf248959d7aa50cd47b448f507063eaa6cc5404c4',
		},
		tokenAddresses: {
			1: '0xec213f83defb583af3a000b1c0ada660b1902a0f',
		},
		tokenDecimals: 18,
		name: 'PRE Potstickers',
		symbol: 'PRE-ETH UNIV2',
		tokenSymbol: 'PRE',
		poolType: 'archived',
		icon: '/potstickers.png',
		urlRef: 'https://www.kucoin.com/ucenter/signup?rcode=Ptuf31',
	},
	{
		pid: 117,
		lpAddresses: {
			1: '0xf37ed742819ec006b0802df5c2b0e9132f22c625',
		},
		tokenAddresses: {
			1: '0x543ff227f64aa17ea132bf9886cab5db55dcaddf',
		},
		tokenDecimals: 18,
		name: 'GEN Guilinggao',
		symbol: 'GEN-ETH UNIV2',
		tokenSymbol: 'GEN',
		icon: '/black-sesame-soup.png',
		refUrl: 'https://www.bitfinex.com/?refcode=2f96mAtkD',
	},
	{
		pid: 118,
		lpAddresses: {
			1: '0x2b6a25f7c54f43c71c743e627f5663232586c39f',
		},
		tokenAddresses: {
			1: '0x8a9c67fee641579deba04928c4bc45f66e26343a',
		},
		tokenDecimals: 18,
		name: 'JRT Jiaohua Ji',
		symbol: 'JRT-ETH UNIV2',
		tokenSymbol: 'JRT',
		poolType: 'archived',
		icon: '/chicken-dish.png',
		refUrl: 'https://bitmax.io/register?inviteCode=MCTXZDRU',
	},
	{
		pid: 119,
		lpAddresses: {
			1: '0x5dfbe95925ffeb68f7d17920be7b313289a1a583',
		},
		tokenAddresses: {
			1: '0xd5525d397898e5502075ea5e830d8914f6f0affe',
		},
		tokenDecimals: 8,
		name: 'MEME Boluo fan',
		symbol: 'MEME-ETH UNIV2',
		tokenSymbol: 'MEME',
		icon: '/pineapple.png',
		refUrl: 'https://www.okex.com/join/3/1914410',
	},
	{
		pid: 120,
		lpAddresses: {
			1: '0x6591c4BcD6D7A1eb4E537DA8B78676C1576Ba244',
		},
		tokenAddresses: {
			1: '0x0391d2021f89dc339f60fff84546ea23e337750f',
		},
		denominatorAddresses: {
			1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		},
		tokenDecimals: 18,
		name: 'BOND Baobing',
		symbol: 'BOND-USDC UNIV2',
		tokenSymbol: 'BOND',
		denominatorSymbol: 'USDC',
		icon: '/shaved-ice.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 121,
		lpAddresses: {
			1: '0xf043c39a106db6b58c76995f30ba35fd211c3b76',
		},
		tokenAddresses: {
			1: '0x95a4492f028aa1fd432ea71146b433e7b4446611',
		},
		tokenDecimals: 18,
		name: 'APY Yanpi',
		symbol: 'APY-ETH UNIV2',
		tokenSymbol: 'APY',
		icon: '/yanpi.png',
		refUrl:
			'https://www.aex.plus/page/m_regist.html#/?invite_code=765759&invite_type=10',
	},
	{
		pid: 122,
		lpAddresses: {
			1: '0x3452a7f30a712e415a0674c0341d44ee9d9786f9',
		},
		tokenAddresses: {
			1: '0x0954906da0bf32d5479e25f46056d22f08464cab',
		},
		tokenDecimals: 18,
		name: 'Index Ice Tea',
		symbol: 'INDEX-ETH UNIV2',
		tokenSymbol: 'INDEX',
		icon: '/bubble-tea.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 123,
		lpAddresses: {
			1: '0x8cab3e311702acb64e250926d77134fde604bd4d',
		},
		tokenAddresses: {
			1: '0xca1207647ff814039530d7d35df0e1dd2e91fa84',
		},
		tokenDecimals: 18,
		name: 'DHT Donburi',
		symbol: 'DHT-ETH UNIV2',
		tokenSymbol: 'DHT',
		icon: '/rice-bowl.png',
		refUrl:
			'https://www.aex.plus/page/m_regist.html#/?invite_code=765759&invite_type=10',
	},
	{
		pid: 124,
		lpAddresses: {
			1: '0xe8846b27988ff52c371d5bd27bf8dba4097c93d2',
		},
		tokenAddresses: {
			1: '0xad32a8e6220741182940c5abf610bde99e737b2d',
		},
		tokenDecimals: 18,
		name: 'DOUGH(nut)',
		symbol: 'DOUGH-ETH UNIV2',
		tokenSymbol: 'DOUGH',
		icon: '/dough.png',
		refUrl: 'https://www.hotbit.io/register?ref=669143',
	},
	{
		pid: 125,
		lpAddresses: {
			1: '0xe41e01a3231c0f19bacb9baee26a8554e0796391',
		},
		tokenAddresses: {
			1: '0x7968bc6a03017ea2de509aaa816f163db0f35148',
		},
		tokenDecimals: 6,
		name: 'HGET Halo-Halo',
		symbol: 'HGET-ETH UNIV2',
		tokenSymbol: 'HGET',
		icon: '/sundae.png',
		refUrl: 'https://ftx.com/trade/HGET/USD#a=createtrade',
	},
	{
		pid: 126,
		lpAddresses: {
			1: '0x623ac7e26c774dbc646e0d4ac12110567cef579f',
		},
		tokenAddresses: {
			1: '0x01ff50f8b7f74e4f00580d9596cd3d0d6d6e326f',
		},
		tokenDecimals: 18,
		name: 'BFT Bamboo Roll',
		symbol: 'BFT-ETH UNIV2',
		tokenSymbol: 'BFT',
		poolType: 'archived',
		icon: '/salad-rolls.png',
		refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33',
	},
	{
		pid: 127,
		lpAddresses: {
			1: '0x70ec2fa6eccf4010eaf572d1c1a7bcbc72dec983',
		},
		tokenAddresses: {
			1: '0xfa5047c9c78b8877af97bdcb85db743fd7313d4a',
		},
		tokenDecimals: 18,
		name: 'Rook Rice Noodle Roll',
		symbol: 'ROOK-ETH UNIV2',
		tokenSymbol: 'ROOK',
		icon: '/roll-fish.png',
		refUrl: 'https://www.hotbit.io/register?ref=669143',
	},
	{
		pid: 128,
		lpAddresses: {
			1: '0xa5904961f61bae7c4dd8478077556c91bf291cfd',
		},
		tokenAddresses: {
			1: '0xaba8cac6866b83ae4eec97dd07ed254282f6ad8a',
		},
		tokenDecimals: 24,
		name: 'YAMv2 Refried Yam',
		symbol: 'YAMV2-ETH UNIV2',
		tokenSymbol: 'YAMV2',
		poolType: 'archived',
		icon: '/yam.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 129,
		lpAddresses: {
			1: '0xac8833b0da01b8f2ca53f549f13b5790066a842d',
		},
		tokenAddresses: {
			1: '0x20c36f062a31865bed8a5b1e512d9a1a20aa333a',
		},
		tokenDecimals: 18,
		name: 'DFD Djah Daan Cao',
		symbol: 'DFD-ETH UNIV2',
		tokenSymbol: 'DFD',
		icon: '/profiterole.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/DFD/ETH',
	},
	{
		pid: 130,
		lpAddresses: {
			1: '0xf1ff4c672dabf9aea4813dda6de66b860b0970b4',
		},
		tokenAddresses: {
			1: '0x107c4504cd79c5d2696ea0030a8dd4e92601b82e',
		},
		tokenDecimals: 18,
		name: 'BLT ...on Rye',
		symbol: 'BLT-ETH UNIV2',
		tokenSymbol: 'BLT',
		icon: '/blt.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/BLT/ETH',
	},
	{
		pid: 131,
		lpAddresses: {
			1: '0xbf452277b8af4084fb8a0472ec808f2ded51f1c1',
		},
		tokenAddresses: {
			1: '0x37236cd05b34cc79d3715af2383e96dd7443dcf1',
		},
		tokenDecimals: 0,
		name: 'SLP Sweet Tofu',
		symbol: 'SLP-ETH UNIV2',
		tokenSymbol: 'SLP',
		icon: '/sweet-tofu.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/SLP',
	},
	{
		pid: 132,
		lpAddresses: {
			1: '0xaa7207194d3a650e6d1636e529036624dcd50bfa',
		},
		tokenAddresses: {
			1: '0xebbdf302c940c6bfd49c6b165f457fdb324649bc',
		},
		tokenDecimals: 18,
		name: 'HYDRO Herbal Tea',
		symbol: 'HYDRO-ETH UNIV2',
		tokenSymbol: 'HYDRO',
		poolType: 'archived',
		icon: '/herbal-tea.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/HYDRO/ETH',
	},
	{
		pid: 133,
		lpAddresses: {
			1: '0x3e7ac3dfe933d3027a5968be23c624f1309b1b02',
		},
		tokenAddresses: {
			1: '0x464ebe77c293e473b48cfe96ddcf88fcf7bfdac0',
		},
		tokenDecimals: 18,
		name: 'Kryll Peel & Eat',
		symbol: 'KRL-ETH UNIV2',
		tokenSymbol: 'KRL',
		icon: '/krill.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/KRL/ETH',
	},
	{
		pid: 134,
		lpAddresses: {
			1: '0xb8342778bf84774556f162a6bcad1993d04fb398',
		},
		tokenAddresses: {
			1: '0x196f4727526ea7fb1e17b2071b3d8eaa38486988',
		},
		tokenDecimals: 18,
		name: 'RSV Radish Cake',
		symbol: 'RSV-ETH UNIV2',
		tokenSymbol: 'RSV',
		icon: '/radish-cake.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/RSV/ETH',
	},
	{
		pid: 135,
		lpAddresses: {
			1: '0xf5ef67632cd2256d939702a126fe2c047d0a07bf',
		},
		tokenAddresses: {
			1: '0x6c6ee5e31d828de241282b9606c8e98ea48526e2',
		},
		tokenDecimals: 18,
		name: 'HOT Hasma',
		symbol: 'HOT-ETH UNIV2',
		tokenSymbol: 'HOT',
		poolType: 'archived',
		icon: '/snow-fungus-soup.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 136,
		lpAddresses: {
			1: '0xad19b7e2b1dac6cea46b18eec731981c08e6f08e',
		},
		tokenAddresses: {
			1: '0x94d863173ee77439e4292284ff13fad54b3ba182',
		},
		tokenDecimals: 18,
		name: 'Adel Antzougies',
		symbol: 'ADEL-ETH UNIV2',
		tokenSymbol: 'ADEL',
		icon: '/brochette.png',
		refUrl:
			'https://www.aex.plus/page/m_regist.html#/?invite_code=765759&invite_type=10',
	},
	{
		pid: 137,
		lpAddresses: {
			1: '0x0dacb47e00aed6abade32c7b398e029393e0d848',
		},
		tokenAddresses: {
			1: '0x23b608675a2b2fb1890d3abbd85c5775c51691d5',
		},
		tokenDecimals: 18,
		name: 'SOCKS Non-Edible',
		symbol: 'SOCKS-ETH UNIV2',
		tokenSymbol: 'SOCKS',
		icon: '/socks.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/SOCKS/ETH',
	},
	{
		pid: 138,
		lpAddresses: {
			1: '0x24004f6fce7e3842e5a308eac032e09f1883cef8',
		},
		tokenAddresses: {
			1: '0xf4a81c18816c9b0ab98fac51b36dcb63b0e58fde',
		},
		tokenDecimals: 18,
		name: 'WAR Wontons',
		symbol: 'WAR-ETH UNIV2',
		tokenSymbol: 'WAR',
		icon: '/wonton.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/WAR/ETH',
	},
	{
		pid: 139,
		lpAddresses: {
			1: '0xc12c4c3e0008b838f75189bfb39283467cf6e5b3',
		},
		tokenAddresses: {
			1: '0xb6ed7644c69416d67b522e20bc294a9a9b405b31',
		},
		tokenDecimals: 8,
		name: '0xBTC Oxtail Pho',
		symbol: '0XBTC-ETH UNIV2',
		tokenSymbol: 'OXBTC',
		icon: '/luosifen.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/0xBTC/ETH',
	},
	{
		pid: 140,
		lpAddresses: {
			1: '0x718dd8b743ea19d71bdb4cb48bb984b73a65ce06',
		},
		tokenAddresses: {
			1: '0xc0f9bd5fa5698b6505f643900ffa515ea5df54a9',
		},
		tokenDecimals: 18,
		name: 'DONUT (Snoo Sprinkles)',
		symbol: 'DONUT-ETH UNIV2',
		tokenSymbol: 'DONUT',
		icon: '/donut.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/DONUT',
	},
	{
		pid: 141,
		lpAddresses: {
			1: '0x7f1fd0e2a650513bc8b89dd66a51267b772d0225',
		},
		tokenAddresses: {
			1: '0x9f599410d207f3d2828a8712e5e543ac2e040382',
		},
		tokenDecimals: 18,
		name: 'Tap Tangyuan',
		symbol: 'TTT-ETH UNIV2',
		tokenSymbol: 'TTT',
		poolType: 'archived',
		icon: '/tangyuan.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/TTT/ETH',
	},
	{
		pid: 142,
		lpAddresses: {
			1: '0x8979a3ef9d540480342ac0f56e9d4c88807b1cba',
		},
		tokenAddresses: {
			1: '0x221657776846890989a759ba2973e427dff5c9bb',
		},
		tokenDecimals: 18,
		name: 'REPv2 Refried Rangoon',
		symbol: 'REPv2-ETH UNIV2',
		tokenSymbol: 'REPv2',
		icon: '/rangoon.png',
		refUrl: 'https://www.digifinex.com/en-ww/from/?channelCode=ljaUPp',
	},
	{
		pid: 143,
		lpAddresses: {
			1: '0x3e8468f66d30fc99f745481d4b383f89861702c6',
		},
		tokenAddresses: {
			1: '0x6810e776880c02933d47db1b9fc05908e5386b96',
		},
		tokenDecimals: 18,
		name: 'GNO Gongbao Jiding',
		symbol: 'GNO-ETH UNIV2',
		tokenSymbol: 'GNO',
		icon: '/kungpao.png',
		refUrl: 'https://www.hoozh.com/friends/26368269?localeLang=en&',
	},
	{
		pid: 144,
		lpAddresses: {
			1: '0xc04744ab87a4c37afd91680ef280b96ee21a026e',
		},
		tokenAddresses: {
			1: '0xc12d099be31567add4e4e4d0d45691c3f58f5663',
		},
		tokenDecimals: 18,
		name: 'Auc Apple Ramune',
		symbol: 'AUC-ETH UNIV2',
		tokenSymbol: 'AUC',
		icon: '/ramune.png',
		refUrl: 'https://www.hoozh.com/friends/26368269?localeLang=en&',
	},
	{
		pid: 145,
		lpAddresses: {
			1: '0x1107b6081231d7f256269ad014bf92e041cb08df',
		},
		tokenAddresses: {
			1: '0xb1dc9124c395c1e97773ab855d66e879f053a289',
		},
		tokenDecimals: 18,
		name: 'YAX Yellowfin',
		symbol: 'YAX-ETH UNIV2',
		tokenSymbol: 'YAX',
		icon: '/tuna.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 146,
		lpAddresses: {
			1: '0xd7cfbcadaaf6475321cfcf3884f15a93400be658',
		},
		tokenAddresses: {
			1: '0x7240ac91f01233baaf8b064248e80feaa5912ba3',
		},
		tokenDecimals: 18,
		name: 'OCTO(pus) Roll',
		symbol: 'OCTO-ETH UNIV2',
		tokenSymbol: 'OCTO',
		icon: '/octopus.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/OCTO/ETH',
	},
	{
		pid: 147,
		lpAddresses: {
			1: '0xd9159376499936868a5b061a4633481131e70732',
		},
		tokenAddresses: {
			1: '0x49e833337ece7afe375e44f4e3e8481029218e5c',
		},
		tokenDecimals: 18,
		name: 'Value Meal Deal',
		symbol: 'VALUE-ETH UNIV2',
		tokenSymbol: 'VALUE',
		poolType: 'archived',
		icon: '/takeaway.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 148,
		lpAddresses: {
			1: '0x7d611e4cf1c7b94561c4caa5602f329d108336e3',
		},
		tokenAddresses: {
			1: '0xed0439eacf4c4965ae4613d77a5c2efe10e5f183',
		},
		tokenDecimals: 18,
		name: 'SHROOM Stew',
		symbol: 'SHROOM-ETH UNIV2',
		tokenSymbol: 'SHROOM',
		icon: '/sambar.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 149,
		lpAddresses: {
			1: '0xdc2b82bc1106c9c5286e59344896fb0ceb932f53',
		},
		tokenAddresses: {
			1: '0xd291e7a03283640fdc51b121ac401383a46cc623',
		},
		tokenDecimals: 18,
		name: 'RGT Reheated',
		symbol: 'RGT-ETH UNIV2',
		tokenSymbol: 'RGT',
		icon: '/stew2.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/RGT/ETH',
	},
	{
		pid: 150,
		lpAddresses: {
			1: '0x5bb64b29f09e391edd8b4ea449554d1d5d05be1f',
		},
		tokenAddresses: {
			1: '0x30cf203b48edaa42c3b4918e955fed26cd012a3f',
		},
		tokenDecimals: 18,
		name: 'SEED (Seasame)',
		symbol: 'SEED-ETH UNIV2',
		tokenSymbol: 'SEED',
		poolType: 'archived',
		icon: '/sesame.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/SEED/ETH',
	},
	{
		pid: 151,
		lpAddresses: {
			1: '0xd00ed1098180b1d6ed42b066555ab065c4515493',
		},
		tokenAddresses: {
			1: '0xa10740ff9ff6852eac84cdcff9184e1d6d27c057',
		},
		tokenDecimals: 18,
		name: 'Wrapped Gen0 Kitty Roll',
		symbol: 'WG0-ETH UNIV2',
		tokenSymbol: 'WG0',
		icon: '/wg0_logo.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/WG0/ETH',
	},
	{
		pid: 152,
		lpAddresses: {
			1: '0x4f04fa61c2db90cf14840148b72bdbf9aad0b5cb',
		},
		tokenAddresses: {
			1: '0xec0a0915a7c3443862b678b0d4721c7ab133fdcf',
		},
		tokenDecimals: 18,
		name: 'Wrapped Origin Axie Roll',
		symbol: 'WOA-ETH UNIV2',
		tokenSymbol: 'WOA',
		icon: '/WOA_logo.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/WOA/ETH',
	},
	{
		pid: 153,
		lpAddresses: {
			1: '0x6a928d733606943559556f7eb22057c1964ce56a',
		},
		tokenAddresses: {
			1: '0x8564653879a18c560e7c0ea0e084c516c62f5653',
		},
		tokenDecimals: 18,
		name: 'Upbots Oolong',
		symbol: 'UBXT-ETH UNIV2',
		tokenSymbol: 'UBXT',
		icon: '/tea.png',
		refUrl: 'https://ftx.com/trade/UBXT/USD#a=createtrade',
	},
	{
		pid: 154,
		lpAddresses: {
			1: '0x744f25650af7cd016df7221bd07647ca25dfc2f3',
		},
		tokenAddresses: {
			1: '0x1b073382e63411e3bcffe90ac1b9a43fefa1ec6f',
		},
		tokenDecimals: 8,
		name: 'BitPanda Express',
		symbol: 'BEST-ETH UNIV2',
		tokenSymbol: 'BEST',
		poolType: 'archived',
		icon: '/panda.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/BEST/ETH',
	},
	{
		pid: 155,
		lpAddresses: {
			1: '0x5c89674c4ad1ccd10a29bcc9aabc303cd5f2da1d',
		},
		tokenAddresses: {
			1: '0x05d3606d5c81eb9b7b18530995ec9b29da05faba',
		},
		tokenDecimals: 18,
		name: 'TOMOe Teriyaki',
		symbol: 'TOMOe-ETH UNIV2',
		tokenSymbol: 'TOMOe',
		poolType: 'archived',
		icon: '/hainanese-chicken.png',
		refUrl: 'https://ftx.com/trade/TOMO-PERP#a=createtrade',
	},
	{
		pid: 156,
		lpAddresses: {
			1: '0x23d15edceb5b5b3a23347fa425846de80a2e8e5c',
		},
		tokenAddresses: {
			1: '0xeef9f339514298c6a857efcfc1a762af84438dee',
		},
		tokenDecimals: 18,
		name: 'HEZ Hainan Jifan',
		symbol: 'HEZ-ETH UNIV2',
		tokenSymbol: 'HEZ',
		icon: '/jifan.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/HEZ/ETH',
	},
	{
		pid: 157,
		lpAddresses: {
			1: '0xdc98556ce24f007a5ef6dc1ce96322d65832a819',
		},
		tokenAddresses: {
			1: '0x429881672b9ae42b8eba0e26cd9c73711b891ca5',
		},
		tokenDecimals: 18,
		name: 'Pickle(d) Pork (Spicy!!)',
		symbol: 'PICKLE-ETH UNIV2',
		tokenSymbol: 'PICKLE',
		poolType: 'archived',
		icon: '/beef-chow-fun.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 158,
		lpAddresses: {
			1: '0x2e0721e6c951710725997928dcaaa05daafa031b',
		},
		tokenAddresses: {
			1: '0xe0e4839e0c7b2773c58764f9ec3b9622d01a0428',
		},
		tokenDecimals: 18,
		name: 'ENCORE Egg Tart',
		symbol: 'ENCORE-ETH UNIV2',
		tokenSymbol: 'ENCORE',
		poolType: 'archived',
		icon: '/egg-tart.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ENCORE/ETH',
	},
	{
		pid: 159,
		lpAddresses: {
			1: '0xc3fa0a8d68a43ed336174cb5673903572bbace8e',
		},
		tokenAddresses: {
			1: '0x2e2f3246b6c65ccc4239c9ee556ec143a7e5de2c',
		},
		tokenDecimals: 18,
		name: 'YFIM Cloned Meat',
		symbol: 'YFIM-ETH UNIV2',
		tokenSymbol: 'YFIM',
		poolType: 'archived',
		icon: '/sheep.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/YFIM/ETH',
	},
	{
		pid: 160,
		lpAddresses: {
			1: '0xa89abe11bd3ef4cf68a5004ba99b9fda52d5e8fc',
		},
		tokenAddresses: {
			1: '0xc3eb2622190c57429aac3901808994443b64b466',
		},
		tokenDecimals: 18,
		name: 'Oro Orzo',
		symbol: 'ORO-ETH UNIV2',
		tokenSymbol: 'ORO',
		poolType: 'archived',
		icon: '/rice.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ORO/ETH',
	},
	{
		pid: 161,
		lpAddresses: {
			1: '0x01962144d41415cca072900fe87bbe2992a99f10',
		},
		tokenAddresses: {
			1: '0x40fd72257597aa14c7231a7b1aaa29fce868f677',
		},
		tokenDecimals: 18,
		name: 'XOR Xia Jiao',
		symbol: 'XOR-ETH UNIV2',
		tokenSymbol: 'XOR',
		icon: '/dumplings.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/XOR/ETH',
	},
	{
		pid: 162,
		lpAddresses: {
			1: '0x8bd1661da98ebdd3bd080f0be4e6d9be8ce9858c',
		},
		tokenAddresses: {
			1: '0x408e41876cccdc0f92210600ef50372656052a38',
		},
		tokenDecimals: 18,
		name: 'REN Roast Chicken',
		symbol: 'REN-ETH UNIV2',
		tokenSymbol: 'REN',
		icon: '/roastchicken.png',
		refUrl: 'https://www.digifinex.com/en-ww/from/?channelCode=ljaUPp',
	},
	{
		pid: 163,
		lpAddresses: {
			1: '0x8878df9e1a7c87dcbf6d3999d997f262c05d8c70',
		},
		tokenAddresses: {
			1: '0xbbbbca6a901c926f240b89eacb641d8aec7aeafd',
		},
		tokenDecimals: 18,
		name: 'Loopring Lotus Buns',
		symbol: 'LRC-ETH UNIV2',
		tokenSymbol: 'LRC',
		icon: '/lotus.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 164,
		lpAddresses: {
			1: '0x12d4444f96c644385d8ab355f6ddf801315b6254',
		},
		tokenAddresses: {
			1: '0x38e4adb44ef08f22f5b5b76a8f0c2d0dcbe7dca1',
		},
		tokenDecimals: 18,
		name: 'CVP Char Siu',
		symbol: 'CVP-ETH UNIV2',
		tokenSymbol: 'CVP',
		poolType: 'archived',
		icon: '/char-siu.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 165,
		lpAddresses: {
			1: '0x93d2707e73b4f096c274929bb2e4f631c7e61502',
		},
		tokenAddresses: {
			1: '0x5580ab97f226c324c671746a1787524aef42e415',
		},
		tokenDecimals: 18,
		name: 'JUL Jian Dui',
		symbol: 'JUL-ETH UNIV2',
		tokenSymbol: 'JUL',
		poolType: 'archived',
		icon: '/sesame-ball.png',
		refUrl: 'https://www.hotbit.io/register?ref=669143',
	},
	{
		pid: 166,
		lpAddresses: {
			1: '0xe6f19dab7d43317344282f803f8e8d240708174a',
		},
		tokenAddresses: {
			1: '0x85eee30c52b0b379b046fb0f85f4f3dc3009afec',
		},
		tokenDecimals: 18,
		name: 'KEEP Kaffa Cake',
		symbol: 'KEEP-ETH UNIV2',
		tokenSymbol: 'KEEP',
		icon: '/dessert.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 167,
		lpAddresses: {
			1: '0x6a3d23fa07c455f88d70c29d230467c407a3964b',
		},
		tokenAddresses: {
			1: '0xe17f017475a709de58e976081eb916081ff4c9d5',
		},
		tokenDecimals: 9,
		name: 'RMPL Raisin Cake',
		symbol: 'RMPL-ETH UNIV2',
		tokenSymbol: 'KEEP',
		poolType: 'archived',
		icon: '/brownie.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/RMPL/ETH',
	},
	{
		pid: 168,
		lpAddresses: {
			1: '0x414fbf662fc98415dbee27c72013a6f3a937ed66',
		},
		tokenAddresses: {
			1: '0x2a7f709ee001069771ceb6d42e85035f7d18e736',
		},
		tokenDecimals: 18,
		name: 'OWL Oysters',
		symbol: 'OWL-ETH UNIV2',
		tokenSymbol: 'OWL',
		poolType: 'archived',
		icon: '/oyster.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/OWL_1/ETH',
	},
	{
		pid: 169,
		lpAddresses: {
			1: '0x86fef14c27c78deaeb4349fd959caa11fc5b5d75',
		},
		tokenAddresses: {
			1: '0xfca59cd816ab1ead66534d82bc21e7515ce441cf',
		},
		tokenDecimals: 18,
		name: 'Rari Riceballs',
		symbol: 'RARI-ETH UNIV2',
		tokenSymbol: 'RARI',
		icon: '/rice-ball-with-seaweed.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 170,
		lpAddresses: {
			1: '0xce84867c3c02b05dc570d0135103d3fb9cc19433',
		},
		tokenAddresses: {
			1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
		},
		tokenDecimals: 18,
		name: 'Simply Sushi',
		symbol: 'SUSHI-ETH UNIV2',
		tokenSymbol: 'SUSHI',
		icon: '/simplysushi.png',
		refUrl: 'https://ftx.com/trade/SUSHI-PERP#a=createtrade',
	},
	{
		pid: 171,
		lpAddresses: {
			1: '0x6c8b0dee9e90ea9f790da5daf6f5b20d23b39689',
		},
		tokenAddresses: {
			1: '0x0258f474786ddfd37abce6df6bbb1dd5dfc4434a',
		},
		tokenDecimals: 8,
		name: 'ORN Oden',
		symbol: 'ORN-ETH UNIV2',
		tokenSymbol: 'ORN',
		icon: '/oden.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 172,
		lpAddresses: {
			1: '0x960d228bb345fe116ba4cba4761aab24a5fa7213',
		},
		tokenAddresses: {
			1: '0x1d37986f252d0e349522ea6c3b98cb935495e63e',
		},
		tokenDecimals: 18,
		name: 'Chartex Curry Rice',
		symbol: 'CHARTEX-ETH UNIV2',
		tokenSymbol: 'CHARTEX',
		icon: '/curry.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/CHART/ETH',
	},
	{
		pid: 173,
		lpAddresses: {
			1: '0xe0cc5afc0ff2c76183416fb8d1a29f6799fb2cdf',
		},
		tokenAddresses: {
			1: '0x0f7f961648ae6db43c75663ac7e5414eb79b5704',
		},
		tokenDecimals: 18,
		name: 'XIO Xiao Long Bao',
		symbol: 'XIO-ETH UNIV2',
		tokenSymbol: 'XIO',
		icon: '/xiao.png',
		refUrl: 'https://bilaxy.com/user/register?intro=1428882',
	},
	{
		pid: 174,
		lpAddresses: {
			1: '0x1d6432aefeae2c0ff1393120541863822a4e6fa7',
		},
		tokenAddresses: {
			1: '0x28cb7e841ee97947a86b06fa4090c8451f64c0be',
		},
		tokenDecimals: 18,
		name: 'YFL Yam Pudding',
		symbol: 'YFL-ETH UNIV2',
		tokenSymbol: 'YFL',
		icon: '/yampudding.png',
		refUrl: 'https://www.hotbit.io/register?ref=669143',
	},
	{
		pid: 175,
		lpAddresses: {
			1: '0xd90a1ba0cbaaaabfdc6c814cdf1611306a26e1f8',
		},
		tokenAddresses: {
			1: '0xcc4304a31d09258b0029ea7fe63d032f52e44efe',
		},
		tokenDecimals: 18,
		name: 'SWAP Shashimi',
		symbol: 'SWAP-ETH UNIV2',
		tokenSymbol: 'SWAP',
		icon: '/shashimi.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 176,
		lpAddresses: {
			1: '0x524847c615639e76fe7d0fe0b16be8c4eac9cf3c',
		},
		tokenAddresses: {
			1: '0x4fabb145d64652a948d72533023f6e7a623c7c53',
		},
		denominatorAddresses: {
			1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		},
		tokenDecimals: 18,
		name: 'BUSD BBQ Pork Bun',
		symbol: 'BUSD-USDC UNIV2',
		tokenSymbol: 'BUSD',
		denominatorSymbol: 'USDC',
		icon: '/meat-bun.png',
		refUrl: 'https://coinsbit.io/referral/fdfdc261-0d2c-4681-8878-5915c74af58e',
	},
	{
		pid: 177,
		lpAddresses: {
			1: '0xffa98a091331df4600f87c9164cd27e8a5cd2405',
		},
		tokenAddresses: {
			1: '0x83e6f1e41cdd28eaceb20cb649155049fac3d5aa',
		},
		tokenDecimals: 18,
		name: 'POLS Poke Bowls',
		symbol: 'POLS-ETH UNIV2',
		tokenSymbol: 'POLS',
		icon: '/poke.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 178,
		lpAddresses: {
			1: '0x2ea145788bfbab996d27df7a5ae972e4d85916b1',
		},
		tokenAddresses: {
			1: '0x3142dad33b1c6e1371d8627365f2ee2095eb6b37',
		},
		tokenDecimals: 18,
		name: 'Hautclere Hautplate',
		symbol: 'HAUT-ETH UNIV2',
		tokenSymbol: 'HAUT',
		icon: '/haut.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/HAUT/ETH',
	},
	{
		pid: 179,
		lpAddresses: {
			1: '0xe0181e77333408e203823ff26b02f295e52a910e',
		},
		tokenAddresses: {
			1: '0x25a3dcabbf0070cb8e5baaa62d576cf6643afb5b',
		},
		tokenDecimals: 18,
		name: 'Almace Almond Mix',
		symbol: 'ALMX-ETH UNIV2',
		tokenSymbol: 'ALMX',
		icon: '/Almace.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ALMX/ETH',
	},
	{
		pid: 180,
		lpAddresses: {
			1: '0x96824a85aac3a2ccdd31f87ff76ae0de01002e01',
		},
		tokenAddresses: {
			1: '0x50eb346fc29a80d97563a50146c3fcf9423b5538',
		},
		tokenDecimals: 18,
		name: 'Skull Candy Candy',
		symbol: 'CANDY-ETH UNIV2',
		tokenSymbol: 'CANDY',
		icon: '/Skull.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/CANDY/ETH',
	},
	{
		pid: 181,
		lpAddresses: {
			1: '0xaff86eb23d266ce9925ef588ea9a9d310fccf3bf',
		},
		tokenAddresses: {
			1: '0xa3a3f076413a362bb0d69eea1dc5b0e79c831edc',
		},
		tokenDecimals: 18,
		name: 'Cocaine Cowboy Cola',
		symbol: 'COKE-ETH UNIV2',
		tokenSymbol: 'COKE',
		icon: '/coke.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/COKE/ETH',
	},
	{
		pid: 182,
		lpAddresses: {
			1: '0x015d859d0070e38f2970b1d1da274e2806aaebff',
		},
		tokenAddresses: {
			1: '0xbc3ec4e491b835dce394a53e9a9a10ac19564839',
		},
		tokenDecimals: 18,
		name: 'Starbugs Bug Protien',
		symbol: 'BUGS-ETH UNIV2',
		tokenSymbol: 'BUGS',
		icon: '/starbugs.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/BUGS/ETH',
	},
	{
		pid: 183,
		lpAddresses: {
			1: '0x3dea39dc7af480fe9b8cdaab9f934f8592ba3ade',
		},
		tokenAddresses: {
			1: '0xe1afe1fd76fd88f78cbf599ea1846231b8ba3b6b',
		},
		tokenDecimals: 18,
		name: 'sDeFi Snackpack',
		symbol: 'sDEFI-ETH UNIV2',
		tokenSymbol: 'sDEFI',
		icon: '/snackers.png',
		refUrl: 'https://synthetix.exchange/#/',
	},
	{
		pid: 184,
		lpAddresses: {
			1: '0x60b2cc2c6ecd3dd89b4fd76818ef83186e2f2931',
		},
		tokenAddresses: {
			1: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
		},
		tokenDecimals: 18,
		name: 'Alpha Apple Pie',
		symbol: 'ALPHA-ETH UNIV2',
		tokenSymbol: 'ALPHA',
		icon: '/pie.png',
		refUrl: 'https://www.hotbit.io/register?ref=669143',
	},
	{
		pid: 185,
		lpAddresses: {
			1: '0xd0f15bd0bd6e59cd2f8ca6b207fc0eaa70f38ef5',
		},
		tokenAddresses: {
			1: '0x25c7b64a93eb1261e130ec21a3e9918caa38b611',
		},
		tokenDecimals: 18,
		name: 'Wrapped Virgin Gen 0 Kitty',
		symbol: 'WVG0-ETH UNIV2',
		tokenSymbol: 'WVG0',
		icon: '/wvg0.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/WVG0/ETH',
	},
	{
		pid: 186,
		lpAddresses: {
			1: '0x7ef85de60effb1ae1f2b50c88592804732bd89dc',
		},
		tokenAddresses: {
			1: '0xa89ac6e529acf391cfbbd377f3ac9d93eae9664e',
		},
		tokenDecimals: 18,
		name: 'KP4R Kebabs',
		symbol: 'KP4R-ETH UNIV2',
		tokenSymbol: 'KP4R',
		icon: '/kebab.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/KP4R/ETH',
	},
	{
		pid: 187,
		lpAddresses: {
			1: '0x29a9777da2bacd8c4a28b6fd8247c4ca4f098f12',
		},
		tokenAddresses: {
			1: '0x875773784af8135ea0ef43b5a374aad105c5d39e',
		},
		tokenDecimals: 18,
		name: 'Idle Ice',
		symbol: 'IDLE-ETH UNIV2',
		tokenSymbol: 'IDLE',
		icon: '/ice-cube.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/IDLE/ETH',
	},
	{
		pid: 188,
		lpAddresses: {
			1: '0xf66369997ae562bc9eec2ab9541581252f9ca383',
		},
		tokenAddresses: {
			1: '0xbc396689893d065f41bc2c6ecbee5e0085233447',
		},
		tokenDecimals: 18,
		name: 'Perpetual Pizza',
		symbol: 'PERP-ETH UNIV2',
		tokenSymbol: 'PERP',
		icon: '/pizza.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 189,
		lpAddresses: {
			1: '0xde2e46992bd4f86471b52f21dac2d7c9f6deac26',
		},
		tokenAddresses: {
			1: '0x6781a0f84c7e9e846dcb84a9a5bd49333067b104',
		},
		tokenDecimals: 18,
		name: 'Zap Zucchini Noodle',
		symbol: 'ZAP-ETH UNIV2',
		tokenSymbol: 'ZAP',
		icon: '/zucchini.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ZAP/ETH',
	},
	{
		pid: 190,
		lpAddresses: {
			1: '0x465e22e30ce69ec81c2defa2c71d510875b31891',
		},
		tokenAddresses: {
			1: '0x5d8d9f5b96f4438195be9b99eee6118ed4304286',
		},
		tokenDecimals: 18,
		name: 'Cover Cake',
		symbol: 'COVER-ETH UNIV2',
		tokenSymbol: 'COVER',
		poolType: 'archived',
		icon: '/cakey.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 191,
		lpAddresses: {
			1: '0xf55db1ee16fa5be86335688d2a1a6f4d439ca4bb',
		},
		tokenAddresses: {
			1: '0x115ec79f1de567ec68b7ae7eda501b406626478e',
		},
		tokenDecimals: 18,
		name: 'Carry Cupcake',
		symbol: 'CRE-ETH UNIV2',
		tokenSymbol: 'CRE',
		icon: '/cupcake.png',
		refUrl: 'https://www.huobi.com/en-us/topic/invited/?invite_code=pfr33',
	},
	{
		pid: 192,
		lpAddresses: {
			1: '0x495871f1825193471f614fde19c8c580f5e7ac63',
		},
		tokenAddresses: {
			1: '0xbbff34e47e559ef680067a6b1c980639eeb64d24',
		},
		tokenDecimals: 18,
		name: 'Leverj Gluon Lucky Cookie',
		symbol: 'L2-ETH UNIV2',
		tokenSymbol: 'L2',
		icon: '/fortune-cookie.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/L2/ETH',
	},
	{
		pid: 193,
		lpAddresses: {
			1: '0x68fa181c720c07b7ff7412220e2431ce90a65a14',
		},
		tokenAddresses: {
			1: '0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd',
		},
		tokenDecimals: 18,
		name: 'Dodo Deviled Eggs',
		symbol: 'DODO-ETH UNIV2',
		tokenSymbol: 'DODO',
		poolType: 'archived',
		icon: '/soy-eggs.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 194,
		lpAddresses: {
			1: '0x4dd26482738be6c06c31467a19dcda9ad781e8c4',
		},
		tokenAddresses: {
			1: '0x0b38210ea11411557c13457d4da7dc6ea731b88a',
		},
		tokenDecimals: 18,
		name: 'API3 Avocado Toast',
		symbol: 'API3-ETH UNIV2',
		tokenSymbol: 'API3',
		icon: '/toaster.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 195,
		lpAddresses: {
			1: '0x2ea2eb8f9a1bf17bcbf2555536c9d1e24e45ebc0',
		},
		tokenAddresses: {
			1: '0xf8c3527cc04340b208c854e985240c02f7b7793f',
		},
		tokenDecimals: 18,
		name: 'Front Frog Legs',
		symbol: 'FRONT-ETH UNIV2',
		tokenSymbol: 'FRONT',
		icon: '/frog-prince.png',
		refUrl: 'https://ftx.com/trade/FRONT/USD#a=createtrade',
	},
	{
		pid: 196,
		lpAddresses: {
			1: '0xf232d640a5700724748464ba8bd8bed21db609a6',
		},
		tokenAddresses: {
			1: '0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7',
		},
		tokenDecimals: 18,
		name: 'Skale Skippers',
		symbol: 'SKL-ETH UNIV2',
		tokenSymbol: 'SKL',
		icon: '/anchovy.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 197,
		lpAddresses: {
			1: '0xec6a6b7db761a5c9910ba8fcab98116d384b1b85',
		},
		tokenAddresses: {
			1: '0x4c19596f5aaff459fa38b0f7ed92f11ae6543784',
		},
		tokenDecimals: 8,
		name: 'TRU Turtle Soup',
		symbol: 'TRU-ETH UNIV2',
		tokenSymbol: 'TRU',
		icon: '/turtle.png',
		refUrl: 'https://www.mxc.ai/auth/signup?inviteCode=13z4G',
	},
	{
		pid: 198,
		lpAddresses: {
			1: '0x37a0464f8f4c207b54821f3c799afd3d262aa944',
		},
		tokenAddresses: {
			1: '0x26ce25148832c04f3d7f26f32478a9fe55197166',
		},
		tokenDecimals: 18,
		name: 'Dextools Drumsticks',
		symbol: 'DEXT-ETH UNIV2',
		tokenSymbol: 'DEXT',
		icon: '/drumstick.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/DEXT/ETH',
	},
	{
		pid: 199,
		lpAddresses: {
			1: '0x3f2eea452d4717dea05dbe55e1bfaf020294dd97',
		},
		tokenAddresses: {
			1: '0x6468e79a80c0eab0f9a2b574c8d5bc374af59414',
		},
		tokenDecimals: 18,
		name: 'eXRD Experimental Dish',
		symbol: 'eXRD-ETH UNIV2',
		tokenSymbol: 'eXRD',
		icon: '/scientist.png',
		refUrl: 'https://www.hoozh.com/friends/26368269?localeLang=en&',
	},
	{
		pid: 213,
		lpAddresses: {
			1: '0x598e740cda7c525080d3fcb9fa7c4e1bd0044b34',
		},
		tokenAddresses: {
			1: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
		},
		tokenDecimals: 18,
		name: 'sETH/ETH',
		symbol: 'sETH-ETH UNIV2',
		tokenSymbol: 'sETH',
		poolType: 'uni',
		icon: '/eth.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/sETH',
	},
	{
		pid: 214,
		lpAddresses: {
			1: '0x6147805e1011417b93e5d693424a62a70d09d0e5',
		},
		tokenAddresses: {
			1: '0xe95a203b1a91a908f9b9ce46459d101078c2c3cb',
		},
		tokenDecimals: 18,
		name: 'ankrETH/ETH',
		symbol: 'ankrETH-ETH UNIV2',
		tokenSymbol: 'ankrETH',
		poolType: 'uni',
		icon: '/eth.png',
		refUrl:
			'https://app.uniswap.org/#/swap?outputCurrency=0xe95a203b1a91a908f9b9ce46459d101078c2c3cb',
	},
	{
		pid: 215,
		lpAddresses: {
			1: '0x4028daac072e492d34a3afdbef0ba7e35d8b55c4',
		},
		tokenAddresses: {
			1: '0xae7ab96520de3a18e5e111b5eaab095312d7fe84',
		},
		tokenDecimals: 18,
		name: 'stETH/ETH (Lido)',
		symbol: 'stETH-ETH UNIV2',
		tokenSymbol: 'stETH',
		poolType: 'uni',
		icon: '/eth.png',
		refUrl:
			'https://app.uniswap.org/#/swap?outputCurrency=0xe95a203b1a91a908f9b9ce46459d101078c2c3cb',
	},
	{
		pid: 216,
		lpAddresses: {
			1: '0x3c70f4faea49e50adc8305f2e1aa0ea326a54ffc',
		},
		tokenAddresses: {
			1: '0xe28b3b32b6c345a34ff64674606124dd5aceca30',
		},
		tokenDecimals: 18,
		name: 'Injective Inectible Food',
		symbol: 'INJ-ETH UNIV2',
		tokenSymbol: 'INJ',
		poolType: 'uni',
		icon: '/injection.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/INJ',
	},
	{
		pid: 217,
		lpAddresses: {
			1: '0x208bd5dc470eba21571ddb439801a614ed346376',
		},
		tokenAddresses: {
			1: '0x09e64c2b61a5f1690ee6fbed9baf5d6990f8dfd0',
		},
		tokenDecimals: 18,
		name: 'GRO Lab Grown Meat',
		symbol: 'GRO-ETH UNIV2',
		tokenSymbol: 'GRO',
		poolType: 'uni',
		icon: '/lab-meat.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/GRO',
	},
	{
		pid: 218,
		lpAddresses: {
			1: '0x0f5a2eb364d8b722cba4e1e30e2cf57b6f515b2a',
		},
		tokenAddresses: {
			1: '0xd084b83c305dafd76ae3e1b4e1f1fe2ecccb3988',
		},
		tokenDecimals: 18,
		name: 'TVK Shared Meal',
		symbol: 'TVK-ETH UNIV2',
		tokenSymbol: 'TVK',
		poolType: 'uni',
		icon: '/picnic.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/TVK',
	},
	{
		pid: 219,
		lpAddresses: {
			1: '0x97c4adc5d28a86f9470c70dd91dc6cc2f20d2d4d',
		},
		tokenAddresses: {
			1: '0x853d955acef822db058eb8505911ed77f175b99e',
		},
		denominatorAddresses: {
			1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		},
		tokenDecimals: 18,
		name: 'FRAX/USDC Fries',
		symbol: 'FRAX-USDC UNIV2',
		tokenSymbol: 'FRAX',
		denominatorSymbol: 'USDC',
		poolType: 'uni',
		icon: '/fried-potatoes.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/FRAX',
	},
	{
		pid: 220,
		lpAddresses: {
			1: '0xae461ca67b15dc8dc81ce7615e0320da1a9ab8d5',
		},
		tokenAddresses: {
			1: '0x6b175474e89094c44da98b954eedeac495271d0f',
		},
		denominatorAddresses: {
			1: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
		},
		tokenDecimals: 18,
		name: 'DAI/USDC Dip',
		symbol: 'DAI-USDC UNIV2',
		tokenSymbol: 'DAI',
		denominatorSymbol: 'USDC',
		poolType: 'uni',
		icon: '/gravy.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/DAI',
	},
	{
		pid: 221,
		lpAddresses: {
			1: '0x454f11d58e27858926d7a4ece8bfea2c33e97b13',
		},
		tokenAddresses: {
			1: '0x5a98fcbea516cf06857215779fd812ca3bef1b32',
		},
		tokenDecimals: 18,
		name: 'Lido with Limes',
		symbol: 'LDO-ETH UNIV2',
		tokenSymbol: 'LDO',
		poolType: 'uni',
		icon: '/lime.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/LDO',
	},
	{
		pid: 222,
		lpAddresses: {
			1: '0x97524f602706cdb64f9dfa71909ace06e98200b6',
		},
		tokenAddresses: {
			1: '0x3472a5a71965499acd81997a54bba8d852c6e53d',
		},
		tokenDecimals: 18,
		name: 'Badger (...Edible?)',
		symbol: 'BADGER-ETH UNIV2',
		tokenSymbol: 'BADGER',
		poolType: 'uni',
		icon: '/badger.png',
		refUrl:
			'https://1inch.exchange/#/r/0x3bC3c8aF8CFe3dFC9bA1A57c7C3b653e3f6d6951/ETH/BADGER',
	},
	{
		pid: 223,
		lpAddresses: {
			1: '0x44d34985826578e5ba24ec78c93be968549bb918',
		},
		tokenAddresses: {
			1: '0x3c9d6c1c73b31c837832c72e04d3152f051fc1a9',
		},
		tokenDecimals: 18,
		name: 'Bor(ring) meal',
		symbol: 'BOR-ETH SLP',
		tokenSymbol: 'BOR',
		poolType: 'sushi',
		icon: '/steak.png',
		refUrl:
			'https://sushiswap.fi/token/0x3c9d6c1c73b31c837832c72e04d3152f051fc1a9',
	},
]

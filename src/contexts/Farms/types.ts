import { Contract } from 'web3-eth-contract'

export enum PoolType {
  SUSHI = 'sushi',
  UNI = 'uni',
  ARCHIVED = 'archived',
}

export interface Farm {
  pid: number
  name: string
  lpToken: string
  lpTokenAddress: string
  lpContract: Contract
  tokenAddress: string
  denominatorAddress: string
  mainnetDenominatorAddress: string
  denominatorContract: Contract
  earnToken: string
  earnTokenAddress: string
  icon: string
  id: string
  tokenSymbol: string
  denominatorSymbol?: string
  refUrl: string
  poolType?: PoolType
}

export interface FarmsContext {
  farms: Farm[]
  unharvested: number
}

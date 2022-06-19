import React from 'react'
import { ContractAbstraction, TezosToolkit, Wallet } from '@taquito/taquito'
import PropTypes from 'prop-types'
import config from '../utils/config'

export type TzContext = {
  toolkit: TezosToolkit
  setToolkit: (tk: TezosToolkit) => void
  contract: ContractAbstraction<Wallet> | null
  loadContract: () => Promise<void>
  contractStorage: any
}

const defaultContext: TzContext = {
  toolkit: new TezosToolkit(config.rpcURL),
  setToolkit(tk) {
    this.toolkit = tk
  },
  contract: null,
  contractStorage: null,
  async loadContract() {
    const wallet = this.toolkit.wallet
    this.contract = await wallet.at(config.contractAddress)
    this.contractStorage = await this.contract.storage()
  },
}

export const TzContext = React.createContext<TzContext>(defaultContext)

export default function TzContextProvider(props: {
  children: PropTypes.ReactNodeLike
}): JSX.Element {
  return (
    <TzContext.Provider value={defaultContext}>
      {props.children}
    </TzContext.Provider>
  )
}

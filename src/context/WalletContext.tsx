import { BeaconWallet } from '@taquito/beacon-wallet'
import PropTypes from 'prop-types'
import React from 'react'

type WalletInfo = {
  wallet: BeaconWallet | null
  userAddress: string
  setAddress: (address: string) => void
  setWallet: (address: BeaconWallet) => void
}

const defaultWallet: WalletInfo = {
  wallet: null,
  userAddress: '',
  setWallet(wallet) {
    this.wallet = wallet
  },
  setAddress(address) {
    this.userAddress = address
  },
}

export const WalletContext = React.createContext<WalletInfo>(defaultWallet)

export function WalletProvider(props: {
  children: PropTypes.ReactNodeLike
}): JSX.Element {
  const walletInfo = React.useContext(WalletContext)
  return (
    <WalletContext.Provider value={walletInfo}>
      {props.children}
    </WalletContext.Provider>
  )
}

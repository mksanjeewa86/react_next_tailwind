import ConnectButton from '../buttons/ConnectButton'
import { TezosToolkit } from '@taquito/taquito'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../buttons/Button'
import config from '../../utils/config'
import DisconnectButton from '../buttons/DisconnectButton'

function ConnectWallet() {
  const [Tezos] = useState<TezosToolkit>(new TezosToolkit(config.rpcURL))
  const [, setPublicToken] = useState<string | null>('')
  const [isWalletConnected, setWalletConnected] = useState<boolean>(false)

  if (isWalletConnected) {
    return (
      // <DisconnectButton/>
      <Button>
        <i className="fa fa-eye"></i> &nbsp; Explore
      </Button>
    )
  }

  return (
    <ConnectButton
      Tezos={Tezos}
      setPublicToken={setPublicToken}
      setWalletConnected={setWalletConnected}
    />
  )
}

export default function Header() {
  return (
    <nav className="bg-red-800 h-[50px] flex justify-center items-center text-white">
      <ConnectWallet />
    </nav>
  )
}

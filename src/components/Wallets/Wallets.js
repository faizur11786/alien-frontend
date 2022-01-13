import React from 'react'
import {
  WalletElement,
  WalletItem,
  WalletIcon,
  WalletName,
  Img,
} from './Wallet.elements'

import metamaskIcon from '../../assetss/img/metamask.png'
import fortmaticIcon from '../../assetss/img/fortmatic.png'
import walletconnectIcon from '../../assetss/img/walletconnect.svg'
import coinbaseWalletIcon from '../../assetss/img/coinbaseWalletIcon.svg'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import {
  injected,
  walletlink,
  walletconnect,
  fortmatic,
} from '../../connectors'
import { InjectedConnector } from '@web3-react/injected-connector'
import { setupNetwork } from '../../utilss/wallet'

const Wallets = ({ setWalletOpen }) => {
  const walletList = [
    {
      name: 'MetaMask',
      icon: metamaskIcon,
    },
    {
      name: 'WalletConnect',
      icon: walletconnectIcon,
    },
    {
      name: 'Coinbase',
      icon: coinbaseWalletIcon,
    },
  ]
  const { activate } = useWeb3React()
  const connectWithWallet = async (wallet) => {
    try {
      console.log(wallet)
      if (wallet instanceof InjectedConnector) {
        await activate(injected, async (error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork()
            if (hasSetup) {
              activate(injected)
            }
          }
        })
      }
      await activate(wallet).then(async (error) => {
        setWalletOpen(false)
      })

      // await activate(injected, async (error) => {
      //   if (error instanceof UnsupportedChainIdError) {
      //     const hasSetup = await setupNetwork();
      //     if (hasSetup) {
      //       activate(injected);
      //     }
      //   }
      // });
    } catch (error) {
      console.log("Fuck It's Not Working...", error)
    }
  }
  return (
    <WalletElement>
      {walletList.map((item, index) => {
        return (
          <>
            <WalletItem
              // className={`${
              //   item.name === 'MetaMask' &&
              //   library?.connection.url === 'metamask'
              //     ? 'connected'
              //     : ''
              // }`}
              key={index}
              onClick={() =>
                connectWithWallet(
                  (item.name === 'MetaMask' && injected) ||
                    (item.name === 'WalletConnect' && walletconnect) ||
                    (item.name === 'Coinbase' && walletlink)
                )
              }>
              <WalletName>{item.name}</WalletName>
              <WalletIcon>
                <Img src={item.icon} />
              </WalletIcon>
            </WalletItem>
          </>
        )
      })}
    </WalletElement>
  )
}

export default Wallets

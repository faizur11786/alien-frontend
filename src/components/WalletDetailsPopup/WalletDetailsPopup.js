import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {
  PopupElement,
  PopupHeader,
  PopupBody,
  Close,
  PopupHeading,
  AccountDetails,
  WalletName,
  Account,
  AccountNumber,
  Button,
  LinkGroup,
  LinkGroupItem,
  Span,
} from './WalletDetailsPopup.elements'
import { useWeb3React } from '@web3-react/core'
const WalletPopup = ( { changePopupOpen, setWalletOpen, closeModal } ) => {
  const contentStyle = {
    background: 'linear-gradient(63.18deg, #18171F 0%, #1C1B24 100%)',
    width: '400px',
    border: 'none',
    padding: 0,
    borderRadius: '10px',
    overflow: 'hidden',
  }
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' }
  const { account } = useWeb3React()

  function trimAdd ( add = '0x00', l = 5 ) {
    return (
      String( add ).slice( 0, 2 ) +
      String( add ).slice( 2, 2 + l ) +
      '...' +
      String( add ).slice( add.length - l, add.length )
    )
  }

  const copyAddess = () => {
    navigator.clipboard.writeText( account )
  }

  return (
    <>
      <Popup
        open={changePopupOpen}
        closeOnDocumentClick
        onClose={closeModal}
        {...{
          contentStyle,
          overlayStyle,
        }}>
        <PopupElement >
          <PopupHeader>
            <PopupHeading>Account</PopupHeading>
            <Close onClick={closeModal}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
              </svg>
            </Close>
          </PopupHeader>
          <PopupBody>
            <AccountDetails>
              <Account>
                <WalletName>
                  Connected with{' '}
                  {/* {library?.connection.url === 'metamask' && 'MetaMask'} */}
                </WalletName>
                <Button onClick={() => setWalletOpen( true )}>Change</Button>
              </Account>
              <AccountNumber>{trimAdd( account )}</AccountNumber>
              <LinkGroup>
                <LinkGroupItem onClick={copyAddess}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  <Span style={{ fontSize: '20px', marginLeft: '10px' }}>Copy Address</Span>
                </LinkGroupItem>
                <LinkGroupItem
                  href={`https://rinkeby.etherscan.io/address/${account}`}
                  target="_blank">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <Span style={{ fontSize: '20px', marginLeft: '10px' }}>View on Explorer</Span>
                </LinkGroupItem>
              </LinkGroup>
            </AccountDetails>

            {/* <Wallets setChangePopupOpen={setChangePopupOpen} /> */}
          </PopupBody>
        </PopupElement>
      </Popup>
    </>
  )
}

export default WalletPopup

import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Wallets from "../Wallets/Wallets";
import {
  PopupElement,
  PopupHeader,
  PopupBody,
  Close,
  PopupHeading,
} from "./Popup.elements";
// import { useWeb3React } from "@web3-react/core";
const WalletPopup = ( { walletOpen, setWalletOpen, closeModal } ) => {
  const contentStyle = {
    background: "linear-gradient(63.18deg, #18171F 0%, #1C1B24 100%)",
    width: "400px",
    border: "none",
    padding: 0,
    borderRadius: "10px",
    overflow: "hidden",
  };
  const overlayStyle = { background: "rgba(0,0,0,0.5)" };
  // const { active } = useWeb3React();
  return (
    <>
      <Popup
        open={walletOpen}
        closeOnDocumentClick
        onClose={closeModal}
        {...{
          contentStyle,
          overlayStyle,
        }}
      >
        <PopupElement>
          <PopupHeader>
            <PopupHeading>Connect to a wallet</PopupHeading>
            <Close onClick={closeModal}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
              </svg>
            </Close>
          </PopupHeader>
          <PopupBody>
            <Wallets setWalletOpen={setWalletOpen} />
          </PopupBody>
        </PopupElement>
      </Popup>
    </>
  );
};

export default WalletPopup;

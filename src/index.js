import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import App from "./App";
import getLibraryEther from "./utilss/getLibraryEther";

const Web3ProviderNetwork = createWeb3ReactRoot("NETWORK");
const Web3Provider = createWeb3ReactRoot("web3");

export const getLibrary = (provider) => {
  return provider;
};

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibraryEther}>
      <Web3Provider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibraryEther}>
          <App />
        </Web3ProviderNetwork>
      </Web3Provider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

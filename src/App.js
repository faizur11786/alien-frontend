import React, { useEffect, useState } from "react";

import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { injected } from "./connectors";
import { setupNetwork } from "./utilss/wallet";
import Routing from './Routing'
function App () {
  const { activate } = useWeb3React();

  const { ethereum } = window;
  useEffect( () => {
    defaultConnect();
  }, [] );

  if ( ethereum ) {
    ethereum.on( "accountsChanged", function ( accounts ) {
      window.location.reload();
      if ( ethereum.removeListener ) {
        ethereum.removeListener( "chainChanged" );
        ethereum.removeListener( "accountsChanged" );
      }
    } );
  }

  useEffect( () => {
    console.warn = () => null;
    if ( window && window.ethereum ) {
      window.ethereum.on( "chainChanged", async () => {
        try {
          await activate( injected, async ( error ) => {
            if ( error instanceof UnsupportedChainIdError ) {
              const hasSetup = await setupNetwork();
              if ( hasSetup ) {
                activate( injected );
              }
            }
          } );
        } catch ( error ) {
          console.error( error );
        }
      } );
    }
  }, [] );
  const defaultConnect = async () => {
    try {
      await activate( injected, async ( error ) => {
        if ( error instanceof UnsupportedChainIdError ) {
          const hasSetup = await setupNetwork();
          if ( hasSetup ) {
            activate( injected );
          }
        }
      } );
    } catch ( error ) {
      console.error( error );
    }
  };

  useEffect( () => {
    // Now Attach All Third Party Scripts.
    let jquery = document.createElement( "script" );
    let bootstrap = document.createElement( "script" );
    let slick = document.createElement( "script" );
    let venobox = document.createElement( "script" );
    let lightbox = document.createElement( "script" );
    let counterup = document.createElement( "script" );
    let waypoints = document.createElement( "script" );
    let particles = document.createElement( "script" );
    let app = document.createElement( "script" );
    let timeline = document.createElement( "script" );
    let custom = document.createElement( "script" );

    // Hook Sources.
    jquery.src = `${process.env.PUBLIC_URL}/js/jquery-3.3.1.min.js`;
    bootstrap.src = `${process.env.PUBLIC_URL}/js/bootstrap.min.js`;
    slick.src = `${process.env.PUBLIC_URL}/js/slick.min.js`;
    venobox.src = `${process.env.PUBLIC_URL}/js/venobox.min.js`;
    lightbox.src = `${process.env.PUBLIC_URL}/js/lightbox.min.js`;
    counterup.src = `${process.env.PUBLIC_URL}/js/counterup.min.js`;
    waypoints.src = `${process.env.PUBLIC_URL}/js/waypoints.min.js`;
    particles.src = `${process.env.PUBLIC_URL}/js/particles.js`;
    app.src = `${process.env.PUBLIC_URL}/js/app.js`;
    timeline.src = `${process.env.PUBLIC_URL}/js/timeline.js`;
    custom.src = `${process.env.PUBLIC_URL}/js/custom.js`;

    // Persist order of Loading.
    jquery.async = false;
    bootstrap.async = false;
    slick.async = false;
    venobox.async = false;
    lightbox.async = false;
    counterup.async = false;
    waypoints.async = false;
    particles.async = false;
    app.async = false;
    timeline.async = false;
    custom.async = false;

    // Append to index.html
    document.body.appendChild( jquery );
    document.body.appendChild( bootstrap );
    document.body.appendChild( slick );
    document.body.appendChild( venobox );
    document.body.appendChild( lightbox );
    document.body.appendChild( counterup );
    document.body.appendChild( waypoints );
    document.body.appendChild( particles );
    document.body.appendChild( app );
    document.body.appendChild( timeline );
    document.body.appendChild( custom );

    // Do Clean ups
    return () => {
      document.body.removeChild( jquery );
      document.body.removeChild( bootstrap );
      document.body.removeChild( slick );
      document.body.removeChild( venobox );
      document.body.removeChild( lightbox );
      document.body.removeChild( counterup );
      document.body.removeChild( waypoints );
      document.body.removeChild( particles );
      document.body.removeChild( app );
      document.body.removeChild( timeline );
      document.body.removeChild( custom );
    };
  }, [] );
  return (
    <Routing />
  );
}

export default App;

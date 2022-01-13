// import Particles from 'react-tsparticles';

// import particlesConfig from '../config/configParticles';
import { MintAddress } from '../Contract/addresses';
import BannerImg from '../images/banner.jpg';
import mintABI from "../Contract/mint.json"
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';


const Banner = () => {

	const { account } = useWeb3React();
	const [mintAmount, setmintAmount] = useState( 0 );
  	const [message, setMessage] = useState('');
	const [error, setError] = useState( "" )
	const [NFTValue, setNFTValue] = useState( 0 )
	//Handle mint nft function

	// Get RefAddress from local storage
	const getRefAddressLocal = () => {
		const refAddressLocal = localStorage.getItem( 'refAddress' )
		return refAddressLocal
	}
	const web3 = new Web3( window.ethereum || Web3.givenProvider );
	const contract = new web3.eth.Contract( mintABI, MintAddress );


	const handlerMintNFT = (e) => {
		e.preventDefault();
		if ( !account ) {
			setError('Please Connect your Wallet to continue');
		} else if ( mintAmount > 0 ) {
			setMessage( 'Waiting on transaction success...' );
			contract.methods.mintNFTPresale( mintAmount, getRefAddressLocal() )
				.send( { from: account, value: NFTValue } )
				.on( 'transactionHash', ( hash ) => {
					setMessage( `Transaction hash: ${hash}` );
				} )
				.on( 'confirmation', ( confirmationNumber, receipt ) => {
					if ( confirmationNumber === 1 ) {
						setMessage( `Transaction confirmed: ${receipt.transactionHash}` );
					}
				} )
				.on( 'receipt', ( receipt ) => {
					setMessage( `Transaction receipt: ${receipt.transactionHash}` );
				} )
				.on( 'error', ( error ) => {
					setMessage('');
					setError( `Transaction error: ${error.message}` );
				} )
		}
	}
	

	useEffect( () => {
	}, [account] )
	
	return (
		<section id='banner'>
			<div className='particles-js-canvas-el' id='particles-js'>
				{/* <Particles
					height='100vh'
					width='100vw'
					params={particlesConfig}
				/> */}
			</div>
			<div className='backtotop'>
				<a href='#banner'>
					<i className='fa fa-angle-up' aria-hidden='true'></i>
				</a>
			</div>
			<div className='follow-us'>
				<span>Follow us</span>
				<a href='https://twitter.com/rhelegus' target='_blank'>
					<i className='fab fa-twitter'></i>
				</a>
				<a href='https://discord.gg/QDX46vfM4R' target='_blank'>
					<i className='fab fa-discord'></i>
				</a>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 col-sm-8 col-md-6 landscape-m-auto tab-m-auto banner-img'>
						<img
							src={BannerImg}
							alt='banner-img'
							className='img-fluid'
						/>
					</div>
					<div className='col-lg-5 m-auto banner-txt'>
						<div className='banner-main'>
							<div className='banner-item'>
								<h3>Project</h3>
								<h3>Rhelegus</h3>
								<p>
									"If war is madness then Rhelegus is living
									in the apocalypse" - The True Gods of
									Xorbin. 7777 Programmatically Unique NFTs
									waiting to be awaken on the ETH Blockchain.
									<br />
									All priced at <b>ETH 0.077</b>
								</p>
								<div className="mint--form">
									<input
										type="text"
										value={mintAmount}
										onChange={async e => {
											setMessage( "" )
											setmintAmount( e.target.value > 0 && e.target.value <= 20
												? e.target.value
												: "" );
											if ( e.target.value > 0 && e.target.value <= 20 ) {
												await contract.methods.getNFTPriceForETH( e.target.value ).call()
													.then( ( balance ) => {
														setNFTValue( balance )
													} )
											} else if ( e.target.value > 20 ) {
												setError("You can mint maximum 20 tokens at a time")
											}
											else{
												setError("")
											}
										}}
									/>
									<button onClick={handlerMintNFT} className='main-btn'>
										Mint Now
									</button>
								</div>
								
								
								<ul className="mint--info">
									{message && <li>{message}</li>}
									{error && <li className="error">{error}</li>}
									<hr />
									<li>
										*Maximum is 20 NFT per one transaction
									</li>
									<li>
										*Number of transactions is unlimited
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;

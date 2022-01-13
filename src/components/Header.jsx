import React, { useEffect, useState } from "react";

import { useWeb3React } from "@web3-react/core";
import WalletPopup from './Popup/Popup'
import WalletDetailsPopup from './WalletDetailsPopup/WalletDetailsPopup'
import { useLocation } from "react-router-dom";


const Header = () => {

	function trimAdd ( add = "0x00", l = 5 ) {
		return (
			String( add ).slice( 0, 2 ) +
			String( add ).slice( 2, 2 + l ) +
			"..." +
			String( add ).slice( add.length - l, add.length )
		);
	}

	const { host } = window.location;

	const { account } = useWeb3React();
	const [showOffer, toggleOffer] = useState( false );
	const [walletOpen, setWalletOpen] = useState( false );
	const closeModal = () => setWalletOpen( false );
	const [changePopupOpen, setChangePopupOpen] = useState( false );
	const closeModalChangePopup = () => setChangePopupOpen( false );



	const location = useLocation();

	useEffect(() => {
		saveRefAddress()
	}, [])

	// Save RefAddress in local storage
	const saveRefAddress = () => {
		const refAddress = location.search.split( '=' )[1]
		const refAddressLocal = refAddress ? refAddress : '0x0000000000000000000000000000000000000000'
		localStorage.setItem( 'refAddress', refAddressLocal )
		return refAddressLocal
	}



	return (
		<nav
			className='navbar navbar-expand-lg navbar-light bg-light sticky-top'
			id='navber'
		>
			{walletOpen && (
				<WalletPopup
					walletOpen={walletOpen}
					setWalletOpen={setWalletOpen}
					closeModal={closeModal}
				/>
			)}
			{changePopupOpen && (
				<WalletDetailsPopup
					setWalletOpen={setWalletOpen}
					changePopupOpen={changePopupOpen}
					setChangePopupOpen={setChangePopupOpen}
					closeModal={closeModalChangePopup}
				/>
			)}
			<div className='container'>
				<a className='navbar-brand' href='/'>
					RHELEGUS<span>.</span>
				</a>

				<div className='menu-main' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto menu-item'>
						{/* <li className="nav-item">
                        <a className="nav-link nl-m-top abc mobile-content-hide"><i className="fa fa-search" aria-hidden="true"></i></a>
                        <div className="search top-search">
                            <button type="button" className="close fix-close">×</button>
                            <form>
                                <input type="search" value="" placeholder="Search Here" />
                                <button type="submit" className="btn btn-primary">Search</button>
                            </form>
                        </div>
                    </li> */}
						{/* <li className="nav-item">
                        <a className="nav-link cart nl-m-top mobile-content-hide" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-shopping-bag" aria-hidden="true"></i><span>2</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nl-m-top account-icon" href="login.html"><i className="fa fa-user" aria-hidden="true"></i></a>
                    </li> */}
						{account && (
							<li>
								<button onClick={() => {
									navigator.clipboard.writeText(`${host}/?ref=${account}`);
									alert( `Copied: ${host}/?ref=${account}` )
								} }>
									{"COPY REFERRAL LINK"}
								</button>
							</li>
						)}

						<li>
							<button onClick={account
								? () => setChangePopupOpen( true )
								: () => setWalletOpen( true )}>
								{account ? trimAdd( account ) : "connect wallet"}

							</button>
						</li>
						<li className='nav-item'>
							<a className='nav-link menu-icon'>
								<i
									className='fa fa-bars'
									aria-hidden='true'
								></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='custom-menubar'>
				<ul className='nav-link-block'>
					<li>
						<a href='#banner' className='menu-link'>
							Home
						</a>
					</li>
					<li>
						<a href='#watch' className='menu-link'>
							Story
						</a>
					</li>
					<li>
						<a href='#games' className='menu-link'>
							Collection
						</a>
					</li>
					<li>
						<a href='#about' className='menu-link'>
							Specification
						</a>
					</li>
				</ul>
				{/* <ul className="responsive-nav">
                <li>
                    <a className="nav-link nl-m-top abc"><i className="fa fa-search" aria-hidden="true"></i></a>
                    <div className="search top-search">
                        <button type="button" className="close fix-close">×</button>
                        <form>
                            <input type="search" value="" placeholder="Search Here" />
                            <button type="submit" className="btn btn-primary">Search</button>
                        </form>
                    </div>
                </li>
                <li>
                    <a className="nav-link cart nl-m-top" data-toggle="modal" data-target="#exampleModalCenter"><i className="fa fa-shopping-bag" aria-hidden="true"></i><span>2</span></a>
                </li>
                <li>
                    <a className="nav-link nl-m-top" href="login.html"><i className="fa fa-user" aria-hidden="true"></i></a>
                </li>
            </ul> */}
				<div className='menu-close'>
					<a className='hide-menu-btn'>
						<i className='fa fa-times' aria-hidden='true'></i>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Header;

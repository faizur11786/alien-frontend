const Footer = () => {
	return (
		<section id='footer'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6 footer-logo'>
						<a href='/'>
							RHELEGUS<b>.</b>
						</a>
						<p>
							"If war is madness then Rhelegus is living in the
							apocalypse" - The True Gods of Xorbin. 7777
							Programmatically Unique NFTs waiting to be awaken on
							the ETH Blockchain.
						</p>
						<div className='footer-social'>
							<a
								href='https://twitter.com/rhelegus'
								target='_blank'
							>
								<i className='fab fa-twitter'></i>
							</a>
							<a
								href='https://discord.gg/QDX46vfM4R'
								target='_blank'
							>
								<i className='fab fa-discord'></i>
							</a>
						</div>
					</div>
					<div className='col-lg-2 col-sm-4 footer-menu'>
						<h3>Site Menu</h3>
						<a href='/'>Home</a>
						<a href='#watch'>Story</a>
						<a href='#games'>Collection</a>
						<a href='#about'>Specification</a>
					</div>
					<div className='col-lg-2 col-sm-4 footer-menu'>
						<h3>Useful Links</h3>
						<a href='#join'>Why Participate</a>
						<a href='#blog'>Gallery</a>
						<a href='#roadmap'>Roadmap</a>
						<a href='#player'>Our Team</a>
					</div>
					<div className='col-lg-2 col-sm-4 footer-menu'>
						<h3>Information</h3>
						<a href='#'>FAQ</a>
						<a href='#'>Site Maps</a>
						<a href='#'>Privacy Policy</a>
						<a
							href='#'
							data-toggle='modal'
							data-target='#contact-model-large'
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;

import aboutImg from '../images//about.jpg';

const About = () => {
	return (
		<section id='about'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12 heading'>
						<h3>Specification</h3>
					</div>
				</div>
				<div className='row about-pt'>
					<div className='col-lg-5 col-sm-9 m-sm-auto about-img'>
						{/* <div className='about-txt-overlay'>
							<h3
								className='counter'
								data-counterup-time='2000'
								data-counterup-delay='30'
								data-counterup-beginat='1'
							>
								12
							</h3>
							<span>Years of Leading</span>
						</div> */}
						<img
							src={aboutImg}
							alt='about-img'
							className='img-fluid'
						/>
					</div>
					<div className='col-lg-7'>
						<div className='about-txt'>
							<span>RHELEGUS</span>
							<h3>
								ALL OXYZERS ARE WARRIORS BUT SOME HAVE
								INCREDIBLY MORE SUPERPOWERS THAN THE OTHERS
								<b>.</b>
							</h3>
							<p>
								Each Oxyzer is unique and programmatically
								generated from over 200+ possible traits,
								including body type, armor, halo, earring,
								facial features, weapons, wings, accessories,
								horns and more.
							</p>
							<p className='mb-3'>
								The Oxyzers are stored as ERC-721 tokens on the
								Ethereum blockchain and hosted on IPFS. (See
								Record and Proof.)
							</p>
							<a href='#' className='main-btn'>
								Explore More
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;

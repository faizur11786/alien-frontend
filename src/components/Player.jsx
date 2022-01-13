import RhelegusN7 from '../images/Rhelegus-n7.jpg';
import RhelegusN8 from '../images/Rhelegus-n8.jpg';
import RhelegusN9 from '../images/Rhelegus-n9.jpg';
import RhelegusN10 from '../images/Rhelegus-n10.jpg';

const Player = () => {
	return (
		<section id='player'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12 heading'>
						<h3>Our Team</h3>
						<p>
							Our Team consists of 6 people working their @$$es
							off from different parts of the world. We might be
							multinational but the love for NFTs unites all 6 of
							us. Also pizzas.
						</p>
					</div>
				</div>
				<div className='row player-pa'>
					<div className='col-lg-12'>
						<div className='player-main'>
							<div className='col-lg-4 player-middle'>
								<div className='player-item'>
									<div className='player-img'>
										<img
											src={RhelegusN7}
											alt='player-img'
											className='img-fluid'
										/>
									</div>
									<div className='player-info'>
										<h3>King John I</h3>
										<p>
											Connects All The Dots, Gets Things
											Done
										</p>
									</div>
								</div>
							</div>
							<div className='col-lg-4 player-middle'>
								<div className='player-item'>
									<div className='player-img'>
										<img
											src={RhelegusN8}
											alt='player-img'
											className='img-fluid'
										/>
									</div>
									<div className='player-info'>
										<h3>High Claw</h3>
										<p>Pays For Everything And Everytime</p>
									</div>
								</div>
							</div>
							<div className='col-lg-4 player-middle'>
								<div className='player-item'>
									<div className='player-img'>
										<img
											src={RhelegusN9}
											alt='player-img'
											className='img-fluid'
										/>
									</div>
									<div className='player-info'>
										<h3>Uranus</h3>
										<p>
											Crazy Illustrator With A Funny Name
										</p>
									</div>
								</div>
							</div>
							<div className='col-lg-4 player-middle'>
								<div className='player-item'>
									<div className='player-img'>
										<img
											src={RhelegusN10}
											alt='player-img'
											className='img-fluid'
										/>
									</div>
									<div className='player-info'>
										<h3>Horny Ostrich</h3>
										<p>Manages Frontend Design</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className='row player-pa2'>
					<div className='col-lg-6 col-sm-12 player-txt'>
						<h3>
							Meet our Weekly top players From Worldwide<b>.</b>
						</h3>
					</div>
					<div className='col-lg-6 col-sm-7 m-sm-auto player-txt'>
						<div className='row'>
							<div className='col-lg-6 col-sm-6 text-center'>
								<h4
									className='counter'
									data-counterup-time='2500'
									data-counterup-delay='30'
									data-counterup-beginat='50'
								>
									150
								</h4>
								<span>M</span>
								<p>Total Players</p>
							</div>
							<div className='col-lg-6 col-sm-6 text-center'>
								<h4
									className='counter'
									data-counterup-time='2500'
									data-counterup-delay='30'
									data-counterup-beginat='50'
								>
									221
								</h4>
								<span>K</span>
								<p>eSports Teams</p>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default Player;

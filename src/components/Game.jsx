import Game1 from '../images/game1.jpg';
import Game2 from '../images/game2.jpg';
import Game3 from '../images/game3.jpg';
import Game4 from '../images/game4.jpg';

const Game = () => {
	return (
		<section id='games'>
			<div className='container game-line'>
				<div className='gl-one gl'></div>
				<div className='gl-two gl'></div>
				<div className='row game-pa'>
					<div className='col-lg-4 col-md-11 tab-m-auto'>
						<div className='game-box'>
							<span>Rhelegus</span>
							<h3>Collection</h3>
							<p>
								7777 Programmatically Unique NFTs waiting to be
								awaken on the ETH Blockchain
							</p>
							<a href='#' className='main-btn'>
								View on OpenSea
							</a>
						</div>
					</div>
					<div className='col-lg-8'>
						<div className='game-main'>
							<div className='col-lg-4 game-item text-center'>
								<div className='game-img'>
									<img
										src={Game2}
										alt='game-img'
										className='img-fluid'
									/>
								</div>
							</div>
							<div className='col-lg-4 game-item text-center'>
								<div className='game-img'>
									<img
										src={Game1}
										alt='game-img'
										className='img-fluid'
									/>
								</div>
							</div>
							<div className='col-lg-4 game-item text-center'>
								<div className='game-img'>
									<img
										src={Game3}
										alt='game-img'
										className='img-fluid'
									/>
								</div>
							</div>
							<div className='col-lg-4 game-item text-center'>
								<div className='game-img'>
									<img
										src={Game4}
										alt='game-img'
										className='img-fluid'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Game;

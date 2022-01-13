const Counter = () => {
	return (
		<section id='counter'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-3 col-sm-6 text-center'>
						<div className='counter-item'>
							<h3
								className='counter'
								data-counterup-time='2500'
								data-counterup-delay='30'
								data-counterup-beginat='20'
							>
								7777
							</h3>
							<span>
								<b>.</b>
							</span>
							<p>Total Supply</p>
						</div>
					</div>
					<div className='col-lg-3 col-sm-6 text-center'>
						<div className='counter-item'>
							<h3
								className='counter'
								data-counterup-time='2500'
								data-counterup-delay='30'
								data-counterup-beginat='20'
							>
								200
							</h3>
							<span>
								+<b>.</b>
							</span>
							<p>Handdrawn Attributes</p>
						</div>
					</div>
					<div className='col-lg-3 col-sm-6 text-center'>
						<div className='counter-item'>
							<h3
								className='counter'
								data-counterup-time='2500'
								data-counterup-delay='30'
								data-counterup-beginat='20'
							>
								30
							</h3>
							<span>
								<b>.</b>
							</span>
							<p>Body Types</p>
						</div>
					</div>
					<div className='col-lg-3 col-sm-6 text-center'>
						<div className='counter-item'>
							<h3
								className='counter'
								data-counterup-time='2500'
								data-counterup-delay='30'
								data-counterup-beginat='20'
							>
								0.077
							</h3>
							<span>
								ETH<b>.</b>
							</span>
							<p>Initial Price</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Counter;

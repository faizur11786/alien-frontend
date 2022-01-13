import Background from '../images/subscribe.jpg';

const Subscribe = () => {
	return (
		<section
			id='subscribe'
			style={{ backgroundImage: `url(${Background})` }}
		>
			<div className='container zindex'>
				<div className='row'>
					<div className='col-lg-6 col-md-8 subscribe-txt'>
						<h3>
							Get Latest News In Your Inbox From Rise Of Rhelegus
							Team<b>.</b>
						</h3>
					</div>
					<div className='col-lg-6 col-md-4 text-center'>
						<a href='#' className='subscribe-btn'>
							Subscribe Now
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;

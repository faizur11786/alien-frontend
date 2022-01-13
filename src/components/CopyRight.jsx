const CopyRight = () => {
	return (
		<section id='copy_right'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='row'>
							<div className='col-lg-6 col-sm-7 copy-right-txt'>
								<p>
									<i
										className='fa fa-copyright'
										aria-hidden='true'
									></i>{' '}
									{new Date().getFullYear()} - Developed by{' '}
									<a href='#'>Rhelegus Team</a>
								</p>
							</div>
							<div className='col-lg-6 col-sm-5 text-right copy-right-txt'>
								<p>All Rights Reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CopyRight;

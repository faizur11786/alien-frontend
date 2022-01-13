import RhelegusN3 from '../images/Rhelegus-n3.jpg';
import RhelegusN4 from '../images/Rhelegus-n4.jpg';
import RhelegusN5 from '../images/Rhelegus-n5.jpg';
import RhelegusN6 from '../images/Rhelegus-n6.jpg';

const Blog = () => {
	return (
		<section id='blog'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12 heading'>
						<h3>Gallery</h3>
					</div>
				</div>
				<div className='row blog-pa'>
					<div className='col-lg-12'>
						<div className='blog-main'>
							<div className='col-lg-4 blog-item'>
								<img
									src={RhelegusN3}
									alt='blog-img'
									className='img-fluid'
								/>
							</div>
							<div className='col-lg-4 blog-item'>
								<img
									src={RhelegusN4}
									alt='blog-img'
									className='img-fluid'
								/>
							</div>
							<div className='col-lg-4 blog-item'>
								<img
									src={RhelegusN5}
									alt='blog-img'
									className='img-fluid'
								/>
							</div>
							<div className='col-lg-4 blog-item'>
								<img
									src={RhelegusN6}
									alt='blog-img'
									className='img-fluid'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='blog-arrow text-center'>
							<i
								className='fa fa-angle-left arrow-al'
								aria-hidden='true'
							></i>
							<i
								className='fa fa-angle-right arrow-ar'
								aria-hidden='true'
							></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;

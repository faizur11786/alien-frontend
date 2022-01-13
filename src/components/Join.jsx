import Image from '../images/join-bg.jpg';

const Join = () => {
	return (
		<section id='join'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-12 heading'>
						<h3>Why Participate?</h3>
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='join-bg'>
							<div className='row'>
								<div className='col-lg-6 join-txt'>
									<span>
										Because you are Xorbin's last hope! But
										there are some other cool reasons too:
									</span>
									<h3>
										OWNERSHIP OF A RHELEGUS NFT GIVES YOU
										THE FULL COMMERCIAL RIGHTS TO THAT
										CHARACTER
									</h3>
									<p>
										The Oxyzers can breed amongst themselves
										to create even more powerful Oxyzer
										descendants will give you amazing
										benefits when the Rhelegus commences.
										<br />
										<br />
										Participating, you have a voice in the
										community and can share your viewpoints
										regarding the later stages of the
										project like breeding, future of the
										descendants and much more!
									</p>
								</div>
								<div className='col-lg-6 join-img'>
									<img
										src={Image}
										alt='join-img'
										className=''
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

export default Join;

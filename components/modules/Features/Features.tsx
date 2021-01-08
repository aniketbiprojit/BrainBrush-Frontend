import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

const Features = (props) => {
	return (
		<div>
			<div className='text-3xl font-semibold text-center text-primary'>What is BrainBrush?</div>
			<div className='flex flex-col justify-center py-20'>
				<div className='relative py-3 sm:max-w-xl sm:mx-auto'>
					<div className='absolute inset-0 transform shadow-lg skew-y-8 bg-gradient-to-r from-secondary to-primary-light sm:skew-y-0 sm:rotate-6 sm:rounded-3xl'></div>
					<div className='relative px-4 py-10 bg-gray-100 shadow-lg sm:rounded-3xl sm:p-20'>
						<div className='max-w-md mx-auto'>
							<div className='text-5xl text-secondary-light'>
								<FontAwesomeIcon icon={faArrowCircleDown} />
							</div>
							<div className='divide-y divide-gray-200'>
								<div className='py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7'>
									<p className='text-xl font-semibold text-secondary'>What we deliver!</p>
									<ul className='space-y-2 list-disc'>
										<li className='flex items-start'>
											<span className='flex items-center h-6 sm:h-7'>
												<svg className='flex-shrink-0 w-5 h-5 text-cyan-500' viewBox='0 0 20 20' fill='currentColor'>
													<path
														fill-rule='evenodd'
														d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
														clip-rule='evenodd'
													/>
												</svg>
											</span>
											<p className='ml-2'>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam asperiores exercitationem, ipsa cum
												ipsum quod dolore ducimus excepturi maiores accusantium!
											</p>
										</li>
										<li className='flex items-start'>
											<span className='flex items-center h-6 sm:h-7'>
												<svg className='flex-shrink-0 w-5 h-5 text-cyan-500' viewBox='0 0 20 20' fill='currentColor'>
													<path
														fill-rule='evenodd'
														d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
														clip-rule='evenodd'
													/>
												</svg>
											</span>
											<p className='ml-2'>
												Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint, sit ab repudiandae excepturi
												dolore!
											</p>
										</li>
										<li className='flex items-start'>
											<span className='flex items-center h-6 sm:h-7'>
												<svg className='flex-shrink-0 w-5 h-5 text-cyan-500' viewBox='0 0 20 20' fill='currentColor'>
													<path
														fill-rule='evenodd'
														d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
														clip-rule='evenodd'
													/>
												</svg>
											</span>
											<p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repellat.</p>
										</li>
									</ul>
									<p>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis cum repellat tempore suscipit aliquam
										accusantium rem velit ut odit adipisci minima, rerum fugit nisi illo aperiam quae, veniam facere voluptas.
									</p>
								</div>
								<div className='pt-6 text-base font-bold leading-6 sm:text-lg sm:leading-7'>
									<p>Want to dig deeper?</p>
									<p>
										<a href='#' className='text-cyan-600 hover:text-cyan-700'>
											{' '}
											Get to know more &rarr;{' '}
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Features

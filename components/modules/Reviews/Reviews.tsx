import { Rewrite } from 'next/dist/lib/load-custom-routes'

const Reviews = (props) => {
	return (
		<div className='items-center p-0 mx-48 mb-48 text-center mt-28'>
			<div className='pb-4 mb-10 text-lg font-bold text-center text-primary md:text-5xl'>Our Customers</div>
			<div className='flex flex-row items-center gap-20 text-justify'>
				<div className='flex items-center justify-center align-center'>
					<div className='w-full max-w-2xl border-l-8 shadow-lg border-purple-custom'>
						<div className='flex py-12 pr-12'>
							<p className='min-h-full px-4 -mt-8 leading-none text-gray-200 card-quote text-10xl'>“</p>

							<div className='card-body'>
								<div className='mb-8 italic font-light leading-relaxed text-gray-900'>
									<p className='mb-6'>
										Without hesitation we recommend Rory at Swept Away for his{' '}
										<span className='font-bold'>amazing attention to detail</span>, his{' '}
										<span className='font-bold'>first className knowledge</span> and{' '}
										<span className='font-bold'>willingness to share it.</span>
									</p>
									<p>
										He did a great job on our five fireplaces and left everything as clean as he found it. A really excellent
										experience with a very characterful man. We would thoroughly recommend him to anyone in Bath or surrounding
										area, and will definitely use him again.
									</p>
								</div>
								<div className='flex justify-between mt-8'>
									<p className='text-sm text-gray-600'>Pauleen Hyland - June, 2020</p>
									<div className='flex text-gray-500'>
										<a href='#' className='text-sm'>
											Open in Google
										</a>
									</div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center align-center'>
					<div className='w-full max-w-2xl border-l-8 shadow-lg border-purple-custom'>
						<div className='flex py-12 pr-12'>
							<p className='min-h-full px-4 -mt-8 leading-none text-gray-200 card-quote text-10xl'>“</p>

							<div className='card-body'>
								<div className='mb-8 italic font-light leading-relaxed text-gray-900'>
									<p className='mb-6'>
										Without hesitation we recommend Rory at Swept Away for his{' '}
										<span className='font-bold'>amazing attention to detail</span>, his{' '}
										<span className='font-bold'>first className knowledge</span> and{' '}
										<span className='font-bold'>willingness to share it.</span>
									</p>
									<p>
										He did a great job on our five fireplaces and left everything as clean as he found it. A really excellent
										experience with a very characterful man. We would thoroughly recommend him to anyone in Bath or surrounding
										area, and will definitely use him again.
									</p>
								</div>
								<div className='flex justify-between mt-8'>
									<p className='text-sm text-gray-600'>Pauleen Hyland - June, 2020</p>
									<div className='flex text-gray-500'>
										<a href='#' className='text-sm'>
											Open in Google
										</a>
									</div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center align-center'>
					<div className='w-full max-w-2xl border-l-8 shadow-lg border-purple-custom'>
						<div className='flex py-12 pr-12'>
							<p className='min-h-full px-4 -mt-8 leading-none text-gray-200 card-quote text-10xl'>“</p>

							<div className='card-body'>
								<div className='mb-8 italic font-light leading-relaxed text-gray-900'>
									<p className='mb-6'>
										Without hesitation we recommend Rory at Swept Away for his{' '}
										<span className='font-bold'>amazing attention to detail</span>, his{' '}
										<span className='font-bold'>first className knowledge</span> and{' '}
										<span className='font-bold'>willingness to share it.</span>
									</p>
									<p>
										He did a great job on our five fireplaces and left everything as clean as he found it. A really excellent
										experience with a very characterful man. We would thoroughly recommend him to anyone in Bath or surrounding
										area, and will definitely use him again.
									</p>
								</div>
								<div className='flex justify-between mt-8'>
									<p className='text-sm text-gray-600'>Pauleen Hyland - June, 2020</p>
									<div className='flex text-gray-500'>
										<a href='#' className='text-sm'>
											Open in Google
										</a>
									</div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
				<button className='px-4 py-3 text-white border-black border-solid rounded-md outline-none bg-secondary-light red-button'>
					View More
				</button>
			</div>
		</div>
	)
}

export default Reviews

import Review from './Review.module'

/** Review Section
 * @imports Review Module
 * @todo Fetch reviews from reviews.json
 */
const Reviews = () => {
	return (
		<section className='flex flex-col justify-center w-full p-4 pt-10 lg:p-20 lg:py-48'>
			<h1 className='p-6 mb-20 text-5xl font-semibold text-center lg:p-0 text-primary header '>Hear from our Customers!</h1>
			<div className='flex flex-row flex-wrap justify-center m-auto lg:gap-28 blogs'>
				<Review
					companyName='Miran A.'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi expedita qui perspiciatis, tenetur nostrum facilis quisquam ex aspernatur quam! Blanditiis harum eos rerum cum illo nemo dolorem illum voluptas maiores reiciendis atque, alias explicabo laboriosam aut unde iure eveniet quod iste quasi sit. Dolorem eius asperiores nemo illum placeat!'
					color='bg-yellow-300'
					center='bg-safed padbutoon'
				/>
				<Review
					companyName='John R.'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi expedita qui perspiciatis, tenetur nostrum facilis quisquam ex aspernatur quam! Blanditiis harum eos rerum cum illo nemo dolorem illum voluptas maiores reiciendis atque, alias explicabo laboriosam aut unde iure eveniet quod iste quasi sit. Dolorem eius asperiores nemo illum placeat!'
					color='bg-gray-400'
					center='bg-red whitetext'
				/>
				<Review
					companyName='Bella B.'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi expedita qui perspiciatis, tenetur nostrum facilis quisquam ex aspernatur quam! Blanditiis harum eos rerum cum illo nemo dolorem illum voluptas maiores reiciendis atque, alias explicabo laboriosam aut unde iure eveniet quod iste quasi sit. Dolorem eius asperiores nemo illum placeat!'
					color='bg-blue-400'
					center='bg-safed padbutoon'
				/>
			</div>
		</section>
	)
}

export default Reviews

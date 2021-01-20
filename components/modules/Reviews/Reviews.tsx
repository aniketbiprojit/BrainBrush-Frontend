import Review from './Review.module'

const Reviews = () => {
	return (
		<div className='flex flex-col justify-center w-full p-4 pt-10 lg:p-20'>
			<div className='p-6 mb-20 text-5xl font-semibold text-center lg:p-0 text-primary header '>Here from our Customers!</div>
			<div className='flex flex-row flex-wrap justify-center m-auto lg:gap-28 blogs'>
				<Review
					companyName='Miranda A.'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi expedita qui perspiciatis, tenetur nostrum facilis quisquam ex aspernatur quam! Blanditiis harum eos rerum cum illo nemo dolorem illum voluptas maiores reiciendis atque, alias explicabo laboriosam aut unde iure eveniet quod iste quasi sit. Dolorem eius asperiores nemo illum placeat!'
					color='bg-yellow-300'
				/>
				<Review
					companyName='John R.'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi expedita qui perspiciatis, tenetur nostrum facilis quisquam ex aspernatur quam! Blanditiis harum eos rerum cum illo nemo dolorem illum voluptas maiores reiciendis atque, alias explicabo laboriosam aut unde iure eveniet quod iste quasi sit. Dolorem eius asperiores nemo illum placeat!'
					color='bg-gray-400'
				/>
				<Review
					companyName='Bella B.'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi expedita qui perspiciatis, tenetur nostrum facilis quisquam ex aspernatur quam! Blanditiis harum eos rerum cum illo nemo dolorem illum voluptas maiores reiciendis atque, alias explicabo laboriosam aut unde iure eveniet quod iste quasi sit. Dolorem eius asperiores nemo illum placeat!'
					color='bg-blue-400'
				/>
			</div>
		</div>
	)
}

export default Reviews

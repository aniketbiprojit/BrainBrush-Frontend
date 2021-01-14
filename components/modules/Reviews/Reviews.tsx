import Review from './Review.module'

const Reviews = () => {
	return (
		<div className='flex flex-col justify-center w-full gap-32 p-32'>
			<div className='text-5xl font-semibold text-center text-primary header'>Here are some relevant stories for you!</div>
			<div className='flex flex-row m-auto gap-28 blogs'>
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

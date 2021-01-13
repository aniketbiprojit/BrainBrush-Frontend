import Blog from './Blog.module'

const Blogs = () => {
	return (
		<div className='flex flex-col justify-center w-full gap-10'>
			<div className='text-5xl font-semibold text-center text-primary header'>Here are some relevant stories for you!</div>
			<div className='flex flex-row gap-20 m-auto mt-10 blogs'>
				<Blog
					companyName='Microsoft'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.'
					color='bg-yellow-300'
				/>
				<Blog
					companyName='Microsoft'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.'
					color='bg-yellow-300'
				/>
				<Blog
					companyName='Microsoft'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.'
					color='bg-yellow-300'
				/>
				<Blog
					companyName='Microsoft'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.'
					color='bg-yellow-300'
				/>
			</div>

			<div className='view-more'></div>
		</div>
	)
}

export default Blogs

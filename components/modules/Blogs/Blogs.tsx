import Blog from './Blog.module'

const Blogs = () => {
	return (
		<div className='flex flex-col justify-center w-full pt-10 pb-10' id='blog-bg'>
			<div className='px-5 mb-10 text-5xl font-semibold text-center text-white header lg:px-0'>Here are some relevant stories for you!</div>
			<div className='flex flex-row flex-wrap justify-center m-auto blogs'>
				<Blog
					companyName='Microsoft'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.'
					color='bg-yellow-300'
				/>
				<Blog
					companyName='Uber'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.'
					color='bg-gray-400'
				/>
				<Blog
					companyName='LinkedIn'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.'
					color='bg-blue-400'
				/>
				<Blog
					companyName='Apple'
					msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.'
					color='bg-gray-300'
				/>
			</div>
			<div className='p-5 m-auto mt-10 text-2xl text-center text-white border-2 border-gray-400 rounded-xl bg-secondary-light max-w-max red-button'>
				View More!
			</div>
		</div>
	)
}

export default Blogs

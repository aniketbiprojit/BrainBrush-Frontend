import Blog from './Blog.module'

const companies = [{ name: 'Microsoft' }, { name: 'Uber' }, { name: 'LinkedIn' }, { name: 'Apple' }]

/**
 * Blog Section
 * @imports blog module
 */
const Blogs = () => {
	return (
		<section className='flex flex-col justify-center w-full pt-48 pb-48' id='blog-bg'>
			<h1 className='px-5 mb-10 text-5xl font-semibold text-center text-white lg:px-0'>Here are some relevant stories for you!</h1>
			<div className='flex flex-row flex-wrap justify-center m-auto blogs'>
				{companies.map((company) => {
					return (
						<Blog
							key={company.name}
							companyName={company.name}
							msg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur omnis vero, id corporis repellat mollitia quisquam architecto? Sit amet consectetur consequuntur omnis vero.'
							color='bg-yellow-300'
						/>
					)
				})}
			</div>
			<button className='p-5 m-auto mt-10 text-2xl font-bold text-center text-white duration-200 bg-transparent border-4 hover:text-black rounded-xl border-secondary-highlight hover:bg-secondary-highlight max-w-max'>
				View More!
			</button>
		</section>
	)
}

export default Blogs

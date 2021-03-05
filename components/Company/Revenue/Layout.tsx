import React from 'react'

import Box from '../../lib/Box/Box'
import { Related } from './Related'

export const companies = [
	{ name: 'Netflix', color: '#FF5A5A' },
	{ name: 'Amazon', color: '#3FA7D6' },
	{ name: 'Google', color: '#A8DADC' },
	{ name: 'Lenovo', color: '#EF0000' },
	{ name: 'Samsung', color: '#FFC327' },
	{ name: 'Microsoft', color: '#C4C4C4' },
]

const RevenueLayout = ({ Chart }: { Chart: React.ComponentType }) => {
	return (
		<div className='flex flex-row p-0 m-0 bg-gray-300'>
			<div className='flex flex-col flex-grow gap-20 px-12 py-32 w-400px md:px-32'>
				<Box className='p-6 mx-auto mr-0 md:p-24' heading='Google Revenue' subheading='2012-2018'>
					<>
						<p className='py-2 text-sm md:text-lg'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas ut malesuada rhoncus. Dictum accumsan aliquet enim
							duis dolor ipsum pellentesque vitae. Amet maecenas purus nunc at. Amet, fermentum nulla adipiscing congue cursus cras. Dui
							id et vel cursus velit orci sed ut. Lacus vestibulum, ac eget tempus nunc massa facilisi mauris. Risus sodales tristique
							adipiscing cursus elementum blandit. Volutpat volutpat ligula orci facilisis amet aliquam. Etiam risus, urna orci sagittis
							metus, nunc augue quam dignissim. Viverra volutpat, quis varius cursus tempor mus. Eget ipsum phasellus enim viverra ut
							placerat pulvinar.
						</p>
						<p className='py-2 text-sm md:text-lg'>
							Venenatis sit et nunc sed molestie. Nulla turpis laoreet placerat egestas blandit egestas malesuada risus. Praesent
							elementum blandit diam, nunc massa ut mauris. Nulla vel at eu gravida vitae consequat risus. Imperdiet vitae nisl ultrices
							ornare duis.
						</p>
					</>
				</Box>
				<Box className='p-6 mx-auto mr-0 lg:p-24' heading='Statistics'>
					<>
						<div className='spacer p-2'></div>
						<h2 className='my-5 text-xl subhead'>Metric A</h2>
						<div className='w-75vw h-1/2 max-h-96'>
							<Chart />
						</div>
						<div className='spacer p-2'></div>
						<h2 className='my-5 text-xl subhead'>Metric B</h2>
						<div className='w-75vw h-1/2 max-h-96'>
							<Chart />
						</div>
						{/* <img src='/Table_1.png' alt='Table' width={967 * 1.5} height={503 * 1.5}></img> */}
					</>
				</Box>
			</div>
			<Box className='flex-grow hidden h-full max-w-lg p-24 my-32 rounded-r-none xl:block lg:max-w-2xl' heading='Related'>
				<Related></Related>
			</Box>
		</div>
	)
}

export default RevenueLayout

import React from 'react'

const Banner: React.FC<{ company: string }> = ({ company }) => {
	return (
		<div className='flex px-56 py-28'>
			<h1 className='text-5xl font-semibold'>{company}</h1>
			<div className=''>
				<h2>GOOG</h2>
				<h2>NASDAQ</h2>
			</div>
		</div>
	)
}

export default Banner

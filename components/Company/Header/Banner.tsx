import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const Banner: React.FC<{ company: string }> = ({ company }) => {
	return (
		<div className='flex px-56 py-28'>
			<FaGoogle className='mr-10 align-middle text-8xl center' />
			<div className='flex flex-col'>
				<h1 className='text-5xl font-semibold'>{company}</h1>
				<div className='flex flex-row gap-10 pt-5'>
					<h2>GOOG</h2>
					<h2>NASDAQ</h2>
				</div>
			</div>
		</div>
	)
}

export default Banner

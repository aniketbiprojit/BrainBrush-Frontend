import Feature from './Feature.module'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Features = () => {
	return (
		<div className='bg-gray-200'>
			<div className='grid text-6xl text-white justify-items-center grid-col-1 '>
				<FontAwesomeIcon
					icon={faArrowDown}
					className='p-2 duration-500 transform -translate-y-56 bg-transparent rounded-xl ring-4 ring-secondary-highlight hover:-translate-y-48 hover:bg-secondary-highlight hover:text-black'
					onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}
				/>
			</div>
			<div className='text-3xl font-semibold text-center text-primary' id='features'>
				What is BrainBrush?
			</div>
			<div className='grid items-center grid-cols-1 p-20 xl:grid-cols-2 justify-items-center'>
				<Feature />
				<Feature />
			</div>
		</div>
	)
}

export default Features

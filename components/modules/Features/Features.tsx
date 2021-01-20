import Feature from './Feature.module'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import { GiDiceFire, GiSpaceship, GiSpeedometer } from 'react-icons/gi'

const Features = () => {
	return (
		<div className='bg-gray-200 lg:mb-10'>
			<div className='grid text-6xl text-white justify-items-center grid-col-1 '>
				<FontAwesomeIcon
					icon={faArrowDown}
					className='p-2 duration-500 transform -translate-y-32 bg-transparent lg:-translate-y-56 rounded-xl ring-4 ring-secondary-highlight hover:-translate-y-24 lg:hover:-translate-y-48 hover:bg-secondary-highlight hover:text-black'
					onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}
				/>
			</div>
			<div className='text-2xl font-semibold text-center lg:text-5xl text-primary' id='features'>
				What is BrainBrush?
			</div>
			<div className='grid items-center grid-cols-1 p-8 py-20 lg:p-20 gap-y-20 lg:gap-y-28 justify-items-center'>
				<Feature img={<GiDiceFire size={300} className='text-secondary' />} />
				<Feature pos='left' img={<GiSpeedometer size={300} className='text-indigo-500' />} />
				<Feature img={<GiSpaceship size={300} className='text-secondary-light' />} />
			</div>
		</div>
	)
}

export default Features

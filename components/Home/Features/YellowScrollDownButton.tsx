import React from 'react'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const YellowScrollDownButton = () => {
	return (
		<div className='grid text-6xl text-white justify-items-center grid-col-1 '>
			<FontAwesomeIcon
				icon={faArrowDown}
				className='p-2 duration-500 transform -translate-y-32 bg-transparent lg:-translate-y-56 rounded-xl ring-4 ring-secondary-highlight hover:-translate-y-24 lg:hover:-translate-y-48 hover:bg-secondary-highlight hover:text-black'
				onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}
			/>
		</div>
	)
}

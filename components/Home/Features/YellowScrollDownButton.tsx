import React from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const YellowScrollDownButton = () => {
	return (
		// <div className='grid text-6xl text-white justify-items-center grid-col-1 '>
		<div className='grid grid-col-1 right-0 text-6xl justify-items-center'>
			<FontAwesomeIcon
				icon={faArrowUp}
				className='p-2 duration-500 transform bg-transparent rounded-xl ring-4 ring-secondary-highlight hover:-translate-y-6 lg:hover:-translate-y-6 hover:bg-secondary-highlight hover:text-black'
				// onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}
				onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
			/>
		</div>
	)
}

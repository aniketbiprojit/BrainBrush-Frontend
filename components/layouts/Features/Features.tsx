import Feature from './Feature.module'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

/**
 * Feature Section
 * @imports Feature Module
 * @imports Font Awesome icons
 * @imports React-icons
 */
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
			<div
				className='object-box'
				onMouseMove={(e) => {
					document.querySelectorAll('.object-box').forEach(() => {
						let dx = 0.033
						let dy = -0.1
						let x = e.clientX * dx
						let y = e.clientY * dy

						document.getElementById('image').style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
					})
				}}
				id='image'
			>
				<img className='img1' />
			</div>
			<div
				className='object2-box'
				onMouseMove={(e) => {
					document.querySelectorAll('.object2-box').forEach(() => {
						let dx = 0.05
						let dy = -0.11
						let x = e.clientX * dx
						let y = e.clientY * dy

						document.getElementById('image2').style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
					})
				}}
				id='image2'
			>
				<img className='img2' />
			</div>
			<div className='grid items-center grid-cols-1 p-8 py-20 lg:p-20 gap-y-20 lg:gap-y-28 justify-items-center'>
				<Feature className='text-secondary fbox' pos='left' />
				<Feature className='text-indigo-500 fbox' />
				<Feature className='text-secondary-light fbox' pos='left' />
			</div>
		</div>
	)
}

export default Features

/**
 * @desc This is the Features Section
 * @imports Feature.module
 * @exports Feature Section
 *
 */

import Feature from './Feature.module'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Zoom from 'react-reveal/Zoom'

/**
 * Feature Section
 * @imports Feature Module
 * @imports Font Awesome icons
 * @imports React-icons
 */
const Features = () => {
	return (
		<section className='bg-gray-200 lg:mb-10'>
			<div className='grid text-6xl text-white justify-items-center grid-col-1 '>
				<FontAwesomeIcon
					icon={faArrowDown}
					className='p-2 duration-500 transform -translate-y-32 bg-transparent lg:-translate-y-56 rounded-xl ring-4 ring-secondary-highlight hover:-translate-y-24 lg:hover:-translate-y-48 hover:bg-secondary-highlight hover:text-black'
					onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}
				/>
			</div>
			<h1 className='text-2xl font-semibold text-center lg:text-5xl text-primary' id='features'>
				What is BrainBrush?
			</h1>

			<div
				className='object-box'
				// onMouseMove={(e) => {
				// 	document.querySelectorAll('.object-box').forEach(() => {
				// 		let dx = 0.033
				// 		let dy = -0.1
				// 		let x = e.clientX * dx
				// 		let y = e.clientY * dy

				// 		document.getElementById('image').style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
				// 	})
				// }}
				id='image'
			>
				<Zoom>
					<img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' className='img1' alt='' />
				</Zoom>
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
				<Zoom>
					<img src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' className='img2' />
				</Zoom>
			</div>
			<div className='grid items-center grid-cols-1 py-20 gap-y-20 lg:gap-y-28 justify-items-center'>
				<Feature className='text-secondary fbox' pos='left' />
				<Feature className='text-indigo-500 fbox' colored='yes' />
				<Feature className='text-secondary-light fbox' pos='left' />
			</div>
		</section>
	)
}

export default Features

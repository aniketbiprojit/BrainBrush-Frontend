/**
 * @desc This is the Features Section
 * @imports Feature.module
 * @exports Feature Section
 *
 */

import React from 'react'

import Feature from './Feature.module'
import { FloatingObjects } from './FloatingObjects'
import { YellowScrollDownButton } from './YellowScrollDownButton'

/**
 * Feature Section
 * @imports Feature Module
 * @imports Font Awesome icons
 * @imports React-icons
 */
const Features = () => {
	return (
		<section className='bg-gray-200 lg:mb-10'>
			<YellowScrollDownButton />
			<h1 className='text-2xl font-semibold text-center lg:text-5xl text-primary' id='features'>
				What is BrainBrush?
			</h1>
			<FloatingObjects name='object-box-1' id='image-1' imgId='img1' />
			<FloatingObjects name='object-box-2' id='image-2' imgId='img2' />
			<FloatingObjects name='object-box-3' id='image-3' imgId='img3' />
			<div className='grid items-center grid-cols-1 py-20 gap-y-20 lg:gap-y-28 justify-items-center'>
				<Feature className='text-secondary fbox' pos='left' />
				<Feature className='text-indigo-500 fbox' colored='yes' />
				<Feature className='text-secondary-light fbox' pos='left' />
			</div>
		</section>
	)
}

export default Features

import React, { Fragment } from 'react'

const Box: React.FC<{ className?: string; heading: string; subheading?: string; children?: React.ReactNode }> = ({
	className = '',
	heading = 'NO HEADING!',
	subheading = '',
	children = <Fragment></Fragment>,
}) => {
	return (
		<div className={`${className} bg-white rounded-3xl`}>
			<h1 className='text-6xl font-semibold head'>{heading}</h1>
			<h2 className='my-5 text-xl subhead'>{subheading}</h2>
			{children}
		</div>
	)
}

export default Box

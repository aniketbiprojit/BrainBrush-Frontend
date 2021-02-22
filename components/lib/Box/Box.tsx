import React, { Fragment } from 'react'

const Box: React.FC<{ heading: string; children: React.ReactNode }> = ({ heading, children = <Fragment></Fragment> }) => {
	return (
		<>
			<h1 className='font-semibold head text-8xl'>{heading}</h1>
			{children}
		</>
	)
}

export default Box

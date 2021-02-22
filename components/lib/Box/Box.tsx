import React from 'react'

const Box: React.FC<{ heading: string; Body: JSX.Element }> = ({ heading, Body }) => {
	return (
		<>
			<h1 className='font-semibold head text-8xl'>{heading}</h1>
			{Body}
		</>
	)
}

export default Box

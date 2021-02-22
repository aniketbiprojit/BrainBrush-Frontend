import React from 'react'

const Box: React.FC<{ heading: string; Body: JSX.Element }> = ({ heading, Body }) => {
	return (
		<>
			<div className='head'>{heading}</div>
			{Body}
		</>
	)
}

export default Box

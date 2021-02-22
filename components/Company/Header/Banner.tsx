import React from 'react'

const Banner: React.FC<{ company: string }> = ({ company }) => {
	return (
		<>
			<h1>{company}</h1>
		</>
	)
}

export default Banner

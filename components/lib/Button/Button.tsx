import React from 'react'

const Button: React.FC<{ text: string }> = ({ text }) => {
	return (
		<>
			<button className='lg:px-20 px-10 lg:py-4 py-2 lg:text-3xl text-xl font-bold text-white uppercase rounded-lg lg:rounded-2xl bg-secondary red-button'>
				{text}
			</button>
		</>
	)
}

export default Button

import React from 'react'

const Button: React.FC<{ text: string }> = ({ text }) => {
	return (
		<>
			<button className='px-16 my-4 text-3xl font-bold text-white uppercase rounded-2xl bg-secondary red-button'>{text}</button>
		</>
	)
}

export default Button

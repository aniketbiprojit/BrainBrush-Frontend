import React from 'react'
const ButtonCard: React.FC<{ icon: any; text: string }> = ({ icon, text }) => {
	return (
		<div className='p-10 bg-gray-500 rounded-3xl'>
			<div className='icon'>{icon}</div>
			<div className='mt-8 text-2xl'>{text}</div>
		</div>
	)
}

export default ButtonCard

import React from 'react'
const ButtonCard: React.FC<{ icon: any; text: string; isSelected: boolean }> = ({ icon, text, isSelected }) => {
	return (
		<div className={`p-4 m-2 my-4 md:p-10 justify-center ${isSelected ? 'bg-secondary' : 'hover:bg-gray-300'} rounded-xl md:rounded-3xl`}>
			<div className={`icon ml-3 md:ml-3 justify-center text-4xl md:text-6xl ${isSelected ? 'text-white' : ''}`}>{icon}</div>
			<div className={`mt-4 md:mt-12 text-sm md:text-xl font-semibold ${isSelected ? 'text-white' : ''}`}>{text}</div>
		</div>
	)
}

export default ButtonCard

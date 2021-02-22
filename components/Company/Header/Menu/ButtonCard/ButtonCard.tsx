import React from 'react'
const ButtonCard: React.FC<{ icon: any; text: string; isSelected: boolean }> = ({ icon, text, isSelected }) => {
	return (
		<div className={`p-20 justify-items-center items-center ${isSelected ? 'bg-secondary hover:bg-blue-300' : 'hover:bg-gray-300'} rounded-3xl`}>
			<div className={`icon ${isSelected ? 'text-white' : ''}`}>{icon}</div>
			<div className={`mt-8 text-2xl font-semibold ${isSelected ? 'text-white' : ''}`}>{text}</div>
		</div>
	)
}

export default ButtonCard

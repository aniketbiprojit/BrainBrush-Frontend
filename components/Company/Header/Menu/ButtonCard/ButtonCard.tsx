import React from 'react'
const ButtonCard: React.FC<{ icon: any; text: string; isSelected: boolean }> = ({ icon, text, isSelected }) => {
	return (
		<div className={`p-20 justify-center ${isSelected ? 'bg-secondary' : 'hover:bg-gray-300'} rounded-3xl`}>
			<div className={`icon ml-2 text-8xl ${isSelected ? 'text-white' : ''}`}>{icon}</div>
			<div className={`mt-12 text-2xl font-semibold ${isSelected ? 'text-white' : ''}`}>{text}</div>
		</div>
	)
}

export default ButtonCard

import React from 'react'
const ButtonCard: React.FC<{ icon: any; text: string; isSelected: boolean; minimize?: boolean }> = ({ icon, text, isSelected, minimize = false }) => {
	return (
		<div
			style={{ cursor: 'pointer', padding: '1.5vw' }}
			className={`${isSelected ? 'bg-secondary' : 'hover:bg-gray-300'} rounded md:rounded-3xl`}
		>
			<div className={`icon grid justify-items-center ${isSelected ? 'text-white' : ''}`} style={{ fontSize: '3vw' }}>
				{icon}
			</div>
			<div className={`font-semibold ${isSelected ? 'text-white' : ''}`} style={{ marginTop: '2vw', fontSize: '1.5vw' }}>
				{text}
			</div>
		</div>
	)
}

export default ButtonCard

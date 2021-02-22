import React from 'react'
import { FaCoins, FaDollarSign, FaSearch } from 'react-icons/fa'
import ButtonCard from './ButtonCard/ButtonCard'

const Menu: React.FC<{ currentTab: string }> = ({ currentTab }) => {
	return (
		<div className='w-full py-12 bg-white px-28'>
			<ul className='flex'>
				<ButtonCard icon={<FaSearch className='text-8xl' />} text='Overview' isSelected={true} />
				<ButtonCard icon={<FaDollarSign className='text-8xl' />} text='Revenue' isSelected={false} />
				<ButtonCard icon={<FaCoins className='text-8xl' />} text='Financials' isSelected={false} />
			</ul>
		</div>
	)
}

export default Menu

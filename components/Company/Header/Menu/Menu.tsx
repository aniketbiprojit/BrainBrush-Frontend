import React from 'react'
import { FaCoins, FaDollarSign, FaSearch } from 'react-icons/fa'
import ButtonCard from './ButtonCard/ButtonCard'

const Menu: React.FC<{ currentTab: string }> = ({ currentTab }) => {
	return (
		<div className='w-full py-12 bg-white px-28'>
			<ul className='flex justify-center w-full gap-10'>
				<ButtonCard icon={<FaSearch />} text='Overview' isSelected={false} />
				<ButtonCard icon={<FaDollarSign />} text='Revenue' isSelected={true} />
				<ButtonCard icon={<FaCoins />} text='Financials' isSelected={false} />
				<ButtonCard icon={<FaSearch />} text='Overview' isSelected={false} />
				<ButtonCard icon={<FaDollarSign />} text='Revenue' isSelected={false} />
				<ButtonCard icon={<FaCoins />} text='Financials' isSelected={false} />
				<ButtonCard icon={<FaCoins />} text='Financials' isSelected={false} />
			</ul>
		</div>
	)
}

export default Menu

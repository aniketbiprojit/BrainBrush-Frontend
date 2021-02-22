import React from 'react'
import { FaSearch } from 'react-icons/fa'
import ButtonCard from './ButtonCard/ButtonCard'

const Menu: React.FC<{ currentTab: string }> = ({ currentTab }) => {
	return (
		<div className='w-full py-12 bg-white px-28'>
			<ul className='flex'>
				<ButtonCard icon={<FaSearch className='text-black text-8xl' />} text='Overview' />
			</ul>
		</div>
	)
}

export default Menu

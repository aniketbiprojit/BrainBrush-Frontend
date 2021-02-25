import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
import { FaCoins, FaDollarSign, FaMapMarkedAlt, FaPiggyBank, FaSearch } from 'react-icons/fa'
import { AiOutlineTeam } from 'react-icons/ai'
import { GoGraph } from 'react-icons/go'
import ButtonCard from './ButtonCard/ButtonCard'

const Menu: React.FC<{ currentTab: string; company: string; minimize: boolean }> = ({ currentTab, company, minimize }) => {
	const { route } = useRouter()

	return (
		<div className={minimize ? 'w-full py-10 bg-white md:px-12' : 'w-full py-10 bg-white md:px-12'}>
			<ul className='flex flex-wrap justify-center w-full gap-0 md:gap-8'>
				<Link href={`/company/${company}/`}>
					<div>
						<ButtonCard icon={<FaSearch />} text='Overview' isSelected={route === `/company/[company]`} />
					</div>
				</Link>
				<Link href={`/company/${company}/revenue`}>
					<div>
						<ButtonCard icon={<FaDollarSign />} text='Revenue' isSelected={route === `/company/[company]/revenue`} />
					</div>
				</Link>
				<ButtonCard icon={<FaCoins />} text='Financials' isSelected={false} />
				<ButtonCard icon={<AiOutlineTeam />} text='Teams' isSelected={false} />
				<ButtonCard icon={<FaPiggyBank />} text='Investors' isSelected={false} />
				<ButtonCard icon={<FaMapMarkedAlt />} text='Locations' isSelected={false} />
				<ButtonCard icon={<GoGraph />} text='Others' isSelected={false} />
			</ul>
		</div>
	)
}

export default Menu

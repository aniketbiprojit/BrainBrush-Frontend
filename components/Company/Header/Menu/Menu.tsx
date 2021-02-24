import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React from 'react'
import { FaCoins, FaDollarSign, FaSearch } from 'react-icons/fa'
import ButtonCard from './ButtonCard/ButtonCard'

const Menu: React.FC<{ currentTab: string; company: string }> = ({ currentTab, company }) => {
	const { route } = useRouter()

	return (
		<div className='w-full py-10 bg-white md:px-12'>
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
				<ButtonCard icon={<FaSearch />} text='Overview' isSelected={false} />
				<ButtonCard icon={<FaDollarSign />} text='Revenue' isSelected={false} />
				<ButtonCard icon={<FaCoins />} text='Financials' isSelected={false} />
				<ButtonCard icon={<FaCoins />} text='Financials' isSelected={false} />
			</ul>
		</div>
	)
}

export default Menu

import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { FaCoins, FaDollarSign, FaMapMarkedAlt, FaPiggyBank, FaSearch } from 'react-icons/fa'
import { IoPeople } from 'react-icons/io5'
import { GoGraph } from 'react-icons/go'
import ButtonCard from './ButtonCard/ButtonCard'

const Menu: React.FC<{ currentTab: string; company: string; minimize: boolean }> = ({ currentTab, company, minimize }) => {
	const { route } = useRouter()
	const fields = [
		{
			icon: <FaSearch />,
			href: `/company/${company}/`,
			text: 'Overview',
			route: '/company/[company]',
		},
		{
			icon: <FaDollarSign />,
			href: `/company/${company}/revenue`,
			text: 'Revenue',
			route: '/company/[company]/revenue',
		},
		{
			icon: <FaCoins />,
			href: '',
			text: 'Financials',
			route: '',
		},
		{
			icon: <IoPeople />,
			href: '',
			text: 'Teams',
			route: '',
		},
		{
			icon: <FaPiggyBank />,
			href: '',
			text: 'Investors',
			route: '',
		},
		{
			icon: <FaMapMarkedAlt />,
			href: '',
			text: 'Locations',
			route: '',
		},
		{
			icon: <GoGraph />,
			href: '',
			text: 'Other',
			route: '',
		},
	]
	return (
		<div className={minimize ? 'w-full shadow-xl py-10 bg-white md:px-12' : 'w-full py-10 bg-white md:px-12'}>
			<ul className='flex flex-wrap justify-center w-full gap-0 md:gap-5'>
				{fields.map((field) => {
					return (
						<Fragment>
							<Link href={field.href}>
								<div key={field.text} className=''>
									<ButtonCard
										minimize={minimize}
										icon={field.icon}
										text={field.text}
										isSelected={route === field.route}
									></ButtonCard>
								</div>
							</Link>
						</Fragment>
					)
				})}
			</ul>
		</div>
	)
}

export default Menu

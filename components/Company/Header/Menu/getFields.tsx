import React from 'react'
import { FaCoins, FaDollarSign, FaMapMarkedAlt, FaPiggyBank, FaSearch } from 'react-icons/fa'
import { IoPeople } from 'react-icons/io5'
import { GoGraph } from 'react-icons/go'

export const getFields = (company: string) => {
	return [
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
}

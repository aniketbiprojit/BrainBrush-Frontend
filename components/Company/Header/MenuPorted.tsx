import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { FaCoins, FaDollarSign, FaMapMarkedAlt, FaPiggyBank, FaSearch } from 'react-icons/fa'
import { BsPeopleFill, BsFillBarChartFill } from 'react-icons/bs'
import { GiTrophyCup } from 'react-icons/gi'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MenuPorted = ({ company, tabValue }) => {
	const router = useRouter()
	return (
		<div className='tabs'>
			<Tabs value={tabValue} indicatorColor='primary' textColor='primary' centered>
				<Tab icon={<FaSearch />} label='Overview' />
				<li className={router.pathname == '/company/[company]/revenue' ? 'active' : null}>
					<Link href={`/company/${company}/revenue`}>
						<Tab icon={<FaDollarSign />} label='Revenue' />
					</Link>
				</li>
				<li
					className={
						router.pathname == '/company/[company]/financial/balance_sheet' ||
						router.pathname == '/company/[company]/financial/cashflow_statement' ||
						router.pathname == '/company/[company]/financial/income_statement'
							? 'active'
							: null
					}
				>
					<Link href={`/company/${company}/financial`}>
						<Tab icon={<FaCoins />} label='Financials' />
					</Link>
				</li>
				<li
					className={
						router.pathname == '/company/[company]/employees' ||
						router.pathname == '/company/[company]/employees/executive-team' ||
						router.pathname == '/company/[company]/employees/revenue-per-employee' ||
						router.pathname == '/company/[company]/employees/net-income-per-employee'
							? 'active'
							: null
					}
				>
					<Link href={`/company/${company}/employees`}>
						<Tab icon={<BsPeopleFill />} label='Employees' />
					</Link>
				</li>
				<Tab icon={<FaPiggyBank />} label='Investors' />
				<Tab icon={<GiTrophyCup />} label='Competitors' />
				<Tab icon={<FaMapMarkedAlt />} label='Location' />
				<Tab icon={<BsFillBarChartFill />} label='Other' />
			</Tabs>
		</div>
	)
}

export default MenuPorted

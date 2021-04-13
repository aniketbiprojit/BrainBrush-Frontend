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
	let FinancialsUrl = '/company/[company]/financials'
	let EmployeeUrl = '/company/[company]/employees'
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
						router.pathname == `${FinancialsUrl}` ||
						router.pathname == `${FinancialsUrl}/income-statement` ||
						router.pathname == `${FinancialsUrl}/balance-sheet` ||
						router.pathname == `${FinancialsUrl}/cashflow-statement` ||
						router.pathname == `${FinancialsUrl}/profitability` ||
						router.pathname == `${FinancialsUrl}/ratios`
							? 'active'
							: null
					}
				>
					<Link href={`/company/${company}/financials/income-statement`}>
						<Tab icon={<FaCoins />} label='Financials' />
					</Link>
				</li>
				<li
					className={
						router.pathname == `${EmployeeUrl}` ||
						router.pathname == `${EmployeeUrl}/executive-team` ||
						router.pathname == `${EmployeeUrl}/revenue-per-employee` ||
						router.pathname == `${EmployeeUrl}/net-income-per-employee`
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
				<li className={router.pathname == '/company/[company]/location' ? 'active' : null}>
					<Link href={`/company/${company}/location`}>
						<Tab icon={<FaMapMarkedAlt />} label='Location' />
					</Link>
				</li>
				<Tab icon={<BsFillBarChartFill />} label='Other' />
			</Tabs>
		</div>
	)
}

export default MenuPorted

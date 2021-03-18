import React from 'react'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { FaCoins, FaDollarSign, FaMapMarkedAlt, FaPiggyBank, FaSearch } from 'react-icons/fa'
import { BsPeopleFill, BsFillBarChartFill } from 'react-icons/bs'
import { GiTrophyCup } from 'react-icons/gi'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
		<div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

const MenuPorted = () => {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<div className='tabs'>
			<Tabs value={value} onChange={handleChange} indicatorColor='primary' textColor='primary' centered>
				<Tab icon={<FaSearch />} label='Overview' />
				<Tab icon={<FaDollarSign />} label='Revenue' />
				<Tab icon={<FaCoins />} label='Financials' />
				<Tab icon={<BsPeopleFill />} label='Teams' />
				<Tab icon={<FaPiggyBank />} label='Investors' />
				<Tab icon={<GiTrophyCup />} label='Competitors' />
				<Tab icon={<FaMapMarkedAlt />} label='Location' />
				<Tab icon={<BsFillBarChartFill />} label='Other' />
			</Tabs>
			<TabPanel value={value} index={0}>
				{/* Item One */}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{/* <Revenue /> */}
			</TabPanel>
		</div>
	)
}

export default MenuPorted

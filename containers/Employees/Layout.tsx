import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import EmployeeLayout from './EmployeeLayout'
import ExecutiveLayout from './ExecutiveTeamLayout'
import NetIncomeLayout from './NetIncomeLayout'
import RevenueEmployeeLayout from './RevenueEmployeeLayout'

// all data
import {
	introdata,
	annualData,
	quarterlyData,
	pieannualData,
	piequarterlyData,
	annualtabledata,
	quarterlytabledata,
	demoData,
	employeesData,
} from './EmployeeData'

interface TabPanelProps {
	children?: React.ReactNode
	index: any
	value: any
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div role='tabpanel' hidden={value !== index} id={`wrapped-tabpanel-${index}`} aria-labelledby={`wrapped-tab-${index}`} {...other}>
			{value === index && <div>{children}</div>}
		</div>
	)
}

function a11yProps(index: any) {
	return {
		id: `wrapped-tab-${index}`,
		'aria-controls': `wrapped-tabpanel-${index}`,
	}
}

const useStyles = makeStyles({
	root: {},
	tabs: {
		marginTop: '270px',
		background: '#005ce6',
	},
	tab: {
		color: 'white',
	},
})

export const EmployeesLayout: React.FC<{ company: string }> = ({ company }) => {
	const classes = useStyles()
	const [value, setValue] = React.useState(0)

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue)
	}

	return (
		<div className={classes.root}>
			<Tabs value={value} onChange={handleChange} indicatorColor='primary' textColor='primary' className={classes.tabs}>
				<Tab className={classes.tab} label='Employees' {...a11yProps(0)} />
				<Tab className={classes.tab} label='Executive Team' {...a11yProps(1)} />
				<Tab className={classes.tab} label='Revenue Per Employee' {...a11yProps(2)} />
				<Tab className={classes.tab} label='Net Income per Employee' {...a11yProps(3)} />
			</Tabs>
			<TabPanel value={value} index={0}>
				<EmployeeLayout
					company={company}
					introdata={introdata}
					annualData={annualData}
					quarterlyData={quarterlyData}
					pieannualData={pieannualData}
					piequarterlyData={piequarterlyData}
					annualtabledata={annualtabledata}
					quarterlytabledata={quarterlytabledata}
					demoData={demoData}
				/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<ExecutiveLayout employeesData={employeesData} demoData={demoData} />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<NetIncomeLayout
					company={company}
					introdata={introdata}
					annualData={annualData}
					quarterlyData={quarterlyData}
					pieannualData={pieannualData}
					piequarterlyData={piequarterlyData}
					annualtabledata={annualtabledata}
					quarterlytabledata={quarterlytabledata}
					demoData={demoData}
				/>
			</TabPanel>
			<TabPanel value={value} index={3}>
				<RevenueEmployeeLayout
					company={company}
					introdata={introdata}
					annualData={annualData}
					quarterlyData={quarterlyData}
					pieannualData={pieannualData}
					piequarterlyData={piequarterlyData}
					annualtabledata={annualtabledata}
					quarterlytabledata={quarterlytabledata}
					demoData={demoData}
				/>
			</TabPanel>
		</div>
	)
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Intro from '../../components/Intro/Intro'
import Suggestion from '../../components/Suggestion/Suggestion'
import Table from '../../components/Table/Table'
import Content from '../../components/Content/Content'
import BarChartRevenue from '../BarChartRevenue/BarChartRevenue'
import PieChartRevenue from '../PieChartRevenue/PieChartRevenue'
import { introdata, pieannualData, piequarterlyData, annualtabledata, quarterlytabledata, demoData } from './RevenueData'

const useStyles = makeStyles({
	root: {
		padding: '20px',
		backgroundColor: '#F2F2F2',
		marginTop: '270px',
	},
	stickyItem: {
		position: 'sticky',
		top: 150,
	},
})

const getData = (revenue_data: {
	_id: string
	income_statement: Array<{
		fiscalDateEnding: string
		annual: boolean
		costOfRevenue: number
		symbol: any[]
		createdAt: Date
		updatedAt: Date
	}>
}) => {
	const colors = ['#0396ff', '#d9d9d9', '#457b9d', '#3fa7d7', '#a8dadc', '#a8dadc']
	let annualData_ = revenue_data?.income_statement
		.map((elem) => {
			if (elem.annual === true) {
				elem['year'] = elem['fiscalDateEnding']
				elem['value'] = elem['totalRevenue']
				elem['color'] = colors[Math.floor(Math.random() * colors.length)]
				return elem
			}
		})
		.filter((elem) => elem !== undefined)
	let quarterlyData_ = revenue_data?.income_statement
		.map((elem) => {
			if (elem.annual !== true) {
				elem['year'] = elem['fiscalDateEnding']
				elem['value'] = elem['totalRevenue']
				elem['color'] = colors[Math.floor(Math.random() * colors.length)]
				return elem
			}
		})
		.filter((elem) => elem !== undefined)
	return {
		annualData: annualData_,
		quarterlyData: quarterlyData_,
	}
}

const RevenuePorted: React.FC<{ company: string; revenue_data: any }> = ({ company, revenue_data }) => {
	console.log(revenue_data, 'revenue')
	const classes = useStyles()
	const [annualData, setAnnualData] = React.useState(getData(revenue_data).annualData)
	const [quarterlyData, setQuarterlyData] = React.useState(getData(revenue_data).quarterlyData)
	let i = 0
	React.useEffect(() => {
		const revenue_data_ = getData(revenue_data)
		setAnnualData(revenue_data_.annualData)
		setQuarterlyData(revenue_data_.quarterlyData)
		console.log(i++, revenue_data)
	}, [revenue_data])
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={9}>
					<Grid item xs={12}>
						<Intro data={introdata} header={`${company} Revenue (2015 – 2020)`} />
					</Grid>
					<Grid item xs={12}>
						{annualData && <BarChartRevenue annual={annualData} quarterly={quarterlyData} header={`${company} Revenue`} />}
					</Grid>
					<Grid item xs={12}>
						<Content header={`${company} Revenue Year over Year (Y/Y) Growth`} />
					</Grid>
					<Grid item xs={12}>
						<PieChartRevenue
							annual={pieannualData}
							quarterly={piequarterlyData}
							header={`${company} Revenue Year over Year (Y/Y) Growth`}
						/>
					</Grid>
					<Grid item xs={12}>
						<Table annual={annualData} quarterly={quarterlyData} header={`${company} Revenue (Tabular)`} />
					</Grid>
				</Grid>
				<Grid item xs={3}>
					<Grid item xs={12} className={classes.stickyItem}>
						<Suggestion datas={demoData} header={'RELATED'} />
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default RevenuePorted

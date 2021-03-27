import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import Suggestion from './Suggestion'
import Table from './Table'
import Content from './Content'
import BarChartRevenue from './BarChartRevenue'
import PieChartRevenue from './PieChartRevenue'
import { introdata, annualData, quarterlyData, pieannualData, piequarterlyData, annualtabledata, quarterlytabledata, demoData } from './RevenueData'

// @ts-ignore
import { Intro } from './Intro'

const useStyles = makeStyles({
	root: {
		marginTop: '250px',
		padding: '20px',
		backgroundColor: '#F2F2F2',
	},
	stickyItem: {
		position: 'sticky',
		top: 150,
	},
})

const getData = (company: string) => {
	return {
		annualData,
		quarterlyData,
	}
}

const RevenuePorted: React.FC<{ company: string }> = ({ company }) => {
	const classes = useStyles()
	const { annualData, quarterlyData } = getData(company)
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={9}>
					<Grid item xs={12}>
						<Intro data={introdata} header={`${company} Revenue (2015 – 2020)`} />
					</Grid>
					<Grid item xs={12}>
						<BarChartRevenue annual={annualData} quarterly={quarterlyData} header={`${company} Revenue`} />
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
						<Table annual={annualtabledata} quarterly={quarterlytabledata} header={`${company} Revenue (Tabular)`} />
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

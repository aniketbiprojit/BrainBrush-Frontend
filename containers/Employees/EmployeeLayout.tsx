import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Intro from '../../components/Intro/Intro'
import Suggestion from '../../components/Suggestion/Suggestion'
import Table from '../../components/Table/Table'
import Content from '../../components/Content/Content'
import BarChartRevenue from '../BarChartRevenue/BarChartRevenue'
import PieChartRevenue from '../PieChartRevenue/PieChartRevenue'
import { introdata, annualData, quarterlyData, pieannualData, piequarterlyData, annualtabledata, quarterlytabledata, demoData } from './EmployeeData'

const useStyles = makeStyles({
	root: {
		padding: '20px',
		backgroundColor: '#F2F2F2',
	},
	stickyItem: {
		position: 'sticky',
		top: 150,
	},
})

const EmployeeLayout: React.FC<{
	company?: string
	introdata?: any
	annualData?: any
	quarterlyData?: any
	pieannualData?: any
	piequarterlyData?: any
	annualtabledata?: any
	quarterlytabledata?: any
	demoData?: any
}> = (props) => {
	const { company } = props

	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={9}>
					<Grid item xs={12}>
						<Intro data={introdata} header={`${company} Employees`} />
					</Grid>
					<Grid item xs={12}>
						<BarChartRevenue annual={annualData} quarterly={quarterlyData} header={`${company} Revenue`} />
					</Grid>
					<Grid item xs={12}>
						<Content header={`${company} Employees Year over Year (Y/Y) Growth`} />
					</Grid>
					<Grid item xs={12}>
						<PieChartRevenue
							annual={pieannualData}
							quarterly={piequarterlyData}
							header={`${company} Employees Year over Year (Y/Y) Growth`}
						/>
					</Grid>
					<Grid item xs={12}>
						<Table annual={annualtabledata} quarterly={quarterlytabledata} header={`${company} Employees (Tabular)`} />
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

export default EmployeeLayout

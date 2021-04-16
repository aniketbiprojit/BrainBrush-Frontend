import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ExecutiveTeam from '../../components/ExecutiveTeam/ExecutiveTeam'
import Suggestion from '../../components/Suggestion/Suggestion'

import { demoData, employeesData } from './EmployeeData'

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

const ExecutiveTeamLayout: React.FC<{
	employeesData?: any
	demoData?: any
}> = () => {
	//const { employeesData, demoData } = props
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item md={9}>
					<ExecutiveTeam employeesData={employeesData} />
				</Grid>
				<Grid item md={3} sm>
					<Grid item md={12} className={classes.stickyItem}>
						<Suggestion datas={demoData} header={'RELATED'} />
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default ExecutiveTeamLayout

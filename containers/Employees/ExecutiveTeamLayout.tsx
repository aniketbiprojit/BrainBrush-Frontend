import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ExecutiveTeam from '../../components/ExecutiveTeam/ExecutiveTeam'
import Suggestion from '../../components/Suggestion/Suggestion'
//import profileImage from '../../styles/assets/profile.png';

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

//suggestion company data
const demoData = [
	{ icon: 'H', name: 'Microsoft Revenue' },
	{ icon: 'S', name: 'Samsung Revenue' },
	{ icon: 'D', name: 'Dell Revenue' },
	{ icon: 'N', name: 'Netflix Revenue' },
	{ icon: 'L', name: 'Lenovo Revenue' },
	{ icon: 'A', name: 'Asus Revenue' },
]

//employe data
const employeesData = [
	{ image: '', exec: 'Exec 1', title: 'title' },
	{ image: '', exec: 'Exec 2', title: 'title' },
	{ image: '', exec: 'Exec 3', title: 'title' },
	{ image: '', exec: 'Exec 4', title: 'title' },
	{ image: '', exec: 'Exec 5', title: 'title' },
	{ image: '', exec: 'Exec 6', title: 'title' },
	{ image: '', exec: 'Exec 7', title: 'title' },
	{ image: '', exec: 'Exec 8', title: 'title' },
	{ image: '', exec: 'Exec 9', title: 'title' },
	{ image: '', exec: 'Exec 10', title: 'title' },
	{ image: '', exec: 'Exec 11', title: 'title' },
	{ image: '', exec: 'Exec 12', title: 'title' },
]

const ExecutiveTeamLayout = () => {
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

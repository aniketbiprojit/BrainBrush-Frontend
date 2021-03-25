import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ExecutiveCard from './ExecutiveCard'
import ExecutiveMember from './ExecutiveMember'

const useStyles = makeStyles({
	root: {
		margin: '20px',
		padding: '20px',
	},
})

const ExecutiveTeam: React.FC<{ employeesData: any }> = (props) => {
	const { employeesData } = props
	const classes = useStyles()
	return (
		<Card className={classes.root}>
			<CardContent>
				<Grid container spacing={3}>
					<Grid item md={12}>
						<ExecutiveMember />
					</Grid>
					{employeesData.map((exec) => (
						<Grid item md={6}>
							<ExecutiveCard execData={exec} />
						</Grid>
					))}
				</Grid>
			</CardContent>
		</Card>
	)
}

export default ExecutiveTeam

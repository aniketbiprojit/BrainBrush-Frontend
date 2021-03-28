import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	root: {
		padding: '20px',
		backgroundColor: '#F2F2F2',
	},
})

const ExecutiveCard: React.FC<{ execData: any }> = (props) => {
	const { execData } = props
	const classes = useStyles()

	return (
		<div>
			<Card className={classes.root} variant='outlined'>
				<CardContent>
					<Grid container spacing={10}>
						<Grid item justify='center' xs={6}>
							<img src={execData.image} />
						</Grid>
						<Grid item justify='center' xs={6}>
							<Typography variant='h5' component='h2'>
								{execData.exec}
							</Typography>
							<Typography variant='h5' component='h5'>
								{execData.title}
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</div>
	)
}

export default ExecutiveCard

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CustomProgressBar from '../../common/ProgressBar/CustomProgressBar'

const profile =
	'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=100'

const useStyles = makeStyles({
	root: {
		padding: '20px',
		backgroundColor: '#F2F2F2',
	},
})

const ExecutiveMember: React.FC<{}> = () => {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Grid container>
				<Grid item md={4}>
					<Grid item justify='center' md={12}>
						<img src={profile} />
					</Grid>
					<Grid item justify='center' md={12}>
						<Typography variant='h5' component='h2'>
							Tim Cook
						</Typography>
						<Typography justify='center' component='h5'>
							CEO
						</Typography>
					</Grid>
				</Grid>
				<Grid item md={8}>
					<Typography variant='h5' component='h2'>
						CEO Salary/Compensation
					</Typography>
					<Typography component='h5'>2020</Typography>
					<CustomProgressBar name={'Base Salary Fixed'} value={'$ 100'} barColorPrimary={'#ff4d4d'} />
					<CustomProgressBar name={'Annual Incentive Bonus'} value={'$ 100'} barColorPrimary={'#0099ff'} />
					<CustomProgressBar name={'Variable/ at Risk'} value={'$ 70'} barColorPrimary={'#B2DFDB'} />
					<CustomProgressBar name={'Long Term Incentive'} value={'$ 50'} barColorPrimary={'#0099cc'} />
					<CustomProgressBar name={'Total: $2000'} barColorPrimary={'#008080'} />
				</Grid>
			</Grid>
		</div>
	)
}

export default ExecutiveMember

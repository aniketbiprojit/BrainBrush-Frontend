import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CustomProgressBar from '../../common/ProgressBar/CustomProgressBar'

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
						<img src={''} />
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

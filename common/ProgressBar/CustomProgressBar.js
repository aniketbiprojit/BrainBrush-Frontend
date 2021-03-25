import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	margin: {
		margin: theme.spacing(1),
	},
	progressLabel: {
		position: 'absolute',
		height: '100%',
		zIndex: 1,
		maxHeight: '30px', // borderlinearprogress root.height
		textAlign: 'center',
		display: 'flex',
		alignItems: 'center',
		'& span': {
			width: '100%',
		},
		paddingLeft: '15px',
	},
	name: {
		color: 'white',
	},
	barColor: {
		backgroundColor: (props) => (props.barColor ? props.barColor : '#B2DFDB'),
	},
}))

export default function CustomProgressBar(props) {
	const { name, value, barColorPrimary } = props
	const classes = useStyles({ barColor: barColorPrimary })

	return (
		<div className={classes.root}>
			<Grid container spacing={1} justify='space-between'>
				<Grid item xs={10} spacing={0}>
					<div className={classes.progressLabel}>
						<span className={classes.name}>{name} </span>
					</div>
					<LinearProgress
						variant='determinate'
						style={{ height: '30px', borderRadius: '25px', borderColor: 'white', borderWidth: '5px' }}
						classes={{ barColorPrimary: classes.barColor }}
					/>
				</Grid>
				<Grid item xs={2}>
					{value}
				</Grid>
			</Grid>
		</div>
	)
}

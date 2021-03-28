import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { Grid } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import TocIcon from '@material-ui/icons/Toc'
import ShareIcon from '@material-ui/icons/Share'
import GetAppIcon from '@material-ui/icons/GetApp'
import CodeIcon from '@material-ui/icons/Code'
import ToggleButton from '../../common/ToggleButton/Togglebutton'
import Pie from '../../components/Charts/Pie'

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '20px',
		minWidth: 275,
	},
	header: {
		padding: '10px',
		fontSize: '25px',
	},
	brand: {
		background: 'rgb(51, 51, 153)',
		color: 'white',
		textAlign: 'center',
		margin: '10px',
		borderRadius: '5px',
	},
	brandName: {
		padding: '5px',
	},
	chart: {
		height: '300px',
	},
}))

const PieChartRevenue: React.FC<{ header: any; annual: any; quarterly: any }> = (props) => {
	const { header, annual, quarterly } = props
	const classes = useStyles()

	const [toggleData, setToggleData] = useState(annual)

	const changeState = (newAlignment: any) => {
		if (newAlignment === 'left') {
			setToggleData(annual)
		} else if (newAlignment === 'right') {
			setToggleData(quarterly)
		}
	}

	return (
		<div className={classes.root}>
			<Card>
				<div className={classes.header}>
					<Grid container>
						<Grid item xs={9}>
							{' '}
							{header}{' '}
						</Grid>
						<Grid item xs={3}>
							<ToggleButton parentToggle={changeState} leftcontent={'Annual'} rightcontent={'Quarterly'} />
						</Grid>
					</Grid>{' '}
				</div>
				<CardContent className={classes.chart}>
					<Pie data={toggleData} />
				</CardContent>
				<CardActions>
					<Grid container>
						<Grid item xs={10}>
							<IconButton aria-label='Tables'>
								<TocIcon />
							</IconButton>
							<IconButton aria-label='share'>
								<ShareIcon />
							</IconButton>
							<IconButton aria-label='Download'>
								<GetAppIcon />
							</IconButton>
							<IconButton aria-label='Embed'>
								<CodeIcon />
							</IconButton>
						</Grid>
						<Grid item xs={2}>
							<div className={classes.brand}>
								<p className={classes.brandName}>Brainbrush</p>
							</div>
						</Grid>
					</Grid>
				</CardActions>
			</Card>
		</div>
	)
}

export default PieChartRevenue
import React from 'react'
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
import ToggleButtons from '../../common/Togglebuttons/Togglebuttons'
import { Bar } from '../Charts/Bar'
import { annualData } from '../RevenueData/RevenueData'


const data = [
    {
      "country": "AD",
      "hot dog": 161,
      "hot dogColor": "hsl(230, 70%, 50%)",
      "burger": 151,
      "burgerColor": "hsl(259, 70%, 50%)",
      "sandwich": 9,
      "sandwichColor": "hsl(272, 70%, 50%)",
      "kebab": 74,
      "kebabColor": "hsl(249, 70%, 50%)",
      "fries": 4,
      "friesColor": "hsl(237, 70%, 50%)",
      "donut": 177,
      "donutColor": "hsl(22, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 60,
      "hot dogColor": "hsl(227, 70%, 50%)",
      "burger": 79,
      "burgerColor": "hsl(234, 70%, 50%)",
      "sandwich": 186,
      "sandwichColor": "hsl(264, 70%, 50%)",
      "kebab": 145,
      "kebabColor": "hsl(45, 70%, 50%)",
      "fries": 29,
      "friesColor": "hsl(333, 70%, 50%)",
      "donut": 183,
      "donutColor": "hsl(162, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 82,
      "hot dogColor": "hsl(199, 70%, 50%)",
      "burger": 190,
      "burgerColor": "hsl(25, 70%, 50%)",
      "sandwich": 12,
      "sandwichColor": "hsl(127, 70%, 50%)",
      "kebab": 113,
      "kebabColor": "hsl(272, 70%, 50%)",
      "fries": 29,
      "friesColor": "hsl(344, 70%, 50%)",
      "donut": 175,
      "donutColor": "hsl(173, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 75,
      "hot dogColor": "hsl(77, 70%, 50%)",
      "burger": 68,
      "burgerColor": "hsl(353, 70%, 50%)",
      "sandwich": 162,
      "sandwichColor": "hsl(321, 70%, 50%)",
      "kebab": 69,
      "kebabColor": "hsl(306, 70%, 50%)",
      "fries": 71,
      "friesColor": "hsl(71, 70%, 50%)",
      "donut": 34,
      "donutColor": "hsl(236, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 17,
      "hot dogColor": "hsl(347, 70%, 50%)",
      "burger": 102,
      "burgerColor": "hsl(98, 70%, 50%)",
      "sandwich": 135,
      "sandwichColor": "hsl(264, 70%, 50%)",
      "kebab": 38,
      "kebabColor": "hsl(33, 70%, 50%)",
      "fries": 29,
      "friesColor": "hsl(266, 70%, 50%)",
      "donut": 74,
      "donutColor": "hsl(274, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 85,
      "hot dogColor": "hsl(151, 70%, 50%)",
      "burger": 45,
      "burgerColor": "hsl(85, 70%, 50%)",
      "sandwich": 60,
      "sandwichColor": "hsl(60, 70%, 50%)",
      "kebab": 34,
      "kebabColor": "hsl(143, 70%, 50%)",
      "fries": 20,
      "friesColor": "hsl(327, 70%, 50%)",
      "donut": 41,
      "donutColor": "hsl(191, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 107,
      "hot dogColor": "hsl(30, 70%, 50%)",
      "burger": 179,
      "burgerColor": "hsl(83, 70%, 50%)",
      "sandwich": 44,
      "sandwichColor": "hsl(160, 70%, 50%)",
      "kebab": 68,
      "kebabColor": "hsl(57, 70%, 50%)",
      "fries": 5,
      "friesColor": "hsl(119, 70%, 50%)",
      "donut": 85,
      "donutColor": "hsl(308, 70%, 50%)"
    }
  ]


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
}))

export const RevenueDescription: React.FC<{ header: string;}> = (props) => {
	const { header } = props
	const classes = useStyles()

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
							<ToggleButtons  leftcontent={'Annual'} rightcontent={'Quarterly'} />
						</Grid>
					</Grid>{' '}
				</div>
				<CardContent style={{"height": "90vh"}}>
                    <Bar data={data}/>
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


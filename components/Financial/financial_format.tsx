import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'

import ExpandableTable from '../Table/ExpandableTable'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '80%',
			margin: 'auto',
		},
		cardheader: {
			background: '#0396ff',
			color: 'white',
			textAlign: 'center',
		},
	})
)

const FinanicalFormat: React.FC<{ company: string; data: any; name: string }> = ({ company, data, name }) => {
	const classes = useStyles()

	return (
		<div>
			<Grid container>
				<Grid item xs={12}>
					<Card className={classes.root}>
						<CardHeader className={classes.cardheader} title={name} subheader='$ in millions' />
						<CardContent>
							<ExpandableTable />
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	)
}

export default FinanicalFormat

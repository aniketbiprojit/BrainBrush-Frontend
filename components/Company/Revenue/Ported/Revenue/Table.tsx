import React, { useState } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Grid } from '@material-ui/core'
import ToggleButton from './Togglebutton'

const StyledTableCell = withStyles((theme) => ({
	head: {
		padding: '10px',
		backgroundColor: 'rgb(0, 102, 153)',
		color: theme.palette.common.white,
	},
	body: {
		padding: '10px',
		fontSize: 15,
	},
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow)

const useStyles = makeStyles({
	root: {
		margin: '20px',
		minWidth: 275,
	},
	header: {
		padding: '10px',
		fontSize: '25px',
	},
	body: {
		padding: '10px',
	},
})

const Tabular: React.FC<{ header: any; annual: any; quarterly: any }> = (props) => {
	const { annual, quarterly, header } = props
	const classes = useStyles()

	const [toggleData, setToggleData] = useState(annual)

	const changeState = (newAlignment: any) => {
		if (newAlignment === 'left') {
			setToggleData(annual)
		} else if (newAlignment === 'right') {
			setToggleData(quarterly)
		}
	}

	const checkValue = (growthData: any) => {
		if (growthData.includes('+')) {
			return <div style={{ color: 'green' }}>{growthData}</div>
		} else {
			return <div style={{ color: 'red' }}>{growthData}</div>
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
					</Grid>
				</div>
				<CardContent>
					<TableContainer component={Paper}>
						<Table aria-label='customized table'>
							<TableHead>
								<TableRow>
									<StyledTableCell>Period</StyledTableCell>
									<StyledTableCell align='left'>Revenue</StyledTableCell>
									<StyledTableCell align='left'>Growth</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{toggleData.map((row: any) => (
									<StyledTableRow key={row.id}>
										<StyledTableCell align='left'>{row.Period}</StyledTableCell>
										<StyledTableCell align='left'>{row.Revenue}</StyledTableCell>
										<StyledTableCell align='left'>{checkValue(row.Growth)}</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</CardContent>
			</Card>
		</div>
	)
}

export default Tabular

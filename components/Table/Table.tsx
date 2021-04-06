import React from 'react'
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
	console.log('annual', annual)
	const classes = useStyles()

	const checkValue = (growthData: any) => {
		if (growthData.includes('+')) {
			return <div style={{ color: 'green' }}>{growthData}</div>
		} else {
			return <div style={{ color: 'red' }}>{growthData}</div>
		}
	}

	return (
		<div>
			<div className={classes.root}>
				<Card>
					<div className={classes.header}>
						<Grid container>
							<Grid item xs={9}>
								{' '}
								{header}
								{' - Annual'}
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
									{annual &&
										annual.map((row: any) => (
											<StyledTableRow key={row.id}>
												<StyledTableCell align='left'>{row.year}</StyledTableCell>
												<StyledTableCell align='left'>{row.totalRevenue}</StyledTableCell>
												<StyledTableCell align='left'>{row.Growth && checkValue(row.Growth)}</StyledTableCell>
											</StyledTableRow>
										))}
								</TableBody>
							</Table>
						</TableContainer>
					</CardContent>
				</Card>
			</div>
			<div className={classes.root}>
				<Card>
					<div className={classes.header}>
						<Grid container>
							<Grid item xs={9}>
								{' '}
								{header}
								{' - Quarterly'}
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
									{quarterly &&
										quarterly.map((row: any) => (
											<StyledTableRow key={row.id}>
												<StyledTableCell align='left'>{row.year}</StyledTableCell>
												<StyledTableCell align='left'>{row.totalRevenue}</StyledTableCell>
												<StyledTableCell align='left'>{row.Growth && checkValue(row.Growth)}</StyledTableCell>
											</StyledTableRow>
										))}
								</TableBody>
							</Table>
						</TableContainer>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export default Tabular

import React, { useEffect, useState } from 'react'
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
	const [annualGrowth, setAnnualGrowth] = useState([])
	const [quarterlyGrowth, setQuarterlyGrowth] = useState([])
	const [annualRevenue, setannualRevenue] = useState([])
	const [quarterlyRevenue, setquarterlyRevenue] = useState([])

	const classes = useStyles()

	useEffect(() => {
		if (annual !== undefined) {
			// Determining Growth Rate
			let x: number[] = []
			annual.forEach(function (item, index) {
				if (index < annual.length - 1) {
					let growth: number = item.totalRevenue - annual[index + 1].totalRevenue
					let growthRate: number = (growth / item.totalRevenue) * 100
					x.push(+growthRate.toFixed(2))
				}
			})
			setAnnualGrowth(x)

			// Truncating Annual Total Revenue
			let y: any[] = []
			var min: number = annual.reduce((min, b) => Math.min(min, b.totalRevenue), annual[0].totalRevenue)

			annual.forEach(function (item) {
				if (min > 1e9) {
					y.push(+(item.totalRevenue / 1e9).toFixed(2) + ' Billion')
				} else if (min > 1e6) {
					y.push(+(item.totalRevenue / 1e6).toFixed(2) + ' Million')
				} else {
					y.push(item.totalRevenue)
				}
			})
			setannualRevenue(y)
		}
	}, [annual])

	useEffect(() => {
		if (quarterly !== undefined) {
			let x: number[] = []
			quarterly.forEach(function (item, index) {
				if (index < quarterly.length - 1) {
					let growth: number = item.totalRevenue - quarterly[index + 1].totalRevenue
					let growthRate: number = (growth / item.totalRevenue) * 100
					x.push(+growthRate.toFixed(2))
				}
			})
			setQuarterlyGrowth(x)

			let y: any[] = []
			var min: number = quarterly.reduce((min, b) => Math.min(min, b.totalRevenue), quarterly[0].totalRevenue)
			quarterly.forEach(function (item) {
				if (min > 1e9) {
					y.push(+(item.totalRevenue / 1e9).toFixed(2) + ' Billion')
				} else if (min > 1e6) {
					y.push(+(item.totalRevenue / 1e6).toFixed(2) + ' Million')
				} else {
					y.push(item.totalRevenue)
				}
			})
			setquarterlyRevenue(y)
		}
	}, [quarterly])

	const checkValue = (growthData: any) => {
		if (growthData > 0) {
			return <div style={{ color: 'green' }}>{growthData + ' %'}</div>
		} else {
			return <div style={{ color: 'red' }}>{growthData + ' %'}</div>
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
										annual.map((row: any, i: number) => (
											<StyledTableRow key={row.id}>
												<StyledTableCell align='left'>{row.year}</StyledTableCell>
												<StyledTableCell align='left'>{annualRevenue[i]}</StyledTableCell>
												<StyledTableCell align='left'>{annualGrowth[i] && checkValue(annualGrowth[i])}</StyledTableCell>
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
										quarterly.map((row: any, i: number) => (
											<StyledTableRow key={row.id}>
												<StyledTableCell align='left'>{row.year}</StyledTableCell>
												<StyledTableCell align='left'>{quarterlyRevenue[i]}</StyledTableCell>
												<StyledTableCell align='left'>{quarterlyGrowth[i] && checkValue(quarterlyGrowth[i])}</StyledTableCell>
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

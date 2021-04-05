import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Layout from '../../components/Financial/financial_format'

const useStyles = makeStyles({
	root: {
		padding: '20px',
		backgroundColor: '#F2F2F2',
		marginTop: '270px',
	},
	stickyItem: {
		position: 'sticky',
		top: 150,
	},
	heading: {
		fontSize: '25px',
		fontWeight: 'bold',
	},
})

const IncomeStatementLayout: React.FC<{
	company: string
}> = (props) => {
	const { company } = props

	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<h2 className={classes.heading}>{`${company} Income Statement`}</h2>
				</Grid>
				<Grid item xs={12}>
					<Layout company={company} />
				</Grid>
			</Grid>
		</div>
	)
}

export default IncomeStatementLayout

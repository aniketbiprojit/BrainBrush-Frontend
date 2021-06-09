import React, { Fragment, useState } from 'react'

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Button, Container } from 'react-bootstrap'
import {Bar} from '../../../components/Charts/Bar'
import RelatedListGroupItem from '../../../components/RelatedListGroupItem/RelatedListGroupItem'
import InitialTextBox from '../../../components/InitialTextBox/InitialTextBox'
import { annualData, introdata } from '../../../components/RevenueData/RevenueData'
import { RevenueDescription } from '../../../components/RevenueDescription/RevenueDescription'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const getServerSideProps: GetServerSideProps = async (context) => {
	return { props: { company: context.query.company } }
}


const useStyles = makeStyles({
	root: {
		padding: '20px',
		backgroundColor: '#F2F2F2',
		marginTop: '270px',
	},
	stickyItem: {
		position: 'sticky',
		top: 150,
		float: 'left',
	},
})

export const Company: React.FC = ({ company }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const classes = useStyles()
	return <Fragment>
		<Container className="mt-5 pt-3">
			<Grid item xs={9}>
				<Grid className="mb-5 pb-3" item xs={12}>
				<InitialTextBox data={introdata} header={company} ></InitialTextBox>
				</Grid>
				<Grid item xs={12}>
				<RevenueDescription header='' />
				</Grid>
				<Grid item xs={12}>

				</Grid>
			</Grid>

			<Grid item xs={3}  className={classes.stickyItem}>
			<RelatedListGroupItem></RelatedListGroupItem>
			</Grid>
		</Container>



		{/* <Container className="mt-5 pt-3">
			

	
			<div>
				<h1 className="pb-3">{company} Revenue (2015 – 2020)</h1>
			</div>
			<div className="mt-5 pt-3">
				
			</div>
			<div>
				<Bar data={annualData}></Bar>
			</div>
			<div className="mt-5 pt-3">
				
			</div>
			<div className="mt-5 pt-3">
				
			</div>
		</Container> */}
	</Fragment>
}

export default Company

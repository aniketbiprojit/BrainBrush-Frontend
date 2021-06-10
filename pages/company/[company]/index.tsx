import React, { Fragment, useEffect, useState } from 'react'

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Button, Container } from 'react-bootstrap'
import {Bar} from '../../../components/Charts/Bar'
import RelatedListGroupItem from '../../../components/RelatedListGroupItem/RelatedListGroupItem'
import InitialTextBox from '../../../components/InitialTextBox/InitialTextBox'
import { annualData, introdata } from '../../../components/RevenueData/RevenueData'
import { RevenueDescription } from '../../../components/RevenueDescription/RevenueDescription'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ScrollNav } from '../../../components/ScrollNav/ScrollNav'

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
	const [minimize, setMinimize] = useState(false)

	useEffect(() => {
		function handleScroll() {
			return () => {
				if (window.pageYOffset > 100) {
					if (minimize === false) {
						setMinimize(true)
					}
				} else {
					if (minimize === true) {
						setMinimize(false)
					}
				}
			}
		}
		window.addEventListener('scroll', handleScroll())
		return () => window.removeEventListener('scroll', handleScroll)
	})


	const classes = useStyles()
	return <Fragment>
		<ScrollNav company ={company}/>
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
	</Fragment>
}

export default Company

import React, { Fragment, useEffect, useState } from 'react'

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Button, Col, Container, Row } from 'react-bootstrap'
import RelatedListGroupItem from '../../../components/RelatedListGroupItem/RelatedListGroupItem'
import InitialTextBox from '../../../components/InitialTextBox/InitialTextBox'
import { annualData, introdata } from '../../../components/RevenueData/RevenueData'
import { RevenueDescription } from '../../../components/RevenueDescription/RevenueDescription'
import { makeStyles } from '@material-ui/core/styles'
import {NegativeBarChartRevenue} from '../../../components/NegativeBarChartRevenue/NegativeBarChartRevenue';
import { PieRevenue } from '../../../components/RevenueDescription/RevenueDescriptionBySegment/PieRevenue'

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
		<Container className="mt-5 pt-3">

			<Row>
				<Col sm={8}>
					<div>
					<InitialTextBox data={introdata} header={company} />
					</div>
					<div>
					<RevenueDescription header='' company={company} />
					</div>
					<div>
					<InitialTextBox data={introdata} header={company} />
					</div>
					<div>
					<NegativeBarChartRevenue header='' company={company}  />
					</div>
					<div>
					<InitialTextBox data={introdata} header={company} />
					</div>
					<div>
					<PieRevenue  header='' company={company}  />
					</div>
				</Col>
				<Col sm={4}>
					<div style={{height:"100%"}} className="d-flex justify-content-center align-items-center">
					<RelatedListGroupItem></RelatedListGroupItem>
					</div>
				</Col>
			</Row>
		</Container>
	</Fragment>
}

export default Company

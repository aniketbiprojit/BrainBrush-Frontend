import React, { Fragment, useState } from 'react'

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Button, Container } from 'react-bootstrap'
import {Bar} from '../../../components/Charts/Bar'
import RelatedListGroupItem from '../../../components/RelatedListGroupItem/RelatedListGroupItem'
import InitialTextBox from '../../../components/InitialTextBox/InitialTextBox'
import { annualData } from '../../../components/RevenueData/RevenueData'

export const getServerSideProps: GetServerSideProps = async (context) => {
	return { props: { company: context.query.company } }
}

export const Company: React.FC = ({ company }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return <Fragment>
		<Container className="mt-5 pt-3">
			<div>
				<h1 className="pb-3">{company} Revenue (2015 – 2020)</h1>
			</div>
			<div className="mt-5 pt-3">
				<InitialTextBox data={"data"} ></InitialTextBox>
			</div>
			<div>
				<Bar data={annualData}></Bar>
			</div>
			<div className="mt-5 pt-3">
				<RelatedListGroupItem></RelatedListGroupItem>
			</div>
		</Container>
	</Fragment>
}

export default Company

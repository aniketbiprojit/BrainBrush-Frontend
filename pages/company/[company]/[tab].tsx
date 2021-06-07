import React, { Fragment } from 'react'

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { TabBar } from '../../../layouts/TabBar'

export const getServerSideProps = async (context: any) => {
	return { props: { company: context.query.company as string, tab: context.query.tab as string } }
}

export const Company: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ company, tab }) => {
	return (
		<Fragment>
			<h1>Inner Company - {company}</h1>
			<TabBar tab={tab}></TabBar>
		</Fragment>
	)
}

export default Company

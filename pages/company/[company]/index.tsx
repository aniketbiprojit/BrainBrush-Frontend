import React, { Fragment } from 'react'

import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
	return { props: { company: context.query.company } }
}

export const Company: React.FC = ({ company }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return <Fragment>Inner Company - {company}</Fragment>
}

export default Company

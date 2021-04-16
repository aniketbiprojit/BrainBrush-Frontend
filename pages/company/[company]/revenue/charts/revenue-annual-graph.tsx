import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
// import Head from 'next/head'
import { ExtractType } from '../../../../../api/Commons'
import { companyData } from '../../../../../api/CompanyDataFetch'
import { revenue } from '../../../../../api/RevenueDataFetch'
import BarChartRevenue from './../../../../../containers/BarChartRevenue/BarChartRevenue'

import { UseRouter } from 'next/router'

const RevenueAnnualGraph = () => {
	// const { route, query } = useRouter()
	// const isAbsolute = route === '/company/[company]/revenue/graph/annual'

	// if (isAbsolute) {
	// 	company = query.company as string
	// }

	// const [revenueData, setRevenueData] = useState(ExtractType(revenue))

	// const getData = (revenue_data: {
	//     _id: string
	//     income_statement: Array<{
	//         fiscalDateEnding: string
	//         annual: boolean
	//         costOfRevenue: number
	//         symbol: any[]
	//         createdAt: Date
	//         updatedAt: Date
	//     }>
	// }) => {
	//     const colors = ['#0396ff', '#d9d9d9', '#457b9d', '#3fa7d7', '#a8dadc', '#a8dadc']
	//     let annualData_ = revenue_data?.income_statement
	//         .map((elem) => {
	//             if (elem.annual === true) {
	//                 elem['year'] = elem['fiscalDateEnding']
	//                 elem['value'] = elem['totalRevenue']
	//                 elem['color'] = colors[Math.floor(Math.random() * colors.length)]
	//                 return elem
	//             }
	//         })
	//         .filter((elem) => elem !== undefined)
	//     let quarterlyData_ = revenue_data?.income_statement
	//         .map((elem) => {
	//             if (elem.annual !== true) {
	//                 elem['year'] = elem['fiscalDateEnding']
	//                 elem['value'] = elem['totalRevenue']
	//                 elem['color'] = colors[Math.floor(Math.random() * colors.length)]
	//                 return elem
	//             }
	//         })
	//         .filter((elem) => elem !== undefined)
	//     return {
	//         annualData: annualData_,
	//         quarterlyData: quarterlyData_,
	//     }
	// }

	// const [annualData, setAnnualData] = React.useState(getData(revenueData).annualData)

	// useEffect(() => {
	// 	setCompanyState(company)
	// 	if (company !== undefined) {
	// 		companyData(company).then((res) => {
	// 			setCompanyState(res.data.company_name)
	// 			console.log(res.data.logo)
	// 			setLogo(res.data.logo.url)
	// 		})
	// 		revenue(company).then((res) => {
	// 			setRevenueData(res.data)
	// 		})
	// 	}
	// }, [company])

	const router = useRouter()
	const {
		query: { id },
	} = router
	return (
		<div>
			<div>Annual {id}</div>
		</div>
	)
}

export default RevenueAnnualGraph

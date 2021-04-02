import Link from 'next/link'

const EmployeeHeader = ({ company }) => {
	return (
		<div className='employee-header'>
			<Link href={`/company/${company}/financials/income-statement`}>
				<div className='box'>Income Statement</div>
			</Link>
			<Link href={`/company/${company}/financials/balance-sheet`}>
				<div className='box'>Balance Sheet</div>
			</Link>
			<Link href={`/company/${company}/financials/cashflow-statement`}>
				<div className='box'>Cashflow Statement</div>
			</Link>
			<Link href={`/company/${company}/financials/profitability`}>
				<div className='box'>Profitability</div>
			</Link>
			<Link href={`/company/${company}/financials/ratios`}>
				<div className='box'>Ratios</div>
			</Link>
		</div>
	)
}

export default EmployeeHeader

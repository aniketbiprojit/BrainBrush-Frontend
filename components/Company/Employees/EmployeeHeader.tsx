import Link from 'next/link'

const EmployeeHeader = ({ company }) => {
	return (
		<div className='employee-header'>
			<Link href={`/company/${company}/employees`}>
				<div className='box'>Employee</div>
			</Link>
			<Link href={`/company/${company}/employees/executive-team`}>
				<div className='box'>Executive Team</div>
			</Link>
			<Link href={`/company/${company}/employees/revenue-per-employee`}>
				<div className='box'>Revenue Per Employee</div>
			</Link>
			<Link href={`/company/${company}/employees/net-income-per-employee`}>
				<div className='box'>Net Income Per Employee</div>
			</Link>
		</div>
	)
}

export default EmployeeHeader

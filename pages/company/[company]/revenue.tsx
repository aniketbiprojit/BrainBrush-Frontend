import React from 'react'
import { Container } from 'react-bootstrap'
import BarChart from '../../../components/Charts/BarChart/BarChart'
// import { Bar } from '../../../components/Charts/BarChart'
// import { RevenueDescription } from '../../../components/RevenueDescription/RevenueDescription'

const annual:React.FC<{data : {}[] ; company: string}> = (props) => {
    const {data, company} = props
    return (
        <Container className="mt-5 pt-3" style={{height:"90vh"}}>
            <BarChart/>
        </Container>
    )
}

export default annual

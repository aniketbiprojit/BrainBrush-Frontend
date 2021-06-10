import React from 'react'
import { Container } from 'react-bootstrap'
import { Bar } from '../../../components/Charts/Bar'
import { RevenueDescription } from '../../../components/RevenueDescription/RevenueDescription'

const annual:React.FC<{data : {}[] ; company: string}> = (props) => {
    const {data, company} = props
    return (
        <Container style={{height:"90vh"}}>
            <h4>bar</h4>
            {/* <Bar data={data}/> */}
            <RevenueDescription header='' company={company}/>
        </Container>
    )
}

export default annual

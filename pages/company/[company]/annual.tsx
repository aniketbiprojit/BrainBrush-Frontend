import React from 'react'
import { Container } from 'react-bootstrap'
import { Bar } from '../../../components/Charts/Bar'

const annual:React.FC<{data : {}[]}> = (props) => {
    const {data} = props
    return (
        <Container style={{height:"90vh"}}>
            <h4>bar</h4>
            {/* <Bar data={data}/> */}
        </Container>
    )
}

export default annual

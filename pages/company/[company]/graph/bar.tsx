import React from 'react'

import { ResponsiveBar } from '@nivo/bar'

const BarChart = ({ data }) => {
	console.log('bar')
	console.log(data)
	return (
		<div className=''>
			<ResponsiveBar
				theme={{
					fontSize: 16,
				}}
				data={data}
				keys={['value']}
				indexBy='year'
				margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
				padding={0.3}
				maxValue={300}
				valueScale={{ type: 'linear' }}
				indexScale={{ type: 'band', round: true }}
				colors={{ datum: 'data.color' }}
				defs={[
					{
						id: 'dots',
						type: 'patternDots',
						background: 'inherit',
						color: '#38bcb2',
						size: 4,
						padding: 1,
						stagger: true,
					},
					{
						id: 'lines',
						type: 'patternLines',
						background: 'inherit',
						color: '#eed312',
						rotation: -45,
						lineWidth: 6,
						spacing: 10,
					},
				]}
				borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
				axisTop={null}
				axisRight={null}
				axisBottom={{
					tickSize: 0,
					tickPadding: 7,
					tickRotation: 0,
					legend: 'Year',
					legendPosition: 'middle',
					legendOffset: 32,
				}}
				axisLeft={null}
				labelFormat={(d): any => <tspan y={0}>{d} </tspan>}
				labelSkipWidth={12}
				labelSkipHeight={10}
				labelTextColor={{ from: 'color', modifiers: [['darker', 3]] }}
				legends={[]}
				animate={true}
				motionStiffness={90}
				motionDamping={15}
			/>
		</div>
	)
}

export default BarChart

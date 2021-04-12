import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Grid, Table, TableHeaderRow, TableFixedColumns } from '@devexpress/dx-react-grid-material-ui'

// const datas = [
// 	{
// 		year: '2020-12-31',
// 		cash: 100000000,
// 		shortTermInvestments: '18197000000',
// 		netReceivables: '3406000000',
// 		inventory: 'None',
// 		otherCurrentAssets: '138000000',
// 		totalCurrentAssets: '-5088000000',
// 		longTermInvestments: '6695000000',
// 		propertyPlantEquipment: '2618000000',
// 		goodwill: '-5297000000',
// 		intangibleAssets: '209000000',
// 		otherNonCurrentAssets: '5590000000',
// 		totalNonCurrentAssets: '-3028000000',
// 		totalAssets: '-9721000000',
// 	},
// 	{
// 		year: '2019-12-31',
// 		cash: 100000000,
// 		shortTermInvestments: '18197000000',
// 		netReceivables: '3406000000',
// 		inventory: 'None',
// 		otherCurrentAssets: '138000000',
// 		totalCurrentAssets: '-5088000000',
// 		longTermInvestments: '6695000000',
// 		propertyPlantEquipment: '2618000000',
// 		goodwill: '-5297000000',
// 		intangibleAssets: '209000000',
// 		otherNonCurrentAssets: '5590000000',
// 		totalNonCurrentAssets: '-3028000000',
// 		totalAssets: '-9721000000',
// 	},
// 	{
// 		year: '2018-12-31',
// 		cash: 100000000,
// 		shortTermInvestments: '18197000000',
// 		netReceivables: '3406000000',
// 		inventory: 'None',
// 		otherCurrentAssets: '138000000',
// 		totalCurrentAssets: '-5088000000',
// 		longTermInvestments: '6695000000',
// 		propertyPlantEquipment: '2618000000',
// 		goodwill: '-5297000000',
// 		intangibleAssets: '209000000',
// 		otherNonCurrentAssets: '5590000000',
// 		totalNonCurrentAssets: '-3028000000',
// 		totalAssets: '-9721000000',
// 	},
// 	{
// 		year: '2017-12-31',
// 		cash: 100000000,
// 		shortTermInvestments: '18197000000',
// 		netReceivables: '3406000000',
// 		inventory: 'None',
// 		otherCurrentAssets: '138000000',
// 		totalCurrentAssets: '-5088000000',
// 		longTermInvestments: '6695000000',
// 		propertyPlantEquipment: '2618000000',
// 		goodwill: '-5297000000',
// 		intangibleAssets: '209000000',
// 		otherNonCurrentAssets: '5590000000',
// 		totalNonCurrentAssets: '-3028000000',
// 		totalAssets: '-9721000000',
// 	},
// 	{
// 		year: '2016-12-31',
// 		cash: 100000000,
// 		shortTermInvestments: '18197000000',
// 		netReceivables: '3406000000',
// 		inventory: 'None',
// 		otherCurrentAssets: '138000000',
// 		totalCurrentAssets: '-5088000000',
// 		longTermInvestments: '6695000000',
// 		propertyPlantEquipment: '2618000000',
// 		goodwill: '-5297000000',
// 		intangibleAssets: '209000000',
// 		otherNonCurrentAssets: '5590000000',
// 		totalNonCurrentAssets: '-3028000000',
// 		totalAssets: '-9721000000',
// 	},
// ]

const datas = [
	{
		blank: 'Cash and cash equivalents',
		charts: 'chart',
		2015: 100000000,
		2016: 100000000,
		2017: 100000000,
		2018: 100000000,
		2019: 100000000,
		2020: 100000000,
	},
	{
		blank: 'Marketable securities',
		charts: 'chart',
		2015: 18197000000,
		2016: 18197000000,
		2017: 18197000000,
		2018: 18197000000,
		2019: 18197000000,
		2020: 18197000000,
	},
	{
		blank: 'Marketable securities',
		charts: 'chart',
		2015: 18197000000,
		2016: 18197000000,
		2017: 18197000000,
		2018: 18197000000,
		2019: 18197000000,
		2020: 18197000000,
	},
	{
		blank: 'Marketable securities',
		charts: 'chart',
		2015: 18197000000,
		2016: 18197000000,
		2017: 18197000000,
		2018: 18197000000,
		2019: 18197000000,
		2020: 18197000000,
	},
	{
		blank: 'Marketable securities',
		charts: 'chart',
		2015: 18197000000,
		2016: 18197000000,
		2017: 18197000000,
		2018: 18197000000,
		2019: 18197000000,
		2020: 18197000000,
	},
	{
		blank: 'Marketable securities',
		charts: 'chart',
		2015: 18197000000,
		2016: 18197000000,
		2017: 18197000000,
		2018: 18197000000,
		2019: 18197000000,
		2020: 18197000000,
	},
]

// const useStyles = makeStyles((theme: Theme) =>
// 	createStyles({
// 		root: {
// 			// overflowX: 'auto',
//             zIndex: 1,
// 		},
// 		typeofrow: {
// 			fontWeight: 'bold',
// 			textTransform: 'uppercase',
// 		},
// 		typeofrow_child: {
// 			fontWeight: 'bold',
// 			textTransform: 'lowercase',
// 		},
// 	})
// )

const FinanicalFormat: React.FC<{}> = () => {
	// const classes = useStyles()

	const [columns] = useState([
		{ name: 'blank', title: ' ' },
		{ name: 'charts', title: 'Charts' },
		{ name: '2015', title: '2015' },
		{ name: '2016', title: '2016' },
		{ name: '2017', title: '2017' },
		{ name: '2018', title: '2018' },
		{ name: '2019', title: '2019' },
		{ name: '2020', title: '2020' },
	])

	const [tableColumnExtensions] = useState([
		{ columnName: 'blank', width: 250 },
		{ columnName: 'charts', width: 80 },
		{ columnName: '2015', width: 150 },
		{ columnName: '2016', width: 150 },
		{ columnName: '2017', width: 150 },
		{ columnName: '2018', width: 150 },
		{ columnName: '2019', width: 150 },
		{ columnName: '2020', width: 150 },
	])

	const [leftColumns] = useState(['blank', 'charts'])

	return (
		<div className='income-statement'>
			<Paper>
				<Grid rows={datas} columns={columns}>
					<Table columnExtensions={tableColumnExtensions} />
					<TableHeaderRow />
					<TableFixedColumns leftColumns={leftColumns} />
				</Grid>
			</Paper>
			{/* <table className='custom-table'>
				<tr>
					<th></th>
					<th>chart</th>
					{datas.map((data) => (
						<th>{data.year}</th>
					))}
				</tr>
				<p className={classes.typeofrow}>Assets</p>
				<p className={classes.typeofrow_child}>Current Assets:</p>
				<tr>
					<td>Cash and cash equivalents</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.cash}</td>
					))}
				</tr>
				<tr>
					<td>Marketable securities</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.shortTermInvestments}</td>
					))}
				</tr>
				<tr>
					<td>Accounts receivable, net</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.netReceivables}</td>
					))}
				</tr>
				<tr>
					<td>Inventories</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.inventory}</td>
					))}
				</tr>
				<tr>
					<td>Other current assets</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.otherCurrentAssets}</td>
					))}
				</tr>{' '}
				<tr>
					<td>Total current assets</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.totalCurrentAssets}</td>
					))}
				</tr>
				<p className={classes.typeofrow_child}>Non-current Assets:</p>
				<tr>
					<td>Marketable securities</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.longTermInvestments}</td>
					))}
				</tr>
				<tr>
					<td>Property, plant and equipment, net</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.propertyPlantEquipment}</td>
					))}
				</tr>
				<tr>
					<td>Goodwill</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.goodwill}</td>
					))}
				</tr>
				<tr>
					<td>Intangible Assets</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.intangibleAssets}</td>
					))}
				</tr>
				<tr>
					<td>Other Long Term assets</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.otherNonCurrentAssets}</td>
					))}
				</tr>
				<tr>
					<td>Total Assets:</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.totalAssets}</td>
					))}
				</tr>

				<p className={classes.typeofrow}>LIABILITIES AND SHAREHOLDERS EQUITY</p>
				<p className={classes.typeofrow_child}>Current Liabilities:</p>
				<tr>
					<td>Account Payable</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.cash}</td>
					))}
				</tr>
				<tr>
					<td>Other current liabilities</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.shortTermInvestments}</td>
					))}
				</tr>
				<tr>
					<td>Deferred revenue</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.netReceivables}</td>
					))}
				</tr>
				<tr>
					<td>Commercial papers</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.inventory}</td>
					))}
				</tr>
				<tr>
					<td>Term debt</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.otherCurrentAssets}</td>
					))}
				</tr>{' '}
				<tr>
					<td>Total current liabilities</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.totalCurrentAssets}</td>
					))}
				</tr>
				<p className={classes.typeofrow_child}>Non-current Liabilities:</p>
				<tr>
					<td>Long-term debt</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.longTermInvestments}</td>
					))}
				</tr>
				<tr>
					<td>Long-term income taxes</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.propertyPlantEquipment}</td>
					))}
				</tr>
				<tr>
					<td>Long-term unearned revenue</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.goodwill}</td>
					))}
				</tr>
				<tr>
					<td>Deferred income taxes</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.intangibleAssets}</td>
					))}
				</tr>
				<tr>
					<td>Capital Lease</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.otherNonCurrentAssets}</td>
					))}
				</tr>
				<tr>
					<td>Other non-current liabilities</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.totalAssets}</td>
					))}
				</tr>
				<tr>
					<td>Total non-current liabilities</td>
					<td>chart</td>
					{datas.map((data) => (
						<td>{data.totalAssets}</td>
					))}
				</tr>
			</table> */}
		</div>
	)
}

export default FinanicalFormat

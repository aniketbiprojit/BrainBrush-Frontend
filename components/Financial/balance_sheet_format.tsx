import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const datas = [
	{
		year: '2020-12-31',
		cash: 100000000,
		shortTermInvestments: '18197000000',
		netReceivables: '3406000000',
		inventory: 'None',
		otherCurrentAssets: '138000000',
		totalCurrentAssets: '-5088000000',
		longTermInvestments: '6695000000',
		propertyPlantEquipment: '2618000000',
		goodwill: '-5297000000',
		intangibleAssets: '209000000',
		otherNonCurrentAssets: '5590000000',
		totalNonCurrentAssets: '-3028000000',
		totalAssets: '-9721000000',
	},
	{
		year: '2019-12-31',
		cash: 100000000,
		shortTermInvestments: '18197000000',
		netReceivables: '3406000000',
		inventory: 'None',
		otherCurrentAssets: '138000000',
		totalCurrentAssets: '-5088000000',
		longTermInvestments: '6695000000',
		propertyPlantEquipment: '2618000000',
		goodwill: '-5297000000',
		intangibleAssets: '209000000',
		otherNonCurrentAssets: '5590000000',
		totalNonCurrentAssets: '-3028000000',
		totalAssets: '-9721000000',
	},
	{
		year: '2018-12-31',
		cash: 100000000,
		shortTermInvestments: '18197000000',
		netReceivables: '3406000000',
		inventory: 'None',
		otherCurrentAssets: '138000000',
		totalCurrentAssets: '-5088000000',
		longTermInvestments: '6695000000',
		propertyPlantEquipment: '2618000000',
		goodwill: '-5297000000',
		intangibleAssets: '209000000',
		otherNonCurrentAssets: '5590000000',
		totalNonCurrentAssets: '-3028000000',
		totalAssets: '-9721000000',
	},
	{
		year: '2017-12-31',
		cash: 100000000,
		shortTermInvestments: '18197000000',
		netReceivables: '3406000000',
		inventory: 'None',
		otherCurrentAssets: '138000000',
		totalCurrentAssets: '-5088000000',
		longTermInvestments: '6695000000',
		propertyPlantEquipment: '2618000000',
		goodwill: '-5297000000',
		intangibleAssets: '209000000',
		otherNonCurrentAssets: '5590000000',
		totalNonCurrentAssets: '-3028000000',
		totalAssets: '-9721000000',
	},
	{
		year: '2016-12-31',
		cash: 100000000,
		shortTermInvestments: '18197000000',
		netReceivables: '3406000000',
		inventory: 'None',
		otherCurrentAssets: '138000000',
		totalCurrentAssets: '-5088000000',
		longTermInvestments: '6695000000',
		propertyPlantEquipment: '2618000000',
		goodwill: '-5297000000',
		intangibleAssets: '209000000',
		otherNonCurrentAssets: '5590000000',
		totalNonCurrentAssets: '-3028000000',
		totalAssets: '-9721000000',
	},
]

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			overflowX: 'auto',
		},
		typeofrow: {
			fontWeight: 'bold',
			textTransform: 'uppercase',
		},
		typeofrow_child: {
			fontWeight: 'bold',
			textTransform: 'lowercase',
		},
	})
)

const FinanicalFormat: React.FC<{}> = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<table className='custom-table'>
				<tr>
					<th> </th>
					<th> chart</th>
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
				{/* LIABILITIES AND SHAREHOLDERS’ EQUITY */}
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
			</table>
		</div>
	)
}

export default FinanicalFormat

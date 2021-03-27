import Axios from 'axios'
import { resolveURL } from './Commons'

export const revenue = async (symbol: string) => {
	const url = resolveURL(`./admin/company/revenue/${symbol}`)
	console.log(process.env.NEXT_PUBLIC_API, url)
	return Axios.get<{
		_id: string
		income_statement: Array<{
			fiscalDateEnding: string
			annual: boolean
			costOfRevenue: number
			symbol: any[]
			createdAt: Date
			updatedAt: Date
		}>
	}>(url)
}

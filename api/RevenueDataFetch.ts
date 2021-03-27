import Axios, { AxiosResponse } from 'axios'

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

function resolveURL(url: string): string {
	return new URL(url, process.env.NEXT_PUBLIC_API).href
}

export function ExtractType<T, R extends unknown[]>(x: (...args: R) => Promise<AxiosResponse<T>>) {
	return null as T
}

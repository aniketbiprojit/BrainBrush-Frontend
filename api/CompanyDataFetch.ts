import Axios from 'axios'
import { resolveURL } from './Commons'

export const companyData = async (company: string) => {
	return Axios.get<{
		company_name: string
		logo: string
	}>(resolveURL(`./company/logo/${company}`))
}

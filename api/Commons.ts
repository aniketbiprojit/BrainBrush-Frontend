import { AxiosResponse } from 'axios'

export function resolveURL(url: string): string {
	return new URL(url, process.env.NEXT_PUBLIC_API).href
}

export function ExtractType<T, R extends unknown[]>(x: (...args: R) => Promise<AxiosResponse<T>>) {
	return null as T
}

import { FaGoogle, FaAmazon, FaAdobe, FaUber } from 'react-icons/fa'
import Link from 'next/link'

export const Links = ({ recent, icon_size }: { recent: string; icon_size: number }) => {
	return (
		<div id='recent' className={recent + ' bg-gray-400 bg-opacity-70 p-2 rounded-full flex flex-row items-center'}>
			<Link href={`/company/GOOG`}>
				<h2 className='flex flex-row p-2 px-4 text-lg font-medium duration-100 rounded-full hover:bg-gray-400'>
					<FaGoogle size={icon_size} className='self-center ml-1 mr-1 lg:mr-2 lg:ml-0' />
					Google
				</h2>
			</Link>
			<Link href={`company/AMZN`}>
				<h2 className='flex flex-row p-2 px-4 text-lg font-medium duration-100 rounded-full hover:bg-gray-400'>
					<FaAmazon size={icon_size} className='self-center ml-1 mr-1 lg:mr-2 lg:ml-2' />
					Amazon
				</h2>
			</Link>
			<Link href={`company/ADBE`}>
				<h2 className='flex flex-row p-2 px-4 text-lg font-medium duration-100 rounded-full hover:bg-gray-400'>
					<FaAdobe size={icon_size} className='self-center ml-1 mr-1 lg:mr-2 lg:ml-2' />
					Adobe
				</h2>
			</Link>
			<Link href={`company/IBM`}>
				<h2 className='flex flex-row p-2 px-4 text-lg font-medium duration-100 rounded-full hover:bg-gray-400'>
					<FaUber size={icon_size} className='self-center ml-1 mr-1 lg:mr-2 lg:ml-2' />
					IBM
				</h2>
			</Link>
		</div>
	)
}

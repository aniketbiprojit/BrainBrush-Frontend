import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import React, { Fragment } from 'react'
import ButtonCard from './ButtonCard/ButtonCard'
import { getFields } from './getFields'

const Menu: React.FC<{ currentTab: string; company: string; minimize: boolean }> = ({ currentTab, company, minimize }) => {
	const { route } = useRouter()
	const fields = getFields(company)
	return (
		<div className={minimize ? 'w-full lg:shadow-xl py-5 bg-white md:px-12' : 'w-full py-10 bg-white md:px-12'}>
			<ul className='flex flex-wrap justify-center w-full gap-0 md:gap-5'>
				{fields.map((field) => {
					return (
						<Fragment>
							<Link href={field.href}>
								<div key={field.text} className=''>
									<ButtonCard
										minimize={minimize}
										icon={field.icon}
										text={field.text}
										isSelected={route === field.route}
									></ButtonCard>
								</div>
							</Link>
						</Fragment>
					)
				})}
			</ul>
		</div>
	)
}

export default Menu

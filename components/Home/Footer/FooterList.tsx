export const FooterList = ({ styles, links_discover, icon }: { styles: any; links_discover: any; icon: any }) => {
	return (
		<ul className={styles.menu.container} id='footerList'>
			<li className={styles.menu.header}>
				<div className={styles.menu.icon}>{icon}</div>
				<h2>Discover</h2>
			</li>
			{links_discover.map(({ href, label }) => (
				<li key={`${href}${label}`}>
					<a href={href} className={styles.menu.text}>
						{label}
					</a>
				</li>
			))}
		</ul>
	)
}

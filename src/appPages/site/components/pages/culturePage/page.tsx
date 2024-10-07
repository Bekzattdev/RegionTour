import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import CultureNavImg from './cultureData/cultureImages/cultureNav.png'
import styles from './cultureNav.module.scss'
interface NavItem {
	label: string
	href: string

}

const navItems: NavItem[] = [
	{ label: 'Games', href: '/culture/games' },
	{ label: 'National clothes', href: '/culture/national-clothes' },
	{ label: 'Hand crafts', href: '/culture/hand-crafts' },
	{ label: 'Currency', href: '/culture/currency' },
	{ label: 'National instruments', href: '/culture/national-instruments' },
	{ label: 'Kitchen', href: '/culture/kitchen' },
]

const CultureNav: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image
					src={CultureNavImg}
					alt='Kyrgyz traditional clothing'
				
					objectFit='cover'
		
				/>
		
			</div>

			<div className={styles.content}>
				<h1 className={styles.title}>Culture</h1>
				<p className={styles.description}>
					The culture of Kyrgyzstan was formed under the strong influence of
					nomadic life. In addition, it was influenced by the cultures of
					Russia, Persia and Turkey, and yet it retained its originality and
					uniqueness. The connection of Kyrgyz culture with nature can be traced
					everywhere: from dwelling-yurts to the traditional cuisine. An example
					of Kyrgyz culture is the Manas epic, an incredibly long poem that was
					passed down orally from one generation to the next.
				</p>
				<nav className={styles.navigation}>
					{navItems.map((item, index) => (
						<Link key={index} href={item.href} className={styles.navItem}>
							{item.label}
							<span className={styles.arrow}>→</span>
						</Link>
					))}
				</nav>
			</div>
			
		</div>
	)
}

export default CultureNav

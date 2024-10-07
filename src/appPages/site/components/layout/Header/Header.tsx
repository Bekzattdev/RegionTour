'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Header.module.scss'

interface NavLink {
	name: string
	path: string
	subLinks?: NavLink[]
}

const navLinks: NavLink[] = [
	{ name: 'Home', path: '/' },
	{
		name: 'Regions',
		path: '/regions',
		subLinks: [
			{ name: 'Issyk-Kul', path: '/regions/issyk-kul' },
			{ name: 'Talas', path: '/regions/talas' },
			{ name: 'Chui', path: '/regions/chui' },
			{ name: 'Jalal-Abad', path: '/regions/jalal-abad' },
			{ name: 'Naryn', path: '/regions/naryn' },
			{ name: 'Osh', path: '/regions/osh' },
			{ name: 'Batken', path: '/regions/batken' },
		],
	},
	{
		name: 'Culture',
		path: '/culture',
		subLinks: [
			{ name: 'Games', path: '/culture/games' },
			{ name: 'National clothes', path: '/culture/national-clothes' },
			{ name: 'National instruments', path: '/culture/national-instruments' },
			{ name: 'Hand crafts', path: '/culture/hand-crafts' },
			{ name: 'Kitchen', path: '/culture/kitchen' },
			{ name: 'Currency', path: '/culture/currency' },
		],
	},
	{ name: 'Gallery', path: '/gallery' },
	{ name: 'Routes', path: '/routes' },

]

const Header: React.FC = () => {
	const [language, setLanguage] = useState('eng')
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [openSubMenu, setOpenSubMenu] = useState<string | null>(null)

	const handleLanguageChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setLanguage(event.target.value)
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
		setOpenSubMenu(null)
	}

	const toggleSubMenu = (linkName: string, event: React.MouseEvent) => {
		event.preventDefault()
		setOpenSubMenu(openSubMenu === linkName ? null : linkName)
	}

	const menuVariants = {
		closed: { opacity: 0, x: '-100%' },
		open: { opacity: 1, x: 0 },
	}

	return (
	<div id={styles.header}>
			<div className={styles.headerWrapper}>
		<header className={styles.header}>
			<Link href='/' className={styles.logo}>
				<span>Logo</span>
			</Link>
			<nav className={styles.desktopNav}>
				{navLinks.map((link) => (
					<div key={link.name} className={styles.navItem}>
						<Link href={link.path} className={styles.navLink}>
							{link.name}
						</Link>
						{link.subLinks && (
							<div className={styles.subMenu}>
								{link.subLinks.map((subLink) => (
									<Link
										key={subLink.name}
										href={subLink.path}
										className={styles.subNavLink}
									>
										{subLink.name}
									</Link>
								))}
							</div>
						)}
					</div>
				))}
			</nav>
			<div className={styles.actions}>
				<select
					className={styles.langButton}
					value={language}
					onChange={handleLanguageChange}
				>
					<option value='eng'>Eng</option>
					<option value='rus'>Rus</option>
					<option value='kgz'>Kgz</option>
				</select>
				<button className={styles.signUpButton}>Sign up</button>
			</div>
			<div className={styles.burgerMenu} onClick={toggleMenu}>
				<div
					className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`}
				></div>
				<div
					className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`}
				></div>
				<div
					className={`${styles.burgerLine} ${isMenuOpen ? styles.open : ''}`}
				></div>
			</div>
		</header>
		<AnimatePresence>
			{isMenuOpen && (
				<motion.div
					className={styles.mobileMenu}
					initial='closed'
					animate='open'
					exit='closed'
					variants={menuVariants}
					transition={{ duration: 0.3 }}
				>
					{navLinks.map((link) => (
						<div key={link.name} className={styles.mobileNavItem}>
							<div className={styles.mobileNavLinkWrapper}>
								<Link
									href={link.path}
									className={styles.mobileNavLink}
									onClick={toggleMenu}
								>
									{link.name}
								</Link>
								{link.subLinks && (
									<span
										className={`${styles.arrow} ${
											openSubMenu === link.name ? styles.open : ''
										}`}
										onClick={(e) => toggleSubMenu(link.name, e)}
									>
										▼
									</span>
								)}
							</div>
							{link.subLinks && openSubMenu === link.name && (
								<div className={styles.mobileSubMenu}>
									{link.subLinks.map((subLink) => (
										<Link
											key={subLink.name}
											href={subLink.path}
											className={styles.mobileSubNavLink}
											onClick={toggleMenu}
										>
											{subLink.name}
										</Link>
									))}
								</div>
							)}
						</div>
					))}
				</motion.div>
			)}
		</AnimatePresence>
	</div>
	</div>
	)
}

export default Header

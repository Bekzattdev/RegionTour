/** @format */

// Games.tsx
import React from "react"
import Image from "next/image"
import { kyrgyzCulture } from "../cultureData/cultureData"
import styles from "../styleForCulturePages.module.scss"

const Games: React.FC = () => {
	return (
		<div className={styles.container}>
			<div
				className={styles.cultureHeader}
				style={{ backgroundImage: `url(${kyrgyzCulture?.games?.image})` }}
			>
				<h1>{kyrgyzCulture?.games?.title}</h1>
				<p>{kyrgyzCulture?.games?.description}</p>
			</div>
			{kyrgyzCulture?.games?.gamesItem.map((el, index) => (
				<div key={index} className={styles.card}>
					<div className={styles.imageContainer}>
						<Image
							src={el.image}
							alt={el.title}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className={styles.content}>
						<h2>{el.title}</h2>
						<p>{el.description}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default Games

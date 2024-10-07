/** @format */

// HandCrafts.tsx
import React from "react"
import Image from "next/image"
import { kyrgyzCulture } from "../cultureData/cultureData"
import styles from "../styleForCulturePages.module.scss"

const HandCrafts: React.FC = () => {
	return (
		<div className={styles.container}>
			<div
				className={styles.cultureHeader}
				style={{ backgroundImage: `url(${kyrgyzCulture?.crafts?.image})` }}
			>
				<h1>{kyrgyzCulture?.crafts?.title}</h1>
				<p>{kyrgyzCulture?.crafts?.description}</p>
			</div>
			{kyrgyzCulture?.crafts?.craftsItems.map((el, index) => (
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

export default HandCrafts

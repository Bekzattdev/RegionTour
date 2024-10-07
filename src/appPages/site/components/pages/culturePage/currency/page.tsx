/** @format */

// Currency.tsx
import React from "react"
import Image from "next/image"
import { kyrgyzCulture } from "../cultureData/cultureData"
import styles from "./Currency.module.scss"

const Currency: React.FC = () => {
	return (
		<div className={styles.container}>
			<div
				className={styles.cultureHeader}
				style={{ backgroundImage: `url(${kyrgyzCulture?.economy?.image})` }}
			>
				<h1>{kyrgyzCulture?.economy?.title}</h1>
				<p>{kyrgyzCulture?.economy?.description}</p>
			</div>
			{kyrgyzCulture?.economy?.currency.map((instrument, index) => (
				<div key={index} className={styles.card}>
					<div className={styles.imageContainer}>
						<Image
							src={instrument.image}
							alt={instrument.title}
							objectFit="contain"
						/>
					</div>
					<div className={styles.content}>
						<h2>{instrument.title}</h2>
						{instrument.description.split("\n\n").map((paragraph, pIndex) => (
							<p key={pIndex}>{paragraph}</p>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

export default Currency

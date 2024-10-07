/** @format */

import React from "react"
import Image from "next/image"
import { kyrgyzCulture } from "../cultureData/cultureData"
import styles from "../styleForCulturePages.module.scss"

const NationalInstruments: React.FC = () => {
	return (
		<div className={styles.container}>
			<div
				className={styles.cultureHeader}
				style={{ backgroundImage: `url(${kyrgyzCulture?.music?.image})` }}
			>
				<h1>{kyrgyzCulture?.music?.title}</h1>
				<p>{kyrgyzCulture?.music?.description}</p>
			</div>
			{kyrgyzCulture?.music?.instruments.map((instrument, index) => (
				<div key={index} className={styles.card}>
					<div className={styles.imageContainer}>
						<Image
							src={instrument.image}
							alt={instrument.title}
							layout="responsive"
							width={574}
							height={392}
							objectFit="contain"
						/>
					</div>
					<div className={styles.content}>
						<h2>{instrument.title}</h2>
						<p>{instrument.description}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default NationalInstruments

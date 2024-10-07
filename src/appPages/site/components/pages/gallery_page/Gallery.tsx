import React from 'react'
import { cardsData } from './CardData'
import styles from './Gallery.module.scss'
import GalleryCard from './GalleryCard'

const Gallery: React.FC = () => {
	return (
		<div className={styles.gridContainer}>
			{cardsData.map((card) => (
				<div key={card.id} className={styles.gridItem}>
					<GalleryCard {...card} />
				</div>
			))}
		</div>
	)
}

export default Gallery

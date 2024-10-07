import Image, { StaticImageData } from 'next/image'
import React from 'react'
import LikeImg from '../../../assets/img/gallery-images/like.png'
import styles from './GalleryCard.module.scss'
interface CardProps {
	image: StaticImageData
	title: string
	address: string
	reviews: number
	rating: number
	liked: boolean
}

const GalleryCard: React.FC<CardProps> = ({
	image,
	title,
	address,
	reviews,
	rating,
	liked,
}) => {
	const renderStars = (rating: number) => {
		const fullStars = Math.floor(rating)
		const hasHalfStar = rating % 1 >= 0.5
		const stars =
			'★'.repeat(fullStars) +
			(hasHalfStar ? '½' : '') +
			'☆'.repeat(5 - fullStars - (hasHalfStar ? 1 : 0))
		return stars
	}

	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<Image
					src={image}
					alt={title}
					objectFit='cover'
					className={styles.image}
				/>
				<div
					className={styles.likeButton}
					style={{
						background: liked ? 'red' : 'transparent',
					}}
				>
					<Image src={LikeImg} alt='not liked heart image' />
				</div>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>{title}</h2>
				<div className={styles.rating}>
					<span className={styles.stars}>{renderStars(rating)}</span>
					<span className={styles.reviews}>{reviews} reviews</span>
				</div>
				<div className={styles.address}>
					<span className={styles.locationIcon}>📍</span>
					{address}
				</div>
			</div>
		</div>
	)
}

export default GalleryCard

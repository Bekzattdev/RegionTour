import { StaticImageData } from 'next/image'
import AlaArcha from '../../../assets/img/gallery-images/ala-archa.png'
import Balykchy from '../../../assets/img/gallery-images/balykchy.png'
import SonKol from '../../../assets/img/gallery-images/son-kol.png'

export interface CardData {
	id: number
	image: StaticImageData
	title: string
	address: string
	reviews: number
	rating: number
	liked: boolean
}

export const cardsData: CardData[] = [
	{
		id: 1,
		image: Balykchy,
		title: 'Tüp',
		address: 'Tüp, 107, Karakol 722360',
		reviews: 23764,
		rating: 4.5,
		liked: false,
	},
	{
		id: 2,
		image: AlaArcha,
		title: 'Issyk-Kul',
		address: 'Issyk-Kul Region, Kyrgyzstan',
		reviews: 15689,
		rating: 4.8,
		liked: true,
	},
	{
		id: 3,
		image: SonKol,
		title: 'Ala-Archa',
		address: 'Ala-Archa National Park, Bishkek',
		reviews: 8923,
		rating: 4.6,
		liked: false,
	},
	{
		id: 4,
		image: Balykchy,
		title: 'Son-Kul Lake',
		address: 'Naryn Region, Kyrgyzstan',
		reviews: 5467,
		rating: 4.7,
		liked: true,
	},
	{
		id: 5,
		image: AlaArcha,
		title: 'Karakol',
		address: 'Karakol, Issyk-Kul Region',
		reviews: 12345,
		rating: 4.4,
		liked: false,
	},
	{
		id: 5,
		image: SonKol,
		title: 'Karakol',
		address: 'Karakol, Issyk-Kul Region',
		reviews: 12345,
		rating: 4.4,
		liked: false,
	},
	// Add more items as needed
]

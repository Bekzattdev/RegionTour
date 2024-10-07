/** @format */

import { StaticImageData } from "next/image"
import dombuldak from "./cultureImages/dombuldak.png"
import foodCollectionBig from "./cultureImages/foodCollectionBig.png"
import hat from "./cultureImages/hat.png"
import kalpak from "./cultureImages/kalpak.png"
import komuz from "./cultureImages/komuz.png"
import kumiz from "./cultureImages/kumiz.png"
import kuresh from "./cultureImages/kuresh.png"
import kurut from "./cultureImages/kurut.png"
import kylKyak from "./cultureImages/kylKyak.png"
import kyzKuumai from "./cultureImages/kyzKuumai.png"
import mainCultureNavBg from "./cultureImages/mainCultureNavBg.png"
import maksym from "./cultureImages/maksym.png"
import Money from "./cultureImages/Money.png"
import moneyBg from "./cultureImages/moneyBg.png"
import outwearForMen from "./cultureImages/outwearForMen.png"
import shyrdak from "./cultureImages/shyrdak.png"
import temirKomuz from "./cultureImages/temirKomuz.png"
import tiyinEnmey from "./cultureImages/tiyinIymey.png"
import tushKiiz from "./cultureImages/tushKiiz.png"
import tushKiizSecond from "./cultureImages/tushKiizSecond.png"
import ulackTartysh from "./cultureImages/ulackTartysh.png"
import womanSuit from "./cultureImages/womanSuit.png"
import yurts from "./cultureImages/yurts.png"
import headerBg from "./cultureImages/mainHeaderBg.png"
import ordo from "./cultureImages/ordo.png"
interface PageTitle {
	title: string
	description: string
	image: StaticImageData
}
interface CultureItem {
	title: string
	description: string
	image: StaticImageData
}
interface CultureData {
	kitchen: {
		title: string
		description: string
		image: StaticImageData
		foods: CultureItem[]
	}
	clothing: {
		title: string
		description: string
		image: StaticImageData
		clothes: CultureItem[]
	}
	music: {
		title: string
		description: string
		image: StaticImageData
		instruments: CultureItem[]
	}

	games: {
		title: string
		description: string
		image: StaticImageData
		gamesItem: CultureItem[]
	}
	crafts: {
		title: string
		description: string
		image: StaticImageData
		craftsItems: CultureItem[]
	}
	economy: {
		title: string
		description: string
		image: StaticImageData
		currency: CultureItem[]
	}
}

export const kyrgyzCulture: CultureData = {
	kitchen: {
		title: "National Instrument",
		description:
			"Kyrgyz music is notable for being in tune with nature and life in the mountains. The texts of many songs tell about the everyday life of nomads, and even in compositions where there are no words, the corresponding mood is subtly conveyed. There are many musical instruments in Kyrgyzstan.",
		image: headerBg,

		foods: [
			{
				title: "Food Collection",
				description: `The national cuisine in Kyrgyzstan is rich and varied. It has been formed throughout the history of the Kyrgyz people and has absorbed the most delicious dishes and drinks left over from the time of nomadic life, as well as dishes of neighboring peoples in the region. Most traditional dishes cannot do without meat. Mutton, beef, yak meat and horse meat, especially loved and appreciated by the Kyrgyz, are used for food.\n\n
The most famous Kyrgyz dish is beshbarmak - boiled, finely chopped lamb, filled with broth, with the addition of onions and noodles. The name of this dish is translated from Kyrgyz as "five fingers", and is traditionally eaten with the hands. For the Kyrgyz people, beshbarmak is not just a dish - it is a whole ceremony with its own traditions and customs.\n\n
The ram is cut and boiled in a cauldron until the broth is ready for consumption, and the meat on the bones is for distribution among the participants in the meal. First, guests are given zhash shorpo - a strong broth seasoned with onions, then kuiruk-boor - liver and fat tail fat, cut into small slices and seasoned with a special sauce, then kabyrga - ribs with a thick layer of meat and lard. Finally, beshbarmak itself is served on a large dish - finely chopped meat mixed with noodles and seasoned with onion sauce.\n\n
No meal is complete without bread. Usually, bread is in the form of flatbreads, which are cooked in cauldrons (geomkyormyo tokoch), in a frying pan (geomechtön) or in special ovens (tandoor-nan). On holidays, they prepare a special treat - boorsok - sweet pieces of yeast dough fried in oil.`,
				image: foodCollectionBig,
			},
			{
				title: "Kumiz",
				description:
					"Kumis is one of the most ancient drinks of the Kirghiz. It is made from mare's milk. Kumis has many healing properties. It improves the functioning of the digestive system and improves the blood. Regulates the metabolic process in the body. Kumis improves mood and improves health. Freshly milked mare's milk is poured into special containers (saba), and with the help of a special stick (bishkek) it is shaken into koumiss until cooked. Mare's koumiss cooked in early spring is called &quot uuz kymyz&quot , fermented kymyz from a two-year-old mare is called &quot bal kymyz&quot , cooked in late autumn - &quot sook kymyz&quot , fermented for 5-6 hours - called saamal kymyz",
				image: kumiz,
			},
			{
				title: "Kurut",
				description:
					"Kurut is a dish without which one cannot imagine the traditional cuisine of many Central Asian countries, such as Kazakhstan, Uzbekistan, Mongolia. It is found even in Georgia and Armenia. It is not surprising that this cheese is called differently in each region: kurut, khurud, korot or hort. The term can be translated from Turkic as “dried”, because the cheese is obtained as a result of drying in the sun.\n\n	Depending on the recipe and the ingredients added, it can be more spicy, spicy or sweet, somewhat reminiscent of dry cottage cheese. Most often it has a white tint, but there are also dark varieties.",
				image: kurut,
			},
			{
				title: "Maksym",
				description:
					"Maksym is a non-alcoholic, environmentally friendly drink. Made from selected varieties of barley, wheat, corn, with the addition of roasted peanuts, on artesian water. Contains vitamins necessary for the human body: B1, B2, C, PP. Perfectly satisfies thirst and hunger, has tonic and healing properties.\n\n In Kyrgyzstan, there are two more drinks that adults drink. Bozo is made from millet, corn or millet and yeast. It has a light degree (4-6%) and a sweetish taste. Dzarma (zharma) - a drink made from barley - also has a small degree.",
				image: maksym,
			},
		],
	},
	clothing: {
		title: "National Instrument",
		description:
			"Kyrgyz music is notable for being in tune with nature and life in the mountains. The texts of many songs tell about the everyday life of nomads, and even in compositions where there are no words, the corresponding mood is subtly conveyed. There are many musical instruments in Kyrgyzstan.",
		image: headerBg,

		clothes: [
			{
				title: " Woman's Suit",
				description:
					'According to tradition, the women\'s national costume of the Kyrgyz women includes three components: a hip swing skirt - beldemchi, a cap and a turban. "Beldemchi" - swing skirt sewn to a wide belt. Depending on the purpose, it was made of homespun cloth or expensive materials. If it was festive clothing, it was decorated with embroidery, and turned around with fur along the hem. "Beldemchi"',
				image: womanSuit,
			},
			{
				title: "National women's hat",
				description:
					'A cap is an indispensable attribute of a married woman; she sat tightly on her head and covered her hair. The headdress was decorated with embroidery made with various types of seams. Ornament patterns were made with multi-colored threads, the main colors of the pattern were red, yellow, green and white. The finished product was turned off with a red braid.On top of the cap, they always wore "elechek" - a turban made of white matter. For the first time, a woman was put on a turban, sent to her husband\'s house, thereby emphasizing her new status',
				image: hat,
			},
			{
				title: "Men's headdress",
				description:
					'The men\'s set of the national costume of Kyrgyzstan, in turn, also included mandatory elements. "Kementai" - a swinging felt robe, which was girded with a leather belt or sash, this clothing is an indispensable attribute of cattle breeders, which perfectly protected from rain and wind. White - especially valuable, felt robes, could only be afforded by very wealthy peasants. "Jargakshym" ...',
				image: kalpak,
			},
			{
				title: "Outerwear for Men",
				description:
					"Men wore spacious trousers made of leather or suede, embroidered with colored threads (chalbar, kandagai), loose-fitting shirts (koynek), and a felt robe (kementai). Noble and rich people wore jewelry. The male attribute of wealth in clothing is a wide leather belt (kemer), decorated with various silver inserts.",
				image: outwearForMen,
			},
		],
	},
	music: {
		title: "National Instrument",
		description:
			"Kyrgyz music is notable for being in tune with nature and life in the mountains. The texts of many songs tell about the everyday life of nomads, and even in compositions where there are no words, the corresponding mood is subtly conveyed. There are many musical instruments in Kyrgyzstan.",
		image: headerBg,

		instruments: [
			{
				title: "Komuz",
				description:
					"The most iconic is the komuz, a three-stringed instrument resembling a small guitar. The komuz performs both lyrical melodies and percussion melodies, reminiscent of the sound of a horse's hooves. The masters of playing the komuz are called komuzchi. They demonstrate their skills by performing complex passages, holding the instrument behind their backs, on their heads and even upside down. Songs for komuz are very different in their content: some tell certain stories, others describe the beauty of the landscape, others are just comic. About 1000 komuzchi performed at the World Nomad Games, playing  'Mash Botoi'  - one of the most famous works written for komuz.",
				image: komuz,
			},
			{
				title: "Temir-komuz",
				description:
					"Temir-komuz is a plucked reed musical instrument that is very popular in Kyrgyzstan. Chopo-choor (clay  ' chor ' ) is an ancient wind instrument. The performer holds the instrument near his mouth, fingering the holes along the length of the chopo-choor. The timbre of the instrument is deep and clear in low sounds, somewhat nasal. Kyrgyz music cannot be imagined without the use of percussion instruments, such as drums.",
				image: temirKomuz,
			},
			{
				title: "Kyl-kyyak",
				description:
					"Kyl-kyyak (kyyak) is a stringed instrument with a bow. It is made from the same types of wood as komuz. The instrument has two strings and a bow - jaa. The kyyak has the shape of a ladle, with an open upper half, and the lower half is covered with camel skin. It is believed that kyl-kyyak and other stringed Central Asian instruments were the first stringed instruments in the world.",
				image: kylKyak,
			},
			{
				title: "Dobulbash",
				description:
					"Dobulbash is a folk percussion instrument. The main carrier of rhythm is one of the most powerful means of influencing the artistic thinking of a person.Dobulbash is a one-sided drum covered with leather on top. The height of the body carved from juniper does not exceed 60 cm, the diameter of the membrane covered with camel skin is 25-30 cm. The instrument sounds strong, loud and long, can be used to give military or magical signals.",
				image: dombuldak,
			},
		],
	},
	games: {
		title: "Games",
		description:
			"Since ancient times, the Kyrgyz have given a great place to folk games and entertainment, not a single folk festival took place without them. Traditional equestrian games remain the most beloved and revered.",
		image: headerBg,

		gamesItem: [
			{
				title: "Ulak-tartysh",
				description:
					"Ulak-tartysh, which means &quot; grey wolf &quot;. They say that the game originated in those distant times, when herds of animals grazed in the deserted steppes of Kyrgyzstan, so wolves often attacked livestock, which was a great disaster for people. Since there were no firearms then, courageous horsemen pursued the victim, driving her half to death. The game involves two teams, each of which has 6-10 people. The goal of each team is to throw the carcass of the animal into the opponent's goal. It is very difficult to do this, since throwing a 20-kilogram carcass requires a lot of effort.",
				image: ulackTartysh,
			},
			{
				title: "Kyz Kuumai",
				description:
					'Kyz-kuumai is a riding competition between a boy and a girl. The goal of the game is that the boy must try to catch up with the girl. The rider"s horse is faster, and it starts off 5-10 seconds earlier. If the young man can catch up with the girl, then he will receive a kiss as a reward, otherwise, the girl will hit him with a whip.',
				image: kyzKuumai,
			},
			{
				title: "Kuresh",
				description:
					"Kuresh is one of the most popular national sports in Kyrgyzstan. After the judge gives a sign, the young wrestlers enter the fight. In the game, it is allowed to use different tricks, but you can’t take your hands off the opponent’s belt. The winner is the one who puts his opponent on the shoulder blades.",
				image: kuresh,
			},
			{
				title: "Ordo",
				description:
					'Ordo is one of the most popular Kyrgyz games that have come down to us since ancient times. "Ordo" means "khan\'s headquarters, khan\'s palace". The game reproduces the battle to capture the stake.10 people participate in the competition: seven players, one substitute player, coach and team leader Alchiki should be without cut off and broken off parts, new, without scuffs. Judges must have a measuring stick 40 centimeters long, painted red on one side and yellow on the other. A player loses a hit if, being in a circle, he points to an alchik with his hand. During the game, participants must treat each other with respect.',
				image: ordo,
			},
			{
				title: "Tyiyn enmei",
				description:
					"Tyiyn enmei - getting a coin from the ground at a gallop. This type of national games is a kind of horse riding.According to the rules of the game, at a distance of 100 meters in a straight line, coins are laid out in a hole 1.5–2 cm deep. In tyiyn-enmei, a galloping rider must get a coin without any help from outside. \n\n The depth of the arrangement and its dimensions usually depend on the value of the prize. The less valuable the prize that goes to the winner, the less the depth of its location, and vice versa, the more valuable the prize (coin), the deeper its location in the dimple and the less likely it is to get it on the run.",
				image: tiyinEnmey,
			},
		],
	},
	crafts: {
		title: "National Instrument",
		description:
			"Kyrgyz music is notable for being in tune with nature and life in the mountains. The texts of many songs tell about the everyday life of nomads, and even in compositions where there are no words, the corresponding mood is subtly conveyed. There are many musical instruments in Kyrgyzstan.",
		image: headerBg,

		craftsItems: [
			{
				title: "Kyrgyz carpet: shyrdak",
				description:
					"The most popular type of felt carpet in Kyrgyzstan today is shyrdak. It is made using mosaic technique, which is one of the most difficult, while one of the most important qualities of shirdak is durability. The average service life of a shyrdak is about 100 years, sometimes even more.",
				image: shyrdak,
			},
			{
				title: "Tush Kiiz",
				description:
					"Tush kiyiz is not a carpet, but a wall mat or wall panels. Originally used in yurts. \n\n The outlines of the pattern are usually drawn first on a piece of fabric being used - but more experienced craftsmen prefer to work without patterning first, which allows more freedom for improvisation. Sometimes the design of the embroidery is a simple chain stitch along the outline - but in many old tush kyizakh, the design elements are fully embroidered one after another, in thin chain stitch. Also, the colors in ancient qiyiz ink tend to be softer than the brighter colors used in modern examples - and the reason for this is the use of natural dyes.",
				image: tushKiiz,
			},
			{
				title: "Tush Kiiz",
				description:
					'Kurak is the name given to various types of items made from scraps sewn together. The name comes from the word "kura", which means "sewn together - assembled from separate pieces" and refers to both finished products and the method of their production. This type of handicraft can be found throughout Central Asia. It was also practiced throughout Kyrgyzstan, but especially in the south.',
				image: tushKiizSecond,
			},
			{
				title: "Kyrgyz yurts",
				description:
					"Yurts are one of the most important parts of Kyrgyz culture and are more than just houses. They symbolize family, earth and universe and cover all stages of life from birth to death. Much of Kyrgyz culture is associated with yurts, from important rituals and ceremonies to handicrafts and traditional craftsmanship.",
				image: yurts,
			},
		],
	},
	economy: {
		title: "Currency",
		description:
			"The nomadic way of life is reflected in the Kyrgyz clothes, the features of various regions are visible. Natural materials prevail: wool, felt, leather, coarse fabrics. The design uses ornaments and themes inspired by nature and tribal traditions.	",
		image: headerBg,
		currency: [
			{
				title: "National currency of Kyrgyzstan",
				description:
					"The national currency of Kyrgyzstan is the som, its international designation is KGS. The resolution on the introduction of the national currency was adopted by the Parliament of Kyrgyzstan on May 10, 1993. Kyrgyzstan became the second CIS country after Russia to adopt its own national currency after the collapse of the Soviet Union. \n\n The national currency of Kyrgyzstan is represented by ten denominations of banknotes: 1, 5, 10, 20, 50, 100, 200, 500, 1000 and 5000 soms and coins of 10 and 50 tyiyns, 1, 3 and 5 soms. One som is equal to 100 tyiyns, however, in reality, tyiyns are used quite rarely. Sometimes 50 tyiyn come across, but most often the smallest unit is 1 som. \n\n The 20-som banknote depicts the famous akyn Togolok Moldo, as well as the 15th century caravanserai Tash Rabat, which is located in Naryn. The banknote of 50 soms is dedicated to the leader and ruler of Kurmanjan-datka; in addition, a minaret and a mausoleum in Uzgen are depicted here. On the 100-som bill you can see another famous akyn - Toktogul Satylganov, as well as the Toktogul hydroelectric power station named after him. One of the greatest poets of the 20th century Alykul Osmonov and a panorama of Lake Issyk-Kul are on the banknote of 200 soms. \n\n The 500-som banknote depicts the manaschi Sayakbay Karalayev and the Manas mausoleum in Talas. Yusuf Balasagun, depicted on the banknote of 1000 soms, was a famous poet during the reign of the Karakhanids, on the banknote he is accompanied by Sulaiman-Too, a sacred mountain included in the UNESCO World Heritage List. On the largest denomination of 5,000 soms there is a portrait of actor Suimenkul Chokmorov and Ala-Too Square in Bishkek. \n\n  The economy of Kyrgyzstan is mostly cash driven, but ATMs can be found in major cities. Banks and exchange offices can change any common currency, but it is desirable that the banknotes are new and legible. Banks in Kyrgyzstan are open from 9.00-9.30 to 17.00-17.30 from Monday to Friday, the day off is Saturday and Sunday. Exchange offices are most often open around the clock. \n\n Moscow City Council is the busiest currency exchange area in Bishkek, where travelers can count on a good exchange rate at any hour. Outside of Bishkek, ATMs and exchange offices are less common. Going to more remote regions of Kyrgyzstan, it is better to make sure that you have enough money with you",
				image: Money,
			},
		],
	},
}

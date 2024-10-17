import { StaticImageData } from "next/image";
import dombuldak from "./cultureImages/dombuldak.png";
import foodCollectionBig from "./cultureImages/foodCollectionBig.png";
import hat from "./cultureImages/hat.png";
import kalpak from "./cultureImages/kalpak.png";
import komuz from "./cultureImages/komuz.png";
import kumiz from "./cultureImages/kumiz.png";
import kuresh from "./cultureImages/kuresh.png";
import kurut from "./cultureImages/kurut.png";
import kylKyak from "./cultureImages/kylKyak.png";
import kyzKuumai from "./cultureImages/kyzKuumai.png";
import mainCultureNavBg from "./cultureImages/mainCultureNavBg.png";
import maksym from "./cultureImages/maksym.png";
import Money from "./cultureImages/Money.png";
import moneyBg from "./cultureImages/moneyBg.png";
import outwearForMen from "./cultureImages/outwearForMen.png";
import shyrdak from "./cultureImages/shyrdak.png";
import temirKomuz from "./cultureImages/temirKomuz.png";
import tiyinEnmey from "./cultureImages/tiyinIymey.png";
import tushKiiz from "./cultureImages/tushKiiz.png";
import tushKiizSecond from "./cultureImages/tushKiizSecond.png";
import ulackTartysh from "./cultureImages/ulackTartysh.png";
import womanSuit from "./cultureImages/womanSuit.png";
import yurts from "./cultureImages/yurts.png";
import headerBg from "./cultureImages/mainHeaderBg.png";
import ordo from "./cultureImages/ordo.png";
interface StaticTitle {
  title: string;
  description: string;
  image: StaticImageData;
}
interface FoodItem {
  title: string;
  description: string;
  imageTop: string;
  image: string;
  imageBottom: string;
  imageLeft: string;
  imageRight: string;
}
interface CultureItem {
  title: string;
  description: string;
  image: string;
}
interface CultureData {
  kitchen: {
    title: string;
    description: string;
    image: StaticImageData;
    foods: CultureItem[];
  };
  clothing: {
    title: string;
    description: string;
    image: StaticImageData;
    clothes: CultureItem[];
  };
  instrument: {
    title: string;
    description: string;
    image: StaticImageData;
    instruments: CultureItem[];
  };
  games: {
    title: string;
    description: string;
    image: StaticImageData;
    gamesItem: CultureItem[];
  };
  crafts: {
    title: string;
    description: string;
    image: StaticImageData;
    craftsItems: CultureItem[];
  };
  currency: {
    title: string;
    description: string;
    image: StaticImageData;
    currency: StaticTitle[];
  };
}

export const kyrgyzCulture: CultureData = {
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
        image:
          "https://s3-alpha-sig.figma.com/img/bc21/e52f/c2462aa2fa5240ebaec110cc574c4714?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gxGwwHX8FGnysdPUGOzTrjgwNExhzw1~NEvhjE42O4UP-5jVJpM63PcHtN4Lj-6hHODxxwuA2czDe3jEnJSmdv73SwSKeSpuOvJ3fgvAGBahAStITd361gLAZyJtFLhGBpTmyNBTEXrwoTtFD6UTzE6rScx9Fue7gZQlgvMHrsI2nLPO-PH03pNyrnJuonUBR1obtyHDj3g-iShWOJE8bcFcYi1yY-sg6uh8JfqE5LzynKC6wPTqJfEGO2IbLewIoZPx6djIoMmy1fePyH2UleTXjwptarqP9oDLw6Y12VZDCJ9wxGr559EQUQBnrpmycN9Hcc6jLmiVUuAQvoCpaQ__",
      },
      {
        title: "Kyz Kuumai",
        description:
          'Kyz-kuumai is a riding competition between a boy and a girl. The goal of the game is that the boy must try to catch up with the girl. The rider"s horse is faster, and it starts off 5-10 seconds earlier. If the young man can catch up with the girl, then he will receive a kiss as a reward, otherwise, the girl will hit him with a whip.',
        image:
          "https://s3-alpha-sig.figma.com/img/8622/6e66/897299cb6f2cb77c45e3aa360ae73784?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nmAuSLmcHXUD3Q9i05FWjiZOFye42LbhrJsKQIgfzqPM8MJiy1K0hQ8iSsqUj7aXBP6VRhRd0xovwRzOIChiYY74N8ByILEqHMbmXCZqOhcROgEMF48uAFr6tOFPSqESLQ-Mv3~fIPGOmf9W6btngXZHuMGU4ibGHihGd4BjdFixJbMSCIBkToNpfr~QUdyF822UnOIZZy7xifeGzxL5msMuPnSWLr3zkmNzxYdvh0aFnw4JTHxQjHIYihCI-zFFdTz9pZtuulBgqrpL7OxRxGD4j11e7XjeB6q-DQafN0rRlGP05mc9GOxChC5DlJN5-n96UdwTxgU20Sshf-0LQg__",
      },
      {
        title: "Kuresh",
        description:
          "Kuresh is one of the most popular national sports in Kyrgyzstan. After the judge gives a sign, the young wrestlers enter the fight. In the game, it is allowed to use different tricks, but you can’t take your hands off the opponent’s belt. The winner is the one who puts his opponent on the shoulder blades.",
        image:
          "https://s3-alpha-sig.figma.com/img/3314/6dd8/67e149bced4365587e537a3ed95f171c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cwHCOvaIjx89FP0iHkHlQ8pZGVvRRiS~PbTUST3Utu0E973Fpi3jKdfZhZt2cA25BavmgfDRv0hwqNHddkeMg7el0ZXWJWIK7DmB3ZCZtHrnfqX37EOdgELXgjV7nYizDz4E7B9FVBfy0FXUdy12t-phI-8s~FI2Jo8m3FUHUzhfAyJrdLwvRyYO6GYoA~PBn0FA8Q7YF0JR9Z9xMmR9dTwksyUUP3cYA64VTtgVnVePxi7QrV6zCPl1ug0~PmPi4m5hxTT6oW6myKA2nkXhekkDaPOxghOch7Jd1POZt48btidBXW8dJPe9gJQ-t~6mq2H0O5MFwmOiMW1kvleXMg__",
      },
      {
        title: "Ordo",
        description:
          'Ordo is one of the most popular Kyrgyz games that have come down to us since ancient times. "Ordo" means "khan\'s headquarters, khan\'s palace". The game reproduces the battle to capture the stake.10 people participate in the competition: seven players, one substitute player, coach and team leader Alchiki should be without cut off and broken off parts, new, without scuffs. Judges must have a measuring stick 40 centimeters long, painted red on one side and yellow on the other. A player loses a hit if, being in a circle, he points to an alchik with his hand. During the game, participants must treat each other with respect.',
        image:
          "https://s3-alpha-sig.figma.com/img/1d8b/d74b/7c04809c2a239fca1f23e494b90447f5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=egIgzUyDZTUoiE4cX-2W3c-wdptkFM7831GAGuW0qbdh0FmVEvv8YkPk6LkUlWF~w~oX0R8YOquiARtIPTxm2aAPpLt3tXEcOFlCj7RE~tP6guj2UcKVDIqrEOUEH0c6ltMImueWNu0QMn05Q4iWQWiaQPaU8i24C0-IxqATiZocEsBUrZMETYWmAjIOcJs0bOXSSx6pSFw3oHJ~RAJHwQ7zI8b-9fHFEVTVsV22pmifLYKjyjzMgkFTayUd1RefBQTXf9F68Ru4Mpr7B~faqVWVSnd~sSb1F8zZpnzJRdaXyw~E~blHdoAmz9lbviLOnDc1VYozehXbtpQ22nYhwQ__",
      },
      {
        title: "Tyiyn enmei",
        description:
          "Tyiyn enmei - getting a coin from the ground at a gallop. This type of national games is a kind of horse riding.According to the rules of the game, at a distance of 100 meters in a straight line, coins are laid out in a hole 1.5–2 cm deep. In tyiyn-enmei, a galloping rider must get a coin without any help from outside. \n\n The depth of the arrangement and its dimensions usually depend on the value of the prize. The less valuable the prize that goes to the winner, the less the depth of its location, and vice versa, the more valuable the prize (coin), the deeper its location in the dimple and the less likely it is to get it on the run.",
        image:
          "https://s3-alpha-sig.figma.com/img/5a79/5c6d/d1ddc894a22b8b2b32b90b25b71aae24?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LRa5Rnif2KxzyAMe5b1mB0FmILTBHI19RwhLUz2cCo2XgsF7rPukLtflORkpN7DNhJNA0vx3vi2waxukIZDAdtGV4ZLXH7g2BqueihOfSK9VChItvWuLvhTIgDBFc9S9rZJxEhQZ-L-6jKaCFHsdd4g~EwH55fWK-eTEbOJ~vQanRqqOkNhbuP3qAmZGVtNlSY7zOt9j7rW7CEEWZlbbCPNEIDE4geTSv0Ef7e8PtOdF0ctFUA2d9leT1Raz8JEqyrE-c5PdVJJza-0YpbMChGbh8SWo-k9gYEL8fzAEyruYci0p6TMIq2rjUZrM7JmDLYvpTRTNb4ZA~M1E9tpnsg__",
      },
    ],
  },
  clothing: {
    title: "National Clothes",
    description:
      "Kyrgyz music is notable for being in tune with nature and life in the mountains. The texts of many songs tell about the everyday life of nomads, and even in compositions where there are no words, the corresponding mood is subtly conveyed. There are many musical instruments in Kyrgyzstan.",
    image: headerBg,

    clothes: [
      {
        title: " Woman's Suit",
        description:
          'According to tradition, the women\'s national costume of the Kyrgyz women includes three components: a hip swing skirt - beldemchi, a cap and a turban. "Beldemchi" - swing skirt sewn to a wide belt. Depending on the purpose, it was made of homespun cloth or expensive materials. If it was festive clothing, it was decorated with embroidery, and turned around with fur along the hem. "Beldemchi"',
        image:
          "https://s3-alpha-sig.figma.com/img/ba35/8cc9/a2d2d5755d244c8f7900dc17962b148f?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DK0BuQyPFjnlu5FUQaFI1BA3IKB1VG-uJc1OiahGNQz98IaI6lZn8J60CUaZJPGqx9m6gQMVFq24Tj8QV6Rrxh7uzvtzaz7G9k5vu9lLoGSET5ByXUymoPakb1VJAf5CYy-ci9JvoVAduUiP80Ogt-3y97P~IBG2-b5CrdudYe0Bc1YeMPbyg75lbO1vrNo3FJC1wX8B~a58YZm4yVRRGWVD07HdsZpfmI7rgxVdSNZjM38At7qv2Dd58Yt2jjkbcqrE5o629wpS4Bjtg7aXe5kaiOxpayJmOb-7OzyaQJJWwqxMPU~r2sj7FwnXQP56boSZWdBRJuI2ZmZ~NzuwZA__",
      },
      {
        title: "National women's hat",
        description:
          'A cap is an indispensable attribute of a married woman; she sat tightly on her head and covered her hair. The headdress was decorated with embroidery made with various types of seams. Ornament patterns were made with multi-colored threads, the main colors of the pattern were red, yellow, green and white. The finished product was turned off with a red braid.On top of the cap, they always wore "elechek" - a turban made of white matter. For the first time, a woman was put on a turban, sent to her husband\'s house, thereby emphasizing her new status',
        image:
          "https://s3-alpha-sig.figma.com/img/108c/6451/997963bf1fdfbdf61c991898a575a8d1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZOukugnlnFYqDulyiteayf-eRF8U7iD0--jip9AFZ8WEt5W0oki9e2rGi8d62yhhWRK2zBJyCdUnfIvDSnPyAACcBNr598y3Ql6-sTvEFOqeCRdHbpwBiTk~dYskHgKihEPOWXg8IkXjXfRE5utg~Rz-QLXHMfYxpTe7ZL~9~jzgysFXQh4vgKIaF79bztBvTB-ElEsp9kCKMYx4YjnTssb0mhGhAeiwEw0PH53WuaotAHaODsHWGA~7ziWfleqBJXPuourOhdz-BFZZ5n7hbOiqRDGrlICw5XFfLqwONwyVAKkCVI39obDJlpsFHbTyruy-YtFyVgZlt3k-0XJTuA__",
      },
      {
        title: "Men's headdress",
        description:
          'The men\'s set of the national costume of Kyrgyzstan, in turn, also included mandatory elements. "Kementai" - a swinging felt robe, which was girded with a leather belt or sash, this clothing is an indispensable attribute of cattle breeders, which perfectly protected from rain and wind. White - especially valuable, felt robes, could only be afforded by very wealthy peasants. "Jargakshym" ...',
        image:
          "https://s3-alpha-sig.figma.com/img/277a/5bd6/4cbcfeb3d4dde6ac583ceedb78074877?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wb2RBPSM9Gp9Achb2EUt8FGrvhyp-9Tsfire8Hqa0sPTZejvzqBjM3ufjHSsHHHBxb5QIvE7dFoMF9MS07WD8eTokZOSPsKPYWAS5zsy5FUDsfXp23MLamRms4Gj1gmdULbPGv08Ircmau6P0KiHpVFj~G-m2hPdOKIN-dqwJJ6X8M9X7-UDzfbGELUutcLqzGw4L9kIl-f1sK1zIl6wgOORQyMUJdvBNWmfkdoSiyLV2jlNu87UhMSgZz0nWaNawP4kGoMrZl0ghAPQ9W5wqVjDevSiTcC4fL3fIKZo7L8k9HFephN1Luhp-QBxBEi1az2Bt7jP7VREi2GMWuYvQg__",
      },
      {
        title: "Outerwear for Men",
        description:
          "Men wore spacious trousers made of leather or suede, embroidered with colored threads (chalbar, kandagai), loose-fitting shirts (koynek), and a felt robe (kementai). Noble and rich people wore jewelry. The male attribute of wealth in clothing is a wide leather belt (kemer), decorated with various silver inserts.",
        image:
          "https://s3-alpha-sig.figma.com/img/6953/5103/e41e949bcd162e2eaa6e9ed496cdbe9e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eaduxeSObl4-FhVVZ10DDGwHSOL5mI4M1Gh2m~pSPPe3CgyupX28oGQaIkTyJ5Z6ikXml3SKqczKHXGR-HigRmhO2luekkC5pIaMPvpIfYsh16YpYFUrv2j3iQqeevYC4lDGD36HXlQeNprlEaWgfK13cLYWBzgm3~O~SiAn0skuKLuVVxqnS2XJgqY41QXLWMwL6mFOpPwBo0qJI9gQoOLMRyP8Tmr7NqpEeV-DxVl6YX1N0VXDAYPJozYYzV-WqyRnxJz1o-eCmlkHZnGURCfIQ7TgoKm0nBWPdCyp5WVI3eyyiAZ0~K-X14C39JMJEe0pl2g8cSjQ-JtRivS4WQ__",
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
        image:
          "https://s3-alpha-sig.figma.com/img/54e7/fb61/e8d847a45e5be525ad936b75ff14498a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h2iWSYQStYX6i9FUAYx0~gbjR59cJntaCNVdIg9uXcVtykOyDXSB0DsTg~-ZOtybpSSTt8z8yclGYk0y7QGK96xuDoQQNAW8GdQcA5uxKsx5xXHvO0H6JvVTmwaWbwlc83Odhml~jYHSzRdHckM-ctIuFP5RGfDDo40zcLKdgDC27gUkTg9ojtS9LYLUhiEylnVv-GIEq-CrzQ5lyvOKQZlQ64toq~41uWtKGSdv8cZSADZV9yCQelEEgAaci1FU~RVQ81EYAd-IxHHPOgvO6wNLaz5O2JRZzZZqfjt0j5z6IDhgxWdAAiHCk2BzVpZaRLntIzFmkJuf6zOaj38LFg__",
      },
      {
        title: "Tush Kiiz",
        description:
          "Tush kiyiz is not a carpet, but a wall mat or wall panels. Originally used in yurts. \n\n The outlines of the pattern are usually drawn first on a piece of fabric being used - but more experienced craftsmen prefer to work without patterning first, which allows more freedom for improvisation. Sometimes the design of the embroidery is a simple chain stitch along the outline - but in many old tush kyizakh, the design elements are fully embroidered one after another, in thin chain stitch. Also, the colors in ancient qiyiz ink tend to be softer than the brighter colors used in modern examples - and the reason for this is the use of natural dyes.",
        image:
          "https://s3-alpha-sig.figma.com/img/1c34/ec96/20f062cadbb92a92867f5aa9195657f8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XPFHAbBxHq-nY~Bhomo-5jmbnIyKUNX6CIX9CgJVNlKEiKclFCD-dtGa5Y5SesaxqfvuH5r5~XEMuZqxiCXMr1TwCRtWAmegGzfdby5sT~R6ZK8x8dh88s5YUlVSLB06JdLEw-5ADPBwbPVG4fnKfeYgK2stm0e59B~Ffk7bYP3qpKYHhF7WvMSiqulGFaRdNXGuYwY~L36hrWGj9DAHibboWpgLT2MOefIcJbXWA7jT~v9xWdjY2ROvA8iLeBWQ9YQmA8rksVC2pARkZgu1wL4jpupA5MH0KirKueKpiE6XSJ21mUjwSr4pj7WLheXgnVyd2EcSe5sqUrihuh6sqw__",
      },
      {
        title: "Tush Kiiz",
        description:
          'Kurak is the name given to various types of items made from scraps sewn together. The name comes from the word "kura", which means "sewn together - assembled from separate pieces" and refers to both finished products and the method of their production. This type of handicraft can be found throughout Central Asia. It was also practiced throughout Kyrgyzstan, but especially in the south.',
        image:
          "https://s3-alpha-sig.figma.com/img/c495/f80b/f2fd0f210aabf06d656c5722589c637a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S7JIvEGddvMxxllGCq-MjGh5dYnA21A7eTQrXjV-GECTuLibKuBbp8E6-7ysF-KYPrmvbAiju-FeVmke7Yd3~OP0gBifWy1DG7L3fyCocvjxdqLy1SsgJyNMHjZ8DkFpMh41nFvNWCm2QE37OxIdOZiQgS8K~eJ1mB5SnPyGF9K0zkgrRKCNVZX0Z~ezVCtc763z~l7F6PlM1YygxgvZXa6IN4QKuk1Sd6CH~9GGvUdCsPyL-txEjZsHaWd8HwPUxc85Zj6pjxDGYOSr8u~umFSJQlEE-SAES34Mx5xRiTcSw9Uz7z4r0a-ac9K8uxMoAn3aM91ixl4UZiERTL~JPg__",
      },
      {
        title: "Kyrgyz yurts",
        description:
          "Yurts are one of the most important parts of Kyrgyz culture and are more than just houses. They symbolize family, earth and universe and cover all stages of life from birth to death. Much of Kyrgyz culture is associated with yurts, from important rituals and ceremonies to handicrafts and traditional craftsmanship.",
        image:
          "https://s3-alpha-sig.figma.com/img/a708/807c/5babb70c43797772a8e9e5b0badb3464?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aCWkFIWQjbi2SVQHXp9DBAxozxGYPpQep9p20pYebSH0YHw0xK-zkkVtiaOiT2cyqDivCTy12~l6plvAbnxA9dZH~LQKPb72~2mx~m~wXFibk1OxB2K7TcGDATxX07RjWuKylDbnVAZk5etyASlDeeQTy4RWC5uU3txLqqDdLpGULN8jZkXgEWfJldSKS2inHgmYjMHfRfU59~MVX678r3wcF25EPoGG3WETKgUSDWN6zj~oHWpIU7vgrzVwbe~gxJroySaySpCnm3X~FIUI0HUTX~Sj93CgOZbClnV4UJ2ZiJjN6mNH~wo9Qv8KR03GP~U~qCB5H4Z1JCUAitaKQA__",
      },
    ],
  },
  currency: {
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
  instrument: {
    title: "National Instrument",
    description:
      "Kyrgyz music is notable for being in tune with nature and life in the mountains. The texts of many songs tell about the everyday life of nomads, and even in compositions where there are no words, the corresponding mood is subtly conveyed. There are many musical instruments in Kyrgyzstan.",
    image: headerBg,

    instruments: [
      {
        title: "Komuz",
        description:
          "The most iconic is the komuz, a three-stringed instrument resembling a small guitar. The komuz performs both lyrical melodies and percussion melodies, reminiscent of the sound of a horse's hooves. The masters of playing the komuz are called komuzchi. They demonstrate their skills by performing complex passages, holding the instrument behind their backs, on their heads and even upside down. Songs for komuz are very different in their content: some tell certain stories, others describe the beauty of the landscape, others are just comic. About 1000 komuzchi performed at the World Nomad Games, playing  'Mash Botoi'  - one of the most famous works written for komuz.",
        image:
          "https://s3-alpha-sig.figma.com/img/8e04/7ab5/e647a238661bb12059fd5a6135424df9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e3TSgGkZvASWcflZBuu8W1QiqYrSM5iAvu0Nm-Ky7zzjsFXNmYAT45cWtDeyfPcLruA6MZWVCEo-NZvpTV3zx08WJeeyPWbfJqxHEtBXY0v3n2y5og~8peA~RcOUdj7IUdOJsxcxdUH3wcWBe2XsCFE2m-dyWcoXLeLxyrjypCCEFbUbXNIMlG5FGp8ZPgbG3~wCW03wkz1JkN6FqpBJVtlmSkvBCEZsZgHV0tCT0mTJCd08lGlwfMfbxnA08a315JvNlKY6BVtD2Im3EAskxqN9QwjMdu5IKxT5e3CYKdLmvVpIRqUoT3RCZ7014fwB4Swj8lTu1XNvn4am5CLjhQ__",
      },
      {
        title: "Temir-komuz",
        description:
          "Temir-komuz is a plucked reed musical instrument that is very popular in Kyrgyzstan. Chopo-choor (clay  ' chor ' ) is an ancient wind instrument. The performer holds the instrument near his mouth, fingering the holes along the length of the chopo-choor. The timbre of the instrument is deep and clear in low sounds, somewhat nasal. Kyrgyz music cannot be imagined without the use of percussion instruments, such as drums.",
        image:
          "https://s3-alpha-sig.figma.com/img/8e58/5731/8fcbeea49ae27b5df05a55ade518b33d?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FYMVtYeE2zf8reaB~jSS9NWmmkmbmaH3zurbN6EtKppHo84aHXW~9cCpDFxtqlKPvFAdnEn5fDGm1YnhFeZ-HU38VEL6der0nghB3OW0uQgRQUpEsxqzMnZGJ03RIszWc6Pp81PtvbrYBARUBRmGmjQcVFQ9pcEDJMQrLPKJLJc64M47E7gYRusRffKETsCTWuFQd02DdQUc05URs~Pek8XSnuAEmI~riEG1P7gthjMx7Wws9Z0QQoTPOfEe6LhFStMcrKEh--ce33ugwIDDr~-WrsFavXawbwULTl6TMecaWEtVFOg68tQAQMwz7ALvMUMcLA4u1y5WcFBvqxrL1Q__",
      },
      {
        title: "Kyl-kyyak",
        description:
          "Kyl-kyyak (kyyak) is a stringed instrument with a bow. It is made from the same types of wood as komuz. The instrument has two strings and a bow - jaa. The kyyak has the shape of a ladle, with an open upper half, and the lower half is covered with camel skin. It is believed that kyl-kyyak and other stringed Central Asian instruments were the first stringed instruments in the world.",
        image:
          "https://s3-alpha-sig.figma.com/img/095c/f7aa/14cae57a986260160200a347a8300c11?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AFaB3jM7osdMM2YFzzuVfYO4xxUINULDlWRg3FOwK64tRxHx8S6QVltL4-XYqOTU~IoAsxiZ-hlfoPkum-eGSvhDw0Isc4B3O35omM2xe9oaLLfPkICVPPuIJihmnb62UtILJ6DjBzw0gjtnk1ocArQCKaX1ocGzXiFLOLg6o~cN7ZmQC60lmPrZmOaULI69y~XTkMEJOx4UhzKTmJ2g4QGZ2oCYBxDWnhQt1xvwX9ZmBTQ6ZLXGarLI41N7EIwm2k4udNntIp8qeteptMKIiOExtXxVQ9j4dl5QwXQoeGuqO5-T7D-5C-kwIWocZSzC0kWfkhR6fY6aUJcTKjswmQ__",
      },
      {
        title: "Dobulbash",
        description:
          "Dobulbash is a folk percussion instrument. The main carrier of rhythm is one of the most powerful means of influencing the artistic thinking of a person.Dobulbash is a one-sided drum covered with leather on top. The height of the body carved from juniper does not exceed 60 cm, the diameter of the membrane covered with camel skin is 25-30 cm. The instrument sounds strong, loud and long, can be used to give military or magical signals.",
        image:
          "https://s3-alpha-sig.figma.com/img/2938/d143/627911e645bb51beff43dbc3ab5bb18e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iGjr3QgA79EqSHj8~p6qnkG7WzoLAfbFmyGAGjk2XVN5O8guGvoVU0juMq2-6G153NU6T2KoE2G8cnXKSr01LQT6TLB5uTZVEF0HjZGYGC4vXdmSpaE7qdFC5C-MJiFGW7Ni96A58EiItLgkPE-wmR8dTAmWlZ11xKir3l-jKjvr9XnS3KbBzeLI6KtG9LxievqInTctYYOjR0W0iz5IjkPTxZgKRr7fXJ-9gPmzmkRabpw3GYwWlLiJtLLueFBXG2f-3KjXm88wmLlcF8zbzyZi1huTVxz6WlmwtZ0-rFJEc3YlazoChVeEwJQ5BqA9RYhZTh9DqbKF3wDV5QKt~g__",
      },
    ],
  },
  kitchen: {
    title: "Kitchen",
    description:
      "Kyrgyzstan is a country where at the crossroads of the Great Silk Road, the traditional nomadic culture and the sedentary culture merged. A distinctive feature of Kyrgyz dishes is that they are all prepared exclusively from fresh products and are rarely stocked up for future use, and the recipes for their preparation, although they seem quite simple, in fact contain many subtleties that are rather difficult to master.",
    image: headerBg,

    foods: [
      {
        title: "Food Collection",
        description: `The national cuisine in Kyrgyzstan is rich and varied. It has been formed throughout the history of the Kyrgyz people and has absorbed the most delicious dishes and drinks left over from the time of nomadic life, as well as dishes of neighboring peoples in the region. Most traditional dishes cannot do without meat. Mutton, beef, yak meat and horse meat, especially loved and appreciated by the Kyrgyz, are used for food.\n\n
The most famous Kyrgyz dish is beshbarmak - boiled, finely chopped lamb, filled with broth, with the addition of onions and noodles. The name of this dish is translated from Kyrgyz as "five fingers", and is traditionally eaten with the hands. For the Kyrgyz people, beshbarmak is not just a dish - it is a whole ceremony with its own traditions and customs.\n\n
The ram is cut and boiled in a cauldron until the broth is ready for consumption, and the meat on the bones is for distribution among the participants in the meal. First, guests are given zhash shorpo - a strong broth seasoned with onions, then kuiruk-boor - liver and fat tail fat, cut into small slices and seasoned with a special sauce, then kabyrga - ribs with a thick layer of meat and lard. Finally, beshbarmak itself is served on a large dish - finely chopped meat mixed with noodles and seasoned with onion sauce.\n\n
No meal is complete without bread. Usually, bread is in the form of flatbreads, which are cooked in cauldrons (geomkyormyo tokoch), in a frying pan (geomechtön) or in special ovens (tandoor-nan). On holidays, they prepare a special treat - boorsok - sweet pieces of yeast dough fried in oil.`,
        image:
          "https://s3-alpha-sig.figma.com/img/8049/34c0/e7a8524d3b8afa67d81dedbe56691450?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qQvG2qthSZIY0B5BiCQuUIqchGyzWO~wtxhKe-FT2vJd0CunIRnJwe4BrFF1Xs7yQX-b~lhn5tni1r8IjRYbU4WjCRgaheHQGouKhSp95ZCuWa-LtJCL6X9U-~fFvL-jVlSYYU9ysNt~-AYMzB6ukr9fOvYOUAoQ2~w4RUZai1dsHVFgG2zoEGKx3DaThijytJYcZd1fHS5693EXcfXVJPPESSAC~W71KMx2dztYjuxrRW1jWSsShHB9LqeNtpsi22dzgY1V6tqU2~rjwslEAx4rfuabprK7fAc9dWmrvxrXpkewkqg42yYkp9BICt4Wf9WMKHGOb~nttfsTSHxh7g__",
      },
      {
        title: "Kumiz",
        description:
          "Kumis is one of the most ancient drinks of the Kirghiz. It is made from mare's milk. Kumis has many healing properties. It improves the functioning of the digestive system and improves the blood. Regulates the metabolic process in the body. Kumis improves mood and improves health. Freshly milked mare's milk is poured into special containers (saba), and with the help of a special stick (bishkek) it is shaken into koumiss until cooked. Mare's koumiss cooked in early spring is called &quot uuz kymyz&quot , fermented kymyz from a two-year-old mare is called &quot bal kymyz&quot , cooked in late autumn - &quot sook kymyz&quot , fermented for 5-6 hours - called saamal kymyz",
        image:
          "https://s3-alpha-sig.figma.com/img/0596/5508/267a0327cfa846ef87b7526b80ab23e8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmDVo8vEZ2TDxipnRHb7NkbjzDm-PNW3FW71STqgXAiwru2XKeAtvPgqKDsNLe5PdZdysyQSSZNZJ9Rtjoo61mo1uLpXfJeIxSqvCNrtMg46Uov~tcONxsYX0sO0Xc9jyGZzRwAuAPMjFASygPd-dOuVLqn87h0bwUpSfJgLZuxNcUGEncJAJCasvO-nPUtaIUW7bWQg8kZ1106vU9Na2a5ZGLwkmkQCtLeTJr5Bzv6vHHvbc8MEj~qn3Da2dMd3p80Voi3tZ~GC2qW-bTiczrkC0EQ-XrD1LfYHGjtk7pNrrdPxuaP1pnCtU~RYXq2PcMZi8YzwgkuKma0Zx41-AA__",
      },
      {
        title: "Kurut",
        description:
          "Kurut is a dish without which one cannot imagine the traditional cuisine of many Central Asian countries, such as Kazakhstan, Uzbekistan, Mongolia. It is found even in Georgia and Armenia. It is not surprising that this cheese is called differently in each region: kurut, khurud, korot or hort. The term can be translated from Turkic as “dried”, because the cheese is obtained as a result of drying in the sun.\n\n	Depending on the recipe and the ingredients added, it can be more spicy, spicy or sweet, somewhat reminiscent of dry cottage cheese. Most often it has a white tint, but there are also dark varieties.",
        image:
          "https://s3-alpha-sig.figma.com/img/cdf1/93c9/ef10765a48fcb27849c90249bf063e27?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qIOEDs4GOpKBgNMP55MwOOwCJl1kCn84e3-TFMqn0aqzgogo8Gw-kNxpXe7a70VTazJYGv1M8QQvwChvpUmB5RDcCZH4w33~AG6JI-c9-QYomFIPngndU66uCRmX3meQvzZhm7IvR0TeFrew2hNXgoFTTUh4T45eRAb0w-g6fE1RmWObk3QnhfKOy8FrrBcikSz2P3jDv6zfINNZSZRRLZU93teovT48NknXk5RWFNNVThO8Vuw5UyiK~gkE38KMNAZi54r~fa7mLJq5CXmUgV2Asvd6i8KzyUoAWgUZ72F6rAIJxqRv7LV-43nghqeUwXkunA0WcQ3WayVZdkCv1Q__",
      },
      {
        title: "Maksym",
        description:
          "Maksym is a non-alcoholic, environmentally friendly drink. Made from selected varieties of barley, wheat, corn, with the addition of roasted peanuts, on artesian water. Contains vitamins necessary for the human body: B1, B2, C, PP. Perfectly satisfies thirst and hunger, has tonic and healing properties.\n\n In Kyrgyzstan, there are two more drinks that adults drink. Bozo is made from millet, corn or millet and yeast. It has a light degree (4-6%) and a sweetish taste. Dzarma (zharma) - a drink made from barley - also has a small degree.",
        image:
          "https://s3-alpha-sig.figma.com/img/86bb/f265/77eedbcbd6908183d1da6279f8653de1?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OxdyJz0ghbPGdof~AoFD4iRd4vd2a6sgzkunI9tIRXrzOCCrOUub-eDap1ZxWPGwAO8NumPp0vHz2yONChOFErM8~RMVEIX9jqIAAindlxneXVxwfhITuk7uZQAieFyRbWkuddKPKnzbjBr~UTa0lWBX81p3U2r0eNBoFu~DIDrrxRyY1zhvbr1NFSXjsYIP2xokhXJ3So07aGgxC-~BuOR~pvOBACphrIcWoU5-yFRqAhdw-qnSyKuLa7GJQjUW6zRplFs5u5t1edU3rhdQWwIBGdraPCsykiW~ZITGYHrU4Svzu-k9A5gRTTnFpRgq9jcl-zkJoU5s6O~gqQf4pA__",
      },
    ],
  },
};

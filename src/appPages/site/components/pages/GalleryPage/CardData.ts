export interface CardData {
  id: number;
  image: string;
  title: string;
  address: string;
  reviews: number;
  rating: number;
  liked: boolean;
}

export const cardsData: CardData[] = [
  {
    id: 1,
    image:
      "https://s3-alpha-sig.figma.com/img/2807/dbfe/79ab288f1c28b602b6f6b357facf96d7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DXdBnLWtdg5U03ubAeQFEufTOMIZ0YkZbtvtTYk1r131UvX96XIj2g6aL43n2IL305ERj4~tRblJBEhvdvyhoKA8zC4VQ1ydY5tmvAf8p2qtCy2dyYafJc1EQzSyW-u2SLlVtK8Sy0YdswG~jagndw-3mnnIhb2NOUKc8IhCHufzKhzQfomlJGvprOcOe~v1nWeHsVnCYEbKrrYJIn9vDpd9MYB8vRB125SltSDJNrEB6BhPNw2wgg0vkD7zB1qtMqA0TtqKkbKWmy6wsB2bum6dB7~95lys0KGBmNONnuliklsjQ~P5u1gqLu5B1-NV59huTJESOSy4UGPcR9duUg__",
    title: "Tüp",
    address: "Tüp, 107, Karakol 722360",
    reviews: 23764,
    rating: 4.5,
    liked: false,
  },
  {
    id: 2,
    image:
      "https://s3-alpha-sig.figma.com/img/67b8/bdf5/21dedaf9ca5d017287e3fee9e55ea647?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYp2kaJhVXd0Z1XVjyQK~AUd8PKYUYJ3uPqXvBJ2rlo3vA5YxPxMLjiHoesP39s6G1r-T1KWwloRTLp4ha9Lgu~T1y6Py2--dDCgMYlIjruSh1GwF7gsF73qHR82quQNqGeFz6YGUN7AlPCqm9dVXMwdK0vZIa9AHwZP4txtScPekEvBM~p2zV8WQst9Ifm4zgxEeAoJCUeMnA51JwjjWQFCi0zxHLFKEh~I2PC1bMPzOu8nbdkVlTeKlfPdZJKBewqeU3DNSdR2m4rRI-p-NTCF4Lx5122v52Y4zkCOXcCUUBjIjdHnY8WmDHNrnmQgfAB9ZzBmPlSHgBvzgNOPnw__",
    title: "Ala-Archa",
    address: "Issyk-Kul Region, Kyrgyzstan",
    reviews: 15689,
    rating: 4.8,
    liked: true,
  },
  {
    id: 3,
    image:
      "https://s3-alpha-sig.figma.com/img/6a27/5c59/80388b9202705c75193993faa2d721d2?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i~DZzneKd6sU-9xnf~N3fVAFBvCVkjKmME9xxDCqKn~LfDlycFQogAactwc~8Otz~88jcrkxvKufO3coi2FNoS6DaKJSsdvqIokii1tFZI3PIfDcwV9Z5mjhZ4xzz0BHTsg-5Yfojo4KGaADMsVksbJi9NtwlgmrC47f5ZtU0r1~e5TEvbT7nSRJgXzj2ziCiqMhm7YijIq8SEDYSaGAhBtI7HkOsVvZVt-1Yg9fvtAKRRXaeBa5K~o7et5ZKil2rv9hXZYgt~8hna3CylEMdEQX8koRpMTswyVmVyotpaLdeUAesKgmt8gLTqmy4t3~C-C5MM22947VdNC055~xhw__",
    title: "Son-Kul",
    address: "Ala-Archa National Park, Bishkek",
    reviews: 8923,
    rating: 4.6,
    liked: false,
  },
  {
    id: 4,
    image:
      "https://s3-alpha-sig.figma.com/img/bc8d/3e77/3879d47720db41bd8aec83f4097ebc5b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKjBzJUjONdec84uIIChYjP9R9q6EVwD1-Z5QTHF5hdB3ZW9ppixFLM~ZKpzLdThmSXK57eMFE-4T5O390S5vh57HSi3Ax2cIwxuTti7yXJznJWJLc5eOJu7hi9XXIEHnGil~0bJ7hKy9PB9yZxyiJQ3mKxMQMKXJpfuzcadKCoFpNLpt60WyuzSZ413wwpHKFCZyZpbN38plu8UzHWu-sICDKxeDPEI-tP3EcAveibJ-jM32D3xT6h59-zW4YOnCyXtHjZI3gVY-4T-Rk4A66OOWn7Cf8U6hdY6YOP2SB6MJhiyUCIGIqVjpu7pNOEq~ahvAj~KiuUd6zz52g5QyQ__",
    title: "Cholpon-Ata",
    address: "Naryn Region, Kyrgyzstan",
    reviews: 5467,
    rating: 4.7,
    liked: true,
  },
  {
    id: 5,
    image:
      "https://s3-alpha-sig.figma.com/img/0c03/37ab/b23a0f403c2243ba9cdb0f607f9b3b1e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCS3nKmx9u6QiwbBgTDUFc~xsXSK8QecMEDDC0HDhIWDcE0PEX~oN1l3enPvxUdiTb179-3g6qYuIq-MLdBRRd3FJNhtQAlgjqFP3NMVm7gO9TDu0dO5OHliE0HJySFb7Z9qPzs-exNJLZ3NmenTKjYD85LEnUyJIfXnhi19HDZd~q1Jb~lvQcbneD4O4V8Ox~ATIYzmswsfGizyWB9uH7oTxNYChZTIxCxcaaA8sEVRRDsTQpC45u26gGD65fwH077JL9G3ik9IuzYMC3Lf4YO4UeNCkEFlTesV7y4NumXErm0fCBzbAF1MQUiekKDWAuT6f9aCKRqOMQ38gr-9vA__",
    title: "Perfect",
    address: "Tüp, 107, Karakol 722360",
    reviews: 12345,
    rating: 4.4,
    liked: false,
  },
  {
    id: 5,
    image:
      "https://s3-alpha-sig.figma.com/img/90ab/00a8/8c2dedd5564d072fef3683caf7f48b4b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=etOfwDHuuJRUTFzOnRxA~ae1prqMAuzVzyq~naKjPJ9mFZD2J-J3lTb3iCfgK7WTweiXP8bzEemoq~lIkZ4dvIBjjZFcBKBwrFBlv~odmltabzPOC7YvM1GRntr5c1y~1i-15r3WfR-hg5G3LKvd01Hbu8-iTNMSPKDzSDIr7m0Ni3rV~paJZz4jg3XYUw5LbKU6y9RY4o3v-VRcLH4HTG1LsONdavc3cTHwzXEDTUMYMivGVAAwxiXc8Rvn5YGAGmIi2oXSpdeVqeh-xCl5SKpm1QHbT3wNzblTm4TVqv1EBn1~l-cj6qS1wv5zfnGjI5NOF~cn4PLDjrtvNtrQIg__",
    title: "Son-Kol",
    address: "Karakol, Issyk-Kul Region",
    reviews: 12345,
    rating: 4.4,
    liked: false,
  },
  {
    id: 6,
    image:
      "https://s3-alpha-sig.figma.com/img/91d8/e5b3/5d0726a667abc9fe4a0393489557d9e8?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pu0IuJYSd0zFwz2ghkDPcyPzpUJIidK2t05Fme6bhOfUna~4uDUgUXcqPf19UeZdRA3cr2u2C2Ann4ileQgPa2HL~JEhH347iKSDHpqXTKP~2ReDPLluuaeaQdICMt7DogNqZHU4bJK97MtemS9AWcB5V9V8bh1o8fiIH6IQXSpv9Dv3ef5q191mBkNIMIxGgyX5NgfAM0BKnbUct3mQgDnNOr4Pg5qYTscESr3RU9i~jzCxddXdy3v4mZ9Y5-wxOk4qOstHXIRYU-nF7lSyRCKrqtvDx4ppRsOAAOe0pnowbpsBICqI5CJgRNOWKDkDrd7Lv9FMYjsbxGWCK3bE4A__",
    title: "Canyon Tale",
    address: "Tüp, 107, Karakol 722360",
    reviews: 12345,
    rating: 4.4,
    liked: false,
  },
  {
    id: 7,
    image:
      "https://s3-alpha-sig.figma.com/img/ba41/b280/93fb8918cca135e87250f164f1ea17b6?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Uk5g6slAim8TkGxxVu1eCMwqUhhOOXiEj6Q2498L36UfLSnoD~-Vfufk0-Zlw0cLpKAgkKrTB8~XZGASc~~cJw3yK0o5NOohzhudjDja8OTTo5YZRPvvcPsMwC17eFi3YhVG9OKSm0XuEAikg3x3quvLppwdOJqSsEp2PWG818gQkZ66MYYtJ5WvYFZiGDlnD0xDfBpJkuHcrC7yVqBnAVe3n9MVE~J5KIka4UZRjAojiinmDlYPS7wsnBrIDz4gCErPxnjTA61wsjSI-Nqjrw991LNoy3dQYxJWmcJRRcbNRF-GK0cnCGMItrE6aJuwcs1uj~5hpkFXXLTpkVSwOA__",
    title: "Barskoon",
    address: "Tüp, 107, Karakol 722360",
    reviews: 12345,
    rating: 4.4,
    liked: false,
  },
  {
    id: 8,
    image:
      "https://s3-alpha-sig.figma.com/img/96fc/bfde/98f7076fd258738e2006de74b0859dc4?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cqvBWALAiz0uPSTHky53uoGUUj23RJeI3I8ptkIUwNy5DLeHXrMgAz98DLEtPJVs1fqPNBVoeIDEYot~wRMRTaPcSZ5P-2KBGJjrMtSg0aNPCUjGiWuz468IGZxJIvRi8PAZR3Rnd8vcRX4kS3WjwxZryLjOZUvL-0mD9V1h9y5d7qFn~xCZi9Dk1VZDyXnhA-mD9b-K58bna8SmxHaJwgm4o5Ip8q484OiudoyyJl05200r2foucdM7yP-QlTJwd6fSEIzcuMbYLoIze2-7XkrVNw3fFulPvBStunAQdy1eF-c5q2-F63j45T-JYLH167jDM75HI-nW~MjJ9Qi5NA__",
    title: "Balykchy",
    address: "Tüp, 107, Karakol 722360",
    reviews: 12345,
    rating: 4.4,
    liked: false,
  },
  {
    id: 9,
    image:
      "https://s3-alpha-sig.figma.com/img/4fa7/65f6/e8315ea87a1c6eaa09ea866ec0efd316?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZLj54S7Ds89pQhlXC1MrQ0jkNJOSe0PNyJw7vUpNmEFYRa~clm-QqjRl9u7WsykCPo2pZ4Avj~UHrjvlEwgGSMoPM8fgxFYaQqshz96zGpHAo5xK4gglXAGvpKpo9qtmCQrMMm97y5xJ8UiOTHuh51xn2JTNfUu10f9G3l77CNlEkBOzD4BBNcJKbh2KRYYstbrKqlySw0Auwb24E6wwQyb~6G~59dOdZUjEqBl1dNGxmQoolrJGwlljhQuODtGojH7W8AJem41TsrZZvuMw12qQuU4eDHbXfsAMd9acTHdYWTNAYv-F0GBQGe7af0TFUrZYhPD499BPeAxydaAGXw__",
    title: "Karakol",
    address: "Tüp, 107, Karakol 722360",
    reviews: 12345,
    rating: 4.4,
    liked: false,
  },
];

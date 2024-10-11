"use client";
import PopularPlaces from "../PopularPlaces";
import scss from "./PlacesDetail.module.scss";

const PlacesDetail = () => {
  const Places = [
    {
      _id: 1,
      img: "https://s3-alpha-sig.figma.com/img/bc8d/3e77/3879d47720db41bd8aec83f4097ebc5b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKjBzJUjONdec84uIIChYjP9R9q6EVwD1-Z5QTHF5hdB3ZW9ppixFLM~ZKpzLdThmSXK57eMFE-4T5O390S5vh57HSi3Ax2cIwxuTti7yXJznJWJLc5eOJu7hi9XXIEHnGil~0bJ7hKy9PB9yZxyiJQ3mKxMQMKXJpfuzcadKCoFpNLpt60WyuzSZ413wwpHKFCZyZpbN38plu8UzHWu-sICDKxeDPEI-tP3EcAveibJ-jM32D3xT6h59-zW4YOnCyXtHjZI3gVY-4T-Rk4A66OOWn7Cf8U6hdY6YOP2SB6MJhiyUCIGIqVjpu7pNOEq~ahvAj~KiuUd6zz52g5QyQ__",
      title: "Cholpon-Ata",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 2,
      img: "https://s3-alpha-sig.figma.com/img/294c/a353/483ae5fadadae75d348e5eaa277b70d9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJxJk-6vLl1ehYWIoIl35cNjjjEYfUyarORl7KUMY5g17EFkqd1QzRCTD0zMa9wnnN2hmYsJX5yUdWe8hf~BlgL9zrfitSkQzbm6uwipXfR5O3oofXD-YCXW-8YU21Zte4YqVC0Hy9Moql993Ks35x0T6oUvHpD5bu-BxmVW4Hvj8DQNxMSpEcJ8Vkc2E-bxCj3rvGI3hCSlshyDXlaar8VrM1bmvNAPFfg33GVnG00snDfaLVkW0uqrnb5nLUos4qt5MOwa5bVR8Ch1pPuYKrGoQ-WmUke9ikmFqFGzQ2DiJCG8wJRHHJd-UCW2h5W8mbOn6zC-QG~VBsAhm3RIbA__",
      title: "Jeti-Oguz",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 3,
      img: "https://s3-alpha-sig.figma.com/img/3b82/5c11/47b917b660872526840b4a63e1bba317?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OWA9V2ny9kujL8exJG0~CtM~WX6YrjEQ0fw~xvBpr2QH4zBu~gFjKo0gepxajSnDNsepoN6N-s6OysH1SS8Zvn8TCHtz7wPbgJkP3IpFMyD~HRKozKqWEja7OKjglsRaiH0feFITKohg82dpaDHKWxkwiZcszKBwUFy~ilaY~0tBJXqjZpasJIKo4CXTvzfAbJOZKZYA2Shzru0qC6wes8ARkmbCp47SjOwD--UDVdPP-OepA-4cEEQfFfIHOH8VT7S1HHU3fXZXm7YN1lCQSsW40Qc2u65BgTps1jpOnE7nqrlrxiL9o-H5N8V91LGqpJq4NLbXbls1CZoTcczHhg__",
      title: "Chatkal",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 4,
      img: "https://s3-alpha-sig.figma.com/img/2807/dbfe/79ab288f1c28b602b6f6b357facf96d7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DXdBnLWtdg5U03ubAeQFEufTOMIZ0YkZbtvtTYk1r131UvX96XIj2g6aL43n2IL305ERj4~tRblJBEhvdvyhoKA8zC4VQ1ydY5tmvAf8p2qtCy2dyYafJc1EQzSyW-u2SLlVtK8Sy0YdswG~jagndw-3mnnIhb2NOUKc8IhCHufzKhzQfomlJGvprOcOe~v1nWeHsVnCYEbKrrYJIn9vDpd9MYB8vRB125SltSDJNrEB6BhPNw2wgg0vkD7zB1qtMqA0TtqKkbKWmy6wsB2bum6dB7~95lys0KGBmNONnuliklsjQ~P5u1gqLu5B1-NV59huTJESOSy4UGPcR9duUg__",
      title: "Balykchy",
      rating: 4.5,
      reviews: 23000,
    },
  ];
  return (
    <section className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <h1>Popular places</h1>
          <div className={scss.blocks}>
            {Places.map((el) => (
              <PopularPlaces el={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacesDetail;

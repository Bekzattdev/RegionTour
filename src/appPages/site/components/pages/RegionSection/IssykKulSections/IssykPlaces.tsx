
import scss from "./IssykPlaces.module.scss";
import PopularPlaces from "../../PopularPlaces";

const IssykPlaces = () => {
  const IssykPlaces = [
    {
      _id: 1,
      img: "https://s3-alpha-sig.figma.com/img/bc8d/3e77/3879d47720db41bd8aec83f4097ebc5b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKjBzJUjONdec84uIIChYjP9R9q6EVwD1-Z5QTHF5hdB3ZW9ppixFLM~ZKpzLdThmSXK57eMFE-4T5O390S5vh57HSi3Ax2cIwxuTti7yXJznJWJLc5eOJu7hi9XXIEHnGil~0bJ7hKy9PB9yZxyiJQ3mKxMQMKXJpfuzcadKCoFpNLpt60WyuzSZ413wwpHKFCZyZpbN38plu8UzHWu-sICDKxeDPEI-tP3EcAveibJ-jM32D3xT6h59-zW4YOnCyXtHjZI3gVY-4T-Rk4A66OOWn7Cf8U6hdY6YOP2SB6MJhiyUCIGIqVjpu7pNOEq~ahvAj~KiuUd6zz52g5QyQ__",
      title: "Cholpon-Ata",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 2,
      img: "https://s3-alpha-sig.figma.com/img/bc8d/3e77/3879d47720db41bd8aec83f4097ebc5b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKjBzJUjONdec84uIIChYjP9R9q6EVwD1-Z5QTHF5hdB3ZW9ppixFLM~ZKpzLdThmSXK57eMFE-4T5O390S5vh57HSi3Ax2cIwxuTti7yXJznJWJLc5eOJu7hi9XXIEHnGil~0bJ7hKy9PB9yZxyiJQ3mKxMQMKXJpfuzcadKCoFpNLpt60WyuzSZ413wwpHKFCZyZpbN38plu8UzHWu-sICDKxeDPEI-tP3EcAveibJ-jM32D3xT6h59-zW4YOnCyXtHjZI3gVY-4T-Rk4A66OOWn7Cf8U6hdY6YOP2SB6MJhiyUCIGIqVjpu7pNOEq~ahvAj~KiuUd6zz52g5QyQ__",
      title: "Cholpon-Ata",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 3,
      img: "https://s3-alpha-sig.figma.com/img/bc8d/3e77/3879d47720db41bd8aec83f4097ebc5b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKjBzJUjONdec84uIIChYjP9R9q6EVwD1-Z5QTHF5hdB3ZW9ppixFLM~ZKpzLdThmSXK57eMFE-4T5O390S5vh57HSi3Ax2cIwxuTti7yXJznJWJLc5eOJu7hi9XXIEHnGil~0bJ7hKy9PB9yZxyiJQ3mKxMQMKXJpfuzcadKCoFpNLpt60WyuzSZ413wwpHKFCZyZpbN38plu8UzHWu-sICDKxeDPEI-tP3EcAveibJ-jM32D3xT6h59-zW4YOnCyXtHjZI3gVY-4T-Rk4A66OOWn7Cf8U6hdY6YOP2SB6MJhiyUCIGIqVjpu7pNOEq~ahvAj~KiuUd6zz52g5QyQ__",
      title: "Cholpon-Ata",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 4,
      img: "https://s3-alpha-sig.figma.com/img/bc8d/3e77/3879d47720db41bd8aec83f4097ebc5b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKjBzJUjONdec84uIIChYjP9R9q6EVwD1-Z5QTHF5hdB3ZW9ppixFLM~ZKpzLdThmSXK57eMFE-4T5O390S5vh57HSi3Ax2cIwxuTti7yXJznJWJLc5eOJu7hi9XXIEHnGil~0bJ7hKy9PB9yZxyiJQ3mKxMQMKXJpfuzcadKCoFpNLpt60WyuzSZ413wwpHKFCZyZpbN38plu8UzHWu-sICDKxeDPEI-tP3EcAveibJ-jM32D3xT6h59-zW4YOnCyXtHjZI3gVY-4T-Rk4A66OOWn7Cf8U6hdY6YOP2SB6MJhiyUCIGIqVjpu7pNOEq~ahvAj~KiuUd6zz52g5QyQ__",
      title: "Cholpon-Ata",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 5,
      img: "https://s3-alpha-sig.figma.com/img/bc8d/3e77/3879d47720db41bd8aec83f4097ebc5b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKjBzJUjONdec84uIIChYjP9R9q6EVwD1-Z5QTHF5hdB3ZW9ppixFLM~ZKpzLdThmSXK57eMFE-4T5O390S5vh57HSi3Ax2cIwxuTti7yXJznJWJLc5eOJu7hi9XXIEHnGil~0bJ7hKy9PB9yZxyiJQ3mKxMQMKXJpfuzcadKCoFpNLpt60WyuzSZ413wwpHKFCZyZpbN38plu8UzHWu-sICDKxeDPEI-tP3EcAveibJ-jM32D3xT6h59-zW4YOnCyXtHjZI3gVY-4T-Rk4A66OOWn7Cf8U6hdY6YOP2SB6MJhiyUCIGIqVjpu7pNOEq~ahvAj~KiuUd6zz52g5QyQ__",
      title: "Cholpon-Ata",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 6,
      img: "https://s3-alpha-sig.figma.com/img/bc8d/3e77/3879d47720db41bd8aec83f4097ebc5b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKjBzJUjONdec84uIIChYjP9R9q6EVwD1-Z5QTHF5hdB3ZW9ppixFLM~ZKpzLdThmSXK57eMFE-4T5O390S5vh57HSi3Ax2cIwxuTti7yXJznJWJLc5eOJu7hi9XXIEHnGil~0bJ7hKy9PB9yZxyiJQ3mKxMQMKXJpfuzcadKCoFpNLpt60WyuzSZ413wwpHKFCZyZpbN38plu8UzHWu-sICDKxeDPEI-tP3EcAveibJ-jM32D3xT6h59-zW4YOnCyXtHjZI3gVY-4T-Rk4A66OOWn7Cf8U6hdY6YOP2SB6MJhiyUCIGIqVjpu7pNOEq~ahvAj~KiuUd6zz52g5QyQ__",
      title: "Cholpon-Ata",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 7,
      img: "https://s3-alpha-sig.figma.com/img/bc8d/3e77/3879d47720db41bd8aec83f4097ebc5b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKjBzJUjONdec84uIIChYjP9R9q6EVwD1-Z5QTHF5hdB3ZW9ppixFLM~ZKpzLdThmSXK57eMFE-4T5O390S5vh57HSi3Ax2cIwxuTti7yXJznJWJLc5eOJu7hi9XXIEHnGil~0bJ7hKy9PB9yZxyiJQ3mKxMQMKXJpfuzcadKCoFpNLpt60WyuzSZ413wwpHKFCZyZpbN38plu8UzHWu-sICDKxeDPEI-tP3EcAveibJ-jM32D3xT6h59-zW4YOnCyXtHjZI3gVY-4T-Rk4A66OOWn7Cf8U6hdY6YOP2SB6MJhiyUCIGIqVjpu7pNOEq~ahvAj~KiuUd6zz52g5QyQ__",
      title: "Cholpon-Ata",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 8,
      img: "https://s3-alpha-sig.figma.com/img/bc8d/3e77/3879d47720db41bd8aec83f4097ebc5b?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKjBzJUjONdec84uIIChYjP9R9q6EVwD1-Z5QTHF5hdB3ZW9ppixFLM~ZKpzLdThmSXK57eMFE-4T5O390S5vh57HSi3Ax2cIwxuTti7yXJznJWJLc5eOJu7hi9XXIEHnGil~0bJ7hKy9PB9yZxyiJQ3mKxMQMKXJpfuzcadKCoFpNLpt60WyuzSZ413wwpHKFCZyZpbN38plu8UzHWu-sICDKxeDPEI-tP3EcAveibJ-jM32D3xT6h59-zW4YOnCyXtHjZI3gVY-4T-Rk4A66OOWn7Cf8U6hdY6YOP2SB6MJhiyUCIGIqVjpu7pNOEq~ahvAj~KiuUd6zz52g5QyQ__",
      title: "Cholpon-Ata",
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
            {IssykPlaces.map((el) => (
              <PopularPlaces el={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssykPlaces;

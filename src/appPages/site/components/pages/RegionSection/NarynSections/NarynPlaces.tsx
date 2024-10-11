import scss from "./NarynPlaces.module.scss";
import PopularPlaces from "../../PopularPlaces";

const NarynPlaces = () => {
  const NarynPlaces = [
    {
      _id: 1,
      img: "https://s3-alpha-sig.figma.com/img/294c/a353/483ae5fadadae75d348e5eaa277b70d9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJxJk-6vLl1ehYWIoIl35cNjjjEYfUyarORl7KUMY5g17EFkqd1QzRCTD0zMa9wnnN2hmYsJX5yUdWe8hf~BlgL9zrfitSkQzbm6uwipXfR5O3oofXD-YCXW-8YU21Zte4YqVC0Hy9Moql993Ks35x0T6oUvHpD5bu-BxmVW4Hvj8DQNxMSpEcJ8Vkc2E-bxCj3rvGI3hCSlshyDXlaar8VrM1bmvNAPFfg33GVnG00snDfaLVkW0uqrnb5nLUos4qt5MOwa5bVR8Ch1pPuYKrGoQ-WmUke9ikmFqFGzQ2DiJCG8wJRHHJd-UCW2h5W8mbOn6zC-QG~VBsAhm3RIbA__",
      title: "Jeti-Oguz",
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
      img: "https://s3-alpha-sig.figma.com/img/294c/a353/483ae5fadadae75d348e5eaa277b70d9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJxJk-6vLl1ehYWIoIl35cNjjjEYfUyarORl7KUMY5g17EFkqd1QzRCTD0zMa9wnnN2hmYsJX5yUdWe8hf~BlgL9zrfitSkQzbm6uwipXfR5O3oofXD-YCXW-8YU21Zte4YqVC0Hy9Moql993Ks35x0T6oUvHpD5bu-BxmVW4Hvj8DQNxMSpEcJ8Vkc2E-bxCj3rvGI3hCSlshyDXlaar8VrM1bmvNAPFfg33GVnG00snDfaLVkW0uqrnb5nLUos4qt5MOwa5bVR8Ch1pPuYKrGoQ-WmUke9ikmFqFGzQ2DiJCG8wJRHHJd-UCW2h5W8mbOn6zC-QG~VBsAhm3RIbA__",
      title: "Jeti-Oguz",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 4,
      img: "https://s3-alpha-sig.figma.com/img/294c/a353/483ae5fadadae75d348e5eaa277b70d9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJxJk-6vLl1ehYWIoIl35cNjjjEYfUyarORl7KUMY5g17EFkqd1QzRCTD0zMa9wnnN2hmYsJX5yUdWe8hf~BlgL9zrfitSkQzbm6uwipXfR5O3oofXD-YCXW-8YU21Zte4YqVC0Hy9Moql993Ks35x0T6oUvHpD5bu-BxmVW4Hvj8DQNxMSpEcJ8Vkc2E-bxCj3rvGI3hCSlshyDXlaar8VrM1bmvNAPFfg33GVnG00snDfaLVkW0uqrnb5nLUos4qt5MOwa5bVR8Ch1pPuYKrGoQ-WmUke9ikmFqFGzQ2DiJCG8wJRHHJd-UCW2h5W8mbOn6zC-QG~VBsAhm3RIbA__",
      title: "Jeti-Oguz",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 5,
      img: "https://s3-alpha-sig.figma.com/img/294c/a353/483ae5fadadae75d348e5eaa277b70d9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJxJk-6vLl1ehYWIoIl35cNjjjEYfUyarORl7KUMY5g17EFkqd1QzRCTD0zMa9wnnN2hmYsJX5yUdWe8hf~BlgL9zrfitSkQzbm6uwipXfR5O3oofXD-YCXW-8YU21Zte4YqVC0Hy9Moql993Ks35x0T6oUvHpD5bu-BxmVW4Hvj8DQNxMSpEcJ8Vkc2E-bxCj3rvGI3hCSlshyDXlaar8VrM1bmvNAPFfg33GVnG00snDfaLVkW0uqrnb5nLUos4qt5MOwa5bVR8Ch1pPuYKrGoQ-WmUke9ikmFqFGzQ2DiJCG8wJRHHJd-UCW2h5W8mbOn6zC-QG~VBsAhm3RIbA__",
      title: "Jeti-Oguz",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 6,
      img: "https://s3-alpha-sig.figma.com/img/294c/a353/483ae5fadadae75d348e5eaa277b70d9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJxJk-6vLl1ehYWIoIl35cNjjjEYfUyarORl7KUMY5g17EFkqd1QzRCTD0zMa9wnnN2hmYsJX5yUdWe8hf~BlgL9zrfitSkQzbm6uwipXfR5O3oofXD-YCXW-8YU21Zte4YqVC0Hy9Moql993Ks35x0T6oUvHpD5bu-BxmVW4Hvj8DQNxMSpEcJ8Vkc2E-bxCj3rvGI3hCSlshyDXlaar8VrM1bmvNAPFfg33GVnG00snDfaLVkW0uqrnb5nLUos4qt5MOwa5bVR8Ch1pPuYKrGoQ-WmUke9ikmFqFGzQ2DiJCG8wJRHHJd-UCW2h5W8mbOn6zC-QG~VBsAhm3RIbA__",
      title: "Jeti-Oguz",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 7,
      img: "https://s3-alpha-sig.figma.com/img/294c/a353/483ae5fadadae75d348e5eaa277b70d9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJxJk-6vLl1ehYWIoIl35cNjjjEYfUyarORl7KUMY5g17EFkqd1QzRCTD0zMa9wnnN2hmYsJX5yUdWe8hf~BlgL9zrfitSkQzbm6uwipXfR5O3oofXD-YCXW-8YU21Zte4YqVC0Hy9Moql993Ks35x0T6oUvHpD5bu-BxmVW4Hvj8DQNxMSpEcJ8Vkc2E-bxCj3rvGI3hCSlshyDXlaar8VrM1bmvNAPFfg33GVnG00snDfaLVkW0uqrnb5nLUos4qt5MOwa5bVR8Ch1pPuYKrGoQ-WmUke9ikmFqFGzQ2DiJCG8wJRHHJd-UCW2h5W8mbOn6zC-QG~VBsAhm3RIbA__",
      title: "Jeti-Oguz",
      rating: 4.5,
      reviews: 23000,
    },
    {
      _id: 8,
      img: "https://s3-alpha-sig.figma.com/img/294c/a353/483ae5fadadae75d348e5eaa277b70d9?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJxJk-6vLl1ehYWIoIl35cNjjjEYfUyarORl7KUMY5g17EFkqd1QzRCTD0zMa9wnnN2hmYsJX5yUdWe8hf~BlgL9zrfitSkQzbm6uwipXfR5O3oofXD-YCXW-8YU21Zte4YqVC0Hy9Moql993Ks35x0T6oUvHpD5bu-BxmVW4Hvj8DQNxMSpEcJ8Vkc2E-bxCj3rvGI3hCSlshyDXlaar8VrM1bmvNAPFfg33GVnG00snDfaLVkW0uqrnb5nLUos4qt5MOwa5bVR8Ch1pPuYKrGoQ-WmUke9ikmFqFGzQ2DiJCG8wJRHHJd-UCW2h5W8mbOn6zC-QG~VBsAhm3RIbA__",
      title: "Jeti-Oguz",
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
            {NarynPlaces.map((el) => (
              <PopularPlaces el={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarynPlaces;

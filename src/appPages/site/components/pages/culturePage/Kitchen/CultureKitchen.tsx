import { kyrgyzCulture } from "../cultureData/cultureData";
import scss from "../CultureStyle.module.scss";

interface Food {
  title: string;
  description: string;
  image: string;
}

interface Kitchen {
  image: string;
  title: string;
  description: string;
  foods: Food[];
}

interface KyrgyzCulture {
  kitchen: Kitchen;
}

const CultureKitchen: React.FC = () => {
  const { kitchen } = kyrgyzCulture;

  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.cultureAll}>
          <div className={scss.cultureHeader}>
            <h1>{kitchen?.title}</h1>
            <p>{kitchen?.description}</p>
          </div>
          <div className={scss.cultureCards}>
            {kitchen?.foods.map((el, index) => (
              <div key={el.title || index} className={scss.cultureCard}>
                <div className={scss.imageContainer}>
                  <img
                    src={el.image}
                    alt={el.title}
                    className={
                      el.title === "Food Collection" ? scss.foodCollection : ""
                    }
                  />
                </div>
                <div className={scss.contentContainer}>
                  <h2>{el.title}</h2>
                  <p>{el.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureKitchen;

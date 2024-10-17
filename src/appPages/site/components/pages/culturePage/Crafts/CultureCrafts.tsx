import { kyrgyzCulture } from "../cultureData/cultureData";
import scss from "../CultureStyle.module.scss";

const CultureCrafts: React.FC = () => {
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.cultureAll}>
          <div className={scss.cultureHeader}>
            <h1>{kyrgyzCulture?.crafts?.title}</h1>
            <p>{kyrgyzCulture?.crafts?.description}</p>
          </div>
          <div className={scss.cultureCards}>
            {kyrgyzCulture?.crafts?.craftsItems.map((el, index) => (
              <div key={index} className={scss.cultureCard}>
                <div className={scss.imageContainer}>
                  <img src={el.image} alt={el.title} />
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

export default CultureCrafts;

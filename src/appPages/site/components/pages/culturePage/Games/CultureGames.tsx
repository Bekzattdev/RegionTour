import { kyrgyzCulture } from "../cultureData/cultureData";
import scss from "../CultureStyle.module.scss";

const CultureGames: React.FC = () => {
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.cultureAll}>
          <div className={scss.cultureHeader}>
            <h1>{kyrgyzCulture?.games?.title}</h1>
            <p>{kyrgyzCulture?.games?.description}</p>
          </div>
          <div className={scss.cultureCards}>
            {kyrgyzCulture?.games?.gamesItem.map((el, index) => (
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

export default CultureGames;

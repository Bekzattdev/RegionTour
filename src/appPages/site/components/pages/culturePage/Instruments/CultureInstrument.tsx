import { kyrgyzCulture } from "../cultureData/cultureData";
import scss from "../CultureStyle.module.scss";

const CultureInstrument: React.FC = () => {
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.cultureAll}>
          <div className={scss.cultureHeader}>
            <h1>{kyrgyzCulture?.instrument?.title}</h1>
            <p>{kyrgyzCulture?.instrument?.description}</p>
          </div>
          <div className={scss.cultureCards}>
            {kyrgyzCulture?.instrument?.instruments.map((instrument, index) => (
              <div key={index} className={scss.cultureCard}>
                <div className={scss.imageContainer}>
                  <img src={instrument.image} alt={instrument.title} />
                </div>
                <div className={scss.contentContainer}>
                  <h2>{instrument.title}</h2>
                  <p>{instrument.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureInstrument;

import Image from "next/image";
import { kyrgyzCulture } from "../cultureData/cultureData";
import scss from "./Currency.module.scss";

const Currency: React.FC = () => {
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.cultureAll}>
          <div className={scss.cultureHeader}>
            <h1>{kyrgyzCulture?.currency?.title}</h1>
            <p>{kyrgyzCulture?.currency?.description}</p>
          </div>
          {kyrgyzCulture?.currency?.currency.map((instrument, index) => (
            <div key={index} className={scss.cultureCard}>
              <div className={scss.imageContainer}>
                <Image
                  src={instrument.image}
                  alt={instrument.title}
                  objectFit="contain"
                />
              </div>
              <div className={scss.contentContainer}>
                <h2>{instrument.title}</h2>
                <p>
					{instrument.description
                  .split("\n\n")
                  .map((paragraph, pIndex) => (
					  <p key={pIndex}>{paragraph}</p>
					))}
					</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Currency;

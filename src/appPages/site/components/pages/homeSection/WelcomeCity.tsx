import Image from "next/image";
import scss from "./WelcomeCity.module.scss";
import bishkek from "../../../assets/img/citybishkek.png";

const WelcomeCity = () => {
  return (
    <section className={scss.city}>
      <div className={scss.kyrgyzstan}>
        <h2>Kyrgyzstan</h2>
        <p>
          Kyrgyz Republic is a landlocked country located in the heart of
          Central Asia. The capital is Bishkek. The mountainous region of the
          Tian Shan covers over 80% of the country. Kyrgyzstan is occasionally
          referred to as "the Switzerland of Central Asia". The country is
          divided into seven provinces, which are Batken, Chuy, Jalal-Abad,
          Issyk-Kul, Naryn, Osh and Talas.
        </p>
      </div>
      <div className="container">
        <div className={scss.content}>
          <h1>Bishkek</h1>
          <Image src={bishkek} alt="" />
          <div className={scss.cityText}>
            <h1>Bishkek</h1>
            <p>
              This is the capital of a picturesque mountainous country -
              Kyrgyzstan, from where tourists make trips to the world-famous,
              crystal-clear Issyk-Kul and other natural attractions of the Tien
              Shan. Framed by mountains, the city is rich in beautiful views,
              monumental monuments, parks and museum antiquities.
            </p>
          </div>
        </div>
      </div>
    </section>
  ); 
};

export default WelcomeCity;

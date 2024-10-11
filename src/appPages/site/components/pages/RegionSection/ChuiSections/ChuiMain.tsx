"use client";
import scss from "./ChuiMain.module.scss";
import Image from "next/image";
//ImgCarta
import talasImg from "../assets/img/talasfalse.png";
import chuiImg from "../assets/img/chyitrue.png";
import issykkulImg from "../assets/img/issykkulfalse.png";
import jalalabadImg from "../assets/img/jalalabadfalse.png";
import narynImg from "../assets/img/narynfalse.png";
import oshImg from "../assets/img/oshfalse.png";
import batkenImg from "../assets/img/batkenfalse.png";
//
import MainImg from "../assets/image/chyiMian.png";
import { useRouter } from "next/navigation";

const ChuiMain = () => {
  const router = useRouter();
  const main = {
    title: "Chyi",
    img: "https://s3-alpha-sig.figma.com/img/8839/f257/1689035837b66381ea092d3bfb34a124?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XH5qu6rCZd81RHTll-yGkl78zGFxiER-r12NVaTy~GYunGgDL~zheBUCbPYEALRbeFenxROSOiN9Sw3hhMqMPmS8r6AbpUO7WPCODBw-4WgE87RgMIC9VRS-duB5JGjJYtWhVvaa-JJ8z4BEFr-es0FHfrAh0-iEIoNwp0lAdxpwObeJyZRR1RgGULC3gXw~HOA0YkR9aWHZ66SjYb~oI6w3PE096QJzn0-jibKpzh4BwCaUkOzQrFtabU3lf3UfYeViA2dkXwfVhlqRQjCEbRC8dcdh3Kdbi0LSEBLAmSu67H9QorUL4l1EE2A4iDLIACe33Tl-bDyBsTy3b8fZNQ__",
    description:
      "Osh is the second largest city in Kyrgyzstan, located in the Fergana Valley in the south of the country and often referred to as the “capital of the south.” It is the oldest city in the country (estimated to be over 3,000 years old) and has served as the administrative center of the Osh region since 1939. The city s ethnically mixed population as of 2021 was 322,164, including Kyrgyz, Uzbeks, Ukrainians, Koreans, and other smaller ethnic groups. It is located about 5 km from the Kyrgyz-Uzbek border.",
  };
  return (
    <section className={scss.main}>
      <img src={main.img} alt="" className={scss.img} />
      <div className="container">
        <div className={scss.content}>
          <div className={scss.actions}>
            <img src={main.img} alt="" />
            <div className={scss.actionsText}>
              <h1>{main.title}</h1>
              <p>{main.description}</p>
            </div>
          </div>
          <div className={scss.carta}>
            <div
              className={scss.cartaActions}
              onClick={() => router.push("/regions/talas")}
            >
              <Image src={talasImg} alt="" />
              <h3>Talas</h3>
            </div>
            <div
              className={scss.cartaActions}
              onClick={() => router.push("/regions/chui")}
            >
              <Image src={chuiImg} alt="" />
              <h3>Chyi</h3>
            </div>
            <div
              className={scss.cartaActions}
              onClick={() => router.push("/regions/issykkul")}
            >
              <Image src={issykkulImg} alt="" />
              <h3>Issyk-Kul</h3>
            </div>
            <div
              className={scss.cartaActions}
              onClick={() => router.push("/regions/jalalabad")}
            >
              <Image src={jalalabadImg} alt="" />
              <h3>Jalal-Abad</h3>
            </div>
            <div
              className={scss.cartaActions}
              onClick={() => router.push("/regions/naryn")}
            >
              <Image src={narynImg} alt="" />
              <h3>Naryn</h3>
            </div>
            <div
              className={scss.cartaActions}
              onClick={() => router.push("/regions/osh")}
            >
              <Image src={oshImg} alt="" />
              <h3>Osh</h3>
            </div>
            <div
              className={scss.cartaActions}
              onClick={() => router.push("/regions/batken")}
            >
              <Image src={batkenImg} alt="" />
              <h3>Batken</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChuiMain;

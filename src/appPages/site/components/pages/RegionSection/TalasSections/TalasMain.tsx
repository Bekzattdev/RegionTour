"use client";
import scss from "./TalasMain.module.scss";
import Image from "next/image";
//ImgCarta
import talasImg from "../assets/img/talastrue.png";
import chuiImg from "../assets/img/chyifalse.png";
import issykkulImg from "../assets/img/issykkulfalse.png";
import jalalabadImg from "../assets/img/jalalabadfalse.png";
import narynImg from "../assets/img/narynfalse.png";
import oshImg from "../assets/img/oshfalse.png";
import batkenImg from "../assets/img/batkenfalse.png";
import { usePathname, useRouter } from "next/navigation";

const TalasMain = () => {
  const router = useRouter();

  const main = {
    title: "Talas",
    img: "https://s3-alpha-sig.figma.com/img/03a7/ea01/2fb4e72788ba2d30289233501cb229c3?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lNqWb64d~9zeTfTf0nVE1Ji5xeUof08N7wFmCwPIGDXVuww3LzViqNIQemkmDoOM6Fld8agLXVUCn66l0YhtHjt8dTQd1Njp9v88Q1mgwfUl3A-hJerwXOmo5BMlJYokLmGLYMjTWqfn3RhEQgw2mhVSoTriW0XGvQoWJEL0YhMewnNMKd41HlSy1Colcmb8rOtSbyM3Ke6ZQ4FXXz~SHGWiYM2IdUI9y-hF1TYjjL4wtWNESElJdL-cq9ZcbVRRkSPe8fvUVTEY88v17kuwYYt4joX2diT-qIC~ohrKDrC2iptkrjE8BAscx24KWcpSfwehbl72pT2uBA~UNANyLQ__",
    description:
      'Issyk-Kul is an endorheic lake (i.e., without outflow) in the Northern Tian Shan mountains in Eastern Kyrgyzstan. It is the seventh-deepest lake in the world, the tenth-largest lake in the world by volume and the second-largest saline lake after the Caspian Sea. Issyk-Kul means "warm lake" in the Kyrgyz language; although it is located at a lofty elevation of 1,607 metres and subject to severe cold during winter, it rarely freezes, due to the salinity.',
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

export default TalasMain;

"use client";
import scss from "./IssykMain.module.scss";
import Image from "next/image";
import talasImg from "../assets/img/talasfalse.png";
import chuiImg from "../assets/img/chyifalse.png";
import issykkulImg from "../assets/img/issykkultrue.png";
import jalalabadImg from "../assets/img/jalalabadfalse.png";
import narynImg from "../assets/img/narynfalse.png";
import oshImg from "../assets/img/oshfalse.png";
import batkenImg from "../assets/img/batkenfalse.png";
import { useRouter } from "next/navigation";

const IssykMain = () => {
  const router = useRouter();
  const main = {
    title: "Issyk-Kul",
    img: "https://s3-alpha-sig.figma.com/img/3c4e/2195/2b923033db0bac15d56a59ffc0cf519c?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mDHWhDAfmH7pLowUDEaZqJtMeM7f5RVo8BLVYXkGeXKiPEeG9crufGo8WG4g~ox-7T3GwWcYKgqku0A2VnUscvvM~kAlfml-t5Apnv4zqkTDv38C~lZ3UFSoqJEOEvpXQ-Bp3XMwU5uqKIi8GdoqbIuwV~a0oljGrSkO8VDj2MuioehW7c3Q9Pm5Tnl2NFy5Ydy8yuOtxWAyF5sUZMNhHA1W5ce2ygJPTw1I-Aya~63DTpr--iVsHVPbgHjc~vIoJhs8qL4qeDK6F8wVeCRK9cpPG6WJZrFCZRvDpAk079ugkPuMjRygjRHPHv1lSEjFMpYpC4qcEojqQUPsLzcVVA__",
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

export default IssykMain;

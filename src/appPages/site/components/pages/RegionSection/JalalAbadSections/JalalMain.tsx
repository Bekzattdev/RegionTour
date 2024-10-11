"use client";
import scss from "./JalalMain.module.scss";
import Image from "next/image";
import talasImg from "../assets/img/talasfalse.png";
import chuiImg from "../assets/img/chyifalse.png";
import issykkulImg from "../assets/img/issykkulfalse.png";
import jalalabadImg from "../assets/img/jalalabadtrue.png";
import narynImg from "../assets/img/narynfalse.png";
import oshImg from "../assets/img/oshfalse.png";
import batkenImg from "../assets/img/batkenfalse.png";
import { useRouter } from "next/navigation";

const JalalMain = () => {
  const router = useRouter();
  const main = {
    title: "Jalal-Abad",
    img: "https://s3-alpha-sig.figma.com/img/774b/b825/fcf0770f02130e0d7c22996354b3da17?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dD5mR9yvL9NROuNjYUBj77tHEuXODzBlXOiZcZFEaIb1648PPv7h9ge1uUdLfEHgw1H8FpZxOyPrqrOCSLo4j~GS4plFhSRYt6y2V5GhIElDA54A1rvuoFlYvgMua98mQHB6vdz2iLaXFZ9fbvRISn0mOCl8DbCjSZ-J3tUFKmexORNoaaEAEzttyygDkp2MBW~qUVlAMG4ys3LPtlp2et-CAJ9B6CMo9YE9sA9VSsANcGlwGOeusIGAcQkobQncFYfzcpLicgoo~1pN4ydp9Ef993-k1cAVe90ItBAqSBVF3Skrj7DO26Z2nAH8brqGm2rGJeooDanDuEtZUQlNKw__",
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

export default JalalMain;

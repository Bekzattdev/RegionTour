"use client";
import Image from "next/image";
import scss from "./Carta.module.scss";
import karta from "../../../../../assets/img/kyrgyzstankarta.png";

const Carta = () => {
  return (
    <section className={scss.carta}>
      <div className="container">
        <div className={scss.content}>
          <h3>- Where to go</h3>
          <div className={scss.cartaActions}>
            <input type="text" placeholder="From Where?" />
            <input type="text" placeholder="Where?" />
            <button>Go</button>
          </div>
          <div className={scss.karta}>
            <Image src={karta} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carta;

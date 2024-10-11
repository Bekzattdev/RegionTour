"use client";
import React from "react";
import scss from "./Footer.module.scss";
//img
import insta from "../../../../../assets/img/instalogo.svg";
import facebook from "../../../../../assets/img/facebooklogo.svg";
import vk from "../../../../../assets/img/vklogo.png";
import email from "../../../../../assets/img/emaillogo.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <footer id={scss.footer}>
      <div className={scss.footer}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.logo}>
              <h2>Logo</h2>
              <div className={scss.images}>
                <Image src={insta} alt="" />
                <Image src={facebook} alt="" />
                <Image src={vk} alt="" className={scss.vk} />
                <Image src={email} alt="" className={scss.email} />
              </div>
            </div>
            <div className={scss.home}>
              <h2>Home</h2>
              <div className={scss.detail}>
                <h4>Attractions</h4>
                <h4>Map</h4>
              </div>
            </div>
            <div className={scss.regions}>
              <h2>Regions</h2>
              <div className={scss.detail}>
                <h4>Batken</h4>
                <h4>Jalal-Abad</h4>
                <h4>Issyk_kul</h4>
                <h4>Naryn</h4>
                <h4>Osh</h4>
                <h4>Talas</h4>
                <h4>Chyi</h4>
              </div>
            </div>
            <div className={scss.culture}>
              <h2>Culture</h2>
              <div className={scss.detail}>
                <h4>Games</h4>
                <h4>National instruments</h4>
                <h4>National clothes</h4>
                <h4>Hand crafts</h4>
                <h4>Currency</h4>
                <h4>Kitchen</h4>
              </div>
            </div>
            <div className={scss.galerey}>
              <h2>Gallerey</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

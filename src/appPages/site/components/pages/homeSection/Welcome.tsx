"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import scss from "./Welcome.module.scss";
import { FiSearch } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi"; 
import vk from "../../../../../assets/img/vklogo.png";
import insta from "../../../../../assets/img/instalogo.svg";
import email from "../../../../../assets/img/emaillogo.webp";
import facebook from "../../../../../assets/img/facebooklogo.svg";

const Welcome = () => {
  const [burger, setBurger] = useState(false);
  return (
    <section className={scss.welcome}>
      <div className="container">
        <div className={scss.logo}>
          <Image src={insta} alt="" className={scss.insta} />
          <Image src={facebook} alt="" className={scss.facebook} />
          <Image src={vk} alt="" className={scss.vk} />
          <Image src={email} alt="" className={scss.email} />
        </div>
        <div className={scss.content}>
          <h1>
            Welcome to the amazing <br /> Kyrgyzstan!
          </h1>
          <div className={scss.inputs}>
            <div className={scss.input}>
              <a>
                <FiSearch />
              </a>
              <input type="text" placeholder="Where to go?" />
            </div>
            <h6 onClick={() => setBurger(!burger)}>
              <FiArrowUpRight />
            </h6>
            {burger ? (
              <div className={scss.burger}>
                <Link href="/">Jalal-Abad</Link>
                <Link href="/">Chyi</Link>
                <Link href="/">Talas</Link>
                <Link href="/">Naryn</Link>
                <Link href="/">Issyk-Kul</Link>
                <Link href="/">Osh</Link>
                <Link href="/">Batken</Link>
              </div>
            ) : null}
          </div>
          <p>
            Are you ready to embark on an exciting journey through the stunning
            country of Central Asia? We are ready to help you plan the perfect
            trip to Kyrgyzstan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

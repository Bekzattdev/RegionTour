"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";


const Header: React.FC = () => {
  const [language, setLanguage] = useState("eng");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Бургер меню үчүн

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Менюну ачуу/жабуу
  };

  return (
    <div id={styles.header}>
      <header className={styles.header}>
        <nav className={styles.navigation}>
          <Link href="/home" className={styles.navLink}>
            <span>Home</span>
          </Link>
          <Link href="/regions" className={styles.navLink}>
            <span>Regions</span>
          </Link>
          <Link href="/culture" className={styles.navLink}>
            <span>Culture</span>
          </Link>
          <Link href="/routes" className={styles.navLink}>
            <span>Routes</span>
          </Link>
        </nav>
        <div className={styles.actions}>
          <select
            className={styles.langButton}
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="eng">Eng</option>
            <option value="rus">Rus</option>
            <option value="kgz">Kgz</option>
          </select>
          <button className={styles.signUpButton}>Sign up</button>
        </div>
        <div className={styles.burgerMenu} onClick={toggleMenu}>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
          <div className={styles.burgerLine}></div>
        </div>
      </header>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/home" className={styles.navLink}>
            <span>Home</span>
          </Link>
          <Link href="/regions" className={styles.navLink}>
            <span>Regions</span>
          </Link>
          <Link href="/culture" className={styles.navLink}>
            <span>Culture</span>
          </Link>
          <Link href="/routes" className={styles.navLink}>
            <span>Routes</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
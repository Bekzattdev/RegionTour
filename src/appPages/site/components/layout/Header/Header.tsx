"use client";
import Link from "next/link";
import React, { useState } from "react";
import scss from "./Header.module.scss";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const pathname = usePathname();
  const LinkHeader = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Regions",
      href: "/regions/talas",
    },
    {
      name: "Culture",
      href: "/culture",
    },
    {
      name: "Gallerey",
      href: "/gallery",
    },
    {
      name: "Routes",
      href: "/lkk",
    },
  ];
  return (
    <div id={scss.header}>
      <header className={scss.header}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.logo}>
              <h1>Logo</h1>
            </div>
            {LinkHeader.map((el) => (
              <nav className={scss.navigation}>
                <Link
                  href={el.href}
                  className={
                    pathname === el.href
                      ? `${scss.navLink} ${scss.active}`
                      : `${scss.navLink}`
                  }
                >
                  <span>{el.name}</span>
                </Link>
              </nav>
            ))}
            <div className={scss.actions}>
              <select>
                <option value="eng">Eng</option>
                <option value="rus">Rus</option>
                <option value="kgz">Kgz</option>
              </select>
              <button>Sign up</button>
              <a
                className={scss.burgerIcon}
                onClick={() => setBurgerOpen(!burgerOpen)}
              >
                <RiMenu3Fill />
              </a>
              {burgerOpen ? (
                <div className={scss.burgerMenu}>
                  <h6 onClick={() => setBurgerOpen(false)}>
                    <IoCloseSharp />
                  </h6>
                  <div className={scss.components}>
                    <Link href="/">Home</Link>
                    <Link href="/regions/talas">Regions</Link>
                    <Link href="/culture">Culture</Link>
                    <Link href="/">Gallery</Link>
                    <Link href="/">Routes</Link>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

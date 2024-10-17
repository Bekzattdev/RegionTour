import Link from "next/link";
import React from "react";
import scss from "./CultureMain.module.scss";
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Games", href: "/culture/games" },
  { label: "National clothes", href: "/culture/national-clothes" },
  { label: "Hand crafts", href: "/culture/hand-crafts" },
  { label: "Currency", href: "/culture/currency" },
  { label: "National instruments", href: "/culture/national-instruments" },
  { label: "Kitchen", href: "/culture/kitchen" },
];

const CultureMain: React.FC = () => {
  return (
    <div className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <h1 className={scss.title}>Culture</h1>
          <p className={scss.description}>
            The culture of Kyrgyzstan was formed under the strong influence of
            nomadic life. In addition, it was influenced by the cultures of
            Russia, Persia and Turkey, and yet it retained its originality and
            uniqueness. The connection of Kyrgyz culture with nature can be
            traced everywhere: from dwelling-yurts to the traditional cuisine.
            An example of Kyrgyz culture is the Manas epic, an incredibly long
            poem that was passed down orally from one generation to the next.
          </p>
          <nav className={scss.navigation}>
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} className={scss.navItem}>
                {item.label}
                <span className={scss.arrow}>→</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CultureMain;

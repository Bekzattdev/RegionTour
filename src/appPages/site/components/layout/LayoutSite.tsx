import React, { FC, ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import scss from "./LayoutSite.module.scss";
interface LayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <div className={scss.layoutSite}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSite;

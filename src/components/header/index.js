import React from "react";
import Link from "../link";
import styles from "./index.module.css";
import logo from "../../images/white-origami-bird.png";
import getNavigation from "../../utils/navigation";

const Header = () => {
  const links = getNavigation();
  return (
    <header className={styles.navigation}>
      <img className={styles.logo} src={logo}></img>
      {links.map((nav) => {
        return <Link href={nav.link} title={nav.title} type="header"></Link>;
      })}
    </header>
  );
};

export default Header;

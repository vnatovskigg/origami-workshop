import React from "react";
import Link from "../link";
import styles from "./index.module.css";
import logo from "../../images/blue-origami-bird-flipped.png";
import getNavigation from "../../utils/navigation";

const Footer = () => {
  const links = getNavigation();
  return (
    <footer>
      <div className={styles.footer}>
        {links.map((nav) => {
          return <Link href={nav.link} title={nav.title} type="footer"></Link>;
        })}
        <img className={styles.logo} src={logo}></img>
      </div>
      <p className={styles.uni}>Software University</p>
    </footer>
  );
};

export default Footer;

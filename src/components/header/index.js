import React, { Component } from "react";
import Link from "../link";
import styles from "./index.module.css";
import logo from "../../images/white-origami-bird.png";
import getNavigation from "../../utils/navigation";
import UserContext from "../../Context";

class Header extends Component {
  static contextType = UserContext;

  render() {
    const { loggedIn, user } = this.context;

    const links = getNavigation(loggedIn, user);

    return (
      <header className={styles.navigation}>
        <img className={styles.logo} src={logo}></img>
        {links.map((nav) => {
          return (
            <Link
              key={nav.title}
              href={nav.link}
              title={nav.title}
              type="header"
            ></Link>
          );
        })}
      </header>
    );
  }
}

export default Header;

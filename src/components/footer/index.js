import React, { Component } from "react";
import Link from "../link";
import styles from "./index.module.css";
import logo from "../../images/blue-origami-bird-flipped.png";
import getNavigation from "../../utils/navigation";
import UserContext from "../../Context";

class Footer extends Component {
  static contextType = UserContext;

  render() {
    const { loggedIn, user } = this.context;

    const links = getNavigation(loggedIn, user);

    return (
      <footer>
        <div className={styles.footer}>
          {links.map((nav) => {
            return (
              <Link
                key={nav.title}
                href={nav.link}
                title={nav.title}
                type="footer"
              ></Link>
            );
          })}
          <img className={styles.logo} src={logo}></img>
        </div>
        <p className={styles.uni}>Software University</p>
      </footer>
    );
  }
}

export default Footer;

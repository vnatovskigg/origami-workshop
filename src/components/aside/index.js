import React, { Component } from "react";
import Link from "../link";
import styles from "./index.module.css";
import getNavigation from "../../utils/navigation";
import UserContext from "../../Context";

class Aside extends Component {
  static contextType = UserContext;

  render() {
    const { user } = this.context;

    const links = getNavigation(user);

    return (
      <aside className={styles.container}>
        {links.map((nav) => {
          return (
            <Link
              key={nav.title}
              href={nav.link}
              title={nav.title}
              type="aside"
            ></Link>
          );
        })}
      </aside>
    );
  }
}

export default Aside;

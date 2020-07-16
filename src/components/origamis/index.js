import React, { Component } from "react";
import styles from "./index.module.css";
import Origami from "../origami";

class Origamis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      origamis: [],
    };
  }

  getOrigamis = async () => {
    const res = await fetch("http://localhost:9999/api/origami");
    const origamis = await res.json();
    this.setState({
      origamis,
    });
  };

  renderOrigamis() {
    const { origamis } = this.state;

    return origamis.map((origami) => {
      return <Origami key={origami._id} {...origami} />;
    });
  }

  componentDidMount() {
    this.getOrigamis();
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Origamis</h1>
        <div className={styles["origami-wrapper"]}>{this.renderOrigamis()}</div>
      </div>
    );
  }
}

export default Origamis;

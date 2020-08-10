import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Origami from "../origami";
import getOrigami from "../../utils/origami";

const Origamis = (props) => {
  const [origamis, setOrigamis] = useState([]);

  const getOrigamis = async () => {
    const origamis = await getOrigami(props.length);
    setOrigamis(origamis);
  };

  const renderOrigamis = () => {
    return origamis.map((origami, index) => {
      return <Origami key={origami._id} index={index} {...origami} />;
    });
  };

  useEffect(() => {
    getOrigamis();
  }, [props.updatedOrigami]);

  return <div className={styles["origami-wrapper"]}>{renderOrigamis()}</div>;
};

export default Origamis;

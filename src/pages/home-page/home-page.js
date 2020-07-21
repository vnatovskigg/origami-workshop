import React from "react";
import PageWrapper from "../../components/page-wrapper";
import styles from "./home-page.module.css";
import Title from "../../components/title";
import Origamis from "../../components/origamis";

const HomePage = () => {
  return (
    <PageWrapper>
      <Title title="Publications" />
      <Origamis />
    </PageWrapper>
  );
};

export default HomePage;

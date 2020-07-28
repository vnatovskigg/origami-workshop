import React, { Component } from "react";
import PageWrapper from "../../components/page-wrapper";
import styles from "./home-page.module.css";
import Title from "../../components/title";
import Origamis from "../../components/origamis";
import UserContext from "../../Context";

class HomePage extends Component {
  static contextType = UserContext;

  render() {
    return (
      <PageWrapper>
        <Title title="Publications" />
        <Origamis />
      </PageWrapper>
    );
  }
}

export default HomePage;

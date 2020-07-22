import React, { Component } from "react";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import styles from "./index.module.css";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/input";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      rePassword: "",
    };
  }

  onChange = (event, type) => {
    const newState = {};
    newState[type] = event.target.value;

    this.setState(newState);
  };

  render() {
    const { email, password, rePassword } = this.state;
    return (
      <PageWrapper>
        <div className={styles.container}>
          <Title title="Register" />
          <Input
            value={email}
            onChange={(e) => this.onChange(e, "email")}
            label="Email"
            id="email"
          />
          <Input
            value={password}
            onChange={(e) => this.onChange(e, "password")}
            label="Password"
            id="email"
          />
          <Input
            value={rePassword}
            onChange={(e) => this.onChange(e, "rePassword")}
            label="rePassword"
            id="email"
          />
          <SubmitButton text="Register" />
        </div>
      </PageWrapper>
    );
  }
}

export default Register;

import React, { useState, useContext } from "react";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import styles from "./index.module.css";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/input";
import authenticate from "../../utils/authenticate";
import UserContext from "../../Context";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const context = useContext(UserContext);
  const history = useHistory();

  const onChange = (event, type) => {
    switch (type) {
      case "username":
        setUsername(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "rePassword":
        setRePassword(event.target.value);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await authenticate(
      "http://localhost:9999/api/user/register",
      {
        username,
        password,
      },
      (user) => {
        console.log("Success");
        context.logIn(user);
        history.push("/");
      },
      (e) => {
        console.log("Error", e);
      }
    );
  };

  return (
    <PageWrapper>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Title title="Register" />
        <Input
          value={username}
          onChange={(e) => onChange(e, "username")}
          label="Username"
          id="username"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => onChange(e, "password")}
          label="Password"
          id="password"
        />
        <Input
          type="password"
          value={rePassword}
          onChange={(e) => onChange(e, "rePassword")}
          label="rePassword"
          id="re-password"
        />
        <SubmitButton text="Register" />
      </form>
    </PageWrapper>
  );
};

export default Register;

import React, { useContext, useState } from "react";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import styles from "./index.module.css";
import PageWrapper from "../../components/page-wrapper";
import Input from "../../components/input";
import authenticate from "../../utils/authenticate";
import UserContext from "../../Context";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await authenticate(
      "http://localhost:9999/api/user/login",
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
        <Title title="Login" />
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          id="username"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          id="email"
        />

        <SubmitButton text="Login" />
      </form>
    </PageWrapper>
  );
};

export default Login;

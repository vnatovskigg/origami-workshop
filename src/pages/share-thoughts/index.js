import React, { useState } from "react";
import styles from "./index.module.css";
import PageWrapper from "../../components/page-wrapper";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import Origamis from "../../components/origamis";
import getCookie from "../../utils/cookie";
import getOrigami from "../../utils/origami";

const ShareThoughtsPage = () => {
  const [publication, setPublication] = useState("");
  const [updatedOrigami, setUpdatedOrigami] = useState([]);

  const handleSubmit = async () => {
    const promise = await fetch("http://localhost:9999/api/origami", {
      method: "POST",
      body: JSON.stringify({
        description: publication,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("x-auth-token"),
      },
    });

    const data = await promise.json();
    setPublication("Success!");
    setTimeout(() => {
      setPublication("");
    }, 3000);
    const origamis = await getOrigami(3);
    setUpdatedOrigami(origamis);
  };

  return (
    <PageWrapper>
      <Title title="Share Your Thoughts" />
      <div className={styles.container}>
        <div>
          <textarea
            value={publication}
            className={styles.textarea}
            onChange={(e) => setPublication(e.target.value)}
          ></textarea>
        </div>
        <div>
          <SubmitButton text="Post" onClick={handleSubmit} />
        </div>
      </div>
      <p>Latest 3 origamis</p>
      <Origamis length={3} updatedOrigami={updatedOrigami} />
    </PageWrapper>
  );
};

export default ShareThoughtsPage;

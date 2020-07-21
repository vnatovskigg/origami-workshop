import React from "react";
import styles from "./index.module.css";
import PageWrapper from "../../components/page-wrapper";
import Title from "../../components/title";
import SubmitButton from "../../components/button/submit-button";
import Origamis from "../../components/origamis";

const ShareThoughtsPage = () => {
  return (
    <PageWrapper>
      <Title title="Share Your Thoughts" />
      <div className={styles.container}>
        <div>
          <textarea className={styles.textarea}>Publications...</textarea>
        </div>
        <div>
          <SubmitButton text="Post" />
        </div>
      </div>
      <p>Latest 3 origamis</p>
      <Origamis length={3} />
    </PageWrapper>
  );
};

export default ShareThoughtsPage;

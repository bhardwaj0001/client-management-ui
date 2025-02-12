import React from "react";
import styles from "./HeadingCard.module.scss";

export const HeadingCard = ({ heading, subHeading }) => {
  return (
    <div className={styles.headingCard}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageHeader}>{heading}</h1>
        <p className={styles.pageHeader}>{subHeading}</p>
      </div>
    </div>
  );
};

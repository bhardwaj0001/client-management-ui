import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>
          &copy; Gnostics 2025 | <span>All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./OpsLayout.module.scss";
import { HeadingCard } from "../../../components/HeadingCard/HeadingCard";

export const OpsLayout = () => {
  return (
    <div className={styles.opsLayout}>
      <HeadingCard
        heading="Client Servicing Dashboard"
        subHeading="Empowering Businesses with Digital Solutions"
      ></HeadingCard>
      <Outlet />
    </div>
  );
};

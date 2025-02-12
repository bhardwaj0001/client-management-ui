import React from "react";
import { Outlet } from "react-router-dom";
import { HeadingCard } from "../../../components/HeadingCard/HeadingCard";
import styles from "./ClientLayout.module.scss";

export const ClientLayout = () => {
  return (
    <div className={styles.clientLayout}>
      <HeadingCard
        heading="Client Dashboard"
        subHeading="Empowering Businesses with Digital Solutions"
      ></HeadingCard>
      <Outlet />
    </div>
  );
};

import React from "react";

import { OrgChart } from "../../components/OrgChart/OrgChart";

import styles from "./Home.module.scss";
import { HeadingCard } from "../../components/HeadingCard/HeadingCard";
import { HomeCards } from "../../components/HomeCards/HomeCards";

export const Home = () => {
  return (
    <div className={styles.homepageContainer}>
      <HeadingCard
        heading="Welcome to The Gnostics"
        subHeading="Empowering Businesses with Digital Solutions"
      ></HeadingCard>

      <HomeCards />

      {/* <OrgChart /> */}
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { CaseList } from "../../../components/CaseList/CaseList";
import { BASE_PATH } from "../../../utils";
import styles from "./OpsDashboard.module.scss";

const SkeletonLoader = () => {
  return (
    <div className={styles.skeletonWrap}>
      <div className={styles.skeletonLeft}>
        <div className={styles.skeletonContainer}>
          <div className={styles.skeletonCaseInfo}></div>
        </div>
      </div>
      <div className={styles.skeletonRight}>
        <div className={styles.skeletonContainer}>
          <div className={styles.skeletonGrid}>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
            <div className={styles.skeletonCard}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OpsDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allCases, setAllCases] = useState([]);

  const fetchAllCases = async () => {
    try {
      const response = await fetch(`${BASE_PATH}/client-servicing/v1/cases`);
      if (!response.ok) throw new Error("Failed to fetch JSON array");

      const data = await response.json();
      setAllCases(data);
    } catch (error) {
      console.error("Error fetching Cases", error);
    }
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetchAllCases();
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      <div
        style={{
          background:
            'url("/tw_illustration_1.jpg") no-repeat center center/cover',
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional fallback color
        }}
      >
        <CaseList allCases={allCases} />
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./CaseDetails.module.scss";
import { VerticalStepper } from "../../components/Stepper/Stepper";
import { CaseDetailsForm } from "../../components/CaseDetailsForm/CaseDetailsForm";
import { BASE_PATH } from "../../utils";

export const CaseDetails = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [caseData, setCaseData] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${BASE_PATH}/client-servicing/v1/cases/${caseId}`
        );

        if (!response.ok) throw new Error("Failed to fetch case details");

        const data = await response.json();
        setCaseData(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCaseDetails();
  }, [caseId]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => navigate("/ops"), 300);
  };

  return (
    <div className={`${styles.panel} ${isOpen ? styles.open : styles.close}`}>
      <div className={styles.header}>
        <button className={styles.closeBtn} onClick={handleClose}>
          ✖
        </button>
      </div>

      <div className={styles.caseDetailsContainer}>
        <div className={styles.leftSide}>
          <VerticalStepper isLoading={isLoading} />
        </div>
        <div className={styles.rightSide}>
          <CaseDetailsForm caseData={caseData} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

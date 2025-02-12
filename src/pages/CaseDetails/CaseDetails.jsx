import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./CaseDetails.module.scss";
import { VerticalStepper } from "../../components/Stepper/Stepper";
import { CaseDetailsForm } from "../../components/CaseDetailsForm/CaseDetailsForm";
import { BASE_PATH } from "../../utils";

export const CaseDetails = () => {
  const { caseId } = useParams(); // Get the Case ID from URL
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [caseData, setCaseData] = useState();
  const [isOpen, setIsOpen] = useState(false);

  // Trigger panel animation on mount
  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        setIsLoading(true);
        setCaseData({
          caseId: "CASE779467",
          caseCreationDate: "2025-02-12",
          status: "NEW",
          customerDetails: {
            customerId: "7610928763699",
            legalCompanyName: "AbcCorp Ltd.",
            taxIdNumber: "878788899000",
          },
          customerPOCDetails: {
            name: "Harry Potter",
            identification: "9982109287",
            idType: "Employee ID",
            role: "Sr. Vendor Manager",
          },
          userDetails: {
            name: "Mary Jane",
            identification: "90908827161",
            idType: "Aadhar card",
          },
          productDetails: {
            productName: "Gold Travel Card",
            productId: "8726189300276",
            startDate: "10th Nov 2024",
          },
        });
        setIsLoading(false);
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
  }, [caseId]); // Re-run effect when caseId changes

  // Close panel smoothly
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => navigate("/ops"), 300); // Wait for animation to finish
  };
  console.log(isLoading, "LOADINGGGGG");
  return (
    <div className={`${styles.panel} ${isOpen ? styles.open : styles.close}`}>
      <div className={styles.header}>
        {/* <h2>Case Details - {id}</h2> */}
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

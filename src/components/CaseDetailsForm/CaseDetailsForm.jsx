import React from "react";
import styles from "./CaseDetailsForm.module.scss";

export const CaseDetailsForm = ({ caseData, isLoading }) => {
  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.caseInfo}>
        <div className={styles.caseHeader}>
          <h2>📌 Case ID: {caseData.caseId}</h2>
          <span
            className={`${styles.status} ${
              styles[caseData.status.toLowerCase()]
            }`}
          >
            {caseData.status}
          </span>
        </div>
        <p>
          <strong>Created On:</strong> {caseData.caseCreationDate}
        </p>
      </div>

      <div className={styles.gridContainer}>
        {/* Customer Details */}
        <div className={styles.card}>
          <h2>🏢 Customer Details</h2>
          <div className={styles.detailsGrid}>
            <p>
              <strong>Customer ID:</strong>{" "}
              {caseData.customerDetails.customerId}
            </p>
            <p>
              <strong>Company Name:</strong>{" "}
              {caseData.customerDetails.legalCompanyName}
            </p>
            <p>
              <strong>Tax ID:</strong> {caseData.customerDetails.taxIdNumber}
            </p>
          </div>
        </div>

        {/* Customer POC Details */}
        <div className={styles.card}>
          <h2>👤 Customer POC</h2>
          <div className={styles.detailsGrid}>
            <p>
              <strong>Name:</strong> {caseData.customerPOCDetails.name}
            </p>
            <p>
              <strong>Identification:</strong>{" "}
              {caseData.customerPOCDetails.identification}
            </p>
            <p>
              <strong>Role:</strong> {caseData.customerPOCDetails.role}
            </p>
          </div>
        </div>

        {/* User Details */}
        <div className={styles.card}>
          <h2>🧑‍💼 User Details</h2>
          <div className={styles.detailsGrid}>
            <p>
              <strong>Name:</strong> {caseData.userDetails.name}
            </p>
            <p>
              <strong>Identification:</strong>{" "}
              {caseData.userDetails.identification}
            </p>
          </div>
        </div>

        {/* Product Details */}
        <div className={styles.card}>
          <h2>💳 Product Details</h2>
          <div className={styles.detailsGrid}>
            <p>
              <strong>Product Name:</strong>{" "}
              {caseData.productDetails.productName}
            </p>
            <p>
              <strong>Product ID:</strong> {caseData.productDetails.productId}
            </p>
            <p>
              <strong>Start Date:</strong> {caseData.productDetails.startDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkeletonLoader = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonCaseInfo}></div>
      <div className={styles.skeletonGrid}>
        <div className={styles.skeletonCard}></div>
        <div className={styles.skeletonCard}></div>
        <div className={styles.skeletonCard}></div>
        <div className={styles.skeletonCard}></div>
      </div>
    </div>
  );
};

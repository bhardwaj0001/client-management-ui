import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CaseList.module.scss";

export const CaseList = ({ allCases }) => {
  const navigate = useNavigate();

  const handleView = (caseId) => {
    navigate(`/ops/${caseId}`);
  };

  return (
    <div className={styles.container}>
      {/* Left Panel - Names List */}
      <div className={styles.sidebar}>
        <h2>Cases as PDFs</h2>
        {/* <ul>
          {namesList.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul> */}
      </div>

      {/* Right Panel - Cases Table */}
      <div className={styles.mainContent}>
        {/* <h2>All Cases</h2> */}
        <table>
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Legal Company Name</th>
              <th>Product Name</th>
              <th>Start Date</th>
              <th>Case Created Date</th>
              <th>Download</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {allCases?.map((item, index) => (
              <tr key={index}>
                <td>{item.caseId}</td>
                <td>{item.legalCompanyName}</td>
                <td>{item.productName}</td>
                <td>{item.startDate}</td>
                <td>{item.caseCreationDate}</td>
                <td>
                  <button className={styles.downloadBtn}>Download</button>
                </td>
                <td>
                  <button
                    className={styles.viewBtn}
                    onClick={() => handleView(item.caseId)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

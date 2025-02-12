import React, { useState } from "react";
import Stepper from "@keyvaluesystems/react-stepper";
import styles from "./Stepper.module.scss";

export const VerticalStepper = ({ isLoading }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [steps, setSteps] = useState([
    { stepLabel: "New Case", completed: false },
    { stepLabel: "Draft", completed: false },
    { stepLabel: "Completed", completed: false },
    { stepLabel: "Pending Approval", completed: false },
    { stepLabel: "Approved", completed: false },
  ]);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  const handleNext = () => {
    setSteps((prevSteps) =>
      prevSteps.map((step, index) =>
        index === activeStep ? { ...step, completed: true } : step
      )
    );
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setSteps((prevSteps) =>
      prevSteps.map((step, index) =>
        index === activeStep - 1 ? { ...step, completed: false } : step
      )
    );
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const stepperStyles = {
    LineSeparator: () => ({
      backgroundColor: "#6B9E78", // Green connector line
      //   height: "4px",
    }),
    InactiveLineSeparator: () => ({
      backgroundColor: "#d3d3d3", // Grey for upcoming steps
      //   height: "4px",
    }),
    Node: () => ({
      backgroundColor: "#EDF1F3", // Default step indicator color
      //   width: "20px",
      //   height: "20px",
      borderRadius: "50%",
      color: "#003D4F",
    }),
    ActiveNode: () => ({
      backgroundColor: "#6B9E78", // Green for active step
      width: "24px",
      height: "24px",
      color: "#EDF1F3",
    }),
    CompletedNode: () => ({
      backgroundColor: "#6B9E78",
      color: "#EDF1F3", // Green for completed steps
    }),
    LabelTitle: () => ({
      fontSize: "18px",
      fontWeight: "500",
      color: "#EDF1F3",
    }),
    ActiveLabelTitle: () => ({
      fontSize: "18px",
      fontWeight: "700",
      color: "#6B9E78",
    }),
  };

  return (
    <div className={styles.container}>
      <Stepper
        steps={steps}
        currentStepIndex={activeStep}
        styles={stepperStyles}
      />
      <div className={styles.buttons}>
        <button onClick={handlePrevious} disabled={activeStep === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={activeStep === steps.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};
const SkeletonLoader = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonCaseInfo}></div>
    </div>
  );
};

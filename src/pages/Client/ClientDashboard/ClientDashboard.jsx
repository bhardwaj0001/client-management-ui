import React from "react";
import { DocUploader } from "../../../components/DocUploader/DocUploader";

export const ClientDashboard = () => {
  return (
    <div>
      <div
        style={{
          background:
            'url("/tw_illustration_2.jpg") no-repeat center center/cover',
          minHeight: "600px",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional fallback color
        }}
      >
        <DocUploader />
      </div>
    </div>
  );
};

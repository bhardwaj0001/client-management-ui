import { useState } from "react";
import styles from "./DocUploader.module.scss";
import { BASE_PATH } from "../../utils";
import { Link } from "react-router-dom";

export const DocUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState(null);
  const [caseId, setCaseId] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
        setMessage(null);
      } else {
        setMessage("Please upload a valid PDF file.");
        setFile(null);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${BASE_PATH}/client-servicing/v1/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("File uploaded successfully!");
        setCaseId(data?.caseId);
      } else {
        setMessage("Upload failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred while uploading.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.uploader}
        style={{
          backgroundImage: `url("/tw_illustration_Newcastle_4.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center calc(50% - 50px)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <label htmlFor="file-upload">
          Upload <span className={styles.enhancer}>PDF</span> Request File
        </label>
        <input
          id="file-upload"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        {file && <p className={styles.fileName}>{file.name}</p>}
        {message && (
          <p className={`${styles.message} ${caseId ? styles.success : ""}`}>
            {message}
          </p>
        )}
        <div>
          <button onClick={handleUpload} disabled={uploading || !file}>
            {uploading ? "Uploading..." : "Upload PDF"}
          </button>
          {caseId && (
            <Link to={`/ops/${caseId}`} className={styles.redirectCaseLink}>
              View Case
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

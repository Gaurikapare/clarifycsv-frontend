import React, { useState } from "react";
import axios from "axios";

function UploadCSV() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");

  const uploadFile = async () => {
    if (!file) {
      setStatus("Please choose a CSV file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setStatus("Uploading & cleaning your CSV... Please wait ⏳");

      const res = await axios.post(
        "https://gaurikapare-clarifycsv-cleaner-gauri.hf.space/clean_csv",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(res.data);
      setStatus("File cleaned successfully ✔ Scroll down to see the results!");
    } catch (err) {
      console.error(err);
      setStatus("Error while uploading. Something went wrong ❌");
    }
  };

  return (
    <div className="page-container">
      <div className="two-column">
        <div className="card">
          <h1 className="page-title">Upload CSV</h1>
          <p className="page-subtitle">
            Upload your CSV file (20–200 rows).  
            It will be cleaned using rule-based checks + GenAI suggestions.
          </p>

          <div className="upload-box">
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button className="btn-primary" onClick={uploadFile}>
              Upload & Clean
            </button>
          </div>

          {status && <div className="status-text">{status}</div>}
        </div>

        <div className="card">
          <h2 className="section-title">AI + Rule-based Cleaning Result</h2>
          <p className="section-subtitle">
            Preview of backend response (for evaluation & debugging).
          </p>

          <pre className="json-preview">
            {result ? JSON.stringify(result, null, 2) : "No results yet."}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default UploadCSV;


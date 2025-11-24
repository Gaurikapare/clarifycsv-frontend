import React, { useState } from "react";
import axios from "axios";

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [cleanedData, setCleanedData] = useState(null);

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a CSV file");
      return;
    }

    const formdata = new FormData();
    formdata.append("file", file);

    try {
      const res = await axios.post(
        "https://gaurikapare-clarifycsv-cleaner-gauri.hf.space/clean_csv",
        formdata
      );

      setCleanedData(res.data.cleaned_csv);
      alert("CSV cleaned successfully!");
    } catch (err) {
      alert("Error cleaning CSV. Please try again.");
    }
  };

  return (
    <div style={card}>
      <h2 style={title}>Upload CSV to Clean</h2>

      <input
        type="file"
        accept=".csv"
        style={{ marginBottom: "10px" }}
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button style={btn} onClick={uploadFile}>
        Clean CSV
      </button>

      {cleanedData && (
        <pre style={outputBox}>{cleanedData}</pre>
      )}
    </div>
  );
};

const card = {
  background: "#fff",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
};

const title = {
  color: "#0f4c75",
  marginBottom: "20px",
  textAlign: "center",
};

const btn = {
  padding: "12px",
  background: "linear-gradient(90deg, #0f4c75, #3282b8)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginBottom: "20px",
};

const outputBox = {
  background: "#f7f7f7",
  padding: "15px",
  borderRadius: "8px",
  whiteSpace: "pre-wrap",
};

export default UploadCSV;
import React, { useState } from "react";
import axios from "axios";

const UploadCSV = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const backendURL = "https://gaurikapare-clarifycsv-cleaner-gauri.hf.space/clean_csv";

  const handleUpload = async () => {
    if (!file) {
      setError("❗ Please select a CSV file.");
      return;
    }

    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(backendURL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResult(res.data.cleaned_csv);
    } catch (err) {
      setError("⚠️ Server error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>📤 Upload & Clean Your CSV</h1>

      <div style={styles.card}>
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setFile(e.target.files[0])}
          style={styles.fileInput}
        />

        <button onClick={handleUpload} style={styles.button}>
          {loading ? "Cleaning CSV..." : "Upload & Clean"}
        </button>

        {error && <p style={styles.error}>{error}</p>}

        {result && (
          <div style={styles.resultBox}>
            <h3>✅ Cleaned CSV Output</h3>
            <pre style={styles.pre}>{result}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

// ⭐ Modern UI Styles
const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    background: "#f8fafc",
    minHeight: "100vh",
  },
  title: {
    fontSize: "30px",
    color: "#1e293b",
    fontWeight: "bold",
  },
  card: {
    background: "white",
    width: "60%",
    margin: "20px auto",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  fileInput: {
    margin: "20px 0",
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px 25px",
    background: "#2563eb",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
  error: {
    color: "red",
    marginTop: "10px",
    fontWeight: "bold",
  },
  resultBox: {
    marginTop: "25px",
    padding: "18px",
    background: "#eef2ff",
    borderRadius: "10px",
    textAlign: "left",
  },
  pre: {
    whiteSpace: "pre-wrap",
    fontFamily: "monospace",
    fontSize: "14px",
  },
};

export default UploadCSV;
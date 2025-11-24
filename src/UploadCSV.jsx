import React, { useState } from "react";

function UploadCSV() {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) {
      alert("Please choose a CSV file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "https://gaurikapare-clarifycsv-cleaner-gauri.hf.space/predict",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        alert("Error cleaning CSV. Please try again.");
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "cleaned_data.csv";
      a.click();

      alert("CSV cleaned successfully!");
    } catch (error) {
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Upload CSV to Clean</h2>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={uploadFile}>Clean CSV</button>
    </div>
  );
}

export default UploadCSV;
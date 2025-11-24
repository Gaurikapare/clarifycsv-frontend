import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UploadCSV() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("http://127.0.0.1:8000/clean_csv", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    navigate("/dashboard", { state: { result: res.data } });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Upload CSV</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload & Clean</button>
    </div>
  );
}

export default UploadCSV;


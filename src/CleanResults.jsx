import React from "react";

const CleanResults = ({ cleanedData }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#0f4c75" }}>Cleaned CSV Output</h2>
      <pre style={{
        background: "#f5f5f5",
        padding: "20px",
        borderRadius: "8px"
      }}>
        {cleanedData || "No data yet"}
      </pre>
    </div>
  );
};

export default CleanResults;
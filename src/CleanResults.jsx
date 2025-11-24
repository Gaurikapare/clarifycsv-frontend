import React from "react";

const CleanResults = ({ result }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Cleaned CSV Output</h3>
      <pre
        style={{
          padding: "15px",
          background: "#eee",
          borderRadius: "6px",
        }}
      >
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
};

export default CleanResults;
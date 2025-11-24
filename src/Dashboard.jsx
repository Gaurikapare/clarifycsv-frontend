

import React from "react";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <p>Total Cleaned Files: 0</p>
      <p>Last Upload: None</p>
      <p>Status: Ready</p>

      <a href="/upload" style={styles.btn}>
        Upload New CSV
      </a>
    </div>
  );
};

const styles = {
  btn: {
    padding: "10px 20px",
    background: "#4CAF50",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default Dashboard;
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✨ Welcome to ClarifyCSV Cleaner</h1>
      <p style={styles.subtitle}>
        Your smart tool for cleaning, transforming, and analyzing CSV data.
      </p>

      <div style={styles.cardsContainer}>

        <Link to="/upload" style={styles.card}>
          <h2>📤 Upload & Clean CSV</h2>
          <p>Remove duplicates, missing values, format data instantly.</p>
        </Link>

        <Link to="/results" style={styles.card}>
          <h2>📊 View Cleaned Results</h2>
          <p>See the cleaned CSV output you generated.</p>
        </Link>

        <Link to="/profile" style={styles.card}>
          <h2>👤 Profile</h2>
          <p>Manage your account details and saved files.</p>
        </Link>

      </div>
    </div>
  );
};

// 💎 Modern UI Styles
const styles = {
  container: {
    background: "#f8fafc",
    minHeight: "100vh",
    padding: "40px",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#1e293b",
  },
  subtitle: {
    fontSize: "18px",
    color: "#475569",
    marginBottom: "40px",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  },
  card: {
    width: "280px",
    padding: "25px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textDecoration: "none",
    color: "#1e293b",
    transition: "0.3s",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
};

export default Dashboard;
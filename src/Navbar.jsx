import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>ClarifyCSV</h2>
      <div style={styles.links}>
        <Link style={styles.link} to="/upload">Upload CSV</Link>
        <Link style={styles.link} to="/dashboard">Dashboard</Link>
        <Link style={styles.link} to="/">Login</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#1e1e2f",
    color: "white",
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "20px" },
  link: { color: "#fff", textDecoration: "none", fontSize: "16px" },
};

export default Navbar;
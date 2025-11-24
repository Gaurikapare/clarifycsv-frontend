import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #0f4c75, #3282b8)",
        padding: "14px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        fontSize: "18px",
      }}
    >
      <Link
        to="/"
        style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}
      >
        ClarifyCSV Cleaner
      </Link>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/upload" style={linkStyle}>Upload</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/signup" style={linkStyle}>Signup</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
};

export default Navbar;
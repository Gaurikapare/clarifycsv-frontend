import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#f5f5f5" }}>
      <Link style={{ margin: "10px" }} to="/">Signup</Link>
      <Link style={{ margin: "10px" }} to="/login">Login</Link>
      <Link style={{ margin: "10px" }} to="/upload">Upload CSV</Link>
      <Link style={{ margin: "10px" }} to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;

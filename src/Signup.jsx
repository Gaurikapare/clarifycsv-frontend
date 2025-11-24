import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup feature is coming soon!");
  };

  return (
    <div style={card}>
      <h2 style={title}>Create Account</h2>

      <form onSubmit={handleSignup} style={form}>
        <input
          type="text"
          placeholder="Full Name"
          style={input}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input type="email" placeholder="Email" style={input} />
        <input type="password" placeholder="Password" style={input} />

        <button type="submit" style={btn}>
          Signup
        </button>
      </form>
    </div>
  );
};

const card = {
  background: "#ffffff",
  padding: "25px",
  borderRadius: "10px",
  boxShadow: "0px 2px 8px rgba(0,0,0,0.12)",
};

const title = {
  color: "#0f4c75",
  textAlign: "center",
  marginBottom: "20px",
};

const form = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const input = {
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "8px",
};

const btn = {
  padding: "12px",
  background: "linear-gradient(90deg, #0f4c75, #3282b8)",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Signup;
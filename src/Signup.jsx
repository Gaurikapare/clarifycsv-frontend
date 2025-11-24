import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      alert("Signup successful! Redirecting to login...");
      navigate("/login");
    } catch (error) {
      alert("Signup failed, try again!");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Create Account</h2>

      <form 
        onSubmit={handleSignup} 
        style={{
          width: "350px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px" }}
        />

        <button 
          type="submit" 
          style={{
            padding: "12px",
            background: "black",
            color: "white",
            cursor: "pointer"
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
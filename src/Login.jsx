import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const loginUser = () => {
    if (email === "" || pass === "") {
      alert("Please enter email & password!");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <input
        style={styles.input}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={styles.input}
        type="password"
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />

      <button style={styles.btn} onClick={loginUser}>
        Login
      </button>

      <p>
        Don't have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    width: "350px",
    margin: "60px auto",
    padding: "30px",
    borderRadius: "8px",
    background: "#f3f3f3"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "5px",
    border: "1px solid #bbb",
  },
  btn: {
    width: "100%",
    padding: "10px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};

export default Login;

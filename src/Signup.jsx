import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");

  const submitForm = () => {
    alert("Signup successful!");
  };

  return (
    <div style={styles.container}>
      <h2>Create Account</h2>

      <input
        style={styles.input}
        type="text"
        placeholder="Full Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input style={styles.input} type="email" placeholder="Email" />
      <input style={styles.input} type="password" placeholder="Password" />

      <button style={styles.btn} onClick={submitForm}>
        Signup
      </button>

      <p>
        Already have an account? <a href="/">Login</a>
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
    background: "#1e88e5",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }
};

export default Signup;


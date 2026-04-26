// import React from "react";

// const SignIn = () => {
//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1>🔐 Sign In</h1>
//       <p>Sign in to access your account.</p>
//     </div>
//   );
// };

// export default SignIn;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      alert("Sign In Successful!");
      navigate("/admin-dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  // Inline CSS styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5",
    },
    formBox: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px #aaa",
      width: "300px",
    },
    inputField: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    submitButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#4caf50",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    submitButtonHover: {
      backgroundColor: "#45a049",
    },
    errorText: {
      color: "red",
      marginBottom: "10px",
    },
    link: {
      color: "blue",
      cursor: "pointer",
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2>Sign In</h2>
        {error && <p style={styles.errorText}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.inputField}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.inputField}
          />
          <button type="submit" style={styles.submitButton}>
            Sign In
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Don't have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

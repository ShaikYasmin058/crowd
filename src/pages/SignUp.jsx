// import React from "react";

// const SignUp = () => {
//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h2>Sign Up Page</h2>
//       <p>This is a placeholder for the Sign Up page.</p>
//     </div>
//   );
// };

// export default SignUp;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Simple frontend-only validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill all fields!");
      return;
    }

    // Save user locally (optional)
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Account created successfully! Redirecting to Sign In...");

    // Redirect to SignIn after 1.5s
    setTimeout(() => navigate("/signin"), 1500);
  };

  // Styles
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: "20px",
      background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
      fontFamily: "'Poppins', sans-serif",
    },
    formBox: {
      background: "#fff",
      padding: "40px 30px",
      borderRadius: "12px",
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    heading: { fontSize: "28px", color: "#333", marginBottom: "25px" },
    input: {
      width: "100%",
      padding: "14px 12px",
      marginBottom: "20px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "14px",
      borderRadius: "8px",
      border: "none",
      background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
      color: "#fff",
      fontSize: "18px",
      cursor: "pointer",
    },
    message: { fontSize: "14px", marginBottom: "10px" },
    error: { color: "#ff4d4f" },
    success: { color: "#52c41a" },
    redirectText: { fontSize: "14px", marginTop: "15px" },
    link: { color: "#2575fc", cursor: "pointer", fontWeight: "600" },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={styles.heading}>Sign Up</h2>

        {error && <p style={{ ...styles.message, ...styles.error }}>{error}</p>}
        {success && <p style={{ ...styles.message, ...styles.success }}>{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>

        <p style={styles.redirectText}>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/signin")}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

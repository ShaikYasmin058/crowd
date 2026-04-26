// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./App.css";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if email is already registered
//     if (users.some((user) => user.email === email)) {
//       setError("Email already exists! Please use a different one.");
//       return;
//     }

//     // Save new user to localStorage
//     users.push({ email, password });
//     localStorage.setItem("users", JSON.stringify(users));

//     setTimeout(() => {
//       alert("Account Created Successfully! Please Sign In.");
//       navigate("/signin"); // ✅ Redirect to Sign-In Page
//     }, 500);
//   };

//   return (
//     <div className="signin-container">
//       <div className="form-box">
//         <h2>Sign Up</h2>
//         {error && <p className="error-text">{error}</p>}
//         <form onSubmit={handleSignUp}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="input-field"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="input-field"
//           />
//           <button type="submit" className="submit-button">Sign Up</button>
//         </form>
//         <p>
//           Already have an account?{" "}
//           <span className="link" onClick={() => navigate("/signin")}>
//             Sign In
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };








// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SignUp.css"; // Import CSS for styling

// const SignUp = () => {
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); 
//     setSuccess(""); 

//     try {
//       const response = await fetch("http://localhost:5000/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || "Something went wrong!");
//         return;
//       }

//       setSuccess("Account created successfully! Redirecting...");
//       localStorage.setItem("token", data.token);
      
//       setTimeout(() => navigate("/home"), 1500);
//     } catch (error) {
//       setError("Server error! Please try again.");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="form-box">
//         <h2>Sign Up</h2>
        
//         {error && <p className="error-text">{error}</p>}
//         {success && <p className="success-text">{success}</p>}

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="input-field"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="input-field"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="input-field"
//           />

//           <button type="submit" className="submit-button">Sign Up</button>
//         </form>

//         <p className="redirect-text">
//           Already have an account?{" "}
//           <span className="link" onClick={() => navigate("/signin")}>
//             Sign In
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SignUp.css"; // Import CSS for styling

// const SignUp = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); 
//     setSuccess(""); 

//     try {
//       const response = await fetch("http://localhost:5000/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || "Something went wrong!");
//         return;
//       }

//       setSuccess("Account created successfully! Redirecting...");
//       localStorage.setItem("token", data.token);
      
//       setTimeout(() => navigate("/home"), 1500);
//     } catch (error) {
//       setError("Server error! Please try again.");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="form-box">
//         <h2>Sign Up</h2>
        
//         {error && <p className="error-text">{error}</p>}
//         {success && <p className="success-text">{success}</p>}

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="input-field"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="input-field"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="input-field"
//           />

//           <button type="submit" className="submit-button">Sign Up</button>
//         </form>

//         <p className="redirect-text">
//           Already have an account?{" "}
//           <span className="link" onClick={() => navigate("/signin")}>
//             Sign In
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;







/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong!");
        return;
      }

      setSuccess("Account created successfully! Redirecting...");
      localStorage.setItem("token", data.token);

      setTimeout(() => navigate("/home"), 1500);
    } catch (error) {
      setError("Server error! Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="form-box">
        <h2>Sign Up</h2>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field"
          />

          <button type="submit" className="submit-button">Sign Up</button>
        </form>

        <p className="redirect-text">
          {`Already have an account? `}
          <span className="link" onClick={() => navigate("/signin")}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

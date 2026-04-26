// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./App.css";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
  

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if user exists
//     const validUser = users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (validUser) {
//       alert("Sign In Successful!");
//       navigate("/admin-dashboard"); // ✅ Redirect to Admin Dashboard
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="signin-container">
//       <div className="form-box">
//         <h2>Sign In</h2>
//         {error && <p className="error-text">{error}</p>}
//         <form onSubmit={handleSubmit}>
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
//           <button type="submit" className="submit-button">Sign In</button>
//         </form>
//         <p>
//           Don't have an account?{" "}
//           <span className="link" onClick={() => navigate("/signup")}>
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;



// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./App.css";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Get users from localStorage
//     let users = JSON.parse(localStorage.getItem("users")) || [];

//     // Check if user exists
//     const validUser = users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (validUser) {
//       alert("Sign In Successful!");
//       navigate("/admin-dashboard"); // Redirect to Admin Dashboard
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="signin-container">
//       <div className="form-box">
//         <h2>Sign In</h2>
//         {error && <p className="error-text">{error}</p>}

//         <form onSubmit={handleSubmit}>
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

//           <button type="submit" className="submit-button">
//             Sign In
//           </button>
//         </form>

//         <p>
//           {"Don't have an account? "}
//           <span className="link" onClick={() => navigate("/signup")}>
//             Sign Up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignIn;







/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user exists
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      alert("Sign In Successful!");
      navigate("/admin-dashboard"); // Redirect to Admin Dashboard
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="signin-container">
      <div className="form-box">
        <h2>Sign In</h2>
        {error && <p className="error-text">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />

          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>

        <p>
          {`Don't have an account? `}
          <span className="link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

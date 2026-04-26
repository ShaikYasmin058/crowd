
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./About";
// import LearnMore from "./LearnMore";
// import DonatePage from "./DonatePage";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";


// import AdminDashboard from "./pages/AdminDashboard";



// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Authentication Routes */}
//         <Route path="/" element={<SignIn />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />

//         {/* Admin Dashboard */}
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />

//         {/* Other Pages */}
//         <Route path="/about" element={<About />} />
//         <Route path="/learn-more" element={<LearnMore />} />
//         <Route path="/donate" element={<DonatePage />} />
//         <Route path="/add-campaign" element={<h2>Add Campaign Page (Coming Soon)</h2>} />
//         <Route path="/campaign" element={<h2>View Campaign Page (Coming Soon)</h2>} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;



/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import LearnMore from "./LearnMore";
import DonatePage from "./DonatePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/add-campaign" element={<h2>Add Campaign Page (Coming Soon)</h2>} />
        <Route path="/campaign" element={<h2>View Campaign Page (Coming Soon)</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

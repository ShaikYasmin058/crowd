// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";



// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* Add more routes here */}
//       </Routes>
//     </Router>
//   );
// };


// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Contact from "./pages/ContactPage.jsx";
// import SignIn from "./pages/SignIn.jsx";
// import SignUp from "./pages/SignUp.jsx";
// import LearnMore from "./pages/LearnMore.jsx";
// import DonationPage from "./pages/DonationPage.jsx";
// import AdminDashboard from "./pages/AdminDashboard.jsx";

// import EducationPage from "./pages/EducationPage.jsx";





// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/learn-more" element={<LearnMore />} />
//         <Route path="/donate" element={<DonationPage />} />
//          <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/education" element={<EducationPage />} />
       

       
        
        

        
//       </Routes>
//     </Router>
//   );
// }





// export default App;




/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/ContactPage.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import LearnMore from "./pages/LearnMore.jsx";
import DonationPage from "./pages/DonationPage.jsx";
import Campaign from "./Campaign.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import CampaignCreation from "./pages/CampaignCreation.jsx";
import EmailNotifications from "./pages/EmailNotifications.jsx";
import AdminAnalytics from "./pages/AdminAnalytics.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/create-campaign" element={<CampaignCreation />} />
        <Route path="/email-notifications" element={<EmailNotifications />} />
        <Route path="/admin-analytics" element={<AdminAnalytics />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/donate/:id" element={<DonationPage />} />

        {/* Authentication */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

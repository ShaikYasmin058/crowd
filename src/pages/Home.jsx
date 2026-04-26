// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Button from "../components/Button";
// import logo from "../assets/logo.jpeg";
// import "./Home.css";

// const Home = () => {
//   const navigate = useNavigate();
//   const [backendMessage, setBackendMessage] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:5000/")
//       .then((res) => setBackendMessage(res.data))
//       .catch((err) => {
//         console.error("Backend error:", err);
//         setBackendMessage("⚠️ Failed to connect to backend");
//       });
//   }, []);

//   return (
//     <div className="home-container">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo-container">
//           <img src={logo} alt="Helping Hands" className="logo-image" />
//           <div className="logo-text">Crowdfunding</div>
//         </div>
//         <div className="nav-links">
//           <button className="nav-button" onClick={() => navigate("/about")}>About Us</button>
//           <button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</button>
//           <button className="nav-button" onClick={() => navigate("/signin")}>Sign In</button>
//           <button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</button>
//           <button className="nav-button" onClick={() => navigate("/about")}>About Us</button>

//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-box">
//           <h1 className="hero-title">Support Our Cause</h1>
//           <p className="hero-text">
//             Your donation helps us make a difference in the community. Join us in making a change.
//           </p>
//           <p className="status-message">🔗 Backend says: {backendMessage}</p>
//           <div className="action-buttons">
//             <button className="button" onClick={() => navigate("/campaign")}>🎯 View Campaigns</button>
//             <button className="button" onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



// import './Home.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import logo from "../assets/logo.jpeg";

// // Background images stored in public/images/
// const backgroundImages = [
//   "/images/bg1.jpeg",
//   "/images/bg2.jpeg",
//   "/images/bg3.jpeg",
//   "/images/bg4.jpeg",
//   "/images/bg5.jpeg"
// ];

// const Home = () => {
//   const navigate = useNavigate();
//   const [backendMessage, setBackendMessage] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Fetch backend message
//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/")
//       .then((res) => setBackendMessage(res.data))
//       .catch((err) => {
//         console.error("Backend error:", err);
//         setBackendMessage("⚠️ Failed to connect to backend");
//       });
//   }, []);

//   // Slideshow logic
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//     }, 4000); // Change every 4 sec
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="app-container">
//       {/* Background Slideshow */}
//       <div className="slideshow-background">
//         {backgroundImages.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`slide-${index}`}
//             className={`bg-image ${index === currentImageIndex ? "active" : ""}`}
//           />
//         ))}
//       </div>

//       {/* Navigation Bar */}
//       <nav className="navbar">
//         <div className="logo-container">
//           <img src={logo} alt="Helping Hands Logo" className="logo-image" />
//           <h2 className="logo-text">Crowdfunding</h2>
//         </div>
//         <div className="nav-links">
//           <Button className="nav-button" onClick={() => navigate("/about")}>About Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/signin")}>Sign In</Button>
//           <Button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</Button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <h1 className="hero-title">Support Our Cause</h1>
//         <p className="hero-text">
//           Your donation helps us make a difference in the community. Join us in making a change.
//         </p>
//         <p className="backend-status">🔗 Backend says: {backendMessage}</p>
//         <div className="hero-buttons">
//           <Button className="donate-button" onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
//           <Button className="create-campaign-button" onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;




// import './Home.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import logo from "../assets/logo.jpeg";

// // Background slideshow
// const backgroundImages = [
//   "/images/bg1.jpeg",
//   "/images/bg2.jpeg",
//   "/images/bg3.jpeg",
//   "/images/bg4.jpeg",
//   "/images/bg5.jpeg"
// ];

// // Services data
// const services = [
//   { title: "Education", icon: "/icons/education.png" },
//   { title: "Healthy Food", icon: "/icons/food.png" },
//   { title: "Good Health", icon: "/icons/health.png" },
//   { title: "Environment", icon: "/icons/environment.png" },
//   { title: "Pure Water", icon: "/icons/water.png" },
//   { title: "No Poverty", icon: "/icons/poverty.png" },
// ];

// const Home = () => {
//   const navigate = useNavigate();
//   const [backendMessage, setBackendMessage] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Fetch backend welcome message
//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/")
//       .then((res) => setBackendMessage(res.data))
//       .catch(() => setBackendMessage("⚠️ Backend not responding"));
//   }, []);

//   // Slideshow image loop
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="app-container">
//       {/* Background slideshow */}
//       <div className="slideshow-background">
//         {backgroundImages.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`bg-${index}`}
//             className={`bg-image ${index === currentImageIndex ? 'active' : ''}`}
//           />
//         ))}
//       </div>

//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo-container">
//           <img src={logo} alt="Logo" className="logo-image" />
//           <h2 className="logo-text">Crowdfunding</h2>
//         </div>
//         <div className="nav-links">
//           <Button className="nav-button" onClick={() => navigate("/about")}>About Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/signin")}>Sign In</Button>
//           <Button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</Button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <h1 className="hero-title">Support Our Cause</h1>
//         <p className="hero-text">
//           Your donation helps us make a difference in the community.
//         </p>
//         <p className="backend-status">🔗 Backend says: {backendMessage}</p>
//         <div className="hero-buttons">
//           <Button className="donate-button" onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
//           <Button className="create-campaign-button" onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services-section">
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <img src={service.icon} alt={service.title} className="service-icon" />
//               <h3>{service.title}</h3>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };
// {/* Featured Initiatives Section */}
// <section className="initiatives-section">
//   <h2 className="initiatives-heading">
//     <span role="img" aria-label="heart">❤️</span> Help The People
//     <br />
//     <span className="highlight">OUR <span className="red-text">FEATURED</span> INITIATIVES</span>
//   </h2>

//   <div className="initiatives-carousel">
//     {[
//       {
//         img: "/images/food-initiative.jpg",
//         title: "Raise Fund For Clean & Healthy Food.",
//         desc: "Help us provide healthy, sustainable food to children in need."
//       },
//       {
//         img: "/images/education-initiative.jpg",
//         title: "Giving Support For Poor Childs By Good Education.",
//         desc: "Support education for underprivileged kids to build their future."
//       },
//       {
//         img: "/images/health-initiative.jpg",
//         title: "Raise Funds For Good Health Support To Needy.",
//         desc: "Support healthcare initiatives providing basic needs to the elderly."
//       }
//     ].map((item, index) => (
//       <div key={index} className="initiative-card">
//         <img src={item.img} alt={item.title} className="initiative-image" />
//         <h3 className="initiative-title">{item.title}</h3>
//         <p className="initiative-desc">{item.desc}</p>
//       </div>
//     ))}
//   </div>
// </section>


// export default Home;


// import './Home.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import logo from "../assets/logo.jpeg";

// // Background slideshow
// const backgroundImages = [
//   "/images/bg1.jpeg",
//   "/images/bg2.jpeg",
//   "/images/bg3.jpeg",
//   "/images/bg4.jpeg",
//   "/images/bg5.jpeg"
// ];

// // Services data
// const services = [
//   { title: "Education", icon: "/icons/education.png" },
//   { title: "Healthy Food", icon: "/icons/food.png" },
//   { title: "Good Health", icon: "/icons/health.png" },
//   { title: "Environment", icon: "/icons/environment.png" },
//   { title: "Pure Water", icon: "/icons/water.png" },
//   { title: "No Poverty", icon: "/icons/poverty.png" },
// ];

// // Initiatives data
// const initiatives = [
//   {
//     img: "/images/food-initiative.jpg",
//     title: "Raise Fund For Clean & Healthy Food.",
//     desc: "Help us provide healthy, sustainable food to children in need."
//   },
//   {
//     img: "/images/education-initiative.jpg",
//     title: "Giving Support For Poor Childs By Good Education.",
//     desc: "Support education for underprivileged kids to build their future."
//   },
//   {
//     img: "/images/health-initiative.jpg",
//     title: "Raise Funds For Good Health Support To Needy.",
//     desc: "Support healthcare initiatives providing basic needs to the elderly."
//   }
// ];

// const Home = () => {
//   const navigate = useNavigate();
//   const [backendMessage, setBackendMessage] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Fetch backend welcome message
//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/")
//       .then((res) => setBackendMessage(res.data))
//       .catch(() => setBackendMessage("⚠️ Backend not responding"));
//   }, []);

//   // Slideshow image loop
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="app-container">
//       {/* Background slideshow */}
//       <div className="slideshow-background">
//         {backgroundImages.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`bg-${index}`}
//             className={`bg-image ${index === currentImageIndex ? 'active' : ''}`}
//           />
//         ))}
//       </div>

//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo-container">
//           <img src={logo} alt="Logo" className="logo-image" />
//           <h2 className="logo-text">Crowdfunding</h2>
//         </div>
//         <div className="nav-links">
//           <Button className="nav-button" onClick={() => navigate("/about")}>About Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/signin")}>Sign In</Button>
//           <Button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</Button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <h1 className="hero-title">Support Our Cause</h1>
//         <p className="hero-text">
//           Your donation helps us make a difference in the community.
//         </p>
//         <p className="backend-status">🔗 Backend says: {backendMessage}</p>
//         <div className="hero-buttons">
//           <Button className="donate-button" onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
//           <Button className="create-campaign-button" onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services-section">
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <img src={service.icon} alt={service.title} className="service-icon" />
//               <h3>{service.title}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Initiatives Section */}
//       <section className="initiatives-section">
//         <h2 className="initiatives-heading">
//           <span role="img" aria-label="heart">❤️</span> Help The People
//           <br />
//           <span className="highlight">OUR <span className="red-text">FEATURED</span> INITIATIVES</span>
//         </h2>

//         <div className="initiatives-carousel">
//           {initiatives.map((item, index) => (
//             <div key={index} className="initiative-card">
//               <img src={item.img} alt={item.title} className="initiative-image" />
//               <h3 className="initiative-title">{item.title}</h3>
//               <p className="initiative-desc">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;




// Home.jsx
// import './Home.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import logo from "../assets/logo.jpeg";

// // Background slideshow images
// const backgroundImages = [
//   "/images/bg1.jpeg",
//   "/images/bg2.jpeg",
//   "/images/bg3.jpeg",
//   "/images/bg4.jpeg",
//   "/images/bg5.jpeg"
// ];

// // Services data
// const services = [
//   { title: "Education", icon: "/icons/education.png" },
//   { title: "Healthy Food", icon: "/icons/food.png" },
//   { title: "Good Health", icon: "/icons/health.png" },
//   { title: "Environment", icon: "/icons/environment.png" },
//   { title: "Pure Water", icon: "/icons/water.png" },
//   { title: "No Poverty", icon: "/icons/poverty.png" }
// ];

// // Initiatives data with donate links
// const initiatives = [
//   {
//     img: "/images/food-initiative.jpg",
//     title: "Raise Fund For Clean & Healthy Food.",
//     desc: "Help us provide healthy, sustainable food to children in need.",
//     donateLink: "/donate?type=food"
//   },
//   {
//     img: "/images/education-initiative.jpg",
//     title: "Giving Support For Poor Childs By Good Education.",
//     desc: "Support education for underprivileged kids to build their future.",
//     donateLink: "/donate?type=education"
//   },
//   {
//     img: "/images/health-initiative.jpg",
//     title: "Raise Funds For Good Health Support To Needy.",
//     desc: "Support healthcare initiatives providing basic needs to the elderly.",
//     donateLink: "/donate?type=health"
//   }
// ];

// const Home = () => {
//   const navigate = useNavigate();
//   const [backendMessage, setBackendMessage] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Fetch backend welcome message
//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/")
//       .then((res) => setBackendMessage(res.data))
//       .catch(() => setBackendMessage("\u26a0\ufe0f Backend not responding"));
//   }, []);

//   // Slideshow image loop
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Horizontal scroll for initiatives
//   useEffect(() => {
//     const carousel = document.getElementById("carousel");
//     let scrollAmount = 0;

//     const scrollInterval = setInterval(() => {
//       if (carousel) {
//         scrollAmount += 1;
//         carousel.scrollLeft += 1;

//         if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
//           carousel.scrollLeft = 0;
//           scrollAmount = 0;
//         }
//       }
//     }, 20);

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <div className="app-container">
//       {/* Background slideshow */}
//       <div className="slideshow-background">
//         {backgroundImages.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`bg-${index}`}
//             className={`bg-image ${index === currentImageIndex ? 'active' : ''}`}
//           />
//         ))}
//       </div>

//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo-container">
//           <img src={logo} alt="Logo" className="logo-image" />
//           <h2 className="logo-text">Crowdfunding</h2>
//         </div>
//         <div className="nav-links">
//           <Button className="nav-button" onClick={() => navigate("/about")}>About Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/signin")}>Sign In</Button>
//           <Button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</Button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <h1 className="hero-title">Support Our Cause</h1>
//         <p className="hero-text">Your donation helps us make a difference in the community.</p>
//         <p className="backend-status">🔗 Backend says: {backendMessage}</p>
//         <div className="hero-buttons">
//           <Button className="donate-button" onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
//           <Button className="create-campaign-button" onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services-section">
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <img src={service.icon} alt={service.title} className="service-icon" />
//               <h3>{service.title}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Initiatives Section */}
// <section className="initiatives-section">
//   <h2 className="initiatives-heading">
//     ❤️ Help The People
//     <br />
//     <span className="highlight">OUR <span className="red-text">FEATURED</span> INITIATIVES</span>
//   </h2>

//   <div className="initiatives-carousel" id="carousel">
//     {initiatives.map((item, index) => (
//       <div key={index} className="initiative-card">
//         <img src={item.img} alt={item.title} className="initiative-image" />
//         <h3 className="initiative-title">{item.title}</h3>
//         <p className="initiative-desc">{item.desc}</p>
//         <Button
//           className="donate-button"
//           onClick={() => navigate(item.donateLink)}
//         >
//           💖 Donate Now
//         </Button>
//       </div>
//     ))}
//   </div>
// </section>

// {/* Animated Impact Section */}
// <section className="impact-section">
//   <h3 className="impact-subheading">♡ Transformative Stories That Inspire Change</h3>
//   <h2 className="impact-heading">
//     <span className="animated-text">
//       PROVIDING QUALITY <span className="highlight-red">EDUCATION</span>, ESSENTIAL <span className="highlight-red">HEALTHCARE</span>, NUTRITIOUS <span className="highlight-red">FOOD</span>, AND CLEAN <span className="highlight-red">WATER</span> HAS TRANSFORMED COUNTLESS <span className="highlight-red">COMMUNITIES</span> FROM POVERTY TO PROSPERITY
//     </span>
//   </h2>

//   <div className="impact-images">
//     <img src="/images/impact-education.jpg" alt="Education" className="impact-img" />
//     <img src="/images/impact-healthcare.jpg" alt="Healthcare" className="impact-img" />
//     <img src="/images/impact-food.jpg" alt="Food" className="impact-img" />
//   </div>
// </section>
// {/* About Us Section */}
// <section className="about-section">
//   <div className="about-content">
//     <div className="about-left">
//       <h2 className="about-title">About Us</h2>
//       <p className="about-subheading">
//         We've Provided Charity Services To more than <strong>4400 Lives Globally</strong>
//       </p>
//       <p className="about-description">
//         Our charity services have impacted over 4400 lives globally. We provide essential resources such as healthcare, education, food, and clean water to those in need. Through our dedicated efforts and the generous support of our donors, we've been able to create lasting positive change in communities around the world. Our commitment to transparency and efficiency ensures that your contributions directly benefit those who need it most.
//       </p>

//       <ul className="about-list">
//         <li>✔️ Delivering vital supplies</li>
//         <li>✔️ Providing emergency aid</li>
//         <li>✔️ Empowering communities</li>
//         <li>✔️ Building infrastructure</li>
//         <li>✔️ Supporting education</li>
//         <li>✔️ Sustainable development</li>
//         <li>✔️ Global partnerships</li>
//         <li>✔️ International cooperation</li>
//         <li>✔️ Healthcare initiatives</li>
//         <li>✔️ Environmental protection</li>
//       </ul>

//       <div className="about-buttons">
//         <Button className="join-button" onClick={() => navigate("/signup")}>Join Now</Button>
//         <Button className="donate-button" onClick={() => navigate("/donate")}>Donate for Poor People</Button>
//         <Button className="services-button" onClick={() => navigate("/about")}>Best Services</Button>
//       </div>
//     </div>

//     <div className="about-right">
//       <img src="/images/about-charity.jpg" alt="About Charity" className="about-image" />
//     </div>
//   </div>
// </section>
// <section className="best-services-section">
//   <h2 className="section-heading">Best Services</h2>
//   <p className="section-subheading">
//     We Help Providing Essential Services:
//     <br />
//     <strong>Education, Health, Food, Shelter, Water & Environment</strong>
//   </p>

//   <div className="services-grid">
//     {[
//       {
//         title: "Education",
//         tagline: "Empowering Minds, Building Futures - Support",
//         desc: "Education is the foundation of personal & societal development...",
//         img: "/images/service-education.jpg"
//       },
//       {
//         title: "Healthcare",
//         tagline: "Empowering Lives, Enhancing Well-being - Support",
//         desc: "Healthcare is the cornerstone of human well-being...",
//         img: "/images/service-health.jpg"
//       },
//       {
//         title: "Food",
//         tagline: "Nourishing Lives, Building Resilient Communities - Support",
//         desc: "Food is essential for survival and nourishment...",
//         img: "/images/service-food.jpg"
//       },
//       {
//         title: "Shelter",
//         tagline: "Providing Safe and Dignified Living Spaces - Support",
//         desc: "Shelter is a fundamental human right...",
//         img: "/images/service-shelter.jpg"
//       },
//       {
//         title: "Water",
//         tagline: "Access to Clean Water for All - Support",
//         desc: "Water is essential for life...",
//         img: "/images/service-water.jpg"
//       },
//       {
//         title: "Environment",
//         tagline: "Sustaining Our Planet for Future - Support",
//         desc: "The environment sustains all life on Earth...",
//         img: "/images/service-environment.jpg"
//       }
//     ].map((item, idx) => (
//       <div key={idx} className="service-card-grid">
//         <img src={item.img} alt={item.title} className="service-img-grid" />
//         <h3 className="service-title">{item.title}</h3>
//         <p className="service-tagline">{item.tagline}</p>
//         <p className="service-desc">{item.desc}</p>
//       </div>
//     ))}
//   </div>
// </section>
// <section className="donation-box-section">
//   <div className="donation-box">
//     <div className="donation-box-left">
//       <h2>💖 Make a Real Difference</h2>
//       <p>Your donation helps us provide food, education, healthcare, and shelter to the most vulnerable people.</p>
//       <ul>
//         <li>✔️ Transparent & Secure Donations</li>
//         <li>✔️ Directly Impacting Lives</li>
//         <li>✔️ 100% Tax-Exempt Receipts</li>
//       </ul>
//     </div>

//     <div className="donation-box-right">
//       <form className="donation-form">
//         <h3>Donate Now</h3>

//         <label>Amount (INR)</label>
//         <input type="number" placeholder="e.g. 500" required />

//         <label>Full Name*</label>
//         <input type="text" placeholder="Your Full Name" required />

//         <label>Email Address*</label>
//         <input type="email" placeholder="example@email.com" required />

//         <label>Mobile Number*</label>
//         <input type="text" placeholder="WhatsApp Number" required />

//         <label>Citizenship</label>
//         <div className="radio-group">
//           <label><input type="radio" name="citizenship" value="Indian" required /> Indian</label>
//           <label><input type="radio" name="citizenship" value="Foreign" /> Foreign</label>
//         </div>

//         <label>Donation Type</label>
//         <div className="radio-group">
//           <label><input type="radio" name="donationType" value="Once" required /> Once</label>
//           <label><input type="radio" name="donationType" value="Monthly" /> Monthly</label>
//         </div>

//         <button type="submit" className="donate-now-btn">Donate Now ❤️</button>
//       </form>
//     </div>
//   </div>
// </section>


//     </div>
//   );
// };

// export default Home;




// import './Home.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import logo from "../assets/logo.jpeg";

// // Background slideshow images
// const backgroundImages = [
//   "/images/bg1.jpeg",
//   "/images/bg2.jpeg",
//   "/images/bg3.jpeg",
//   "/images/bg4.jpeg",
//   "/images/bg5.jpeg"
// ];

// // Services data
// const services = [
//   { title: "Education", icon: "/icons/education.png" },
//   { title: "Healthy Food", icon: "/icons/food.png" },
//   { title: "Good Health", icon: "/icons/health.png" },
//   { title: "Environment", icon: "/icons/environment.png" },
//   { title: "Pure Water", icon: "/icons/water.png" },
//   { title: "No Poverty", icon: "/icons/poverty.png" }
// ];

// // Initiatives data with donate links
// const initiatives = [
//   {
//     img: "/images/food-initiative.jpg",
//     title: "Raise Fund For Clean & Healthy Food.",
//     desc: "Help us provide healthy, sustainable food to children in need.",
//     donateLink: "/donate?type=food"
//   },
//   {
//     img: "/images/education-initiative.jpg",
//     title: "Giving Support For Poor Childs By Good Education.",
//     desc: "Support education for underprivileged kids to build their future.",
//     donateLink: "/donate?type=education"
//   },
//   {
//     img: "/images/health-initiative.jpg",
//     title: "Raise Funds For Good Health Support To Needy.",
//     desc: "Support healthcare initiatives providing basic needs to the elderly.",
//     donateLink: "/donate?type=health"
//   }
// ];

// const Home = () => {
//   const navigate = useNavigate();
//   const [backendMessage, setBackendMessage] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Fetch backend welcome message
//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/")
//       .then((res) => setBackendMessage(res.data))
//       .catch(() => setBackendMessage("\u26a0\ufe0f Backend not responding"));
//   }, []);

//   // Slideshow image loop
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   // Horizontal scroll for initiatives
//   useEffect(() => {
//     const carousel = document.getElementById("carousel");
//     let scrollAmount = 0;

//     const scrollInterval = setInterval(() => {
//       if (carousel) {
//         scrollAmount += 1;
//         carousel.scrollLeft += 1;

//         if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
//           carousel.scrollLeft = 0;
//           scrollAmount = 0;
//         }
//       }
//     }, 20);

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <div className="app-container">
//       {/* Background slideshow */}
//       <div className="slideshow-background">
//         {backgroundImages.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`bg-${index}`}
//             className={`bg-image ${index === currentImageIndex ? 'active' : ''}`}
//           />
//         ))}
//       </div>

//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo-container">
//           <img src={logo} alt="Logo" className="logo-image" />
//           <h2 className="logo-text">Crowdfunding</h2>
//         </div>
//         <div className="nav-links">
//           <Button className="nav-button" onClick={() => navigate("/about")}>About Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</Button>
//           <Button className="nav-button" onClick={() => navigate("/signin")}>Sign In</Button>
//           <Button className="nav-button" onClick={() => navigate("/signup")}>Sign Up</Button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <h1 className="hero-title">Support Our Cause</h1>
//         <p className="hero-text">Your donation helps us make a difference in the community.</p>
//         <p className="backend-status">🔗 Backend says: {backendMessage}</p>
//         <div className="hero-buttons">
//           <Button className="donate-button" onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
//           <Button className="create-campaign-button" onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services-section">
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <img src={service.icon} alt={service.title} className="service-icon" />
//               <h3>{service.title}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Initiatives Section */}
// <section className="initiatives-section">
//   <h2 className="initiatives-heading">
//     ❤️ Help The People
//     <br />
//     <span className="highlight">OUR <span className="red-text">FEATURED</span> INITIATIVES</span>
//   </h2>

//   <div className="initiatives-carousel" id="carousel">
//     {initiatives.map((item, index) => (
//       <div key={index} className="initiative-card">
//         <img src={item.img} alt={item.title} className="initiative-image" />
//         <h3 className="initiative-title">{item.title}</h3>
//         <p className="initiative-desc">{item.desc}</p>
//         <Button
//           className="donate-button"
//           onClick={() => navigate(item.donateLink)}
//         >
//           💖 Donate Now
//         </Button>
//       </div>
//     ))}
//   </div>
// </section>

// {/* Animated Impact Section */}
// <section className="impact-section">
//   <h3 className="impact-subheading">♡ Transformative Stories That Inspire Change</h3>
//   <h2 className="impact-heading">
//     <span className="animated-text">
//       PROVIDING QUALITY <span className="highlight-red">EDUCATION</span>, ESSENTIAL <span className="highlight-red">HEALTHCARE</span>, NUTRITIOUS <span className="highlight-red">FOOD</span>, AND CLEAN <span className="highlight-red">WATER</span> HAS TRANSFORMED COUNTLESS <span className="highlight-red">COMMUNITIES</span> FROM POVERTY TO PROSPERITY
//     </span>
//   </h2>

//   <div className="impact-images">
//     <img src="/images/impact-education.jpg" alt="Education" className="impact-img" />
//     <img src="/images/impact-healthcare.jpg" alt="Healthcare" className="impact-img" />
//     <img src="/images/impact-food.jpg" alt="Food" className="impact-img" />
//   </div>
// </section>
// {/* About Us Section */}
// <section className="about-section">
//   <div className="about-content">
//     <div className="about-left">
//       <h2 className="about-title">About Us</h2>
//       <p className="about-subheading">
//         We've Provided Charity Services To more than <strong>4400 Lives Globally</strong>
//       </p>
//       <p className="about-description">
//         Our charity services have impacted over 4400 lives globally. We provide essential resources such as healthcare, education, food, and clean water to those in need. Through our dedicated efforts and the generous support of our donors, we've been able to create lasting positive change in communities around the world. Our commitment to transparency and efficiency ensures that your contributions directly benefit those who need it most.
//       </p>

//       <ul className="about-list">
//         <li>✔️ Delivering vital supplies</li>
//         <li>✔️ Providing emergency aid</li>
//         <li>✔️ Empowering communities</li>
//         <li>✔️ Building infrastructure</li>
//         <li>✔️ Supporting education</li>
//         <li>✔️ Sustainable development</li>
//         <li>✔️ Global partnerships</li>
//         <li>✔️ International cooperation</li>
//         <li>✔️ Healthcare initiatives</li>
//         <li>✔️ Environmental protection</li>
//       </ul>

//       <div className="about-buttons">
//         <Button className="join-button" onClick={() => navigate("/signup")}>Join Now</Button>
//         <Button className="donate-button" onClick={() => navigate("/donate")}>Donate for Poor People</Button>
//         <Button className="services-button" onClick={() => navigate("/about")}>Best Services</Button>
//       </div>
//     </div>

//     <div className="about-right">
//       <img src="/images/about-charity.jpg" alt="About Charity" className="about-image" />
//     </div>
//   </div>
// </section>
// <section className="best-services-section">
//   <h2 className="section-heading">Best Services</h2>
//   <p className="section-subheading">
//     We Help Providing Essential Services:
//     <br />
//     <strong>Education, Health, Food, Shelter, Water & Environment</strong>
//   </p>

//   <div className="services-grid">
//     {[
//       {
//         title: "Education",
//         tagline: "Empowering Minds, Building Futures - Support",
//         desc: "Education is the foundation of personal & societal development...",
//         img: "/images/service-education.jpg"
//       },
//       {
//         title: "Healthcare",
//         tagline: "Empowering Lives, Enhancing Well-being - Support",
//         desc: "Healthcare is the cornerstone of human well-being...",
//         img: "/images/service-health.jpg"
//       },
//       {
//         title: "Food",
//         tagline: "Nourishing Lives, Building Resilient Communities - Support",
//         desc: "Food is essential for survival and nourishment...",
//         img: "/images/service-food.jpg"
//       },
//       {
//         title: "Shelter",
//         tagline: "Providing Safe and Dignified Living Spaces - Support",
//         desc: "Shelter is a fundamental human right...",
//         img: "/images/service-shelter.jpg"
//       },
//       {
//         title: "Water",
//         tagline: "Access to Clean Water for All - Support",
//         desc: "Water is essential for life...",
//         img: "/images/service-water.jpg"
//       },
//       {
//         title: "Environment",
//         tagline: "Sustaining Our Planet for Future - Support",
//         desc: "The environment sustains all life on Earth...",
//         img: "/images/service-environment.jpg"
//       }
//     ].map((item, idx) => (
//       <div key={idx} className="service-card-grid">
//         <img src={item.img} alt={item.title} className="service-img-grid" />
//         <h3 className="service-title">{item.title}</h3>
//         <p className="service-tagline">{item.tagline}</p>
//         <p className="service-desc">{item.desc}</p>
//       </div>
//     ))}
//   </div>
// </section>
// {/* ✅ Donation Section - Side by Side like Myna Seva */}
// <section className="donation-wrapper">
//   <div className="donation-left-box">
//     <h3>Select your citizenship:</h3>
//     <label><input type="radio" name="citizenship" value="Indian" /> Indian Citizen</label><br />
//     <label><input type="radio" name="citizenship" value="Foreign" /> Foreign National</label>

//     <h3>Select donation type:</h3>
//     <label><input type="radio" name="donationType" value="Once" /> Donate Once</label><br />
//     <label><input type="radio" name="donationType" value="Monthly" /> Donate Monthly</label>

//     <input type="text" placeholder="Full Name*" />
//     <input type="email" placeholder="Email ID*" />
//     <input type="date" placeholder="Birthdate" />
//     <input type="text" placeholder="Mobile Number*" />
//     <input type="text" placeholder="Enter your PAN Number" />
//     <input type="text" placeholder="Enter your Location" />

//     <div className="preset-amounts">
//       {[100, 500, 1000, 2000, 5000].map((amt) => (
//         <button key={amt} type="button">₹{amt}</button>
//       ))}
//     </div>
//     <input type="number" placeholder="Enter Donation Amount" />
//     <button className="donate-now-btn">Donate Now ❤️</button>
//   </div>

//   <div className="donation-right-box">
//     {/* YouTube Video Embed */}
//     <div className="video-box">
//       <iframe
//         width="100%"
//         height="250"
//         src="https://www.youtube.com/embed/_SAMPLE_VIDEO_ID_" // Replace with actual ID
//         title="Motivational Video"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen
//       ></iframe>
//     </div>

//     {/* Mission & Vision */}
//     <div className="mission-vision-box">
//       <h2>Myna Seva Foundation Mission</h2>
//       <p>The Myna Seva Foundation envisions a world where every individual has access to the resources and opportunities needed to lead a life of dignity, purpose, and fulfillment.</p>

//       <h2>Myna Seva Foundation Vision</h2>
//       <p>We strive to uplift marginalized communities by providing education, health, and sustainable support, fostering independence and a brighter future for all.</p>
//     </div>
//   </div>
// </section>



//     </div>
//   );
// };

// export default Home;







// import './Home.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import logo from "../assets/logo.jpeg";

// const backgroundImages = [
//   "/images/bg1.jpeg",
//   "/images/bg2.jpeg",
//   "/images/bg3.jpeg",
//   "/images/bg4.jpeg",
//   "/images/bg5.jpeg"
// ];

// const services = [
//   { title: "Education", icon: "/icons/education.png" },
//   { title: "Healthy Food", icon: "/icons/food.png" },
//   { title: "Good Health", icon: "/icons/health.png" },
//   { title: "Environment", icon: "/icons/environment.png" },
//   { title: "Pure Water", icon: "/icons/water.png" },
//   { title: "No Poverty", icon: "/icons/poverty.png" }
// ];

// const initiatives = [
//   {
//     img: "/images/food-initiative.jpg",
//     title: "Raise Fund For Clean & Healthy Food.",
//     desc: "Help us provide healthy, sustainable food to children in need.",
//     donateLink: "/donate?type=food"
//   },
//   {
//     img: "/images/education-initiative.jpg",
//     title: "Giving Support For Poor Childs By Good Education.",
//     desc: "Support education for underprivileged kids to build their future.",
//     donateLink: "/donate?type=education"
//   },
//   {
//     img: "/images/health-initiative.jpg",
//     title: "Raise Funds For Good Health Support To Needy.",
//     desc: "Support healthcare initiatives providing basic needs to the elderly.",
//     donateLink: "/donate?type=health"
//   }
// ];

// const Home = () => {
//   const navigate = useNavigate();
//   const [backendMessage, setBackendMessage] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/")
//       .then((res) => setBackendMessage(res.data))
//       .catch(() => setBackendMessage("⚠️ Backend not responding"));
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const carousel = document.getElementById("carousel");
//     let scrollAmount = 0;

//     const scrollInterval = setInterval(() => {
//       if (carousel) {
//         scrollAmount += 1;
//         carousel.scrollLeft += 1;

//         if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
//           carousel.scrollLeft = 0;
//           scrollAmount = 0;
//         }
//       }
//     }, 20);

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <div className="app-container">
//       {/* Background Slideshow */}
//       <div className="slideshow-background">
//         {backgroundImages.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`bg-${index}`}
//             className={`bg-image ${index === currentImageIndex ? 'active' : ''}`}
//           />
//         ))}
//       </div>

//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo-container">
//           <img src={logo} alt="Logo" className="logo-image" />
//           <h2 className="logo-text">Crowdfunding</h2>
//         </div>
//         <div className="nav-links">
//           <Button onClick={() => navigate("/about")}>About Us</Button>
//           <Button onClick={() => navigate("/contact")}>Contact Us</Button>
//           <Button onClick={() => navigate("/signin")}>Sign In</Button>
//           <Button onClick={() => navigate("/signup")}>Sign Up</Button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <h1 className="hero-title">Support Our Cause</h1>
//         <p className="hero-text">Your donation helps us make a difference in the community.</p>
//         <p className="backend-status">🔗 Backend says: {backendMessage}</p>
//         <div className="hero-buttons">
//           <Button onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
//           <Button onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services-section">
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <img src={service.icon} alt={service.title} className="service-icon" />
//               <h3>{service.title}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Initiatives Section */}
//       <section className="initiatives-section">
//         <h2 className="initiatives-heading">❤️ Help The People</h2>
//         <div className="initiatives-carousel" id="carousel">
//           {initiatives.map((item, index) => (
//             <div key={index} className="initiative-card">
//               <img src={item.img} alt={item.title} />
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//               <Button onClick={() => navigate(item.donateLink)}>💖 Donate Now</Button>
//             </div>
//           ))}
//         </div>
//       </section>
      
// <section className="donation-video-section">
//   {/* Left: Donation Form */}
//   <div className="donation-form-side">
//     <h3>Select your citizenship:</h3>
//     <label><input type="radio" name="citizen" /> Indian Citizen</label><br />
//     <label><input type="radio" name="citizen" /> Foreign National</label>

//     <h3>Select donation type:</h3>
//     <label><input type="radio" name="donationType" /> Donate Once</label><br />
//     <label><input type="radio" name="donationType" /> Donate Monthly</label>

//     <label>Full Name*</label>
//     <input type="text" placeholder="Your Full Name" />

//     <label>Email ID*</label>
//     <input type="email" placeholder="you@example.com" />

//     <label>Birthdate</label>
//     <input type="date" />

//     <label>Mobile Number*</label>
//     <input type="text" placeholder="WhatsApp Number" />

//     <label>Enter your PAN Number</label>
//     <input type="text" placeholder="ABCDE1234F" />

//     <label>Enter your Location</label>
//     <input type="text" placeholder="City, State" />

//     <button className="donate-now-btn">Donate Now ❤️</button>
//   </div>

//   {/* Right: YouTube Video + Mission Text */}
//   <div className="donation-video-side">
//     <div className="video-wrapper">
//       <iframe
//         width="100%"
//         height="300"
//         src="https://www.youtube.com/embed/YourVideoIDHere"
//         title="Myna Seva Foundation Video"
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//     </div>
//     <h2 className="mission-heading">Myna Seva Foundation Mission</h2>
//     <p className="mission-paragraph">
//       The Myna Seva Foundation envisions a world where every individual, regardless of their background or circumstances, has access to the resources, opportunities, and support needed to lead a life of dignity, purpose, and fulfillment. Our vision is rooted in the belief that every person deserves the chance to thrive, and we are committed to creating a brighter future for all.
//     </p>
//   </div>
// </section>



//     </div>
//   );
// };

// export default Home;








// import './Home.css';
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Button from "../components/Button";
// import logo from "../assets/logo.jpeg";

// const backgroundImages = [
//   "/images/bg1.jpeg",
//   "/images/bg2.jpeg",
//   "/images/bg3.jpeg",
//   "/images/bg4.jpeg",
//   "/images/bg5.jpeg"
// ];

// const services = [
//   // { title: "Education", icon: "/images.jpeg" },
// //  { title: "Education", icon: "/img3.peg" },
//  { title: "Education", icon: "/img5.jpeg" },


//   { title: "Good Food", icon: "/img2.png" },
//    { title: "Healthy Food", icon: "/img6.png" },
//     { title: "Environment", icon: "/img7.jpeg" },
//     { title: "Pure Water", icon: "/img9.jpeg" },
  
//   { title: "No Poverty", icon: "/img10.png" }
// ];

// const initiatives = [
//   {
//     img: "/images/bg3.jpeg",

//     title: "Education",
//     desc: "Help kids get access to quality education.",
//     donateLink: "/donate?type=education"
//   },
//   {
//     img: "/images/bg4.jpeg",
//     title: "Healthy Food",
//     desc: "Provide clean and healthy food to the poor.",
//     donateLink: "/donate?type=food"
//   },
//   {
//     img: "/images/bg10.jpeg",
//     title: "Good Health",
//     desc: "Support health checkups and treatment.",
//     donateLink: "/donate?type=health"
//   },
//   {
//     img: "/images/bg5.jpeg",
//     title: "Environment",
//     desc: "Protect and preserve the natural world.",
//     donateLink: "/donate?type=environment"
//   },
//   {
//     img: "/images/pure-water.jpg",
//     title: "Pure Water",
//     desc: "Bring clean water to rural communities.",
//     donateLink: "/donate?type=water"
//   },
//   {
//     img: "/images/poverty-initiative.jpg",
//     title: "No Poverty",
//     desc: "Help families come out of extreme poverty.",
//     donateLink: "/donate?type=poverty"
//   }
// ];


// const Home = () => {
//   const navigate = useNavigate();
//   const [backendMessage, setBackendMessage] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [donationAmount, setDonationAmount] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/")
//       .then((res) => setBackendMessage(res.data))
//       .catch(() => setBackendMessage("⚠️ Backend not responding"));
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const carousel = document.getElementById("carousel");
//     let scrollAmount = 0;

//     const scrollInterval = setInterval(() => {
//       if (carousel) {
//         scrollAmount += 1;
//         carousel.scrollLeft += 1;

//         if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
//           carousel.scrollLeft = 0;
//           scrollAmount = 0;
//         }
//       }
//     }, 20);

//     return () => clearInterval(scrollInterval);
//   }, []);

//   const handlePresetClick = (amount) => {
//     setDonationAmount(amount);
//   };

//   return (
//     <div className="app-container">
//       <div className="slideshow-background">
//         {backgroundImages.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`bg-${index}`}
//             className={`bg-image ${index === currentImageIndex ? 'active' : ''}`}
//           />
//         ))}
//       </div>

//       <nav className="navbar">
//         <div className="logo-container">
//           <img src={logo} alt="Logo" className="logo-image" />
//           <h2 className="logo-text">Crowdfunding</h2>
//         </div>
//         <div className="nav-links">
//           <Button onClick={() => navigate("/about")}>About Us</Button>
//           <Button onClick={() => navigate("/contact")}>Contact Us</Button>
//           <Button onClick={() => navigate("/signin")}>Sign In</Button>
//           <Button onClick={() => navigate("/signup")}>Sign Up</Button>
//           <Button className="donate-button" onClick={() => navigate("/donate")}>Donate</Button>

          
//         </div>
//       </nav>

//       <section className="hero">
//         <h1 className="hero-title">Support Our Cause</h1>
//         <p className="hero-text">Your donation helps us make a difference in the community.</p>
//         <p className="backend-status">🔗 Backend says: {backendMessage}</p>
//         <div className="hero-buttons">
//           <Button onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
//           <Button onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
//         </div>
//       </section>

//       <section className="services-section">
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <img src={service.icon} alt={service.title} className="service-icon" />
//               <h3>{service.title}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="initiatives-section">
//         <h2 className="initiatives-heading">❤️ Help The People</h2>
//         <div className="initiatives-carousel" id="carousel">
//           {initiatives.map((item, index) => (
//             <div key={index} className="initiative-card">
//               <img src={item.img} alt={item.title} />
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//               <Button onClick={() => navigate(item.donateLink)}>💖 Donate Now</Button>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="donation-wrapper">
//         <div className="donation-left-box">
//           <h2>Support Our Mission</h2>
//           <p>
//             Your generous donation helps us provide essential resources, support, and opportunities to those in need.
//             Together, we can create lasting positive change in our community. A life not lived with others is not a life.
//             Do not wait for leaders; do it alone person to person.
//           </p>

//           <button className="fundraiser-btn">
//             Start Your Fundraise Heartfeltly Help Ever Hurt Never
//           </button>

//           <div className="preset-amounts">
//             {[100, 500, 1000, 2000, 5000].map((amt, i) => (
//               <button
//                 key={amt}
//                 className={`preset-btn preset-${i}`}
//                 onClick={() => handlePresetClick(amt)}
//               >
//                 ₹{amt}
//               </button>
//             ))}
//           </div>

//           <input
//             type="number"
//             className="donation-input"
//             placeholder="Enter Donation Amount"
//             value={donationAmount}
//             onChange={(e) => setDonationAmount(e.target.value)}
//           />

//           <Button
//   className="donate-button"
//   onClick={() =>
//     navigate("/donate", {
//       state: {
//         title: "General Donation",
//         description: "Support our mission with a contribution of your choice.",
//         image:
//           "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//         amount: ""
//       }
//     })
//   }
// >
//   Donate
// </Button>


//         </div>

//         <div className="donation-right-box">
//           <div className="video-box">
//             <iframe
//               width="100%"
//               height="250"
//               src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
//               title="Myna Seva Foundation Video"
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//           </div>

//           <div className="mission-vision-box">
//             <h2>Myna Seva Foundation Mission</h2>
//             <p>The Myna Seva Foundation envisions a world where every individual has access to the resources and opportunities needed to lead a life of dignity, purpose, and fulfillment.</p>

//             <h2>Myna Seva Foundation Vision</h2>
//             <p>We strive to uplift marginalized communities by providing education, health, and sustainable support, fostering independence and a brighter future for all.</p>
//           </div>
          
//         </div>

//       </section>
//     </div>
//   );
// };

// export default Home;













import './Home.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import logo from "../assets/logo.jpeg";

const backgroundImages = [
  "/images/bg1.jpeg",
  "/images/bg2.jpeg",
  "/images/bg3.jpeg",
  "/images/bg4.jpeg",
  "/images/bg5.jpeg"
];

const services = [
  { title: "Education", icon: "/img5.jpeg" },
  { title: "Good Food", icon: "/img2.png" },
  { title: "Healthy Food", icon: "/img6.png" },
  { title: "Environment", icon: "/img7.jpeg" },
  { title: "Pure Water", icon: "/img9.jpeg" },
  { title: "No Poverty", icon: "/img10.png" }
];

const initiatives = [
  {
    img: "/images/bg3.jpeg",
    title: "Education",
    desc: "Help kids get access to quality education.",
    donateLink: "/donate?type=education"
  },
  {
    img: "/images/bg4.jpeg",
    title: "Healthy Food",
    desc: "Provide clean and healthy food to the poor.",
    donateLink: "/donate?type=food"
  },
  {
    img: "/images/bg10.jpeg",
    title: "Good Health",
    desc: "Support health checkups and treatment.",
    donateLink: "/donate?type=health"
  },
  {
    img: "/images/bg5.jpeg",
    title: "Environment",
    desc: "Protect and preserve the natural world.",
    donateLink: "/donate?type=environment"
  },
  {
    img: "/images/pure-water.jpg",
    title: "Pure Water",
    desc: "Bring clean water to rural communities.",
    donateLink: "/donate?type=water"
  },
  {
    img: "/images/poverty-initiative.jpg",
    title: "No Poverty",
    desc: "Help families come out of extreme poverty.",
    donateLink: "/donate?type=poverty"
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [backendMessage, setBackendMessage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [donationAmount, setDonationAmount] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5001/")
      .then((res) => setBackendMessage(res.data))
      .catch(() => setBackendMessage("⚠️ Backend not responding"));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const carousel = document.getElementById("carousel");
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (carousel) {
        scrollAmount += 1;
        carousel.scrollLeft += 1;

        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  const handlePresetClick = (amount) => {
    setDonationAmount(amount);
  };

  return (
    <div className="app-container">
      <div className="slideshow-background">
        {backgroundImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`bg-${index}`}
            className={`bg-image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-image" />
          <h2 className="logo-text">Crowdfunding</h2>
        </div>
        <div className="nav-links">
          <Button onClick={() => navigate("/search")}>🔍 Search</Button>
          <Button onClick={() => navigate("/campaign")}>🎯 Campaigns</Button>
          <Button onClick={() => navigate("/dashboard")}>📊 Dashboard</Button>
          <Button onClick={() => navigate("/about")}>About Us</Button>
          <Button onClick={() => navigate("/contact")}>Contact Us</Button>
          <Button onClick={() => navigate("/signin")}>Sign In</Button>
          <Button onClick={() => navigate("/signup")}>Sign Up</Button>
          <Button className="donate-button" onClick={() => navigate("/donate")}>Donate</Button>
        </div>
      </nav>

      <section className="hero">
        <h1 className="hero-title">Support Our Cause</h1>
        <p className="hero-text">Your donation helps us make a difference in the community.</p>
        <p className="backend-status">🔗 Backend says: {backendMessage}</p>
        <div className="hero-buttons">
          <Button onClick={() => navigate("/campaign")}>🎯 View Campaigns</Button>
          <Button onClick={() => navigate("/add-campaign")}>🚀 Create Campaign</Button>
        </div>
      </section>

      {/* ✅ Updated services section with Education card navigation */}
      <section className="services-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              onClick={() => {
                if (service.title === "Education") {
                  navigate("/education");
                }
              }}
            >
              <img src={service.icon} alt={service.title} className="service-icon" />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="initiatives-section">
        <h2 className="initiatives-heading">❤️ Help The People</h2>
        <div className="initiatives-carousel" id="carousel">
          {initiatives.map((item, index) => (
            <div key={index} className="initiative-card">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Button onClick={() => navigate(item.donateLink)}>💖 Donate Now</Button>
            </div>
          ))}
        </div>
      </section>

      <section className="donation-wrapper">
        <div className="donation-left-box">
          <h2>Support Our Mission</h2>
          <p>
            Your generous donation helps us provide essential resources, support, and opportunities to those in need.
            Together, we can create lasting positive change in our community. A life not lived with others is not a life.
            Do not wait for leaders; do it alone person to person.
          </p>

          <button className="fundraiser-btn">
            Start Your Fundraise Heartfeltly Help Ever Hurt Never
          </button>

          <div className="preset-amounts">
            {[100, 500, 1000, 2000, 5000].map((amt, i) => (
              <button
                key={amt}
                className={`preset-btn preset-${i}`}
                onClick={() => handlePresetClick(amt)}
              >
                ₹{amt}
              </button>
            ))}
          </div>

          <input
            type="number"
            className="donation-input"
            placeholder="Enter Donation Amount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
          />

          <Button
            className="donate-button"
            onClick={() =>
              navigate("/donate", {
                state: {
                  title: "General Donation",
                  description: "Support our mission with a contribution of your choice.",
                  image:
                    "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                  amount: ""
                }
              })
            }
          >
            Donate
          </Button>
        </div>

        <div className="donation-right-box">
          <div className="video-box">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Myna Seva Foundation Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mission-vision-box">
            <h2>Myna Seva Foundation Mission</h2>
            <p>The Myna Seva Foundation envisions a world where every individual has access to the resources and opportunities needed to lead a life of dignity, purpose, and fulfillment.</p>

            <h2>Myna Seva Foundation Vision</h2>
            <p>We strive to uplift marginalized communities by providing education, health, and sustainable support, fostering independence and a brighter future for all.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

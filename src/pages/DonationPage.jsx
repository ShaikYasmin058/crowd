// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./DonationPage.css";

// const DonationPage = () => {
//   const location = useLocation();

//   const defaultCampaign = {
//     title: "Support Our Cause",
//     description:
//       "Every donation counts and helps us serve those in need. Your contribution helps us continue our mission of education, food, and care.",
//     image:
//       "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     amount: "",
//   };

//   const campaign = location.state || defaultCampaign;

//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState(campaign.amount || "");
//   const [paymentMethod, setPaymentMethod] = useState("PhonePe");
//   const [donations, setDonations] = useState([]);

//   const handleDonate = async () => {
//     if (!name.trim() || amount <= 0) {
//       alert("Please enter a valid name and donation amount.");
//       return;
//     }
//    fetch("http://localhost:5001/initiate-payment", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name,
//     amount,
//     paymentMethod,
//     campaignTitle: campaign.title,

//   }),
// })
//   .then(res => res.json())
//   .then(data => {
//     if (data.success) {
//       window.location.href = data.redirectUrl; // Open UPI payment
//     } else {
//       alert("Failed to initiate donation.");
//     }
//   })
//   .catch(err => {
//     console.error(err);
//     alert("Server error!");
//   });

//     // Save donation in frontend history
//     const newDonation = {
//       id: donations.length + 1,
//       name,
//       amount,
//       paymentMethod,
//       date: new Date().toLocaleString(),
//     };
//     setDonations([...donations, newDonation]);

//     try {
//       const response = await fetch("http://localhost:5001/initiate-payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           amount,
//           paymentMethod,
//           campaignTitle: campaign.title,
//         }),
//       });

//       const data = await response.json();

//       if (data.redirectUrl) {
//         // Redirect to PhonePe gateway
//         window.location.href = data.redirectUrl;
//       } else {
//         alert("⚠️ Failed to create payment session.");
//       }
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("⚠️ Payment initiation failed. Please try again.");
//     }

//     // Reset form
//     setName("");
//     setAmount(campaign.amount || "");
//     setPaymentMethod("PhonePe");
//   };

//   return (
//     <div className="donation-page">
//       <div className="donation-content">
//         <div className="donation-info">
//           <h1 className="donation-title">{campaign.title}</h1>
//           <p className="donation-description">{campaign.description}</p>

//           <div className="donation-form">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Donation Amount (₹)"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             >
//               <option disabled>Select Payment Method</option>
//               <option value="PhonePe">PhonePe</option>
//               <option value="Google Pay">Google Pay</option>
//               <option value="PayPal">PayPal</option>
//             </select>

//             <button className="donate-button" onClick={handleDonate}>
//               Donate Now ❤️
//             </button>
//           </div>
//         </div>

//         <div className="donation-image-container">
//           <img
//             className="donation-image"
//             src={campaign.image}
//             alt={campaign.title}
//           />
//         </div>
//       </div>

//       {donations.length > 0 && (
//         <div className="donation-history">
//           <h2>Recent Donations</h2>
//           <ul>
//             {donations.map((donation) => (
//               <li key={donation.id}>
//                 <strong>{donation.name}</strong> donated{" "}
//                 <span className="donation-amount">₹{donation.amount}</span> via{" "}
//                 <span className="payment-method">{donation.paymentMethod}</span> on{" "}
//                 {donation.date}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DonationPage;



// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./DonationPage.css";

// const DonationPage = () => {
//   const location = useLocation();

//   const defaultCampaign = {
//     title: "Support Our Cause",
//     description:
//       "Every donation counts and helps us serve those in need. Your contribution helps us continue our mission of education, food, and care.",
//     image:
//       "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     amount: "",
//   };

//   const campaign = location.state || defaultCampaign;

//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState(campaign.amount || "");
//   const [paymentMethod, setPaymentMethod] = useState("PhonePe");
//   const [donations, setDonations] = useState([]);

//   const handleDonate = async () => {
//     if (!name.trim() || amount <= 0) {
//       alert("Please enter a valid name and donation amount.");
//       return;
//     }

//     // Save to local frontend history (optional)
//     const newDonation = {
//       id: donations.length + 1,
//       name,
//       amount,
//       paymentMethod,
//       date: new Date().toLocaleString(),
//     };
//     setDonations([...donations, newDonation]);

//     try {
//       const response = await fetch("http://localhost:5001/initiate-payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           amount,
//           paymentMethod,
//           campaignTitle: campaign.title,
//         }),
//       });

//       const data = await response.json();

//       if (data.redirectUrl) {
//         window.location.href = data.redirectUrl;
//       } else {
//         alert("⚠️ Failed to create payment session.");
//       }
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("⚠️ Payment initiation failed. Please try again.");
//     }

//     // Reset form fields
//     setName("");
//     setAmount(campaign.amount || "");
//     setPaymentMethod("PhonePe");
//   };

//   return (
//     <div className="donation-page">
//       <div className="donation-content">
//         <div className="donation-info">
//           <h1 className="donation-title">{campaign.title}</h1>
//           <p className="donation-description">{campaign.description}</p>

//           <div className="donation-form">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Donation Amount (₹)"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             >
//               <option value="PhonePe">PhonePe</option>
//               <option value="Google Pay">Google Pay</option>
//               <option value="PayPal">PayPal</option>
//             </select>

//             <button className="donate-button" onClick={handleDonate}>
//               Donate Now ❤️
//             </button>
//           </div>
//         </div>

//         <div className="donation-image-container">
//           <img
//             className="donation-image"
//             src={campaign.image}
//             alt={campaign.title}
//           />
//         </div>
//       </div>

//       {donations.length > 0 && (
//         <div className="donation-history">
//           <h2>Recent Donations</h2>
//           <ul>
//             {donations.map((donation) => (
//               <li key={donation.id}>
//                 <strong>{donation.name}</strong> donated{" "}
//                 <span className="donation-amount">₹{donation.amount}</span> via{" "}
//                 <span className="payment-method">{donation.paymentMethod}</span> on{" "}
//                 {donation.date}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DonationPage;


















// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./DonationPage.css";

// const DonationPage = () => {
//   const location = useLocation();

//   const defaultCampaign = {
//     title: "Support Our Cause",
//     description:
//       "Every donation counts and helps us serve those in need. Your contribution helps us continue our mission of education, food, and care.",
//     image:
//       "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     amount: "",
//   };

//   const campaign = location.state || defaultCampaign;

//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState(campaign.amount || "");
//   const [paymentMethod, setPaymentMethod] = useState("PhonePe");
//   const [donations, setDonations] = useState([]);

//   const handleDonate = async () => {
//     if (!name.trim() || amount <= 0) {
//       alert("Please enter a valid name and donation amount.");
//       return;
//     }

//     const newDonation = {
//       id: donations.length + 1,
//       name,
//       amount,
//       paymentMethod,
//       date: new Date().toLocaleString(),
//     };
//     setDonations([...donations, newDonation]);

//     try {
//       const response = await fetch("http://localhost:5001/initiate-payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           amount,
//           paymentMethod,
//           campaignTitle: campaign.title,
//         }),
//       });

//       const data = await response.json();

//       if (data.redirectUrl) {
//         window.location.href = data.redirectUrl;
//       } else {
//         alert("⚠️ Failed to create payment session.");
//       }
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("⚠️ Payment initiation failed. Please try again.");
//     }

//     setName("");
//     setAmount(campaign.amount || "");
//     setPaymentMethod("PhonePe");
//   };

//   return (
//     <div className="donation-page">
//       <div className="donation-content">
//         <div className="donation-info">
//           <h1 className="donation-title">{campaign.title}</h1>
//           <p className="donation-description">{campaign.description}</p>

//           <div className="donation-form">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Donation Amount (₹)"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             >
//               <option value="PhonePe">PhonePe</option>
//               <option value="Google Pay">Google Pay</option>
//               <option value="PayPal">PayPal</option>
//             </select>

//             <button className="donate-button" onClick={handleDonate}>
//               Donate Now ❤️
//             </button>

//             {/* QR Code section */}
//             <div className="upi-qr-code" style={{ textAlign: "center", marginTop: "20px" }}>
//               <h3 style={{ color: "#673ab7", fontWeight: "bold", marginBottom: "10px" }}>
//                 Or Scan & Pay via PhonePe
//               </h3>
//               <img
//                 src="/phonepe_qr.png"
//                 alt="PhonePe QR Code"
//                 style={{
//                   width: "180px",
//                   height: "auto",
//                   marginBottom: "8px",
//                   borderRadius: "8px",
//                   border: "1px solid #ccc",
//                 }}
//               />
//               <p style={{ fontSize: "12px", color: "#888" }}>
//                 Linked to number ending in 8434
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="donation-image-container">
//           <img
//             className="donation-image"
//             src={campaign.image}
//             alt={campaign.title}
//           />
//         </div>
//       </div>

//       {donations.length > 0 && (
//         <div className="donation-history">
//           <h2>Recent Donations</h2>
//           <ul>
//             {donations.map((donation) => (
//               <li key={donation.id}>
//                 <strong>{donation.name}</strong> donated{" "}
//                 <span className="donation-amount">₹{donation.amount}</span> via{" "}
//                 <span className="payment-method">{donation.paymentMethod}</span> on{" "}
//                 {donation.date}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DonationPage;












// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./DonationPage.css";

// const DonationPage = () => {
//   const location = useLocation();

//   const defaultCampaign = {
//     title: "Support Our Cause",
//     description:
//       "Every donation counts and helps us serve those in need. Your contribution helps us continue our mission of education, food, and care.",
//     image:
//       "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     amount: "",
//   };

//   const campaign = location.state || defaultCampaign;

//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState(campaign.amount || "");
//   const [paymentMethod, setPaymentMethod] = useState("PhonePe");
//   const [donations, setDonations] = useState([]);

//   const handleDonate = async () => {
//     if (!name.trim() || amount <= 0) {
//       alert("Please enter a valid name and donation amount.");
//       return;
//     }

//     // Save to local frontend history (optional)
//     const newDonation = {
//       id: donations.length + 1,
//       name,
//       amount,
//       paymentMethod,
//       date: new Date().toLocaleString(),
//     };
//     setDonations([...donations, newDonation]);

//     try {
//       // const response = await fetch("http://localhost:5001/initiate-payment", {
//       const response = await fetch("http://localhost:5001/initiate-payment", {
      
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           amount,
//           paymentMethod,
//           campaignTitle: campaign.title,
//         }),
//       });

//       const data = await response.json();

//       if (data.redirectUrl) {
//         window.location.href = data.redirectUrl;
//       } else {
//         alert("⚠️ Failed to create payment session.");
//       }
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("⚠️ Payment initiation failed. Please try again.");
//     }

//     // Reset form fields
//     setName("");
//     setAmount(campaign.amount || "");
//     setPaymentMethod("PhonePe");
//   };

//   return (
//     <div className="donation-page">
//       <div className="donation-content">
//         <div className="donation-info">
//           <h1 className="donation-title">{campaign.title}</h1>
//           <p className="donation-description">{campaign.description}</p>

//           <div className="donation-form">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Donation Amount (₹)"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             >
//               <option value="PhonePe">PhonePe</option>
//               <option value="Google Pay">Google Pay</option>
//               <option value="PayPal">PayPal</option>
//             </select>

//             <button className="donate-button" onClick={handleDonate}>
//               Donate Now ❤️
//             </button>
//           </div>
//         </div>

//         <div className="donation-image-container">
//           <img
//             className="donation-image"
//             src={campaign.image}
//             alt={campaign.title}
//           />
//         </div>
//       </div>

//       {donations.length > 0 && (
//         <div className="donation-history">
//           <h2>Recent Donations</h2>
//           <ul>
//             {donations.map((donation) => (
//               <li key={donation.id}>
//                 <strong>{donation.name}</strong> donated{" "}
//                 <span className="donation-amount">₹{donation.amount}</span> via{" "}
//                 <span className="payment-method">{donation.paymentMethod}</span> on{" "}
//                 {donation.date}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DonationPage;









// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./DonationPage.css";

// const DonationPage = () => {
//   const location = useLocation();

//   const defaultCampaign = {
//     title: "Support Our Cause",
//     description:
//       "Every donation counts and helps us serve those in need. Your contribution helps us continue our mission of education, food, and care.",
//     image:
//       "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//     amount: "",
//   };

//   const campaign = location.state || defaultCampaign;

//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState(campaign.amount || "");
//   const [paymentMethod, setPaymentMethod] = useState("PhonePe");
//   const [donations, setDonations] = useState([]);

//   const handleDonate = async () => {
//     if (!name.trim() || amount <= 0) {
//       alert("Please enter a valid name and donation amount.");
//       return;
//     }

//     // Local display history (optional)
//     const newDonation = {
//       id: donations.length + 1,
//       name,
//       amount,
//       paymentMethod,
//       date: new Date().toLocaleString(),
//     };
//     setDonations([...donations, newDonation]);

//     try {
//       // ✅ Correct console.log outside fetch
//       console.log("Calling URL:", "http://localhost:5001/initiate-payment");

//       const response = await fetch("http://localhost:5001/initiate-payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           amount,
//           paymentMethod,
//           campaignTitle: campaign.title,
//         }),
//       });

//       const data = await response.json();

//       if (data.success && data.redirectUrl) {
//         window.location.href = data.redirectUrl;
//       } else {
//         alert("⚠️ Failed to create payment session.");
//       }
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("⚠️ Payment initiation failed. Please try again.");
//     }

//     // Reset fields after donation
//     setName("");
//     setAmount(campaign.amount || "");
//     setPaymentMethod("PhonePe");
//   };

//   return (
//     <div className="donation-page">
//       <div className="donation-content">
//         <div className="donation-info">
//           <h1 className="donation-title">{campaign.title}</h1>
//           <p className="donation-description">{campaign.description}</p>

//           <div className="donation-form">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Donation Amount (₹)"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//             />
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             >
//               <option value="PhonePe">PhonePe</option>
//               <option value="Google Pay">Google Pay</option>
//               <option value="PayPal">PayPal</option>
//             </select>

//             <button className="donate-button" onClick={handleDonate}>
//               Donate Now ❤️
//             </button>
//           </div>
//         </div>

//         <div className="donation-image-container">
//           <img
//             className="donation-image"
//             src={campaign.image}
//             alt={campaign.title}
//           />
//         </div>
//       </div>

//       {donations.length > 0 && (
//         <div className="donation-history">
//           <h2>Recent Donations</h2>
//           <ul>
//             {donations.map((donation) => (
//               <li key={donation.id}>
//                 <strong>{donation.name}</strong> donated{" "}
//                 <span className="donation-amount">₹{donation.amount}</span> via{" "}
//                 <span className="payment-method">{donation.paymentMethod}</span> on{" "}
//                 {donation.date}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DonationPage;








// import "./DonationPage.css";


// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "./DonationPage.css";

// const DonationPage = () => {
//   const location = useLocation();

//   const defaultCampaign = {
//     title: "Support Our Cause",
//     description: "Your help matters. Join us in this mission!",
//     image: "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg",
//     amount: "",
//   };

//   const campaign = location.state || defaultCampaign;

//   const [name, setName] = useState("");
//   const [amount, setAmount] = useState(campaign.amount || "");
//   const [paymentMethod, setPaymentMethod] = useState("PhonePe");
//   const [donations, setDonations] = useState([]);

//   const handleDonate = async () => {
//     if (!name.trim() || amount <= 0) {
//       alert("Please enter valid name and amount.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5001/api/donations/initiate-payment", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name,
//           amount,
//           paymentMethod,
//           campaignTitle: campaign.title,
//         }),
//       });

//       const data = await response.json();
//       console.log("Payment response:", data);

//       if (data.success && data.redirectUrl) {
//         setDonations((prev) => [
//           ...prev,
//           {
//             id: prev.length + 1,
//             name,
//             amount,
//             paymentMethod,
//             date: new Date().toLocaleString(),
//           },
//         ]);
//         window.location.href = data.redirectUrl; // optional redirect
//       } else {
//         alert("⚠️ Payment failed.");
//       }
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("⚠️ Payment initiation failed.");
//     }

//     setName("");
//     setAmount("");
//     setPaymentMethod("PhonePe");
//   };

//   return (
//     <div className="donation-page">
//       <div className="donation-content">
//         <div className="donation-info">
//           <h1>{campaign.title}</h1>
//           <p>{campaign.description}</p>

//           <div className="donation-form">
//             <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
//             <input type="number" placeholder="Donation Amount (₹)" value={amount} onChange={(e) => setAmount(e.target.value)} />
//             <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
//               <option value="PhonePe">PhonePe</option>
//               <option value="Google Pay">Google Pay</option>
//               <option value="PayPal">PayPal</option>
//             </select>
//             <button onClick={handleDonate}>Donate Now ❤️</button>
//           </div>
//         </div>

//         <div className="donation-image-container">
//           <img src={campaign.image} alt={campaign.title} />
//         </div>
//       </div>

//       {donations.length > 0 && (
//         <div className="donation-history">
//           <h2>Recent Donations</h2>
//           <ul>
//             {donations.map((donation) => (
//               <li key={donation.id}>
//                 <strong>{donation.name}</strong> donated ₹{donation.amount} via {donation.paymentMethod} on {donation.date}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DonationPage;





import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./DonationPage.css";

const DonationPage = () => {
  const location = useLocation();

  const defaultCampaign = {
    title: "Support Our Cause",
    description: "Every donation helps pay for school fees, supplies, and support for students in need.",
    image: "https://images.pexels.com/photos/6646900/pexels-photo-6646900.jpeg",
    amount: "",
    target: 50000,
    raised: 20000,
    creator: "Amin Foundation",
    createdBy: "shaikyasmin78@ybl",
  };

  const campaign = location.state || defaultCampaign;
  const target = campaign.target || 50000;
  const raised = campaign.raised || 0;
  const progressPercent = target ? Math.min(100, Math.round((raised / target) * 100)) : 0;

  const [name, setName] = useState("");
  const [amount, setAmount] = useState(campaign.amount || "");
  const [paymentMethod, setPaymentMethod] = useState("PhonePe");
  const [donations, setDonations] = useState([]);
  const [qrCode, setQrCode] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);

  const handleDonate = async () => {
    if (!name.trim() || amount <= 0) {
      alert("Please enter valid name and amount.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/payment/initiate-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          amount,
          paymentMethod,
          campaignTitle: campaign.title,
        }),
      });

      const data = await response.json();
      console.log("Payment response:", data);

      if (data.success) {
        setDonations((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            name,
            amount,
            paymentMethod,
            date: new Date().toLocaleString(),
          },
        ]);

        // Set QR code and payment details for display
        setQrCode(data.qrCode);
        setPaymentDetails({
          upiId: data.upiId,
          amount: data.amount,
          redirectUrl: data.redirectUrl,
          webFallbackUrl: data.webFallbackUrl,
          intentUrl: data.intentUrl,
          manualUrl: data.manualUrl,
          paymentMethod: data.paymentMethod
        });
      } else {
        alert("⚠️ Payment failed.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("⚠️ Payment initiation failed.");
    }

    // Reset form
    setName("");
    setAmount("");
    setPaymentMethod("PhonePe");
  };

  return (
    <div className="donation-page">
      <div className="donation-content">
        <div className="donation-info">
          <h1 className="donation-title">{campaign.title}</h1>
          <p className="donation-description">{campaign.description}</p>

          <div className="campaign-stats">
            <div>
              <strong>Target:</strong> ₹{target.toLocaleString()}
            </div>
            <div>
              <strong>Raised:</strong> ₹{raised.toLocaleString()}
            </div>
            <div>
              <strong>Creator:</strong> {campaign.creator || campaign.createdBy}
            </div>
          </div>

          <div className="payment-badges">
            <span>PhonePe</span>
            <span>GPay</span>
            <span>Paytm</span>
          </div>

          <div className="progress-bar-wrapper">
            <div className="progress-label">
              <span>Progress</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>

          <div className="donation-form">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Donation Amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="PhonePe">PhonePe</option>
              <option value="Google Pay">Google Pay</option>
              <option value="Paytm">Paytm</option>
            </select>
            <button className="donate-button" onClick={handleDonate}>
              Donate Now ❤️
            </button>
          </div>
        </div>

        <div className="donation-image-container">
          <img className="donation-image" src={campaign.image} alt={campaign.title} />
        </div>
      </div>

      {qrCode && paymentDetails && (
        <div className="qr-code-section">
          <h2>Complete Your Payment</h2>
          <div className="qr-code-container">
            <div className="qr-instructions">
              <h3>Option 1: Scan QR Code</h3>
              <p>Open any UPI app on your phone and scan this QR code:</p>
            </div>
            <img src={qrCode} alt="UPI Payment QR Code" className="qr-code-image" />
            <div className="payment-details">
              <div className="payment-info">
                <p><strong>UPI ID:</strong> {paymentDetails.upiId}</p>
                <p><strong>Amount:</strong> ₹{paymentDetails.amount}</p>
                <p><strong>Method:</strong> {paymentDetails.paymentMethod}</p>
                <p><strong>Pay with:</strong> PhonePe / GPay / Paytm</p>
              </div>

              <div className="payment-actions">
                <h3>Option 2: Scan with PhonePe/GPay/Paytm</h3>
                <button
                  className="copy-url-button"
                  onClick={() => {
                    const urlToCopy = paymentDetails.manualUrl || paymentDetails.redirectUrl;
                    navigator.clipboard.writeText(urlToCopy).then(() => {
                      alert("UPI URL copied to clipboard! Paste it into your UPI scanner.");
                    }).catch(() => {
                      alert(`Copy this UPI URL manually:\n\n${urlToCopy}`);
                    });
                  }}
                >
                  Copy UPI URL
                </button>

                <button
                  className="copy-url-button"
                  onClick={() => {
                    navigator.clipboard.writeText(paymentDetails.upiId).then(() => {
                      alert("UPI ID copied to clipboard! Paste it into your UPI app.");
                    }).catch(() => {
                      alert(`Copy this UPI ID manually:\n\n${paymentDetails.upiId}`);
                    });
                  }}
                >
                  Copy UPI ID
                </button>

                <button
                  className="web-fallback-button"
                  onClick={() => {
                    const urlToOpen = paymentDetails.webFallbackUrl || paymentDetails.manualUrl;
                    console.log("Opening web fallback:", urlToOpen);
                    const newWindow = window.open(urlToOpen, "_blank");
                    if (!newWindow) {
                      alert("Popup blocked. Opening the payment URL in the current tab.");
                      window.location.href = urlToOpen;
                    }
                  }}
                >
                  Open Web Payment
                </button>
              </div>

              <div className="scan-note">
                <p>Use the PhonePe scanner, GPay scanner, or Paytm scanner and scan the QR code above.</p>
                <p>If scanner does not open, copy the UPI ID or URL and paste it into your app.</p>
              </div>

              <div className="troubleshooting">
                <h4>Having trouble?</h4>
                <ul>
                  <li>Make sure you have {paymentDetails.paymentMethod} app installed</li>
                  <li>On mobile: QR code scanning works best</li>
                  <li>On desktop: Use the web browser option</li>
                  <li>Copy UPI ID: <code>{paymentDetails.upiId}</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {donations.length > 0 && (
        <div className="donation-history">
          <h2>Recent Donations</h2>
          <ul>
            {donations.map((donation) => (
              <li key={donation.id}>
                <strong>{donation.name}</strong> donated ₹{donation.amount} via {donation.paymentMethod} on {donation.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DonationPage;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SocialShare from "../components/SocialShare";
import "./EducationPage.css";

const EducationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    paymentMethod: "PhonePe",
  });

  const [qrCode, setQrCode] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setQrCode(null);
    setPaymentDetails(null);
    setError("");

    try {
      const res = await axios.post("http://localhost:5001/api/payment/initiate-payment", {
        ...formData,
        campaignTitle: "Education Support",
      });

      if (res.data.success) {
        setQrCode(res.data.qrCode);
        setPaymentDetails(res.data);
        setDonations((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            name: formData.name,
            amount: formData.amount,
            paymentMethod: formData.paymentMethod,
            date: new Date().toLocaleString(),
          },
        ]);
      } else {
        setError("❌ Payment initiation failed. Please try again.");
      }
    } catch (err) {
      setError("❌ Donation failed. Please check your details and try again.");
      console.error("Axios Error:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="education-page">
      <div className="education-header">
        <h1 className="education-title">📚 Education Support Initiative</h1>
        <p className="education-subtitle">
          Help build a brighter future by supporting education for underprivileged children
        </p>
      </div>

      {/* Social Sharing Section */}
      <SocialShare
        title="🌟 Share Education Initiative"
        text="Help educate underprivileged children! Support our education initiative and make a difference today. 📚❤️"
      />

      <div className="education-content">
        <div className="education-info">
          <div className="education-stats">
            <div className="stat-item">
              <h3>10,000+</h3>
              <p>Children Educated</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Schools Supported</p>
            </div>
            <div className="stat-item">
              <h3>₹25L</h3>
              <p>Funds Raised</p>
            </div>
          </div>

          <div className="education-impact">
            <h3>🎯 Our Impact</h3>
            <ul>
              <li>✅ Providing textbooks and school supplies</li>
              <li>✅ School fee assistance for needy students</li>
              <li>✅ Teacher training programs</li>
              <li>✅ Digital learning resources</li>
              <li>✅ Scholarship programs</li>
            </ul>
          </div>

          <div className="education-form">
            <h3>💝 Make a Donation</h3>
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                name="amount"
                type="number"
                placeholder="Donation Amount (₹)"
                value={formData.amount}
                onChange={handleChange}
                required
                min="1"
              />
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
              >
                <option value="PhonePe">PhonePe</option>
                <option value="Google Pay">Google Pay</option>
                <option value="Paytm">Paytm</option>
              </select>
              <button type="submit" disabled={loading}>
                {loading ? "Processing..." : "🎓 Donate for Education"}
              </button>
            </form>
          </div>
        </div>

        <div className="education-image">
          <img src="/images/education-hero.jpg" alt="Education Support" />
        </div>
      </div>

      {qrCode && paymentDetails && (
        <div className="payment-section">
          <h2>Complete Your Payment</h2>
          <div className="payment-container">
            <div className="qr-section">
              <h3>Option 1: Scan QR Code</h3>
              <p>Open any UPI app on your phone and scan this QR code:</p>
              <img src={qrCode} alt="UPI Payment QR Code" />
            </div>
            <div className="payment-details">
              <div className="payment-info">
                <p><strong>UPI ID:</strong> {paymentDetails.upiId}</p>
                <p><strong>Amount:</strong> ₹{paymentDetails.amount}</p>
                <p><strong>Method:</strong> {paymentDetails.paymentMethod}</p>
                <p><strong>Pay with:</strong> PhonePe / GPay / Paytm</p>
              </div>

              <div className="payment-actions">
                <h3>Option 2: Alternative Methods</h3>
                <button
                  className="copy-btn"
                  onClick={() => {
                    navigator.clipboard.writeText(paymentDetails.manualUrl).then(() => {
                      alert("UPI URL copied! Paste it into your UPI app.");
                    });
                  }}
                >
                  Copy UPI URL
                </button>
                <button
                  className="copy-btn"
                  onClick={() => {
                    navigator.clipboard.writeText(paymentDetails.upiId).then(() => {
                      alert("UPI ID copied! Paste it into your UPI app.");
                    });
                  }}
                >
                  Copy UPI ID
                </button>
                <button
                  className="web-btn"
                  onClick={() => {
                    window.open(paymentDetails.webFallbackUrl, "_blank");
                  }}
                >
                  Open Web Payment
                </button>
              </div>

              <div className="payment-instructions">
                <p><strong>How to pay:</strong></p>
                <ul>
                  <li>Use PhonePe, GPay, or Paytm scanner</li>
                  <li>Scan the QR code above</li>
                  <li>Or copy the UPI ID and paste in your app</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      {donations.length > 0 && (
        <div className="donations-history">
          <h3>Recent Education Donations</h3>
          <ul>
            {donations.map((donation) => (
              <li key={donation.id}>
                <strong>{donation.name}</strong> donated ₹{donation.amount} via {donation.paymentMethod} on {donation.date}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="back-navigation">
        <Link to="/">← Back to Home</Link>
        <Link to="/campaign">View All Campaigns →</Link>
      </div>
    </div>
  );
};

export default EducationPage;

import React, { useState } from "react";
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMsg("✅ Thank you! We'll reply within 24 hours.");
        setFormData({ name: "", email: "", phone: "", purpose: "", message: "" });
      } else {
        setSuccessMsg("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMsg("❌ Server/network error.");
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>Quick Contact</h1>
        <p>Contact Us Today, And Get Reply Within 24 Hours!</p>
        {successMsg && <p className="success-msg">{successMsg}</p>}
      </div>

      <div className="contact-container">
        {/* Left: Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="purpose"
            placeholder="Outline your purpose"
            value={formData.purpose}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Type your Message Here...."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>

        {/* Right: Google Map */}
        <div className="map-box">
          <iframe
            title="Your Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.232702021724!2d78.38228887463576!3d17.444247683168327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d53966b1a3%3A0x1611dd02e948e3e1!2sMYNA%20SEVA%20FOUNDATION!5e0!3m2!1sen!2sin!4v1720358289754!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

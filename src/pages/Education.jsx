import { useState } from "react";
import axios from "axios";

export default function Education() {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    paymentMethod: "",
  });

  const [upiLink, setUpiLink] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5001/initiate-payment", {
        ...formData,
        campaignTitle: "Education",
      });

      if (res.data.success) {
        setUpiLink(res.data.redirectUrl);
      } else {
        alert("Donation failed: " + res.data.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Server error.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-md rounded">
      <h1 className="text-2xl font-bold mb-4">Donate for Education</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          name="amount"
          type="number"
          placeholder="Amount in ₹"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
        >
          <option value="">Select Payment Method</option>
          <option value="UPI">UPI</option>
          <option value="Net Banking">Net Banking</option>
          <option value="Credit Card">Credit Card</option>
        </select>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-4 rounded w-full"
        >
          Donate Now
        </button>
      </form>

      {upiLink && (
        <div className="mt-4 p-4 bg-gray-100 rounded text-center">
          <p className="font-medium">Scan or click to donate:</p>
          <a href={upiLink} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            {upiLink}
          </a>
        </div>
      )}
    </div>
  );
}

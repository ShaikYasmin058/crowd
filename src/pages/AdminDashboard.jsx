import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css"; // optional CSS styling

const AdminDashboard = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/donations")
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching donations:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>📊 Admin Dashboard</h1>
        <p>Manage your crowdfunding platform</p>
      </div>

      <div className="admin-navigation">
        <Link to="/admin-analytics" className="nav-card">
          <div className="nav-icon">📈</div>
          <h3>Analytics</h3>
          <p>View platform statistics and insights</p>
        </Link>
        <Link to="/search" className="nav-card">
          <div className="nav-icon">🔍</div>
          <h3>Campaigns</h3>
          <p>Manage and review campaigns</p>
        </Link>
        <Link to="/dashboard" className="nav-card">
          <div className="nav-icon">👥</div>
          <h3>Users</h3>
          <p>Manage user accounts</p>
        </Link>
        <div className="nav-card">
          <div className="nav-icon">⚙️</div>
          <h3>Settings</h3>
          <p>Platform configuration</p>
        </div>
      </div>

      <div className="recent-donations">
        <h2>💝 Recent Donations</h2>
        {loading ? (
          <p>Loading donations...</p>
        ) : donations.length === 0 ? (
          <p>No donations found.</p>
        ) : (
          <table className="donation-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount (₹)</th>
                <th>Payment Method</th>
                <th>Campaign</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation._id}>
                  <td>{donation.name}</td>
                  <td>₹{donation.amount}</td>
                  <td>{donation.paymentMethod}</td>
                  <td>{donation.campaignTitle}</td>
                  <td>{new Date(donation.date).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

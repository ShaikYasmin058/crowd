import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "January 2024",
    totalDonated: 12500,
    campaignsSupported: 8,
    impactScore: 95
  });

  // Sample donation history
  const [donations, setDonations] = useState([
    {
      id: 1,
      campaign: "Education for Rural Children",
      amount: 2500,
      date: "2024-04-20",
      status: "completed",
      receipt: "REC-001",
      impact: "Helped educate 5 children"
    },
    {
      id: 2,
      campaign: "Clean Water for Village",
      amount: 1500,
      date: "2024-04-15",
      status: "completed",
      receipt: "REC-002",
      impact: "Provided clean water to 50 families"
    },
    {
      id: 3,
      campaign: "Medical Aid for Flood Victims",
      amount: 3000,
      date: "2024-04-10",
      status: "completed",
      receipt: "REC-003",
      impact: "Supported medical treatment for 20 patients"
    },
    {
      id: 4,
      campaign: "School Supplies Drive",
      amount: 1000,
      date: "2024-04-05",
      status: "completed",
      receipt: "REC-004",
      impact: "Supplied educational materials to 25 students"
    },
    {
      id: 5,
      campaign: "Animal Shelter Support",
      amount: 800,
      date: "2024-03-28",
      status: "completed",
      receipt: "REC-005",
      impact: "Helped care for 15 rescued animals"
    },
    {
      id: 6,
      campaign: "Healthcare for Senior Citizens",
      amount: 2000,
      date: "2024-03-20",
      status: "completed",
      receipt: "REC-006",
      impact: "Provided healthcare support to 10 seniors"
    },
    {
      id: 7,
      campaign: "Environmental Conservation",
      amount: 1200,
      date: "2024-03-15",
      status: "completed",
      receipt: "REC-007",
      impact: "Protected 2 acres of forest land"
    },
    {
      id: 8,
      campaign: "Disaster Relief Fund",
      amount: 500,
      date: "2024-03-10",
      status: "completed",
      receipt: "REC-008",
      impact: "Provided emergency aid to 3 families"
    }
  ]);

  // Favorite campaigns
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: "Education for Rural Children",
      category: "Education",
      progress: 64,
      daysLeft: 15
    },
    {
      id: 2,
      title: "Clean Water for Village",
      category: "Environment",
      progress: 60,
      daysLeft: 22
    },
    {
      id: 3,
      title: "Medical Aid for Flood Victims",
      category: "Disaster Relief",
      progress: 78,
      daysLeft: 8
    }
  ]);

  // Achievement badges
  const [achievements, setAchievements] = useState([
    { id: 1, name: "First Donation", icon: "🎯", earned: true, description: "Made your first donation" },
    { id: 2, name: "Generous Donor", icon: "💎", earned: true, description: "Donated over ₹10,000" },
    { id: 3, name: "Impact Maker", icon: "🌟", earned: true, description: "Supported 5+ campaigns" },
    { id: 4, name: "Education Champion", icon: "📚", earned: true, description: "Donated to education causes" },
    { id: 5, name: "Community Hero", icon: "🦸", earned: false, description: "Top 10% of donors this month" },
    { id: 6, name: "Philanthropist", icon: "🏆", earned: false, description: "Donated over ₹50,000" }
  ]);

  const handleDownloadReceipt = (receiptId) => {
    // In a real app, this would download a PDF receipt
    alert(`Downloading receipt ${receiptId}...`);
  };

  const removeFavorite = (campaignId) => {
    setFavorites(favorites.filter(fav => fav.id !== campaignId));
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "donations", label: "My Donations", icon: "💝" },
    { id: "favorites", label: "Favorites", icon: "❤️" },
    { id: "achievements", label: "Achievements", icon: "🏆" },
    { id: "profile", label: "Profile", icon: "👤" }
  ];

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <h1>👋 Welcome back, {user.name}!</h1>
        <p>Your impact dashboard</p>
      </div>

      <div className="dashboard-content">
        {/* Tab Navigation */}
        <div className="dashboard-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "overview" && (
            <div className="overview-tab">
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>₹{user.totalDonated.toLocaleString()}</h3>
                  <p>Total Donated</p>
                  <span className="stat-icon">💰</span>
                </div>
                <div className="stat-card">
                  <h3>{user.campaignsSupported}</h3>
                  <p>Campaigns Supported</p>
                  <span className="stat-icon">🎯</span>
                </div>
                <div className="stat-card">
                  <h3>{user.impactScore}%</h3>
                  <p>Impact Score</p>
                  <span className="stat-icon">⭐</span>
                </div>
                <div className="stat-card">
                  <h3>{user.joinDate}</h3>
                  <p>Member Since</p>
                  <span className="stat-icon">📅</span>
                </div>
              </div>

              <div className="recent-activity">
                <h3>Recent Donations</h3>
                <div className="recent-donations">
                  {donations.slice(0, 3).map(donation => (
                    <div key={donation.id} className="recent-donation-item">
                      <div className="donation-info">
                        <h4>{donation.campaign}</h4>
                        <p>₹{donation.amount} • {new Date(donation.date).toLocaleDateString()}</p>
                      </div>
                      <span className="donation-amount">₹{donation.amount}</span>
                    </div>
                  ))}
                </div>
                <Link to="#donations" onClick={() => setActiveTab("donations")} className="view-all-link">
                  View All Donations →
                </Link>
              </div>

              <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="action-buttons">
                  <Link to="/search" className="action-btn primary">
                    🔍 Find Campaigns
                  </Link>
                  <Link to="/create-campaign" className="action-btn secondary">
                    🚀 Create Campaign
                  </Link>
                  <Link to="/education" className="action-btn tertiary">
                    📚 Support Education
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === "donations" && (
            <div className="donations-tab">
              <div className="donations-header">
                <h3>Your Donation History</h3>
                <p>You've made a difference in {donations.length} lives</p>
              </div>

              <div className="donations-list">
                {donations.map(donation => (
                  <div key={donation.id} className="donation-card">
                    <div className="donation-main">
                      <div className="donation-details">
                        <h4>{donation.campaign}</h4>
                        <p className="donation-date">
                          {new Date(donation.date).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                        <p className="donation-impact">{donation.impact}</p>
                      </div>
                      <div className="donation-amount-section">
                        <span className="donation-amount">₹{donation.amount.toLocaleString()}</span>
                        <span className={`donation-status ${donation.status}`}>
                          {donation.status}
                        </span>
                      </div>
                    </div>
                    <div className="donation-actions">
                      <button
                        className="receipt-btn"
                        onClick={() => handleDownloadReceipt(donation.receipt)}
                      >
                        📄 Download Receipt
                      </button>
                      <Link to={`/donate/${donation.id}`} className="donate-again-btn">
                        💝 Donate Again
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "favorites" && (
            <div className="favorites-tab">
              <div className="favorites-header">
                <h3>Your Favorite Campaigns</h3>
                <p>Campaigns you're following</p>
              </div>

              <div className="favorites-grid">
                {favorites.map(campaign => (
                  <div key={campaign.id} className="favorite-card">
                    <div className="favorite-content">
                      <h4>{campaign.title}</h4>
                      <p className="favorite-category">{campaign.category}</p>
                      <div className="favorite-progress">
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${campaign.progress}%` }}
                          ></div>
                        </div>
                        <span className="progress-text">{campaign.progress}% funded</span>
                      </div>
                      <p className="days-left">{campaign.daysLeft} days left</p>
                    </div>
                    <div className="favorite-actions">
                      <Link to={`/donate/${campaign.id}`} className="donate-btn">
                        Donate Now
                      </Link>
                      <button
                        className="remove-btn"
                        onClick={() => removeFavorite(campaign.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {favorites.length === 0 && (
                <div className="empty-state">
                  <h4>No favorite campaigns yet</h4>
                  <p>Start exploring and add campaigns to your favorites!</p>
                  <Link to="/search" className="explore-btn">
                    🔍 Explore Campaigns
                  </Link>
                </div>
              )}
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="achievements-tab">
              <div className="achievements-header">
                <h3>Your Achievements</h3>
                <p>Your philanthropic journey</p>
              </div>

              <div className="achievements-grid">
                {achievements.map(achievement => (
                  <div
                    key={achievement.id}
                    className={`achievement-card ${achievement.earned ? 'earned' : 'locked'}`}
                  >
                    <div className="achievement-icon">
                      {achievement.earned ? achievement.icon : "🔒"}
                    </div>
                    <div className="achievement-content">
                      <h4>{achievement.name}</h4>
                      <p>{achievement.description}</p>
                    </div>
                    <div className="achievement-status">
                      {achievement.earned ? "✅ Earned" : "🔒 Locked"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="profile-tab">
              <div className="profile-header">
                <h3>Profile Settings</h3>
                <p>Manage your account information</p>
              </div>

              <div className="profile-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" value={user.name} readOnly />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" value={user.email} readOnly />
                </div>
                <div className="form-group">
                  <label>Member Since</label>
                  <input type="text" value={user.joinDate} readOnly />
                </div>

                <div className="profile-actions">
                  <button className="edit-btn">Edit Profile</button>
                  <Link to="/email-notifications" className="settings-btn">Notification Settings</Link>
                  <button className="logout-btn">Sign Out</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="dashboard-footer">
        <Link to="/" className="back-home-btn">← Back to Home</Link>
        <Link to="/search" className="find-campaigns-btn">🔍 Find More Campaigns</Link>
      </div>
    </div>
  );
};

export default UserDashboard;
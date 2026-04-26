import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SocialShare from "../components/SocialShare";
import "./SearchPage.css";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);

  // Sample campaign data - in real app this would come from API
  const campaigns = [
    {
      id: 1,
      title: "Education for Rural Children",
      description: "Providing quality education to children in rural areas who lack access to schools.",
      category: "Education",
      target: 50000,
      raised: 32000,
      creator: "EduCare Foundation",
      upiId: "educare@upi",
      image: "/images/education-campaign.jpg",
      progress: 64,
      daysLeft: 15
    },
    {
      id: 2,
      title: "Clean Water for Village",
      description: "Building water purification systems for a village affected by water contamination.",
      category: "Environment",
      target: 75000,
      raised: 45000,
      creator: "WaterAid India",
      upiId: "wateraid@upi",
      image: "/images/water-campaign.jpg",
      progress: 60,
      daysLeft: 22
    },
    {
      id: 3,
      title: "Medical Aid for Flood Victims",
      description: "Providing medical supplies and treatment to families affected by recent floods.",
      category: "Disaster Relief",
      target: 100000,
      raised: 78000,
      creator: "Relief Foundation",
      upiId: "relief@upi",
      image: "/images/medical-campaign.jpg",
      progress: 78,
      daysLeft: 8
    },
    {
      id: 4,
      title: "School Supplies Drive",
      description: "Collecting and distributing school supplies to underprivileged students.",
      category: "Education",
      target: 25000,
      raised: 18000,
      creator: "Kids Education Fund",
      upiId: "kidsedu@upi",
      image: "/images/school-supplies.jpg",
      progress: 72,
      daysLeft: 12
    },
    {
      id: 5,
      title: "Animal Shelter Support",
      description: "Supporting local animal shelters with food, medical care, and adoption programs.",
      category: "Animal Welfare",
      target: 40000,
      raised: 28000,
      creator: "Paws Foundation",
      upiId: "paws@upi",
      image: "/images/animal-shelter.jpg",
      progress: 70,
      daysLeft: 18
    },
    {
      id: 6,
      title: "Healthcare for Senior Citizens",
      description: "Providing healthcare services and medication support for elderly citizens.",
      category: "Healthcare",
      target: 60000,
      raised: 42000,
      creator: "Senior Care India",
      upiId: "seniorcare@upi",
      image: "/images/healthcare-campaign.jpg",
      progress: 70,
      daysLeft: 25
    }
  ];

  const categories = ["All", "Education", "Healthcare", "Environment", "Animal Welfare", "Disaster Relief"];

  useEffect(() => {
    let filtered = campaigns;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(campaign =>
        campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.creator.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(campaign => campaign.category === selectedCategory);
    }

    // Sort campaigns
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.id - a.id; // Assuming higher ID = newer
        case 'oldest':
          return a.id - b.id;
        case 'most-funded':
          return (b.raised / b.target) - (a.raised / a.target);
        case 'least-funded':
          return (a.raised / a.target) - (b.raised / a.target);
        case 'ending-soon':
          return a.daysLeft - b.daysLeft;
        case 'amount-raised':
          return b.raised - a.raised;
        case 'goal-amount':
          return b.target - a.target;
        default:
          return 0;
      }
    });

    setFilteredCampaigns(sorted);
  }, [searchTerm, selectedCategory, sortBy]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>🔍 Discover Campaigns</h1>
        <p>Find and support causes that matter to you</p>
      </div>

      <div className="search-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search campaigns, organizations, or causes..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="category-filters">
          <h3>Filter by Category:</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category === "All" ? "🌟" : category === "Education" ? "📚" :
                 category === "Healthcare" ? "🏥" : category === "Environment" ? "🌱" :
                 category === "Animal Welfare" ? "🐾" : "🚨"}
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="sort-options">
          <h3>Sort by:</h3>
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="sort-select"
          >
            <option value="newest">🆕 Newest First</option>
            <option value="oldest">📅 Oldest First</option>
            <option value="most-funded">📈 Most Funded</option>
            <option value="least-funded">📉 Least Funded</option>
            <option value="ending-soon">⏰ Ending Soon</option>
            <option value="amount-raised">💰 Most Raised</option>
            <option value="goal-amount">🎯 Largest Goal</option>
          </select>
        </div>
      </div>

      <div className="search-results">
        <div className="results-header">
          <h2>
            {filteredCampaigns.length} Campaign{filteredCampaigns.length !== 1 ? 's' : ''} Found
          </h2>
          {searchTerm && (
            <p className="search-term">Searching for: "<strong>{searchTerm}</strong>"</p>
          )}
        </div>

        {filteredCampaigns.length === 0 ? (
          <div className="no-results">
            <h3>😔 No campaigns found</h3>
            <p>Try adjusting your search terms or category filters</p>
            <button
              className="clear-filters-btn"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="campaigns-grid">
            {filteredCampaigns.map(campaign => (
              <div key={campaign.id} className="campaign-card">
                <div className="campaign-image">
                  <img src={campaign.image} alt={campaign.title} />
                  <div className="campaign-category">{campaign.category}</div>
                </div>

                <div className="campaign-content">
                  <h3 className="campaign-title">{campaign.title}</h3>
                  <p className="campaign-description">{campaign.description}</p>

                  <div className="campaign-meta">
                    <span className="creator">By {campaign.creator}</span>
                    <span className="days-left">{campaign.daysLeft} days left</span>
                  </div>

                  <div className="progress-section">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${campaign.progress}%` }}
                      ></div>
                    </div>
                    <div className="progress-text">
                      <span>₹{campaign.raised.toLocaleString()} raised</span>
                      <span>₹{campaign.target.toLocaleString()} goal</span>
                    </div>
                  </div>

                  <div className="campaign-actions">
                    <Link to={`/donate/${campaign.id}`} className="donate-btn">
                      💝 Donate Now
                    </Link>
                    <SocialShare
                      title={`Support: ${campaign.title}`}
                      text={`Help support ${campaign.title} - ${campaign.description}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="search-footer">
        <Link to="/" className="back-home-btn">← Back to Home</Link>
        <Link to="/campaign" className="view-all-btn">View All Campaigns →</Link>
      </div>
    </div>
  );
};

export default SearchPage;
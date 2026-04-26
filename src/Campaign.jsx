import { useNavigate } from "react-router-dom";
import "./Campaign.css";

import ab from "./assets/ab.jpeg";
import na from "./assets/na.jpeg";
import hands1 from "./assets/hands1.jpeg";

const campaigns = [
  {
    id: 1,
    title: "Help Children Get Education",
    description: "Support underprivileged children by providing books and school supplies.",
    image: ab,
    target: 50000,
    raised: 22000,
    creator: "Amin Foundation",
    upiId: "shaikyasmin78@ybl",
  },
  {
    id: 2,
    title: "Save The Rainforest",
    description: "Donate to plant trees and protect wildlife in the Amazon rainforest.",
    image: na,
    target: 80000,
    raised: 45000,
    creator: "Green Earth Trust",
    upiId: "shaikyasmin78@ybl",
  },
  {
    id: 3,
    title: "Clean Water Initiative",
    description: "Provide clean drinking water to communities in need.",
    image: hands1,
    target: 60000,
    raised: 33000,
    creator: "Water for All",
    upiId: "shaikyasmin78@ybl",
  },
];

const Campaign = () => {
  const navigate = useNavigate();

  return (
    <div className="campaign-container">
      <h1 className="campaign-title">🌍 Ongoing Campaigns</h1>
      <div className="campaign-list">
        {campaigns.map((campaign) => {
          const progress = campaign.target ? Math.min(100, Math.round((campaign.raised / campaign.target) * 100)) : 0;
          return (
            <div key={campaign.id} className="campaign-card">
              <img className="campaign-image" src={campaign.image} alt={campaign.title} />
              <div className="campaign-content">
                <h2>{campaign.title}</h2>
                <p>{campaign.description}</p>

                <div className="campaign-meta">
                  <div><strong>Target:</strong> ₹{campaign.target.toLocaleString()}</div>
                  <div><strong>Raised:</strong> ₹{campaign.raised.toLocaleString()}</div>
                  <div><strong>Creator:</strong> {campaign.creator}</div>
                </div>

                <div className="campaign-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }} />
                  </div>
                  <span>{progress}% funded</span>
                </div>

                <div className="campaign-payment-info">
                  <span>PhonePe / GPay / Paytm</span>
                  <span>UPI ID: {campaign.upiId}</span>
                </div>

                <div className="button-group">
                  <button
                    className="view-details-button"
                    onClick={() => navigate(`/donate/${campaign.id}`, { state: campaign })}
                  >
                    📄 View & Donate
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Campaign;

import React, { useState } from "react";
import "./SocialShare.css";

const SocialShare = ({ title, text, url }) => {
  const [shareMessage, setShareMessage] = useState("");

  const shareUrl = url || window.location.href;
  const shareText = text || "Help make a difference! Support this amazing cause and be part of positive change. ❤️";

  const handleShare = async (platform) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);

    let shareLink = "";

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case "whatsapp":
        shareLink = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
        break;
      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case "copy":
        try {
          await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
          setShareMessage("✅ Link copied to clipboard!");
          setTimeout(() => setShareMessage(""), 3000);
          return;
        } catch (err) {
          setShareMessage("❌ Failed to copy link");
          setTimeout(() => setShareMessage(""), 3000);
          return;
        }
      default:
        return;
    }

    window.open(shareLink, "_blank", "width=600,height=400");
  };

  return (
    <div className="social-share-container">
      <h3 className="share-title">{title || "🌟 Share This Cause"}</h3>
      <p className="share-subtitle">Help us reach more people who can make a difference!</p>

      <div className="share-buttons-grid">
        <button onClick={() => handleShare("facebook")} className="share-btn facebook">
          📘 Facebook
        </button>
        <button onClick={() => handleShare("twitter")} className="share-btn twitter">
          🐦 Twitter
        </button>
        <button onClick={() => handleShare("whatsapp")} className="share-btn whatsapp">
          💬 WhatsApp
        </button>
        <button onClick={() => handleShare("linkedin")} className="share-btn linkedin">
          💼 LinkedIn
        </button>
        <button onClick={() => handleShare("copy")} className="share-btn copy">
          🔗 Copy Link
        </button>
      </div>

      {shareMessage && <p className="share-message">{shareMessage}</p>}
    </div>
  );
};

export default SocialShare;
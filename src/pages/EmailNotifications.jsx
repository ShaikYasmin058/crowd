import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailNotifications.css';

const EmailNotifications = () => {
  const navigate = useNavigate();

  const [preferences, setPreferences] = useState({
    // Campaign Updates
    campaignUpdates: true,
    donationReceived: true,
    campaignEnding: true,
    goalReached: true,

    // Platform News
    platformNews: false,
    newFeatures: false,
    weeklyDigest: true,

    // Donation Reminders
    donationReminders: false,
    monthlySummary: true,

    // Social Features
    friendActivity: false,
    campaignComments: true,
    achievementUnlocked: true,

    // Marketing
    promotionalEmails: false,
    partnerOffers: false,
    surveyInvitations: false
  });

  const [emailAddress, setEmailAddress] = useState('john.doe@example.com');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [tempEmail, setTempEmail] = useState(emailAddress);
  const [isSaving, setIsSaving] = useState(false);

  const handlePreferenceChange = (category, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleEmailUpdate = async () => {
    if (!tempEmail.trim()) {
      alert('Please enter a valid email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(tempEmail)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSaving(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setEmailAddress(tempEmail);
      setIsEditingEmail(false);
      alert('Email address updated successfully!');
    } catch (error) {
      alert('Failed to update email address. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleSavePreferences = async () => {
    setIsSaving(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      alert('Notification preferences saved successfully!');
    } catch (error) {
      alert('Failed to save preferences. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleUnsubscribeAll = () => {
    if (window.confirm('Are you sure you want to unsubscribe from all emails? You can always change this later.')) {
      setPreferences({
        campaignUpdates: false,
        donationReceived: false,
        campaignEnding: false,
        goalReached: false,
        platformNews: false,
        newFeatures: false,
        weeklyDigest: false,
        donationReminders: false,
        monthlySummary: false,
        friendActivity: false,
        campaignComments: false,
        achievementUnlocked: false,
        promotionalEmails: false,
        partnerOffers: false,
        surveyInvitations: false
      });
    }
  };

  const notificationGroups = [
    {
      title: 'Campaign Updates',
      description: 'Stay informed about your campaigns',
      icon: '📢',
      items: [
        {
          key: 'campaignUpdates',
          label: 'Campaign status updates',
          description: 'Get notified when your campaign status changes'
        },
        {
          key: 'donationReceived',
          label: 'New donations',
          description: 'Receive notifications for every donation to your campaigns'
        },
        {
          key: 'campaignEnding',
          label: 'Campaign ending soon',
          description: 'Reminders when your campaign is about to end'
        },
        {
          key: 'goalReached',
          label: 'Goal reached',
          description: 'Celebrate when your campaign reaches its funding goal'
        }
      ]
    },
    {
      title: 'Platform News',
      description: 'Updates about our platform and features',
      icon: '📰',
      items: [
        {
          key: 'platformNews',
          label: 'Platform announcements',
          description: 'Important updates and news from our team'
        },
        {
          key: 'newFeatures',
          label: 'New features',
          description: 'Learn about new features and improvements'
        },
        {
          key: 'weeklyDigest',
          label: 'Weekly digest',
          description: 'Weekly summary of trending campaigns and platform activity'
        }
      ]
    },
    {
      title: 'Donation Activity',
      description: 'Stay connected with your donation journey',
      icon: '💝',
      items: [
        {
          key: 'donationReminders',
          label: 'Donation reminders',
          description: 'Friendly reminders to donate to your favorite campaigns'
        },
        {
          key: 'monthlySummary',
          label: 'Monthly donation summary',
          description: 'Monthly overview of your donation impact'
        }
      ]
    },
    {
      title: 'Social Features',
      description: 'Connect with the community',
      icon: '👥',
      items: [
        {
          key: 'friendActivity',
          label: 'Friend activity',
          description: 'See what campaigns your friends are supporting'
        },
        {
          key: 'campaignComments',
          label: 'Campaign comments',
          description: 'Notifications for comments on campaigns you follow'
        },
        {
          key: 'achievementUnlocked',
          label: 'Achievements unlocked',
          description: 'Celebrate your milestones and badges'
        }
      ]
    },
    {
      title: 'Marketing & Promotions',
      description: 'Special offers and promotional content',
      icon: '🎯',
      items: [
        {
          key: 'promotionalEmails',
          label: 'Promotional emails',
          description: 'Special offers and promotional campaigns'
        },
        {
          key: 'partnerOffers',
          label: 'Partner offers',
          description: 'Offers from our trusted partners'
        },
        {
          key: 'surveyInvitations',
          label: 'Survey invitations',
          description: 'Help us improve by sharing your feedback'
        }
      ]
    }
  ];

  return (
    <div className="email-notifications">
      <div className="notifications-header">
        <h1>📧 Email Notifications</h1>
        <p>Customize how and when you receive emails from us</p>
      </div>

      <div className="notifications-content">
        {/* Email Address Section */}
        <div className="email-section">
          <h2>📬 Email Address</h2>
          <div className="email-display">
            {!isEditingEmail ? (
              <div className="email-info">
                <span className="email-text">{emailAddress}</span>
                <button
                  onClick={() => setIsEditingEmail(true)}
                  className="edit-email-btn"
                >
                  ✏️ Edit
                </button>
              </div>
            ) : (
              <div className="email-edit">
                <input
                  type="email"
                  value={tempEmail}
                  onChange={(e) => setTempEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="email-input"
                />
                <div className="email-actions">
                  <button
                    onClick={() => {
                      setTempEmail(emailAddress);
                      setIsEditingEmail(false);
                    }}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEmailUpdate}
                    className="save-btn"
                    disabled={isSaving}
                  >
                    {isSaving ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </div>
            )}
          </div>
          <p className="email-note">
            This is the email address where you'll receive all notifications.
          </p>
        </div>

        {/* Notification Preferences */}
        <div className="preferences-section">
          <div className="preferences-header">
            <h2>⚙️ Notification Preferences</h2>
            <div className="header-actions">
              <button
                onClick={handleUnsubscribeAll}
                className="unsubscribe-all-btn"
              >
                Unsubscribe from All
              </button>
            </div>
          </div>

          <div className="notification-groups">
            {notificationGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="notification-group">
                <div className="group-header">
                  <h3>
                    <span className="group-icon">{group.icon}</span>
                    {group.title}
                  </h3>
                  <p>{group.description}</p>
                </div>

                <div className="group-items">
                  {group.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="preference-item">
                      <div className="item-content">
                        <label className="toggle-label">
                          <input
                            type="checkbox"
                            checked={preferences[item.key]}
                            onChange={(e) => handlePreferenceChange(item.key, e.target.checked)}
                            className="toggle-input"
                          />
                          <span className="toggle-slider"></span>
                        </label>
                        <div className="item-text">
                          <h4>{item.label}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions-section">
          <h2>🚀 Quick Actions</h2>
          <div className="quick-actions">
            <button
              onClick={() => {
                const essentialPrefs = {
                  campaignUpdates: true,
                  donationReceived: true,
                  campaignEnding: true,
                  goalReached: true,
                  monthlySummary: true,
                  achievementUnlocked: true
                };
                setPreferences(prev => ({ ...prev, ...essentialPrefs }));
              }}
              className="action-btn essential"
            >
              📢 Essential Only
            </button>
            <button
              onClick={() => {
                const allPrefs = Object.keys(preferences).reduce((acc, key) => {
                  acc[key] = true;
                  return acc;
                }, {});
                setPreferences(allPrefs);
              }}
              className="action-btn all"
            >
              🔔 All Notifications
            </button>
            <button
              onClick={() => {
                const socialPrefs = {
                  friendActivity: true,
                  campaignComments: true,
                  achievementUnlocked: true
                };
                setPreferences(prev => ({ ...prev, ...socialPrefs }));
              }}
              className="action-btn social"
            >
              👥 Social Only
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="save-section">
          <button
            onClick={handleSavePreferences}
            className="save-preferences-btn"
            disabled={isSaving}
          >
            {isSaving ? '💾 Saving Preferences...' : '💾 Save Preferences'}
          </button>
          <p className="save-note">
            Your preferences will be saved and applied immediately.
          </p>
        </div>
      </div>

      <div className="notifications-footer">
        <div className="footer-links">
          <button onClick={() => navigate('/dashboard')} className="back-btn">
            ← Back to Dashboard
          </button>
          <a href="/privacy" className="privacy-link">Privacy Policy</a>
        </div>
        <p className="footer-note">
          You can update these preferences anytime. We respect your privacy and will never share your email address.
        </p>
      </div>
    </div>
  );
};

export default EmailNotifications;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CampaignCreation.css';

const CampaignCreation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    goalAmount: '',
    deadline: '',
    image: null,
    story: '',
    impact: '',
    contactInfo: {
      email: '',
      phone: '',
      organization: ''
    }
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Education',
    'Healthcare',
    'Environment',
    'Disaster Relief',
    'Animal Welfare',
    'Community Development',
    'Arts & Culture',
    'Technology',
    'Sports',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors(prev => ({
          ...prev,
          image: 'Please select a valid image file'
        }));
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          image: 'Image size must be less than 5MB'
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        image: file
      }));

      setErrors(prev => ({
        ...prev,
        image: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Campaign title is required';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Campaign description is required';
    } else if (formData.description.length < 50) {
      newErrors.description = 'Description must be at least 50 characters';
    }

    if (!formData.goalAmount || formData.goalAmount <= 0) {
      newErrors.goalAmount = 'Please enter a valid goal amount';
    }

    if (!formData.deadline) {
      newErrors.deadline = 'Please select a deadline';
    } else {
      const deadlineDate = new Date(formData.deadline);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (deadlineDate <= today) {
        newErrors.deadline = 'Deadline must be in the future';
      }
    }

    if (!formData.story.trim()) {
      newErrors.story = 'Campaign story is required';
    } else if (formData.story.length < 100) {
      newErrors.story = 'Story must be at least 100 characters';
    }

    if (!formData.contactInfo.email.trim()) {
      newErrors['contactInfo.email'] = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.contactInfo.email)) {
      newErrors['contactInfo.email'] = 'Please enter a valid email';
    }

    if (!formData.contactInfo.organization.trim()) {
      newErrors['contactInfo.organization'] = 'Organization name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Show success message and redirect
      alert('Campaign created successfully! It will be reviewed before going live.');
      navigate('/dashboard');

    } catch (error) {
      console.error('Error creating campaign:', error);
      alert('Failed to create campaign. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All progress will be lost.')) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="campaign-creation">
      <div className="creation-header">
        <h1>🚀 Create Your Campaign</h1>
        <p>Bring your vision to life and make a difference</p>
      </div>

      <div className="creation-content">
        <form onSubmit={handleSubmit} className="campaign-form">
          {/* Basic Information */}
          <div className="form-section">
            <h2>📋 Basic Information</h2>

            <div className="form-group">
              <label htmlFor="title">Campaign Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Give your campaign a compelling title"
                className={errors.title ? 'error' : ''}
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={errors.category ? 'error' : ''}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && <span className="error-message">{errors.category}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Short Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Briefly describe your campaign (50+ characters)"
                rows="3"
                className={errors.description ? 'error' : ''}
              />
              {errors.description && <span className="error-message">{errors.description}</span>}
              <small className="character-count">
                {formData.description.length}/500 characters
              </small>
            </div>
          </div>

          {/* Funding Goals */}
          <div className="form-section">
            <h2>🎯 Funding Goals</h2>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="goalAmount">Goal Amount (₹) *</label>
                <input
                  type="number"
                  id="goalAmount"
                  name="goalAmount"
                  value={formData.goalAmount}
                  onChange={handleInputChange}
                  placeholder="5000"
                  min="1"
                  className={errors.goalAmount ? 'error' : ''}
                />
                {errors.goalAmount && <span className="error-message">{errors.goalAmount}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="deadline">Campaign Deadline *</label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className={errors.deadline ? 'error' : ''}
                />
                {errors.deadline && <span className="error-message">{errors.deadline}</span>}
              </div>
            </div>
          </div>

          {/* Campaign Image */}
          <div className="form-section">
            <h2>📸 Campaign Image</h2>

            <div className="form-group">
              <label htmlFor="image">Upload Image</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className={errors.image ? 'error' : ''}
              />
              {errors.image && <span className="error-message">{errors.image}</span>}
              <small className="file-info">
                Supported formats: JPG, PNG, GIF. Max size: 5MB
              </small>
            </div>
          </div>

          {/* Campaign Story */}
          <div className="form-section">
            <h2>📖 Campaign Story</h2>

            <div className="form-group">
              <label htmlFor="story">Tell Your Story *</label>
              <textarea
                id="story"
                name="story"
                value={formData.story}
                onChange={handleInputChange}
                placeholder="Share the inspiring story behind your campaign. What problem are you solving? How will donations help? (100+ characters)"
                rows="8"
                className={errors.story ? 'error' : ''}
              />
              {errors.story && <span className="error-message">{errors.story}</span>}
              <small className="character-count">
                {formData.story.length}/2000 characters
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="impact">Expected Impact</label>
              <textarea
                id="impact"
                name="impact"
                value={formData.impact}
                onChange={handleInputChange}
                placeholder="Describe the impact your campaign will have. How many people will benefit? What change will be made?"
                rows="4"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="form-section">
            <h2>📞 Contact Information</h2>

            <div className="form-group">
              <label htmlFor="contactInfo.organization">Organization Name *</label>
              <input
                type="text"
                id="contactInfo.organization"
                name="contactInfo.organization"
                value={formData.contactInfo.organization}
                onChange={handleInputChange}
                placeholder="Your organization or personal name"
                className={errors['contactInfo.organization'] ? 'error' : ''}
              />
              {errors['contactInfo.organization'] && (
                <span className="error-message">{errors['contactInfo.organization']}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactInfo.email">Email Address *</label>
                <input
                  type="email"
                  id="contactInfo.email"
                  name="contactInfo.email"
                  value={formData.contactInfo.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className={errors['contactInfo.email'] ? 'error' : ''}
                />
                {errors['contactInfo.email'] && (
                  <span className="error-message">{errors['contactInfo.email']}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contactInfo.phone">Phone Number</label>
                <input
                  type="tel"
                  id="contactInfo.phone"
                  name="contactInfo.phone"
                  value={formData.contactInfo.phone}
                  onChange={handleInputChange}
                  placeholder="+91 9876543210"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button
              type="button"
              onClick={handleCancel}
              className="cancel-btn"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating Campaign...' : '🚀 Create Campaign'}
            </button>
          </div>
        </form>

        {/* Preview Section */}
        <div className="campaign-preview">
          <h3>Campaign Preview</h3>
          <div className="preview-card">
            <div className="preview-image">
              {formData.image ? (
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Campaign preview"
                />
              ) : (
                <div className="no-image">📷 No image selected</div>
              )}
            </div>
            <div className="preview-content">
              <h4>{formData.title || 'Campaign Title'}</h4>
              <p className="category">{formData.category || 'Category'}</p>
              <p className="description">
                {formData.description || 'Campaign description will appear here...'}
              </p>
              <div className="preview-stats">
                <span>Goal: ₹{formData.goalAmount || '0'}</span>
                <span>Deadline: {formData.deadline || 'Not set'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="creation-footer">
        <p>Need help? <a href="/contact">Contact our support team</a></p>
      </div>
    </div>
  );
};

export default CampaignCreation;
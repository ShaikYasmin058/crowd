import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAnalytics.css';

const AdminAnalytics = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState('30d');
  const [analyticsData, setAnalyticsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock analytics data
  useEffect(() => {
    const loadAnalytics = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      const mockData = {
        overview: {
          totalCampaigns: 247,
          activeCampaigns: 89,
          totalDonations: 1250000,
          totalDonors: 3456,
          successRate: 68.5,
          averageDonation: 2850
        },
        trends: {
          campaignsCreated: [12, 15, 8, 22, 18, 25, 20],
          donationsReceived: [45000, 52000, 38000, 67000, 58000, 72000, 65000],
          newUsers: [45, 52, 38, 67, 58, 72, 65]
        },
        topCampaigns: [
          { id: 1, title: 'Education for Rural Children', raised: 125000, goal: 150000, donors: 234 },
          { id: 2, title: 'Clean Water for Village', raised: 98000, goal: 100000, donors: 187 },
          { id: 3, title: 'Medical Aid for Flood Victims', raised: 156000, goal: 200000, donors: 298 },
          { id: 4, title: 'School Supplies Drive', raised: 75000, goal: 80000, donors: 156 },
          { id: 5, title: 'Animal Shelter Support', raised: 62000, goal: 70000, donors: 134 }
        ],
        categoryBreakdown: [
          { category: 'Education', campaigns: 45, totalRaised: 450000, percentage: 36 },
          { category: 'Healthcare', campaigns: 32, totalRaised: 380000, percentage: 30 },
          { category: 'Environment', campaigns: 28, totalRaised: 220000, percentage: 18 },
          { category: 'Disaster Relief', campaigns: 15, totalRaised: 150000, percentage: 12 },
          { category: 'Animal Welfare', campaigns: 12, totalRaised: 50000, percentage: 4 }
        ],
        recentActivity: [
          { type: 'campaign_created', message: 'New campaign "Tech Education for Girls" created', time: '2 hours ago' },
          { type: 'donation', message: '₹5,000 donated to "Clean Water for Village"', time: '3 hours ago' },
          { type: 'campaign_completed', message: 'Campaign "School Supplies Drive" reached its goal!', time: '5 hours ago' },
          { type: 'user_registered', message: 'New user "Priya Sharma" joined the platform', time: '6 hours ago' },
          { type: 'donation', message: '₹12,000 donated to "Medical Aid for Flood Victims"', time: '8 hours ago' }
        ]
      };

      setAnalyticsData(mockData);
      setIsLoading(false);
    };

    loadAnalytics();
  }, [timeRange]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  const getPercentageChange = (current, previous) => {
    if (previous === 0) return 0;
    return ((current - previous) / previous * 100).toFixed(1);
  };

  if (isLoading) {
    return (
      <div className="admin-analytics">
        <div className="analytics-header">
          <h1>📊 Admin Analytics</h1>
          <p>Loading analytics data...</p>
        </div>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-analytics">
      <div className="analytics-header">
        <div className="header-content">
          <h1>📊 Admin Analytics</h1>
          <p>Comprehensive insights into platform performance</p>
        </div>
        <div className="header-controls">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="time-range-select"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button
            onClick={() => window.print()}
            className="export-btn"
          >
            📄 Export Report
          </button>
        </div>
      </div>

      <div className="analytics-content">
        {/* Overview Cards */}
        <div className="overview-section">
          <h2>📈 Overview</h2>
          <div className="overview-grid">
            <div className="metric-card">
              <div className="metric-icon">🎯</div>
              <div className="metric-content">
                <h3>{formatNumber(analyticsData.overview.totalCampaigns)}</h3>
                <p>Total Campaigns</p>
                <span className="metric-change positive">+12%</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">✅</div>
              <div className="metric-content">
                <h3>{formatNumber(analyticsData.overview.activeCampaigns)}</h3>
                <p>Active Campaigns</p>
                <span className="metric-change positive">+8%</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">💰</div>
              <div className="metric-content">
                <h3>{formatCurrency(analyticsData.overview.totalDonations)}</h3>
                <p>Total Donations</p>
                <span className="metric-change positive">+15%</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">👥</div>
              <div className="metric-content">
                <h3>{formatNumber(analyticsData.overview.totalDonors)}</h3>
                <p>Total Donors</p>
                <span className="metric-change positive">+22%</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">🏆</div>
              <div className="metric-content">
                <h3>{analyticsData.overview.successRate}%</h3>
                <p>Success Rate</p>
                <span className="metric-change positive">+5%</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-icon">📊</div>
              <div className="metric-content">
                <h3>{formatCurrency(analyticsData.overview.averageDonation)}</h3>
                <p>Avg. Donation</p>
                <span className="metric-change neutral">+2%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trends Charts */}
        <div className="trends-section">
          <h2>📊 Trends</h2>
          <div className="charts-grid">
            <div className="chart-card">
              <h3>Campaigns Created</h3>
              <div className="chart-placeholder">
                <div className="bar-chart">
                  {analyticsData.trends.campaignsCreated.map((value, index) => (
                    <div key={index} className="bar">
                      <div
                        className="bar-fill"
                        style={{ height: `${(value / 25) * 100}%` }}
                      ></div>
                      <span className="bar-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="chart-card">
              <h3>Donations Received</h3>
              <div className="chart-placeholder">
                <div className="line-chart">
                  {analyticsData.trends.donationsReceived.map((value, index) => (
                    <div key={index} className="line-point" style={{
                      left: `${(index / 6) * 100}%`,
                      bottom: `${(value / 72000) * 100}%`
                    }}>
                      <span className="point-value">{formatCurrency(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="chart-card">
              <h3>New Users</h3>
              <div className="chart-placeholder">
                <div className="area-chart">
                  {analyticsData.trends.newUsers.map((value, index) => (
                    <div key={index} className="area-segment" style={{
                      width: `${100/7}%`,
                      height: `${(value / 72) * 100}%`
                    }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Campaigns & Category Breakdown */}
        <div className="details-section">
          <div className="top-campaigns">
            <h2>🏆 Top Performing Campaigns</h2>
            <div className="campaigns-list">
              {analyticsData.topCampaigns.map((campaign, index) => (
                <div key={campaign.id} className="campaign-item">
                  <div className="campaign-rank">#{index + 1}</div>
                  <div className="campaign-info">
                    <h4>{campaign.title}</h4>
                    <div className="campaign-stats">
                      <span>{formatCurrency(campaign.raised)} raised</span>
                      <span>{campaign.donors} donors</span>
                      <span>{Math.round((campaign.raised / campaign.goal) * 100)}% funded</span>
                    </div>
                  </div>
                  <div className="campaign-progress">
                    <div
                      className="progress-bar"
                      style={{ width: `${Math.min((campaign.raised / campaign.goal) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="category-breakdown">
            <h2>📂 Category Breakdown</h2>
            <div className="category-list">
              {analyticsData.categoryBreakdown.map((category, index) => (
                <div key={index} className="category-item">
                  <div className="category-info">
                    <h4>{category.category}</h4>
                    <div className="category-stats">
                      <span>{category.campaigns} campaigns</span>
                      <span>{formatCurrency(category.totalRaised)} raised</span>
                    </div>
                  </div>
                  <div className="category-percentage">
                    <span className="percentage">{category.percentage}%</span>
                    <div className="percentage-bar">
                      <div
                        className="percentage-fill"
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="activity-section">
          <h2>🔔 Recent Activity</h2>
          <div className="activity-feed">
            {analyticsData.recentActivity.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  {activity.type === 'campaign_created' && '🚀'}
                  {activity.type === 'donation' && '💝'}
                  {activity.type === 'campaign_completed' && '🎉'}
                  {activity.type === 'user_registered' && '👤'}
                </div>
                <div className="activity-content">
                  <p>{activity.message}</p>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="analytics-footer">
        <button onClick={() => navigate('/admin')} className="back-btn">
          ← Back to Admin Dashboard
        </button>
        <div className="footer-stats">
          <span>Last updated: {new Date().toLocaleString()}</span>
          <span>Data refresh: Every 15 minutes</span>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
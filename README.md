# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Crowdfunding Platform

## Overview

The Crowdfunding Platform is a full-stack web application that enables individuals, startups, and organizations to raise funds for projects, businesses, or social causes. Users can create fundraising campaigns, set target amounts, upload campaign details, and receive donations from contributors through an easy-to-use interface.

The application is built using the **MERN Stack (MongoDB, Express.js, React.js, and Node.js)** and provides secure user authentication, campaign management, and real-time fundraising progress.

---

## Features

* User Registration and Login
* Secure Authentication
* Create Fundraising Campaigns
* Edit and Delete Campaigns
* Browse Active Campaigns
* Search Campaigns
* View Campaign Details
* Donate to Campaigns
* Track Fundraising Progress
* User Dashboard
* Responsive Design

---

## Technologies Used

### Frontend

* React.js
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Other Tools

* REST API
* Git
* GitHub

---

## Project Structure

```text
Crowdfunding-Platform/
│
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## Modules

### User Module

* User Registration
* Login
* Authentication
* Profile Management

### Campaign Module

* Create Campaign
* Update Campaign
* Delete Campaign
* Browse Campaigns
* View Campaign Details

### Donation Module

* Donate to Campaigns
* Update Donation Amount
* Track Fundraising Progress

### Dashboard Module

* View Created Campaigns
* Manage Campaigns
* Track Campaign Status

---

## Database Collections

* Users
* Campaigns
* Donations

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/crowdfunding-platform.git
```

### Navigate to the Project

```bash
cd crowdfunding-platform
```

### Install Backend Dependencies

```bash
cd server
npm install
```

### Install Frontend Dependencies

```bash
cd ../client
npm install
```

### Configure Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start Backend

```bash
cd server
npm start
```

### Start Frontend

```bash
cd client
npm start
```

---

## Challenges Faced

* Implementing secure user authentication.
* Connecting the React frontend with the Express backend.
* Updating campaign amounts after each donation.
* Handling API validation and errors.
* Building a responsive user interface.

---

## Learning Outcomes

* MERN Stack Development
* MongoDB Database Management
* REST API Development
* CRUD Operations
* User Authentication
* Frontend and Backend Integration
* Responsive Web Design
* Git and GitHub Version Control

---

## Future Enhancements

* Online Payment Gateway Integration
* Email Notifications
* Campaign Categories
* Admin Dashboard
* Campaign Approval System
* Analytics and Reporting
* Social Media Sharing
* Comments and Reviews

---

## Author

**Shaik Yasmin**

B.Tech – Computer Science & Engineering (Artificial Intelligence)

Vemu Institute of Technology

---

## License

## License

Copyright © 2026 Shaik Yasmin. All rights reserved.

This project is intended for demonstration and educational purposes only. No part of this project may be copied, modified, or distributed without prior permission from the author.


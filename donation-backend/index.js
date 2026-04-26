// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const Donation = require("./models/Donation");

// const app = express();
// const PORT = 5001;

// // Middlewares
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/donations")

//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Home route
// app.get("/", (req, res) => {
//   res.send("🎉 Donation Backend is running!");
// });

// // Initiate payment + save to DB
// app.post("/initiate-payment", async (req, res) => {
//   const { name, amount, paymentMethod, campaignTitle } = req.body;

//   if (!name || !amount || amount <= 0) {
//     return res.status(400).json({ success: false, message: "Invalid donation details." });
//   }

//   try {
//     const donation = new Donation({
//       name,
//       amount,
//       paymentMethod,
//       campaignTitle,
//     });

//     await donation.save();

//     const upiUrl = `upi://pay?pa=1234@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(campaignTitle)}`;

//     console.log(`💰 Donation saved: ₹${amount} by ${name} via ${paymentMethod}`);
//     res.json({ success: true, redirectUrl: upiUrl });

//   } catch (err) {
//     console.error("❌ Error saving donation:", err);
//     res.status(500).json({
//       success: false,
//       message: "Server error.",
//       error: err.message,
//       stack: err.stack
//     });
//   }
// });


// // View all donations
// app.get("/donations", async (req, res) => {
//   try {
//     const allDonations = await Donation.find().sort({ date: -1 });
//     res.json(allDonations);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch donations." });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`🚀 Donation backend running on http://localhost:${PORT}`);
// });










// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const Donation = require("./models/Donation");

// const app = express();
// const PORT = 5001;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());






// // Connect to MongoDB with proper options
// mongoose.connect("mongodb://127.0.0.1:27017/donations", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("✅ MongoDB Connected");

//   // Start server *after* DB connection is successful
//   app.listen(PORT, () => {
//     console.log(`🚀 Donation backend running on http://localhost:${PORT}`);
//   });
// })
// .catch((err) => {
//   console.error("❌ MongoDB connection error:", err);
// });

// // Home Route
// app.get("/", (req, res) => {
//   res.send("🎉 Donation Backend is running!");
// });

// // Route: Initiate Payment & Save Donation
// app.post("/initiate-payment", async (req, res) => {
//   const { name, amount, paymentMethod, campaignTitle } = req.body;

//   if (!name || !amount || amount <= 0) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid donation details.",
//     });
//   }

//   try {
//     const donation = new Donation({
//       name,
//       amount,
//       paymentMethod,
//       campaignTitle,
//     });

//     await donation.save();

//     const upiUrl = `upi://pay?pa=1234@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(campaignTitle)}`;

//     console.log(`💰 Donation saved: ₹${amount} by ${name} via ${paymentMethod}`);

//     res.json({ success: true, redirectUrl: upiUrl });

//   } catch (err) {
//     console.error("❌ Error saving donation:", err);
//     res.status(500).json({
//       success: false,
//       message: "Server error.",
//       error: err.message,
//       stack: err.stack
//     });
//   }
// });

// // Route: View All Donations
// app.get("/donations", async (req, res) => {
//   try {
//     const allDonations = await Donation.find().sort({ date: -1 });
//     res.json(allDonations);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch donations." });
//   }
// });














// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// // Define Donation schema and model inline
// const donationSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   amount: { type: Number, required: true },
//   paymentMethod: { type: String, required: true },
//   campaignTitle: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });

// const Donation = mongoose.model("Donation", donationSchema);

// // Create Express app
// const app = express();
// const PORT = 5001;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/donations", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("✅ MongoDB Connected");

//   // Start server after DB is connected
//   app.listen(PORT, () => {
//     console.log(`🚀 Donation backend running on http://localhost:${PORT}`);
//   });
// })
// .catch((err) => {
//   console.error("❌ MongoDB connection error:", err);
// });

// // Home route
// app.get("/", (req, res) => {
//   res.send("🎉 Donation Backend is running!");
// });

// // Initiate Payment & Save Donation
// app.post("/api/donations/initiate-payment", async (req, res) => {

//   const { name, amount, paymentMethod, campaignTitle } = req.body;

//   console.log("Received:", req.body);

//   // Basic validation
//   if (!name || !amount || amount <= 0 || !paymentMethod || !campaignTitle) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid donation details.",
//     });
//   }

//   try {
//     const donation = new Donation({
//       name,
//       amount,
//       paymentMethod,
//       campaignTitle,
//     });

//     await donation.save();

//     // Simulated UPI payment URL
//     const upiUrl = `upi://pay?pa=1234@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(campaignTitle)}`;

//     console.log(`💰 Donation saved: ₹${amount} by ${name} via ${paymentMethod}`);

//     res.json({ success: true, redirectUrl: upiUrl });
//   } catch (err) {
//     console.error("❌ Error saving donation:", err);
//     res.status(500).json({
//       success: false,
//       message: "Server error.",
//       error: err.message,
//     });
//   }
// });

// // View All Donations
// app.get("/donations", async (req, res) => {
//   try {
//     const allDonations = await Donation.find().sort({ date: -1 });
//     res.json(allDonations);
//   } catch (err) {
//     res.status(500).json({ message: "Failed to fetch donations." });
//   }
// });







// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");

// // Define Donation schema and model
// const donationSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   amount: { type: Number, required: true },
//   paymentMethod: { type: String, required: true },
//   campaignTitle: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });
// const Donation = mongoose.model("Donation", donationSchema);

// const app = express();
// const PORT = 5001;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose
//   .connect("mongodb://127.0.0.1:27017/donations", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     app.listen(PORT, () => {
//       console.log(`🚀 Donation backend running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Root test route
// app.get("/", (req, res) => res.send("🎉 Donation Backend is running!"));

// // POST: initiate payment + save donation
// app.post("/api/donations/initiate-payment", async (req, res) => {
//   const { name, amount, paymentMethod, campaignTitle } = req.body;

//   console.log("Received:", req.body);

//   if (!name || !amount || amount <= 0 || !paymentMethod || !campaignTitle) {
//     return res.status(400).json({ success: false, message: "Invalid donation details." });
//   }

//   try {
//     const donation = new Donation({ name, amount, paymentMethod, campaignTitle });
//     const result = await donation.save();

//     console.log("✅ Donation saved in DB:", result);

//     const upiUrl = `upi://pay?pa=1234@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(campaignTitle)}`;

//     res.json({ success: true, redirectUrl: upiUrl });
//   } catch (err) {
//     console.error("❌ Error saving donation:", err);
//     res.status(500).json({ success: false, message: "Server error", error: err.message });
//   }
// });

// // GET: fetch all donations
// app.get("/donations", async (req, res) => {
//   try {
//     const allDonations = await Donation.find().sort({ date: -1 });
//     res.json(allDonations);
//   } catch (err) {
//     console.error("❌ Error fetching donations:", err);
//     res.status(500).json({ message: "Failed to fetch donations." });
//   }
// });













// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// // Define Donation schema and model
// const donationSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   amount: { type: Number, required: true },
//   paymentMethod: { type: String, required: true },
//   campaignTitle: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });

// const Donation = mongoose.model("Donation", donationSchema);

// const app = express();
// const PORT = 5001;

// // Middleware
// app.use(cors());
// app.use(express.json()); // instead of body-parser (built into Express)

// // MongoDB connection (local Compass DB)
// mongoose
//   .connect("mongodb://127.0.0.1:27017/donations")
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     app.listen(PORT, () => {
//       console.log(`🚀 Donation backend running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Root test route
// app.get("/", (req, res) => res.send("🎉 Donation Backend is running!"));

// // POST: initiate payment + save donation
// app.post("/api/donations/initiate-payment", async (req, res) => {
//   const { name, amount, paymentMethod, campaignTitle } = req.body;

//   console.log("📥 Received:", req.body);

//   if (!name || !amount || amount <= 0 || !paymentMethod || !campaignTitle) {
//     return res.status(400).json({ success: false, message: "Invalid donation details." });
//   }

//   try {
//     const donation = new Donation({ name, amount, paymentMethod, campaignTitle });
//     const result = await donation.save();

//     console.log("✅ Donation saved in DB:", result);

//     const upiUrl = `upi://pay?pa=1234@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(campaignTitle)}`;

//     res.json({ success: true, redirectUrl: upiUrl });
//   } catch (err) {
//     console.error("❌ Error saving donation:", err);
//     res.status(500).json({ success: false, message: "Server error", error: err.message });
//   }
// });

// // GET: fetch all donations
// app.get("/donations", async (req, res) => {
//   try {
//     const allDonations = await Donation.find().sort({ date: -1 });
//     res.json(allDonations);
//   } catch (err) {
//     console.error("❌ Error fetching donations:", err);
//     res.status(500).json({ message: "Failed to fetch donations." });
//   }
// });








// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();
// const PORT = 5001;

// // Middleware
// app.use(cors());
// app.use(express.json()); // For parsing JSON body

// // MongoDB connection to crowdfundingDB
// mongoose
//   .connect("mongodb://127.0.0.1:27017/crowdfundingDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("✅ MongoDB Connected to crowdfundingDB");
//     app.listen(PORT, () => {
//       console.log(`🚀 Donation backend running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Define Donation schema and model
// const donationSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   amount: { type: Number, required: true },
//   paymentMethod: { type: String, required: true },
//   campaignTitle: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });

// const Donation = mongoose.model("Donation", donationSchema);

// // Test route
// app.get("/", (req, res) => res.send("🎉 Donation Backend is running!"));

// // POST: Save donation & generate UPI link
// app.post("/api/donations/initiate-payment", async (req, res) => {
//   const { name, amount, paymentMethod, campaignTitle } = req.body;

//   console.log("📥 Incoming donation:", req.body);

//   if (!name || !amount || amount <= 0 || !paymentMethod || !campaignTitle) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid donation details.",
//     });
//   }

//   try {
//     const donation = new Donation({ name, amount, paymentMethod, campaignTitle });
//     const result = await donation.save();

//     console.log("✅ Donation saved:", result);

//     const upiUrl = `upi://pay?pa=1234@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(campaignTitle)}`;

//     res.json({ success: true, redirectUrl: upiUrl });
//   } catch (err) {
//     console.error("❌ Error saving donation:", err);
//     res.status(500).json({ success: false, message: "Server error", error: err.message });
//   }
// });

// // GET: Fetch all donations
// app.get("/donations", async (req, res) => {
//   try {
//     const allDonations = await Donation.find().sort({ date: -1 });
//     res.json(allDonations);
//   } catch (err) {
//     console.error("❌ Error fetching donations:", err);
//     res.status(500).json({ message: "Failed to fetch donations." });
//   }
// });




// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();
// const PORT = 5001;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect('mongodb://127.0.0.1:27017/crowdfundingDB')
//   .then(() => {
//     console.log("✅ MongoDB Connected to crowdfundingDB");
//     app.listen(PORT, () => {
//       console.log(`🚀 Donation backend running on http://localhost:${PORT}`);
//     });
//   })
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Schema & Model
// const donationSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   amount: { type: Number, required: true },
//   paymentMethod: { type: String, required: true },
//   campaignTitle: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });

// const Donation = mongoose.model("Donation", donationSchema);

// // Routes
// app.get("/", (req, res) => res.send("🎉 Donation Backend is running!"));

// app.post("/api/donations/initiate-payment", async (req, res) => {
//   const { name, amount, paymentMethod, campaignTitle } = req.body;

//   console.log("📥 Incoming donation:", req.body);

//   if (!name || !amount || amount <= 0 || !paymentMethod || !campaignTitle) {
//     return res.status(400).json({
//       success: false,
//       message: "Invalid donation details.",
//     });
//   }

//   try {
//     const donation = new Donation({ name, amount, paymentMethod, campaignTitle });
//     const result = await donation.save();

//     console.log("✅ Donation saved:", result);

//     // const upiUrl = `upi://pay?pa=1234@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(campaignTitle)}`;
//     const upiUrl = `upi://pay?pa=9441598434@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(campaignTitle)}`;

//     res.json({ success: true, redirectUrl: upiUrl });
//   } catch (err) {
//     console.error("❌ Error saving donation:", err);
//     res.status(500).json({ success: false, message: "Server error", error: err.message });
//   }
// });

// app.get("/donations", async (req, res) => {
//   try {
//     const allDonations = await Donation.find().sort({ date: -1 });
//     res.json(allDonations);
//   } catch (err) {
//     console.error("❌ Error fetching donations:", err);
//     res.status(500).json({ message: "Failed to fetch donations." });
//   }
// });





const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const QRCode = require("qrcode");

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/crowdfundingDB")
  .then(() => {
    console.log("✅ MongoDB Connected to crowdfundingDB");
    app.listen(PORT, () => {
      console.log(`🚀 Donation backend running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Schema & Model
const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  campaignTitle: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Donation = mongoose.model("Donation", donationSchema);

// Routes
app.get("/", (req, res) => res.send("🎉 Donation Backend is running!"));

// POST: initiate payment + save donation + generate QR code
app.post("/api/donations/initiate-payment", async (req, res) => {
  const { name, amount, paymentMethod, campaignTitle } = req.body;

  console.log("📥 Incoming donation:", req.body);

  if (!name || !amount || amount <= 0 || !paymentMethod || !campaignTitle) {
    return res.status(400).json({
      success: false,
      message: "Invalid donation details.",
    });
  }

  try {
    const donation = new Donation({ name, amount, paymentMethod, campaignTitle });
    const result = await donation.save();

    console.log("✅ Donation saved:", result);

    // Generate UPI link
    const upiUrl = `upi://pay?pa=9441598434@ybl&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(campaignTitle)}`;

    // Generate QR code from UPI link
    QRCode.toDataURL(upiUrl, (err, qrDataUrl) => {
      if (err) {
        console.error("❌ Error generating QR code:", err);
        return res.status(500).json({ success: false, message: "QR generation failed" });
      }

      // Return both UPI link and QR code
      res.json({
        success: true,
        redirectUrl: upiUrl,
        qrCode: qrDataUrl,
      });
    });

  } catch (err) {
    console.error("❌ Error saving donation:", err);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
});

// GET: fetch all donations
app.get("/donations", async (req, res) => {
  try {
    const allDonations = await Donation.find().sort({ date: -1 });
    res.json(allDonations);
  } catch (err) {
    console.error("❌ Error fetching donations:", err);
    res.status(500).json({ message: "Failed to fetch donations." });
  }
});

// const express = require("express");
// const router = express.Router();
// const Donation = require("../models/Donation");

// // ✅ Test Route
// router.get("/", (req, res) => {
//   res.json({ message: "Donation API is working!" });
// });

// // ✅ Get all donations
// router.get("/all", async (req, res) => {
//   try {
//     const donations = await Donation.find();
//     res.json(donations);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch donations", details: error.message });
//   }
// });

// // ✅ Get a single donation by ID
// router.get("/:id", async (req, res) => {
//   try {
//     const donation = await Donation.findById(req.params.id);
//     if (!donation) return res.status(404).json({ error: "Donation not found" });
//     res.json(donation);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch donation", details: error.message });
//   }
// });

// // ✅ Create a new donation
// router.post("/donate", async (req, res) => {
//   const { name, amount, paymentMethod, campaignId } = req.body;
//   try {
//     const donation = new Donation({ name, amount, paymentMethod, campaignId });
//     await donation.save();
//     res.status(200).json({ message: "Donation saved!", donation });
//   } catch (err) {
//     console.error("Donation save failed:", err);
//     res.status(500).json({ error: "Failed to save donation" });
//   }
// });

// // ✅ Update a donation by ID
// router.put("/:id", async (req, res) => {
//   try {
//     const updatedDonation = await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedDonation) return res.status(404).json({ error: "Donation not found" });
//     res.json({ message: "Donation updated successfully!", updatedDonation });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update donation", details: error.message });
//   }
// });

// // ✅ Delete a donation by ID
// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedDonation = await Donation.findByIdAndDelete(req.params.id);
//     if (!deletedDonation) return res.status(404).json({ error: "Donation not found" });
//     res.json({ message: "Donation deleted successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete donation", details: error.message });
//   }
// });

// module.exports = router;








const express = require("express");
const router = express.Router();
const Donation = require("../models/Donation");

// ✅ Test Route
router.get("/", (req, res) => {
  res.json({ message: "Donation API is working!" });
});

// ✅ Get all donations
router.get("/all", async (req, res) => {
  try {
    const donations = await Donation.find();
    res.json(donations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch donations", details: error.message });
  }
});

// ✅ Get a single donation by ID
router.get("/:id", async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation) return res.status(404).json({ error: "Donation not found" });
    res.json(donation);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch donation", details: error.message });
  }
});

// ✅ Create a new donation
router.post("/donate", async (req, res) => {
  const { name, amount, paymentMethod, campaignId } = req.body;
  try {
    const donation = new Donation({ name, amount, paymentMethod, campaignId });
    await donation.save();
    res.status(200).json({ message: "Donation saved!", donation });
  } catch (err) {
    console.error("Donation save failed:", err);
    res.status(500).json({ error: "Failed to save donation" });
  }
});

// ✅ Update a donation by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedDonation = await Donation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDonation) return res.status(404).json({ error: "Donation not found" });
    res.json({ message: "Donation updated successfully!", updatedDonation });
  } catch (error) {
    res.status(500).json({ error: "Failed to update donation", details: error.message });
  }
});

// ✅ Delete a donation by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedDonation = await Donation.findByIdAndDelete(req.params.id);
    if (!deletedDonation) return res.status(404).json({ error: "Donation not found" });
    res.json({ message: "Donation deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete donation", details: error.message });
  }
});

module.exports = router;
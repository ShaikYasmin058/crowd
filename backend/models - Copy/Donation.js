// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const DonationSchema = mongoose.Schema({
//   amount: {
//     type: Number,
//     default: 0,
//   },
//   transactionComplete: {
//     type: Boolean,
//     default: false,
//   },
//   transactionID: {
//     type: String,
//     default: "",
//   },
//   campaign: {
//     type: Schema.Types.ObjectId,
//     ref: "Campaign",
//   },
// });

// const Donation = mongoose.model("Donation", DonationSchema);

// module.exports = Donation;








const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  campaignId: { type: String, required: false }, // Optional
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Donation", donationSchema);

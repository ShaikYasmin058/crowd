// const mongoose = require("mongoose");

// const donationSchema = new mongoose.Schema({
//   name: String,
//   amount: Number,
//   paymentMethod: String,
//   campaignTitle: String,
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model("Donation", donationSchema);





// const mongoose = require("mongoose");

// const donationSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   amount: { type: Number, required: true },
//   paymentMethod: { type: String, required: true },
//   campaignTitle: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Donation", donationSchema);

const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: { type: String },
  amount: { type: Number, required: true },
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
  paymentMethod: { type: String, required: true },
  transactionID: { type: String },
  transactionComplete: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Donation", donationSchema);
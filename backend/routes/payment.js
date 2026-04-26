// const backendURL = "https://crowd-funding-backend.vercel.app/";
const backendURL = "http://localhost:4000/";

const express = require("express");
const checksum_lib = require("../paytm/checksum");
const https = require("https");
const qs = require("querystring");
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });
const config = require("../config");
require("dotenv").config();
const QRCode = require("qrcode");

const app = express();
const router = express.Router();
const ctrl = require("../controllers");
const { Donation } = require("../models");

router.post("/:id/payment", [parseUrl, parseJson], (req, res) => {
  var donation = new Donation({
    amount: req.body.amount,
    campaign: req.params.id,
  });

  donation
    .save()
    .then(() => {
      var paymentDetails = {
        amount: req.body.amount,
      };

      if (!paymentDetails.amount) {
        res.status(400).send("Please enter the amount!");
      } else {
        var params = {};
        params["MID"] = config.PaytmConfig.mid;
        params["WEBSITE"] = config.PaytmConfig.website;
        params["CHANNEL_ID"] = "WEB";
        params["INDUSTRY_TYPE_ID"] = "Retail";
        params["ORDER_ID"] = donation._id.toString();
        params["CUST_ID"] = donation._id + new Date().getTime();
        params["TXN_AMOUNT"] = paymentDetails.amount.toString();
        params["CALLBACK_URL"] = backendURL + "api/donate/" + "success";

        checksum_lib.genchecksum(
          params,
          config.PaytmConfig.key,
          function (err, checksum) {
            // console.log("Error1: ", err);
            var txn_url =
              "https://securegw-stage.paytm.in/theia/processTransaction"; // for staging
            // var txn_url = "https://securegw.paytm.in/theia/processTransaction"; // for production

            // console.log("Error2: ", err);
            var form_fields = "";
            for (var x in params) {
              form_fields +=
                "<input type='hidden' name='" +
                x +
                "' value='" +
                params[x] +
                "' >";
            }
            form_fields +=
              "<input type='hidden' name='CHECKSUMHASH' value='" +
              checksum +
              "' >";

            // console.log(res);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(
              '<html><head><title>Merchant Checkout Page</title></head><body><center><h1>Please do not refresh this page...</h1></center><form method="post" action="' +
                txn_url +
                '" name="f1">' +
                form_fields +
                '</form><script type="text/javascript">document.f1.submit();</script></body></html>'
            );
            // console.log("All ok");
            res.end();
          }
        );
      }
    })
    .catch((err) => {
      console.log("Error3:", err);
      return res.status(500).json({
        message: "Something went wrong while making payment. Please try again.",
        err: err,
      });
    });
});

router.post("/success", ctrl.payment.success);

router.post("/initiate-payment", async (req, res) => {
  const { name, amount, paymentMethod, campaignTitle } = req.body;

  if (!amount || !paymentMethod) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    // Create donation record
    const donation = new Donation({
      name,
      amount,
      paymentMethod,
      transactionComplete: true, // For UPI, assume complete
    });

    await donation.save();

    let upiUrl = "";
    const upiId = "shaikyasmin78@ybl"; // User's PhonePe UPI ID
    const payeeName = campaignTitle || "Campaign Donation";
    const note = `Donation for ${payeeName}`;

    if (paymentMethod === "PhonePe") {
      // Generate UPI link for PhonePe - try multiple protocols
      upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
    } else if (paymentMethod === "Google Pay") {
      // Use tez:// for Google Pay
      upiUrl = `tez://upi/pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
    } else {
      return res.status(400).json({ success: false, message: "Unsupported payment method" });
    }

    // Generate QR code as data URL
    const qrCodeDataURL = await QRCode.toDataURL(upiUrl);

    // Create additional fallback URLs
    const intentUrl = `intent://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}#Intent;scheme=upi;package=com.phonepe.app;end`;

    res.json({
      success: true,
      redirectUrl: upiUrl,
      qrCode: qrCodeDataURL,
      donationId: donation._id,
      upiId: upiId,
      amount: amount,
      paymentMethod: paymentMethod,
      webFallbackUrl: `https://pay.google.com/gp/p/ui/pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`,
      intentUrl: intentUrl,
      manualUrl: `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`
    });
  } catch (error) {
    console.error("Payment initiation error:", error);
    res.status(500).json({ success: false, message: "Failed to initiate payment" });
  }
});

module.exports = router;

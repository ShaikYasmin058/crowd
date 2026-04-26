module.exports = {
  PaytmConfig: {
    mid: process.env.PAYTM_MID || "dummy_mid",
    key: process.env.PAYTM_KEY || "dummy_key",
    website: process.env.PAYTM_WEBSITE || "WEBSTAGING"
  }
};
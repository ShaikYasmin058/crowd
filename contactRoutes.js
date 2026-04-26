const express = require('express');
const router = express.Router();

router.post('/contact', (req, res) => {
  const { name, email, phone, purpose, message } = req.body;
  console.log('💬 Contact form received:', req.body);

  res.status(200).json({ message: "✅ Message received! We'll get back within 24 hours." });
});

module.exports = router;

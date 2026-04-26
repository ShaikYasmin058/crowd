const express = require('express');
const router = express.Router();

router.post('/contact', (req, res) => {
  const { name, email, phone, purpose, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  console.log('💬 New contact message received:', req.body);
  res.status(200).json({ message: 'Contact message received successfully!' });
});

module.exports = router;

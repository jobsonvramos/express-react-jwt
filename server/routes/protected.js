const express = require('express');
const { authenticateJWT, authorizeRole } = require('../middlewares/auth');
const router = express.Router();

router.get('/admin', authenticateJWT, authorizeRole('ADMIN'), (req, res) => {
  res.json({ message: 'Welcome to the admin page' });
});

module.exports = router;

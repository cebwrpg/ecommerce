const express = require('express');
const router = express.Router();

const {
  registerUser,
  loginUser
} = require('../controllers/registercontrol'); // Import controller functions
const auth = require("../middleware/auth"); // Import auth middleware

// Register
router.post('/register', registerUser); // Registration route without auth middleware

// Login
router.post('/login', loginUser);

module.exports = router;

const express = require('express');  // Express framework for server
const dotenv = require('dotenv');    // Load environment variables
dotenv.config();     // Load env once at top

const mongoose = require('mongoose');   // MongoDB connection
const cors = require('cors');   // CORS for cross-origin requests
const bcrypt = require("bcrypt");    // Password hashing

const registerRoutes = require('./routes/registerroutes');// Import routes

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use('/', registerRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});

// Server link or port creation
const PORT = process.env.PORT || 3000;
// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const jwt = require("jsonwebtoken"); // JWT for token verification

const auth = (req, res, next) => {

  const token =
    req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token

  if (!token) { // No token provided
    return res.status(401).json({
      message: "No token provided"
    });
  }

  try {
    const decoded = jwt.verify( // Verify token
      token,
      process.env.JWT_SECRET
    );

    req.user = decoded;
    next();

  } catch (error) { // Invalid token
    res.status(401).json({
      message: "Invalid token"
    });
  }
};

module.exports = auth;

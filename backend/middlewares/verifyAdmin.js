require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyAdmin = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(403).json({ message: "No token provided." });
    }

    // Verify the token
    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.error("Token verification failed:", err);
        return res.status(403).json({ message: "Failed to authenticate token." });
      }

      // Check if the user is admin based on the role
      if (decoded.role !== 'admin') {
        return res.status(403).json({ message: "User is not an admin." });
      }

      // If everything is good, save to request for use in other routes
      req.userId = decoded._id; // Save user ID
      next();
    });
};
  module.exports = verifyAdmin;
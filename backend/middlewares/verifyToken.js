require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-auth-token'];
    if (!token) {
        return res.status(401).json({ message: "No token provided, access denied." });
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ message: "Invalid token." });
        }
        
        req.user = payload; // Store the decoded token payload in req.user
        next();
    });
};

module.exports = verifyToken;

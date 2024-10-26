// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const isAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.status(401).json({ message: 'Access Denied: No Token Provided!' });

        const decoded = jwt.verify(token, 'your_secret_key');
        req.user = decoded;

        const user = await User.findById(req.user.id);
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Access Denied: Admins Only!' });
        }

        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid or Expired Token' });
    }
};

module.exports = isAdmin;

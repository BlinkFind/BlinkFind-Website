require('dotenv').config();
const jwt = require('jsonwebtoken');
const verifyToken = (req, res,next) => {
    const token = req.headers['x-auth-token'];
    jwt.verify(
        token, 
        process.env.JWT_SECRET,
        (err, payload) => {
            if(err) {
                console.log(err);
            }
            else{
                req.body = payload;
                next();
            }
        }
    )
}
module.exports = verifyToken;
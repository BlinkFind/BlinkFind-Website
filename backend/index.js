const express = require('express');
const UserRouter = require('./routers/UserRouter');
const cors = require('cors');
const ContactUsRouter = require("./routers/ContactUsRouter");

// Initializing express
const app = express();
const port = 5000;

// Middleware to parse JSON and set CORS headers
app.use(express.json()); // Moved this line up to ensure JSON parsing
app.use(cors({
    origin: 'https://www.blinkfind.in', // Ensure this matches your frontend URL
    methods: ['GET', 'POST', 'DELETE'], // Add any methods you need
    credentials: true, // If you're using cookies or HTTP authentication
}));
// Defining routes
app.use('/user', UserRouter);
app.use("/contact", ContactUsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

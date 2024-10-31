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
    origin: ['https://quick-finds.vercel.app/'],
}));

// Defining routes
app.use('/user', UserRouter);
app.use("/contact", ContactUsRouter);

app.listen(port, () => {
    console.log('Server started on port', port); 
});

const express = require('express');
const UserRouter = require('./routers/UserRouter');
const cors = require('cors');

//initializing express
const app = express();

const port = 5000;

app.use( cors({
    origin: ['http://localhost:3000'],
}));

app.use(express.json());

app.listen(port,() => {
    console.log('server started'); 
})
const mongoose = require('mongoose');
require("dotenv").config();


const dbPass = process.env.db_password;
const dbName = process.env.db_name;
const url = `mongodb+srv://${dbName}:${dbPass}@cluster0.6law0x4.mongodb.net/quickfinds?retryWrites=true&w=majority&appName=Cluster0`;
//name of db is written in between /?

mongoose.connect(url)
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;

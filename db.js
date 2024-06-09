require('dotenv').config({ path: '.env.local' });
const mongoose = require('mongoose');
const username = process.env.REACT_APP_URI_USERNAME;
const password = process.env.REACT_APP_URI_PASSWORD;
const URI = `mongodb+srv://${username}:${password}@first.ec7pczh.mongodb.net/sunshine`;
const connectToMongo = async ()=>{
    await mongoose.connect(URI);
    console.log("Connected to mongodb successfully");
}

module.exports = connectToMongo;
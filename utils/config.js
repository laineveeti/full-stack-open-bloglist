require('dotenv').config();

let PORT = process.env.PORT;
let ENV = process.env.NODE_ENV;
let MONGODB_URI = ENV === 'production'
    ? process.env.MONGODB_URI
    : process.env.DEV_MONGODB_URI;
let SECRET = process.env.SECRET;

module.exports = { ENV, PORT, MONGODB_URI, SECRET };
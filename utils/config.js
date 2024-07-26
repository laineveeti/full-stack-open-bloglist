require('dotenv').config();

let PORT = process.env.PORT;
let ENV = process.env.NODE_ENV;
let MONGODB_URI;
switch (ENV) {
case 'testing':
    MONGODB_URI = process.env.TEST_MONGODB_URI;
    break;
case 'development':
    MONGODB_URI = process.env.DEV_MONGODB_URI;
    break;
case 'production':
    MONGODB_URI = process.env.MONGODB_URI;
    break;
default:
    MONGODB_URI = process.env.DEV_MONGODB_URI;
}
let SECRET = process.env.SECRET;

module.exports = { ENV, PORT, MONGODB_URI, SECRET };

const mongoose = require('mongoose');
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const app = express();
const loginRouter = require('./controllers/login');
const blogsRouter = require('./controllers/blogs');
const userRouter = require('./controllers/users');
const testingRouter = require('./controllers/testing');
const { tokenExtractor, errorHandler } = require('./utils/middleware');
const config = require('./utils/config');
const logger = require('./utils/logger');

mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB');
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message);
    });

app.use(cors());
app.use(express.json());
app.use(tokenExtractor);
app.use('/api/login', loginRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/users', userRouter);
app.use(express.static('frontend/build'));

if (config.ENV === 'testing') {
    app.use('/api/testing', testingRouter);
}

app.use(errorHandler);

module.exports = app;

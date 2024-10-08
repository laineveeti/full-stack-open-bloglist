const http = require('http');
const config = require('./utils/config');
const logger = require('./utils/logger');
const app = require('./app');

const server = http.createServer(app);

const PORT = config.PORT || 3003;

server.listen(PORT, () => {
    logger.info(`Server running on port ${config.PORT}`);
    logger.info(`Node env: ${config.ENV}`);
});
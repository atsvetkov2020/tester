
process.on('unhandledRejection', err => {
    throw err;
});
const api = require('./main/api/apiv1');
const logger = require('./main/logger').getLogger('SERVER');
const express = require('express');
const path = require('path');
const configuration = require('./main/configuration');
const app = express();

logger.info('TESTER STARTED');
app.use(express.static(path.join(__dirname, 'build')))

app.get('/test', (req, res) => res.send('Hello world!'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use('/api/v1', api);


app.listen(configuration.settings.port);

process.on('SIGTERM', function () {
    logger.info('Service has been terminated...');
    process.exit();
});

process.on('SIGINT', function () {
    logger.info('Service has been interrupted...');
    process.exit();
});


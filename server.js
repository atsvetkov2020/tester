const logger= require('./main/logger');
const express = require('express');
const path = require('path')
const app = express();

logger.info('[server]TESTER');
app.use(express.static(path.join(__dirname, 'build')))

app.get('/test', (req, res) => res.send('Hello world!'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(8080)
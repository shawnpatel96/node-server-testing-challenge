const express = require('express');
const server = express();
const resourcesRouter = require('./resources/resources-router')

server.use(express.json());

server.use('/resources', resourcesRouter);

server.get('/', (req, res)=>{
    res.status(200).json({api: 'up'})
})

module.exports = server;
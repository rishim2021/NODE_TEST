const express = require('express');
const winston = require('winston');
const app = new express();
const cluster = require('cluster');
const numCpus = require('os').cpus().length;
const process = require('process');


require('./startup/routes')(app);

const port = process.env.PORT || 3000;

const server = app.listen(port,()=>{
    winston.info(`Connected with port number ${port}`)
}) 

module.exports = server;









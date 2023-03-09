'use strict'

const express = require('express');
const batchRoute = express.Router();
const batchControllers = require('./batchControllers');

batchRoute.post('/batch/create', batchControllers.upload.array('batchImages', 10), batchControllers.crearLote);




module.exports = batchRoute;

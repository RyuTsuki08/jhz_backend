'use strict'

const express = require('express');
const batchRoute = express.Router();
const adminAuthServices = require('../admin/adminServices/adminAuthServices')
const batchControllers = require('./batchControllers');

batchRoute.post(
    '/batch/create',
     adminAuthServices.ensureAuthenticated,
     batchControllers.upload.array('batchImages', 10),
      batchControllers.crearLote
      );
batchRoute.put(
    '/batch/update/:id',
     adminAuthServices.ensureAuthenticated,
     batchControllers.upload.array('batchImages', 10),
      batchControllers.actualizarBatch
      );
batchRoute.get(
    '/batch/readAll',
     adminAuthServices.ensureAuthenticated,
     batchControllers.getAllBatchs
    );
batchRoute.get(
    '/batch/get/batch/:id', 
    adminAuthServices.ensureAuthenticated,
    batchControllers.getBatch
);
batchRoute.delete(
    '/batch/delete/:id', 
    adminAuthServices.ensureAuthenticated,
    batchControllers.deleteBatches
);




module.exports = batchRoute;

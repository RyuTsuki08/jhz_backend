'use strict'

const express = require('express');
const router = express.Router();
const adminControllers = require('./adminControllers/adminControllers');
const adminAuthControllers = require('./adminControllers/adminAuthControllers');
const adminAuthServices = require('./adminServices/adminAuthServices');

router.post('/admin/login', adminAuthControllers.adminLogin);
router.post('/admin/create', adminAuthControllers.createAdmin);
router.post('/admin/read', adminAuthServices.ensureAuthenticated, adminControllers.readAdmin);
router.post('/admin/read-all', adminAuthServices.ensureAuthenticated, adminControllers.readAllAdmins);
router.post('/admin/update', adminAuthServices.ensureAuthenticated, adminControllers.updateAdmin);


module.exports = router;
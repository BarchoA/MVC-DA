const express = require('express');
const router = express.Router();
const controller = require('../controller/ControladorMultas');

router.get('/', controller.getAllBorrowers);

module.exports = router;
const express = require('express');
const router = express.Router();

const application_controller = require('../controllers/application');

router.get('/', application_controller.index);

router.put('/saveThis', application_controller.saveThis);

module.exports = router;
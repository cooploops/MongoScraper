const express = require('express');
const router = express.Router();

const application_controller = require('../controllers/index');

router.get('/', application_controller.index);

module.exports = router;
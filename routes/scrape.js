const express = require('express');
const router = express.Router();

const scrape_controller = require('../controllers/scrape');

router.get('/', scrape_controller.scrape )

module.exports = router;
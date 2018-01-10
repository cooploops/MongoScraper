const express = require('express');
const router = express.Router();

const savedArticles_controller = require('../controllers/savedArctiles');

router.get('/',savedArticles_controller.index);
router.put('/remove',savedArticles_controller.remove);
router.put('/addNote',savedArticles_controller.addNote);
router.get('/getNotes',savedArticles_controller.getNotes);

module.exports = router;
const express = require('express');
const router = express.Router();

const savedArticles_controller = require('../controllers/savedArticles');

router.get('/',savedArticles_controller.index);
router.put('/removeSaved',savedArticles_controller.removeSaved);
router.post('/addNote',savedArticles_controller.addNote);
router.get('/getNotes',savedArticles_controller.getNotes);
router.post('/removeComment',savedArticles_controller.removeComment);

module.exports = router;
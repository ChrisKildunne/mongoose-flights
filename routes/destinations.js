const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

router.get('/show', destinationsCtrl.index)
router.get('/show/:id', destinationsCtrl.show);
router.post('/flights/:id/destinations', destinationsCtrl.create);


module.exports = router;
const express = require('express');
const router = express.Router();
//create ctrl module
const flightsCtrl = require('../controllers/flights')
//ALL ROUTES DEFSULT TO /flights
router.get('/new',flightsCtrl.new)

router.post('/',flightsCtrl.create)

router.get('/', flightsCtrl.index)



module.exports = router;

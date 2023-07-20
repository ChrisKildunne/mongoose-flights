const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/tickets');

router.get('/tickets/new', ticketCtrl.new);
router.post('/tickets', ticketCtrl.create);
router.get('/show/:id', ticketCtrl.addTicket);


module.exports = router;
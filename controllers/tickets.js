const Flight = require('../models/flight');
const Ticket = require('../models/ticket');
const mongoose = require('mongoose')

async function newTicket(req, res) {
  try {
    console.log(req.body)
    const tickets = await Ticket.find({})
    res.render('tickets/new', {tickets });
  } catch (err) {
    res.render('tickets/new', {
      errorMsg: err.message,
    });
  }
}


async function create(req, res) {
  try {
    //const flightId = mongoose.Types.ObjectId(req.body.flightNo)
    const flight = await Flight.findOne({ flightNo: req.body.flightNo });
    let ticketDetails = req.body;
    ticketDetails.flightNo = flight._id;
    console.log(flight._id)
    const newTicket = await Ticket.create(ticketDetails);
    newTicket.save();
    console.log(newTicket)
    res.redirect(`/show/${flight._id}`);
  } catch (err) {
    console.log(err.message);
    res.render('tickets/new', {
      errorMsg: err.message,
    });
  }
}


async function addTicket(req, res) {
    try {
    const flightId = req.params.id;
    const flight = await Flight.findById(flightId);
    const tickets = await Ticket.find({ flight: flight._id });
    res.render('show', { flight, tickets });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}

module.exports = {
  new: newTicket,
  create,
  addTicket
 
};

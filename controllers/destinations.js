const Flight = require('../models/flight');
const Ticket = require('../models/ticket')


async function create(req,res){
  try {
    const flightId = req.params.id;
    const { airport, arrival } = req.body;
    const flight = await Flight.findById(flightId);
    flight.destinations.push({ airport, arrival });
    await flight.save();
    res.redirect(`/show/${flightId}`);
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}
async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flightNo: flight._id });
    console.log(tickets)
    res.render('flights/show', { flight, tickets, newTicketLink: '/tickets/new' });
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
}

async function index(req, res) {
  res.render('flights/show', {
    flights: await Flight.find()
  });
}


module.exports = {
  show,
  index,
  create
};
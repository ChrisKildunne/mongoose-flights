const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


function newFlight(req, res) {
  const oneYearFromToday = new Date();
  oneYearFromToday.setFullYear(oneYearFromToday.getFullYear() + 1);

  res.render('flights/new', {
    errorMsg: '',
    oneYearFromToday: oneYearFromToday.toISOString().slice(0, -8)
  });
}

async function create(req, res) {
  try {
    const flightData = req.body;
    flightData.date = req.body.departs; 

    await Flight.create(flightData);
    res.redirect('/flights/new');
  } catch (err) {
    res.render('flights/new', {
      errorMsg: err.message,
      oneYearFromToday: new Date().toISOString().slice(0, -8)
    });
  }
}

async function index(req, res) {
  res.render('flights/index', {
    flights: await Flight.find()
  });
}

module.exports = {
  new: newFlight,
  create,
  index,
  
};

const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS','DFW','DEN', 'LAX', 'SAN']
    },
    arrival: Date
})

const flightSchema = new mongoose.Schema ({
    airline:  {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport:  {
        type: String,
        enum: ['AUS', 'DEN', 'LAX', 'SAN','DFW']
    },
    flightNo: {type: Number, required: true, min: 10, max: 9999},
    departs: Date,
    destinations: [destinationSchema],
    ticket: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticket'
      }],
}, {
    timestamps: true
});


module.exports= mongoose.model('Flight', flightSchema)
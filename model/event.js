const mongoose = require('mongoose')
const schema = mongoose.Schema;

let eventSchema = new schema({
    eventid: {
        type: String,
        index: true,
        unique: true,
        trim: true,
        required: true
    },
    event_name: String,
    start_date: {
        type: Date,
        default: new Date()
    },
    place: {
        address:String,
        city: { type: String },
        state: { type: String },
        country: { type: String },
        pincode: { type: Number, required: true }
    },
    description: String
})

eventModel=mongoose.Model('events',eventSchema)

module.exports=eventModel
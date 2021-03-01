const mongoose = require('mongoose')
const schema = mongoose.Schema;

let eventSchema = new schema({
    id: {
        type: String,
        index: true,
        unique: true,
        trim: true,
        required: true
    },
    event_name: String,
    start_date: {
        type: String,
        default: new Date()
    },
    place: {
        address:String,
        city: { type: String },
        state: { type: String },
        country: { type: String },
        pincode: { type: String, required: true }
    },
    description: String
})

eventModel=mongoose.model('events',eventSchema)

module.exports=eventModel
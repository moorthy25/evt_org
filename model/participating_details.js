const mongoose = require('mongoose')
const schema = mongoose.Schema;

let participateSchema = new schema({
    id: {
        type: String,
        index: true,
        unique: true,
        trim: true,
        required: true
    },
    payment_id: {
        type:String,
        required:true
    },
    person_id: {
        type: String
    },
    competition_id: String
})

participateModel=mongoose.Model('participate_details',participateSchema)

module.exports=participateModel
const mongoose = require('mongoose')
const schema = mongoose.Schema;

let participateSchema = new schema({
    payment_id: {
        type:String,
        required:true,
        unique:true
    },
    person_id: {
        type: String
    },
    competition_id: String
})

participateModel=mongoose.model('participate_details',participateSchema)

module.exports=participateModel
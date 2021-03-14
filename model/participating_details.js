const mongoose = require('mongoose')
const schema = mongoose.Schema;

let participateSchema = new schema({
    payment_id: {
        type:String
    },
    person_id: {
        type: String
    },
    competition_id: {
        type: String
    }
})

participateModel=mongoose.model('participate_details',participateSchema)

module.exports=participateModel
const mongoose = require('mongoose')
const schema = mongoose.Schema;

let paymentSchema = new schema({
    paymentid: {
        type: String,
        index: true,
        required: true
    },
    orderid:{
        type: String,
        required: true
    },
    signature:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    amount: {
        type: Number, 
        required: true
    },
    success_status: Boolean
})

paymentModel=mongoose.model('payment_details',paymentSchema)

module.exports=paymentModel
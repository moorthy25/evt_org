const mongoose = require('mongoose')
const schema = mongoose.Schema;

let paymentSchema = new schema({
    paymentid: {
        type: String,
        index: true,
    },
    orderid:{
        type: String,
        required: true
    },
    signature:{
        type: String
    },
    date: {
        type: String,
        default: new Date()
    },
    amount: {
        type: Number, 
        required: true
    },
    success_status: {
        type:Boolean,
        default:false
    }
})

paymentModel=mongoose.model('payment_details',paymentSchema)

module.exports=paymentModel
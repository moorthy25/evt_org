const mongoose = require('mongoose')
const schema = mongoose.Schema;

let invitaionSchema = new schema({
    name: String,
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        index: true,
        unique:true
    },
    phone_no: {
        type:Number,
        unique:true
    }
})

invitationModel=mongoose.model('invitation',invitaionSchema)

module.exports=invitationModel
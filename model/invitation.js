const mongoose = require('mongoose')
const schema = mongoose.Schema;

let invitaionSchema = new schema({
    id: {
        type: String,
        index: true,
        unique: true,
        trim: true,
        required: true
    },
    name: String,
    emailid: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        index: true
    },
    phone_no: Number
})

invitationModel=mongoose.Model('invitation',invitaionSchema)

module.exports=invitationModel
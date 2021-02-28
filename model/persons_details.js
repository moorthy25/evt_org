const mongoose = require('mongoose')
const schema = mongoose.Schema;

let personSchema = new schema({
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
    phone_no:Number,
    institution: String
})

personModule=mongoose.Model('persons_details',personSchema)

module.exports=personModule
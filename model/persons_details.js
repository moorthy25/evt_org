const mongoose = require('mongoose')
const schema = mongoose.Schema;

let personSchema = new schema({
    name: String,
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        index: true
    },
    phone_no:Number,
    institution: String
})

personModule=mongoose.model('persons_details',personSchema)

module.exports=personModule
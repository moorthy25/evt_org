const mongoose = require('mongoose')
const schema = mongoose.Schema;

let competitionSchema = new schema({
    id: {
        type: String,
        index: true,
        unique: true,
        trim: true,
        required: true
    },
    competition_name: String,
    max_mark: {
        type: Number,
        default: 100
    },
    price: {
         type: Number
    },
    rules_pdf_path: String
})

competitionModel=mongoose.Model('competitions',competitionSchema)

module.exports=competitionModel
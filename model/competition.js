const mongoose = require('mongoose')
const schema = mongoose.Schema;

let competitionSchema = new schema({
    competition_name: String,
    max_mark: {
        type: Number,
        default: 100
    },
    price: {
         type: Number
    },
    rules_pdf_path: {
        type:String,
        default: null
    }
})

competitionModel=mongoose.model('competitions',competitionSchema)

module.exports=competitionModel
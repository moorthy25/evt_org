const mongoose = require('mongoose')
const schema=mongoose.Schema;
//initialize thte schema
const userSchema = new schema({
    name: {
        type: String,
        required: [true, "Name is required field"]
    },
    age: {
        type: Number,
    },
    dob: {
        type: String,
        required: [true, "DOB is required"]
    },
    mobile: String
})
//create a model using the schema called userSchema
const userModel=new mongoose.model('user_details',userSchema)
//export this user model
module.exports=userModel
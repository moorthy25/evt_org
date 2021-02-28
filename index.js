//first require express server
const express = require('express')
//require mongoose
const mongoose=require('mongoose')
//initialize express app
const app=express();
//connecting to the mongoose db
mongoose.connect('mongodb://localhost:27017/demo_vmm',{useNewUrlParser:true,useUnifiedTopology:true},function(err){
    if(err){
        console.log('Error on connecting to mongodb')
        console.log(err)
    }else{
        console.log('mongodb connected successfully')
    }
})
//using the body-parser as middleware to convert all the data in to JSON format
app.use(require('body-parser').json())

//using a middleware called demo for GET,POST,UPDATE,DELETE
app.use('/demo',require('./routes/demo'))

app.listen(process.env.port||80,function(err){
    if(err) throw err;
    console.log('app is running on localhost')
})
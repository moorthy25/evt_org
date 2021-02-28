//require express server
const express=require('express')
//initialize the routing table
const router=express.Router();
//importing the user model package
const userModel=require('../model/user.model')
//select alll events
router.get('/event',function(req,res){
    res.send({
        1:'debugging',
        2:'web development'
    })
})

//create an event
router.post('/event',function(req,res){
    res.send({
        // body:req.body,
        name:req.body.name,
        age:req.body.age,
        dob:req.body.dob,
        message:'on create route'
    })
})

//update an event
router.put('/event/:id',function(req,res){
    res.send({event_id:req.params.id,
        message:'event updated'
    })
})

//delete an event
router.delete('/event/:id',function(req,res){
    res.send({event_id:req.params.id,
        message:'event deleted'
    })
})

//export the demo route
module.exports=router;
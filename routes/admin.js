//require express server
const express = require('express')
//initialize the routing table
const router = express.Router();

const AdminModel = require('../model/admin_details')

router.post('/createUser',function(req,res){
    AdminModel.create(req.body).then(function (success) {
        console.log('data inserted successfully')
        res.send(success)
    },function (fail) {
        console.log('Error while insertion')
        res.send({error:"Error while insertion"})
    })
})

module.exports = router;
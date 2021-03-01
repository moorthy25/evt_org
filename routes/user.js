//require express server
const express = require('express')
//initialize the routing table
const router = express.Router();
const personModule = require('../model/persons_details')

router.post('/signup', function (req, res) {
    personModule.create(req.body).then(function (success) {
        console.log('data inserted successfully')
        res.send(success)
    }, function (fail) {
        console.log('Error while insertion')
        res.send({ error: "Error while insertion" })
    })
})


module.exports = router;
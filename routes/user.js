//require express server
const express = require('express')
//initialize the routing table
const router = express.Router();
const personModule = require('../model/persons_details')
const paymentModel = require('../model/payment_details')
const participateModel = require('../model/participating_details')

router.post('/signup', function (req, res) {
    personModule.create(req.body).then(function (success) {
        console.log('data inserted successfully')
        res.send(success)
    }, function (fail) {
        console.log('Error while insertion')
        res.send({ error: "Error while insertion" })
    })
})

router.post('/payment', function (req, res) {
    paymentModel.create(req.body).then(function (success) {
        console.log('data inserted successfully')
        res.send(success)
    }, function (fail) {
        console.log('Error while insertion')
        res.send({ error: "Error while insertion" })
    })
})

router.post('/participant', function (req, res) {
    participateModel.create(req.body).then(function (success) {
        console.log('data inserted successfully')
        res.send(success)
    }, function (fail) {
        console.log('Error while insertion')
        res.send({ error: "Error while insertion" })
    })
})


module.exports = router;
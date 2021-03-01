//require express server
const express = require('express')
//initialize the routing table
const router = express.Router();
const AdminModel = require('../model/admin_details')
const invitaionModel = require('../model/invitation')
const eventModel = require('../model/event')

router.post('/createUser', function (req, res) {
    AdminModel.create(req.body).then(function (success) {
        console.log('data inserted successfully')
        res.send(success)
    }, function (fail) {
        console.log('Error while insertion')
        res.send({ error: "Error while insertion" })
    })
})

router.post('/createEvent', function (req, res) {
    console.log("in create event route")
    // const AdminModel = require('../model/admin_details')
    console.log("under create event route")
    eventModel.create(req.body).then(function (success) {
        console.log('data inserted successfully')
        res.send(success)
    }, function (fail) {
        console.log('Error while insertion')
        res.send({ error: "Error while insertion" })
    })
})


router.post('/addInvitee', function (req, res) {

    invitaionModel.create(req.body).then(function (success) {
        console.log('data inserted successfully')
        res.send(success)
    }, function (fail) {
        console.log('Error while insertion')
        res.send({ error: "Error while insertion" })
    })
})

module.exports = router;
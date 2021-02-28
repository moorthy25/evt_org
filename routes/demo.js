//require express server
const express = require('express')
//initialize the routing table
const router = express.Router();
//importing the user model package
const userModel = require('../model/user.model')
//select alll events
router.get('/event', function (req, res) {
    res.send({
        1: 'debugging',
        2: 'web development'
    })
})

//create an event
router.post('/event', function (req, res) {
    userModel.create(req.body).then(function (success, failure) {
        if (success) {
            console.log('data inserted successfully')
            res.send(success)

        } else {
            res.send(failure)
        }
    })
})

//update an event
router.put('/event/:id', function (req, res) {
    res.send({
        event_id: req.params.id,
        message: 'event updated'
    })
})

//delete an event
router.delete('/event/:id', function (req, res) {
    res.send({
        event_id: req.params.id,
        message: 'event deleted'
    })
})

//export the demo route
module.exports = router;
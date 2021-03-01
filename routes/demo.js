//require express server
const express = require('express')
//initialize the routing table
const router = express.Router();
//importing the user model package
const userModel = require('../model/user.model')
//select alll events
router.get('/event', function (req, res, next) {
    userModel.find({}, { _id: 0,__v:0 }, (err, data) => {
        if (!err) {
            res.send(data)
        }else{
            res.send({error:"Can't get the data"})
        }
    })
})

//create an event
router.post('/event', function (req, res, next) {
    userModel.create(req.body).then(function (success) {
        console.log('data inserted successfully')
        res.send(success)
    }).catch(next)
})

//update an event
router.put('/event/:id', function (req, res, next) {
    userModel.findByIdAndUpdate({ _id: req.params.id }, req.body, function (err) {
        if (err) {
            res.send("There is an error " + err)
        } else {
            userModel.find({ _id: req.params.id }, function (err, data) {
                if (err) { res.send({ msg: "error" }) }
                res.send({ updated_data: data })
            })
        }
        // res.send({
        //     event_id: req.params.id,
        //     message: 'event updated'
        // })
    })
})

//delete an event
router.delete('/event/:id', function (req, res, next) {
    userModel.findByIdAndDelete({ _id: req.params.id }, function (err, doc) {
        if (doc == null) {
            res.send({ error: "There is an error " })
        } else {
            res.send({ deleted_data: doc })
        }
    })
})

//export the demo route
module.exports = router;
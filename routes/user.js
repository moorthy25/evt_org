//require express server
const express = require('express')
//initialize the routing table
const router = express.Router();
const personModule = require('../model/persons_details')
const paymentModel = require('../model/payment_details')
const participateModel = require('../model/participating_details')
const competitionModel = require('../model/competition')
const Razorpay = require('razorpay')



var instance = new Razorpay({ key_id: 'rzp_test_H0l7ruuVdzWaFR', key_secret: 'oM28EUCTvyGkJR3Ar6PjfNBH' })


router.post('/validate', function (req, res) {
    personModule.find({ email: req.body.email }).then(function (val) {
        var text = val;
        competitionModel.find({}, { competition_name: 1, price: 1 }).then((success) => {
            res.send({ status: true, competition: success, user_details: text })
        })
    }, function (fail) {
        console.log('Error while insertion')
        res.send({ status: false })
    })
})

router.post('/signup', function (req, res) {
    personModule.create(req.body).then(function (success) {
        console.log('data inserted successfully')
        res.send({ status: true })
    }, function (fail) {
        console.log('Error while insertion')
        res.send({ status: false })
    })
})

router.post('/paymentSuccess', function (req, res) {
    console.log(req.body)
    console.log(req)
    paymentModel.findByIdAndUpdate({ paymentid: req.body.razorpay_order_id }, { payment_id: req.body.razorpay_payment_id, signature: req.body.razorpay_signature, success_status: true }).then(function (success) {
        console.log('payment Success')
        res.send({ status: true })
    }, function (fail) {
        console.log('Error while getting success payment')
        res.send({ status: false })
    })
})


router.post('/payment', function (req, res) {
    //creating a id for order id using amount alone
    paymentModel.create({ amount: req.body.amount }).then(function (success) {
        console.log('amount inserted into payment_details successfully')
        // res.send(success)

        //razorpay integration
        var options = {
            amount: req.body.amount * 100,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_" + success._id
        };
        instance.orders.create(options, function (err, order) {
            if (err) console.log(err)

            paymentModel.findByIdAndUpdate({ _id: success._id }, { "paymentid": order.id, "orderid": order.receipt }).then((success) => {
                console.log(req.body);
                res.send({ status: true, order: order })
                //participateModel.create({ person_id: req.body.email, competition_id: req.body.competition_id }).then((success) => res.send({ status: true, order: order }), (fail) => { console.log('participate Model create is getting error');
                   // res.send({ status: false })})
            }, (fail) =>{console.log('paymentModel findBy is getting error')
                 res.send({ status: false })
        })
        });

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

router.post('/login_validate', function (req, res) {
    personModule.find({email:req.body.email,password:req.body.pass},{email:1}).then(function (success) {
       
        res.send(success)
        
    }, function (fail) {
        console.log('Error with login table')
        res.send({ status:false })
    })
})


module.exports = router;
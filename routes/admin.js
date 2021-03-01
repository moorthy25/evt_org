var mail = require('nodemailer');
//require express server
const express = require('express')
//initialize the routing table
const router = express.Router();

//import file system to read html for send mail
const fs=require('fs')
const AdminModel = require('../model/admin_details')
const invitaionModel = require('../model/invitation')
const eventModel = require('../model/event')
const competitionModel = require('../model/competition')

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
router.get('/',(req,res)=>{
    res.redirect('/index.html')
})

router.get('/sendMail',function(req,res){
    invitaionModel.find({},{email:1,_id:0}).then((data)=>{
        var emaillist="18bca135@americancollege.edu.in";//all mail send to this mail for testing purpose
        data.forEach(element => {
            emaillist+=","+element.email
        });
        console.log('emails:'+emaillist)
            mail_details = {
                from: 'ttemp1094@gmail.com',
                to: emaillist,
                subject: 'Hi from Moorthy',
                text: 'Hello for test mailler from node Mailer',
                html: fs.readFileSync(__dirname+"/hover.txt",'utf-8',(err,data)=>{
                    if(err){ console.log("error in read file")}
                    // buf=Buffer.from(data);
                    return data;
                })
            }
            mailer = mail.createTransport({
                service: 'gmail',
                auth: {
                    user: 'ttemp1094@gmail.com',
                    pass: '6yL{A9q9Ab%D4X'
                }
            });
            mailer.sendMail(mail_details, function (err, result) {
                if (err) {
                    console.log(err)
                    res.send(err)
                } else {
                    console.log("Mail sent: " + result.response)
                    res.send("Mail sent: " + result.response)
                }
            })
        // res.send(mail)
    },(err)=>{res.send({"error":err})})
})

router.post('/addCompetition', function (req, res) {

    competitionModel.create(req.body).then(function (success) {
        console.log('data inserted successfully')
        res.send(success)
    }, function (fail) {
        console.log('Error while insertion')
        res.send({ error: "Error while insertion" })
    })
})

module.exports = router;
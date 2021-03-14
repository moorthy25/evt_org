var mail = require('nodemailer');
//require express server
const express = require('express')
//initialize the routing table
const router = express.Router();
// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })
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

router.get('/getInvitee',(req,res)=>{
    invitaionModel.find({},{email:1,name:1,_id:0}).then((data)=>{
        res.send(data)
        });
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
router.get('/mail',(req,res)=>{
    res.redirect('/mail.html')
})

router.post('/sendMail',function(req,res){
    console.log('inside send mail')
    invitaionModel.find({},{email:1,name:1,_id:0}).then((data)=>{
    
        console.log('inside invitaion model')
        var emaillist="18bca135@americancollege.edu.in";//all mail send to this mail for testing purpose
        data.forEach(element => {
            emaillist+=","+element.email
        });
        
        console.log('emails:'+emaillist)
        mail_details = {
            from: 'ttemp1094@gmail.com',
            to: emaillist,
            subject: 'Hover Invitation from The American College',
            text: req.body.message,
            html: fs.readFileSync(__dirname+"/hover.html",'utf-8',(err,data)=>{
                if(err){ console.log("error in read file")}
                // buf=Buffer.from(data);
                console.log('inside hover.html read function')
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
                console.log('inside mailsend err')
                console.log(err)
                res.send({status:false})
            } else {
                console.log("Mail sent: " + result.response)
                res.send(result.response)
                }
            })
        res.send(mail)
    },(err)=>{
        console.log(err);
        console.log("exited from find function");
        res.send({status:false})})
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
var mongoose = require('mongoose');
var users = require('./users');
var Schema = mongoose.Schema;

var loginsessionSchema= new Schema({
  userid:{type:Schema.Types.ObjectId,ref:'Users',required:true},
  sessionid:{type:String,index:true,unqiue:true},
  ip:{type:String,trim:true},
  startworth:{type:Number,default:0},
  endworth:{type:Number,default:0},
  logintime:{type:Date,default:new Date()},
  logouttime:{type:Date,default:new Date()},
  totalbet:{type:Number,default:0.0},
  totalwin:{type:Number,default:0.0}
},{collection:'loginsession'});
LoginsessionModel = mongoose.model('LoginSession',loginsessionSchema);
module.exports={LoginsessionModel}; 
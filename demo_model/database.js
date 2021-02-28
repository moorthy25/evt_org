var mongoose = require('mongoose');
var con;
var conflag=false;
var init=function initdb(){
  mongoose.connect("mongodb://localhost/tutorialtous",callback);
}
var callback = function(err,data){
  if(err)
    console.log(err);
  else{
    console.log("connection success");
    conflag=true;
    con = mongoose.connection;
  } 
} 
module.exports={con,init,conflag};
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gamesSchema= new Schema({
  gameid:{type:String,index:true,unqiue:true},
  gamename:{type:String,trim:true},
  state:{type:Number,default:0},//0 Inactive 1 active
  minbet:{type:Number,default:1.0},
  maxbet:{type:Number,deafult:1000.0}
},{collection:'games'});
GamesModel = mongoose.model('Games',gamesSchema);
module.exports={GamesModel}; 
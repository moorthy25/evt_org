var mongoose = require('mongoose');
var users = require('./users');
var ls = require('./loginsession');
var games = require('./games');
var Schema = mongoose.Schema;

var gameplaylogsSchema = new Schema({
    logid: { type: String, index: true, trim: true, unique: true, required: true },
    userid: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    sessionid: { type: Schema.Types.ObjectId, ref: 'LoginSession', required: true },
    gameid: { type: Schema.Types.ObjectId, ref: 'Games', required: true },
    playdetails: { type: String, trim: true },
    betamount: { type: Number, default: 0 },
    winamount: { type: Number, default: 0 },
    playtime: { type: Date, default: new Date() },
}, { collection: 'gameplaylogs' });
GameplaylogsModel = mongoose.model('GamePlayLogs', gameplaylogsSchema);
module.exports = { GameplaylogsModel }; 
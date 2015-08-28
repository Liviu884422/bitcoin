var later = require("later");
var gBD = require('./getBitcoinData.js');

var schedule = later.parse.text('every 10 seconds');
later.setInterval(gBD.getBitcoinData,schedule);
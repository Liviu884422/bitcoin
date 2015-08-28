var Sequelize = require('sequelize');
var request = require("request");
var later = require("later");
var path = require("path");
var url = 'http://www.bitstamp.net/api/ticker/';

var models = ['bitcoin','user'];

var sequelize = new Sequelize ('bitcoin','root','pass',{
  dialect:'mysql',
})
  
models.forEach(function(model){
  module.exports[model]=sequelize.import(path.join(__dirname, model))
  return
})

sequelize.sync();

module.exports.sequelize = sequelize;
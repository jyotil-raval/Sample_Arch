module.exports = (function(){

  var models = require('../models');
  var db = require('../core/db');
  

  var m = {
    find: function(req, res){
      db.Collection('users').find({});
    },
    signIn: function (req, res) {



    }
    // findOne: function(id){
    //
    // },
    // update: function(oldObj, newObj){
    //
    // },
    // delete: function(obj){
    //
    // },
    // create: function(obj){
    //
    // }
  };

  return m;
})();

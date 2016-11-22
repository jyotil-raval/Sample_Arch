module.exports = (function(){
    var db = require('../db');

    var m = {
        GET: function(req, res, next){
          console.log(req);
          console.log(res);
            db.users.find();
        },
        POST: function(req, res, next){

        }
    };

    return m;
})();

module.exports = (function(){


var mongoose = require('mongoose');

var Schema = mongoose.Schema;

    var UserSchema = new Schema({
        emailAddress: { type : String, required : true },
        server: { type : String, required : true },
        title : { type : String, required : true},
        userName : { type : String, required : true}
    });
    mongoose.model('User', UserSchema);

    return UserSchema;

})();

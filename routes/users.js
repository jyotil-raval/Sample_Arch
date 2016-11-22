module.exports = (function(){

    var express = require('express');
    var api = require('../api').user;

    var m = express.Router();

    m.route('/users')
        .get(api.GET)
        .post(api.POST);
        // .put(api.PUT)
        // .delete(api.DELETE)
        // .patch(api.PATCH);

  

    return m;
})();

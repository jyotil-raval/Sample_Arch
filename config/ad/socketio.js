var config = require('./config'),
    cookieParser = require('cookie-parser'),
    passport = require('passport');

module.exports = function (server, io) {
    io.use(function (socket, next) {
        cookieParser(config.sessionSecret)(socket.request, {}, function (err) {
            var sessionId = socket.request.signedCookies['connect.sid'];
            //console.log(sessionId);
            next(null, true);
            //mongoStore.get(sessionId, function (err, session) {
            //    if (err) {
            //        console.log(err);
            //    }
            //    socket.request.session = session;
                //passport.initialize()(socket.request, {}, function () {
                //    passport.session()(socket.request, {}, function () {
                //        if (socket.request.user) {
                //            next(null, true);
                //        } else {
                //            next(new Error('User is not authenticated'), false);
                //        }
                //    })
                //});
            //});
        });
    });
    io.on('connection', function (socket) {

        require('../app/controllers/socket')(io, socket);

        //require('../app/controllers/chat')(io, socket);
    });
};




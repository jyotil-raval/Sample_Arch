var config = require('./config.js');
var http = require('http');
var https = require('https');
var socketio = require('socket.io');
var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var passport = require('passport');
var boom = require('express-boom');
var errormail = require('../app/mail/errormail/errormail');
var path = require('path');


module.exports = function(db) {
    var app = express();
    var server;
    if (config.useSSL) {
        server = https.createServer(config.sslOptions, app);
    }
    else {
        server = http.createServer(app);
    }
    // var io = socketio.listen(server);
    app.use(function (req, res, next) {
        var allowedOrigins = config.allowedOrigins;
        var origin = req.headers.origin;
        if (allowedOrigins.indexOf(origin) > -1) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
        //Allow wild character if you are not using socket. or comment above code to allow all urls.
        //res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Credentials", "true");
        res.header("Access-Control-Allow-Methods", "GET, POST,HEAD, OPTIONS, PUT, DELETE, PATCH");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorize, Cache-Control, Pragma, client-offset");
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
        next();
    });

    app.use(morgan('dev'));
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended : true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());

    //var mongoStore = new MongoStore({
    //    db: db.connection.db
    //});

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret,
        //store: new MongoStore({ mongooseConnection: db.connection })
    }));

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(boom());

    //app.use(function (err, req, res, next) {
    //    console.log("All Errror haNDLER");
    //    console.log(err.stack);
    //    errormail.sendErrorMail(err);
    //    next();
    //});
    //var fs = require('fs');
    //var util = require('util');
    //var log_file = fs.createWriteStream(__dirname + '/debug.log', { flags : 'w' });
    //var log_stdout = process.stdout;
    //console.log = function (d){
    //    log_file.write(util.format(d) + '\n');
    //    log_stdout.write(util.format(d) + '\n');
    //}

    require('./socketio')(server, io);

    // require('../app/helper/uploadFile')(app);

    // require('../app/routes/role')(app);
    // require('../app/routes/index')(app);
    // require('../app/routes/seed')(app);

    // var cronJob = require('../app/handler/cron');
    // cronJob.init();

    app.use(express.static('./uploads'));

    console.error = function (e){
        console.log(e);
        if(process.env.NODE_ENV != 'development')
            errormail.sendErrorMail(e);
    }

    return server;
};

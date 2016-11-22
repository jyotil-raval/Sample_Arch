var fs = require('fs');
module.exports = {
    //development Configuration here127.0.0.1
    db : 'mongodb://127.0.0.1:27017/users',
    sessionSecret: 'developmentSessionSecret',
    tokenSecret : 'jwtTokenSecret',
    port : 2999,
    apiUrl : "http://localhost:2999",
    webUrl : "http://localhost:9000",
    mail : {
        user : "Productivet Technologies, LLC",
        pass : "qSWeYTieVC_qd9fy0voPMg",
        host : 'smtp.mandrillapp.com',
        port : '587',
        from : 'team@e.beperfeqta.com'
    },
    useSSL : false,
    sslOptions : {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.cer'),
    },
    error : {
    mailTo : 'error-beperfeqta@yopmail.com'
    },
    activeCron : true,
    allowedOrigins : ['http://localhost:5000', 'http://127.0.0.1:5000', 'http://jyotil.example.com'],
    product : "Login App",
    company : "ProT System",
    support : 'jyotil.r@productivet.com',
}

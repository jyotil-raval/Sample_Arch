module.exports = {
  //development Configuration here127.0.0.1
  db : 'mongodb://127.0.0.1:27017/users',
  sessionSecret: 'developmentSessionSecret',
  tokenSecret : 'jwtTokenSecret',
  port : 5002,
  url : "http://192.168.1.90:5002",
  frontUrl : "http://192.168.1.90:8081",//"http://180.211.96.85:8081",
  mail : {
    user : "Productivet Technologies, LLC",
    pass : "qSWeYTieVC_qd9fy0voPMg",
    host : 'smtp.mandrillapp.com',
    port : '587',
    from : 'team@e.beperfeqta.com'

  },
  badgeSystem : {
    activeCron : true
  },
  product : "Sigma360",
  company : "Productive Technologies",
  support : 'support@beperfeqta.com',
  mailpassreseturl : "http://192.168.1.90:8081/#/passwordreset/",
  authExpireHours: 72 * 60 * 60 * 1000,
  maxFailMailSendAttempt : 5,
  failMailSendAttemptAfterEveryHour : 8
}

module.exports = (function(){
    var m = {
        server: {
            host: 'localhost',
            port: 2999,
            ssl: false
        },
        db: {
            type: 'mongodb',
            host: 'localhost',
            port: 27017,
            user: '',
            password: '',
            database: 'SignInDb'
        },
        logging: {
            level: "info"
        }
    };

    return m;
})();

const Authentication = require('./controllers/authentication');
const passport = require('passport');
const passportService = require('./services/passport');

const requireAuth =   passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app){
    // app.get('/', requireAuth, function(req, res){
    //     res.send({hi:'asd'});
    // });
    app.post('/signup',  Authentication.signup);
    app.post('/signin', requireSignin, Authentication.signin);
}
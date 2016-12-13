var express = require('express');
var passport = require('passport');
var DropboxStrategy = require('passport-dropbox');
var app = express();
var session = require('express-session');
let users = [];
app.use(passport.initialize());
app.use(session(
    {
        secret: 'clave secreta',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }
));

passport.serializeUser((user, done) => {
    //Aqui serializo el usuario
    done(null, user);
});
passport.deserializeUser((user, done) => {

    //Aqui deserializo el usuario
    done(null, user);
});


passport.use(new DropboxStrategy({
    consumerKey: 'e8f1ha6bg5ktzai',
    consumerSecret: 'pfcod0026gg07fz',
    callbackURL: 'http://localhost:8080/dropbox'
}, (token, tokenSecret, profile, next) => {
    console.log("perfil de dropbox ", profile);
    if (users[profile.id]) {
        next(null, users[profile.id]);
    } else {
        users[profile.id] = profile;
        next(null, profile);
    }
}))

app.get("/dropbox", passport.authenticate('dropbox'), (request, response) => {
    response.send("Soy feliz");
})

app.listen(8080);
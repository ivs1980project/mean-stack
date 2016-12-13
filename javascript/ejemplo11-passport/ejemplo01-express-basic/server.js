var express = require('express');
var passport = require('passport');
var Strategy = require('passport-http').BasicStrategy;
var app = express();
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', request.headers.origin);
    response.header('Access-Control-Allow-Headers', 'Authorization');
    next();
    //request.headers.origin --> con esta opcion saltamos el cross origin, permitimos todos los origenes
});

passport.use(new Strategy((username, password, done) => {
    console.log("username: " + username + " password " + password);
    //Evaluo si el usuario existe!! El mensaje de error de autenticacion debe ser genérico
    if (username == "luis" && password == "luis") {
        done(null, true);
    } else {
        done(null, false);
    }
}));

app.get("/home", passport.authenticate('basic', { session: false }), (request, response) => {
    console.log("Acceso permitido");
    response.send("Acceso concedido");
});

app.post("/home", passport.authenticate('basic', { session: false }), (request, response) => {
    console.log("Acceso permitido");
    response.send("Acceso concedido");
});

app.listen(8080);
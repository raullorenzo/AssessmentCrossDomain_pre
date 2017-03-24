var express = require("express"),// Express: Framework HTTP para Node.js
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    cors = require('cors');


var app = express();
var passport = require('passport');
var session = require('express-session');


app.all('/*', function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    return next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());
// Ruta de los archivos estáticos (HTML estáticos, JS, CSS,...)
app.use(express.static(__dirname + '/public'));

var server = require('http').Server(app);
server.listen(3000, function () {
    console.log("Servidor escuchando en, http://localhost:3000");
});


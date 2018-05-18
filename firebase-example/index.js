/**
 * Example Express APP
 */
const express = require('express');
const http = require('http');
const cors = require("cors");
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const functions = require("firebase-functions")


 
const app = express();

//middle-ware config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: true }));

//log every request
app.use(function (req, res, next) {
	console.log(req.method + ": " + req.originalUrl);
	next();
});


// requests
app.get('/', function (req, res) {
	console.log('test service');
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('test service\n');	
});

app.get('/user/:id', function (req, res) {
	console.log('request for user with id: ' + req.params.id);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('ok');	
});


const api1 = functions.https.onRequest(app)

//exports the app's requests as a single module
module.exports = {
  api1
}


/*
const PORT = 8081;
app.set('port', PORT);
const server = http.createServer(app);

server.listen(PORT);

server.on('listening', function () {
	 var addr = server.address();
	 var bind = typeof(addr) === 'string' ? 'pipe ' + addr: 'port ' + addr.port;
	 console.log('Listening on ' + bind);
});

*/

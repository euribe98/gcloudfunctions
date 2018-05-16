var app = require('./app');

function App(req,res) {
    if (!req.url) {
        req.url = '/';
        req.path = '/';
    }
    return app(req,res);
}
var converter = App;

var request = require('request');

//convert to fahrenheit using 'request' library
function Fahrenheit (req, resp) {	
	let temp = req.query.temp;
	
	if (!temp) {
		resp.status(400).send('temp query parameter undefined!');
	}
	else {
		var url = 'http://localhost:8010/gcloudfunctions/us-central1/converter/api/conversions/to-fahrenheit/'
			+ temp;
		request(url, function (error, response, body) {
		  console.log('error:', error); // Print the error if one occurred
		  console.log('status:', response && response.statusCode); // Print the response status code if a response was received
		  console.log('body:', body); 
		  resp.status(200).send(body);
		});
	}
}


//convert to fahrenheit using 'simple-get' library
/*
var getreq = require('simple-get');

function Fahrenheit (req, resp) {
	
	let temp = req.query.temp;
	
	if (!temp) {
		resp.status(400).send('temp query parameter undefined!');
	}
	else {

		//eg: curl -X POST http://localhost:8010/gcloudfunctions/us-central1/tofahrenheit?temp=500
		console.log ('query: ' + req.query + ", " + req.query.temp)
		
		var url = 'http://localhost:8010/gcloudfunctions/us-central1/converter/api/conversions/to-fahrenheit/'
			+ temp;
	
		getreq.concat(url, function (err, res, data) {
			if (err) throw err;
			console.log("statusCode: " + res.statusCode); 
			console.log("response : " + data); 
			resp.status(200).send(data);
		});		
		
	}
}*/

var tofahrenheit = Fahrenheit;

/* export cloud functions */
module.exports = {
	converter,
	tofahrenheit
}
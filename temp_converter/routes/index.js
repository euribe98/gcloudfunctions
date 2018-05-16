var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
	
  var model = {
    title:'Converter',
    value:'-40',
    answer:'-40'
  };

  res.render('index', model);
});

/* sends a post given form submit */
router.post('/', function(req, res) {
  var valueToConvert = req.body.valuetoconvert;
  var whichFunction;
  
  if(req.body.conversion === 'Celsius'){
    whichFunction = 'to-celsius';
  }
  else{
    whichFunction = 'to-fahrenheit';
  }
  
  var URL = "http://localhost:8081/api/conversions/";

  request.get({ url: URL + whichFunction + "/" +  valueToConvert},
      function(error, response, body) {
        if (!error && response.statusCode === 200) {

          var data = JSON.parse(body);

          var model = {
            title:'Converter',
            value:data.valueToConvert,
            answer:data.convertedValue
          };

          res.render('index', model);
        }
      });
});

module.exports = router;
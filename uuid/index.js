/**
 * uuid functions
 * https://www.npmjs.com/package/uuid
 */

var uuidv1 = require('uuid/v1');
var uuidv3 = require('uuid/v3'); //Version 3 (namespace):
var uuidv4 = require('uuid/v4');
var uuidv5 = require('uuid/v5'); //Version 5 (namespace):


/**
 * Returns uuid
 * Use: functions call --data { json }
 * json body:  
 * 	'{"ver":"v1"}'
 *  '{"ver":"v4"}'
 *  '{"ver":"v3", "dns": "hello.example.com"}'
 *  '{"ver":"v3", "url": "http://example.com/hello"}'
 *  '{"ver":"v3", "custom": "hello world"}'
 */
exports.uuid = (req, res) => {
		 
	if (req.body === undefined) {
		res.status(400).send('No message defined!');
	} 
	else { 	
		ver = req.body.ver;
		dns = req.body.dns;
		url = req.body.url;
		custom = req.body.custom;
		
		console.log("PAYLOAD:" + ver + ","+ dns + "," + url + "," + custom);
		
		if (ver == 'v1') {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json ({"uuid": uuidv1()});
		}
		else if (ver == 'v4') {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json ({"uuid":  uuidv4()});
		}
		else if (ver == 'v3') {
			res.setHeader('Content-Type', 'application/json');
			if (dns != undefined) {
				console("uuid v3 with dns");
				res.status(200).json ({"uuid": uuidv3(dns, uuidv3.DNS) });
			}else if (url != undefined) {
				console("uuid v3 with url");
				res.status(200).json ({"uuid": uuidv3(url, uuidv3.URL) });
			}else if (custom != undefined) {
				console("uuid v3 with custom");
				res.status(200).json ({"uuid": uuidv3(custom, uuidv4()) });
			}	
		}
		else if (ver == 'v5') {
			if (dns !=  undefined) {
				console("uuid v5 with dns");
				res.status(200).json ({"uuid": uuidv5(dns, uuidv5.DNS) });
			}else if (url != undefined) {
				console("uuid v5 with url");
				res.status(200).json ({"uuid": uuidv5(url, uuidv5.URL) });
			}else if (custom != undefined) {
				console("uuid v5 with custom");
				res.status(200).json ({"uuid": uuidv5(custom, uuidv4()) });
			}		
		}
		else {
			res.status(500).send("Invalid json")
		}
	}
};



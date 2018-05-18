

# firebase-example
An example of exporting an express application to cloud functions


## Usage
 install dependencies
 	npm install
 	
 deloy using the emulator
 	functions deploy api1  --trigger-http
 	
 test
 	curl -X GET -i http://localhost:8010/gcloudfunctions/us-central1/api1/user/123
 	curl -X GET -i http://localhost:8010/gcloudfunctions/us-central1/api1/



## Developing



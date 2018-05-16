# Example of deploying an Express App with Google Cloud Functions

# install dependencies
cd ~/temp-converter
npm install


# run
<pre>
to run:	
   npm start
response:
   > express-app@0.0.0 start /Users/evan/Documents/workspace/nodejs/express/temp_converter
   > node ./bin/www
	Listening on port 8081
	
Open the following url in your browser:
	http://localhost:8081/
   
</pre>

# test api
<pre>
	http://localhost:8081/api/conversions/to-fahrenheit/100
	response:
		{"valueToConvert":100,"convertedValue":212}
	http://localhost:8081/api/conversions/to-celsius/32
	response:
		{"valueToConvert":32,"convertedValue":0}
</pre>

# deploy and test cloud functions
<pre>
	deploy:
		 functions deploy converter --trigger-http
		 functions deploy tofahrenheit --trigger-http
	curl:
		curl -X POST http://localhost:8010/gcloudfunctions/us-central1/converter 
		curl -X POST http://localhost:8010/gcloudfunctions/us-central1/tofahrenheit?temp=100
	emulator:	
		functions call converter
		
</pre>


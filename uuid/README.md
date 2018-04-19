# uuid
functions for returning a UUID

# setup
<pre>
install: 
   npm install -g @google-cloud/functions-emulator
   
uninstall:
   1. functions stop
   2. npm uninstall -g @google-cloud/functions-emulator
   3. rm -rf  ~/.config/configstore/@google-cloud/functions-emulator/

More info:  https://github.com/GoogleCloudPlatform/cloud-functions-emulator/
</pre>

# deploy
functions deploy uuid --trigger-http

# usage
<pre>
functions call uuid --data '{"ver":"v1"}'
functions call uuid --data '{"ver":"v3", "dns": "hello.example.com"}'
functions call uuid --data '{"ver":"v3", "url": "http://example.com/hello"}'
</pre>

# response
<pre>
ExecutionId: 39b8741a-9fca-4ca2-a6e6-bdfafe8dd4ef
Result:  { ver: 'v1', uuid: 'd5c010a0-437c-11e8-ad54-09f64e421d9e' }
</pre>

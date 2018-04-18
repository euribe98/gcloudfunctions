# gcloudfunctions
<pre>
functions for returning a UUID (Support for version 1, 3, 4 and 5 UUIDs)
uses uuid package:  https://www.npmjs.com/package/uuid
</pre>

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
payload json for the UUID version requested
functions call uuid --data '{"ver":"v1"}'
functions call uuid --data '{"ver":"v3", "dns": "hello.example.com"}'
functions call uuid --data '{"ver":"v3", "url": "http://example.com/hello"}'
</pre>

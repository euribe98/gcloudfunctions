# gcloudfunctions
functions for returning a UUID

# setup
Refer to Getting started:  https://github.com/GoogleCloudPlatform/cloud-functions-emulator/

# deploy
functions deploy uuid --trigger-http

# usage
<pre>
functions call uuid --data '{"ver":"v1"}'
functions call uuid --data '{"ver":"v3", "dns": "hello.example.com"}'
functions call uuid --data '{"ver":"v3", "url": "http://example.com/hello"}'
</pre>

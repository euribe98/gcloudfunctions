# gcloudfunctions
<pre>
Example google cloud functions 
See corresponding folders for specificis
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
<pre>
functions deploy [function name] --trigger-http
</pre>

# usage
<pre>
 functions call [funcion name]
</pre>


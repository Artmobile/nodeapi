/* Define some initial variables. */
var applicationRoot = __dirname.replace(/\\/g,"/"),
  ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
  port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
  apiRoot = '/api';

/* Create Express application */
var express = require("express");
var app = express();

app.get('/', (req, res) => {
  res.send('OK')
});

/* Start the API mock server. */
console.log('Application root directory: [' + applicationRoot +']');
console.log('Mock Api Server listening: [http://' + ipaddress + ':' + port + ']');
app.listen(port, ipaddress);

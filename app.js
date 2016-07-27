
/**
 * Module dependencies.
 */

var express = require('express')
  , bodyParser = require('body-parser')
  , text = require('./routes/text')
  , monitor = require('./routes/monitor')
  , http = require('http')
  , path = require('path')
  , config = require('./config.json');

var app = express();

// all environments
app.set('port', process.env.PORT || config.serverLocalPort);
app.use(bodyParser.json());

//app.get('/', routes.index);
app.get('/text/:size', text.generate);
app.get('/monitor', monitor.check);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

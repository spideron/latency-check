var randomstring = require("randomstring"),
  metadata = require('../lib/metadata');

/*
 * Generate text.
 */

exports.generate = function(req, res){
  var size = parseInt(req.params.size) * 1024;
  res.addHeader('az', metadata.zone());
  res.send(randomstring.generate(size));
};
var randomstring = require("randomstring");

/*
 * Generate text.
 */

exports.generate = function(req, res){
  var size = parseInt(req.params.size) * 1024;
  res.send(randomstring.generate(size));
};
var request = require('request'),
  config = require('../config.json'),
  metadata = require('./metadata'),
  sizes = config.packageSizes;

function getData(size){
	var data = {
		startAt: new Date().getTime(),
		origin: metadata.zone(),
		size: size
	};
	
	request
	  .get(config.sampleServerUrl + size)
	  .on('response', function(response) {
		data.destination = response.headers['az'];
		data.time = (new Date().getTime()) - data.startAt;
	    console.log(data);
	  })
}

function sample(){
	for(var i = 0, len = sizes.length; i < len; i++){
		sample(sizes[i]);
	}
		
}

setInterval(sample, config.sampleInterval);
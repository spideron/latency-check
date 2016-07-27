var metadata = require('node-ec2-metadata');

var availabilityZone;

metadata.getMetadataForInstance('placement/availability-zone').then(function(az){
	availabilityZone = az;
});

exports.zone = function(){
	return availabilityZone || 'NA';
};
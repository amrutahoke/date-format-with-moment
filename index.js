
module.exports = function(format){
	var moment = require('moment');

	var date = moment();
	res.end(date.format(format));
}
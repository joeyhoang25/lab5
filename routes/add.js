var data = require("../data.json");

exports.addFriend = function(request, response) {    
	console.log(data);
	response.render('index', data);
 }
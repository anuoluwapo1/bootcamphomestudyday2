'use strict'

var unirest = require('unirest');
var response = unirest.get('http://mockbin.com/request')
.end(function(response){
	console.log(response);
});



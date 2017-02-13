'use strict'

module.exports = {

	reverseString : function(originalString){
		var reversedString = null;
		if( originalString === '')
		{
			return reversedString;
		}
		else{

			reversedString = originalString.split("").reverse().join("");

			if( originalString === reversedString){
			return true;
			}
			else{
				//Reverse the string and returne reversed string
				return reversedString;
			}
		}
		
	}
}
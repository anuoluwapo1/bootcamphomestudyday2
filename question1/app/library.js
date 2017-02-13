

function words(sentence){
	var wordCounts = {};
	var separators = [' ', '\\\n', '-', '\\\t', '\\*', '/'];
	var splittedWords = sentence.split(new RegExp(separators.join('|'), 'g')); // Generates an array of words from sentence
	return splittedWords.map(mapper).reduce(reducer, wordCounts);
}

function mapper(itemToMap){
	return itemToMap;
}

function reducer(intermediateResult, currentKey){
	
	if (currentKey) {
		intermediateResult[currentKey] = (intermediateResult[currentKey] || 0) + 1;
	} 
	return intermediateResult; //The intermediate result will then be passed to the map function to generate the result.
}


module.exports = {
	words : words
}
var memoryArray = ["a","b","c","d","e","f","g","h"];
var memoryValues = [];
var tilesMatched = 0;

Array.prototype.tileShuffle = function() {
	var i = this.length, x, c;
	while (--i > 0) {
		x = Math.floor(Math.random() * (i+1));
		c = this[x];
		this[x] = this[i];
		this[i] = c;
	}
}

/* Refactor the shuffle
	var shuffle = tiles.sort(function() {
		return 0.5 - Math.random();
	});
	*/

function newBoard() {
	tilesFlipped = 0;
	var output = '';
	memoryArray.tileShuffle();
}
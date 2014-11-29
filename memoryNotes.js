window.onload = function() {
// Create variables
var memoryArray = ["a","b","c","d","e","f","g","h"];
var memoryValues = [];
var tilesMatched = 0;
var boxes = document.querySelectorAll(".box"),
	board = document.querySelector(".board"),
	startButton = document.querySelector("#start"),
	stopButton = document.querySelector("#stop"),
	hidden = document.querySelectorAll(".hide"),
	revealed = document.querySelectorAll(".reveal"),
	notification = document.querySelector(".message");

// Create method to shuffle arrays
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
// Create a new game board
function newBoard() {
	tilesMatched = 0;
	memoryArray.tileShuffle(); 
	console.log(memoryArray);
}
// Start game
var started = false;
startButton.onclick = function() {
	started = true;
	startButton.disabled = true;
	newBoard();
}

// Clicking tiles

}
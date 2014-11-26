// Page load
window.onload = function() {

	var boxes = document.querySelectorAll(".box"),
		board = document.querySelector(".board"),
		startButton = document.querySelector("#start"),
		stopButton = document.querySelector("#stop");
	var tiles = ["a","b","c","d",
				 "e","f","g","h",
				 "a","b","c","d",
				 "e","f","g","h"];

	function shuffle(o) {
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j]= x);
    	return o;
	};
	
	
	startButton.onclick = function() {
		newBoard = shuffle(tiles);
		console.log(newBoard);
		for (var n = 0; n < boxes.length; n++) {
			boxes[n].innerHTML = tiles[n];
		} 
	}
	
}

// Create game board

// Initiate game board

// Create and load cards randomly

// Game loop

// Controls

// Score
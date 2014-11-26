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
	
	startButton.onclick = function() {
		for (var n = 0; n < boxes.length; n++) {
			var i = Math.floor((Math.random() * boxes.length) );
			console.log(i);
			if (!boxes[i].innerHTML) {
				boxes[n].innerHTML = tiles[i];
				console.log(tiles[i], boxes[i].innerHTML);
			} 
		}
	}
	
}

// Create game board

// Initiate game board

// Create and load cards randomly

// Game loop

// Controls

// Score
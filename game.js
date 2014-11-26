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
		for (var box = 0; box < boxes.length; box++) {
			var i = Math.floor((Math.random() * boxes.length) );
			boxes[i].innerHTML = tiles[i];
		}
	}
	
}

// Create game board

// Initiate game board

// Create and load cards randomly

// Game loop

// Controls

// Score
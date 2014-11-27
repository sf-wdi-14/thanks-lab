// Page load
window.onload = function() {

	var boxes = document.querySelectorAll(".box"),
		board = document.querySelector(".board"),
		startButton = document.querySelector("#start"),
		stopButton = document.querySelector("#stop"),
		hidden = document.querySelectorAll(".hide"),
		revealed = document.querySelectorAll(".reveal"),
		notification = document.querySelector(".message");
	var tiles = ["a","b","c","d",
				 "e","f","g","h",
				 "a","b","c","d",
				 "e","f","g","h"];

	// Shuffle the tiles
	function shuffle(o) {
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j]= x);
    	return o;
	};
	
	// Start the game and initiate the board
	var started = false,
		  newBoard;
	startButton.onclick = function() {
		newBoard = shuffle(tiles);
		started = true;
		
		for (var n = 0; n < boxes.length; n++) {
			boxes[n].innerHTML = tiles[n];
		} 
	}

	// Win conditions

	

	// When player clicks a box ...
	var cards = [];
	for (var t = 0; t < boxes.length; t++) {
		boxes[t].onclick = function() {
			if (started === true) {
				this.classList.add('reveal');
			  cards.push(t);
			  console.log(cards);

			  if (cards.length === 2) {
			    if (cards[0] !== cards[1]) {
				    console.log(this);
				    this.classList.remove('reveal');				    
			    } else {
				    this.classList.add('match');
				    cards = [];
			    }
		    }
			} else {
				notification.innerHTML = "Press the start button.";
			}

		}
		

	}

	// Reset the game
	stopButton.onclick = function() {
		for (var b = 0; b < boxes.length; b++) {
			boxes[b].innerHTML = "";
			notification.innerHTML = "Yummy ...a clean board.";
		}
	}
}

// Score
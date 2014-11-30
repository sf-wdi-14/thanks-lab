// Page load
window.onload = function() {

	var boxes = document.querySelectorAll(".box"),
		board = document.querySelector(".board"),
		startButton = document.querySelector("#start"),
		stopButton = document.querySelector("#stop"),
		notification = document.querySelector(".message");
	
	var tiles = ["a","b","c","d",
				 "e","f","g","h",
				 "a","b","c","d",
				 "e","f","g","h"];

	// Shuffle the tiles, inspired by Fisher-Yates 
	// http://en.wikipedia.org/wiki/Fisher_Yates_shuffle
	function shuffle(o) {
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j]= x);
    	return o;
	};
	
	// No game until Start button is pressed
	var started = false,
		  newBoard = [],
		  currentBoard = [];

	// Initiate a new game board
	startButton.onclick = function() {
		newBoard = shuffle(tiles);
		started = true;
		startButton.disabled = true;
		console.log(newBoard);	
		for (var n = 0; n < boxes.length; n++) {
			boxes[n].innerHTML = newBoard[n];
		} 
	}

	// Reset the game
	stopButton.onclick = function() {
		for (var b = 0; b < boxes.length; b++) {
			boxes[b].innerHTML = "";
			notification.innerHTML = "Yummy ...a clean board.";
			startButton.disabled = false;
		}
	}

	// Check the pairs for a match
	var cards = [];
	var pairs = 0;

	function isMatch() {
		if (cards[0].innerHTML === cards[1].innerHTML) {
			cards[0].classList.add('match');
			cards[1].classList.add('match');
			cards = [];
			notification.innerHTML = "Match!";
			pairs++;
		} else {
			setTimeout(function()
			  {
			    cards[0].classList.remove('reveal');
			    cards[1].classList.remove('reveal');
			    cards = [];
			  }, 500);
		}
	};

	// Are all cards matched?
	function gameOver() {
		if (pairs === 8) {
			notification.innerHTML = "YOU WON!";
		}
	}
	
	// When player clicks a box ...
  for (var t = 0; t < boxes.length; t++) {
		
		boxes[t].onclick = function() {
			if (started === true) {
				this.classList.add('reveal');
			  cards.push(this);		  
  	    if (cards.length === 2) {
			    isMatch();				 
		    }		    
			} else {
				notification.innerHTML = "Press the start button.";
			}
			gameOver();
		}
	}
}
// Current issues:
// 1. Clicking the same card twice to get an auto match.
// 2. 
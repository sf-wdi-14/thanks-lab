window.onload = function() {

	var boxes = document.querySelectorAll(".box"),
		board = document.querySelector(".board"),
		startButton = document.querySelector("#start"),
		stopButton = document.querySelector("#stop"),
		notification = document.querySelector(".message"),
		counter = document.querySelector("#counter");
	
	var tiles = [
		"a","b","c","d",
		"e","f","g","h",
		"a","b","c","d",
		"e","f","g","h"
		];

	// Shuffle the tiles, inspired by Fisher-Yates 
	// http://en.wikipedia.org/wiki/Fisher_Yates_shuffle
	function shuffle(o) {
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j]= x);
    	return o;
	};
	
	// No game until Start button is pressed
	var started = false,
		  newBoard = [],
		  score = 0;

	// Initiate a new game board
	startButton.onclick = function() {
		newBoard = shuffle(tiles);
		started = true;
		startButton.disabled = true;
		startButton.classList.add('dim');	
		for (var n = 0; n < boxes.length; n++) {
			boxes[n].innerHTML = newBoard[n];
		} 
	}

	// Reset the game
	stopButton.onclick = function() {
		for (var b = 0; b < boxes.length; b++) {
			boxes[b].innerHTML = "";
			boxes[b].classList.remove('reveal','noclick','match');
			notification.innerHTML = "Yummy ...a clean board.";
			startButton.disabled = false;
			pairs = 0, score = 0, counter = 0;
			cards = [];
		}
	}

	// Check the pairs for a match
	var cards = [];
	var pairs = 0;

	function isMatch() {
		if (cards[0].innerHTML === cards[1].innerHTML) {
			cards[0].classList.add('match','noclick');
			cards[1].classList.add('match','noclick');
			cards = [];
			notification.innerHTML = "Match!";
			pairs++;
		} else {
			setTimeout(function()
			  {
			    cards[0].classList.remove('reveal','noclick');
			    cards[1].classList.remove('reveal','noclick');
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
		var attempts = 0;
  for (var t = 0; t < boxes.length; t++) {
		boxes[t].onclick = function() {
			if (started === true) {
				attempts++;
				this.classList.add('reveal','noclick');
			  cards.push(this);	
			  counter.innerHTML = attempts;	  
  	    if (cards.length === 2) {
			    isMatch();				 
		    }		    
			} else {
				notification.innerHTML = "Press the start button.";
				notification.classList.add('flash');
			}

			gameOver();
		}
	}
}
// Current issues:
// 1. Clicking the same card twice to get an auto match.
// 2. "Covering" a card
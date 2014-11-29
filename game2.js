window.onload = function() {
  var Card = function (num) {
  	this.front = 1;
  	this.back = 0;
  };
  
  var boxes = document.querySelectorAll(".box"),
			board = document.querySelector(".board"),
			startButton = document.querySelector("#start"),
			stopButton = document.querySelector("#stop"),
			hidden = document.querySelectorAll(".hide"),
			revealed = document.querySelectorAll(".reveal"),
			notification = document.querySelector(".message");
	
	var box1 = document.querySelector("#b1"),
  		box2 = document.querySelector("#b2"),
  		box3 = document.querySelector("#b3"),
  		box4 = document.querySelector("#b4"),
  		box5 = document.querySelector("#b5"),
  		box6 = document.querySelector("#b6"),
  		box7 = document.querySelector("#b7"),
  		box8 = document.querySelector("#b8"),
  		box9 = document.querySelector("#b9"),
  		box10 = document.querySelector("#b9"),
  		box11 = document.querySelector("#b9"),
  		box12 = document.querySelector("#b9"),
  		box13 = document.querySelector("#b9"),
  		box14 = document.querySelector("#b9"),
  		box15 = document.querySelector("#b9");
  
  // var cards = [
  // 	"<img src=\"img/1.jpg\">","<img src=\"img/1.jpg\">",
  // 	"<img src=\"img/2.jpg\">","<img src=\"img/2.jpg\">",
  // 	"<img src=\"img/3.jpg\">","<img src=\"img/3.jpg\">",
  // 	"<img src=\"img/4.jpg\">","<img src=\"img/4.jpg\">",
  // 	"<img src=\"img/5.jpg\">","<img src=\"img/5.jpg\">",
  // 	"<img src=\"img/6.jpg\">","<img src=\"img/6.jpg\">",
  // 	"<img src=\"img/7.jpg\">","<img src=\"img/7.jpg\">",
  // 	"<img src=\"img/8.jpg\">","<img src=\"img/8.jpg\">"
  // 	];

  var cards = ["a","b","c","d",
							 "e","f","g","h",
							 "a","b","c","d",
							 "e","f","g","h"]

  // Shuffle the cards
  function shuffle(o) {
  		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j]= x);
      	return o;
  };
  
  // Create game board.
  var newBoard = [];
  var current = [];
  var started = false;

  startButton.onclick = function() {	
  	started = true;
  	startButton.disabled = true;
  	newBoard = shuffle(cards);
  }

  // Win conditions

  function compare(card1,card2) {
  	if (card1 === card2) {
  		current.classList.add('match');
  		current = [];
  	} else {
  		current.classList.remove('reveal');
  		current = [];
  	}
  }
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function() {
    	boxes[i].innerHTML = newBoard[i];
    	this.classList.add('reveal');
    	current.push(this.innerHTML);

    	if (current.length === 2) {
    		compare(current[0],current[1]);
    	}
    }
  }
}

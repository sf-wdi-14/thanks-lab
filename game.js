window.onload = function() {

  var boxes = document.querySelectorAll(".box"),
    board = document.querySelector(".board"),
    startButton = document.querySelector("#start"),
    stopButton = document.querySelector("#stop"),
    notification = document.querySelector(".message"),
    rules = document.querySelector("#rules");
    counter = document.querySelector("#counter");
  
  var started = false, 
    newBoard = [], cards = [], 
    score = 0, pairs = 0, attempts = 0,
    noMatchTimeOut;
  
  var tiles = ["a","b","c","d","e","f","g","h",
    "a","b","c","d","e","f","g","h"];

  stopButton.disabled = true;

  // Shuffle the tiles, inspired by Fisher-Yates 
  // http://en.wikipedia.org/wiki/Fisher_Yates_shuffle
  function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j]= x);
      return o;
  };
  
  function gameStart() {
    if (started == true) {
      startButton.classList.add('dimStart');
      stopButton.classList.remove('dimStop');
      startButton.disabled = true; 
      stopButton.disabled = false;
    } else if (started == false) {
      startButton.classList.remove('dimStart');
      stopButton.classList.add('dimStop');
      startButton.disabled = false;
      stopButton.disabled = true;
      counter.innerHTML ="";
    }
  }

  function fancyText(myMessage,classIn,classOut) {
    setTimeout(function() {
        notification.innerHTML = myMessage;
        notification.classList.add(classIn);
      }, 0);
    setTimeout(function() {
        notification.innerHTML = myMessage;
        notification.classList.add(classOut);
      }, 2000);
    notification.innerHTML = "";
    notification.classList.remove(classIn,classOut);
  }

  // Initiate a new game board
  startButton.onclick = function() {
    newBoard = shuffle(tiles);
    started = true;
    attempts = 0;
    gameStart(); 
    board.classList.remove('wobble');
    for (var n = 0; n < boxes.length; n++) {
      boxes[n].innerHTML = newBoard[n];
    } 
  }

  // Reset the game
  stopButton.onclick = function() {
    for (var b = 0; b < boxes.length; b++) {
      boxes[b].innerHTML = "";
      boxes[b].classList.remove('reveal','match');
      fancyText("Yummy ...a clean slate!",'fadeIn','fadeOut');
      board.classList.add('wobble');
      started = false;
      gameStart();
      pairs = 0, score = 0, attempts = 0;
      cards = [];
    }
  }

  function isMatch() {
    if (cards[0].innerHTML == cards[1].innerHTML && cards[0] != cards[1]) {
      cards[0].classList.add('match');
      cards[1].classList.add('match');
      cards = [];
      fancyText("Match!","zoomIn","zoomOut");
      pairs++;
    } else {
      noMatchTimeOut = setTimeout( function() {
        clearReveal();
        noMatchTimeOut = null;
      }, 500);
    }
  };

  function checkTimeout() {
    if(noMatchTimeOut != null)
    {
      clearTimeout(noMatchTimeOut);
      clearReveal();
    }
  }

  function clearReveal() {
    cards[0].classList.remove('reveal');
    cards[1].classList.remove('reveal');
    cards = [];
    noMatchTimeOut = null;
  }

  // Are all cards matched?
  function gameOver() {
    if (pairs == 8) {
      fancyText("YOU WON!","shake","fadeOut");
    }
  }
  // Have some fun with the player.
  function taunt() {
    var taunts = ["C'mon...", attempts + " tries. Really?", "OK, you can do this."];
    if (attempts % 3 === 0) {
      t = Math.floor(Math.random() * (taunts.length - 0));
      fancyText(taunts[t],"shake","zoomOut");
    }
  }

  // Main game loop
  for (var t = 0; t < boxes.length; t++) {
    boxes[t].onclick = function() {
      checkTimeout();

      if (this.classList.contains("match"))
      {
        return;
      }

      if (started == true) {
        this.classList.add('reveal');
        cards.push(this);
        if (cards.length == 2) {
          attempts++;
          taunt();
          counter.innerHTML = attempts;
          isMatch();
        }
      } else {
        fancyText("Press the start button.","flash","fadeOut");
      }
      gameOver();
    }
  }

  
  
}

// Extras
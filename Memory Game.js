// Array of card images
const cardImages = [
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
  "img/6.png",
  "img/7.png",
  "img/8.png",
  "img/9.png",
  "img/10.png"
];

// Shuffle function to randomize card order
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Generate an array of card pairs (each image twice)
let cards = shuffle([...cardImages, ...cardImages]);

// Variables to keep track of game state
let flippedCards = [];
let matchedCards = [];

// DOM elements
const gameBoard = document.querySelector("#game-board");

// Render game board
function renderGameBoard() {
  gameBoard.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = i;
    const cardImage = document.createElement("img");
    cardImage.src = cards[i];
    card.appendChild(cardImage);
    gameBoard.appendChild(card);
    card.addEventListener("click", handleCardClick);
  }
}

// Handle card click event
function handleCardClick(event) {
  const card = event.target.closest(".card");
  if (flippedCards.length < 2 && !matchedCards.includes(card)) {
    card.classList.add("flipped");
    flippedCards.push(card);
    if (flippedCards.length === 2) {
      setTimeout(checkForMatch, 1000);
    }
  }
}

// Check if the two flipped cards match
function checkForMatch() {
  if (
    flippedCards[0].querySelector("img").src ===
    flippedCards[1].querySelector("img").src
  ) {
    flippedCards.forEach((card) => {
      card.classList.remove("flipped");
      card.classList.add("matched");
      matchedCards.push(card);
    });
  } else {
    flippedCards.forEach((card) => {
      card.classList.remove("flipped");
    });
  }
  flippedCards = [];
  if (matchedCards.length === cards.length) {
    setTimeout(() => {
      alert("You won!");
    }, 500);
  }
}

// Start game
renderGameBoard();

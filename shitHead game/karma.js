const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {
  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit, value });
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function drawCard(deck) {
  return deck.pop();
}

// Main game logic
const deck = createDeck();
shuffleDeck(deck);
const playerHand = [];

document.getElementById('draw-card').addEventListener('click', () => {
  const drawnCard = drawCard(deck);
  playerHand.push(drawnCard);
  updatePlayerHandDisplay(playerHand);
});

// You'll need to add functions for playing cards, managing discard piles, and determining the winner.

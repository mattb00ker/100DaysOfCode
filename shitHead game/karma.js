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

function updatePlayerHandDisplay(playerHand) {
  const playerHandElement = document.getElementById('player-hand');
  playerHandElement.innerHTML = '';

  for (let card of playerHand) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    cardElement.textContent = card.value;
    cardElement.dataset.suit = card.suit;
    cardElement.dataset.value = card.value;
    playerHandElement.appendChild(cardElement);
  }
}

let requiredDirection = 'higher'; // Possible values: 'higher', 'lower'

function canPlayCard(card, topCard) {
  if (card.value === '2' || card.value === '8' || card.value === '9' || card.value === '10') {
    return true;
  }

  const cardValueIndex = values.indexOf(card.value);
  const topCardValueIndex = values.indexOf(topCard.value);

  if (topCard.value === '8') {
    return true;
  }

  if (requiredDirection === 'higher') {
    return cardValueIndex > topCardValueIndex;
  } else {
    return cardValueIndex < topCardValueIndex;
  }
}

function checkForWinner(playerHand) {
  if (playerHand.length === 0) {
    return true;
  }
  return false;
}

function playCard(playerHand, cardIndex, discardPile) {
  const playedCard = playerHand[cardIndex];

  if (discardPile.length > 0) {
    const topCard = discardPile[discardPile.length - 1];

    if (!canPlayCard(playedCard, topCard)) {
      alert('You cannot play this card on the current discard pile.');
      return;
    }
  }

  playerHand.splice(cardIndex, 1);
  discardPile.push(playedCard);

  if (playedCard.value === '2') {
    requiredDirection = 'higher';
  } else if (playedCard.value === '9') {
    requiredDirection = prompt('You played a 9. Choose the required direction for the next player (higher/lower):').toLowerCase();
  } else if (playedCard.value === '10') {
    discardPile.length = 0;
  }

  // After playing a card, check for a winner.
  if (checkForWinner(playerHand)) {
    alert('Congratulations, you have won the game!');
    // You can reset the game or provide an option to restart the game here.
  }
}

function updateDiscardPilesDisplay(discardPiles) {
  discardPiles.forEach((discardPile, index) => {
    const discardPileElement = document.getElementById(`discard-pile-${index + 1}`);
    const topCard = discardPile[discardPile.length - 1];

    if (topCard) {
      discardPileElement.textContent = topCard.value;
      discardPileElement.dataset.suit = topCard.suit;
      discardPileElement.dataset.value = topCard.value;
    } else {
      discardPileElement.textContent = '';
      discardPileElement.removeAttribute('data-suit');
      discardPileElement.removeAttribute('data-value');
    }
  });
}


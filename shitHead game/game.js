const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {
  const deck = [];

  for (const suit of suits) {
    for (const value of values) {
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

function dealCards(deck, numPlayers) {
  const players = [];

  for (let i = 0; i < numPlayers; i++) {
    const faceDown = deck.splice(0, 3);
    const faceUp = deck.splice(0, 3);
    const hand = deck.splice(0, 3);

    players.push({ faceDown, faceUp, hand });
  }

  return players;
}

function displayCards(cards) {
  return cards.map(card => `${card.value} of ${card.suit}`).join(', ');
}

function cardValue(card) {
  return values.indexOf(card.value);
}

async function playTurn(player, pile) {
  console.log(`\nYour hand: ${displayCards(player.hand)}`);
  console.log(`Top card on pile: ${pile.length > 0 ? displayCards([pile[pile.length - 1]]) : 'None'}`);

  const selectedIndex = parseInt(await askQuestion("Select a card from your hand (by index): "));
  const selectedCard = player.hand[selectedIndex];

  if (pile.length === 0 || cardValue(selectedCard) >= cardValue(pile[pile.length - 1])) {
    player.hand.splice(selectedIndex, 1);
    pile.push(selectedCard);
  } else {
    console.log("You don't have a high enough card. You have to pick up all the cards.");
    player.hand.push(...pile.splice(0));
  }

  if (player.hand.length === 0) {
    console.log("Congratulations! You have no more cards in your hand.");
    return true;
  }

  return false;
}

async function main() {
  const playerName = await askQuestion("What is your name? ");
  const numberOfOpponents = await askQuestion("How many players would you like to face? ");
  const numPlayers = parseInt(numberOfOpponents) + 1;

  console.log(`Player's name: ${playerName}`);
  console.log(`Number of opponents: ${numberOfOpponents}`);

  const deck = createDeck();
  shuffleDeck(deck);

  const players = dealCards(deck, numPlayers);

  console.log("Face-up cards for all players:");
  players.forEach((player, index) => {
    console.log(`Player ${index === 0 ? playerName : index}:`, displayCards(player.faceUp));
  });

  console.log(`\nCards in ${playerName}'s hand:`);
  console.log(displayCards(players[0].hand));

  console.log(`\nRemaining cards in the deck: ${deck.length}`);
  console.log(displayCards(deck));

  let currentPlayer = 0;
  let pile = [];

  while (!players.every(player => player.hand.length === 0 && player.faceUp.length === 0 && player.faceDown.length === 0)) {
    if (currentPlayer === 0) {
      const finishedTurn = await playTurn(players[currentPlayer], pile);

      if (finishedTurn) {
        break;
      }
    } else {
      console.log(`Player ${currentPlayer}'s turn`);

const validCards = players[currentPlayer].hand.filter(card => cardValue(card) >= cardValue(pile[pile.length - 1]));

if (validCards.length > 0) {
  validCards.sort((a, b) => cardValue(a) - cardValue(b));
  const cardToPlay = validCards[0];
  const cardIndex = players[currentPlayer].hand.indexOf(cardToPlay);

  console.log(`Player ${currentPlayer} plays ${cardToPlay.value} of ${cardToPlay.suit}`);
  players[currentPlayer].hand.splice(cardIndex, 1);
  pile.push(cardToPlay);
} else {
  console.log(`Player ${currentPlayer} doesn't have a high enough card. They pick up all the cards.`);
  players[currentPlayer].hand.push(...pile.splice(0));
}
    }

    if (deck.length > 0) {
      const drawnCard = deck.pop();
      players[currentPlayer].hand.push(drawnCard);
    }

    currentPlayer = (currentPlayer + 1) % numPlayers;
  }

  console.log("\nThe game has ended.");
  rl.close();
}

main();

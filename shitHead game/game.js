const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }

  toString() {
    return `${this.value} of ${this.suit}`;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.buildDeck();
    this.shuffle();
  }

  buildDeck() {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    for (const suit of suits) {
      for (const value of values) {
        this.cards.push(new Card(value, suit));
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw() {
    return this.cards.pop();
  }
}

class Player {
  constructor(name, isAI = false) {
    this.name = name;
    this.hand = [];
    this.isAI = isAI;
  }

  addCard(card) {
    this.hand.push(card);
  }

  playCard(cardIndex, discardPile) {
    const selectedCard = this.hand[cardIndex];
    const topCard = discardPile[discardPile.length - 1];

    if (selectedCard.value === topCard.value || selectedCard.value > topCard.value) {
      this.hand.splice(cardIndex, 1);
      discardPile.push(selectedCard);
      return true;
    } else {
      return false;
    }
  }

  basicAI(discardPile) {
    const topCard = discardPile[discardPile.length - 1];
    for (let i = 0; i < this.hand.length; i++) {
      if (this.hand[i].value >= topCard.value) {
        return i;
      }
    }
    return null;
  }
}

class KarmaGame {
  constructor(numPlayers) {
    this.deck = new Deck();
    this.players = [new Player('Human Player')];
    for (let i = 1; i < numPlayers; i++) {
      this.players.push(new Player(`AI Player ${i}`, true));
    }
    this.dealCards();
  }

  dealCards() {
    while (this.deck.cards.length > 0) {
      for (const player of this.players) {
        const card = this.deck.draw();
        if (card) {
          player.addCard(card);
        } else {
          break;
        }
      }
    }
  }
  
  playTurn(playerIndex, cardIndex = null) {
    const player = this.players[playerIndex];
    const discardPile = this.discardPile;

    if (cardIndex !== null) {
      const played = player.playCard(cardIndex, discardPile);
      if (!played) {
        console.log(`${player.name} cannot play this card.`);
      } else {
        console.log(`${player.name} played the ${discardPile[discardPile.length - 1].toString()}.`);
      }
    } else {
      console.log(`${player.name} skipped their turn.`);
    }

    if (player.hand.length === 0) {
      console.log(`${player.name} has won the game!`);
      this.gameOver = true;
    }
  }

  async startGame() {
    this.discardPile = [this.deck.draw()];
    this.gameOver = false;
    this.currentPlayerIndex = 0;
    this.direction = 1; // 1 = forward, -1 = backward

    while (!this.gameOver) {
      console.log(`Current top card: ${this.discardPile[this.discardPile.length - 1].toString()}`);
      console.log(`${this.players[this.currentPlayerIndex].name}'s turn.`);

      let cardIndex;
      if (this.players[this.currentPlayerIndex].isAI) {
        cardIndex = this.players[this.currentPlayerIndex].basicAI(this.discardPile);
      } else {
        // Prompt the human player to choose a card
        console.log("Your hand:");
        this.players[this.currentPlayerIndex].hand.forEach((card, index) => {
          console.log(`${index}: ${card.toString()}`);
        });

        cardIndex = await new Promise((resolve) => {
          rl.question("Enter the index of the card you'd like to play, or -1 to skip your turn: ", (answer) => {
            resolve(parseInt(answer));
          });
        });

        if (cardIndex === -1) {
          cardIndex = null;
        }
      }

      this.playTurn(this.currentPlayerIndex, cardIndex);

      if (this.gameOver) {
        break;
      }

      const topCard = this.discardPile[this.discardPile.length - 1];
      if (topCard.value === this.discardPile[this.discardPile.length - 2].value) {
        console.log("Same card value played, skipping the next player's turn.");
        this.currentPlayerIndex = (this.currentPlayerIndex + 2 * this.direction + this.players.length) % this.players.length;
      } else if (topCard.value === '2') {
        console.log("Lowest card played, reversing the order of play.");
        this.direction = -this.direction;
        this.currentPlayerIndex = (this.currentPlayerIndex + this.direction + this.players.length) % this.players.length;
      } else {
        this.currentPlayerIndex = (this.currentPlayerIndex + this.direction + this.players.length) % this.players.length;
      }
    }
    rl.close();
  }
}

(async () => {
  const game = new KarmaGame(5); // 1 human player + 4 AI opponents
  await game.startGame();
})();

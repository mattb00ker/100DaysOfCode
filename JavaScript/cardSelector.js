

// Initialise the deck of cards as an Array

var cards = new Array("AH", "AD", "AC", "AS");

function getRandomCard(){
    var choice = Math.floor(Math.random()*(cards.length));
    console.log(choice);
    console.log(cards[choice]);
    
    return cards[choice];
    

}


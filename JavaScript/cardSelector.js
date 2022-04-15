

// Initialise the deck of cards as an Array

var cards = new Array("AH", "AD", "AC", "AS");

//Initialise "first card"

var cardOne;

// Initialise "second card"

var cardTwo;

// Build ranking system

var rank;



function getRandomCard(){
    var choice = Math.floor(Math.random()*(cards.length));
    //console.log(choice);
    //console.log(cards[choice]);
    
    return cards[choice];
}

function cardValue(card){

    console.log(card);

    switch(card){
        case "AH":
            rank =0;
            console.log(rank); 
            break;
         case "AD":
            rank =1;
            console.log(rank); 
            break;
        case "AS":
            rank =2;
            console.log(rank); 
            break;
        case "AC":
            rank = 3;
            console.log(rank); 
            break;
    }
    
}

function pickCard(){
    cardTwo = cardOne;

    cardOne = getRandomCard();

    console.log("cardOne: ", cardOne);
    console.log("cardTwo: ", cardTwo);

}
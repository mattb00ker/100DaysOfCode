// Test 2

// Initialise the deck of cards as an Array

var cards = new Array("AH", "AD", "AC", "AS");

//Initialise "first card"

var cardOne;

// Initialise "second card"

var cardTwo;

// Build ranking system

var rank;

function stateof12(){
    console.log(cardOne)
    console.log(cardTwo)


}

function getRandomCard(){
    var choice = Math.floor(Math.random()*(cards.length));
    //console.log(choice);
    //console.log(cards[choice]);
    
    return cards[choice];
}

function cardValue(card){

    //console.log(card);

    switch(card){
        case "AH":
            rank =0;
            return 0;
            //console.log(rank); 
            break;
         case "AD":
            rank =1;
            //console.log(rank); 
            return 1;
            break;
        case "AS":
            rank =2;
            //console.log(rank); 
            return 2;
            break;
        case "AC":
            rank = 3;
            //console.log(rank); 
            return 3;
            break;
    }
    
}

function startGame(){
 //   cardTwo = cardOne;

    cardOne = getRandomCard();

    console.log("Current card: ", cardOne);
//    console.log("cardTwo: ", cardTwo);

//    console.log(cardValue(cardOne));

}

function higher(){

    cardTwo = cardOne;

    cardOne = getRandomCard();
    console.log(cardOne);

    //console.log(cardValue(cardOne))
    //console.log(cardValue(cardTwo))


    if(cardValue(cardTwo)>cardValue(cardOne)){
        console.log("Correct!!!");
    } else if(cardValue(cardTwo)==cardValue(cardOne)){
        console.log("Tie!!");
    }else{
        console.log("Wrong!!");
    }

}

function lower(){

    cardTwo = cardOne;

    cardOne = getRandomCard();
    console.log(cardOne);

    //console.log(cardValue(cardOne))
    //console.log(cardValue(cardTwo))


    if(cardValue(cardTwo)<cardValue(cardOne)){
        console.log("Correct!!!");
    } else if(cardValue(cardTwo)==cardValue(cardOne)){
        console.log("Tie!!");
    }else{
        console.log("Wrong!!");
    }

}
// Test 2

// Initialise the deck of cards as an Array

var cards = new Array("AH", "AD", "AS", "AC", "KH", "KD", "KS", "KC", "QH", "QD", "QS", "QC", "JH", "JD", "JS", "JC");

var choice;

//Initialise "first card"

var cardOne;

// Initialise "second card"

var cardTwo;

// Build ranking system

//var rank;
var score;

function stateCards(){
    console.log(cards)
    


}

function getRandomCard(){
    choice = Math.floor(Math.random()*(cards.length));
    //console.log(cards[choice]);
    //console.log(cards[choice]);
   
    

/*     var cardPlace = cards.indexOf(cards[choice]);
    console.log(cardPlace);
    
    if (cardPlace > -1) {
        cards.splice(cardPlace, 1); // 2nd parameter means remove one item only
    } */
    
    return cards[choice];
    
}

function cardValue(card){

    //console.log(card);

    switch(card){
        case "AH":
            //rank =0;
            return 0;
            //console.log(rank); 
            break;
         case "AD":
            //rank =1;
            //console.log(rank); 
            return 1;
            break;
        case "AS":
            //rank =2;
            //console.log(rank); 
            return 2;
            break;
        case "AC":
            //rank = 3;
            //console.log(rank); 
            return 3;
            break;
        case "KH":
            return 4;
            break;
        case "KD":
            return 5;
            break;
        case "KS":
            return 6;
            break;
        case "KC":
            return 7;
            break;
        
        case "QH":
            return 8;
            break;
        case "QD":
            return 9;
            break;
        case "QS":
            return 10;
            break;
        case "QC":
            return 11;
            break;
        case "JH":
            return 12;
            break;
        case "JD":
            return 13;
            break;
        case "JS":
            return 14;
            break;
        case "JC":
            return 15;
            break;

    }
    
}

function startGame(){
 //   cardTwo = cardOne;
    score = 0;
    scoreText(score);

    cardOne = getRandomCard();
    removeFromDeck();
    cardText(cardOne);

    console.log("Current score: ", score);
    console.log("Current card: ", cardOne);
//    console.log("cardTwo: ", cardTwo);

//    console.log(cardValue(cardOne));

}

function higher(){

    cardTwo = cardOne;

    cardOne = getRandomCard();
    removeFromDeck();
    
    console.log("New card is: ", cardOne);
    cardText(cardOne);

    //console.log(cardValue(cardOne))
    //console.log(cardValue(cardTwo))


    if(cardValue(cardTwo)>cardValue(cardOne)){
        console.log("Correct!!!");
        score += 10;
        scoreText(score);
    } else if(cardValue(cardTwo)==cardValue(cardOne)){
        console.log("Tie!!");
    }else{
        console.log("Wrong!!");
        score = 0;
        scoreText(score);
    }
    console.log("Current score: ", score);
}

function lower(){

    cardTwo = cardOne;

    cardOne = getRandomCard();
    removeFromDeck();
    console.log("New card is: ", cardOne);
    cardText(cardOne);

    //console.log(cardValue(cardOne))
    //console.log(cardValue(cardTwo))


    if(cardValue(cardTwo)<cardValue(cardOne)){
        console.log("Correct!!!");
        score += 10;
        scoreText(score);
    } else if(cardValue(cardTwo)==cardValue(cardOne)){
        console.log("Tie!!");
    }else{
        console.log("Wrong!!");
        score = 0;
        scoreText(score);
    }
    console.log("Current score: ", score);
}

function removeFromDeck(){

    cards.splice(choice,1);

}

function cardText(text){
    document.getElementById("currentCard").innerHTML = "The current card is: " + text;
}

function scoreText(score){
    document.getElementById("score").innerHTML = "The current score is: " + score;
}

// Test 2

// Initialise the deck of cards as an Array

var cards = new Array("AH", "AD", "AS", "AC", "KH", "KD", "KS", "KC", "QH", "QD", "QS", "QC", "JH", "JD", "JS", "JC", "10H", "10D", "10S", "10C", "9H", "9D", "9S", "9C", "8H", "8D", "8S", "8C", "7H", "7D", "7S", "7C", "6H", "6D", "6S", "6C", "5H", "5D", "5S", "5C", "4H", "4D", "4S", "4C", "3H", "3D", "3S", "3C", "2H", "2D", "2S", "2C");

function setDeck(){
    cards = ["AH", "AD", "AS", "AC", "KH", "KD", "KS", "KC", "QH", "QD", "QS", "QC", "JH", "JD", "JS", "JC", "10H", "10D", "10S", "10C", "9H", "9D", "9S", "9C", "8H", "8D", "8S", "8C", "7H", "7D", "7S", "7C", "6H", "6D", "6S", "6C", "5H", "5D", "5S", "5C", "4H", "4D", "4S", "4C", "3H", "3D", "3S", "3C", "2H", "2D", "2S", "2C"];
}
var choice;

//Initialise "first card"

var cardOne;

// Initialise "second card"

var cardTwo;

// Build ranking system

//var rank;
var score;

var hscore;

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
            return 0;
            break;
         case "AD":
            return 1;
            break;
        case "AS":
            return 2;
            break;
        case "AC":
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
        case "10H":
            return 16;
            break;
        case "10D":
            return 17;
            break;
        case "10S":
            return 18;
            break;
        case "10C":
            return 19;
            break;
        case "9H":
            return 20;
            break;
        case "9D":
            return 21;
            break;
        case "9S":
            return 22;
            break;
        case "9C":
            return 23;
            break;
        case "8H":
            return 24;
            break;
        case "8D":
            return 25;
            break;
        case "8S":
            return 26;
            break;
        case "8C":
            return 27;
            break;
        case "7H":
            return 28;
            break;
        case "7D":
            return 29;
            break;
        case "7S":
            return 30;
            break;
        case "7C":
            return 31;
            break;
        case "6H":
            return 32;
            break;
        case "6D":
            return 33;
            break;
        case "6S":
            return 34;
            break;
        case "6C":
            return 35;
            break;
        case "5H":
            return 36;
            break;
        case "5D":
            return 37;
            break;
        case "5S":
            return 38;
            break;
        case "5C":
            return 39;
            break;
        case "4H":
            return 40;
            break;
        case "4D":
            return 41;
            break;
        case "4S":
            return 42;
            break;
        case "4C":
            return 43;
            break;
        case "3H":
            return 44;
            break;
        case "3D":
            return 45;
            break;
        case "3S":
            return 46;
            break;
        case "3C":
            return 47;
            break;
        case "2H":
            return 48;
            break;
        case "2D":
            return 49;
            break;
        case "2S":
            return 50;
            break;
        case "2C":
            return 51;
            break;
    }
    
}

function startGame(){
 //   cardTwo = cardOne;
    score = 0;
    scoreText(score);
    setDeck();

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
        highscore(score, hscore);

    }else{
        console.log("Wrong!!");
        score = 0;
        scoreText(score);
        highscore(score, hscore);
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
        highscore(score, hscore);
    } else if(cardValue(cardTwo)==cardValue(cardOne)){
        console.log("Tie!!");
    }else{
        console.log("Wrong!!");
        score = 0;
        scoreText(score);
        highscore(score, hscore);
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

function highscore(score, hscore){
    if (score > highscore){
        console.log("score: " + score);
        console.log("hscore: " + hscore);
        hscore = score;
        document.getElementById("highscore").innerHTML = "The current high-score is: " + highscore;
    }

}

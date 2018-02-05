var cards = [
	{
		rank: 'Queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'Queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'King',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'King',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

//shuffle Cards
function shuffle(cards) {
	for (var j, x, i = cards.length; i; j = Math.floor(Math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x);
	return cards;
}

shuffle(cards);

//Store the users choice of cards
var cardsInPlay = [];

//Check for a match
var checkForMatch = function () {
	if (cardsInPlay.length === 1) {
		return;
	} else if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		setTimeout('alert("YOU FOUND A MATCH! Click OK to play again!"), window.location.reload(true)', 300);
	} else {
		setTimeout('alert("Sorry, not a match. Click OK to try again!"), window.location.reload(true)', 300);
	}
};

//Show user which card they chose
var flipCard = function () {
	//Get cardId
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	//console.log(cards[cardID].suit);
	checkForMatch();
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		var gameBoard = document.getElementById('game-board');
		gameBoard.appendChild(cardElement);
	}
};
createBoard();

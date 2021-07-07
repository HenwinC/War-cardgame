let deck1El = document.getElementById('deck1')
let deck2El = document.getElementById('deck2')

const suits = ['H', 'D', 'S', 'C']
const values = ['02','03','04','05','06','07','08','09','10','J','Q','K','A']
let playerDeck = []
let deck = []
let card1 =[]
let card2
let x = 1
for (let suit of suits) {
  for (let value of values) {
    deck.push(suit+value)
  }
}

function shuffle(deck){
  let shuffledDeck = []
  while (deck.length !== 0 ) {
    let randIdx = Math.floor(Math.random() * deck.length)
    shuffledDeck.push(deck.splice(randIdx,1)[0])
  }
  return shuffledDeck
}
// passing deck to function shuffle to be shuffled
let deck = shuffle(deck)
let playerDeck = deck.splice(0,26)
// function round{

// }

// First get a deck of card
// Deck of cards includes 4 suits(Hearts,Spades, Dimaonds, Clubs) 0f cards 2-J,Q,K,A
// Next Shuffle Deck
// shuffle deck
// split deck into two
// each player will flip the first card 
// if player1Card > player2Card
// add playercards to player1Deck
// if player2Card < player1Card
// add playercards to player2Deck
// if player1Card === Player2Card
// draw three cards each or the rest of cards(which ever is the lesser)
// if player1Card > player2Card
// add all 8 playercards to player1Deck
// if player1Card < player2Card
// add all 8 playercards to player2Deck
// if player1Deck === 0
// player 2 wins
// if player2Deck === 0
// player 1 wins

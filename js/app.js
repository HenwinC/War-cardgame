let deckEl = document.getElementById('deck')
let playerdeckEl = document.getElementById('playerDeck')
let card1El = document.getElementById('card1')
let card2El = document.getElementById('card2')

document.getElementById('btn').addEventListener('click', round)

const suits = ['H', 'D', 'S', 'C']
const values = ['02','03','04','05','06','07','08','09','10','J','Q','K','A']
let deck = []
let card1 =[]
let card2=[]
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
shuffle(deck)
let playerDeck = deck.splice(0,26)
function round(){
card1.push(deck.splice(0,1))
card2.push(playerDeck.splice(0,1))
if (card1.values>card2.values){
  deck.push(card1)&&(card2)
}
if (card1.values<card2.values){
  playerDeck.push(card1)&&(card2)
}
if (card1.values===card2.values){
  if (deck.length<4){
    // if player does have cards for war push remaing cars into other deck array
    player1Deck.push(deck.splice(0))

  }
  if (playerDeck.length<4){
    // if player does have cards for war push remaing cars into other deck array
    deck.push(playerDeck.splice(0))
  }
  // if both decks have more than 4 elemnts (cards)in each deck then pull 3 more to table
  card1.push(deck.splice(0,3))
  card1.push(deck.splice(0,3))
  // if element (card) is greater than another push table cards into winners deck
  if (card1.values>card2.values){
    deck.push(card1)&&(card2)
  }
  if (card1.values<card2.values){
    playerDeck.push(card1)&&(card2)
  } 
  
}
checkwin()
}

function checkwin(){
  if (deck.length===0){
    console.log ('player 1 wins')
  }
  if (player2Deck.length===0){
    console.log('player 2 wins')
  }
}

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
// draw three cards each or if deck.length =<4 end game
// if player1Card > player2Card
// add all 8 playercards to player1Deck
// if player1Card < player2Card
// add all 8 playercards to player2Deck
// if player1Deck === 0
// player 2 wins
// if player2Deck === 0
// player 1 wins

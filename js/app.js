let deckEl = document.getElementById('deck')
let playerdeckEl = document.getElementById('playerDeck')
let card1El = document.getElementById('card1')
let card2El = document.getElementById('card2')

document.getElementById('btn').addEventListener('click', shuffle)
let deck= { dA: 14 ,dQ: 12,dK: 13,dJ: 11,d10:10,d09: 9,d08: 8,d07: 7,d06: 6,d05: 5,d04: 4,d03: 3,d02: 2,hA: 14,hQ: 12,hK: 13,hJ: 11,h10:10,h09: 9,h08: 8,h07: 7,h06: 6,h05: 5,h04: 4,h03: 3,h02: 2,cA: 14,cQ: 12,cK: 13,cJ: 11,c10:10,c09: 9,c08: 8,c07: 7,c06: 6,c05: 5,c04: 4,c03: 3,c02: 2,sA: 14,sQ: 12,sK: 13,sJ: 11,s10:10,s09: 9,s08: 8,s07: 7,s06: 6,s05: 5,s04: 4,s03: 3,s02: 2,}



// let A=14
// let K=13
// let Q=12
// let J=11
// const suits = ['H', 'D', 'S', 'C']
// const values = ['02','03','04','05','06','07','08','09','10','J','Q','K','A']


let card1 =[]
let card2=[]
let x = 1
// for (let suit of suits) {
//   for (let value of values) {
//     deck.push(suit+value)
//   }
//   shuffle()
// }

function shuffle(deck){
  if (deck.length !== 0) {
    let shuffledDeck = []
    let randIdx = Math.floor(Math.random() * deck.length)
    shuffledDeck.push(deck.splice(randIdx,1)[0])
  }
  return shuffledDeck
}
// passing deck to function shuffle to be shuffled
let playerDeck = deck.splice(0,26)
function round(){
  shuffle(deck)
card1.push(deck.splice(0,1))
render (card1El)
card2.push(playerDeck.splice(0,1))
render(card2El)
if (card1.values>card2.values){
  deck.push(card1)&&(card2)
  render(deckEl)
}
if (card1.values<card2.values){
  playerDeck.push(card1)&&(card2)
  render(playerdeckEl)
}
// or i could push into seperate array and push all into winning
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
  if (playerDeck.length===0){
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

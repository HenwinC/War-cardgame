let deckEl = document.getElementById('deck')
let playerdeckEl = document.getElementById('playerDeck')
let card1El = document.getElementById('card1')
let card2El = document.getElementById('card2')
let player1Count = document.getElementById('player1Count')
let player2Count = document.getElementById('player2Count')
let text =document.getElementById('')

const CARD_VALUE_MAP = {
  dA: 14 ,dQ: 12,dK: 13,dJ: 11,d10:10,d09: 9,d08: 8,d07: 7,d06: 6,d05: 5,d04: 4,d03: 3,d02: 2,hA: 14,hQ: 12,hK: 13,hJ: 11,h10:10,h09: 9,h08: 8,h07: 7,h06: 6,h05: 5,h04: 4,h03: 3,h02: 2,cA: 14,cQ: 12,cK: 13,cJ: 11,c10:10,c09: 9,c08: 8,c07: 7,c06: 6,c05: 5,c04: 4,c03: 3,c02: 2,sA: 14,sQ: 12,sK: 13,sJ: 11,s10:10,s09: 9,s08: 8,s07: 7,s06: 6,s05: 5,s04: 4,s03: 3,s02: 2
}
let deck=[]
const suits = ['h', 'd', 's', 'c']
const values = ['02','03','04','05','06','07','08','09','10','J','Q','K','A']
// combines suits and values to make deck
for (let suitCounter = 0; suitCounter<4; suitCounter++){
  for(let i=0; i<13; i++){
    deck.push(suits[suitCounter]+values[i])
  }
}
//  Randomize Deck
function shuffle (){
deck.sort((a,b)=> 0.5 - Math.random())
}
shuffle(deck)
// splits deck in half and pushes to new array
let playerDeck = deck.splice(0,26)
let card1 = deck.slice(0,1)
let card2 = playerDeck.slice(0,1)
function getNewCard() {
  let card1 = deck.slice(0,1)
  let card2 = playerDeck.slice(0,1)
}
getNewCard()
function render() {
  card1El.classList.remove('s09')
  console.log('bobby')
  card1El.classList.add(card1)
  console.log('yooo')
  card2El.classList.remove('s09')
  console.log('bobby2')
  card2El.classList.add(card2)
  console.log('yooo2')
}
render()

// this function will determine who round winner is
// if card value is greater than other push the card into others array. while also taking off top card
function round(){
  if (CARD_VALUE_MAP[card2[0]] > CARD_VALUE_MAP[card1[0]]){
    playerDeck.push(card1[0])
    playerDeck.push(card2[0])
    playerDeck.shift (card2[0])
    deck.shift(card1[0])
    console.log(playerDeck)
    console.log(deck)
  }
   if (CARD_VALUE_MAP[card2[0]] < CARD_VALUE_MAP[card1[0]]){
    playerDeck.shift(card2[0])
    deck.push(card1[0])
    deck.push(card2[0])
    deck.shift(card1[0])
    console.log('joe')
   } 
   if (CARD_VALUE_MAP[card2] === CARD_VALUE_MAP[card1]){
     war()
  }  
  else checkWin ()
   
}
round()
// if values are equal each player will place 3 cards into a war deck and flip a forth to see who wins all 8 cards
function PlayerLose() {
  console.log('L')
}
 function war(){
   if (playerDeck.length < 4){
     playerLose()
   }
   if (deck.length < 4){
     playerWin()
   }
   war1 = deck.shift(0,1)
   war2 = deck.shift(1,1)
   war3 = deck.shift(2,1)
   war4 = playerDeck.shift(0,1)
   war5 = playerDeck.shift(0,1)
   war6 = playerDeck.shift(0,1)

  if ((CARD_VALUE_MAP[card2])>(CARD_VALUE_MAP[card1])){
    deck.shift(card1[0])
    playerDeck.shift(card2[0])
    playerDeck.push(card1[0])
    playerDeck.push(card2[0])
    playerDeck.push(war1[0])
    playerDeck.push(war2[0])
    playerDeck.push(war3[0])
  }
  else if((CARD_VALUE_MAP[card2])<(CARD_VALUE_MAP[card1])){
    playerDeck.shift(card2[0])
    deck.shift(card1[0])
    deck.push(card2[0])
    deck.push(card1[0])
    deck.push(war4[0])
    deck.push(war5[0])
    deck.push(war6[0])
  }
  if (CARD_VALUE_MAP[card2] === CARD_VALUE_MAP[card1]){
    war()
  }
  else return (checkWin())
 }
//  function that checks win or starts new round
function checkWin() {
  if (deck.length===0 && card1.length===0){
    playerWin() 
  }
  if (playerDeck.length===0 && card2.length===0 ){
    PlayerLose() } 
  else (cleanBeforeRound())
}
// display text is player wins
 function playerWin(){
  console.log('Dub')

 }
//  display text is player loses
 function PlayerLose() {
   console.log('L')
 }
// clean cards off screen
 function cleanBeforeRound(){
   card1El.innerHTML= ''
   card2El.innerHTML=''
 }
 cleanBeforeRound()

//  show card count
//  function updatedDeckCount() {
//   deck.length = player2Count.innerText('player2Count')
//   playerDeck.length = player1Count.innerText('player1Count')
//    getNewPlayerCards ()
//  }
// updatedDeckCount()
document.getElementById('btn').addEventListener("click", getNewCard())


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
// const playerCard = playerDeck.pop()
//   const computerCard = computerDeck.pop()

//   playerCardSlot.appendChild(playerCard.getHTML())
//   computerCardSlot.appendChild(computerCard.getHTML())
  
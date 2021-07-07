




// const player2Deck = [ ]
// Declare deck variables
dA=14
dQ=12
dK=13 
dJ=11
d10=10
d09=09
d08=08
d07=07
d06=06
d05=05
d04=04
d03=03
d02=02
hA=14 
hQ=12 
hK=13
hJ=11
h10=10
h09=09
h08=08
h07=07
h06=06
h05=05
h04=04
h03=3
h02=02
cA=14 
cQ=12
cK=13
cJ=11
c10=10
c09=09
c08=08
c07=07
c06=06
c05=05
c04=04
c03=03
c02=02
sA=14
sQ=12
sK=13
sJ=11
s10=10
s09=09
s08=08
s07=07
s06=06
s05=05
s04=04
s03=03
s02=02
let deck =[dA,dQ,dK,dJ,d10,d09,d08,d07,d06,d05,d04,d03,d02,hA,hQ,hK,hJ,h10,h09,h08,h07,h06,h05,h04,h03,h02,cA,cQ,cK,cJ,c10,c09,c08,c07,c06,c05,c04,c03,c02,sA,sQ,sK,sJ,s10,s09,s08,s07,s06,s05,s04,s03,s02,]
console.log(deck)

player1c=[]
// player1Deck = [playingCardDeck]
// let randIdx = Math.floor(Math.random() * playingCardDeck.length)
// let player2Deck = player1Deck.splice(randIdx, 0)
// console.log(player2Deck)

// for(let i =0; i<(playingCardDeck.length)/2; i++){
// playingCardDeck.splice(randIdx,1)
// console.log(playingCardDeck)
// player1Deck.push
// }
// console.log(player1Deck)


// console.log(playingCardDeck)
player1 = Math.ceil (deck.length / 2)(
  player1c.push
  console.log(player1)
) 
console.log(player1)

const player2Deck = deck.splice(0,playerDeck);
console.log(player2Deck)
const player1Deck = deck.splice(0,playerDeck);
console.log(player1Deck)
let randIdx = Math.floor(Math.random() * player1Deck.length)
let player1Card = player1Deck.pop(randIdx, 1)
console.log(player1Card)
let player2Card = player2Deck.pop(randIdx, 1)
console.log(player2Card)
// // Cached element references
let playerDeck1El = document.getElementById('playerDeck1')
let playerDeck2El = document.getElementById('playerDeck2')
let messageEl = document.getElementById ('message')

// Event listeners
document.getElementById('btn').addEventListener('click', handleClick)


// init()

 
// function init() {
// }

// function handleClick(gameStatus = false){
//     if (player1Card > player2Card){
//     player1Deck.push(player2Card, [0])
//     console.log ('yur')
//   }
//     if (player1Card < player2Card)
//     player2Deck.push(player1Card, [0])
//     console.log ('yeabuddy')
    // if (player1Card===player2Card) {
      
    // }
    // render(cardPicked)
  // }


// Function to render deck state
// function render(cardPicked){
  // Remove outline class when first card is picked
  // if (deck2.length === 1) {
  //   deck2El.classList.remove('outline')
  // }
  // Removes previous picked card from deck 2 class list
  // if (deck2.length > 1) {
  //   deck2El.classList.remove(cardToRemove)
  // }
	// Set card to be removed on next click
//   cardToRemove = cardPicked
  // Add current card picked to deck 2 element
//   deck2El.classList.add(cardPicked)
  // Adjust shadow when deck gets above/below halfway full
//   deck1El.classList.add('animate__animated','animate__rotateOutUpLeft')
//   setTimeout(()=> {
//     deck1El.classList.remove('animate__animated','animate__rotateOutUpLeft')
//   }, 1000)
//   if (deck2.length === 26) {
//     deck1El.classList.remove('shadow')
//     deck2El.classList.add('shadow')
//   }
  // Remove card back color and add outline when last card is picked
//   if (deck1.length === 0) {
//     deck1El.classList.add('outline')
//     deck1El.classList.remove('back-blue')

//   }
// }
// function gameStatus(){
//   if (playerDeck1 === 0){
//     messageEl ('Player 2 Wins!!!!')
//     gameStatus = true
//     console.log('oh no')
//   }
//   if (playerDeck2 === 0){
//     messageEl ('Player 1 Wins!!!!')
//     gameStatus = true
//     console.log('ohyea')
//   }
// }
// Start Game
// first randomly shuffle array 
//next divide array evenly in half
// Game
// player1Card = playerdeck1.splice(randIdx, 1)
// player2Card = playerdeck2.splice(randIdx, 1)
// if (player1Card > player2Card) { Player1deck.push
// 
// }
// if (player1Card<player2Card){Player2deck.push
// }
// if (player1Card===player2Card){
// 
//  
// 
// 
// }
// function Game Status(){
// if (player1deck===0){
// message 'Player 2 Wins!!!'
// }
// if (player2deck===0){
// message 'Player 1 Wins!!!'
// }
// render(start Game)
// }
// if playercard is <4
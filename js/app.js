let deckEl = document.getElementById('deck')
let playerdeckEl = document.getElementById('playerDeck')
let card1El = document.getElementById('card1')
let card2El = document.getElementById('card2')
let player1Count = document.getElementById('player1Count')
let player2Count = document.getElementById('player2Count')
let text = document.getElementById('text')
let score = document.getElementById('score')
let score2 = document.getElementById('score2')
let deck=[]
document.getElementById('btn').addEventListener("click", game)
const CARD_VALUE_MAP = {
  dA: 14 ,dQ: 12,dK: 13,dJ: 11,d10:10,d09: 9,d08: 8,d07: 7,d06: 6,d05: 5,d04: 4,d03: 3,d02: 2,hA: 14,hQ: 12,hK: 13,hJ: 11,h10:10,h09: 9,h08: 8,h07: 7,h06: 6,h05: 5,h04: 4,h03: 3,h02: 2,cA: 14,cQ: 12,cK: 13,cJ: 11,c10:10,c09: 9,c08: 8,c07: 7,c06: 6,c05: 5,c04: 4,c03: 3,c02: 2,sA: 14,sQ: 12,sK: 13,sJ: 11,s10:10,s09: 9,s08: 8,s07: 7,s06: 6,s05: 5,s04: 4,s03: 3,s02: 2
}
init()
// Create deck shuffle and make DeckArrays
function init() {
const suits = ['h', 'd', 's', 'c']
const values = ['02','03','04','05','06','07','08','09','10','J','Q','K','A']
  
for (let suitCounter = 0; suitCounter<4; suitCounter++){
  for(let i=0; i<13; i++){
    deck.push(suits[suitCounter]+values[i])
  }
}
}

//  Randomize Deck
function shuffle (){
  deck.sort((a,b)=> 0.5 - Math.random())

}
  shuffle(deck)
  // split deck in half
  let playerDeck = deck.splice(0,26)
  
function render() {
let card1 = deck[0]
let card2 = playerDeck[0]

  if (card1===1){
    card1El.classList.remove(card1)
    }
    
  cardToRemove = card1
  card1El.classList.add(card1)
  card1El.classList.add('animate__animated','animate__rotateOutUpLeft')

  setTimeout(()=> {
    card1El.classList.remove('animate__animated','animate__rotateOutUpLeft')
    }, 1000)


  if(card2===1){
    card2El.classList.remove(card2)
  }
     cardToRemove1 = card2
     card2El.classList.add(card2)
     card2El.classList.add('animate__animated',    'animate__rotateOutUpRight')
     
     setTimeout(()=> {
     card2El.classList.remove('animate__animated','animate__rotateOutUpRight')
    }, 1000)
}
// if card value is greater than other push the card into others array. while also taking off top card
function round(){
  if (deck.length === 0){
     player1Win()
    }

  if (playerDeck.length === 0){
     Player2Win()
    }

  if (CARD_VALUE_MAP[playerDeck[0]] > CARD_VALUE_MAP[deck[0]]){
      text.innerText= ('Player 2 wins round!')
      deck.shift(deck[0])
      playerDeck.push(deck[0])
      playerDeck.shift(playerDeck[0])
      playerDeck.push (playerDeck[0])
      score.innerText= (playerDeck.length)
      score2.innerText= (deck.length)
      checkWin()
      }
  else if (CARD_VALUE_MAP[playerDeck[0]] < CARD_VALUE_MAP[deck[0]]){
      text.innerText= ('Player 1 wins round!')
      playerDeck.shift(playerDeck[0])
      deck.push(playerDeck[0])
      deck.shift(deck[0])
      deck.push(deck[0])
      score.innerText= (playerDeck.length)
      score2.innerText= (deck.length)
      checkWin()
      } 
  else if (CARD_VALUE_MAP[playerDeck[0]] === CARD_VALUE_MAP[deck[0]]){
     war()
    }  
}
// if values are equal each player will place 3 cards into a war deck and flip a forth to see who wins all 8 cards
 function war(){
  if (deck.length < 4){
     text.innerText= ('Player 2 Wins!')
    }

  if (playerDeck.length < 4){
     text.innerText= ('Player 1 Wins!')
    } 

   let warCard1 = deck.splice(4,1)
   let warCard2 = playerDeck.splice(4,1)
   let war1 = deck.splice(1,1)
   let war2 = deck.splice(2,1)
   let war3 = deck.splice(3,1)
   let war4 = playerDeck.splice(1,1)
   let war5 = playerDeck.splice(2,1)
   let war6 = playerDeck.splice(3,1)

  if (CARD_VALUE_MAP[playerDeck[4]] > CARD_VALUE_MAP[deck[4]]){
      text.innerText= ('Player 2 wins War!')
      deck.shift()
      playerDeck.shift()
      playerDeck.push(deck[0])
      playerDeck.push(playerDeck[0])
      playerDeck.push(warCard1[0])
      playerDeck.push(warCard2[0])
      playerDeck.push(war1[0])
      playerDeck.push(war2[0])
      playerDeck.push(war3[0])
      playerDeck.push(war4[0])
      playerDeck.push(war5[0])
      playerDeck.push(war6[0])
     }
  else if (CARD_VALUE_MAP[playerDeck[4]]< CARD_VALUE_MAP[deck[4]]){
      text.innerText= ('Player 1 wins War!')
      playerDeck.shift()
      deck.shift()
      deck.push(deck[0])
      deck.push(playerDeck[0])
      deck.push(warCard1[0])
      deck.push(warCard2[0])
      deck.push(war1[0])
      deck.push(war2[0])
      deck.push(war3[0])
      deck.push(war4[0])
      deck.push(war5[0])
      deck.push(war6[0])
      }
  else if (CARD_VALUE_MAP[playerDeck[4]] = CARD_VALUE_MAP[deck[4]]){
      war()
    }
  checkWin ()
 }
//  function that checks win 
function checkWin() {

  if (deck.length === 0){
     text.innerText= ('Player 2 Wins!')
      }

  if (playerDeck.length===0){
     text.innerText= ('Player 1 Wins!') 
      } 
    }

function game(){
  render (),
  round(),
  checkWin();
}
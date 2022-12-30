
const ACE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FIVE = 5;
const SIX = 6;
const SEVEN = 7;
const EIGHT = 8;
const NINE = 9;
const TEN = 10;
const JACK = 10;
const QUEEN = 10;
const KING = 10;


const deck = [ACE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING];

let playerHand = [];

let dealerHand = [];

function shuffleDeck() {
  // TODO: Implement shuffle algorithm
}

function dealCard() {
  // TODO: Implement deal algorithm
}

function calculateScore(hand) {
  // TODO: Implement score calculation algorithm
}


function checkWin() {
  // TODO: Implement win checking algorithm
}

function playGame() {
  shuffleDeck();

  playerHand.push(dealCard());
  dealerHand.push(dealCard());
  playerHand.push(dealCard());

  document.getElementById('player-hand').innerHTML = playerHand.join(', ');
  document.getElementById('dealer-hand').innerHTML = dealerHand[0] + ', [hidden]';

  if (calculateScore(playerHand) === 21) {
    document.getElementById('result').innerHTML = 'You won! Blackjack!';
  } else {
    while (true) {
      if (checkWin()) {
        document.getElementById('result').innerHTML = 'You won!';
        break;
      } else if (calculateScore(playerHand) > 21) {
        document.getElementById('result').innerHTML = 'You lost!';
        break;
      }
    }
  }
}

document.getElementById('play-button').onclick = playGame;
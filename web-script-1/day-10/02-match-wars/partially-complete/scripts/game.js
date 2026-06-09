import { cards } from './cards.js';
import { shuffle, formatCount } from './utils.js';

class MatchGame {
  constructor() {
    this.cardElements = document.querySelectorAll('.card');
    this.turnOutput = document.getElementById('turn-output');
    this.matchOutput = document.getElementById('match-output');
    this.message = document.getElementById('message');
    this.resetButton = document.getElementById('btn-reset');

    this.totalMatches = this.cardElements.length / 2;

    this.resetButton.addEventListener('click', () => this.resetGame());
    this.cardElements.forEach(card => {
      card.addEventListener('click', event => this.handleCardClick(event));
    });

    this.resetGame();
  }

  resetGame() {
    this.turns = 0;
    this.matches = 0;
    this.firstCard = null;
    this.secondCard = null;
    this.lockBoard = false;

    this.turnOutput.textContent = formatCount(this.turns);
    this.matchOutput.textContent = formatCount(this.matches);
    this.message.textContent = 'Find all 6 matches.';

    this.placeCards();
  }

  placeCards() {
    const shuffledCards = shuffle(cards);

    this.cardElements.forEach((cardElement, index) => {
      const currentCard = shuffledCards[index];
      const image = cardElement.querySelector('.card-image img');

      cardElement.dataset.number = currentCard.number;
      cardElement.classList.remove('open', 'matched');

      image.src = currentCard.path;
      image.alt = currentCard.alt;
    });
  }

  handleCardClick(event) {
    const clickedCard = event.currentTarget;

    if (this.lockBoard) return;
    if (clickedCard === this.firstCard) return;
    if (clickedCard.classList.contains('matched')) return;

    clickedCard.classList.add('open');

    if (!this.firstCard) {
      this.firstCard = clickedCard;
      this.message.textContent = 'Choose one more card.';
      return;
    }

    this.secondCard = clickedCard;
    this.lockBoard = true;
    this.turns++;
    this.turnOutput.textContent = formatCount(this.turns);

    this.checkForMatch();
  }

  checkForMatch() {
    // TODO:
    // 1. Compare the data-number values on firstCard and secondCard.
    // 2. If they match, call handleMatch().
    // 3. If they do not match, call handleMismatch().
  }

  handleMatch() {
    this.firstCard.classList.add('matched');
    this.secondCard.classList.add('matched');

    this.matches++;
    this.matchOutput.textContent = formatCount(this.matches);
    this.message.textContent = 'Match found!';

    this.resetTurnState();

    // TODO:
    // If the player has found all matches,
    // update the message to tell them they won.
  }

  handleMismatch() {
    this.message.textContent = 'Not a match. Try again.';

    setTimeout(() => {
      // TODO:
      // 1. Remove the open class from both cards.
      // 2. Call resetTurnState().
    }, 900);
  }

  resetTurnState() {
    this.firstCard = null;
    this.secondCard = null;
    this.lockBoard = false;
  }
}

new MatchGame();

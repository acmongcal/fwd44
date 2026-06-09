import { cards } from './cards.js';
import { shuffle, formatCount } from './utils.js';

class MatchGame {
  constructor() {
    // 1. Store the main DOM elements we need.
    this.cardElements = document.querySelectorAll('.card');
    this.turnOutput = document.getElementById('turn-output');
    this.matchOutput = document.getElementById('match-output');
    this.message = document.getElementById('message');
    this.resetButton = document.getElementById('btn-reset');

    // 2. The player wins when they match half the total number of cards.
    // 12 cards means 6 matches.
    this.totalMatches = this.cardElements.length / 2;

    // 3. Set up events.
    this.resetButton.addEventListener('click', () => this.resetGame());
    this.cardElements.forEach(card => {
      card.addEventListener('click', event => this.handleCardClick(event));
    });

    // 4. Start the game.
    this.resetGame();
  }

  resetGame() {
    // Reset game state values.
    this.turns = 0;
    this.matches = 0;
    this.firstCard = null;
    this.secondCard = null;
    this.lockBoard = false;

    // Update the visible output.
    this.turnOutput.textContent = formatCount(this.turns);
    this.matchOutput.textContent = formatCount(this.matches);
    this.message.textContent = 'Find all 6 matches.';

    // Place a freshly shuffled set of cards on the board.
    this.placeCards();
  }

  placeCards() {
    // Create a shuffled copy of the card data.
    const shuffledCards = shuffle(cards);

    // Loop through each HTML card and assign new data to it.
    this.cardElements.forEach((cardElement, index) => {
      const currentCard = shuffledCards[index];
      const image = cardElement.querySelector('.card-image img');

      // Store the card number in a data attribute.
      // This makes it easy to compare two cards later.
      cardElement.dataset.number = currentCard.number;

      // Remove old visual states from a previous round.
      cardElement.classList.remove('open', 'matched');

      // Update the card image.
      image.src = currentCard.path;
      image.alt = currentCard.alt;
    });
  }

  handleCardClick(event) {
    const clickedCard = event.currentTarget;

    // Guard clauses:
    // 1. Stop if the board is temporarily locked.
    // 2. Stop if the player clicks the same card twice.
    // 3. Stop if the card has already been matched.
    if (this.lockBoard) return;
    if (clickedCard === this.firstCard) return;
    if (clickedCard.classList.contains('matched')) return;

    // Open the current card.
    clickedCard.classList.add('open');

    // If this is the first card in the turn, store it and stop.
    if (!this.firstCard) {
      this.firstCard = clickedCard;
      this.message.textContent = 'Choose one more card.';
      return;
    }

    // If we reach this point, it must be the second card.
    this.secondCard = clickedCard;
    this.lockBoard = true;

    // A turn is counted after the player chooses the second card.
    this.turns++;
    this.turnOutput.textContent = formatCount(this.turns);

    // Compare the two cards.
    this.checkForMatch();
  }

  checkForMatch() {
    // Two cards match if their dataset numbers are the same.
    const isMatch = this.firstCard.dataset.number === this.secondCard.dataset.number;

    if (isMatch) {
      this.handleMatch();
    } else {
      this.handleMismatch();
    }
  }

  handleMatch() {
    // Mark both cards as matched.
    this.firstCard.classList.add('matched');
    this.secondCard.classList.add('matched');

    // Update match total and text output.
    this.matches++;
    this.matchOutput.textContent = formatCount(this.matches);
    this.message.textContent = 'Match found!';

    // Reset the turn state so the player can choose again.
    this.resetTurnState();

    // If the player has found all matches, show a win message.
    if (this.matches === this.totalMatches) {
      this.message.textContent = 'You win! Click Reset to play again.';
    }
  }

  handleMismatch() {
    this.message.textContent = 'Not a match. Try again.';

    // Wait a moment so the player can see the second card.
    setTimeout(() => {
      // Close both cards.
      this.firstCard.classList.remove('open');
      this.secondCard.classList.remove('open');

      // Reset the turn state.
      this.resetTurnState();
    }, 900);
  }

  resetTurnState() {
    // Clear the card references and unlock the board.
    this.firstCard = null;
    this.secondCard = null;
    this.lockBoard = false;
  }
}

new MatchGame();

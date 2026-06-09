import { cards } from './cards.js';
import { shuffle, formatCount } from './utils.js';

class MatchGame {
  constructor() {
    // Step 1: get the main HTML elements.
    this.cardElements = document.querySelectorAll('.card');
    this.turnOutput = document.getElementById('turn-output');
    this.matchOutput = document.getElementById('match-output');
    this.message = document.getElementById('message');
    this.resetButton = document.getElementById('btn-reset');

    // TODO 1:
    // The player wins when they find half the total number of cards.
    // Example: 12 cards means 6 matches.
    // Store that number in this.totalMatches.

    // Step 2: connect the Reset button.
    this.resetButton.addEventListener('click', () => this.resetGame());

    // TODO 2:
    // Add a click event to each card.
    // Use forEach on this.cardElements.
    // Each click should call this.handleCardClick(event).

    // Step 3: start a new game right away.
    this.resetGame();
  }

  resetGame() {
    // TODO 3:
    // Reset these properties:
    // this.turns = 0
    // this.matches = 0
    // this.firstCard = null
    // this.secondCard = null
    // this.lockBoard = false

    // TODO 4:
    // Update the output text for turns and matches.
    // Use formatCount(...) when showing the numbers.

    this.message.textContent = 'Find all 6 matches.';

    // Step 4: place shuffled cards on the board.
    this.placeCards();
  }

  placeCards() {
    // Step 5: make a shuffled copy of the card data.
    const shuffledCards = shuffle(cards);

    this.cardElements.forEach((cardElement, index) => {
      const currentCard = shuffledCards[index];
      const image = cardElement.querySelector('.card-image img');

      // TODO 5:
      // Save the card number in a data attribute.
      // Example: cardElement.dataset.number = currentCard.number;

      // TODO 6:
      // Remove old 'open' and 'matched' classes.

      // Step 6: update the image for this card.
      image.src = currentCard.path;
      image.alt = currentCard.alt;
    });
  }

  handleCardClick(event) {
    const clickedCard = event.currentTarget;

    // TODO 7:
    // Add guard clauses to stop the click when:
    // - the board is locked
    // - the same card is clicked twice
    // - the card is already matched

    // Step 7: open the clicked card.
    clickedCard.classList.add('open');

    // TODO 8:
    // If there is no firstCard yet:
    // - store clickedCard in this.firstCard
    // - update the message to say: 'Choose one more card.'
    // - return

    // TODO 9:
    // Otherwise:
    // - store clickedCard in this.secondCard
    // - set this.lockBoard = true
    // - add 1 to this.turns
    // - update the turn output using formatCount(...)
    // - call this.checkForMatch()
  }

  checkForMatch() {
    // TODO 10:
    // Compare the dataset.number value on firstCard and secondCard.
    // Store the result in a variable such as isMatch.
    // If isMatch is true, call this.handleMatch().
    // Otherwise call this.handleMismatch().
  }

  handleMatch() {
    // TODO 11:
    // 1. Add the 'matched' class to both cards.
    // 2. Add 1 to this.matches.
    // 3. Update the match output with formatCount(...)
    // 4. Update the message to 'Match found!'
    // 5. Call this.resetTurnState()
    // 6. If this.matches === this.totalMatches,
    //    change the message to 'You win! Click Reset to play again.'
  }

  handleMismatch() {
    this.message.textContent = 'Not a match. Try again.';

    setTimeout(() => {
      // TODO 12:
      // 1. Remove the 'open' class from firstCard.
      // 2. Remove the 'open' class from secondCard.
      // 3. Call this.resetTurnState()
    }, 900);
  }

  resetTurnState() {
    // TODO 13:
    // Reset the turn state so the player can click again:
    // this.firstCard = null
    // this.secondCard = null
    // this.lockBoard = false
  }
}

new MatchGame();

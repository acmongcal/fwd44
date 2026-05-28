// Cat Manager

// Game HTML Elements
const catSelector = document.querySelector('.cat-selector');
const catImages = document.querySelectorAll('.cat-image-container img');
const catNameCreator = document.querySelector('.cat-name-creator');
const catNameForm = catNameCreator.querySelector('form');
const catNameInput = document.getElementById('cat-name');
const gameboard = document.querySelector('.gameboard-container');
const btnControls = document.querySelectorAll('.game-controls button');
const btnPlayAgain = document.getElementById('btn-play-again');

// Game HTML Elements Object
const gameHTMLElementsForCat = {
    name: document.querySelector('.cat-name-output h3'),
    image: {
        cat: document.querySelector('.cat-image-output'),
        grimReaper: document.querySelector('.grim-reaper-image-output')
    },
    button: {
        playAgain: btnPlayAgain
    },
    stat: {
        hunger: document.getElementById('hunger-out'),
        thirst: document.getElementById('thirst-out'),
        love: document.getElementById('love-out')
    },
    message: {
        hunger: document.getElementById('message-out-hunger'),
        thirst: document.getElementById('message-out-thirst'),
        love: document.getElementById('message-out-love')
    }
}

// Game State Variables
let petCatImage;

// Game Object
let petCat;

// Cat Love Messages
/*
- "I'm well loved... 😸"
- "I need some love! 🐱"
- "I feel unloved, please pet me! 😿"
- "I'm going to ignore you now! 😼"
- "I'M DISOWNING YOU! 😾"
*/

// Cat Class
class Cat {
    constructor(name) {
        // You can add additional parameters or
        // modify this parameter for this 
        // constructor function...

        // Feel free to add addtional properties...
        // or edit these properties...
        this.name = name;
        this.hunger = 10;
        this.thirst = 10;
        this.happiness = 10;
    }

    // The following are the base
    // required methods...
    // Feel free to add additional
    // methods...

    feed(food) {
        
        // The above "food" parameter
        // is optional. Feel free to
        // remove it...

        // This method will change
        // the hunger points output
        // and the hunger message
        // output
        
        if(food=='plus'){
            if(this.hunger!=10){
                this.hunger++;
            }
            
        }
        else if(food=='minus'){
            if(this.hunger!=0){
                this.hunger--;
                
            }
        }
        gameHTMLElementsForCat.stat.hunger.innerText= this.hunger;
        if(this.hunger >= 6){
            gameHTMLElementsForCat.message.hunger.innerText="I'm not hungry...";
        }
        else if(this.hunger <=5 && this.hunger!=0){
            gameHTMLElementsForCat.message.hunger.innerText="I'm hungry...";
        }
        else if(this.hunger==0){
            gameHTMLElementsForCat.message.hunger.innerText="I'm dead!!!";
        }

    }

    drink(water) {

        // The above "water" parameter
        // is optional. Feel free to
        // remove it...

        // This method will change
        // the thirst points output
        // and the thirst message
        // output
        if(water=='plus'){
            if(this.thirst!=10){
                this.thirst++;
            }
            
        }
        else if(water=='minus'){
            if(this.thirst!=0){
                this.thirst--;
                
            }
        }
        gameHTMLElementsForCat.stat.thirst.innerText= this.thirst;
        if(this.thirst >= 6){
            gameHTMLElementsForCat.message.thirst.innerText="I'm not thirsty...";
        }
        else if(this.thirst <=5 && this.thirst!=0){
            gameHTMLElementsForCat.message.thirst.innerText="I'm thirsty...";
        }
        else if(this.thirst==0){
            gameHTMLElementsForCat.message.thirst.innerText="I'm dead!!!";
        }

    }

    love(pet) {

        // The above "pet" parameter
        // is optional. Feel free to
        // remove it...

        // This method will change
        // the love points output
        // and the love message
        // output
        if(pet=='plus'){
            if(this.happiness!=10){
                this.happiness++;
            }
        }
        else if(pet=='minus'){
            if(this.happiness!=0){
                this.happiness--;
            }
            
        }
        gameHTMLElementsForCat.stat.love.innerText= this.happiness;
        if(this.happiness==10){
            gameHTMLElementsForCat.message.love.innerText= "I'm well loved... 😸";
        }
        else if(this.happiness>=7 && this.happiness<=9){
            gameHTMLElementsForCat.message.love.innerText="I need some love! 🐱";
        }
        else if(this.happiness>=4 && this.happiness<=6){
            gameHTMLElementsForCat.message.love.innerText="I feel unloved, please pet me! 😿";
        }
        else if(this.happiness>=1 && this.happiness<=3){
            gameHTMLElementsForCat.message.love.innerText="I'm going to ignore you now! 😼";
        }
        else if(this.happiness==0){
            gameHTMLElementsForCat.message.love.innerText="I'M DISOWNING YOU! 😾";
        }
    }

}

// Game Event Handlers
catImages.forEach(catImage => catImage.addEventListener('click', selectCat));

function selectCat(e){
    
    // This function will probably need
    // additional code...
    petCatImage = e.target.src;
    catSelector.style.display = 'none';
    catNameCreator.style.display = 'block';

}

catNameForm.addEventListener('submit', startGame);

function startGame(e){

    e.preventDefault();
    petCat = new Cat(catNameInput.value);
    const catName = catNameInput.value;
    catNameInput.value = '';
    gameHTMLElementsForCat.stat.hunger.innerText= petCat.hunger;
    gameHTMLElementsForCat.stat.thirst.innerText= petCat.thirst;
    gameHTMLElementsForCat.stat.love.innerText= petCat.happiness;

    // This function will probably need 
    // additional code...
    gameHTMLElementsForCat.name.innerHTML = petCat.name;
    gameHTMLElementsForCat.image.cat.src = petCatImage;
    catNameCreator.style.display = 'none';
    gameboard.style.display = 'block';

}

btnControls.forEach(function(btn){

    btn.addEventListener('click', function(e){
        // Control buttons event handler code
        // goes here...
        const btnName = e.target.id.split('-')
        switch (btnName[1]) {
        case 'food':
            petCat.feed(btnName[2]);
            break;
        case 'water':
            petCat.drink(btnName[2]);
            break;
        case 'pet':
            petCat.love(btnName[2]);
            break;
        default:
            return;
        }
        if(petCat.hunger==0|| petCat.thirst==0){
            gameHTMLElementsForCat.image.cat.style.display='none';
            gameHTMLElementsForCat.image.grimReaper.style.display='block';
            btnControls.forEach(btn=>btn.disabled = true);
            gameHTMLElementsForCat.button.playAgain.style.display='block';
           
        }
    });

});

btnPlayAgain.addEventListener('click', function(){
    // Play Again button event handler code
    // goes here...
    gameHTMLElementsForCat.image.cat.style.display='block';
    gameHTMLElementsForCat.image.grimReaper.style.display='none';
    gameHTMLElementsForCat.button.playAgain.style.display='none';
    btnControls.forEach(btn=>btn.disabled = false);
    gameboard.style.display = 'none';
    catSelector.style.display = 'block';
});





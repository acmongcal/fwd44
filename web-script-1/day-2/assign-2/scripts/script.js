const maxHeight= 750;
const maxWidth = 1300;
const instructions = document.getElementById('instructions');
const bigfoot = document.getElementById('bigfoot')

console.log(document.getElementById('forest').style.width);
//Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Generates a random number for the css top and left properties of bigfoot
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.getElementById('btn-start').addEventListener('click',function(){
  window.alert("find bigfoot in the forest and click on him");

  instructions.style.display='none';

  bigfoot.style.top = getRandomInt(maxHeight) + 'px';
  bigfoot.style.left = getRandomInt(maxWidth) + 'px';
  bigfoot.style.display = 'block';
});

document.getElementById('bigfoot').addEventListener('click',function(){
  const play = window.confirm("Arghhh! You found me. Do you want to play again?");
  if(play){
    instructions.style.display='block';
    bigfoot.style.display = 'none';
  }
  else{
    return;
  }
});
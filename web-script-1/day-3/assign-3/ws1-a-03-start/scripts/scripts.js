


const turnLeft = document.getElementById('btn-turn-clockwise');
const turnRight = document.getElementById('btn-turn-counter-clockwise');
const bike = document.getElementById('slide');
var bikeInterval;
var initialX;
var isDragging= false;
const max = 34;

function getCurrentBikeNum(){
    const src = bike.src.split(".");
    const bikeNum = src[3].split("-");
    return bikeNum[bikeNum.length -1];
}

function bikeTurnLeft(){
    bikeNumber = getCurrentBikeNum();
    if (bikeNumber == max){
        bike.src = 'images/bike-1.jpg';
    }
    else{
        bike.src = `images/bike-${(bikeNumber*1 + 1)}.jpg`;
    }
}

function bikeTurnRight(){
    bikeNumber = getCurrentBikeNum();
    if (bikeNumber == 1){
        bike.src = `images/bike-${max}.jpg`;
    }
    else{
        bike.src = `images/bike-${(bikeNumber*1 - 1)}.jpg`;
    }
}

//On click
turnRight.addEventListener('click', function(){
    bikeTurnRight();
});

turnLeft.addEventListener('click', function(){
    bikeTurnLeft();
});



//MouseHold
turnRight.addEventListener('mousedown', function(e){
    bikeInterval = setInterval(bikeTurnRight, 100);
})


turnRight.addEventListener('mouseup', function(e){
    clearInterval(bikeInterval);
})


turnLeft.addEventListener('mousedown', function(e){
    bikeInterval = setInterval(bikeTurnLeft, 50);
})


turnLeft.addEventListener('mouseup', function(e){
    clearInterval(bikeInterval);
})


 //Mouse Drag
bike.addEventListener('mousedown', function(e){
    initialX = e.clientX;
    isDragging = true;
})

bike.addEventListener('mousemove', function(e){
    const currentX = e.clientX;
    var distance = currentX - initialX;
    if(isDragging && distance < 10){
        bikeInterval = setInterval(bikeTurnLeft, 50);
    }
    else if(isDragging && distance > 10){
        bikeInterval = setInterval(bikeTurnRight, 50);
    }
    else{
        return;
    }
})

bike.addEventListener('mouseup', function(e){
    initialX = e.clientX;
    isDragging = false;
    clearInterval(bikeInterval);
})



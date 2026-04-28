const p1  = document.getElementById('p-01');
const p2  = document.getElementById('p-02');
const p3  = document.getElementById('p-03');
const p4  = document.getElementById('p-04');
const btn = document.getElementById('btn');

//Function Declaration
// With function declarations, the function call can go before the declaration
sayHello();

function sayHello(){
    console.log("Hello Donnie!");
}


//Function expression
//With function expression the function  call must go after declaration
 const sayHello2 = function(){
    console.log('Hello Egbert');
 }
 sayHello2();

//Function with Parameters
function helloUser(user, age){
    console.log(`Hello ${user}!`);
    console.log(`${user} is ${age} years old.`);
}

helloUser('Michael', 25);
helloUser('Sandy', 30);
helloUser('Alan', 27);

// Function with default parameters
function calcTip(bill, tipRate=15){
    tipRate = tipRate / 100;
    tipAmount = (bill * tipRate).toFixed(2);
    return tipAmount;
}
const tip = calcTip(100,30);
calcTip(100, 20);
console.log(`The tip paid was $${tip}`);
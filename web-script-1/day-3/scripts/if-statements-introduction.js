// Paragraph Outputs
const p1 = document.getElementById('p-01');
const p2 = document.getElementById('p-02');
const p3 = document.getElementById('p-03');


const age = 67;
const hasPension = true;


// if/else optional
if(age){
    console.log('age is one or higher');
}else{
    console.log('age is not set or is 0')
}

//Multiple conditions
if(age > 5){
    console.log('eligible for retirement');
}
else if(age < 65 && hasPension){
    console.log('not eligible for retirement');
}
else{
    console.log('age is not set or is 0');
}

// Equivalence vs Strict Equivalence

const foo = 3;
const bar = '3';

// Equivalence -> test for value
if (foo == bar){
    console.log('foo has the same value as bar');
}

// Strict Equivalence -> test for value and type
if(foo === bar){
    console.log('foo has the same value and data type as bar');
}
else{
    console.log('foo is not equal to bar');
}

//Truthy and Falsy 
let user;
let city;

if(user){
    console.log('user has been set...');
}

if(!user){
    console.log('user has not been set...');
}


//Switch Statement
const date = new Date();

let currentMonth = date.getMonth();


//Create an Array

const carBrands = [];
carBrands[0]='BMW';
carBrands[1]='Lexus';
carBrands[2]='Mazda';
carBrands[3]='BYD';
carBrands[4]='Ford';

console.log(carBrands.length);

//Arrays
const actionFigures = ['Kirito', ' Asuna', 'Shion', 'Lizbeth', 'Silica' ];

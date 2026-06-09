
// Closures are functions that refer to independent (free) variables. 
// In other words, the function defined in the closure 'remembers' 
// the environment in which it was created.

// Example 1 - General Closure Example
// pacBox is the outer function
function packBox(item){

    // the item variable is accessible to inner functions
    console.log('Put ' + item + ' in the box');
    
    // addressPackage is the inner function
    function addressPackage(address){
        console.log('Addressed the box to ' + address + ' and ready to send the ' + item + ' gift');
    }
    
    return addressPackage;
}

// Calling the closure
// Create an instance of the packBox function
// the packbox returns the addressPackage function
// which is stored in the brotherGift variable
const brotherGift = packBox('Funk Vinyl');
// brotherGift is a closure that has access to the item variable (Funk Vinyl)
// and the addressPackage function
// we can call the addressPackage function by calling the brotherGift variable
// and passing the address as an argument
brotherGift('123 Happy St, Melbourne');

// ****************************************

// Example 2 - Data Encapsulation
// Closure showing the use of a private variabla but not using a prameter
function secretKey(){
    // key is a private variable
    let key = '1234';
    
    // the inner function has access to the key variable
    return function(){
        console.log('The secret key is ' + key);
    }
}

outputKey = secretKey();
outputKey();

// ****************************************

// Example 3 - Persistent of State
// A closure can be used to maintain the state of a variable
// in between function calls
function counter(){
    let count = 0;
    
    return function(){
        count++;
        return count;
    }
}

// Select button (not related to closures)
const btn = document.getElementById('btn-counter');
// Create an instance of the counter function
const count = counter();
// Call count function inside the button click event
// handler
btn.addEventListener('click', function(){
    console.log('Click count: ', count());
});

// ****************************************

// Example 4 - Function Factories or Callbacks
// Closures are often used in callbacks
// to maintain the state of a variable
function add(a){
    return function(b){
        return a + b;
    }
}

const add5 = add(5);
console.log(add5(2));  // 5 + 2 = 7
console.log(add5(5));  // 5 + 5 = 10
console.log(add5(10)); // 5 + 10 = 15  

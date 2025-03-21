// Setting my favorite number (this is the number they have to guess)  
let favNumber = 7;  

// Asking the user to guess the number  
let guess = prompt("Guess my favorite number:");  

// Keep asking until they get it right  
while (Number(guess) !== favNumber) {  
    if (Number(guess) > favNumber) {  
        console.log("Too high! Try again.");  
    } else {  
        console.log("Too low! Try again.");  
    }  
    guess = prompt("Guess again:");  
}  

// If they get it right  
console.log("Correct! You guessed my favorite number.");

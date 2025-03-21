// Get the user's age  
let age = prompt("Enter your age:");

// Convert the input to a number 
age = Number(age);

// Figure out which category the age fits into  
if (age < 3) {  
    console.log("You are a Toddler (Under 3 years).");  
} else if (age >= 3 && age <= 12) {  
    console.log("You are a Child (3-12 years).");  
} else if (age >= 13 && age <= 19) {  
    console.log("You are a Teenager (13-19 years).");  
} else if (age >= 20 && age <= 35) {  
    console.log("You are a Young Adult (20-35 years).");  
} else if (age >= 36 && age <= 60) {  
    console.log("You are Middle Aged (36-60 years).");  
} else {  
    console.log("You are a Senior (60+ years).");  
}

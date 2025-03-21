// Asking the user for their three favorite colors
let colors = []; // Array to store colors

// Loop to get 3 colors from the user
for (let i = 0; i < 3; i++) {
    let color = prompt(Enter your favorite color #${i + 1}:);
    colors.push(color); // Adding color to the array
}

// Showing the colors the user entered
console.log("Your favorite colors are:", colors);

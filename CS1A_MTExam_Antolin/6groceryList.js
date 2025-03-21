// Asking how many grocery items the user wants to add
let itemCount = parseInt(prompt("How many items do you want to add to your grocery list?"));
let groceryList = []; // Array to store items

// Loop to get the items from the user
for (let i = 0; i < itemCount; i++) {
    let item = prompt(Enter item #${i + 1}:);
    groceryList.push(item); // Adding item to the list
}

// Displaying the original list
console.log("Your grocery list:", groceryList);

// Sorting alphabetically and showing it
let sortedList = [...groceryList].sort();
console.log("Sorted grocery list:", sortedList);

// Reversing the sorted list and showing it
let reversedList = [...sortedList].reverse();
console.log("Reversed sorted grocery list:", reversedList);

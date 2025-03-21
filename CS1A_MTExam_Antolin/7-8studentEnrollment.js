// Array to store enrolled students
let students = [];

// Enroll a student by asking for their name
let studentName = prompt('Enter student name to enroll:');
students.push(studentName); // Add to the list

// Ask which student to remove
let removeStudent = prompt('Enter the name of the student to remove:');
let index = students.indexOf(removeStudent);

if (index !== -1) {
    students.splice(index, 1); // Remove if found
    console.log(removeStudent + ' has been removed.');
} else {
    console.log(removeStudent + ' not found.');
}

// Pick and display a random student from the list
if (students.length > 0) {
    let randomStudent = students[Math.floor(Math.random() * students.length)];
    console.log('Randomly selected student: ' + randomStudent);
} else {
    console.log('No students available for selection.');
}

// Display all enrolled students
console.log('Enrolled students:');
students.forEach(student => console.log(student));

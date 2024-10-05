
// Step 1: Creating a person object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    location: "New York",
    occupation: "Software Developer",
    employed: true,
    friends: ["Alice", "Bob", "Charlie"]
};
console.log(person); // Expected output: person object with properties

// Step 2: Adding new properties
person.hobbies = ["reading", "coding", "hiking"];
person.favoriteColor = "blue";
console.log("Updated Person:", person); // Expected output: person object with new properties

// Step 3: Modifying existing values
person.age += 1; // Increment age by 1
person.occupation = "Senior Software Developer"; // Update occupation
console.log("Modified Person:", person); // Expected output: person object with modified values

// Step 4: Deleting a property
delete person.employed;
console.log("After Deletion:", person); // Expected output: person object without the employed property







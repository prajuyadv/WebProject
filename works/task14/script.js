let students = [];
class Person {
constructor(name, age, profession, hobby) {
this.name = name || "N/A";
this.age = age || "N/A";
this.profession = profession || "N/A";
this.hobby = hobby || "N/A";
}
describe() {
return `${this.name}, Age: ${this.age}, Profession: ${this.profession},
Hobby: ${this.hobby}`;
}
}
function insertInfo() {
let name = document.getElementById("name").value.trim();
let age = document.getElementById("age").value.trim();
let profession = document.getElementById("profession").value.trim();
let hobby = document.getElementById("hobby").value.trim();
// Simple validation
if (!name || !age || !profession || !hobby) {
alert("Please fill out all fields.");
return;
}
let person = new Person(name, age, profession, hobby);
students.push(person);
alert("Information added successfully!");
resetForm();
}
function showInfo() {
let output = students.length
? students.map((person, index) => `<li><strong>Record ${index +
1}:</strong> ${person.describe()}</li>`).join('')
: "<li>No records found.</li>";
document.getElementById("demo_div").innerHTML = output;
}
function searchInfo() {
let query = document.getElementById("searchQuery").value.toLowerCase().trim();
if (!query) {
alert("Please enter a name or age to search.");
return;
}
let filteredResults = students.filter(person =>
person.name.toLowerCase().includes(query) || person.age.includes(query)
);
let output = filteredResults.length
? filteredResults.map((person, index) => `<li><strong>Result ${index +
1}:</strong> ${person.describe()}</li>`).join('')
: "<li>No matching records found.</li>";
document.getElementById("searchResults").innerHTML = output;
}
function resetForm() {
document.getElementById("name").value = "";
document.getElementById("age").value = "";
document.getElementById("profession").value = "";
document.getElementById("hobby").value = "";
}
function clearDisplay() {
document.getElementById("demo_div").innerHTML = "";
}
function clearSearch() {
document.getElementById("searchQuery").value = "";
document.getElementById("searchResults").innerHTML = "";
showInfo();
}
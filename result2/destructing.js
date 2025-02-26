const fruits = ["apel", "anggur", "pepaya", "nanas", "jeruk"];

const red = fruits[0];
const purple = fruits[1];
const green = fruits[2];
const yellow = fruits[3];
const orange = fruits[4];

console.log(red, purple, green, yellow, orange);

// Destructing Object
const user = {
    nama : "zaffar",
    age : 20,
    major : "Mancing developer",
    hobbies : "Mancing"
}

const {nama, age, major, hobbies} = user;
console.log(nama, age, major, hobbies);



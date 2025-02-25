// Membuat object : {} & object()
const person = {
    name : "Zaffar",
    age : 20,
    major : "Front-end developer",
    isMarried : false
}

//Mengakses object
console.log(person.name);
console.log(person["age"]);

// Looping object menggunakan for in
for (const key in person) {
    console.log(person[key]);
    
}
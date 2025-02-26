/**
 * Spread Operator
 * Digunakan untuk membagi elemen berbentuk array
 * menjadi elemen tunggal
 */

const fruits = ["apel", "anggur"];

const newFruits = [...fruits, "jeruk", "nangka"]

console.log(newFruits);


//Menggunakan spread operator pada object
const user = {
    nama : "zaffar",
    major : "Informatics"
}

const newUser = {
    ...user,
    age: 20
};

console.log(newUser);


/**
 * Higher order function
 * Function yang menerima function sebagai parameter
 * Function yang mengembalikan function
 * filter, map, reduce
 */

const numbers = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
//filter untuk menampilkan data sesuai yang diinginkan
const filteredNumber = numbers.filter((number) => {
    return number > 0 //memfilter angka yang lebih besar dari 0
})
console.log(filteredNumber);

const newNumber = filteredNumber.map((number) => {
    return number * 2; //mengalikan angka dengan 2
})
console.log(newNumber);

const total = newNumber.reduce((acc, curr) => {
    return acc + curr;
})
console.log(total);

/**
 * acc itu adalah accumulator
 * curr itu adalah current value
 */


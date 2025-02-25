// Function declaration

function hitungUmur(bod = 2000) {
    const hasil = 2025 - bod;
    return hasil
}

// Function expression
 const hitungUmur2 = function (bod) {
    const hasil = 2025 - bod
    return hasil
}
console.log(hitungUmur2(2005));

//Arrow function
const hitungUmur3 = (bod) => {
    const hasil = 2025 - bod
    return hasil
}

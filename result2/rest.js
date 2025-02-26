// Rest Menggabungkan

/**
 * Rest parameter
 * Digunakan untuk menggabungkan semua parameter pada function 
 */

const sum = (...numbers) => {
    let hasil = 0
    for(const number of numbers) {
        console.log(number);
        hasil = hasil + number
    }
    console.log(hasil);
}
sum(1,2,3,4,5)
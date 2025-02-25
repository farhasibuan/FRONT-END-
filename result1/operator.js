// Operator aritmatika ( +, -, *, /, %, ** )

// let a = 10, 
// b = 3;
// console.log(a + b); //penambahan
// console.log(a - b); //pengurangan
// console.log(a * b); //perkalian
// console.log(a / b); //pembagian
// console.log(a % b); //modules
// console.log(a ** b); //perpangkatan

// //2. Operator perbandingan ( ==, ===, !=, !==, >, <, >=, <= )
// console.log(a == "10"); //mengecek nilai nya saja apakah a sama dengan "10" (true)
// console.log(a === "10"); //mengecek nilai dan tipe data nya apakah a sama dengan "10" (false )
// console.log(a != "5");  //tidak sama dengan, apakah a tidak sama dengan "5" (true)
// console.log(a !== "10"); //true
// console.log(a > b); //true
// console.log(a < b); //false

// 3. Operator logika ( &&, ||, ! )
// let x = true
// let y = false
// console.log(x && y); //false
// console.log(x || y); //true
// console.log(!x); //false

// 4. Operator ternary
// let umur = 17
// let status = umur >= 18 ? "Dewasa" : "Anak-anak"
// console.log(status);

// 5. Operator Nullish Coolescing
// let data1 = "zaffar";
// console.log(data1 ?? "Data Kosong");

// let data2 = null;
// console.log(data2 ?? "Data Kosong");

// 6. Opetaror Optional Chaining (?.)
const person = {
    student: {
        nama : "zaffar",
    }
}
console.log(person.student?.nama); //Mengecek apakah properti ada atau tidak
console.log(person.teacher?.name);





/**
 * if else : digunakan untuk pengecekan kondisi
 * Jika nilai di atas 90 : A
 * Jika nilai di atas 80 : B
 * Jika nilai di atas 70 : C
 */

const nilai = 95;

if (nilai > 90  && nilai <= 100) {
    console.log("A");
} else if (nilai > 80 && nilai <= 90) {
    console.log("B");
} else if (nilai > 70 && nilai <= 80) {
    console.log("C");
} else if (nilai < 70 && nilai >= 0) {
    console.log("D");
} else {
    console.log("Nilai tidak valid");
}

/**
 *  Switch case : Digunakan untuk pengecekan kondisi
 *  Jika nilai di atas 90 : A
 *  Jika nilai di atas 80 : B
 *  Jika nilai di atas 70 : C
 */

const grade = "A";

switch (grade) {
    case "A":
    console.log("sangat baik");
    break;
case "B":
    console.log("baik");
    break;
case "C":
    console.log("cukup");
    break;
case "D":
    console.log("kurang");
    break;
default:
    console.log("tidak ada");
    break;
}
    
    
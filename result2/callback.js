/**
 * Callback adalah function yang dipanggil oleh function lain
 */

//contoh 1
// const formatName = (name) => {
//     return name.toUpperCase()
// }

// formatName("zaffar")

//ini fungsi untuk format nama menjadi hruf kapital
const formatName = (name) => {
    return name.toUpperCase()
}

//contoh 3 || ini fungsi untuk mendapatkan nama
const getName = (name, callFormatName) => {
    return console.log(callFormatName(name));
}
getName("zaffar", formatName)


// TUGAS (AHMAD MUZAFFAR)
/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
    console.log("Downdload selesai");
    console.log(`Hasil download ${result}`);
}

/**
 * Fungsi untuk download file
 * @returns {Promise<string>} callback - Function callback show
 */

const download = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const fileName = "ubuntu.gariskeras";
            resolve(fileName);
        }, 2000);
    });
};


const main = async () => {
    const result = await download()
    showDownload(result);
}

main()

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */

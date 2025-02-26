/**
 * Synchronous adalah proses menjalankan semua function secara bersamaaan tanpa menunggu proses sebelumnya selesai
 * solusi agar dapat dijalankan berurutan adalah dengan callback
 * masalah callback hell bisa diatas menggunakan promise
 * promise menerima callback : resolve, reject
 */

const download = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Download selama 3 detik");
            resolve(); // Selesaikan Promise
        }, 3000);
    });
};


const verify = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Verify selama 2 detik");
            resolve(); // Selesaikan Promise
        }, 2000);
    });
};

const notify = () => {
    console.log("Download selesai");   
}

//konsumsi promise menggunakan async await
//keyword async memberi tau bahwa operasi asynchronous di dalam 
const main = async () => {
    await download(); // Tunggu download selesai
    await verify(); // Tunggu verifikasi selesai
    notify(); // Panggil notify setelah semua selesai
};

// verify();
// notify();
main();

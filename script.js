let noClickCount = 0;
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");
const message = document.getElementById("message");
const nameInput = document.getElementById("nameInput");
const submitName = document.getElementById("submitName");
const nameInputContainer = document.getElementById("nameInputContainer");
const buttons = document.querySelector(".buttons");

const happyGifs = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExODBmZHA1cXpkd2h3dDR5OWJmZDI4a2t6N2IwbDYxc3Q3cnV5YTI5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ISOckXUybVfQ4/giphy.gif", // GIF 1
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmxlNXMyejVpMzRuNjFhZnYyMzY3dmw2ZDdyYm52OHp6aThlaXpqeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7SF5scGB2AFrgsXP63/giphy.gif", // GIF 2
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnQybTMwbnB1NWh5Mzh5enlxeXhzbWFyd2cyNzE0aTNpbzhwNHFkaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aNFT7eG2rIKK715uLk/giphy.gif", // GIF 3
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmMzeGltbnMzdTViZ29hdHF0NWpkaXRxYTFjbW5lbG85NWo5ZnFzZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gfsQffBnuc6e096brx/giphy.gif", // GIF 4
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTJreXl1NjV3bW84cWdoNXNibXkyMmV1cm05Mzhyd3BlNXBxYWdkeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VIKa3CjZDCoymNcBY5/giphy.gif", // GIF 5
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTRtNWp3bGhmYm1remZsZTJpOXRjd3piYW12b2ZjbmYzbDF3a3oxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NTY1kHmcLsCsg/giphy.gif", // GIF 6
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGpoczl3aW0yMXFtMTlvMXVqZGpob3ljemNnc2VvZDBsMGJ3ZWh2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/usVgqVpC1GkR8sHgWE/giphy.gif", // GIF 7
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGFkcjVhdWc3a3JpcWx3endib3Izc3ppZ3JhenUxajAzcXBlZXd6ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZqlvCTNHpqrio/giphy.gif"  // GIF 8
];

const messages = [
    "Mau Jadi Pacarkuuu??😋",
    "Pencetttt Iyaaaa Donggg Pliss.",
    "KLIKKK IYAAAA 😡😡!!!.",
    "Kmu gmw?🥺",
    "Padahal Aku Sukaa Kamuu Klik Iyaa Pliss",
    "Kmu Gsukaa Sm Ak yh?🥺🥺🥺🥺",
    "Pencet iya kalo gamau bumi hujan darah😡😡",
    "WLEE GABISA PENCET LAGI WLEEEEEE"
];

const loveMessages = [
    "LOVEE U SAYANG MAKASIHH MAU NERIMAAAA 😍💕💖",
];

let yesClickData = []; // Array untuk menyimpan data klik "Iya"

submitName.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name) {
        question.textContent = `Hai, ${name}! ${messages[0]}`;
        nameInputContainer.style.display = "none";
        gif.style.display = "block";
        buttons.style.display = "block";
    } else {
        alert("Silakan masukkan namamu.");
    }
});

noButton.addEventListener("click", () => {
    if (noClickCount < 8) {
        message.textContent = messages[noClickCount];
        gif.src = happyGifs[noClickCount];
        noClickCount++;
        
        // Mengubah warna latar belakang
        document.body.style.backgroundColor = getRandomColor(); // Mengatur warna latar belakang
    }
    if (noClickCount === 8) {
        noButton.disabled = true; // Nonaktifkan tombol "no"
        message.textContent = "Kamu tidak bisa klik 'enggak' lagi.";
    }
});

yesButton.addEventListener("click", () => {
    gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG05enBla2NjM2tvdXhxdmF6N25qNWNybzlyZWY4d2NzOW5hczBsNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c76IJLufpNwSULPk77/giphy.gif"; // Ganti dengan URL GIF bahagia
    const randomIndex = Math.floor(Math.random() * loveMessages.length); // Pilih pesan acak
    question.textContent = loveMessages[randomIndex]; // Tampilkan pesan acak
    message.textContent = "";
    noButton.disabled = true; // Nonaktifkan tombol "no" jika "yes" diklik

    // Ambil informasi pengguna yang relevan
    const userData = {
        timestamp: new Date().toISOString(), // Waktu klik
        userName: nameInput.value.trim(), // Nama pengguna
        message: loveMessages[randomIndex] // Pesan yang ditampilkan
    };

    // Simpan data klik "Iya"
    yesClickData.push(userData);

    // Ambil screenshot
    html2canvas(document.querySelector("#main")).then(canvas => {
        // Buat link untuk mengunduh gambar
        const link = document.createElement('a');
        link.href = canvas.toDataURL(); // Mengonversi canvas ke data URL
        link.download = 'screenshot.png'; // Nama file yang akan diunduh
        link.click(); // Simulasikan klik untuk mengunduh
    });
});

// Fungsi untuk mendapatkan warna acak
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
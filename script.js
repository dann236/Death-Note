// =========================
// MENULIS NAMA
// =========================
function startDeathNote() {
    // Mengambil nama dari input
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    // Mengecek apakah nama kosong
    if (name === "") {
        alert("Please enter a name.");
        return;
    }
    // Menyimpan nama
    localStorage.setItem("deathName", name);
    // Mengambil elemen countdown
    const countdown = document.getElementById("countdown");
    // Waktu awal
    let timeLeft = 40;
    // Menampilkan waktu pertama
    countdown.textContent = timeLeft;
    // Menjalankan countdown setiap 1 detik
    const timer = setInterval(function () {
        timeLeft--;
        countdown.textContent = timeLeft;
        // Jika waktu habis
        if (timeLeft <= 0) {
            clearInterval(timer);
            window.location.href = "death.html";
        }
    }, 1000);
}
// =========================
// MENAMPILKAN NAMA
// DI HALAMAN DEATH
// =========================
const deadName = document.getElementById("deadName");
if (deadName) {
    const savedName = localStorage.getItem("deathName");
    if (savedName) {
        deadName.textContent = savedName;
    }
}
// Confetti yang turun di seluruh halaman
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let partikel = [];

// Sesuaikan ukuran canvas dengan layar
function ukuranCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Buat partikel confetti
function buatPartikel() {
    for (let i = 0; i < 200; i++) {
        partikel.push({
            x: Math.random() * canvas.width,
            y: Math.random() * -canvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 10 + 5,
            warna: ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#1dd1a1', '#fff'][Math.floor(Math.random() * 6)],
            kecepatan: Math.random() * 3 + 2,
            putar: Math.random() * 360
        });
    }
}

// Animasi confetti
function animasi() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    partikel.forEach((p, i) => {
        p.y += p.kecepatan;
        p.x += Math.sin(p.y / 30) * 0.5;
        p.putar += 3;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.putar * Math.PI / 180);
        ctx.fillStyle = p.warna;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
        if (p.y > canvas.height) partikel.splice(i, 1);
    });
    if (partikel.length > 0) requestAnimationFrame(animasi);
}

// Jalankan semua fungsi
ukuranCanvas();
buatPartikel();
animasi();

// Ubah ukuran kalau layar diganti
window.addEventListener('resize', ukuranCanvas);

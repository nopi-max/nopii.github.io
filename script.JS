// Navbar berubah saat scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Tombol WhatsApp floating
document.getElementById('waButton').addEventListener('click', function(e) {
    e.preventDefault();
    const phone = '628123456789'; // ganti nomor kamu
    const text = 'Halo, saya ingin konsultasi.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
});

// Form kontak (simulasi kirim)
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;

    document.getElementById('responseMsg').innerText =
        `Terima kasih ${name}, pesan kamu sudah diterima!`;

    this.reset();
});

# Calculator
Project Sederhana dari Bu Alif "web developer" 
- membuat kalkulator sederhana menggunakan html css javascript

deadline pengumpulan hari kamis

Dokumentasi :
- Dokumentasi ini membahas struktur dan fungsi kode pada proyek Calculator Web yang terdiri dari tiga berkas utama:
Index.html (HTML) Strutktur web
javascript.js (JavaScript) Interface & Fungsi Aritmatika
style.css (CSS) Visual Front-End 

- 1. HTML (Index.html)
Deskripsi Umum: File ini membangun antarmuka pengguna, termasuk layar kalkulator, tombol-tombol operasi, dan daftar riwayat perhitungan.
- Variabel HTML:
#layarKalkulator: menampilkan input dan hasil hitung.
#daftarRiwayat: wadah daftar riwayat operasi.
#pesanKosong: pesan default jika riwayat kosong.
- Cara Kerja:
Pengguna menekan tombol angka/operator.
Setiap tombol memanggil fungsi JS klikTombol(nilai).
Hasil dan riwayat diperbarui secara dinamis.

- 2. JavaScript (javascript.js)
Deskripsi Umum: Logika aplikasi—membaca input, menghitung, menyimpan riwayat di localStorage, dan mengelola tampilan.
- Variabel:
layarKalkulator, daftarRiwayat, pesanKosong (DOM elements)
riwayatPerhitungan (array menyimpan string riwayat)
- Fungsi Utama:
muatRiwayatDariStorage(): mengambil dan memuat data dari localStorage.
simpanRiwayatKeStorage(): menyimpan array riwayat ke localStorage.
tambahRiwayat(entri): menambah string baru ke array dan perbarui tampilan & storage.
tampilkanRiwayat(): render daftar riwayat di HTML.
klikTombol(nilai): menambah digit/operator ke layar.
hitung(): evaluasi ekspresi di layar, membaca error, simpan riwayat.
hapusSemuaRiwayat(): reset riwayat.
proses listener: untuk navigasi keyboard (Enter, Backspace, dll.).

- 3. CSS (style.css)
Deskripsi Umum: Gaya visual untuk tata letak responsif, tema gelap, dan scrollable riwayat.
- Selector Utama:
body: tema gelap, font monospace.
.kontainer-kalkulator: pembungkus area kalkulator.
.layar-kalkulator: gaya input hasil.
.grid-tombol: layout tombol grid 4 kolom.
.kontainer-riwayat: scrollable dengan tinggi maksimum.
- Cara Kerja:
Unit CSS dasar (reset *).
Warna latar dan teks disetel ke tema gelap.
Grid layout untuk tombol memastikan tata letak rapih dan responsif.
Scrollbar khusus untuk daftar riwayat.

https://github.com/isadjaop/Calculator.git
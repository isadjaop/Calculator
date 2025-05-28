//Copyright atas nama Dhonan Rachma Dio Putra_2040241086_A
let layarKalkulator = document.getElementById('layarKalkulator');
let daftarRiwayat = document.getElementById('daftarRiwayat');
let pesanKosong = document.getElementById('pesanKosong');
let riwayatPerhitungan = [];

function muatRiwayatDariStorage() {
    const riwayatTersimpan = localStorage.getItem('riwayatKalkulator');
    if (riwayatTersimpan) {
        riwayatPerhitungan = JSON.parse(riwayatTersimpan);
        tampilkanRiwayat();
    }
}

function simpanRiwayatKeStorage() {
    localStorage.setItem('riwayatKalkulator', JSON.stringify(riwayatPerhitungan));
}

function tambahKeLayar(nilai) {
    if (layarKalkulator.value === '0' || layarKalkulator.value === 'Error') {
        layarKalkulator.value = nilai;
    } else {
        layarKalkulator.value += nilai;
    }
}

function hapusLayar() {
    layarKalkulator.value = '0';
}

function hapusKarakterTerakhir() {
    if (layarKalkulator.value.length > 1) {
        layarKalkulator.value = layarKalkulator.value.slice(0, -1);
    } else {
        layarKalkulator.value = '0';
    }
}

function hitungPersentase() {
    try {
        const nilaiSaatIni = parseFloat(layarKalkulator.value);
        if (!isNaN(nilaiSaatIni)) {
            const hasilPersentase = nilaiSaatIni / 100;
            const perhitungan = `${nilaiSaatIni}% = ${hasilPersentase}`;

            layarKalkulator.value = hasilPersentase;
            tambahKeRiwayat(perhitungan);
        }
    } catch (error) {
        layarKalkulator.value = 'Error';
    }
}

function hitungHasil() {
    try {
        const ekspresi = layarKalkulator.value;
        if (!/^[0-9+\-*/.() ]+$/.test(ekspresi)) {
            layarKalkulator.value = 'Error';
            return;
        }
        const ekspresiBersih = ekspresi.replace(/×/g, '*');
        const hasil = Function('"use strict"; return (' + ekspresiBersih + ')')();

        if (isNaN(hasil) || !isFinite(hasil)) {
            layarKalkulator.value = 'Error';
            return;
        }
        const hasilFormatted = Number(hasil.toFixed(10));
        const perhitungan = `${ekspresi} = ${hasilFormatted}`;
        layarKalkulator.value = hasilFormatted;
        tambahKeRiwayat(perhitungan);
    } catch (error) {
        layarKalkulator.value = 'Error';
    }
}

function tambahKeRiwayat(perhitungan) {
    riwayatPerhitungan.unshift({
        id: Date.now(),
        perhitungan: perhitungan,
        waktu: new Date().toLocaleString('id-ID')
    });

    if (riwayatPerhitungan.length > 50) {
        riwayatPerhitungan = riwayatPerhitungan.slice(0, 50);
    }
    simpanRiwayatKeStorage();
    tampilkanRiwayat();
}

function tampilkanRiwayat() {
    if (pesanKosong) {
        pesanKosong.style.display = 'none';
    }

    daftarRiwayat.innerHTML = '';
    if (riwayatPerhitungan.length === 0) {
        daftarRiwayat.innerHTML = '<li class="pesan-kosong">Belum ada perhitungan yang dilakukan</li>';
        return;
    }

    riwayatPerhitungan.forEach(item => {
        const itemRiwayat = document.createElement('li');
        itemRiwayat.className = 'item-riwayat';
        itemRiwayat.innerHTML = `
            <div>
                <div class="teks-perhitungan">${item.perhitungan}</div>
                <small style="color: #000000; font-style: italic;">${item.waktu}</small>
            </div>
            <button class="tombol-hapus-item" onclick="hapusItemRiwayat(${item.id})">Hapus</button>
        `;
        daftarRiwayat.appendChild(itemRiwayat);
    });
}

function hapusItemRiwayat(id) {
    riwayatPerhitungan = riwayatPerhitungan.filter(item => item.id !== id);
    simpanRiwayatKeStorage();
    tampilkanRiwayat();
}

function hapusSemuaRiwayat() {
    if (confirm('Apakah Anda yakin ingin menghapus semua riwayat perhitungan?')) {
        riwayatPerhitungan = [];
        localStorage.removeItem('riwayatKalkulator');
        tampilkanRiwayat();
    }
}


document.addEventListener('proses', function(event) {
    const key = event.key;
    if (/[0-9+\-*/.=]/.test(key)) {
        event.preventDefault();
        if (key === '=') {
            hitungHasil();
        } else if (key === '*') {
            tambahKeLayar('*');
        } else {
            tambahKeLayar(key);
        }
    } else if (key === 'Enter') {
        event.preventDefault();
        hitungHasil();
    } else if (key === 'Escape') {
        event.preventDefault();
        hapusLayar();
    } else if (key === 'Backspace') {
        event.preventDefault();
        hapusKarakterTerakhir();
    } else if (key === '%') {
        event.preventDefault();
        hitungPersentase();
    }
});

window.addEventListener('load', muatRiwayatDariStorage);
window.addEventListener('load', function() {
    layarKalkulator.focus();
});

//Copyright atas nama Dhonan Rachma Dio Putra_2040241086_A
//Diharap dengan kesadaran penuh "saya tidak merubah atau mengambil apapun dari file ini dan hanya berniat mengambil contoh sebagai referensi disini :)"
// Mohon dimengerti ya (*v*)
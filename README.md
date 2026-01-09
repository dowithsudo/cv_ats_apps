# ATS Forged - Aplikasi Pembuat CV Ramah ATS

**ATS Forged** adalah aplikasi web modern yang dirancang untuk membantu pencari kerja membuat *Curriculum Vitae* (CV) yang terstandarisasi dan mudah dibaca oleh sistem pelacakan pelamar (*Applicant Tracking System* / ATS). 

Dibangun dengan **React** dan **Vite**, aplikasi ini memisahkan fokus antara konten dan format. Pengguna cukup mengisi data, dan aplikasi akan menghasilkan layout CV satu kolom yang bersih, profesional, dan 100% *machine-readable*.

---

## 🚀 Fitur Unggulan

*   **Format Ramah ATS**: Output CV menggunakan layout satu kolom standar internasional, tanpa tabel, grafik, atau elemen yang menghalangi *parsing* sistem.
*   **Live Preview**: Lihat hasil CV secara *real-time* saat Anda mengetik. Preview otomatis menyesuaikan ukuran layar (*responsive scaling*).
*   **Panduan Langkah-demi-Langkah**: Formulir *wizard* multi-langkah yang intuitif (Data Diri, Pengalaman, Pendidikan, Skill, dll).
*   **Validasi & Formatter**: Memastikan data penting tidak terlewat dan format tanggal konsisten.
*   **Mode Cetak Cerdas**: Saat menekan tombol "Unduh PDF", sistem otomatis menghilangkan elemen UI (header, footer, tombol) dan hanya mencetak dokumen CV yang bersih.
*   **Halaman Tips**: Artikel panduan terintegrasi tentang cara menulis CV yang baik dan benar.
*   **Bahasa Indonesia**: Antarmuka sepenuhnya dalam Bahasa Indonesia.

## 🛠️ Teknologi

Aplikasi ini dibangun menggunakan teknologi web modern:
*   [React](https://react.dev/) - Library UI Utama
*   [Vite](https://vitejs.dev/) - Build tool yang super cepat
*   [React Router](https://reactrouter.com/) - Navigasi halaman (SPA)
*   **Vanilla CSS** - Styling kustom dengan CSS Variables (Tema Gelap/Terang, Glassmorphism, Print Styles).

---

## 💻 Cara Install dan Menjalankan

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini di komputer lokal Anda:

### Prasyarat
Pastikan Anda sudah menginstall [Node.js](https://nodejs.org/) (versi 18 atau lebih baru disarankan).

### 1. Clone Repository
```bash
git clone git@github.com:dowithsudo/cv_ats_apps.git
cd cv_ats
```

(Atau jika folder sudah ada, cukup buka terminal di folder tersebut).

### 2. Install Dependencies
Install semua library yang dibutuhkan menggunakan `npm`:

```bash
npm install
```

### 3. Jalankan Aplikasi (Mode Development)
Untuk memulai server development lokal:

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173` (atau port lain jika 5173 sedang dipakai).

### 4. Build untuk Production (Opsional)
Jika Anda ingin membuat versi statis untuk di-deploy ke hosting (seperti Vercel/Netlify):

```bash
npm run build
```
File hasil build akan berada di folder `dist/`.

---

## 📝 Cara Menggunakan

1.  Buka aplikasi di browser.
2.  Klik tombol **"Buat CV"** atau **"Buat CV Sekarang"**.
3.  Isi formulir langkah demi langkah (Data Diri, Summary, Pengalaman, Pendidikan, dll).
4.  Gunakan tombol navigasi untuk berpindah antar langkah.
5.  Di langkah terakhir ("Selesai"), klik **"Unduh PDF"**.
6.  Jendela print browser akan terbuka.
    *   **Penting**: Pastikan opsi **"Background graphics"** (Grafis latar belakang) **TIDAK DICENTANG** (Unchecked) agar hasil cetak bersih dan hemat tinta, atau centang jika ingin gaya header minimalis.
    *   Pilih "Save as PDF" (Simpan sebagai PDF).

---

## 📄 Lisensi

© 2026 dowithsudo.com. All rights reserved.

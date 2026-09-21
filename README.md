# Karsa Futsal - Mini Website

Mini website profil dan pemesanan lapangan untuk **Karsa Futsal** (Palangka Raya), dibangun dengan React, Tailwind CSS, Vite, dan Lucide Icons.

---

## 🚀 Cara Menjalankan & Preview Website

Ada 3 cara mudah untuk melihat preview website ini:

### 🌟 Cara 1: Menggunakan Launcher `preview.bat` (Direkomendasikan di Windows)
Cukup **klik dua kali (double-click)** pada file `preview.bat`:
- Tekan `1` lalu Enter untuk langsung membuka file standalone di browser (cepat, tanpa server).
- Tekan `2` lalu Enter untuk menjalankan Vite Dev Server (`npm run dev`) dengan Hot-Module-Replacement.

---

### ⚡ Cara 2: Buka Langsung `standalone.html` (Instan Tanpa Node.js)
Klik dua kali file **`standalone.html`** di File Explorer. Halaman web akan langsung terbuka di browser default (Google Chrome, Edge, Firefox, dll) tanpa memerlukan Node.js atau terminal.

---

### 💻 Cara 3: Melalui Terminal (Vite Dev Server)
Buka terminal (Command Prompt atau PowerShell) di folder ini, lalu jalankan:

```bash
# Menjalankan development server
npm run dev
```

Browser akan otomatis membuka `http://localhost:3000` (atau port yang tertera pada terminal).

Untuk membuat build produksi:
```bash
npm run build
```

Untuk memperbarui file `standalone.html`:
```bash
npm run standalone
```

---

## 📁 Struktur File Proyek

```text
lapangan futsal/
├── index.html              # Entry HTML utama untuk Vite
├── standalone.html         # File preview mandiri (dapat dibuka langsung tanpa server)
├── preview.bat             # Launcher interaktif Windows
├── build_standalone.cjs    # Script compiler untuk standalone.html
├── package.json            # Dependensi & script proyek
├── tailwind.config.js      # Konfigurasi Tailwind CSS
├── postcss.config.js       # Konfigurasi PostCSS
├── vite.config.ts          # Konfigurasi Vite dev server & bundling
├── src/
│   ├── App.tsx             # Komponen utama Karsa Futsal (React)
│   ├── main.tsx            # Entry point React
│   └── index.css           # Styling & font Manrope
└── karsa_futsal_profile.tsx # File komponen awal
```

---

## 📱 Fitur Utama Website
- **Hero Banner:** Foto lapangan, info branding, dan tombol booking cepat.
- **Tautan Media Sosial & Maps:** Integrasi ke Instagram, TikTok, dan Google Maps rute lokasi.
- **Highlight Fasilitas:** Parkir luas, kantin, ruang ganti bersih.
- **Katalog Lapangan:** Sintetis A, Vinyl B, Sintetis C dengan fitur lightbox (klik untuk memperbesar gambar).
- **Daftar Harga:** Tabel tarif sewa lapangan & paket member.
- **FAQ Interaktif:** Accordion tanya jawab.
- **Testimoni Tim:** Slider ulasan pemain & rating bintang.
- **Formulir Booking WhatsApp:** Input nama, tanggal, jam, durasi, tipe lapangan, dan catatan yang otomatis merangkai pesan ke WhatsApp admin.
- **Sticky CTA Bar:** Tombol cek jadwal yang melayang di bagian bawah saat scroll.

# Kebutuhan konten

Catatan internal. Data yang belum ada tidak boleh ditebak, diubah menjadi tautan palsu, atau ditampilkan sebagai fakta. Kebutuhan ini tidak menghalangi penyelesaian fondasi Section 1.

## Identitas dan akses publik

- [ ] Foto profil yang disetujui untuk publikasi, beserta preferensi crop dan teks alternatif yang sesuai.
- [ ] Email atau metode kontak publik yang benar-benar ingin digunakan.
- [ ] URL GitHub publik yang benar.
- [ ] URL LinkedIn publik yang benar.
- [ ] File CV yang siap dipublikasikan dan nama file unduhan yang sesuai.
- [ ] Domain final untuk konfigurasi site, canonical, dan metadata URL absolut pada section yang relevan.

Jangan menampilkan tombol unduh CV sebelum file tersedia atau mengarang email, username, URL sosial, maupun domain. (Hero CTA untuk CV dan daftar tautan sosial saat ini disembunyikan sampai tautan ini diisi).

## FMS

- [ ] Konfirmasi apakah nama Great Giant Food (GGF) boleh disebut pada portfolio publik. Sampai ada konfirmasi, gunakan “an agribusiness company”. Hubungan kerja yang benar tetap melalui Mandatech Mataram Mukti.
- [ ] Konfirmasi apakah metrik 441 pengguna aktif dan sekitar 14.000 lokasi layak dipublikasikan, termasuk periode/sumber yang sesuai. Keduanya merupakan skala sistem menurut laporan, bukan hasil peningkatan pribadi.
- [ ] Screenshot proyek yang diizinkan dan sudah dibersihkan dari informasi sensitif. Jangan menggunakan source code perusahaan, endpoint/domain internal, credential, data operasional asli, atau screenshot buatan yang diklaim sebagai aplikasi asli.
- [ ] Untuk studi kasus lengkap pada Section 6: konteks masalah, peran dan batas kontribusi, pendekatan, hasil yang dapat diatribusikan dengan benar, dan materi pendukung yang aman.
- [ ] Konfirmasi tanggal awal/akhir keseluruhan proyek hanya jika diperlukan. Awal kontribusi web Oktober 2023 dan mobile September 2025 tidak otomatis menjadi tanggal proyek atau mulai bekerja.

Tidak meminta akses repository perusahaan. Bukti kode/commit dari laporan sebelumnya tidak boleh diklaim sebagai verifikasi agen. FMS tetap satu proyek utama; pengembangan Form Generator/Form Studio tidak diklaim dibuat dari nol.

## Kandidat proyek lain

Semua kandidat tetap draft. Konfirmasi kategori professional/personal/freelance untuk masing-masing proyek sebelum publikasi; kategori awal `personal` merupakan penempatan sementara agar memenuhi schema, bukan fakta terkonfirmasi. Lengkapi peran, ruang lingkup kontribusi, status implementasi/rilis, fitur yang benar-benar ada, hasil, teknologi yang digunakan, dan tautan repository/demo yang dapat diakses publik bila tersedia.

- [ ] JustSubs: status rilis dan daftar fitur final; rincian kontribusi serta materi yang mendukung deskripsi package subscription Laravel dengan dashboard.
- [ ] Nginx Manager: status akhir fitur, rincian peran, dan materi publik untuk service Go serta dashboard Laravel pengelola reverse proxy.
- [ ] Monitoring Stunting: peran rinci, fitur, status, dan hasil; konteks yang diketahui baru aplikasi Laravel dengan deployment Docker.
- [ ] Mayarta (sebelumnya SiKencur): teknologi, status rilis, fitur dan peran, serta hasil kompetisi yang terkonfirmasi.
- [ ] Sports Arena Billing & POS: apakah sudah diimplementasikan atau masih pembahasan; peran, fitur, dan penggunaan ESP32/MQTT yang benar-benar terlaksana.
- [ ] School Attendance System: apakah sudah diimplementasikan atau masih pembahasan; peran, fitur, dan realisasi integrasi fingerprint, database lokal, serta notifikasi WhatsApp.
- [ ] Screenshot yang layak dipublikasikan untuk setiap proyek, beserta teks alternatif dan keterangan yang sesuai.

Status `unknown` dan array teknologi kosong boleh dipertahankan selama informasi belum pasti. `projectStatus` menjelaskan kondisi proyek, sedangkan `publicationStatus` mengatur kelayakan muncul pada website; proyek production pun tidak otomatis layak dipublikasikan.

## Section 7: Kebutuhan Fakta Proyek Lainnya

Untuk mengubah status rilis (draft -> published) pada proyek selain FMS, berikut adalah 5 pertanyaan prioritas:

1. **JustSubs**: Fitur spesifik apa yang sudah diselesaikan pada backend package/dashboard, dan apakah integrasi payment gateway (seperti proration, billing) masuk dalam implementasi saat ini?
2. **JustSubs**: Apa teknologi front-end yang digunakan untuk dashboard (mis. Blade, React, Vue), dan apakah ada repository publik yang bisa ditautkan?
3. **Nginx Manager**: Sejauh mana stabilitas dan otomasi `Go service` serta `Certbot` berjalan? Apakah sudah siap untuk production?
4. **Monitoring Stunting**: Apa peran dan modul spesifik yang Anda kembangkan selain dari deployment Docker/Nginx/MySQL, dan milik siapakah (klien/instansi) proyek ini?
5. **Sports Arena Billing / Mayarta / School Attendance**: Proyek mana di antara ini yang sudah diimplementasikan (bukan sebatas rencana), dan apa teknologi nyata yang sudah dipakai?

## Section 8: Kebutuhan Fakta Profil & Kontak

Demi melengkapi navigasi informasi kontak publik yang saat ini masih dalam kondisi "siaga" dan disembunyikan otomatis, mohon Anda pertimbangkan kesediaan data berikut:

1. **Email Publik**: Email apakah yang ingin dihubungkan dengan tombol kontak *"Email me"*?
2. **Nomor WhatsApp Publik**: Jika berkenan dihubungi lewat pesan WhatsApp, mohon cantumkan dengan format internasional penuh (mis. 628...).
3. **Akun Sosial**: Mohon sertakan _URL_ publik untuk:
   - **LinkedIn**:
   - **GitHub**:
4. **File Curriculum Vitae (CV)**: Silakan unggah format `.pdf` dari *resume* Anda dan salin ke `public/files/ridho-pujiono-cv.pdf`. (Anda dapat mengonfirmasi penempatannya di berkas `.agents/knowledge.md` agar saya bisa melakukan integrasi otomatis).

## Section 9-10: Kebutuhan Deployment Akhir
1. Apakah Anda memiliki kendali atas Cloudflare Pages untuk *repository* proyek ini? Jika iya, Anda bisa mempublikasikannya secara statis sekarang.
2. Ketika domain akhir telah Anda ketahui (misal: `https://ridhopujiono.my.id`), mohon konfirmasi agar kita bisa menempelkannya ke `src/data/site.ts` demi menstimulasi modul *SEO*, *Sitemap*, dan *Open Graph*.

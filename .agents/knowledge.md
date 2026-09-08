# Konteks kerja portfolio Ridho Pujiono

Catatan internal untuk pengerjaan bertahap. File ini tidak boleh ditempatkan di `public/`, diimpor aplikasi, atau disertakan dalam output website.

## Tujuan dan bahasa

Portfolio profesional untuk recruiter dan calon klien, dengan penjelasan konkret tentang pengalaman backend, full-stack web, dan mobile. Website menampilkan pengalaman kerja, proyek yang layak dipublikasikan, serta kontak, CV, dan tautan yang benar-benar tersedia. Website harus cepat, responsif, dan mudah dipelihara.

Konten publik menggunakan bahasa Inggris yang jelas dan wajar. Diskusi serta laporan kepada pengguna menggunakan bahasa Indonesia.

## Profil dan hubungan kerja

Fakta yang dikonfirmasi pengguna dalam Section 0:

- Nama: Ridho Pujiono.
- Lokasi: Tuban, East Java, Indonesia.
- Peran: Software Engineer, fokus backend, full-stack web, dan mobile.
- Perusahaan: Mandatech Mataram Mukti.
- Pengembangan FMS dilakukan untuk klien Great Giant Food (GGF) melalui Mandatech Mataram Mukti; Ridho bukan pegawai langsung GGF.
- Teknologi utama: PHP, Laravel, JavaScript, TypeScript, React, Mantine, dan React Native.
- Section 1 meminta kelompok data dan sinkronisasi: MySQL, SQLite, dan offline data synchronisation. Jangan memperluas daftar ke seluruh dependency FMS.

Jangan menambahkan jabatan Lead, Senior, System Architect, atau klaim tingkat keahlian tanpa konfirmasi. Tanggal kontribusi proyek bukan tanggal mulai bekerja di perusahaan.

## FMS: asal informasi dan batas kontribusi

FMS adalah Field Management System untuk operasional pertanian yang dikembangkan oleh tim, dengan web, backend, dan mobile. Pengguna memberikan ringkasan laporan kontribusi sebelumnya; laporan, kode perusahaan, dan bukti commit tersebut tidak diverifikasi secara independen pada pengerjaan portfolio ini.

Menurut laporan yang dirangkum pengguna:

- Kontribusi web dimulai Oktober 2023 (`2023-10`).
- Kontribusi mobile dimulai September 2025 (`2025-09`).
- Sistem digunakan di production.
- Skala sistem yang dilaporkan: 441 pengguna aktif dan sekitar 14.000 lokasi. Angka ini bukan peningkatan yang dicapai Ridho sendiri dan bukan hasil pengukuran terkini oleh agen.
- Mobile mendukung pekerjaan lapangan dengan koneksi terbatas.
- Ada kontribusi mentoring junior dan pemeriksaan bug; jangan menyimpulkan kepemimpinan dari jumlah commit.

Kelompok kontribusi yang diberikan pengguna:

- Operasional lahan: detail lokasi; perencanaan dan realisasi aktivitas; aktivitas dengan material SBT, non-SBT, dan tanpa material; akumulasi bahan; Exception Letter; import/export Excel dan laporan pendukung.
- Manajemen air: sumber air dan engine set; transfer peralatan dan serah terima; relokasi pipa; persetujuan dan signature; riwayat perubahan dan notifikasi; alur web, backend, dan mobile.
- Pencatatan lapangan: catatan lokasi, jurnal, QC Inspector, pengembangan Form Generator dan Form Studio, Form Studio v2 pada mobile, serta Collaboration Tools pada web.
- Sinkronisasi dan otomatisasi: scheduled jobs backend, Cron Sync Lokasi, penyimpanan lokal SQLite, sinkronisasi lokal/server, penanganan ID dan status sinkronisasi, background sync Android, serta penyesuaian terhadap konektivitas.

FMS dipresentasikan sebagai satu proyek utama dengan beberapa bagian studi kasus. Jangan memecah setiap modul menjadi proyek terpisah demi menambah jumlah proyek. Jangan mengklaim seluruh FMS dibuat sendiri. Form Generator adalah pengembangan dan perluasan fitur, bukan dibuat dari nol.

Penyebutan nama klien dan metrik belum mendapat konfirmasi untuk publikasi. Konten awal wajib menyebut klien secara generik sebagai perusahaan agribisnis, tanpa nama GGF, metrik internal, screenshot asli, atau tautan private. Section 1 hanya memuat ringkasan Overview, My Contribution, Web and Backend, serta Mobile and Offline Workflows. Studi kasus lengkap menunggu Section 6.

## Kandidat proyek dan informasi belum pasti

Semua kandidat berikut tetap `publicationStatus: draft` sampai informasi dan kelayakan publikasinya cukup:

- JustSubs: package pengelolaan subscription untuk Laravel dengan dashboard; branding “JustSubs — Subscription Management for Laravel”. Status rilis dan daftar fitur final belum dikonfirmasi.
- Nginx Manager: service Go dan dashboard Laravel untuk pengelolaan reverse proxy. Status akhir fitur serta materi publik belum dikonfirmasi.
- Monitoring Stunting: aplikasi Laravel dengan deployment Docker. Peran rinci, fitur, dan hasil belum lengkap.
- Mayarta, sebelumnya SiKencur: aplikasi pencatatan keuangan. Teknologi, status rilis, dan hasil kompetisi belum pasti.
- Sports Arena Billing & POS: pembahasan sistem billing dengan ESP32 dan MQTT. Status implementasi belum dikonfirmasi.
- School Attendance System: pembahasan integrasi fingerprint, database lokal, dan notifikasi WhatsApp. Status implementasi belum dikonfirmasi.

Kategori kandidat belum dikonfirmasi pengguna. Nilai awal `personal` hanya penempatan sementara pada draft agar memenuhi enum schema yang tidak memiliki `unknown`; jangan menyajikannya sebagai fakta. Konfirmasi kategori professional/personal/freelance sebelum mengubah publikasi menjadi published. Gunakan `projectStatus: unknown` untuk status yang belum jelas. Teknologi yang belum pasti dibiarkan sebagai array kosong; pembahasan integrasi tidak membuktikan implementasi.

Foto, email publik, username dan tautan sosial, file CV, serta domain final belum tersedia. Jangan menebak atau membuat tautan palsu. Daftar kebutuhan diperinci di `content-needed.md`.

## Fondasi teknis

- Astro dengan `output: static`, TypeScript strict, Tailwind CSS, Astro Content Collections dengan content loader, dan Markdown untuk proyek.
- Interaksi yang kelak diperlukan memakai JavaScript/TypeScript native. React, Laravel, Mantine, dan React Native pada profil adalah teknologi pengalaman proyek, bukan framework portfolio.
- Tidak menambahkan React, Svelte, Vue, backend, database, CMS, library animasi, maupun adapter server. Jangan menjadikan website SPA.
- Gunakan npm dan satu `package-lock.json`; dependency hanya yang diperlukan. Konfigurasi harus mengacu dokumentasi resmi yang sesuai versi stabil kompatibel.
- Data profil terpusat di `src/data/`. Collection di `src/content.config.ts`; entri Markdown di `src/content/projects/`.
- Tanggal proyek memakai string bulan `YYYY-MM`, bukan tanggal harian rekaan. Periode kontribusi FMS disimpan pada data pengalaman; tanggal proyek FMS dikosongkan karena tanggal awal/akhir keseluruhan proyek belum diketahui.
- `projectStatus` menjelaskan keadaan proyek; `publicationStatus` menentukan kelayakan tampil. Daftar dan featured hanya mengambil published melalui helper yang sama. Route detail mendatang harus memakai filter published tersebut dalam `getStaticPaths`.
- URL opsional divalidasi; cover harus memiliki teks alternatif. Jangan mengirim seluruh collection sebagai JSON ke browser.
- Domain yang belum dikonfirmasi tidak menghasilkan canonical atau metadata URL absolut rekaan.

## Struktur halaman dan arah desain

Rencana halaman: `/` (Hero, About, Skills, Experience, Selected Projects, Contact), `/projects/`, `/projects/[slug]/`, dan 404. Tautan CV hanya setelah file tersedia. Blog di luar scope awal; jangan membuat halaman atau komponen kosong untuk fitur mendatang.

Arah desain awal: dark charcoal dengan aksen ungu matang, tipografi nyaman, layout lapang, hierarki jelas, identitas personal, serta animasi ringan dengan tujuan. Section 2 menetapkan dark theme saja; light mode dan theme switcher belum diperlukan. Pengguna dapat merevisi arah visual.

Hindari skill bar persentase, testimoni buatan, counter tanpa dasar, terminal dekoratif dengan kode palsu, animasi ketik yang menghambat pembacaan, video autoplay, efek 3D, dan klaim “expert”, “best”, atau “world-class” tanpa dasar.

## Aturan pengerjaan dan privasi

Pada setiap section: periksa workspace serta instruksi yang berlaku, kerjakan hanya scope section dan dependency yang diperlukan, pertahankan hasil sebelumnya, validasi, laporkan hasil/file/keterbatasan/kebutuhan konten, kemudian berhenti sampai instruksi berikutnya.

Section 1 mencakup fondasi teknologi dan struktur konten dengan halaman awal sederhana. Pada akhir Section 1, design system, navbar, hero final, kartu proyek, animasi, studi kasus lengkap, dan deployment belum dikerjakan. Section 2 telah menambahkan fondasi visual; section berikutnya yang dikonfirmasi adalah Section 3 — Navbar & Hero. Deployment menunggu instruksi section deployment.

Jangan mengakses repository FMS perusahaan. Jangan menyalin source code perusahaan, credential, email author Git, endpoint/domain internal, data operasional asli, screenshot sensitif, bukti Git, atau catatan NDA ke konten publik. Catatan internal harus tetap di luar bundel dan hasil build. Informasi dari laporan sebelumnya selalu diatribusikan sebagai laporan, bukan hasil pemeriksaan agen.


## Keputusan visual Section 2

- Token semantik terpusat di `src/styles/global.css`, terhubung ke utility Tailwind v4 melalui `@theme static`. Token nonutility untuk durasi/focus/anchor berada di `:root`. Tidak mengganti versi stack atau menambah dependency.
- Dark theme saja dengan background `#101014`, surface `#18181F`, elevated `#22222C`, border subtle `#30303C`, primary text `#F4F4F7`, secondary `#B7B7C6`, muted `#9292A5`, accent/focus `#A78BFA`, strong `#7C3AED`, dan accent hover `#8B5CF6`.
- Primary button menggunakan putih `#FFFFFF` di atas strong; hover aksi memakai token terpisah `#6D28D9` agar rasio kontras teks 7.10:1. Putih di atas accent hover awal hanya 4.23:1, sehingga jangan menggunakan pasangan tersebut untuk teks kecil. Border interaktif `#77778B` terpisah dari border dekoratif subtle.
- Inter v4.1 variable normal WOFF2 (100–900) dibundel lokal dari repository resmi `rsms/inter`, disimpan di `src/assets/fonts/InterVariable.woff2`. `font-display: swap`, fallback system, satu preload ke URL font yang sama; tidak ada font runtime dari Google Fonts. SIL OFL berada di `public/fonts/Inter-LICENSE.txt` agar ikut distribusi statis.
- Satu skala spacing berbasis 4px; gutter, section, dan surface fluid. Lebar konten efektif default 1120px, narrow 760px (ditambah gutter kiri/kanan), dan paragraf 65ch. Tiga radius (control/surface/pill), dua shadow (surface/accent).
- Typography `type-display`, `type-h1`, `type-h2`, `type-h3`, `type-body`, `type-small`, dan `type-eyebrow`. Heading fluid dengan clamp; body mulai 16px dan line-height 1.7. Uppercase hanya label eyebrow singkat; heading panjang tetap membungkus.
- Enam komponen terpakai: Container (div default/narrow), Section (id/aria-labelledby), SectionHeading (id/title/description/eyebrow/level), Button (primary/secondary/ghost, default/small, union anchor/action), Badge (neutral/accent), dan Surface. Tidak ada abstraksi UI framework.
- Button memakai elemen native: href untuk navigasi; aksi default type button, disabled hanya untuk button. Kedua ukuran memiliki target minimal 44px; ikon slot bersifat dekoratif. URL kosong, #/#! dan protokol script ditolak; pemanggil tetap memastikan tujuan valid.
- BaseLayout mengelola satu main `#main-content` dengan tabindex -1 dan skip link. Jangan menambah main di halaman anak. Metadata title/description/lang dipertahankan; noindex opsional untuk preview. Body minimum tinggi viewport dan color-scheme dark. Favicon SVG monogram R lokal mencegah permintaan favicon.ico 404; versi build di-inline oleh Vite.
- Focus-visible 3px dengan offset 3px, inline link bergaris bawah, selection kontras, transisi properti tertentu 150/200ms. prefers-reduced-motion menonaktifkan smooth scroll, transisi, serta gerakan. Konten terlihat tanpa JS. Tidak menyembunyikan overflow-x halaman.
- Preview `/dev/design-system/` berada di `src/dev/DesignSystem.astro`, di luar pages. Integration kecil pada astro.config.mjs memanggil injectRoute hanya saat command dev. Ini mengecualikan HTML dan aset preview dari build; getStaticPaths kosong sebelumnya terbukti masih mengemisi scoped CSS orphan. Meta noindex adalah tambahan; tidak ada link preview pada homepage. Script demo inline hanya terdapat di preview.
- Homepage tetap identitas, ringkasan profil, dan judul/ringkasan proyek published melalui helper sebelumnya. Navbar, hero final, footer final, light mode, dekorasi hero, serta halaman proyek lengkap belum dibuat. Berhenti setelah Section 2 dan tunggu Section 3.

## Keputusan struktur Section 3
- `SiteHeader.astro` diimplementasikan dengan interaksi JavaScript minimal, yang memanfaatkan pola *progressive enhancement* (dapat berfungsi tanpa JS dan fokus aman saat perpindahan dari mobile ke desktop). Tidak ada *client-side routing* khusus yang ditambahkan; *native anchor links* dipakai untuk menavigasi ke id `#projects`.
- Desain *Hero* (`Hero.astro`) dibangun dengan skema statis dari `src/data/hero.ts` dan sebuah visual abstrak berbasis SVG dekoratif, untuk meminimalisasi *layout shifts* serta tidak menggunakan aset mock-up palsu atau animasi berat. Aksesibilitas diatur dengan `<Section>` yang disematkan `aria-labelledby` serta tombol *Download CV* yang dirender terkondisi oleh status file CV publik.

## Keputusan struktur Section 4
- **Komponen dan Data Terpisah**: Pengelolaan konten dipusatkan di file `src/data/*.ts` masing-masing (`profile.ts` untuk *About*, `skills.ts` dengan _skill group interface_, dan `experience.ts` yang menangani meta data kontribusi perusahaan & durasi). Komponen (`AboutSection.astro`, dsb.) tidak memuat status *stateful* atau copy secara *hard-coded*.
- **Desain Experience**: Tidak disajikan sebagai *timeline* grafis rumit yang mengandalkan elemen posisi mutlak, namun menggunakan tata letak *grid* responsif di mana metadata berada di lajur kiri (layar desktop) dan detail proyek/pencapaian berjejer dalam *list* di lajur kanan, memperkuat kemudahan *scanning* dan akomodatif dengan kebutuhan *mobile*.
- **Skill Presentation**: Menyusun alat/framework dalam kelompok area (seperti _Backend_ dan _Mobile_), masing-masing disertai satu kalimat *contextual usage*. Mengesampingkan elemen bar *progress* di halaman utama profil.

## Keputusan Struktur Section 4A (Profile Photo & Floating Logos)
- Gambar foto diload menggunakan _dynamic glob import_ `import.meta.glob` di Astro, menjamin agar _build_ tidak akan gagal jika gambarnya tiba-tiba hilang. CSS memberikan _soft-glow_, efek grayscale, serta _border-radius_. Tidak ada perubahan _hover_ ke mode berwarna.
- Animasi logo menggunakan `CSS Keyframes` bertipe `transform` murni agar optimal dan tidak memicu layout-shifts, dengan `animation-delay` negatif dan durasi bervariasi. Integrasi dengan _progressive enhancement_ JS memantau status tab-visible atau viewport _IntersectionObserver_, lalu mengontrol play/pause dari class CSS (yang default statis apabila user disetel `prefers-reduced-motion`).
- Icon diletakkan di `<list>` semantik (sebagai fallback apabila file SVG tidak dimuat, maka namanya diprint sebagai *label text* statis).

## Deployment (Section 9-10)
- **Host Target**: Cloudflare Pages direkomendasikan karena kompatibilitas optimal terhadap tipe `output: "static"` Astro tanpa mengharuskan instalasi *adapter* SSR ekstra.
- **Strategi SEO (Canonical & Sitemap)**: `site.url` dibiarkan kosong `null` untuk menghindari *false positive link*. Ketika URL publik telah ditetapkan (mis. `ridhopujiono.my.id`), pengguna dapat mengubahnya, dan integrasi *JSON-LD/sitemap.xml* otomatis memuncak.

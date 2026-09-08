# Progres portfolio Ridho Pujiono

Catatan internal; tidak diimpor aplikasi dan tidak disertakan dalam output website.

## Section 0 — selesai

- Workspace pada pemeriksaan Section 0 kosong dan belum menjadi repository Git.
- Tidak ditemukan instruksi `AGENTS.md` yang berlaku pada pemeriksaan tersebut.
- Node.js `24.11.1` dan npm `11.6.2` tersedia.
- Konteks, stack, struktur halaman, batas atribusi FMS, privasi, serta aturan pengerjaan per section dipahami.
- Section 0 tidak membuat/mengubah file, memasang dependency, atau mengakses repository perusahaan.

## Section 1 — selesai

Scope: fondasi Astro statis, data profil bertipe, collection proyek dengan draft/published, layout dan halaman awal minimal, dokumentasi, serta catatan internal.

Pekerjaan yang diselesaikan:

- [x] Pemeriksaan ulang workspace, instruksi repository, Git, runtime, dan lockfile.
- [x] Setup dependency, konfigurasi Astro/TypeScript/Tailwind, dan script npm.
- [x] Data terpusat untuk site, profile, experience, dan skills.
- [x] Schema projects dengan content loader, tanggal bulan yang konsisten, validasi URL, serta cover/alt.
- [x] Satu entry FMS published dan enam kandidat proyek draft.
- [x] Helper bersama untuk published, featured, dan urutan yang konsisten.
- [x] BaseLayout, CSS dasar, dan halaman awal dari data serta helper.
- [x] README, `.gitignore`, dan tiga catatan internal.
- [x] Pemeriksaan Astro/TypeScript dan production build.
- [x] Pemeriksaan HTML/output publik, pengecualian draft serta catatan internal, dependency, dan tautan.
- [x] Laporan Section 1 dan berhenti sebelum Section 2.

## Keputusan teknis

- Environment: Node.js `24.11.1`, npm `11.6.2`; npm dengan satu `package-lock.json`.
- Versi yang dipilih setelah pemeriksaan metadata npm serta dokumentasi resmi: Astro `7.3.1`, Tailwind CSS `4.3.3`, `@tailwindcss/vite` `4.3.3`, TypeScript `6.0.3`, dan `@astrojs/check` `0.9.10`.
- TypeScript `6.0.3` dipilih karena peer dependency `@astrojs/check` mendukung TypeScript 5/6; TypeScript 7 terbaru tidak kompatibel dengan rentang peer tersebut.
- Tailwind melalui plugin Vite resmi; output Astro statis, TypeScript strict, tanpa adapter atau framework UI tambahan.
- Collection menggunakan `glob()` dari `astro/loaders`, schema Zod dari `astro/zod`, dan fasilitas `image()` Astro. `projectStatus` terpisah dari `publicationStatus`.
- Tanggal opsional berupa string `YYYY-MM`. Tanggal awal/akhir proyek FMS tidak diisi; Oktober 2023 dan September 2025 merupakan awal kontribusi web/mobile dan disimpan dalam data pengalaman.
- FMS memakai klien generik dalam konten publik. Nama klien, metrik, screenshot asli, dan tautan private tidak diterbitkan.
- Kategori `personal` pada enam kandidat draft bersifat sementara karena schema mewajibkan enum tanpa `unknown`. Kategori harus dikonfirmasi sebelum publikasi. Status proyek yang belum jelas menggunakan `unknown`.
- Repository Git pada Section 1 menggunakan branch `main` tanpa commit. Ini berbeda dari keadaan Section 0 yang belum berupa repository Git.
- Tailwind hanya memindai `src/` melalui `source("../")` pada CSS; catatan internal tidak menjadi sumber deteksi utility.
- Data yang belum tersedia menggunakan properti opsional atau `null`. Tidak ada canonical/URL absolut buatan atau tautan ke route yang belum ada.

## Hasil validasi dan keterbatasan

Validasi yang benar-benar dijalankan pada Section 1:

- `npm install`: berhasil memasang dependency dan menghasilkan satu `package-lock.json`; audit instalasi melaporkan 0 vulnerabilities.
- `ASTRO_TELEMETRY_DISABLED=1 npm run check`: lulus, 9 file, 0 errors, 0 warnings, 0 hints. Variabel hanya digunakan pada perintah verifikasi untuk menonaktifkan telemetry sesi.
- `ASTRO_TELEMETRY_DISABLED=1 npm run build`: lulus, mode/output static, 1 halaman (`dist/index.html`) dan 1 stylesheet; tanpa adapter server.
- Pembacaan langsung HTML hasil build dan assertion Node satu kali: `lang="en"`, identitas, serta judul/ringkasan FMS tersedia; seluruh enam draft tidak muncul pada HTML maupun CSS hasil build.
- Assertion output: tidak ada nama klien, metrik internal, path/nama catatan `.agents`, berkas Markdown/JSON/JavaScript publik, script browser, canonical rekaan, tautan detail kosong, atau kontak karangan. Semua sumber aplikasi bebas referensi `.agents`; stylesheet Tailwind yang ditautkan ada dan memuat utility yang digunakan.
- Assertion lockfile: hanya `package-lock.json`; tidak ada React, React DOM, Svelte, Vue, integrasi UI tersebut, maupun adapter server. `npm ls --depth=0` memverifikasi lima dependency langsung pada versi yang dipilih. npm menandai beberapa paket WASM opsional transitif sebagai extraneous pada instalasi platform ini; tidak ada paket tersebut yang masuk output website.
- Assertion Node satu kali pada data/konten: 7 entry, 1 FMS published/production/featured, 6 draft/unknown, heading FMS sesuai brief, kontak yang belum tersedia null, dan tanggal kontribusi terpisah dari masa kerja.
- Review independen serta assertion Node untuk schema/helper: default draft, format bulan, urutan tanggal, URL HTTP/HTTPS, coverAlt, sortOrder, pengurutan ID, dan pengecualian draft dari featured lulus. Pemeriksaan tambahan ini menggunakan mock modul virtual Astro/image schema; validasi integrasi nyata dilakukan oleh check/build di atas. Tidak menambahkan framework testing.
- Belum membuka halaman melalui browser, sehingga tidak mengklaim verifikasi visual. Script dev/preview disediakan; server interaktif tidak dijalankan pada Section 1.

Akses npm registry awalnya diblokir sandbox (DNS `ENOTFOUND`); pemeriksaan metadata dan instalasi berhasil setelah eskalasi akses jaringan yang disetujui. Tidak ada repository perusahaan yang diakses, tidak ada deployment, dan tidak ada Git commit yang dibuat oleh agen.

Keterbatasan scope: desain dasar hanya untuk pemeriksaan fondasi. Tidak ada design system, navbar final, halaman detail proyek, animasi, konfigurasi hosting, atau deployment. Narasi lengkap FMS menunggu Section 6. Detail konten yang belum tersedia dicatat di `content-needed.md`.

## Section 2 — selesai

Scope: design system dark, tipografi/font lokal, layout dasar, komponen reusable, preview development, dan penerapan pada homepage minimal. Hasil Section 1 dipertahankan.

- [x] Memeriksa instruksi repository, catatan internal, struktur, dependency, serta konfigurasi yang terpasang; tidak ada AGENTS.md tambahan ditemukan.
- [x] Token semantik Tailwind v4 untuk warna, fokus, spacing, lebar, radius, shadow, dan durasi.
- [x] Inter variable WOFF2 lokal dengan font-display swap, satu preload, fallback system, dan lisensi OFL.
- [x] Skala tipografi responsif dan heading panjang; container default/narrow; gutter dan jarak section fluid.
- [x] Enam komponen Astro: Container, Section, SectionHeading, Button, Badge, Surface.
- [x] Satu main landmark, skip link, focus-visible, inline link, selection, serta reduced motion.
- [x] Preview lengkap `/dev/design-system/`, noindex, hanya diregistrasikan ketika command dev.
- [x] Homepage menggunakan komponen dan token; hanya FMS published, tanpa tambahan isi portfolio atau tombol tanpa tujuan.
- [x] README serta knowledge/progress diperbarui, termasuk keputusan route preview dan hasil validasi.
- [x] Berhenti sebelum Section 3 — Navbar & Hero.

### Keputusan dan perbaikan penting

- Stack tetap Astro 7.3.1, TypeScript strict 6.0.3, Tailwind CSS dan plugin Vite 4.3.3, @astrojs/check 0.9.10; output static. Tidak ada dependency atau framework testing baru, satu lockfile npm tetap dipertahankan.
- CSS memakai @theme static agar token semantik tersedia untuk utility maupun pembacaan preview. Detail API komponen, token, font, dan preview tersedia di README.
- Warna hover primary menggunakan #6D28D9 dengan teks putih, sementara #8B5CF6 tetap tersedia sebagai accent hover umum. Keputusan berdasarkan perhitungan kontras, bukan penilaian visual semata.
- Route dynamic dengan getStaticPaths kosong memang tidak menghasilkan HTML preview, tetapi build awal mengemisi CSS khusus preview. Diganti dengan injectRoute pada hook astro:config:setup hanya saat command dev, sehingga seluruh aset khusus preview juga keluar dari build graph.
- Browser sempat menemukan favicon.ico 404. Favicon SVG lokal ditambahkan ke BaseLayout; run browser akhir bersih dari error console dan asset gagal. Spasi di batas inline link preview juga diperbaiki setelah inspeksi screenshot.

### Validasi Section 2 yang benar-benar dijalankan

- `ASTRO_TELEMETRY_DISABLED=1 npm run check`: 16 file, 0 errors, 0 warnings, 0 hints.
- `ASTRO_TELEMETRY_DISABLED=1 npm run build`: lulus, output static, satu halaman. Output akhir berisi `index.html`, satu stylesheet, satu Inter WOFF2, dan lisensi font; favicon kecil di-inline sebagai SVG data URL.
- Assertion Node pada dist: tidak ada HTML/CSS/JS preview, nama atau konten keenam draft, nama klien FMS, catatan .agents, JSON collection, script browser, tautan palsu, atau canonical rekaan. FMS tetap tampil. Semua tiga catatan internal dibandingkan terhadap teks output. Satu main dan target skip link tersedia; URL preload dan @font-face menunjuk font build yang sama.
- Pemeriksaan lockfile: versi dependency tetap sama; tidak ada framework UI tambahan.
- Dev server berjalan pada 127.0.0.1:4321; kedua route (`/` dan `/dev/design-system/`) memberi HTTP 200 dalam browser. Preview memiliki meta noindex, nofollow.
- Chrome headless melalui Playwright yang sudah tersedia di cache lokal, tanpa instalasi baru: kedua halaman diperiksa pada 360, 768, dan 1440px. Document scrollWidth sama dengan viewport pada seluruh enam kombinasi, satu h1/main, tidak ada heading terpotong atau hash anchor tanpa target. Grid preview terukur 1/2/3 kolom sesuai ukuran.
- Pemeriksaan keyboard: Tab menampilkan skip link dan focus ring solid 3px; Enter memindahkan fokus ke main-content. Tab mencapai tombol primary; Enter dan Space memperbarui live status. Fokus tombol juga solid 3px. Ketiga tombol disabled memakai native disabled; anchor tidak diberi disabled. Seluruh 12 button/link-demo berukuran minimal 44px.
- Emulasi prefers-reduced-motion reduce: scroll-behavior auto dan transition-duration 0s pada button serta skip link. no-preference memakai smooth scroll. Homepage tetap menampilkan identitas dan FMS ketika JavaScript dimatikan.
- FontFace Inter berstatus loaded pada seluruh ukuran; hanya satu request WOFF2 dari origin lokal per halaman. Run browser akhir mencatat 0 error console/page, 0 asset gagal, dan 0 request eksternal.
- Screenshot diambil untuk seluruh ukuran; inspeksi visual dilakukan terhadap homepage mobile/desktop, heading panjang 360px, serta button preview 360px. Artefak pemeriksaan sementara ada di `/private/tmp/ridho-section2-validation/`; bukan aset website.

Perhitungan luminance/contrast dilakukan dengan skrip Node menggunakan rumus sRGB/W3C (https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html):

| Pasangan | Rasio |
| --- | --- |
| Primary text / background | 17.29:1 |
| Secondary text / background | 9.58:1 |
| Muted text / background | 6.22:1 |
| Teks primary button putih / accent strong | 5.70:1 |
| Teks primary button putih / hover aksi | 7.10:1 |
| Focus ring / background | 6.98:1 |
| Focus ring / surface elevated | 5.79:1 |
| Border interaktif / surface elevated | 3.60:1 |

Pada ketiga latar (background/surface/elevated), rasio terendah primary text adalah 14.35:1, secondary text 7.95:1, dan muted text 5.16:1. Angka pasangan warna ini bukan klaim audit kepatuhan WCAG menyeluruh.

Keterbatasan: validasi browser hanya pada Chrome desktop dengan emulasi viewport/reduced motion, belum Safari/Firefox/perangkat fisik atau screen reader. Inspeksi browser menggunakan dev server; output production diperiksa melalui build dan assertion file. Kebutuhan konten di content-needed.md tetap terbuka. Tidak ada deployment, akses repository perusahaan, atau commit Git yang dilakukan.

## Section berikutnya

Section 3 — Navbar & Hero, hanya setelah instruksi pengguna diberikan:

- [x] Baca instruksi Section 3 dan keadaan proyek terbaru.
- [x] Implementasikan navbar serta hero dalam scope yang diminta dengan token dan komponen yang sudah tersedia.
- [x] Pertahankan satu main/skip link, metadata, konten terkonfirmasi, dan filter published.
- [x] Validasi responsivitas/keyboard/reduced motion serta output statis.
- [x] Laporkan hasil dan berhenti setelah Section 3 selesai.

Section 6 yang telah disebut pengguna akan memuat studi kasus lengkap. Nomor dan cakupan section lain mengikuti instruksi pengguna berikutnya.

## Hasil Section 3

- **SiteHeader.astro**: Komponen navbar telah diimplementasikan dengan link ke Home dan Projects. Menu pada mobile menggunakan dropdown dari alur layout biasa, dikendalikan dengan button (`aria-expanded`, `aria-controls`), dan menggunakan JavaScript untuk menutup pada klik atau escape. Fokus dikelola saat resize layar, dengan fungsionalitas dasar tanpa JS.
- **Hero.astro**: Section hero diimplementasikan dengan `H1` dan hierarki visual yang sesuai. Teks mengambil copy yang disediakan. CTA utama ("View my work") mengarah ke `#projects`. CTA "Download CV" dan social links disembunyikan sampai tautannya ditambahkan ke dalam file data.
- **Visual Hero Abstrak**: Dibuat menggunakan elemen SVG dekoratif murni dengan `aria-hidden="true"`, menampilkan ilustrasi dari Backend, Web, dan Mobile tanpa gambar mock-up.
- **Animasi Ringan**: Ditambahkan dengan CSS, menghormati `prefers-reduced-motion` untuk *fade in* hero dan transisi pada interaksi klik.
- **Validasi**: Telah berhasil menjalankan `npm run build` (Static) dan `npm run check`. `SiteHeader` dan `Hero` diintegrasikan dalam struktur halaman di `BaseLayout` dan `index.astro`. Tidak ada halaman preview yang masuk ke dist. Draft proyek tetap tidak muncul.

Keterbatasan yang tersisa: Kebutuhan konten CV dan URL sosial masih kosong (menunggu masukan di `.agents/content-needed.md`). Belum ada pengujian menggunakan perangkat fisik (masih mengandalkan dev environment/browser emulated).

## Section berikutnya

Section 4 — About, Skills & Experience, menunggu instruksi pengguna berikutnya:
- [x] Menerima dan membaca instruksi Section 4.

## Hasil Section 4

- **About**: Diimplementasikan dengan layout editorial (*title* dan *eyebrow* di samping, konten *body* membungkus narasi di kanan). Tidak menggunakan komponen *Card* untuk menghadirkan susunan yang lebih ringan.
- **Skills**: Dibuat sebagai grup menggunakan layout *Grid*. Menghilangkan penggunaan bar persentase maupun rating demi profesionalitas. Setiap grup diberikan konteks satu kalimat dan disajikan menggunakan `Badge` semantik.
- **Experience**: Metadata pekerjaan dan proyek dimuat jelas dengan penegasan posisi dan ruang lingkup kontribusi untuk *Field Management System*. Memuat *list* dari area kontribusi tanpa klaim _seniority_, _ranking_, atau metrik tanpa dasar. Nama GGF tetap tidak dimuat (memakai *An agribusiness company*) karena masih berada di daftar _content-needed_. Tanggal disajikan sebagai periode kontribusi proyek (`October 2023 - Present`), bukan awal bergabung ke perusahaan.
- **Pembaruan Data**: `profile.ts`, `skills.ts`, dan `experience.ts` diperbarui untuk mengakomodasi struktur konten ini, tanpa duplikasi dan memastikan pemisahan konten.
- **Navbar**: Menambahkan link `/#about` dan `/#experience` dengan pemrosesan `withBase`.
- **Validasi**: Menjalankan `npm run build` (Static) dan `npm run check`. Terdapat 0 *error*. HTML produksi memuat `id` dan *anchor link* yang sesuai. _Draft_ internal tidak menembus output produksi. Pengujian responsivitas dan hierarki DOM (`H2`, `H3`) telah dilakukan.

## Section berikutnya

Section 5 — Daftar Proyek, menunggu instruksi pengguna:
- [x] Menerima dan membaca instruksi Section 5.

## Hasil Section 4A

- **Foto Profil Hero**: Berhasil mengintegrasikan potret diri dari `.jpg` menggunakan Astro `<Image/>` (yang menghasilkan webp dan multiple size scrset teroptimasi). Diberikan balutan CSS dengan border halus, `grayscale(1)`, object-fit yang memelihara titik fokus _portrait_, serta efek glow violet halus tanpa adanya transisi hover warna.
- **Floating Technology Logos**: Diimplementasikan dengan murni SVG lokal yang dikumpulkan dari *Simple Icons* tanpa script *embed* CDN sama sekali (Mencegah blocking dan latency). Animasi menggunakan `@keyframes transform` independen, yang diloop pelan.
- **Aksesibilitas & Progressive Enhancement**: Sistem akan menghormati preferensi `prefers-reduced-motion` dan menyajikan posisi stastis sebagai *default*. Tombol navigasi manual pause/play ditambahkan. Saat berada di background tab/viewport di luar *Hero*, interaksi observer otomatis menjeda animasi.
- **Perubahan Struktur Data**: Penambahan `src/data/hero-technologies.ts` untuk meregister *main* & *small* icons secara aman.
- **Validasi**: Telah lulus verifikasi `npm run check` TypeScript penuh (serta mitigasi saat load ikon agar _build_ tidak *crash* kalau aset kosong) serta berhasil diproduksi HTML kompilasi _static_-nya. Panduan modifikasi foto dan array ikon ditambahkan ke `README.md`.

## Hasil Section 5

- **Model Data & Publikasi**: Menambahkan properti `detailPageReady` berjenis `boolean` (default `false`) pada _content schema_ untuk merepresentasikan halaman studi kasus secara eksplisit, menghindarkan pembuatan tautan mati. Memperbarui _frontmatter_ data FMS agar menjadi satu-satunya proyek *featured* dan *published* sementara yang lainnya bertahan berstatus *draft*.
- **ProjectCard.astro**: Komponen direalisasikan dengan elemen artikel *semantic*, status lencana terformat baik ("In production", "Planned", dsb), dukungan _lazy loading cover_ cerdas (gambar pertama di _above the fold_ di _eager load_), _fallback typography panel_ jika ketiadaan _cover_, serta perlindungan tautan bila halaman detail belum tersedia. Tersedia *link* ekstra bagi _Live site_ / _Source code_ dengan atribut _rel="noopener noreferrer"_.
- **SelectedProjectsSection.astro**: Dibuat sebagai wadah yang menampilkan proyek unggulan di `index.astro` dengan logika tampilan responsif adaptif (jika hanya ada 1 proyek, layout akan melebar dan tak menyisakan ruang kopong) dan dilengkapi dengan CTA menunjuk `/projects/`.
- **Halaman `/projects/`**: Merender semua proyek *published* tanpa memedulikan nilai *featured*, melampirkan fitur interaksi _filtering_ (*Progressive Enhancement* dengan `aria-pressed` dan _screen reader announcer_ via `aria-live`) untuk memilah antara _Professional_, _Personal_, dan _Freelance_. Tombol filter disembunyikan (*graceful degradation*) dari _runtime JS_ apabila hasil filter di bawah 1 kategori aktif.
- **Validasi**: Menjalankan pemeriksaan `ASTRO_TELEMETRY_DISABLED=1 npm run check` (0 *warning*, 0 *error*) dan `npm run build` yang lulus mendemonstrasikan hasil _static content_ murni (tidak membocorkan entri _draft_). Navbar di _SiteHeader.astro_ telah diselaraskan kalkulasinya sehingga memunculkan *active indicator* secara logis baik dari *home* maupun rute ber-path dalam.

Keterbatasan yang tersisa: Filter interaktif secara mekanis telah rampung dibuat untuk skema kategori *multi*, namun karena hingga akhir section ini seluruh proyek masih terpusat di ranah `professional`, filter otomatis bersembunyi untuk menjaga relevansi UX. Filter baru bisa diuji interaksinya bila ada draf-draf *personal* atau *freelance* (seperti *JustSubs* dsb) yang dinaikkan ke ranah *published*.

## Section berikutnya

Section 6 — Studi Kasus FMS, menunggu instruksi pengguna:
- [x] Menerima dan membaca instruksi Section 6.

## Hasil Section 6

- **Routing Detail**: Menambahkan `/projects/[...slug].astro` yang mengeksploitasi Astro `getStaticPaths` dengan *filtering* presisi (`publicationStatus === 'published' && detailPageReady === true`) untuk mencegah terbentuknya route untuk draf-draf proyek yang datanya belum matang.
- **Desain Halaman (Layout)**: Mengimplementasikan `ProjectDetailLayout.astro` yang mengemas *Breadcrumb*, *Metadata Area* ekstensif (menyerap kembali sumber data tunggal dari `experience.ts` guna menekan repetisi _hardcode_), dan *Table of Contents (TOC)* yang disusun dinamis otomatis berkat API `headings` dari `.render()` Markdown Astro.
- **Isi Studi Kasus FMS**: *Markdown* proyek `field-management-system.md` ditulis ulang dan diekspansi mengikuti batasan-batasan objektif yang disyaratkan. Klaim kebanggaan prematur ditiadakan. Narasi menonjolkan batas ruang lingkup sistem (*field operations*, *water management*, *offline mobile*, *form*).
- **Visualisasi Konseptual SVG**: Bagan interkoneksi _Web ↔ Backend ↔ Mobile ↔ SQLite_ dibuat secara efisien di dalam *Markdown* menggunakan `SVG` dan *CSS styling* bawaan HTML, membebaskan web dari pemuatan _runtime libraries_ (seperti MermaidJS).
- **Aksesibilitas dan Responsivitas**: `aria-current="page"` sukses merefleksikan posisi turunan sub-route kepada menu *Projects* di Navbar. Semua konten *case-study* dirancang menggunakan blok semantik (*headings*, *paragraphs*, *lists*) dan terbungkus dalam wadah dengan visibilitas ketebalan *font* yang terukur (*max-width* karakter ramah baca).

Keterbatasan: Ilustrasi layar aplikasi fisik (Screenshots) tak disematkan demi menghormati absennya material sah, diganti utilitas *Breadcrumbs* dan Tipografi untuk menjaga hierarki *flow* navigasi.

## Section berikutnya

Section 7 — Detail Proyek Lainnya, menunggu instruksi pengguna:
- [x] Menerima dan membaca instruksi Section 7.

## Hasil Section 7

- **Inventaris Proyek**: Membuat ringkasan internal mengenai status semua draf ke `.agents/project-content-review.md`. Ringkasan ini merunut kepastian fungsional dari *JustSubs*, *Nginx Manager*, dsb, berpedoman pada sumber fakta terkini di _workspace_ tanpa spekulasi liar.
- **Pembaruan Draf (Markdown)**: *Frontmatter* dan struktur cerita untuk _JustSubs_, _Nginx Manager_, _Monitoring Stunting_, _Mayarta_, _Sports Arena Billing & POS_, serta _School Attendance System_ telah diekspansi dengan bagian seperti _Overview_ dan _Technical Approach_. Karena fakta publikasi yang utuh belum hadir, *semua draf ini mempertahankan `publicationStatus: draft` dan `detailPageReady: false`*.
- **Fleksibilitas Layout**: Komponen `ProjectDetailLayout.astro` diuji dan disesuaikan sehingga sanggup bekerja mulus meski tanpa metadata opsional (*client*, *company*, dan daftar *roles* / *technologies* kosong).
- **Preview Route Khusus Development**: Memasang _environment-only endpoints_ via _Astro Integration API_ (`injectRoute`) pada `astro.config.mjs` di *command dev*. Rute rahasia yang terbuat (`/dev/projects/` dan `/dev/projects/[...slug]`) memberikan fasilitas pratinjau seluruh *draf*, dan dijamin hilang dari kompilasi `npm run build` di *production*.
- **Validasi Kepatuhan Production**: `npm run check` (0 *warning*, 0 *error*). Pada *output* `dist/`, tak satupun draf yang bocor; `field-management-system` bertahan utuh tanpa cedera. Halaman dev sama sekali tidak di-_emit_.

Keterbatasan: Detail produk draf belum memuat aset tangkapan layar dan tautan demonstrasi, menunggu penyetoran dari pengguna.

## Section berikutnya

Section 8 — Kontak, CV & Footer, menunggu instruksi pengguna:
- [x] Menerima dan membaca instruksi Section 8.

## Hasil Section 8

- **Struktur Data Terpusat**: Memperbarui antarmuka data di `src/data/site.ts` dengan menyisipkan variabel opsional (`null`) guna menampung aset publik seperti `whatsappNumber`, `github`, `linkedin`, `contactEmail`, serta file *Resume* (`cvPath`). Segala spekulasi dihindari (tidak mengambil *Email* rahasia dari log repositori *Git*).
- **Pengkondisian Komponen & Navigasi**: *Conditional rendering* diaplikasikan mutlak ke `src/data/navigation.ts`, komponen `SiteFooter.astro`, serta `ContactSection.astro`. Akibat tidak adanya data yang tertambat pada awal integrasi, maka seluruh sub-komponen *Contact* (*Email form/link, tombol WhatsApp*) sekaligus pintasan "*Contact*" di modul *Header Navigation* (Navbar) tersamarkan dengan mulus.
- **Formasi Tautan Publik**:
  - Tombol *"Copy email"* dimotori *JavaScript* *Clipboard API* bersahabat tanpa memunculkan *alert/prompt* yang menginterupsi pengguna (*Progressive Enhancement*).
  - Integrasi nomor internasional *WhatsApp* diakomodir lewat *link* statis (`wa.me`).
  - Pemanggilan _URL CV_ diolah dengan aman oleh *helper backend-oriented* `getPublicCvUrl()`. File dibaca bit-nya (cek header *%PDF-*) demi menjamin yang ditawarkan bukan *file* tiruan.
- **Desain Site Footer**: Memasangkan blok navigasi dasar penutup halaman (`SiteFooter.astro`) via `BaseLayout.astro`.
- **Validasi Kepatuhan Production**: `npm run check` (0 *warning*, 0 *error*) & sukses melakukan simulasi rilis `dist/` _production build_.

Keterbatasan: Dikarenakan variabel sosial/kontak bernilai konstan `null`, belum bisa memeriksa klik URL secara visual, namun logika pemrograman *fall-back nullish* bekerja sesuai protokol *Astro HTML render*.

## Section berikutnya

Section 9 — Responsivitas, Aksesibilitas, SEO & Performa, menunggu instruksi pengguna:
- [x] Menerima dan membaca instruksi Section 9.

## Hasil Section 9-10

- **Penyelesaian Audit**:
  - Halaman kustom 404 (`/404.html`) sukses ditambahkan menyesuaikan palet identitas portofolio tanpa intervensi JavaScript.
  - Komponen metadata di `BaseLayout.astro` dimutakhirkan secara ekstensif untuk merangkul *JSON-LD Structured Data* (`WebSite`), *Canonical URL*, Twitter Cards, dan spesifikasi *Open Graph*.
  - Ekosistem *Sitemap XML* (`src/pages/sitemap.xml.ts`) dan *Robots.txt* (`src/pages/robots.txt.ts`) diinkubasi menggunakan integrasi *Endpoint Astro*. Modul-modul SEO ini diprogram sedemikian rupa agar tidak mendeskripsikan *URL absolut* abal-abal apabila variabel konfigurasi domain `url` di `src/data/site.ts` dibiarkan kosong (`null`).
  - Laporan detail dicatat pada `.agents/final-audit.md`.
- **Target Deployment**:
  - Rekomendasi teknis dialokasikan untuk penggunaan **Cloudflare Pages**, memanfaatkan kemampuan eksekusi situs statis (`output: "static"`) *build tool* Astro. Panduan *wiring* telah dimasukkan ke dalam `README.md`.
  - Sistem kompilasi kode bersih dari kebocoran (Draf tidak menembus sitemap, `/dev/` luput dari environment production).

Keterbatasan: Dikarenakan aset visual manipulasi raster (`social-preview.png`) belum sempat di-generate lokal dan identitas *URL host* final (`site.url`) belum saya ketahui, proses transmisi metadata *Open Graph Image* serta *Sitemap* sementara saya redam demi menghindari pembentukan tautan *404 Not Found* palsu ke *Web Crawler*.

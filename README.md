# Ridho Pujiono Portfolio

Portfolio statis menggunakan Astro, TypeScript strict, dan Tailwind CSS. Konten publik menggunakan bahasa Inggris; dokumentasi kerja menggunakan bahasa Indonesia. Section 1 menyediakan data dan collection proyek; Section 2 menambahkan design system dark, komponen dasar, serta layout yang diterapkan pada beranda minimal.

## Environment

- Environment yang digunakan: Node.js `24.11.1` dan npm `11.6.2`.
- Gunakan `.nvmrc` dengan `nvm use` jika memakai nvm. Astro membutuhkan Node.js minimal `22.12.0`; gunakan rilis Node genap yang didukung.
- Astro `7.3.1`, Tailwind CSS dan `@tailwindcss/vite` `4.3.3`, TypeScript `6.0.3`, serta `@astrojs/check` `0.9.10`.
- TypeScript 6 dipilih sesuai peer dependency `@astrojs/check` (TypeScript 5 atau 6).
- npm adalah package manager proyek. Pertahankan hanya `package-lock.json`; commit lockfile ini untuk instalasi yang konsisten.

## Perintah

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

`npm ci` memasang versi dalam lockfile, termasuk alat development dan pemeriksaan. Setelah mengubah dependency secara sengaja, gunakan `npm install` untuk memperbarui lockfile. Jangan menghilangkan devDependencies saat melakukan check atau build.

Development server menggunakan `http://localhost:4321` secara default. `check` memeriksa file Astro dan TypeScript serta menyinkronkan schema konten. Build menghasilkan website statis di `dist/`; `preview` menyajikan hasil build tersebut secara lokal. Build tidak menggantikan pemeriksaan tipe: jalankan `check` dan `build` sebelum menyatakan perubahan selesai.

## Struktur

```text
.agents/                 Catatan internal; tidak diimpor aplikasi
  knowledge.md
  progress.md
  content-needed.md
public/                  Hanya aset yang layak dipublikasikan
  fonts/Inter-LICENSE.txt Lisensi font yang ikut distribusi statis
src/
  assets/favicon.svg     Ikon lokal, di-inline dalam build
  assets/fonts/          Inter variable WOFF2 lokal
  components/            Enam komponen dasar Astro
  content/projects/      Tujuh entry Markdown proyek
  data/
    site.ts              Identitas situs dan kontak opsional
    profile.ts           Profil Ridho
    experience.ts        Pengalaman dan periode kontribusi proyek
    skills.ts            Kelompok teknologi tanpa rating
  dev/DesignSystem.astro Preview yang hanya diregistrasikan saat dev
  layouts/BaseLayout.astro
  lib/projects.ts        Akses proyek published dan featured
  pages/index.astro      Satu-satunya halaman production saat ini
  styles/global.css      Token semantik, font, tipografi, aksesibilitas
  content.config.ts      Loader dan schema proyek
```

Tidak ada komponen atau halaman kosong yang dibuat untuk section berikutnya.

Kontak, URL situs, sosial, foto, dan CV yang belum tersedia bernilai `null`. Jangan mengisinya dengan perkiraan. `experience.ts` memakai `contributionStart` dalam format `YYYY-MM` untuk kontribusi web/mobile; tanggal tersebut bukan tanggal mulai bekerja.

## Menambah proyek Markdown

1. Buat berkas `.md` dengan nama kebab-case di `src/content/projects/`. Nama berkas menjadi ID entry.
2. Ikuti struktur frontmatter pada entry yang tersedia. Field inti: `title`, `summary`, `category`, `projectStatus`, `publicationStatus`, `featured`, `sortOrder`, `roles`, dan `technologies`.
3. Tulis konten dalam bahasa Inggris, hanya dari fakta yang terkonfirmasi. Gunakan `publicationStatus: draft` selama konten belum layak tampil. Roles dan technologies dapat berupa array kosong jika belum terkonfirmasi.
4. Jalankan `npm run check` dan `npm run build`, lalu periksa `dist/index.html` agar hanya konten yang dimaksud tampil.

Schema menyediakan nilai berikut:

| Field | Nilai dan perilaku |
| --- | --- |
| `category` | `professional`, `personal`, `freelance` |
| `projectStatus` | `planned`, `in-progress`, `production`, `completed`, `unknown`; keadaan proyek sebenarnya |
| `publicationStatus` | `draft`, `published`; menentukan kelayakan publikasi konten, default `draft` |
| `featured` | Boolean, default `false`; hanya berlaku pada proyek published |
| `detailPageReady` | Boolean, default `false`; memastikan halaman studi kasus proyek (/projects/[slug]/) dibuat saat build dan judul kartu menjadi link |
| `sortOrder` | Bilangan bulat nonnegatif, nilai kecil tampil dahulu; default `100` |
| `roles`, `technologies` | Array teks tidak kosong per item; array kosong diperbolehkan |
| `startDate`, `endDate` | Opsional, string berformat `YYYY-MM`, tulis dengan tanda kutip dalam YAML |
| `cover`, `coverAlt` | Opsional; jika cover diisi, teks alternatif bermakna wajib tersedia |
| `demoUrl`, `repositoryUrl` | Opsional; harus URL HTTP/HTTPS yang valid jika diisi |

Status proyek dan publikasi berdiri sendiri: proyek production dapat tetap draft jika materinya belum layak dipublikasikan. Proyek yang sudah `published` tidak akan dibuatkan rute studi kasus-nya kecuali `detailPageReady` secara eksplisit disetel ke `true`. Enam kandidat awal tetap draft dengan status proyek unknown. Kategori draft yang sementara harus dikonfirmasi sebelum publikasi; rinciannya ada di catatan internal.

Jangan membuat tanggal harian dari sumber bulanan. `startDate` dan `endDate` hanya untuk periode proyek yang terkonfirmasi, bukan otomatis dari tanggal kontribusi. Keduanya sengaja belum diisi pada FMS. Jika kedua bulan diisi, akhir tidak boleh lebih awal dari awal.

Untuk cover, simpan aset yang diizinkan di `src/assets/` dan gunakan path relatif dari Markdown, misalnya `../../assets/nama-proyek.webp` setelah berkas tersebut benar-benar tersedia. Schema memakai fasilitas `image()` Astro untuk memvalidasi aset; tulis `coverAlt` yang menjelaskan gambar. Pemeriksaan otomatis memastikan teks tidak kosong, sedangkan ketepatan deskripsinya tetap perlu ditinjau. Field opsional yang belum diketahui cukup dihilangkan dari frontmatter; jangan isi URL atau path palsu.

`getPublishedProjects()` di `src/lib/projects.ts` selalu menyaring `publicationStatus === 'published'` lalu mengurutkan `sortOrder` dengan ID sebagai tie-breaker deterministik. `getFeaturedProjects()` memakai hasil helper tersebut. Gunakan helper yang sama di semua halaman publik dan pada `getStaticPaths` saat route detail diimplementasikan nanti. Jangan mengirim seluruh collection sebagai JSON ke browser.

## Design system dan layout

Semua token terpusat di `src/styles/global.css`. Palet dark charcoal dan ungu didefinisikan melalui `@theme static` Tailwind v4: `bg-background`, `bg-surface`, `text-text-primary`, `text-text-secondary`, `text-accent`, dan `border-border-subtle` merupakan contoh utility yang dihasilkan. Tailwind memindai `src/`, tanpa membaca catatan `.agents/`.

| Kelompok | Token / penggunaan |
| --- | --- |
| Warna | `--color-background`, `--color-surface`, `--color-surface-elevated`, `--color-text-*`, `--color-border-*`, `--color-accent*`, `--color-focus-ring` |
| Tombol primary | `--color-on-accent` di atas `--color-accent-strong`; hover memakai `--color-action-primary-hover` |
| Spacing | Basis `--spacing: 0.25rem`; `--spacing-gutter`, `--spacing-section`, dan `--spacing-surface` fluid |
| Lebar | `--container-main: 70rem` (1120px), `--container-narrow: 47.5rem` (760px), `--container-prose: 65ch` |
| Radius | `--radius-control`, `--radius-surface`, `--radius-pill` |
| Shadow | `--shadow-surface`, `--shadow-accent`; gunakan seperlunya |
| Transisi | `--duration-fast: 150ms`, `--duration-normal: 200ms`, `--ease-standard`; bisa digunakan sebagai `duration-(--duration-fast)` |
| Fokus dan anchor | Ring 3px dengan offset 3px; `--anchor-offset: 6rem` tersedia untuk navbar mendatang |

Lebar Container adalah area konten efektif, ditambah gutter responsif pada kedua sisinya. Paragraf dibatasi sekitar 65 karakter. Heading memakai `clamp()` dan dapat membungkus; tidak ada tinggi konten tetap atau `overflow-x: hidden` pada halaman.

Skala tipografi tersedia sebagai `.type-display`, `.type-h1`, `.type-h2`, `.type-h3`, `.type-body`, `.type-small`, dan `.type-eyebrow`. Display disiapkan untuk hero mendatang. Ukuran body mulai 16px dengan line-height 1.7. Uppercase hanya digunakan untuk label eyebrow singkat.

Inter v4.1 disimpan sebagai satu font variable normal WOFF2 (weight 100–900) di `src/assets/fonts/InterVariable.woff2`, dari [repository resmi Inter](https://github.com/rsms/inter/tree/v4.1). CSS menggunakan `font-display: swap` dan system fallback. BaseLayout melakukan preload ke URL aset yang sama dengan `@font-face`; browser mengambil font dari origin lokal, tanpa permintaan Google Fonts. Lisensi SIL Open Font License tersedia di `public/fonts/Inter-LICENSE.txt` dan ikut disalin ke `dist/fonts/`.

Komponen dasar di `src/components/`:

| Komponen | API utama |
| --- | --- |
| `Container` | `width="default"` atau `"narrow"`, `class`, atribut native div; tanpa landmark |
| `Section` | Atribut native section termasuk `id`, `aria-labelledby`, `class`; spacing vertikal konsisten |
| `SectionHeading` | `id`, `title`, `description?`, `eyebrow?`, `level="h1\|h2\|h3"` (default h2); ID berada pada heading |
| `Button` | `variant="primary\|secondary\|ghost"`, `size="default\|small"`; href untuk anchor, tanpa href untuk aksi; slot `icon` opsional |
| `Badge` | `variant="neutral\|accent"`, slot teks; label noninteraktif |
| `Surface` | Atribut native div dan slot; surface dengan border, padding, serta shadow halus |

Props Button membedakan atribut anchor dan button. Button aksi default `type="button"`; `disabled` hanya tersedia untuk button. Anchor menolak tujuan kosong, `#`, `#!`, dan protokol script, serta tidak mendukung keadaan disabled. Pemanggil tetap bertanggung jawab memastikan URL/target benar-benar tersedia. Isi slot default dengan label; ikon dalam slot `icon` bersifat dekoratif. Semua ukuran button memiliki area klik minimal 44px dan tetap dapat bertambah tinggi jika teks membungkus.

BaseLayout mempertahankan title, description, dan `lang="en"`, menyediakan tepat satu `<main id="main-content" tabindex="-1">`, serta skip link. Halaman yang menggunakan layout tidak boleh menambahkan main kedua. Properti `noindex` opsional digunakan preview. Focus-visible, link bergaris bawah, selection kontras, dan `prefers-reduced-motion` terpusat di CSS. Reduced motion menonaktifkan smooth scroll serta transisi/gerakan; konten tetap terlihat tanpa JavaScript. Tahap ini hanya dark theme.

## Preview development

Jalankan `npm run dev`, kemudian buka [preview design system](http://localhost:4321/dev/design-system/). Jika port berbeda, gunakan URL server yang dicetak Astro. Preview mencakup palet dan nilai token aktif, tipografi, heading panjang, paragraf/link, semua variant button, disabled state, ikon, badge, surface, dan grid responsif. Button demonstrasi memperbarui pesan status; anchor menuju ID yang tersedia di halaman tersebut.

Selain preview komponen, proyek ini menyediakan [Draft Projects Preview](http://localhost:4321/dev/projects/) untuk membaca *studi kasus draf* secara lokal tanpa mempublikasikannya. Fasilitas preview ini menampilkan keseluruhan koleksi Markdown yang berstatus draf, yang dipagari oleh proteksi metadata (`detailPageReady: false` atau `publicationStatus: draft`).

Route diregistrasikan oleh integration lokal kecil di `astro.config.mjs` melalui `injectRoute()` hanya ketika `command === 'dev'`. Implementasinya berada di `src/dev/DesignSystem.astro`, `src/dev/ProjectsIndex.astro`, dan `src/dev/ProjectDetail.astro`, yang kesemuanya berada di luar direktori `src/pages/`. Pada versi Astro terpasang, hal ini dipastikan tak akan memicu *generate HTML* apa pun sewaktu *build production*. Registrasi khusus dev dipilih agar halaman **dan aset khusus preview** tidak masuk production. Meta `noindex, nofollow` menjadi lapisan tambahan. Preview ini tidak ditautkan dari homepage publik dan dilarang untuk diakses lewat _URL_ sembarangan di _production_.

Astro pada environment ini menjalankan dev server sebagai proses terpisah. Gunakan `npm run dev -- stop` untuk menghentikannya setelah selesai.

## Catatan internal dan batas scope

`.agents/knowledge.md` menyimpan konteks dan batas klaim, `.agents/progress.md` mencatat pekerjaan serta validasi, dan `.agents/content-needed.md` mencatat kebutuhan konten. Ketiganya berada di luar `src/` dan `public/`, tidak diimpor aplikasi, serta tidak boleh disalin ke hasil build. Berkas yang dilacak Git tetap dapat dibaca orang yang memiliki akses repository; gunakan `dist/` sebagai artefak website.

FMS adalah satu proyek dengan kontribusi tim; konten awal menggunakan klien generik. Enam kandidat lain belum tampil publik. Jangan menyimpan sumber kode perusahaan, credential, endpoint internal, data operasional asli, atau screenshot sensitif dalam proyek ini.

Fondasi visual Section 2 selesai. Navbar dan hero final menunggu Section 3. Route daftar/detail proyek, 404, light mode, dekorasi hero, serta konfigurasi deployment mengikuti section berikutnya. Canonical dan metadata URL absolut belum dibuat karena domain final belum dikonfirmasi.

## Referensi konfigurasi

- [Instalasi manual Astro](https://docs.astro.build/en/install-and-setup/#manual-setup)
- [TypeScript di Astro](https://docs.astro.build/en/guides/typescript/)
- [Content Collections dan loader Astro](https://docs.astro.build/en/guides/content-collections/)
- [Tailwind CSS dengan Astro melalui plugin Vite](https://tailwindcss.com/docs/installation/framework-guides/astro)
- [Token tema Tailwind CSS](https://tailwindcss.com/docs/theme)
- [API integration Astro](https://docs.astro.build/en/reference/integrations-reference/)
- [Definisi kontras minimum W3C](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

### Section 4A - Mengubah Foto dan Logo Animasi (Hero)
- **Foto Profil**: Ganti foto dengan menempatkannya di `src/assets/images/profile/ridho-portrait.jpg` (bisa `.jpg`, `.png`, atau `.webp`). Komponen `Hero` akan secara otomatis meresize foto tersebut tanpa menghapus format grayscale CSS-nya. 
- **Logo Teknologi (Animasi Float)**: Kelola daftar di file `src/data/hero-technologies.ts`. Anda dapat menambah atau mengurangi entri (beserta atribut `size: 'main' | 'small'`). File SVG-nya harus ditempatkan di dalam direktori `src/assets/icons/technologies/` dengan nama yang bersesuaian dengan atribut `iconName`. Pastikan SVG yang ditambahkan dalam format monochrome flat agar menyatu dengan baik (sumber disarankan: Simple Icons).

### Pengisian Data Kontak dan CV
- Data sosial (*GitHub, LinkedIn*), nomor *WhatsApp*, dan alamat *Email Publik* diatur melalui `src/data/site.ts`. Komponen secara otomatis akan membunyikan modul *"Contact"* pada navigasi/halaman ketika ada setidaknya satu medium kontak yang tidak `null`.
- Untuk menyisipkan tombol unduh profil, cukup unggah ke direktori `public/files/` dengan wujud `ridho-pujiono-cv.pdf`, lalu isikan nama filenya di variabel `cvPath: '/files/ridho-pujiono-cv.pdf'` di dalam file `src/data/site.ts`. Semua *logic* pemeriksaan *PDF/file signature* dan *conditional rendering* tombol otomatis dijalankan saat proses rilis (build).

### Target Deployment (Cloudflare Pages)
Portofolio ini dioptimalkan untuk di-deploy sebagai situs statis di **Cloudflare Pages**.
1. Integrasikan repository GitHub ini ke akun Cloudflare Pages Anda.
2. Pada konfigurasi *Build*, pastikan pengaturan berikut:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
3. Setelah situs berhasil *live* dan domain telah dipastikan (contoh: `https://ridhopujiono.my.id`), isikan URL domain final tersebut pada variabel `url: 'https://ridhopujiono.my.id'` di dalam file `src/data/site.ts`.
4. Setelah `url` diisikan, *sitemap.xml*, *robots.txt*, dan *Canonical URL* akan otomatis dihasilkan dalam kondisi yang sempurna untuk keagresifan *SEO*.

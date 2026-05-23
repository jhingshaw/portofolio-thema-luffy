# Portofolio Thema Luffy

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=111111)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=ffffff)
![Vite](https://img.shields.io/badge/Vite-6.0.7-646CFF?style=for-the-badge&logo=vite&logoColor=ffffff)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=ffffff)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=ffffff)

**Portofolio Thema Luffy** adalah website portfolio bertema Monkey D. Luffy yang dibuat untuk menampilkan personal branding developer dengan tampilan modern, responsif, dan memorable. Project ini menggabungkan visual anime-inspired, bento layout, hero section yang kuat, project showcase, journey timeline, dan CTA profesional.

## Live Demo

🔗 **Demo:** [portofolio-thema-luffy.vercel.app](https://portofolio-thema-luffy.vercel.app)

## Preview

Asset utama karakter disimpan di folder `public` dan dipanggil langsung dari root path Vite.

```txt
public/luffy-removebg-preview.png
```

> Jika gambar belum tersedia, aplikasi tetap dapat berjalan karena komponen menyediakan fallback visual.

## Fitur Utama

- Hero section dengan headline personal branding.
- Tema visual Monkey D. Luffy sebagai anchor utama desain.
- Bento card layout untuk menampilkan value proposition.
- Section project showcase dengan stack dan impact.
- Journey timeline untuk menampilkan perkembangan skill.
- Contact section dengan CTA email dan LinkedIn.
- Responsive navigation untuk desktop dan mobile.
- Tailwind CSS utility-first styling.
- Siap deploy ke Vercel.

## Tech Stack

| Teknologi | Kegunaan |
|---|---|
| React | Library utama untuk membangun UI |
| TypeScript | Type safety dan struktur kode lebih rapi |
| Vite | Development server dan build tool |
| Tailwind CSS | Styling cepat berbasis utility class |
| PostCSS | Pipeline CSS |
| Autoprefixer | Menambahkan vendor prefix otomatis |
| Vercel | Hosting dan deployment |

## Struktur Project

```txt
portofolio-thema-luffy/
├── public/
│   └── luffy-removebg-preview.png
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Instalasi

Clone repository:

```bash
git clone https://github.com/jhingshaw/portofolio-thema-luffy.git
```

Masuk ke folder project:

```bash
cd portofolio-thema-luffy
```

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka browser dan akses:

```txt
http://localhost:5173
```

## Script yang Tersedia

| Script | Fungsi |
|---|---|
| `npm run dev` | Menjalankan project di mode development |
| `npm run build` | Membuat production build |
| `npm run preview` | Menjalankan preview hasil build |

## Kustomisasi Data Portfolio

Sebagian besar konten portfolio dapat diedit langsung di file:

```txt
src/App.tsx
```

Beberapa bagian yang bisa kamu ubah:

### Profile

```ts
const profile = {
  name: "JhingShaw",
  role: "Frontend / Full-stack Developer",
  location: "Indonesia",
  email: "ajjayv2@gmail.com",
  github: "https://github.com/jhingshaw",
  linkedin: "https://linkedin.com/in/-",
};
```

### Skills

```ts
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "REST API",
  "UI Engineering",
  "Web Security",
  "Vercel",
  "GitHub Workflow",
];
```

### Projects

Edit array `projects` untuk mengganti judul, kategori, deskripsi, stack, impact, dan link project.

```ts
const projects = [
  {
    title: "Luffy Gear Portfolio Theme",
    category: "Anime Portfolio Website",
    stack: ["React", "Tailwind CSS", "Vite", "Vercel"],
    link: "https://portofolio-thema-luffy.vercel.app",
  },
];
```

## Mengganti Gambar Luffy

Simpan gambar baru ke folder `public`, lalu pastikan nama file sesuai dengan path berikut:

```txt
public/luffy-removebg-preview.png
```

Di dalam `src/App.tsx`, asset dipanggil melalui:

```ts
const LUFFY_IMAGE_SRC = "/luffy-removebg-preview.png";
```

Jika ingin memakai nama file lain, ubah nilai `LUFFY_IMAGE_SRC` sesuai nama file baru.

## Build Production

Untuk membuat build production:

```bash
npm run build
```

Output build akan tersedia di folder:

```txt
dist/
```

Preview build secara lokal:

```bash
npm run preview
```

## Deploy ke Vercel

1. Push repository ke GitHub.
2. Login ke [Vercel](https://vercel.com).
3. Pilih **Add New Project**.
4. Import repository ini.
5. Gunakan konfigurasi default Vite:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Klik **Deploy**.

## Catatan Attribution

Project ini adalah konsep portfolio fan-inspired dengan referensi visual Monkey D. Luffy. Project ini tidak berafiliasi dengan One Piece, Toei Animation, atau Shueisha.

## Roadmap Pengembangan

- [ ] Menambahkan screenshot preview website.
- [ ] Menambahkan dark mode toggle.
- [ ] Menambahkan animasi section saat scroll.
- [ ] Menambahkan halaman detail project.
- [ ] Mengganti placeholder LinkedIn dengan URL asli.
- [ ] Menambahkan SEO meta tags dan Open Graph image.

## Author

**JhingShaw**

- GitHub: [@jhingshaw](https://github.com/jhingshaw)
- Email: [ajjayv2@gmail.com](mailto:ajjayv2@gmail.com)
- Website: [portofolio-thema-luffy.vercel.app](https://portofolio-thema-luffy.vercel.app)

## License

Belum ada lisensi yang ditentukan di repository ini. Jika project akan dibuka untuk publik atau kontribusi, tambahkan file `LICENSE` sesuai kebutuhan.

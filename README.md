# Portfolio Luffy Theme

Portfolio React + Vite + Tailwind CSS bertema Monkey D. Luffy, siap push ke GitHub dan deploy ke Vercel.

## Struktur penting

```txt
public/
  luffy-removebg-preview.png
src/
  App.tsx
  main.tsx
  index.css
index.html
package.json
vercel.json
```

## Jalankan lokal

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
npm run preview
```

## Deploy Vercel

Setting Vercel:

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Kustomisasi cepat

Edit object `profile` di `src/App.tsx`:

```ts
const profile = {
  name: "Your Name",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};
```

## Catatan legal

Ini adalah fan-inspired portfolio concept. Tidak berafiliasi dengan One Piece, Toei Animation, atau Shueisha.

const fs = require("fs");
const path = require("path");

const requiredFiles = [
  "index.html",
  "package.json",
  "src/App.tsx",
  "src/main.tsx",
  "src/index.css",
  "public/luffy-removebg-preview.png",
  "vite.config.ts",
  "tailwind.config.js",
  "postcss.config.js",
  "vercel.json",
];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(process.cwd(), file)));

if (missing.length > 0) {
  console.error("Missing required files:", missing.join(", "));
  process.exit(1);
}

const app = fs.readFileSync(path.join(process.cwd(), "src/App.tsx"), "utf8");
const assertions = [
  [app.includes("Monkey D. Luffy"), "App should include Monkey D. Luffy"],
  [app.includes("/luffy-removebg-preview.png"), "App should reference public Luffy image"],
  [app.includes("runPortfolioSmokeTests"), "App should include smoke tests"],
];

const failed = assertions.filter(([pass]) => !pass);

if (failed.length > 0) {
  failed.forEach(([, message]) => console.error(message));
  process.exit(1);
}

console.log("Smoke test passed.");

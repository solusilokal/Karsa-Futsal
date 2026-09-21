const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

console.log('[1/3] Memulai bundling JavaScript...');
const jsResult = esbuild.buildSync({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  format: 'iife',
  minify: true,
  loader: {
    '.css': 'empty',
    '.webp': 'dataurl',
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.jpeg': 'dataurl',
    '.svg': 'dataurl'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  write: false,
});

const bundledJs = jsResult.outputFiles[0].text;
console.log('✓ Bundled JS size:', (bundledJs.length / 1024).toFixed(1), 'KB');

console.log('[2/3] Membaca stylesheet CSS dari dist/assets/...');
if (!fs.existsSync('dist/assets')) {
  console.error('Folder dist/assets tidak ditemukan. Pastikan sudah menjalankan npm run build terlebih dahulu!');
  process.exit(1);
}

const distAssets = fs.readdirSync('dist/assets');
const cssFile = distAssets.find(f => f.endsWith('.css'));
if (!cssFile) {
  console.error('File CSS tidak ditemukan di dist/assets!');
  process.exit(1);
}
const cssContent = fs.readFileSync(path.join('dist/assets', cssFile), 'utf8');
console.log('✓ CSS size:', (cssContent.length / 1024).toFixed(1), 'KB');

console.log('[3/3] Menyusun file standalone.html...');
const singleHtml = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="theme-color" content="#0D2B4A" />

    <title>Karsa Futsal - Arena Futsal Terbaik di Jantung Kota</title>

    <!-- Primary Meta Tags -->
    <meta name="title" content="Karsa Futsal - Arena Futsal Terbaik di Jantung Kota" />
    <meta name="description" content="Bermain dengan semangat juara di Karsa Futsal. Kami menyediakan fasilitas lapangan berstandar nasional, rumput sintetis premium, dan sirkulasi udara terbaik untuk performa maksimal Anda." />
    <meta name="keywords" content="Karsa Futsal, Lapangan Futsal Palangka Raya, Sewa Lapangan Futsal, Futsal Kalteng, Booking Lapangan Futsal" />
    <meta name="author" content="Karsa Futsal" />
    <meta name="robots" content="index, follow" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="./karsa-logo.png" />

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://solusilokal.github.io/Karsa-Futsal/" />
    <meta property="og:site_name" content="Karsa Futsal" />
    <meta property="og:title" content="Karsa Futsal - Arena Futsal Terbaik di Jantung Kota" />
    <meta property="og:description" content="Bermain dengan semangat juara di Karsa Futsal. Kami menyediakan fasilitas lapangan berstandar nasional, rumput sintetis premium, dan sirkulasi udara terbaik untuk performa maksimal Anda." />
    <meta property="og:image" content="https://solusilokal.github.io/Karsa-Futsal/gambarSEO.png" />
    <meta property="og:image:secure_url" content="https://solusilokal.github.io/Karsa-Futsal/gambarSEO.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="711" />
    <meta property="og:image:height" content="906" />
    <meta property="og:image:alt" content="Karsa Futsal - Arena Futsal Terbaik di Jantung Kota" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://solusilokal.github.io/Karsa-Futsal/" />
    <meta name="twitter:title" content="Karsa Futsal - Arena Futsal Terbaik di Jantung Kota" />
    <meta name="twitter:description" content="Bermain dengan semangat juara di Karsa Futsal. Kami menyediakan fasilitas lapangan berstandar nasional, rumput sintetis premium, dan sirkulasi udara terbaik untuk performa maksimal Anda." />
    <meta name="twitter:image" content="https://solusilokal.github.io/Karsa-Futsal/gambarSEO.png" />
    <meta name="twitter:image:alt" content="Karsa Futsal - Arena Futsal Terbaik di Jantung Kota" />

    <!-- Google Fonts: Manrope -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
${cssContent}
    </style>
  </head>
  <body class="bg-[#F0F4F8] min-h-screen text-[#0D2B4A]">
    <div id="root"></div>
    <script>
${bundledJs}
    </script>
  </body>
</html>`;

fs.writeFileSync('standalone.html', singleHtml, 'utf8');
console.log('✓ standalone.html berhasil dibuat! Total size:', (singleHtml.length / 1024).toFixed(1), 'KB');

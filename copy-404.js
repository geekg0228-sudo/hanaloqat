import fs from 'node:fs';

try {
  if (fs.existsSync('dist/index.html')) {
    fs.copyFileSync('dist/index.html', 'dist/404.html');
  }
} catch (e) {
  console.warn('Could not copy index.html to 404.html:', e);
}

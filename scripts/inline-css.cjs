const fs = require('fs');
const path = require('path');

const distClient = path.resolve('dist/client');
const assetsDir = path.join(distClient, 'assets');

if (!fs.existsSync(assetsDir)) {
  console.log('No assets directory found in dist/client.');
  process.exit(0);
}

const cssFiles = fs.readdirSync(assetsDir).filter(f => f.startsWith('styles-') && f.endsWith('.css'));
if (cssFiles.length === 0) {
  console.log('No styles CSS file found in dist/client/assets.');
  process.exit(0);
}

const cssFileName = cssFiles[0];
const cssPath = path.join(assetsDir, cssFileName);
const cssContent = fs.readFileSync(cssPath, 'utf8');

console.log('Found CSS file:', cssFileName, 'Length:', cssContent.length);

function processHtmlFile(filePath) {
  let html = fs.readFileSync(filePath, 'utf8');

  // Remove preload tag for this CSS file
  html = html.replace(new RegExp('<link[^>]*rel="preload"[^>]*' + cssFileName + '[^>]*>', 'gi'), '');
  html = html.replace(new RegExp('<link[^>]*' + cssFileName + '[^>]*rel="preload"[^>]*>', 'gi'), '');

  // Replace stylesheet link with inline style tag
  const stylesheetRegex = new RegExp('<link[^>]*rel="stylesheet"[^>]*' + cssFileName + '[^>]*>', 'gi');
  html = html.replace(stylesheetRegex, '<style>' + cssContent + '</style>');
  const altStylesheetRegex = new RegExp('<link[^>]*' + cssFileName + '[^>]*rel="stylesheet"[^>]*>', 'gi');
  html = html.replace(altStylesheetRegex, '<style>' + cssContent + '</style>');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Inlined CSS into:', filePath);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      walkDir(full);
    } else if (f.endsWith('.html')) {
      processHtmlFile(full);
    }
  }
}

walkDir(distClient);
console.log('Done inlining CSS!');

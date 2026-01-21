/**
 * Script om PNG iconen te genereren vanuit icon.svg
 * 
 * Vereisten:
 * - ImageMagick geïnstalleerd (https://imagemagick.org/)
 * - Of gebruik een online tool zoals https://realfavicongenerator.net/
 * 
 * Voor ImageMagick op Windows:
 * - Download van https://imagemagick.org/script/download.php
 * - Voeg toe aan PATH
 * 
 * Voor ImageMagick op Mac:
 * - brew install imagemagick
 * 
 * Voor ImageMagick op Linux:
 * - sudo apt-get install imagemagick (Ubuntu/Debian)
 * - sudo yum install ImageMagick (CentOS/RHEL)
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const sizes = [
  { size: 16, name: 'icon-16x16.png' },
  { size: 32, name: 'icon-32x32.png' },
  { size: 180, name: 'apple-icon-180x180.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 512, name: 'icon-512x512.png' },
];

const inputFile = path.join(__dirname, '../public/icon.svg');
const outputDir = path.join(__dirname, '../public');

// Check if ImageMagick is available
try {
  execSync('magick -version', { stdio: 'ignore' });
  console.log('✓ ImageMagick gevonden\n');
} catch (error) {
  console.error('❌ ImageMagick niet gevonden!');
  console.error('\nInstalleer ImageMagick eerst:');
  console.error('  Windows: https://imagemagick.org/script/download.php');
  console.error('  Mac: brew install imagemagick');
  console.error('  Linux: sudo apt-get install imagemagick\n');
  console.error('Of gebruik een online tool: https://realfavicongenerator.net/\n');
  process.exit(1);
}

// Check if input file exists
if (!fs.existsSync(inputFile)) {
  console.error(`❌ Input bestand niet gevonden: ${inputFile}`);
  process.exit(1);
}

console.log('Genereren van PNG iconen...\n');

sizes.forEach(({ size, name }) => {
  const outputFile = path.join(outputDir, name);
  try {
    execSync(
      `magick "${inputFile}" -resize ${size}x${size} "${outputFile}"`,
      { stdio: 'inherit' }
    );
    console.log(`✓ ${name} (${size}x${size})`);
  } catch (error) {
    console.error(`❌ Fout bij genereren van ${name}:`, error.message);
  }
});

console.log('\n✓ Alle iconen gegenereerd!');
console.log('\nBestanden zijn opgeslagen in: public/');

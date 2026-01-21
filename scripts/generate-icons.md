# Iconen genereren

Dit script helpt je om PNG-versies van de favicon te genereren voor betere browser compatibiliteit.

## Optie 1: ImageMagick gebruiken (aanbevolen)

### Installatie

**Windows:**
1. Download ImageMagick van https://imagemagick.org/script/download.php
2. Installeer en voeg toe aan PATH

**Mac:**
```bash
brew install imagemagick
```

**Linux:**
```bash
sudo apt-get install imagemagick  # Ubuntu/Debian
# of
sudo yum install ImageMagick      # CentOS/RHEL
```

### Gebruik

```bash
node scripts/generate-icons.js
```

## Optie 2: Online tool gebruiken

Als je ImageMagick niet wilt installeren, gebruik dan een online tool:

1. Ga naar https://realfavicongenerator.net/
2. Upload `public/icon.svg`
3. Download de gegenereerde bestanden
4. Plaats ze in de `public/` directory met deze namen:
   - `icon-16x16.png`
   - `icon-32x32.png`
   - `apple-icon-180x180.png`
   - `icon-192x192.png`
   - `icon-512x512.png`

## Optie 3: Handmatig met een image editor

Open `public/icon.svg` in je favoriete image editor (Photoshop, GIMP, Figma, etc.) en exporteer als PNG in de volgende formaten:
- 16x16 pixels → `icon-16x16.png`
- 32x32 pixels → `icon-32x32.png`
- 180x180 pixels → `apple-icon-180x180.png`
- 192x192 pixels → `icon-192x192.png`
- 512x512 pixels → `icon-512x512.png`

Plaats alle bestanden in de `public/` directory.

## Verificatie

Na het genereren van de PNG-bestanden, controleer of ze bestaan:
- `public/icon-16x16.png`
- `public/icon-32x32.png`
- `public/apple-icon-180x180.png`
- `public/icon-192x192.png`
- `public/icon-512x512.png`

De site zal automatisch deze PNG's gebruiken wanneer beschikbaar, en terugvallen op SVG voor moderne browsers.

# Public Assets Directory

Place your static assets here:

## Recommended Structure

```
public/
├── images/
│   ├── logo.svg
│   ├── hero/
│   │   ├── hero-image.png
│   │   └── hero-bg.svg
│   ├── features/
│   │   ├── cross-chain.png
│   │   ├── identity.png
│   │   ├── smart-contracts.png
│   │   └── ...
│   └── team/
│       ├── member-1.jpg
│       └── ...
├── icons/
│   ├── favicon.ico
│   ├── icon-192.png
│   └── icon-512.png
├── fonts/ (if using custom fonts)
│   └── CustomFont.woff2
└── docs/
    └── whitepaper.pdf
```

## Usage in Components

```tsx
import Image from 'next/image'

<Image 
  src="/images/hero/hero-image.png" 
  alt="Hero Image"
  width={800}
  height={600}
  priority
/>
```

## Favicon Setup

Replace these files:
- `favicon.ico` - Browser tab icon
- `icon-192.png` - Android icon
- `icon-512.png` - iOS icon

Add to `app/layout.tsx`:
```tsx
<link rel="icon" href="/favicon.ico" />
```

## Image Optimization Tips

1. Use WebP format for better compression
2. Provide multiple sizes for responsive images
3. Use Next.js Image component for automatic optimization
4. Compress images before uploading (use TinyPNG, Squoosh)

## SVG Icons

Store SVG icons here and import them:
```tsx
<Image src="/icons/logo.svg" alt="Logo" width={40} height={40} />
```

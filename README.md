# VETRIC - Modern Web3 Platform Website

A production-ready, fully responsive Next.js website for VETRIC - a futuristic Web3/blockchain platform. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Light/Dark Theme Toggle**: Smooth theme switching with system preference detection (NEW!)
- **Modern Design**: Light and dark themes with cyan/purple gradient accents
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion
- **Multiple Pages**: Home, Features, Pricing, Contact, Login, Signup
- **Reusable Components**: Navbar, Footer, Button, Card, PricingTable, ThemeToggle
- **TypeScript**: Type-safe development
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Optimized bundle and lazy loading
- **LocalStorage Persistence**: Theme preference saved across sessions

## 📁 Project Structure

```
vetric-website/
├── app/
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles and Tailwind
│   ├── features/
│   │   └── page.tsx         # Features page
│   ├── pricing/
│   │   └── page.tsx         # Pricing page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── login/
│   │   └── page.tsx         # Login page
│   └── signup/
│       └── page.tsx         # Signup page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Footer.tsx           # Footer component
│   ├── Button.tsx           # Reusable button component
│   ├── Card.tsx             # Card component with animations
│   ├── PricingTable.tsx     # Pricing table with toggle
│   ├── ThemeProvider.tsx    # Theme context provider (NEW!)
│   └── ThemeToggle.tsx      # Theme toggle button (NEW!)
├── public/                  # Static assets (images, icons)
├── styles/
│   └── globals.css          # Additional global styles
├── package.json
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (with dark mode support)
- **Theme Management**: next-themes
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Inter, Poppins (Google Fonts)

## 📦 Installation

1. **Clone or navigate to the project directory**:
   ```powershell
   cd e:\website
   ```

2. **Install dependencies**:
   ```powershell
   npm install
   ```

## 🏃‍♂️ Running the Development Server

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Building for Production

```powershell
npm run build
npm start
```

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```powershell
   npm install -g vercel
   ```

2. **Deploy**:
   ```powershell
   vercel
   ```

3. **Follow the prompts**:
   - Link to your Vercel account
   - Configure project settings
   - Deploy!

**Alternative: GitHub Integration**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

1. **Install Netlify CLI**:
   ```powershell
   npm install -g netlify-cli
   ```

2. **Build the project**:
   ```powershell
   npm run build
   ```

3. **Deploy**:
   ```powershell
   netlify deploy --prod
   ```

**Alternative: GitHub Integration**
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`

### Deploy to GitHub Pages

**Note**: GitHub Pages is static-only. For full Next.js features, use Vercel or Netlify.

1. **Install gh-pages**:
   ```powershell
   npm install -D gh-pages
   ```

2. **Add to package.json**:
   ```json
   "scripts": {
     "export": "next build && next export",
     "deploy": "npm run export && gh-pages -d out"
   }
   ```

3. **Update next.config.js**:
   ```javascript
   module.exports = {
     output: 'export',
     images: { unoptimized: true }
   }
   ```

4. **Deploy**:
   ```powershell
   npm run deploy
   ```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: { ... },    // Cyan colors
  secondary: { ... },  // Purple colors
}
```

### Fonts
Modify in `app/layout.tsx`:
```typescript
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ ... })
```

### Content
- **Home Page**: `app/page.tsx`
- **Features**: `app/features/page.tsx`
- **Pricing Plans**: `components/PricingTable.tsx`
- **Contact Info**: `app/contact/page.tsx`
- **Footer Links**: `components/Footer.tsx`

## 📝 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_CONTACT_EMAIL=support@vetric.io
```

## 🖼️ Adding Images

Place images in the `public/` folder:

```
public/
├── logo.svg
├── hero-image.png
└── features/
    ├── feature-1.png
    └── feature-2.png
```

Use in components:
```tsx
import Image from 'next/image'

<Image 
  src="/hero-image.png" 
  alt="Hero" 
  width={500} 
  height={500} 
/>
```

## 🔧 Key Components

### Button Component
```tsx
<Button variant="primary" size="lg">
  Click Me
</Button>
```

### Card Component
```tsx
<Card hover={true} delay={0.2}>
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

### PricingTable Component
```tsx
<PricingTable />
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎭 Animation Examples

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## 🐛 Troubleshooting

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder: `Remove-Item -Recurse -Force .next`
- Check Node.js version (recommended: 18+)

### Styling Issues
- Ensure Tailwind is properly configured
- Check `globals.css` is imported in `layout.tsx`
- Clear browser cache

### Theme Not Working
- Check `next-themes` is installed: `npm list next-themes`
- Verify `darkMode: 'class'` in `tailwind.config.js`
- See detailed troubleshooting in `THEME_GUIDE.md`

---

## 🎨 Theme System

VETRIC now supports **light and dark themes**! 

### Quick Start
1. Click the sun/moon icon in the navbar to toggle themes
2. Your preference is automatically saved
3. Supports system theme detection

### Documentation
For complete theme system documentation, see: **[THEME_GUIDE.md](./THEME_GUIDE.md)**

Includes:
- Color palettes for both themes
- Implementation details
- Customization guide
- Testing procedures
- Troubleshooting tips

---

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Feel free to submit issues or pull requests!

## 📞 Support

For questions or support, contact: support@vetric.io

---

**Built with ❤️ for the future of Web3**

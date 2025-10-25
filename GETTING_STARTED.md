# 🚀 VETRIC Website - Quick Start Guide

## Welcome!

This guide will help you get the VETRIC website up and running in under 5 minutes.

---

## ⚡ Prerequisites

Make sure you have these installed:

- **Node.js** (version 18 or higher)
  - Check: `node --version`
  - Download: https://nodejs.org/

- **npm** (comes with Node.js)
  - Check: `npm --version`

- **Git** (optional, for version control)
  - Check: `git --version`
  - Download: https://git-scm.com/

---

## 📥 Step 1: Install Dependencies

Open PowerShell in the project directory:

```powershell
cd e:\website
npm install
```

This will install all required packages (takes 1-2 minutes).

---

## 🏃 Step 2: Start Development Server

```powershell
npm run dev
```

You should see:

```
▲ Next.js 14.1.0
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

**Open your browser** and go to: **http://localhost:3000**

---

## 🎨 Step 3: Explore the Website

Your website has these pages:

1. **Home** - `/` 
   - Hero section with animations
   - Features preview
   - Call-to-action sections

2. **Features** - `/features`
   - 6 key features with details
   - Performance specifications
   - Benefits breakdown

3. **Pricing** - `/pricing`
   - 3 pricing tiers
   - Monthly/Yearly toggle
   - Enterprise section
   - FAQ

4. **Contact** - `/contact`
   - Contact form
   - Contact information
   - Map placeholder

5. **Login** - `/login`
   - Login form
   - Social login options
   - Password visibility toggle

6. **Signup** - `/signup`
   - Registration form
   - Terms acceptance
   - Social signup options

---

## ✏️ Step 4: Customize Content

### Update Home Page Content

Edit `app/page.tsx`:

```tsx
// Change hero title
<h1>Build the Future with Web3</h1>

// Change description
<p>Your custom description here...</p>
```

### Update Pricing Plans

Edit `components/PricingTable.tsx`:

```tsx
const plans = [
  {
    name: 'Basic',
    price: 9.99,          // Change price
    yearlyPrice: 7.99,    // Change yearly price
    features: [           // Add/remove features
      'Feature 1',
      'Feature 2',
    ],
  },
  // ... more plans
]
```

### Update Footer Links

Edit `components/Footer.tsx`:

```tsx
const footerLinks = {
  Solutions: [
    { name: 'Your Link', href: '/your-page' },
    // Add more links
  ],
}
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#00acd6',  // Main cyan color
  },
  secondary: {
    500: '#a855f7',  // Main purple color
  },
}
```

---

## 🏗️ Step 5: Build for Production

When ready to deploy:

```powershell
npm run build
```

This creates an optimized production build.

To test the production build locally:

```powershell
npm start
```

---

## 📝 Common Tasks

### Add a New Page

1. Create file: `app/about/page.tsx`
2. Add content:
```tsx
export default function About() {
  return (
    <div className="pt-16 section-padding">
      <div className="container-custom">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p>Your content here...</p>
      </div>
    </div>
  )
}
```
3. Access at: `http://localhost:3000/about`

### Add Images

1. Place image in `public/images/`
2. Use in component:
```tsx
import Image from 'next/image'

<Image 
  src="/images/your-image.png" 
  alt="Description"
  width={500}
  height={300}
/>
```

### Add Icons

Already installed: Lucide React

```tsx
import { Star, Heart, CheckCircle } from 'lucide-react'

<Star className="w-6 h-6 text-yellow-400" />
```

Browse icons: https://lucide.dev/icons

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```powershell
# Use a different port
npm run dev -- -p 3001
```

### Module Not Found

```powershell
# Reinstall dependencies
Remove-Item -Recurse -Force node_modules
npm install
```

### Build Errors

```powershell
# Clear Next.js cache
Remove-Item -Recurse -Force .next
npm run build
```

### TypeScript Errors

```powershell
# Check TypeScript version
npm list typescript

# Reinstall if needed
npm install -D typescript@latest
```

---

## 🎓 Learning Resources

### Next.js
- Official Docs: https://nextjs.org/docs
- Learn Tutorial: https://nextjs.org/learn
- Examples: https://github.com/vercel/next.js/tree/canary/examples

### Tailwind CSS
- Documentation: https://tailwindcss.com/docs
- Components: https://tailwindui.com/components
- Cheat Sheet: https://nerdcave.com/tailwind-cheat-sheet

### Framer Motion
- Documentation: https://www.framer.com/motion/
- Examples: https://www.framer.com/motion/examples/

### TypeScript
- Handbook: https://www.typescriptlang.org/docs/handbook/
- Next.js + TypeScript: https://nextjs.org/docs/app/building-your-application/configuring/typescript

---

## 📚 Recommended VS Code Extensions

1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **Prettier - Code formatter**
4. **ESLint**
5. **Auto Rename Tag**
6. **GitLens**

Install via VS Code Extensions marketplace.

---

## 🚀 Ready to Deploy?

See `DEPLOYMENT.md` for detailed deployment instructions to:
- ✅ Vercel (recommended)
- ✅ Netlify
- ✅ GitHub Pages
- ✅ Self-hosted server

---

## 💡 Tips for Success

1. **Save often** - Changes auto-reload in dev mode
2. **Use components** - Keep code DRY (Don't Repeat Yourself)
3. **Follow naming conventions** - PascalCase for components
4. **Check console** - Browser DevTools for errors
5. **Git commits** - Commit changes regularly
6. **Test responsive** - Use browser DevTools device mode

---

## 🤝 Need Help?

- Check `README.md` for full documentation
- See `DEPLOYMENT.md` for deployment help
- Review code comments in components
- Search Next.js docs

---

## ✅ Checklist

Before deploying:

- [ ] All pages load correctly
- [ ] Links work properly
- [ ] Forms submit (add backend later)
- [ ] Responsive on mobile/tablet/desktop
- [ ] Images optimized
- [ ] No console errors
- [ ] Meta tags updated
- [ ] Favicon added
- [ ] Analytics setup (optional)
- [ ] Domain configured

---

**Happy Coding! 🎉**

Your VETRIC website is ready to make an impact in the Web3 space!

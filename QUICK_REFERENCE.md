# 🚀 VETRIC Website - Quick Reference Card

## 📍 You Are Here: `e:\website`

---

## ⚡ Essential Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Deploy to Vercel
vercel
```

---

## 🌐 Your Website is Live At:
**http://localhost:3002**

---

## 📁 Key Files to Edit

| What to Change | File to Edit |
|----------------|--------------|
| Home page content | `app/page.tsx` |
| Features | `app/features/page.tsx` |
| Pricing plans | `components/PricingTable.tsx` |
| Contact info | `app/contact/page.tsx` |
| Colors | `tailwind.config.js` |
| Logo | `components/Navbar.tsx` |
| Footer links | `components/Footer.tsx` |
| SEO/title | `app/layout.tsx` |

---

## 🎨 Colors (tailwind.config.js)

```javascript
primary: { 500: '#00acd6' }    // Cyan
secondary: { 500: '#a855f7' }  // Purple
```

---

## 📄 Your Pages

| Page | URL | File |
|------|-----|------|
| Home | `/` | `app/page.tsx` |
| Features | `/features` | `app/features/page.tsx` |
| Pricing | `/pricing` | `app/pricing/page.tsx` |
| Contact | `/contact` | `app/contact/page.tsx` |
| Login | `/login` | `app/login/page.tsx` |
| Signup | `/signup` | `app/signup/page.tsx` |

---

## 🧩 Components

| Component | Location | Purpose |
|-----------|----------|---------|
| Navbar | `components/Navbar.tsx` | Navigation |
| Footer | `components/Footer.tsx` | Footer |
| Button | `components/Button.tsx` | Buttons |
| Card | `components/Card.tsx` | Cards |
| PricingTable | `components/PricingTable.tsx` | Pricing |

---

## 🎯 Quick Tasks

### Change Main Title
📝 File: `app/page.tsx` (Line ~40)
```tsx
<h1>Build the Future with Web3</h1>
```

### Update Pricing
📝 File: `components/PricingTable.tsx` (Line ~20)
```tsx
price: 9.99,  // Change this
```

### Change Contact Email
📝 File: `app/contact/page.tsx` (Line ~170)
```tsx
support@vetric.io  // Change this
```

### Update Footer
📝 File: `components/Footer.tsx` (Line ~10)
```tsx
const footerLinks = { ... }
```

---

## 📚 Documentation Files

| File | What's Inside |
|------|---------------|
| **START_HERE.md** | Start here! |
| README.md | Full docs |
| DEPLOYMENT.md | Deploy guide |
| GETTING_STARTED.md | Quick tutorial |
| CUSTOMIZATION_CHECKLIST.md | Todo list |
| PROJECT_SUMMARY.md | Overview |
| VISUAL_GUIDE.md | Design reference |

---

## 🚀 Deploy to Vercel (2 Minutes)

```powershell
# 1. Install CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Done! ✅
```

---

## 🐛 Quick Fixes

**Can't install?**
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

**Styling broken?**
```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

**Port in use?**
```powershell
# Automatic - uses next port (3001, 3002, etc.)
```

---

## 💡 Pro Tips

✅ Save files → Auto-reload in browser
✅ Press F12 → See console errors
✅ Use `Ctrl+C` → Stop dev server
✅ Check browser DevTools → Test responsive
✅ Read code comments → Helpful info

---

## 🎨 Design System Quick Reference

**Spacing**: 8px grid (space-2, space-4, space-8...)
**Font Display**: Poppins
**Font Body**: Inter
**Primary Color**: Cyan (#00acd6)
**Secondary Color**: Purple (#a855f7)
**Background**: Dark gray (#0a0a0a)

---

## 📱 Test Responsive

1. Open http://localhost:3002
2. Press F12 (DevTools)
3. Click device icon (Ctrl+Shift+M)
4. Select iPhone/iPad/etc.

---

## ✅ Pre-Deploy Checklist

- [ ] Update all content
- [ ] Add your logo
- [ ] Change colors
- [ ] Test all pages
- [ ] Update contact info
- [ ] Add favicon
- [ ] Test on mobile

---

## 🆘 Get Help

**Next.js Issues**: https://nextjs.org/docs
**Tailwind Help**: https://tailwindcss.com/docs
**Icons**: https://lucide.dev
**Deployment**: See DEPLOYMENT.md

---

## 📞 Status

✅ **Dependencies Installed**
✅ **Dev Server Running** (Port 3002)
✅ **All Pages Working**
✅ **Ready to Customize**

---

## 🎉 Your Next Action

1. **Open browser** → http://localhost:3002
2. **Explore pages** → Click around
3. **Open editor** → Start customizing
4. **Read docs** → Check START_HERE.md

---

**Print this card or keep it open for quick reference!**

**Your website is ready to build the future! 🚀**

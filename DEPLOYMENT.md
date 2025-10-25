# VETRIC Website - Complete Deployment Guide

## 🎯 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed
- A code editor (VS Code recommended)

### Step 1: Install Dependencies

Open PowerShell in the project directory:

```powershell
cd e:\website
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Lucide React
- TypeScript

### Step 2: Run Development Server

```powershell
npm run dev
```

Visit `http://localhost:3000` to see your website live!

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Best for Next.js)

#### Why Vercel?
- ✅ Made by the creators of Next.js
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Serverless functions support
- ✅ Preview deployments for every commit

#### Method A: Vercel CLI

1. **Install Vercel CLI**:
```powershell
npm install -g vercel
```

2. **Login to Vercel**:
```powershell
vercel login
```

3. **Deploy**:
```powershell
vercel
```

4. **Follow the prompts**:
   - Set up and deploy: Y
   - Which scope: (your account)
   - Link to existing project: N
   - Project name: vetric-website
   - Directory: ./
   - Override settings: N

5. **Production deployment**:
```powershell
vercel --prod
```

Your site will be live at: `https://vetric-website.vercel.app`

#### Method B: Vercel Dashboard (GitHub Integration)

1. **Push code to GitHub**:
```powershell
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/vetric-website.git
git push -u origin main
```

2. **Go to [vercel.com](https://vercel.com)**

3. **Click "Add New Project"**

4. **Import your GitHub repository**

5. **Configure**:
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Environment Variables: (add if needed)

6. **Click "Deploy"**

Done! Your site is live with automatic deployments on every push.

---

### Option 2: Netlify

#### Why Netlify?
- ✅ Great UI/UX
- ✅ Form handling
- ✅ Serverless functions
- ✅ Free SSL
- ✅ Easy custom domains

#### Method A: Netlify CLI

1. **Install Netlify CLI**:
```powershell
npm install -g netlify-cli
```

2. **Login**:
```powershell
netlify login
```

3. **Initialize**:
```powershell
netlify init
```

4. **Build**:
```powershell
npm run build
```

5. **Deploy**:
```powershell
netlify deploy --prod
```

#### Method B: Netlify Dashboard

1. **Build the project**:
```powershell
npm run build
```

2. **Go to [netlify.com](https://netlify.com)**

3. **Drag and drop the `.next` folder**

OR

1. **Connect to GitHub** (same as Vercel)

2. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**

---

### Option 3: GitHub Pages (Static Export Only)

⚠️ **Note**: This method exports a static version. Some Next.js features (API routes, ISR) won't work.

#### Setup

1. **Update `next.config.js`**:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/vetric-website', // Replace with your repo name
}

module.exports = nextConfig
```

2. **Install gh-pages**:
```powershell
npm install -D gh-pages
```

3. **Add scripts to `package.json`**:
```json
{
  "scripts": {
    "export": "next build",
    "deploy": "npm run export && gh-pages -d out"
  }
}
```

4. **Deploy**:
```powershell
npm run deploy
```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

Your site will be at: `https://yourusername.github.io/vetric-website`

---

### Option 4: Self-Hosted (VPS/Server)

#### Requirements
- A server (DigitalOcean, AWS, etc.)
- Node.js installed on server
- Domain name (optional)

#### Steps

1. **Build the project**:
```powershell
npm run build
```

2. **Copy files to server**:
```powershell
scp -r .next package.json server_user@server_ip:/var/www/vetric
```

3. **SSH into server**:
```bash
ssh server_user@server_ip
cd /var/www/vetric
```

4. **Install dependencies**:
```bash
npm install --production
```

5. **Start with PM2** (process manager):
```bash
npm install -g pm2
pm2 start npm --name "vetric" -- start
pm2 save
pm2 startup
```

6. **Setup Nginx reverse proxy**:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. **Enable HTTPS with Certbot**:
```bash
sudo certbot --nginx -d yourdomain.com
```

---

## 🔧 Post-Deployment Checklist

### 1. Custom Domain Setup

#### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records (A/CNAME)

#### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

### 2. Environment Variables

Add these if needed:

```env
NEXT_PUBLIC_API_URL=https://api.vetric.io
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=support@vetric.io
```

Add in:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables

### 3. SEO & Analytics

1. **Update `app/layout.tsx`** metadata
2. **Add Google Analytics** (optional):
```tsx
// In app/layout.tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
```

3. **Create `robots.txt`** in `public/`:
```txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

4. **Generate sitemap** (optional):
```powershell
npm install next-sitemap
```

### 4. Performance Optimization

1. **Check Lighthouse score**:
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit

2. **Optimize images**:
   - Use WebP format
   - Add proper alt text
   - Use Next.js Image component

3. **Enable compression**:
   - Automatically handled by Vercel/Netlify
   - For self-hosted, enable gzip in Nginx

---

## 📊 Monitoring & Maintenance

### Analytics Setup

1. **Vercel Analytics** (built-in):
   - Enable in Vercel Dashboard
   - No code changes needed

2. **Google Analytics**:
```tsx
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

### Error Monitoring

Consider adding:
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Hotjar**: User behavior

---

## 🆘 Troubleshooting

### Build Fails

1. **Clear cache**:
```powershell
Remove-Item -Recurse -Force .next
Remove-Item -Recurse -Force node_modules
npm install
```

2. **Check Node version**:
```powershell
node --version  # Should be 18+
```

### Styling Issues

1. **Purge Tailwind cache**:
```powershell
npm run build
```

2. **Check Tailwind config** is properly set

### Performance Issues

1. **Optimize images**: Convert to WebP
2. **Code splitting**: Use dynamic imports
3. **Enable caching**: Configure headers

---

## 🎉 Success!

Your VETRIC website is now live! 

### Next Steps:
1. ✅ Set up custom domain
2. ✅ Add analytics
3. ✅ Set up monitoring
4. ✅ Configure backups
5. ✅ Plan content updates

### Useful Links:
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**Need Help?**
- Next.js Discord: https://nextjs.org/discord
- Stack Overflow: Tag `next.js`
- GitHub Issues: Create an issue in your repo

Happy deploying! 🚀

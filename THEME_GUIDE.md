# 🎨 VETRIC Theme System Guide

## Overview

VETRIC now supports **light and dark themes** with a smooth toggle system. The theme system uses `next-themes` for state management and Tailwind CSS's `dark:` variant for styling.

---

## 🌓 Features

✅ **Smooth Theme Switching** - Animated toggle button with sun/moon icons  
✅ **System Preference Detection** - Automatically detects user's OS theme preference  
✅ **LocalStorage Persistence** - Remembers user's theme choice across sessions  
✅ **No Flash on Load** - Prevents theme flash on page load (FOUC prevention)  
✅ **Fully Responsive** - Theme toggle works on all screen sizes  
✅ **Accessible** - ARIA labels and keyboard navigation support  

---

## 🎯 How It Works

### 1. **Theme Provider**
Located in: `components/ThemeProvider.tsx`

Wraps the entire application and provides theme context:
```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

### 2. **Theme Toggle Button**
Located in: `components/ThemeToggle.tsx`

Features:
- Animated icon rotation (sun ↔ moon)
- Smooth scale transitions on hover/tap
- Mounted state check to prevent hydration mismatch
- Light and dark mode styling

### 3. **Tailwind Dark Mode**
Configured in: `tailwind.config.js`

```javascript
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  // ... rest of config
}
```

---

## 🎨 Color System

### Dark Mode Colors (Default)
```css
Background: #030712 (gray-950)
Card: rgba(17, 24, 39, 0.5) (gray-900/50)
Border: #1f2937 (gray-800)
Text: #ffffff (white)
Muted Text: #9ca3af (gray-400)
```

### Light Mode Colors
```css
Background: #ffffff (white)
Card: rgba(249, 250, 251, 0.8) (gray-100/80)
Border: #e5e7eb (gray-200)
Text: #111827 (gray-900)
Muted Text: #6b7280 (gray-600)
```

### Accent Colors (Same in Both Modes)
```css
Primary (Cyan): #00acd6
Secondary (Purple): #a855f7
Gradients: from-primary-500 to-secondary-500
```

---

## 📝 Usage Guidelines

### Adding Dark Mode Support to Components

Use Tailwind's `dark:` prefix for dark mode styles:

```tsx
// Background
<div className="bg-white dark:bg-gray-950">

// Text
<p className="text-gray-900 dark:text-white">

// Borders
<div className="border-gray-200 dark:border-gray-800">

// Hover states
<button className="hover:bg-gray-100 dark:hover:bg-gray-800">
```

### Custom CSS Classes

All utility classes in `globals.css` support dark mode:

- `.glass-effect` - Adapts to light/dark background
- `.btn-secondary` - Changes color based on theme
- Scrollbar - Changes track color based on theme

---

## 🔧 Implementation Details

### Files Modified

1. **package.json** - Added `next-themes` dependency
2. **tailwind.config.js** - Enabled `darkMode: 'class'`
3. **app/layout.tsx** - Wrapped with ThemeProvider
4. **app/globals.css** - Added dark: variants to all classes
5. **components/Navbar.tsx** - Added ThemeToggle button
6. **components/Footer.tsx** - Updated with dark mode colors
7. **All page files** - Updated color classes with dark: variants

### New Components Created

- `components/ThemeProvider.tsx` - Theme context wrapper
- `components/ThemeToggle.tsx` - Toggle button with animations

---

## 🎬 Animations

The theme toggle includes these animations:

```tsx
// Icon rotation (180deg spin)
animate={{ rotate: theme === 'dark' ? 0 : 180 }}

// Icon scale (fade in/out effect)
animate={{ scale: theme === 'dark' ? 1 : 0 }}

// Button hover
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Body Transition
Smooth 300ms color transition on theme change:
```css
body {
  @apply transition-colors duration-300;
}
```

---

## 🧪 Testing

### Manual Testing Steps

1. **Toggle Button**
   - Click the sun/moon button in the navbar
   - Verify smooth icon animation
   - Check all pages (Home, Features, Pricing, Contact, Login, Signup)

2. **LocalStorage**
   - Toggle theme to light
   - Refresh page
   - Verify theme persists

3. **System Preference**
   - Clear localStorage: `localStorage.removeItem('theme')`
   - Refresh page
   - Verify it follows system theme

4. **Responsive Design**
   - Test on mobile (toggle button next to menu)
   - Test on desktop (toggle button with Login/Signup)

5. **Component Coverage**
   - ✅ Navbar (glass effect adapts)
   - ✅ Hero section (background gradients)
   - ✅ Feature cards (borders and backgrounds)
   - ✅ Pricing cards (glass effect)
   - ✅ Forms (input fields and labels)
   - ✅ Footer (links and social icons)

---

## 🚀 Browser DevTools Testing

### Check Theme Class
```javascript
// Dark mode
document.documentElement.classList.contains('dark') // true

// Light mode
document.documentElement.classList.contains('dark') // false
```

### Check LocalStorage
```javascript
localStorage.getItem('theme') // 'dark' or 'light' or 'system'
```

---

## 🎨 Customization

### Change Default Theme

Edit `components/ThemeProvider.tsx`:
```tsx
<NextThemesProvider 
  attribute="class" 
  defaultTheme="dark"  // Change to 'light' or 'system'
  enableSystem
>
```

### Add More Color Variants

1. Update color in `tailwind.config.js`
2. Add dark: variant in components:
```tsx
className="bg-custom-light dark:bg-custom-dark"
```

### Modify Transition Speed

Edit `app/globals.css`:
```css
body {
  @apply transition-colors duration-500; /* Change 300 to 500 */
}
```

---

## 🐛 Troubleshooting

### Issue: Flash of Unstyled Content (FOUC)

**Solution**: The `suppressHydrationWarning` prop is added to `<html>` tag:
```tsx
<html suppressHydrationWarning>
```

### Issue: Theme Doesn't Persist

**Solution**: Check localStorage is enabled in browser settings.

### Issue: Toggle Button Not Visible

**Solution**: The `mounted` state check prevents hydration issues:
```tsx
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return <div className="w-10 h-10" />;
```

### Issue: Colors Not Changing

**Solution**: Ensure `dark:` prefix is used correctly:
```tsx
// ❌ Wrong
className="bg-gray-900"

// ✅ Correct
className="bg-white dark:bg-gray-900"
```

---

## 📦 Dependencies

```json
{
  "next-themes": "^0.x.x" // Automatically installed
}
```

---

## 🎯 Best Practices

1. **Always use both light and dark variants:**
   ```tsx
   className="text-gray-900 dark:text-white"
   ```

2. **Test in both themes during development:**
   - Toggle frequently while building
   - Check contrast ratios

3. **Maintain consistent spacing:**
   - Light and dark mode should have same layout
   - Only colors change, not structure

4. **Use semantic color names:**
   - `text-primary-500` over `text-blue-500`
   - Easier to maintain

5. **Leverage custom classes:**
   - `.glass-effect` already supports both modes
   - Use `.btn-primary` and `.btn-secondary`

---

## 📊 Statistics

- **Components Updated**: 10 (Navbar, Footer, ThemeToggle, Button, Card, PricingTable + all pages)
- **Pages Updated**: 6 (Home, Features, Pricing, Contact, Login, Signup)
- **Color Classes Modified**: ~150+ instances
- **New Files Added**: 2 (ThemeProvider.tsx, ThemeToggle.tsx)
- **Total Lines Changed**: ~500+

---

## ✅ Checklist

- [x] Install next-themes package
- [x] Enable Tailwind dark mode (class-based)
- [x] Create ThemeProvider wrapper
- [x] Create ThemeToggle component with animations
- [x] Update app/layout.tsx with provider
- [x] Add theme toggle to Navbar
- [x] Update globals.css with dark variants
- [x] Update all page components
- [x] Update Footer component
- [x] Test theme persistence
- [x] Test system preference detection
- [x] Test on all pages
- [x] Test responsive design
- [x] Add documentation

---

## 🎉 Result

Your VETRIC website now has a **fully functional light/dark theme system** with:
- ☀️ Beautiful light mode with clean, modern aesthetics
- 🌙 Sleek dark mode with vibrant gradients
- 🎨 Smooth animations and transitions
- 💾 Persistent user preferences
- 📱 Responsive across all devices
- ♿ Accessible and keyboard-friendly

**Test it now at: http://localhost:3003**

---

## 📚 Additional Resources

- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
- [Tailwind Dark Mode Guide](https://tailwindcss.com/docs/dark-mode)
- [Framer Motion Animation](https://www.framer.com/motion/)
- [WCAG Color Contrast](https://webaim.org/resources/contrastchecker/)

---

**Last Updated**: October 26, 2025  
**Version**: 1.0.0  
**Status**: ✅ Production Ready

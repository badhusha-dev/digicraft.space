# DigiCraft.space - Technical Development Guide

## 🚀 Quick Start
This is a React + TypeScript application built with Vite, featuring a modern UI with Tailwind CSS and shadcn/ui components.

## 📁 Project Structure Overview

### Frontend (Client)
```
client/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Main page components
│   ├── data/               # Static data and content
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries
│   └── utils/              # Helper functions
```

### Backend (Server)
```
server/
├── index.ts                # Main server entry point
├── routes.ts               # API route definitions
└── storage.ts              # Data storage logic
```

## 🎯 Common Change Scenarios

### 1. **Adding/Modifying Content (Text, Images, Data)**

#### **Hero Section & Main Content**
- **File:** `client/src/pages/Home.tsx`
- **What to change:** Update text content, images, CTAs
- **Look for:** `<h1>`, `<p>`, `<img>` tags in the main sections

#### **Services Section**
- **File:** `client/src/data/services.ts`
- **What to change:** Service names, descriptions, icons
- **Usage:** Modify the `services` array

#### **Solutions Section**
- **File:** `client/src/data/solutions.ts`
- **What to change:** Solution details, features, pricing
- **Usage:** Update the `solutions` array

#### **Testimonials**
- **File:** `client/src/data/testimonials.ts`
- **What to change:** Customer quotes, names, companies
- **Usage:** Modify the `testimonials` array

#### **Blog Posts**
- **File:** `client/src/data/blogPosts.ts`
- **What to change:** Blog titles, content, dates, authors
- **Usage:** Update the `blogPosts` array

#### **Careers**
- **File:** `client/src/data/careers.ts`
- **What to change:** Job positions, requirements, descriptions
- **Usage:** Modify the `careers` array

### 2. **Changing Page Layout & Structure**

#### **Navigation Menu**
- **File:** `client/src/components/Navbar.tsx`
- **What to change:** Menu items, links, logo
- **Look for:** `navItems` array and navigation structure

#### **Footer**
- **File:** `client/src/components/Footer.tsx`
- **What to change:** Footer links, social media, company info
- **Look for:** Footer sections and link arrays

#### **Page Layout**
- **File:** `client/src/components/Layout.tsx`
- **What to change:** Overall page structure, sidebar, main content area
- **Look for:** Layout wrapper and structure components

### 3. **Styling & UI Changes**

#### **Global Styles**
- **File:** `client/src/index.css`
- **What to change:** Global CSS, custom properties, base styles
- **Look for:** CSS variables and global styling rules

#### **Tailwind Configuration**
- **File:** `tailwind.config.ts`
- **What to change:** Colors, fonts, spacing, custom utilities
- **Look for:** `theme` section and custom configurations

#### **Component Styling**
- **File:** `client/src/components/ui/` (any component file)
- **What to change:** Individual component styles, variants
- **Look for:** `className` props and Tailwind classes

### 4. **Adding New Pages**

#### **Step 1: Create Page Component**
- **Location:** `client/src/pages/NewPage.tsx`
- **Template:** Use existing pages as reference (e.g., `About.tsx`)

#### **Step 2: Add to Routing**
- **File:** `client/src/App.tsx`
- **What to change:** Add new route in the router configuration
- **Look for:** `createBrowserRouter` and route definitions

#### **Step 3: Add Navigation Link**
- **File:** `client/src/components/Navbar.tsx`
- **What to change:** Add new menu item in `navItems` array

### 5. **API & Backend Changes**

#### **API Routes**
- **File:** `server/routes.ts`
- **What to change:** Add new endpoints, modify existing ones
- **Look for:** Express route definitions

#### **Server Configuration**
- **File:** `server/index.ts`
- **What to change:** Server settings, middleware, port configuration
- **Look for:** Express app setup and configuration

#### **Database Schema**
- **File:** `shared/schema.ts`
- **What to change:** Data models, table structures
- **Look for:** Drizzle schema definitions

### 6. **SEO & Meta Changes**

#### **Page Meta Tags**
- **File:** `client/src/components/SEO.tsx`
- **What to change:** Default meta tags, titles, descriptions
- **Look for:** `SEO` component usage in pages

#### **Sitemap**
- **File:** `public/sitemap.xml`
- **What to change:** Add new pages, update existing URLs

#### **Robots.txt**
- **File:** `public/robots.txt`
- **What to change:** Crawling rules, disallow paths

## 🔧 Development Workflow

### **For Content Updates:**
1. **Text/Images:** Modify data files in `client/src/data/`
2. **Layout:** Update component files in `client/src/components/`
3. **Styling:** Adjust CSS classes and Tailwind utilities

### **For New Features:**
1. **UI Components:** Create in `client/src/components/`
2. **Pages:** Add to `client/src/pages/`
3. **Data:** Update relevant data files
4. **Routing:** Modify `client/src/App.tsx`

### **For Backend Changes:**
1. **API Routes:** Update `server/routes.ts`
2. **Database:** Modify `shared/schema.ts`
3. **Server Config:** Update `server/index.ts`

## 📝 File Modification Examples

### **Adding a New Service:**
```typescript
// In client/src/data/services.ts
export const services = [
  // ... existing services
  {
    title: "New Service",
    description: "Service description here",
    icon: "icon-name",
    features: ["Feature 1", "Feature 2"]
  }
]
```

### **Changing Hero Text:**
```tsx
// In client/src/pages/Home.tsx
<h1 className="text-4xl font-bold">
  New Hero Title Here
</h1>
<p className="text-lg text-muted-foreground">
  New hero description here
</p>
```

### **Adding Navigation Item:**
```tsx
// In client/src/components/Navbar.tsx
const navItems = [
  // ... existing items
  { name: "New Page", href: "/new-page" }
]
```

## 🚨 Important Notes

- **Never modify:** `package.json`, `vite.config.ts`, `tsconfig.json` unless you know what you're doing
- **Always backup:** Make a copy before making major changes
- **Test locally:** Run `npm run dev` to see changes before committing
- **Component library:** Uses shadcn/ui - refer to their docs for component customization

## 🔍 Finding Specific Content

### **Search for Text:**
- Use your editor's search function (Ctrl+Shift+F)
- Search in specific directories for targeted changes
- Look for hardcoded text in component files

### **Search for Components:**
- Check `client/src/components/` for reusable components
- Look for component imports in page files
- Use component names to trace usage

## 📞 Need Help?

If you're unsure about making changes:
1. **Check this README first** - it covers most common scenarios
2. **Look at similar existing code** - use it as a template
3. **Search the codebase** - find examples of what you want to do
4. **Make small changes first** - test incrementally

---

**Remember:** This app is built with modern React patterns. Most changes involve updating data files or component props rather than complex logic modifications.

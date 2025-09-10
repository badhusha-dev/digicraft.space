# DigiCraft.space - Software Solutions Company Website

A modern, animated website for DigiCraft.space, a software solutions company. Built with React, TypeScript, and Bootstrap 5, featuring comprehensive service offerings, pricing information, portfolio showcase, and contact functionality with a complete DigiCraft brand theme system.

![DigiCraft.space](https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600)

## 🚀 Features

### Core Features
- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Complete theme switching with DigiCraft brand colors
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and structured data
- **Performance Focused**: Fast loading with optimized assets and lazy loading
- **Accessibility Ready**: WCAG compliant with keyboard navigation and screen reader support
- **DigiCraft Brand Theme**: Complete brand integration with logo-based color system

### Business Features
- **Service Portfolio**: Comprehensive showcase of software development services
- **Pricing Transparency**: Clear pricing packages (MVP, Squad, Support)
- **Solution Packages**: Pre-designed solutions for common business needs
- **Company Information**: About page with team, values, and technology stack
- **Career Opportunities**: Job listings with application functionality
- **Contact Forms**: Streamlined contact form with project details
- **Blog System**: Content management for insights and tutorials
- **Client Testimonials**: Customer testimonials with branded avatar system

### Technical Features
- **Type Safety**: Full TypeScript implementation
- **Modern React**: Hooks, functional components, and modern patterns
- **Form Handling**: Client-side validation with error handling
- **Routing**: Client-side routing with Wouter
- **Styling**: Bootstrap 5 with custom DigiCraft design system
- **Component Library**: Custom components built on Bootstrap 5
- **Analytics**: Built-in page view and event tracking
- **SVG Logo System**: Scalable logo with proper theme integration

## 🎨 DigiCraft Brand System

### Brand Colors (Based on Logo Design)
- **Primary Purple**: `#3B0A45` - Deep purple background from logo
- **Logo Yellow**: `#F59E0B` - Yellow/gold element from logo
- **Logo Purple**: `#8B5CF6` - Purple element from logo
- **Logo Magenta**: `#EC4899` - Magenta/pink element from logo

### Theme Features
- **Complete Dark Mode**: Full dark theme with proper text visibility
- **Brand Gradients**: Multiple gradient combinations using logo colors
- **Utility Classes**: DigiCraft-specific CSS classes (`.dc-gradient-primary`, `.dc-logo-yellow`, etc.)
- **Logo Integration**: SVG logo with hover effects and proper scaling
- **Consistent Branding**: Unified color system across all components

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Full type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Bootstrap 5** - Modern CSS framework with custom DigiCraft theme
- **Custom Components** - High-quality component library built on Bootstrap
- **Wouter** - Lightweight client-side routing
- **Lucide React** - Beautiful icon library

### Development Tools
- **Vite** - Build tool and dev server
- **TypeScript** - Type checking and compilation
- **ESLint** - Code linting and quality

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/digicraft-space.git
   cd digicraft-space
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

The application will automatically reload when you make changes to the code.

## 🏗 Project Structure

```
digicraft-space/
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navbar.tsx     # Navigation with DigiCraft logo
│   │   │   ├── Footer.tsx     # Footer with brand integration
│   │   │   ├── Layout.tsx     # App layout wrapper
│   │   │   ├── ThemeProvider.tsx # DigiCraft theme system
│   │   │   ├── DigiCraftThemeDemo.tsx # Theme showcase
│   │   │   └── ...            # Other components
│   │   ├── pages/             # Route pages
│   │   │   ├── Home.tsx       # Homepage with testimonials
│   │   │   ├── Services.tsx   # Services page
│   │   │   ├── Solutions.tsx  # Solutions page
│   │   │   ├── Work.tsx       # Portfolio/work page
│   │   │   ├── Pricing.tsx    # Pricing page
│   │   │   ├── About.tsx      # About page
│   │   │   ├── Blog.tsx       # Blog listing
│   │   │   ├── Careers.tsx    # Career opportunities
│   │   │   └── Contact.tsx    # Contact form (simplified)
│   │   ├── data/              # Static data and content
│   │   │   ├── services.ts    # Service definitions
│   │   │   ├── solutions.ts   # Solution packages
│   │   │   ├── testimonials.ts# Customer testimonials with avatars
│   │   │   ├── blogPosts.ts   # Blog content
│   │   │   └── careers.ts     # Job listings
│   │   ├── utils/             # Utility functions
│   │   │   ├── validation.ts  # Form validation
│   │   │   └── analytics.ts   # Analytics helpers
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Shared utilities
│   │   ├── index.css          # DigiCraft theme system
│   │   └── App.tsx            # Main app component
│   ├── public/
│   │   ├── logo.svg           # DigiCraft SVG logo
│   │   ├── images/
│   │   │   └── people/        # Testimonial avatars
│   │   │       ├── marcus-chen.svg
│   │   │       ├── sarah-williams.svg
│   │   │       └── david-rodriguez.svg
│   │   └── index.html         # HTML template with favicon
│   └── dist/                  # Production build
├── public/                   # Static assets
│   ├── robots.txt            # Search engine directives
│   └── sitemap.xml           # Site structure for SEO
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite build configuration
└── README.md                 # This file
```

## 📄 Available Pages

### Public Pages
- **/** - Homepage with hero, services preview, process, testimonials
- **/services** - Comprehensive service offerings with features
- **/solutions** - Pre-packaged solutions (MVP Sprint, Scale-Up Kit, etc.)
- **/work** - Company capabilities and technology stack showcase
- **/pricing** - Transparent pricing with FAQ section
- **/about** - Company information, founder bio, values, and tech stack
- **/blog** - Blog articles with category filtering
- **/careers** - Job opportunities with application forms
- **/contact** - Simplified contact form with project details

### Key Features by Page
- **Responsive design** - All pages work perfectly on mobile and desktop
- **SEO optimization** - Each page has unique meta tags and descriptions
- **Smooth animations** - Hover effects, page transitions, and scroll animations
- **Form validation** - Client-side validation with error handling
- **Theme support** - Dark/light mode with DigiCraft brand colors
- **Brand consistency** - Logo and colors integrated throughout

## 🎨 Design System

### DigiCraft Brand Colors
- **Primary**: `#3B0A45` - Deep purple background from logo
- **Secondary**: `#EC4899` - Magenta from logo elements
- **Info**: `#8B5CF6` - Purple from logo elements
- **Warning**: `#F59E0B` - Yellow from logo elements

### Brand Gradients
- **Primary Gradient**: Yellow → Magenta → Purple
- **Button Gradient**: Yellow → Magenta
- **Accent Gradient**: Purple → Magenta
- **Logo Gradient**: White → Yellow → Purple → Magenta

### Typography
- **Font Family**: Inter - Modern, readable typography
- **Font Weights**: 300-700 range for various text hierarchies

### Components
- **Cards**: Hover animations with DigiCraft shadows
- **Buttons**: DigiCraft gradient backgrounds with transform effects
- **Forms**: Clean inputs with DigiCraft focus states
- **Navigation**: Sticky navbar with DigiCraft logo and theme toggle
- **Testimonials**: Branded avatars with fallback system

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the root directory:

```bash
# Development
NODE_ENV="development"
```

### Customization

#### Updating Company Information
Edit the data files in `client/src/data/`:
- `services.ts` - Modify service offerings
- `solutions.ts` - Update solution packages
- `testimonials.ts` - Add/edit customer testimonials with avatars
- `careers.ts` - Update job positions

#### Styling Changes
- **Colors**: Update `client/src/index.css` CSS variables
- **Theme**: Modify `client/src/components/ThemeProvider.tsx`
- **Fonts**: Modify font imports in `client/index.html` and CSS files
- **Components**: Edit component files in `client/src/components/`

#### Content Updates
- **SEO**: Update meta tags in individual page components
- **Images**: Replace image URLs in components and data files
- **Copy**: Edit text content directly in component files
- **Logo**: Update `client/public/logo.svg` for brand changes

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deploy to Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `client/dist`
4. Deploy automatically on git push

### Environment Setup
- No backend configuration required
- Ready for static hosting
- SVG logo optimized for all devices

## 📊 Performance

### Optimization Features
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Responsive images with proper formats
- **SVG Optimization**: Scalable logo and avatar system
- **Bundle Analysis**: Built-in bundle analysis tools
- **Caching**: Service worker and browser caching strategies

### Monitoring
- Built-in analytics tracking for page views and events
- Performance monitoring with Web Vitals
- Error tracking and reporting

## 🎯 Recent Updates

### Brand Integration
- ✅ Complete DigiCraft logo integration (SVG format)
- ✅ Brand color system based on logo design
- ✅ Dark mode with proper text visibility
- ✅ Theme utility classes for consistent branding

### Contact Form Improvements
- ✅ Removed Project Budget field for simplified experience
- ✅ Streamlined form with essential fields only
- ✅ Better validation and error handling

### Testimonials Enhancement
- ✅ Individual branded avatars for each testimonial
- ✅ Fallback system for missing images
- ✅ SVG avatars using DigiCraft brand colors
- ✅ Improved error handling and loading

### Technical Improvements
- ✅ Enhanced dark mode text visibility
- ✅ Better SVG logo scaling and responsiveness
- ✅ Improved theme system with CSS variables
- ✅ Updated favicon to use SVG logo

## 🤝 Contributing

### Development Guidelines
1. **Code Style**: Follow existing TypeScript and React patterns
2. **Components**: Use functional components with hooks
3. **Styling**: Use Bootstrap 5 classes with DigiCraft theme system
4. **Types**: Maintain full TypeScript coverage
5. **Testing**: Add tests for new features
6. **Brand Consistency**: Use DigiCraft colors and components

### Making Changes
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

### Code Quality
- Run `npm run lint` before committing
- Ensure TypeScript compilation passes
- Test on multiple device sizes
- Check accessibility with screen readers
- Verify dark mode compatibility

## 📞 Support

### Getting Help
- **Issues**: Report bugs via GitHub Issues
- **Questions**: Contact via hello@digicraft.space
- **Documentation**: Check this README and code comments

### Common Issues
- **Port conflicts**: Change port in Vite configuration
- **Build errors**: Clear node_modules and reinstall dependencies
- **Styling issues**: Check Bootstrap CSS configuration and DigiCraft theme variables
- **Logo issues**: Ensure SVG logo is properly referenced in public folder

## 📝 License

This project is proprietary software owned by DigiCraft.space. All rights reserved.

## 🙏 Acknowledgments

- **Bootstrap 5** - Modern CSS framework
- **React Community** - Amazing ecosystem and tools
- **Lucide React** - Icon library
- **DigiCraft Design Team** - Brand colors and logo design

---

**Built with ❤️ by the DigiCraft.space team**

For more information, visit [digi-craft.digicraft.space](https://digi-craft.digicraft.space) or contact us at hello@digicraft.space.
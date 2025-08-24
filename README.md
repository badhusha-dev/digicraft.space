# DigiCraft.space - Software Solutions Company Website

A modern, animated website for DigiCraft.space, a software solutions company. Built with React, TypeScript, and Bootstrap 5, featuring comprehensive service offerings, pricing information, portfolio showcase, and contact functionality.

![DigiCraft.space](https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600)

## 🚀 Features

### Core Features
- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Complete theme switching with system preference detection
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and structured data
- **Performance Focused**: Fast loading with optimized assets and lazy loading
- **Accessibility Ready**: WCAG compliant with keyboard navigation and screen reader support

### Business Features
- **Service Portfolio**: Comprehensive showcase of software development services
- **Pricing Transparency**: Clear pricing packages (MVP, Squad, Support)
- **Solution Packages**: Pre-designed solutions for common business needs
- **Company Information**: About page with team, values, and technology stack
- **Career Opportunities**: Job listings with application functionality
- **Contact Forms**: Multi-step contact and application forms with validation
- **Blog System**: Content management for insights and tutorials

### Technical Features
- **Type Safety**: Full TypeScript implementation across frontend and backend
- **Modern React**: Hooks, functional components, and modern patterns
- **State Management**: TanStack Query for server state and caching
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: Client-side routing with Wouter
- **Styling**: Bootstrap 5 with custom DigiCraft design system
- **Component Library**: Custom components built on Bootstrap 5
- **Analytics**: Built-in page view and event tracking

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Full type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Bootstrap 5** - Modern CSS framework with custom DigiCraft theme
- **Custom Components** - High-quality component library built on Bootstrap
- **Framer Motion** - Animation library for smooth transitions
- **TanStack Query** - Server state management and caching
- **React Hook Form** - Performant forms with easy validation
- **Wouter** - Lightweight client-side routing

### Backend & Infrastructure
- **Express.js** - Web application framework
- **TypeScript** - Backend type safety
- **Drizzle ORM** - Type-safe database queries
- **PostgreSQL** - Production database
- **Zod** - Schema validation
- **Session Management** - User authentication ready

### Development Tools
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **TypeScript** - Type checking and compilation
- **esbuild** - Fast server-side bundling

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
   http://localhost:5000
   ```

The application will automatically restart when you make changes to the code.

## 🏗 Project Structure

```
digicraft-space/
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── ui/            # Custom UI components
│   │   │   ├── Navbar.tsx     # Navigation component
│   │   │   ├── Footer.tsx     # Footer component
│   │   │   ├── Layout.tsx     # App layout wrapper
│   │   │   └── ...            # Other components
│   │   ├── pages/             # Route pages
│   │   │   ├── Home.tsx       # Homepage
│   │   │   ├── Services.tsx   # Services page
│   │   │   ├── Solutions.tsx  # Solutions page
│   │   │   ├── Work.tsx       # Portfolio/work page
│   │   │   ├── Pricing.tsx    # Pricing page
│   │   │   ├── About.tsx      # About page
│   │   │   ├── Blog.tsx       # Blog listing
│   │   │   ├── Careers.tsx    # Career opportunities
│   │   │   └── Contact.tsx    # Contact form
│   │   ├── data/              # Static data and content
│   │   │   ├── services.ts    # Service definitions
│   │   │   ├── solutions.ts   # Solution packages
│   │   │   ├── testimonials.ts# Customer testimonials
│   │   │   ├── blogPosts.ts   # Blog content
│   │   │   └── careers.ts     # Job listings
│   │   ├── utils/             # Utility functions
│   │   │   ├── validation.ts  # Form validation
│   │   │   └── analytics.ts   # Analytics helpers
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Shared utilities
│   │   └── App.tsx            # Main app component
│   └── index.html             # HTML template
├── server/                    # Backend Express application
│   ├── index.ts              # Server entry point
│   ├── routes.ts             # API routes
│   ├── storage.ts            # Data storage interface
│   └── vite.ts               # Vite development setup
├── shared/                   # Shared types and schemas
│   └── schema.ts             # Database schemas
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
- **/contact** - Contact form with project details and budget

### Key Features by Page
- **Responsive design** - All pages work perfectly on mobile and desktop
- **SEO optimization** - Each page has unique meta tags and descriptions
- **Smooth animations** - Hover effects, page transitions, and scroll animations
- **Form validation** - Client-side validation with error handling
- **Theme support** - Dark/light mode across all pages

## 🎨 Design System

### Colors
- **Primary**: Indigo (#6366F1) - Main brand color
- **Secondary**: Cyan (#06B6D4) - Accent color
- **Gradients**: Smooth indigo-to-cyan gradients throughout

### Typography
- **Font Family**: Inter - Modern, readable typography
- **Font Weights**: 300-700 range for various text hierarchies

### Components
- **Cards**: Hover animations with shadow effects
- **Buttons**: Gradient backgrounds with transform effects
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky navbar with scroll progress

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the root directory:

```bash
# Database (if using PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/digicraft"

# Development
NODE_ENV="development"
PORT=5000
```

### Customization

#### Updating Company Information
Edit the data files in `client/src/data/`:
- `services.ts` - Modify service offerings
- `solutions.ts` - Update solution packages
- `testimonials.ts` - Add/edit customer testimonials
- `careers.ts` - Update job positions

#### Styling Changes
- **Colors**: Update `client/src/index.css` CSS variables
- **Fonts**: Modify font imports in `client/index.html` and CSS files
- **Components**: Edit component files in `client/src/components/`

#### Content Updates
- **SEO**: Update meta tags in individual page components
- **Images**: Replace image URLs in components and data files
- **Copy**: Edit text content directly in component files

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
- Ensure all environment variables are configured
- Set up database connections for production
- Configure any external API keys

## 📊 Performance

### Optimization Features
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Responsive images with proper formats
- **Bundle Analysis**: Built-in bundle analysis tools
- **Caching**: Service worker and browser caching strategies

### Monitoring
- Built-in analytics tracking for page views and events
- Performance monitoring with Web Vitals
- Error tracking and reporting

## 🤝 Contributing

### Development Guidelines
1. **Code Style**: Follow existing TypeScript and React patterns
2. **Components**: Use functional components with hooks
3. **Styling**: Use Bootstrap 5 classes, avoid custom CSS when possible
4. **Types**: Maintain full TypeScript coverage
5. **Testing**: Add tests for new features

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

## 📞 Support

### Getting Help
- **Issues**: Report bugs via GitHub Issues
- **Questions**: Contact via hello@digicraft.space
- **Documentation**: Check this README and code comments

### Common Issues
- **Port conflicts**: Change port in server configuration
- **Build errors**: Clear node_modules and reinstall dependencies
- **Styling issues**: Check Bootstrap CSS configuration and custom variables

## 📝 License

This project is proprietary software owned by DigiCraft.space. All rights reserved.

## 🙏 Acknowledgments

- **Bootstrap 5** - Modern CSS framework
- **React Community** - Amazing ecosystem and tools
- **Lucide React** - Icon library
- **Unsplash** - High-quality stock images

---

**Built with ❤️ by the DigiCraft.space team**

For more information, visit [digicraft.space](https://digicraft.space) or contact us at hello@digicraft.space.
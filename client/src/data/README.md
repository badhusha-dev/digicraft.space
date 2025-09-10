# DigiCraft.space Data Structure

This directory contains all static data for the DigiCraft.space application. All data is stored as TypeScript files with proper interfaces for type safety and static imports for optimal performance.

## File Structure

```
src/data/
├── README.md           # This file
├── about.ts           # Company information, values, tech stack
├── blogPosts.ts       # Blog articles (kept for future use)
├── careers.ts         # Job listings (kept for future use)
├── contact.ts         # Contact form options and next steps
├── home.ts            # Home page content, hero, highlights
├── images.ts          # Image asset management
├── pricing.ts         # Service packages and FAQ
├── services.ts        # Service definitions
├── solutions.ts       # Pre-packaged solution kits
├── testimonials.ts    # Customer testimonials
└── work.ts           # Portfolio, capabilities, tech stack
```

## Data Files Overview

### Core Pages
- **home.ts** - Hero content, highlights, process steps, testimonials preview
- **services.ts** - Service definitions with features and descriptions
- **solutions.ts** - Pre-packaged solution kits with pricing and timelines
- **work.ts** - Capabilities, tech stack, development approach
- **pricing.ts** - Service packages and frequently asked questions
- **about.ts** - Company values, tech stack, why choose us
- **contact.ts** - Contact form configuration and next steps

### Supporting Data
- **testimonials.ts** - Customer testimonials and reviews
- **images.ts** - Centralized image asset management
- **blogPosts.ts** - Blog articles (kept for future use)
- **careers.ts** - Job listings (kept for future use)

## Key Features

### Type Safety
All data files export TypeScript interfaces ensuring compile-time type checking:

```typescript
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  // Service data...
];
```

### Static Imports
All pages use static imports for optimal performance:

```typescript
import { services } from '../data/services';
import { homeData } from '../data/home';
```

### Performance Optimized
- No runtime API calls
- All data bundled at build time
- Tree-shaking friendly
- Fast page loads

## Usage Examples

### Services Page
```typescript
import { services } from '../data/services';

export default function Services() {
  return (
    <div>
      {services.map(service => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
```

### Home Page
```typescript
import { homeData } from '../data/home';

export default function Home() {
  return (
    <section>
      <h1>{homeData.hero.title}</h1>
      <p>{homeData.hero.description}</p>
    </section>
  );
}
```

### Solutions Page
```typescript
import { solutions } from '../data/solutions';

export default function Solutions() {
  return (
    <div>
      {solutions.map(solution => (
        <SolutionCard key={solution.id} solution={solution} />
      ))}
    </div>
  );
}
```

## Data Management

### Adding New Content
1. Update the relevant TypeScript file in `src/data/`
2. Add proper TypeScript interfaces
3. Import and use in the corresponding page component

### Modifying Existing Content
1. Edit the data arrays/objects in the relevant file
2. Changes are automatically reflected in the UI
3. TypeScript will catch any interface violations

## Interface Definitions

### Service Interface
```typescript
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
```

### Solution Interface
```typescript
export interface Solution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  pricing: string;
  timeline: string;
  featured?: boolean;
}
```

### Pricing Plan Interface
```typescript
export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
}
```

### Contact Data Interface
```typescript
export interface ContactData {
  projectTypeOptions: ProjectOption[];
  nextSteps: NextStep[];
}
```

## Benefits

1. **Performance** - Static imports, no runtime fetching
2. **Type Safety** - Full TypeScript support with interfaces
3. **Maintainability** - Clean separation of data and UI logic
4. **Reliability** - No network dependencies for content
5. **SEO Friendly** - All content available at build time
6. **Developer Experience** - IntelliSense and compile-time checking

## Future Considerations

- Blog and Careers data files are preserved for potential future implementation
- Image assets are centralized for easy management
- All interfaces are designed to be extensible
- Data structure supports easy content updates without code changes
- Easy to add new data types and pages as the application grows

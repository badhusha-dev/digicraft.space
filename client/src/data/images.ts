// Centralized image configuration for DigiCraft.space
export interface AppImage {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  category: 'hero' | 'team' | 'workspace' | 'people' | 'ui';
}

export const appImages: AppImage[] = [
  // Hero Images
  {
    id: 'hero-team-collaboration',
    src: '/images/hero/team-collaboration.jpg',
    alt: 'Modern office workspace with team collaboration',
    width: 800,
    height: 600,
    category: 'hero'
  },
  
  // Team Images
  {
    id: 'team-collaboration',
    src: '/images/team/team-collaboration.jpg',
    alt: 'Team collaboration in modern tech workspace',
    width: 600,
    height: 400,
    category: 'team'
  },
  
  // Workspace Images
  {
    id: 'workspace-mission',
    src: '/images/workspace/mission-workspace.jpg',
    alt: 'Modern collaborative workspace with innovative technology',
    width: 600,
    height: 400,
    category: 'workspace'
  },
  {
    id: 'workspace-development',
    src: '/images/workspace/development-approach.jpg',
    alt: 'Software development team in collaborative workspace',
    width: 600,
    height: 400,
    category: 'workspace'
  },
  
  // People Images
  {
    id: 'founder-ayaz',
    src: '/images/people/founder-ayaz.jpg',
    alt: 'Ayaz, CEO and Founder of DigiCraft.space',
    width: 300,
    height: 300,
    category: 'people'
  },
  
  // UI Images (placeholders for now)
  {
    id: 'placeholder-hero',
    src: '/images/ui/placeholder-hero.jpg',
    alt: 'Placeholder hero image',
    width: 800,
    height: 600,
    category: 'ui'
  },
  {
    id: 'placeholder-workspace',
    src: '/images/ui/placeholder-workspace.jpg',
    alt: 'Placeholder workspace image',
    width: 600,
    height: 400,
    category: 'ui'
  },
  {
    id: 'placeholder-founder',
    src: '/images/ui/placeholder-founder.jpg',
    alt: 'Placeholder founder image',
    width: 300,
    height: 300,
    category: 'ui'
  },
  {
    id: 'placeholder-team',
    src: '/images/ui/placeholder-team.jpg',
    alt: 'Placeholder team image',
    width: 600,
    height: 400,
    category: 'ui'
  }
];

// Helper functions to get images by category or ID
export const getImageById = (id: string): AppImage | undefined => {
  return appImages.find(img => img.id === id);
};

export const getImagesByCategory = (category: AppImage['category']): AppImage[] => {
  return appImages.filter(img => img.category === category);
};

// Image categories for easy access
export const heroImages = getImagesByCategory('hero');
export const teamImages = getImagesByCategory('team');
export const workspaceImages = getImagesByCategory('workspace');
export const peopleImages = getImagesByCategory('people');
export const uiImages = getImagesByCategory('ui');

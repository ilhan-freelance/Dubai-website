export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Weddings' | 'Destination' | 'Corporate' | 'Private';
  location: string;
  year: string;
  guestCount: string;
  heroImage: string;
  gallery: string[];
  summary: string;
  storyNarrative: string;
  details: {
    venue: string;
    floralDesign: string;
    photographyStyle: string;
    palette: string[];
  };
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'hansika-weds-jagan',
    title: 'Hansika weds Jagan',
    subtitle: 'Saadiyat Rotana Resort & Villas',
    category: 'Weddings',
    location: 'Saadiyat Rotana Resort & Villas',
    year: '5 Feb',
    guestCount: 'Saadiyat Beach',
    heroImage: '/hansika-jagan/hero-couple-crystals.png',
    gallery: [
      '/hansika-jagan/phoolon-chaadar.jpg',
      '/hansika-jagan/hug.png',
      '/hansika-jagan/mandap.jpg',
      '/hansika-jagan/hands.png',
      '/hansika-jagan/reception-walk.png'
    ],
    summary: 'A luxurious beachside wedding celebration at Saadiyat Rotana Resort & Villas.',
    storyNarrative: 'Hansika weds Jagan at Saadiyat Rotana Resort & Villas, Abu Dhabi on 5 Feb.',
    details: {
      venue: 'Saadiyat Rotana Resort & Villas',
      floralDesign: 'Royal Floral Mandap & Ambient Sunset Styling',
      photographyStyle: 'Fine Art Editorial',
      palette: ['#8A1C24', '#D4AF37', '#FAF7F2', '#4A6B5B']
    }
  },
  {
    id: 'abhishek-weds-radhika',
    title: 'Abhishek weds Radhika',
    subtitle: 'Royal Red Floral Mandap & Waterfront Lawn',
    category: 'Weddings',
    location: 'Waterfront Resort, Dubai',
    year: '2025',
    guestCount: '350 Guests',
    heroImage: '/abhishek-radhika/hero-red-mandap.png',
    gallery: [
      '/abhishek-radhika/hero-hashtag.png',
      '/about-red-mandap.png',
      '/about-red-arch-hero.png',
      '/about-red-rose-arch.png',
      '/about-red-hallway.jpg',
      '/about-red-mandap-top.png'
    ],
    summary: 'A magnificent open-air waterfront wedding featuring a monumental red rose mandap and bespoke 3D monogram installation.',
    storyNarrative: 'Abhishek weds Radhika in an unforgettable Dubai celebration, blending grand floral art installations with serene coastal views.',
    details: {
      venue: 'Waterfront Lawn & Grand Pavilion',
      floralDesign: 'Monumental Royal Red Rose Mandap',
      photographyStyle: 'Fine Art Editorial',
      palette: ['#8A1C24', '#FAF7F2', '#7A8864', '#E5D5BC']
    }
  },
  {
    id: 'adit-weds-diva',
    title: 'Adit weds Diva',
    subtitle: 'Bougainvillea Floral Mandap & Waterfront Celebration',
    category: 'Weddings',
    location: 'Saadiyat Waterfront Resort, Abu Dhabi & Dubai',
    year: '2025',
    guestCount: '450 Guests',
    heroImage: '/adit-diva/adit-diva-beach.jpg',
    gallery: [
      '/adit-diva/adit-diva-beach.jpg',
      '/adit-diva/adit-diva-mandap.jpg',
      '/adit-diva/adit-diva-night.jpg',
      '/adit-diva/adit-diva-resort.jpg',
      '/adit-diva/adit-diva-stage.jpg'
    ],
    summary: 'An iconic Dubai & Abu Dhabi wedding celebration featuring monumental pink bougainvillea arches, royal blue carpeted aisle, and sunset beachside mandap.',
    storyNarrative: 'Adit weds Diva in a breath-taking coastal ceremony. Framing the serene turquoise waters with triple floral arches, bespoke blue porcelain urns, and golden seating bowls, Love Details created a landmark celebration of love.',
    details: {
      venue: 'Saadiyat Waterfront Lawn & Grand Beach Sanctuary',
      floralDesign: 'Monumental Pink Bougainvillea Arches & Blue Porcelain Styling',
      photographyStyle: 'Cinematic Editorial Beachside Fine Art',
      palette: ['#E63946', '#1D3557', '#C9A96E', '#FAF7F2']
    }
  }
];

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
    id: 'al-maha-desert-romance',
    title: 'Solstice in the Dunes',
    subtitle: 'An Intimate Desert Sunset Celebration',
    category: 'Destination',
    location: 'Al Maha Desert Resort, Dubai',
    year: '2026',
    guestCount: '120 Guests',
    heroImage: '/portfolio-desert.png',
    gallery: [
      '/portfolio-desert.png',
      '/portfolio-dubai.png',
      '/portfolio-garden.png',
      '/portfolio-dance.png',
      '/portfolio-rings.png'
    ],
    summary: 'A sunset gathering where organic beige linens and olive botanicals harmonized with the golden red sands of the Dubai conservation reserve.',
    storyNarrative: 'Designed for a couple traveling from London, this three-day destination affair blended Arabian hospitality with modern minimalism. Guests gathered under floating linen canopies illuminated by hundreds of hand-poured beeswax candles as evening settled over the desert dunes.',
    details: {
      venue: 'Al Maha Luxury Desert Resort',
      floralDesign: 'Wild Olive Branches, Dried Palm Fronds & Cream Peonies',
      photographyStyle: 'Warm Golden Hour Editorial',
      palette: ['#7A8864', '#C8C0B5', '#E5D5BC', '#FAF7F2']
    }
  },
  {
    id: 'bvlgari-resort-gala',
    title: 'The Coastal Atelier',
    subtitle: 'A Contemporary Waterfront Wedding',
    category: 'Weddings',
    location: 'Bvlgari Resort, Jumeira Bay Dubai',
    year: '2025',
    guestCount: '250 Guests',
    heroImage: '/portfolio-dubai.png',
    gallery: [
      '/portfolio-dubai.png',
      '/about-couple-arch.png',
      '/portfolio-garden.png',
      '/portfolio-dance.png'
    ],
    summary: 'Clean architectural lines, bespoke crystal chandeliers, and subtle travertine textures framing panoramic Arabian Gulf views.',
    storyNarrative: 'Set on private island grounds, this wedding combined high fashion editorial aesthetics with serene coastal views. Custom mirrored runways and structured botanical walls created an unforgettable open-air sanctuary.',
    details: {
      venue: 'Bvlgari Resort Dubai Ballroom & Lawn',
      floralDesign: 'Sculptural White Orchids & Frosted Olive Foliage',
      photographyStyle: 'Cinematic High Fashion',
      palette: ['#C8C0B5', '#FAF7F2', '#7A8864', '#E5BCA9']
    }
  },
  {
    id: 'one-and-only-mirage',
    title: 'Palace of Light',
    subtitle: 'A Royal Heritage Wedding Celebration',
    category: 'Weddings',
    location: 'One&Only Royal Mirage, Dubai',
    year: '2025',
    guestCount: '400 Guests',
    heroImage: '/about-couple-arch.png',
    gallery: [
      '/about-couple-arch.png',
      '/portfolio-dance.png',
      '/portfolio-rings.png'
    ],
    summary: 'An extravagant multi-day wedding celebration respecting heritage while infusing modern Parisian couture design.',
    storyNarrative: 'From an intimate welcome dinner under moonlit palm courts to a grand ballroom banquet, every touch point was hand-crafted by Love Details masters.',
    details: {
      venue: 'The Palace Court at One&Only Royal Mirage',
      floralDesign: 'Cascading White Hydrangeas & Bisque Roses',
      photographyStyle: 'Timeless Fine Art',
      palette: ['#FAF7F2', '#E5D5BC', '#7A8864']
    }
  },
  {
    id: 'duba-opera-gala',
    title: 'Symphony of Stones',
    subtitle: 'An Executive Private Centenary Gala',
    category: 'Corporate',
    location: 'Dubai Opera, Downtown Dubai',
    year: '2025',
    guestCount: '300 Guests',
    heroImage: '/portfolio-dance.png',
    gallery: [
      '/portfolio-dance.png',
      '/portfolio-dubai.png'
    ],
    summary: 'An elite private gala dinner staged inside the iconic Dubai Opera stage, featuring acoustic violinists and Michelin-star dining.',
    storyNarrative: 'Bespoke tablescapes crafted from brushed warm stone and muted brass provided the backdrop for international leaders and guests in black-tie attire.',
    details: {
      venue: 'Dubai Opera Grand Stage',
      floralDesign: 'Minimalist Olive & Linen Floral Installations',
      photographyStyle: 'Architectural Editorial',
      palette: ['#7A8864', '#C8C0B5', '#262822']
    }
  },
  {
    id: 'jumeirah-al-qasr-soiree',
    title: 'L’Heure Bleue',
    subtitle: 'A Private Anniversary Celebration',
    category: 'Private',
    location: 'Jumeirah Al Qasr, Dubai',
    year: '2026',
    guestCount: '60 Guests',
    heroImage: '/portfolio-rings.png',
    gallery: [
      '/portfolio-rings.png',
      '/portfolio-garden.png'
    ],
    summary: 'An intimate candlelit dining experience along private lagoon canals with personalized calligraphy and live harp music.',
    storyNarrative: 'Curated for an international family mark of 25 years, focusing on warmth, quiet luxury, and extraordinary guest comfort.',
    details: {
      venue: 'Private Pier at Jumeirah Al Qasr',
      floralDesign: 'Bisque Garden Roses & Warm Champagne Botanicals',
      photographyStyle: 'Intimate Candlelit Fine Art',
      palette: ['#E5BCA9', '#FAF7F2', '#C8C0B5']
    }
  },
  {
    id: 'armani-ballroom-destination',
    title: 'Monolith of Grace',
    subtitle: 'A Modern Couture Destination Wedding',
    category: 'Destination',
    location: 'Armani Hotel Dubai, Burj Khalifa',
    year: '2025',
    guestCount: '180 Guests',
    heroImage: '/portfolio-garden.png',
    gallery: [
      '/portfolio-garden.png',
      '/about-bridesmaids.png'
    ],
    summary: 'Italian craftsmanship meets modern Middle Eastern luxury in an ethereal celebration overlooking the Dubai Fountain.',
    storyNarrative: 'Combining quiet stone textures with soft warm ambient glow, Love Details transformed the Armani Pavilion into a suspended botanical oasis.',
    details: {
      venue: 'Armani Hotel Dubai Pavilion',
      floralDesign: 'Olive Leaves, Ivory Anemones & Warm Stone Accents',
      photographyStyle: 'Modern Architectural Romance',
      palette: ['#FAF7F2', '#7A8864', '#C8C0B5']
    }
  }
];

export interface VenueItem {
  id: string;
  name: string;
  location: string;
  region: 'Dubai' | 'Abu Dhabi' | 'Other UAE';
  capacity: string;
  setting: string;
  image: string;
  description: string;
  highlights: string[];
}

export const UAE_VENUES: VenueItem[] = [
  {
    id: 'ritz-carlton-dubai',
    name: 'The Ritz-Carlton, Dubai',
    location: 'JBR, Dubai',
    region: 'Dubai',
    capacity: 'Up to 600 Guests',
    setting: 'Oceanfront Gardens & Venetian Architecture',
    image: '/venues/ritz-carlton-dubai.jpg',
    description: 'Set on private Arabian Gulf shores with lush manicured lawns, Mediterranean arches, and romantic sunset oceanfront vistas.',
    highlights: ['Private Beachfront Lawns', 'Grand Ballroom Terrace', 'Ain Dubai Skyline View']
  },
  {
    id: 'one-and-only-royal-mirage',
    name: 'One&Only Royal Mirage',
    location: 'Al Sufouh, Dubai',
    region: 'Dubai',
    capacity: 'Up to 500 Guests',
    setting: 'Palatial Arabian Beach Gardens',
    image: '/venues/one-only-royal-mirage.jpg',
    description: 'Intricate Arabian courtyard architecture set amongst 65 acres of lush beachfront gardens, ornate arches, and moonlit palm courts.',
    highlights: ['Private Beach Promenade', 'Ornate Moorish Architecture', 'Secluded Garden Amphi-theatre']
  },
  {
    id: 'atlantis-the-palm',
    name: 'Atlantis, The Palm',
    location: 'Palm Jumeirah, Dubai',
    region: 'Dubai',
    capacity: 'Up to 2,000 Guests',
    setting: 'Iconic Oceanfront Landmark & Royal Ballrooms',
    image: '/venues/atlantis-the-palm.jpg',
    description: 'An internationally renowned ocean resort on Palm Jumeirah offering grand imperial ballrooms, private royal beach lawns, and breathtaking sea views.',
    highlights: ['Royal Asateer Ballroom', 'Private Oceanfront Lawn', 'Iconic Palm Architecture']
  },
  {
    id: 'five-palm-jumeirah',
    name: 'FIVE Palm Jumeirah',
    location: 'Palm Jumeirah, Dubai',
    region: 'Dubai',
    capacity: 'Up to 450 Guests',
    setting: 'Modern Luxury Waterfront & Marina Views',
    image: '/venues/five-palm-jumeirah.jpg',
    description: 'Dynamic luxury resort boasting spectacular skyline views of Dubai Marina, chic infinity pool terraces, and contemporary event spaces.',
    highlights: ['Skyline Horizon View', 'Penthouse Celebration Suites', 'Private Beach Club']
  },
  {
    id: 'grand-hyatt-dubai',
    name: 'Grand Hyatt Dubai',
    location: 'Garhoud, Dubai',
    region: 'Dubai',
    capacity: 'Up to 3,000 Guests',
    setting: 'City Resort & Royal Convention Ballrooms',
    image: '/venues/grand-hyatt-dubai.jpg',
    description: 'Set amidst 37 acres of tropical landscaped gardens and resort pools, featuring some of Dubai’s most grand and versatile royal celebration halls.',
    highlights: ['Baniyas Royal Ballroom', 'Tropical Resort Pool Gardens', 'Grand High-Ceiling Architecture']
  }
];

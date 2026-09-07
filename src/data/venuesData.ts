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
    id: 'armani-hotel-dubai',
    name: 'Armani Hotel Dubai',
    location: 'Downtown Dubai',
    region: 'Dubai',
    capacity: 'Up to 450 Guests',
    setting: 'Urban Elegance & Fountain Views',
    image: '/portfolio-dubai.png',
    description: 'Designed by Giorgio Armani himself, offering clean minimalist stone aesthetics, high-end hospitality, and iconic views of the Dubai Fountain.',
    highlights: ['Outdoor Ballroom Terrace', 'Minimalist Italian Aesthetic', 'Direct Fountain Overlook']
  },
  {
    id: 'bvlgari-resort-dubai',
    name: 'Bvlgari Resort & Residences',
    location: 'Jumeira Bay Island, Dubai',
    region: 'Dubai',
    capacity: 'Up to 300 Guests',
    setting: 'Private Island Waterfront Sanctuary',
    image: '/portfolio-garden.png',
    description: 'Exuding Mediterranean charm on a secluded island in Dubai. Features private marina lawns, travertine architecture, and breathtaking sunset panoramas.',
    highlights: ['Private Island Setting', 'Exclusive Yacht Marina', 'Bespoke Ballroom & Lawns']
  },
  {
    id: 'one-and-only-royal-mirage',
    name: 'One&Only Royal Mirage',
    location: 'Al Sufouh, Dubai',
    region: 'Dubai',
    capacity: 'Up to 500 Guests',
    setting: 'Palatial Arabian Beach Gardens',
    image: '/about-couple-arch.png',
    description: 'Intricate Arabian courtyard architecture set amongst 65 acres of lush beachfront gardens, ornate arches, and moonlit palm courts.',
    highlights: ['Private Beach Promenade', 'Ornate Moorish Architecture', 'Secluded Garden Amphi-theatre']
  },
  {
    id: 'al-maha-desert-resort',
    name: 'Al Maha Conservation Resort',
    location: 'Dubai Desert Conservation Reserve',
    region: 'Dubai',
    capacity: 'Up to 150 Guests',
    setting: 'Luxury Desert Dunes & Oasis',
    image: '/portfolio-desert.png',
    description: 'Nestled among rolling golden sand dunes and indigenous gazelle habitats, perfect for ultra-exclusive, candlelit desert celebrations.',
    highlights: ['Private Reserve Access', 'Starlit Dune Dinners', 'Bedouin Luxe Styling']
  },
  {
    id: 'jumeirah-al-qasr',
    name: 'Jumeirah Al Qasr',
    location: 'Madinat Jumeirah, Dubai',
    region: 'Dubai',
    capacity: 'Up to 400 Guests',
    setting: 'Palace Waterways & Private Pier',
    image: '/portfolio-dance.png',
    description: 'Designed in the style of a Sheikh’s summer residence, connected by tranquil abra canals, grand staircases, and pristine private beaches.',
    highlights: ['Canal Boat Arrival', 'Celeste Ocean Pier', 'Grand Imperial Ballroom']
  },
  {
    id: 'mandarin-oriental-jumeira',
    name: 'Mandarin Oriental Jumeira',
    location: 'Jumeirah Beach, Dubai',
    region: 'Dubai',
    capacity: 'Up to 350 Guests',
    setting: 'Modern Beachfront Sophistication',
    image: '/portfolio-rings.png',
    description: 'Chic coastal architecture with glass-enclosed ballrooms opening directly onto manicured seaside lawns and tranquil waters.',
    highlights: ['Direct Sea View Ballroom', 'Canopy of Light Installation', 'Michelin Culinary Options']
  },
  {
    id: 'emirates-palace-mandarin',
    name: 'Emirates Palace Mandarin Oriental',
    location: 'Corniche, Abu Dhabi',
    region: 'Abu Dhabi',
    capacity: 'Up to 1000 Guests',
    setting: 'Palatial Grandeur & Private Bay',
    image: '/service-planning.png',
    description: 'An iconic landmark of Arabian splendour featuring gold leaf domes, marble courtyards, and a 1.3km private white-sand beach.',
    highlights: ['Grand Dome Auditorium', 'Royal Suite Dining', '1.3km Private Beach']
  },
  {
    id: 'ritz-carlton-ras-al-khaimah',
    name: 'The Ritz-Carlton Al Wadi Desert',
    location: 'Ras Al Khaimah',
    region: 'Other UAE',
    capacity: 'Up to 200 Guests',
    setting: 'Desert Valley & Falconry Reserve',
    image: '/portfolio-garden.png',
    description: 'A secluded desert valley offering intimate sunset terraces, vintage fire pits, and rustic luxury for intimate gatherings.',
    highlights: ['Moonlit Valley Dinners', 'Private Pool Villas', 'Falconry & Stargazing Lawn']
  }
];

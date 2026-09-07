export interface ServiceCategory {
  number: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  keyInclusions: string[];
  idealFor: string;
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    number: '01',
    id: 'weddings',
    title: 'Weddings',
    tagline: 'From intimate vows to grand multi-day celebrations',
    description: 'We bring together artistic direction, bespoke spatial design, and flawless execution so every moment feels entirely authentic to your personal narrative.',
    image: '/service-planning.png',
    keyInclusions: [
      'Full End-to-End Creative Direction & Moodboarding',
      'Architectural Spatial Design & Tablescape Styling',
      'Exclusive Venue Selection & Permit Management',
      'World-Class Floral & Lighting Curation',
      'Guest Experience & Hospitality Concierge',
      'Full Day-of On-Site Event Execution'
    ],
    idealFor: 'Couples seeking an elevated, highly tailored Dubai celebration crafted with restraint and quiet elegance.'
  },
  {
    number: '02',
    id: 'destination-weddings',
    title: 'Destination Weddings',
    tagline: 'Immersive multi-day travel celebrations in Dubai & beyond',
    description: 'Seamless travel coordination, curated welcome soirees, desert sunset rituals, and farewell brunches for international couples and their guests.',
    image: '/portfolio-desert.png',
    keyInclusions: [
      'Complete Multi-Day Itinerary Planning',
      'VIP Travel & Luxury Transfers Coordination',
      'Cultural Protocol & Multilingual Guest Support',
      'Desert, Coastal & Palace Venue Production',
      'Bespoke Welcome Gifting & Curated Experiences',
      'Private Charter & Accommodation Management'
    ],
    idealFor: 'International couples desiring a stress-free luxury Dubai destination experience for globally traveling guests.'
  },
  {
    number: '03',
    id: 'corporate-events',
    title: 'Corporate Events',
    tagline: 'High-profile galas, product reveals & brand ateliers',
    description: 'Elevating corporate gatherings into sophisticated brand experiences that command respect, captivate high-net-worth guests, and linger in memory.',
    image: '/service-coordination.png',
    keyInclusions: [
      'Architectural Stage & Scenic Environment Design',
      'High-Level Protocol & Diplomatic Host Logistics',
      'Michelin-Caliber Culinary & Mixology Curation',
      'Acoustic & AV Production Management',
      'Executive RSVP & Guest Access Systems',
      'Press & VIP Hospitality Integration'
    ],
    idealFor: 'Luxury luxury brands, private offices, and global enterprises hosting elite celebrations in the UAE.'
  },
  {
    number: '04',
    id: 'private-events',
    title: 'Private Celebrations',
    tagline: 'Milestone birthdays, anniversary dinners & private soirees',
    description: 'Transforming private estates, luxury yachts, and exclusive desert camps into intimate sanctuaries of warmth, candlelit beauty, and hospitality.',
    image: '/service-day-of.png',
    keyInclusions: [
      'Intimate Atmosphere & Candlelight Curation',
      'Private Estate & Secret Venue Transformation',
      'Custom Stationery & Calligraphy Curation',
      'Curated Live Acoustic & Classical Performances',
      'Personalized Culinary Pairing Concepts',
      'Discreet Security & Private Service Protocol'
    ],
    idealFor: 'Discerning hosts seeking an unforgettable private gathering wrapped in warmth, artistry, and intimacy.'
  }
];

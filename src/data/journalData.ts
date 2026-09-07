export interface JournalArticle {
  id: string;
  title: string;
  category: 'Planning Guides' | 'Dubai Venues' | 'Destination Weddings' | 'Wedding Inspiration' | 'Event Design';
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'dubai-wedding-guide-2026',
    title: 'The Dubai Wedding Guide: Planning an Elevated Celebration in the UAE',
    category: 'Planning Guides',
    date: 'February 2026',
    readTime: '6 min read',
    image: '/portfolio-dubai.png',
    excerpt: 'From navigating winter weather windows to curating architectural florals, how to create a refined celebration in one of the world’s most extraordinary cities.',
    content: [
      'Planning a luxury wedding in Dubai requires balancing international design standards with nuanced local timing and venue geography.',
      'The ideal wedding window in the UAE runs from November through April, when golden hour temperatures hover pleasantly between 22°C and 26°C.',
      'When designing an outdoor evening reception, lighting is paramount. Rather than harsh floodlights, we advocate for multi-layered candle illumination complemented by subtle warm pin-spotting on botanical centerpieces.',
      'Our team handles full venue liaison, government permit protocol, and international guest logistics so couples can enjoy an effortless planning voyage.'
    ]
  },
  {
    id: 'art-of-quiet-luxury-tablescapes',
    title: 'The Art of Quiet Luxury: Designing Tablescapes with Intention',
    category: 'Event Design',
    date: 'January 2026',
    readTime: '4 min read',
    image: '/about-couple-laugh.png',
    excerpt: 'Why restraint, organic linen textures, and custom olive greenery create far more emotional resonance than glossy excess.',
    content: [
      'True luxury on a dining table is never about crowded decorations. It is revealed through negative space, hand-crafted materiality, and tactile comfort.',
      'We pair rough-edged handmade parchment menu cards with refined crystal glassware, grounding the setting with subtle olive sprigs and ivory beeswax pillars.',
      'When your guests take their seats, the table should feel like an inviting, warm feast created solely for them.'
    ]
  },
  {
    id: 'destination-desert-weddings',
    title: 'Desert Solstice: Crafting Sanctuary in the Dunes',
    category: 'Destination Weddings',
    date: 'December 2025',
    readTime: '5 min read',
    image: '/portfolio-desert.png',
    excerpt: 'Transforming natural desert terrain into an intimate, high-fashion dining experience for international destination guests.',
    content: [
      'The Arabian desert offers an extraordinary canvas of vast horizon and silent dunes. Creating an event here requires deep respect for environmental preservation.',
      'By utilizing low-slung lounge seating, organic stone urns, and warm ambient oil lamps, we transform barren dunes into a glowing sanctuary under the starry night sky.'
    ]
  }
];

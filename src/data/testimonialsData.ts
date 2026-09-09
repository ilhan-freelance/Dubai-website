export interface TestimonialItem {
  id: string;
  quote: string;
  clientNames: string;
  eventType: string;
  location: string;
  year: string;
  image: string;
  tagline: string;
  rating: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    quote: 'Every detail felt intentional, beautiful, and completely us. Love Details transformed our vision of a Dubai desert wedding into a cinematic reality that our guests still talk about today.',
    clientNames: 'Sophia & Alexander',
    eventType: 'Destination Wedding',
    location: 'Al Maha Desert Resort · Dubai',
    year: '2025',
    image: '/portfolio-desert.png',
    tagline: 'A Magical Desert Sanctuary Vow',
    rating: 5
  },
  {
    id: '2',
    quote: 'Planning a multi-day celebration from London felt completely effortless. Their artistic direction and calm professionalism set them apart from every other planner in the Middle East.',
    clientNames: 'Elena & Marcus',
    eventType: 'Royal Palace Celebration',
    location: 'One&Only Royal Mirage · Dubai',
    year: '2025',
    image: '/about-couple-arch.png',
    tagline: 'Floral Archway Vows',
    rating: 5
  },
  {
    id: '3',
    quote: 'In a city where luxury can often feel loud, Love Details brings a rare, refined quiet elegance. They respected our taste, privacy, and guest comfort with white-glove perfection.',
    clientNames: 'Tariq & Nadya',
    eventType: 'Waterfront Sunset Soirée',
    location: 'Bvlgari Resort · Jumeira Bay',
    year: '2026',
    image: '/portfolio-dubai.png',
    tagline: 'Candlelit Haven by the Gulf',
    rating: 5
  },
  {
    id: '4',
    quote: 'From the private welcome dinner under the dunes to the grand ballroom gala, execution was flawless. They made our dream wedding feel completely stress-free.',
    clientNames: 'Chloe & Jonathan',
    eventType: 'Grand Imperial Wedding',
    location: 'Emirates Palace · Abu Dhabi',
    year: '2025',
    image: '/about-couple-laugh.png',
    tagline: 'Pure Joy & Joyful Memories',
    rating: 5
  }
];

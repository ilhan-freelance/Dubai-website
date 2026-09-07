export interface TestimonialItem {
  id: string;
  quote: string;
  clientNames: string;
  eventType: string;
  location: string;
  year: string;
  image?: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    quote: 'Every detail felt intentional, beautiful, and completely us. Love Details transformed our vision of a Dubai desert wedding into a cinematic reality that our guests still talk about.',
    clientNames: 'Sophia & Alexander',
    eventType: 'Destination Wedding',
    location: 'Al Maha Desert Resort, Dubai',
    year: '2025',
    image: '/portfolio-desert.png'
  },
  {
    id: '2',
    quote: 'Planning a multi-day celebration from London felt completely effortless. Their artistic direction and calm professionalism set them apart from every other planner in the region.',
    clientNames: 'Elena & Marcus',
    eventType: 'Palace Wedding',
    location: 'One&Only Royal Mirage, Dubai',
    year: '2025',
    image: '/about-couple-arch.png'
  },
  {
    id: '3',
    quote: 'In a city where luxury can often feel loud, Love Details brings a rare, refined quiet elegance. They respected our taste, privacy, and guest comfort flawlessly.',
    clientNames: 'Tariq & Nadya',
    eventType: 'Waterfront Soiree',
    location: 'Bvlgari Resort Dubai',
    year: '2026',
    image: '/portfolio-dubai.png'
  }
];

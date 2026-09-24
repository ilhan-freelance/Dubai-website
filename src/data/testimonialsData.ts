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
    id: 'hansika-jagan-review',
    quote: 'Love Details turned our Abu Dhabi sunset mandap dreams into absolute magic. From our first call to our final dance, we did not stress for even a single second!',
    clientNames: 'Hansika & Jagan',
    eventType: 'Saadiyat Beach Resort Wedding',
    location: 'Saadiyat Rotana Resort · Abu Dhabi',
    year: '2025',
    image: '/hansika-jagan/hero-couple-crystals.png',
    tagline: 'Sunset Beach & Crystal Mandap Magic',
    rating: 5
  },
  {
    id: 'abhishek-radhika-review',
    quote: 'Planning a 350+ guest Dubai wedding felt overwhelming until Love Details took over. The royal red rose mandap was breathtaking, and they made us feel like family throughout.',
    clientNames: 'Abhishek & Radhika',
    eventType: 'Grand Waterfront Royal Celebration',
    location: 'Waterfront Resort & Lawn · Dubai',
    year: '2025',
    image: '/abhishek-radhika/hero-red-mandap.png',
    tagline: 'Royal Red Rose Mandap & 3D Monogram',
    rating: 5
  },
  {
    id: 'adit-diva-review',
    quote: 'From the pink bougainvillea beach ceremony to the epic live concert stage at night, everything felt like a fairytale. We are forever grateful to the Love Details team!',
    clientNames: 'Adit & Diva',
    eventType: 'Bougainvillea & Starlight Concert Wedding',
    location: 'Saadiyat Beach & Grand Ballroom · Dubai',
    year: '2025',
    image: '/adit-diva/adit-diva-beach.jpg',
    tagline: 'Bougainvillea Mandap & Live Concert Night',
    rating: 5
  }
];

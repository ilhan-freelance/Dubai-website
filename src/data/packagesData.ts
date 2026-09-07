export interface PlanningServiceTier {
  id: string;
  code: string;
  name: string;
  tagline: string;
  summary: string;
  keyAspects: string[];
  deliverables: string[];
  recommendedFor: string;
}

export const PLANNING_TIERS: PlanningServiceTier[] = [
  {
    id: 'full-service-atelier',
    code: '01',
    name: 'Full Service Atelier Planning',
    tagline: 'Complete vision-to-reality curation from first concept to final departure',
    summary: 'Our signature service for couples and hosts seeking absolute peace of mind. We oversee every element: creative direction, venue acquisition, floral architecture, lighting, guest hospitality, vendor negotiation, and full on-site management.',
    keyAspects: [
      'Dedicated Senior Event Producer & Creative Lead',
      'Exclusive Venue Sourcing & Permit Acquisition',
      '3D Spatial Layouts & Custom Moodboard Curation',
      'Curated Master Chef & Mixology Tastings',
      'Full Day-of Directing Team'
    ],
    deliverables: [
      'Comprehensive Design Blueprint',
      'Budget Optimization Strategy',
      'Master Production Schedule & Runsheet',
      'RSVP & VIP Guest Concierge'
    ],
    recommendedFor: 'Couples & hosts wanting an effortless luxury planning voyage managed entirely by our atelier.'
  },
  {
    id: 'destination-curation',
    code: '02',
    name: 'Destination Wedding Curation',
    tagline: 'End-to-end management for international couples marrying in Dubai & the UAE',
    summary: 'Tailored for couples traveling from London, New York, Mumbai, Paris, or Riyadh. We bridge cultural nuances, time zones, travel logistics, and local UAE government compliance into a seamless multi-day journey.',
    keyAspects: [
      'Multilingual Logistics & Guest Support',
      'Airport Concierge & Luxury Transport',
      'Welcome Dinner, Desert Sunset & Farewell Brunch Curation',
      'Private Hotel Room Block Negotiations',
      'On-site Protocol Officers'
    ],
    deliverables: [
      'Custom Mobile Guest Itinerary Portal',
      'Cultural Etiquette & Protocol Briefings',
      'Destination Welcome Gift Curation',
      '24/7 Concierge Hotline for Guests'
    ],
    recommendedFor: 'International couples organizing a multi-day UAE destination celebration for globally arriving guests.'
  },
  {
    id: 'bespoke-creative-direction',
    code: '03',
    name: 'Bespoke Design & Creative Direction',
    tagline: 'Aesthetic concepting, floral styling & atmospheric curation',
    summary: 'For clients who already possess base logistics or venue contracts but require elite visual artistry, spatial architecture, floral styling, lighting design, and tablescape choreography.',
    keyAspects: [
      'Custom Color Palette & Material Specification',
      'Botanical & Floral Installation Art Direction',
      'Custom Furniture & Tableware Sourcing',
      'Ambient Lighting & Candlelight Choreography',
      'Stationery & Fine Calligraphy Curation'
    ],
    deliverables: [
      'Comprehensive Aesthetic Style Guide',
      'Vendor Art Direction Briefs',
      'On-Site Styling Supervision'
    ],
    recommendedFor: 'Hosts seeking to transform a classic venue space into an art-directed fashion editorial environment.'
  },
  {
    id: 'event-management-execution',
    code: '04',
    name: 'Event Management & Month-Of Directing',
    tagline: 'Precision execution for pre-planned celebrations',
    summary: 'Assuming control 8–12 weeks prior to your celebration day to refine timeline details, align all vendor teams, conduct technical walkthroughs, and lead execution on the day.',
    keyAspects: [
      'Master Production Runsheet Audit',
      'Vendor Contract & Logistics Alignment',
      'Final Technical & Rehearsal Walkthrough',
      'Full Day-of On-Site Directing Team'
    ],
    deliverables: [
      'Detailed Minute-by-Minute Event Timeline',
      'Vendor Coordination Manifest',
      'Emergency Contingency Protocols'
    ],
    recommendedFor: 'Clients with established vendor contracts who require master precision on the day.'
  }
];

import type { SponsorLogo, SponsorTier } from '@/types'

/* SPONSORS: replace with real sponsor data once partnerships are confirmed */
export const currentSponsors: SponsorLogo[] = []

export const sponsorTiers: SponsorTier[] = [
  {
    id: 'ocean-steward',
    name: 'Ocean Steward',
    priceRange: '$25,000 – $50,000',
    tagline: 'Our primary partner level — maximum presence, maximum story.',
    benefits: [
      'Primary logo placement on the boat and key gear',
      'Featured prominently in all content and storytelling',
      'Included in major announcements and press releases',
      'Dedicated campaign posts and media coverage',
      'Invitation to race start and finish events',
      'Co-branded content opportunities',
    ],
    examples: ['YETI', 'Liquid I.V.', 'Hydro Flask'],
    featured: true,
    size: 'large',
    contactSubject: 'Sponsorship Enquiry — Ocean Steward',
  },
  {
    id: 'blue-horizon',
    name: 'Blue Horizon Partner',
    priceRange: '$10,000 – $25,000',
    tagline: 'Strong presence without leading — ideal for brands that want in.',
    benefits: [
      'Logo on boat and gear (secondary placement)',
      'Included in campaign content and updates',
      'Social media mentions throughout the campaign',
      'Listed on team website with logo',
      'Invitation to race start event',
    ],
    examples: ['LMNT', 'Garmin', 'Outerknown'],
    size: 'large',
    contactSubject: 'Sponsorship Enquiry — Blue Horizon Partner',
  },
  {
    id: 'tidal-impact',
    name: 'Tidal Impact Partner',
    priceRange: '$5,000 – $10,000',
    tagline: 'Brand visibility with a cause worth getting behind.',
    benefits: [
      'Logo on team gear',
      'Social media shoutouts',
      'Listed on team website',
    ],
    size: 'small',
    contactSubject: 'Sponsorship Enquiry — Tidal Impact Partner',
  },
  {
    id: 'current-crew',
    name: 'Current Crew',
    priceRange: '$1,000 – $5,000',
    tagline: 'For small brands, local businesses, and friends of the team.',
    benefits: [
      'Name or logo on the team website',
      'General supporter recognition',
      'Our sincere gratitude',
    ],
    size: 'small',
    contactSubject: 'Sponsorship Enquiry — Current Crew',
  },
  {
    id: 'voyage-supporters',
    name: 'Voyage Supporters',
    priceRange: '$1 – $1,000',
    tagline: 'Individual support — every dollar helps us get across.',
    benefits: [
      'Supporter recognition on the website',
      'Following along as part of the crew',
    ],
    size: 'small',
    contactSubject: 'Sponsorship Enquiry — Voyage Supporters',
  },
]

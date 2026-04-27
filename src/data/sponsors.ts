import type { SponsorLogo, SponsorTier } from '@/types'

/* SPONSORS: replace with real sponsor data once partnerships are confirmed */
export const currentSponsors: SponsorLogo[] = [
  /* Add sponsor objects here as they come in:
     { id: '1', name: 'Sponsor Name', logoSrc: '/assets/sponsors/logo.png', url: 'https://...' } */
]

/* TIERS: replace benefits and taglines with finalized sponsorship packages */
export const sponsorTiers: SponsorTier[] = [
  {
    id: 'supporter',
    name: 'Supporter',
    tagline: 'Show your support for the crossing',
    benefits: [
      'Logo on team website',
      'Social media mention at race start and finish',
      'Team Dynamic supporter certificate',
    ],
    featured: false,
    contactSubject: 'Sponsorship Enquiry — Supporter',
  },
  {
    id: 'partner',
    name: 'Partner',
    tagline: 'Align your brand with the voyage',
    benefits: [
      'Logo on boat and team kit',
      'Logo on team website (prominent placement)',
      'Dedicated social media posts throughout campaign',
      'Inclusion in all press materials',
      'Invite to race start event',
    ],
    featured: true,
    contactSubject: 'Sponsorship Enquiry — Partner',
  },
  {
    id: 'presenting',
    name: 'Presenting Partner',
    tagline: 'The highest level of partnership',
    benefits: [
      'Presenting partner naming rights',
      'Premium placement on boat, kit, and all media',
      'Dedicated campaign coverage and content',
      'Exclusive brand integration opportunities',
      'VIP race start and finish access',
      'Quarterly campaign briefings',
    ],
    featured: false,
    contactSubject: 'Sponsorship Enquiry — Presenting Partner',
  },
]

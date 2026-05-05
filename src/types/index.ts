export interface CrewMember {
  id: string
  name: string
  role: string
  bio: string
  imageSrc?: string
  imagePosition?: string
  imageFit?: 'cover' | 'contain'
  socialUrl?: string
}

export interface SponsorLogo {
  id: string
  name: string
  logoSrc?: string
  url?: string
}

export interface SponsorTier {
  id: string
  name: string
  priceRange: string
  tagline: string
  benefits: string[]
  examples?: string[]
  featured?: boolean
  size?: 'large' | 'small'
  contactSubject?: string
}

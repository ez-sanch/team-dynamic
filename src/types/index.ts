export interface CrewMember {
  id: string
  name: string
  role: string
  bio: string
  imageSrc?: string
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
  tagline: string
  benefits: string[]
  featured?: boolean
  contactSubject?: string
}

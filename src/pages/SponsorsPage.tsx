import { Sponsors } from '@/components/sections/Sponsors'
import { currentSponsors, sponsorTiers } from '@/data/sponsors'

export function SponsorsPage() {
  return <Sponsors currentSponsors={currentSponsors} tiers={sponsorTiers} />
}

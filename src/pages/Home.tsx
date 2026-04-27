import { Hero } from '@/components/sections/Hero'
import { HomeRaceTeaser } from '@/components/home/HomeRaceTeaser'
import { HomeTeamTeaser } from '@/components/home/HomeTeamTeaser'
import { HomeMissionTeaser } from '@/components/home/HomeMissionTeaser'

export function Home() {
  return (
    <>
      <Hero />
      <HomeRaceTeaser />
      <HomeTeamTeaser />
      <HomeMissionTeaser />
    </>
  )
}

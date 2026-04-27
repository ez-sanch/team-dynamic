import type { CrewMember } from '@/types'

export const rowers: CrewMember[] = [
  {
    id: '1',
    name: 'Aidan',
    role: 'Rower',
    bio: 'Growing up near the ocean in California, Aidan has always been drawn to outdoor sports — backpacking in the mountains and exploring along the coast. He now focuses on helping others overcome their fears of the ocean, whether through sailing or diving, inspiring people to build their own bond with the water.',
  },
  {
    id: '2',
    name: 'Charlie',
    role: 'Rower',
    bio: 'Charlie grew up between Saint Louis, Missouri and the Galápagos Islands, raised by parents deeply involved in planetary health and biodiversity. A professional sailor and educator aboard STV Argo with SeaMester, he has dedicated his life to sharing his passion for the ocean and the natural world.',
  },
]

export const supportCrew: CrewMember[] = [
  {
    id: '3',
    name: 'Emma',
    role: 'Project Manager & Coordinator',
    bio: 'Emma keeps the expedition on track — managing logistics, timelines, and partnerships so Aidan and Charlie can focus on the water.',
  },
  {
    id: '4',
    name: 'Colbie',
    role: 'Content & Marketing Manager',
    bio: 'Colbie tells the story of the crossing — building the brand, managing social media, and bringing the journey to audiences around the world.',
  },
]

export const crewMembers: CrewMember[] = [...rowers, ...supportCrew]

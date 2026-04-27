import type { CrewMember } from '@/types'

export const rowers: CrewMember[] = [
  {
    id: '1',
    name: 'Charlie',
    role: 'Rower',
    bio: 'Charlie grew up between Saint Louis, Missouri and the Galápagos Islands, raised by parents deeply involved in planetary health and biodiversity. A professional sailor and educator aboard STV Argo with SeaMester, he has dedicated his life to sharing his passion for the ocean and the natural world.',
    imageSrc: '/assets/team/Charlie-Headshots/PHOTO-2026-04-26-17-53-51.jpg',
    imagePosition: 'center 20%',
  },
  {
    id: '2',
    name: 'Aidan',
    role: 'Rower',
    bio: 'Growing up near the ocean in California, Aidan has always been drawn to outdoor sports — backpacking in the mountains and exploring along the coast. He now focuses on helping others overcome their fears of the ocean, whether through sailing or diving, inspiring people to build their own bond with the water.',
    imageSrc: '/assets/team/Aidan-Headshots/PHOTO-2026-04-26-17-53-52.jpg',
    imagePosition: 'center 20%',
  },
]

export const supportCrew: CrewMember[] = [
  {
    id: '3',
    name: 'Emma',
    role: 'Project Manager & Coordinator',
    bio: 'Emma keeps the expedition on track — managing logistics, timelines, and partnerships so Aidan and Charlie can focus on the water.',
    imageSrc: '/assets/team/Emma-Headshots/PHOTO-2026-04-26-17-53-51 2.jpg',
    imagePosition: 'center 45%',
  },
  {
    id: '4',
    name: 'Colbie',
    role: 'Content & Marketing Manager',
    bio: 'Colbie tells the story of the crossing — building the brand, managing social media, and bringing the journey to audiences around the world.',
    imageSrc: '/assets/team/Colbie-Headshots/PHOTO-2026-04-26-17-53-52 2.jpg',
    imagePosition: 'center 20%',
  },
]

export const crewMembers: CrewMember[] = [...rowers, ...supportCrew]

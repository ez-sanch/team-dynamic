import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { Race } from '@/pages/Race'
import { Team } from '@/pages/Team'
import { MissionPage } from '@/pages/MissionPage'
import { SponsorsPage } from '@/pages/SponsorsPage'
import { PartnersPage } from '@/pages/PartnersPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/"         element={<Home />} />
        <Route path="/race"     element={<Race />} />
        <Route path="/team"     element={<Team />} />
        <Route path="/mission"  element={<MissionPage />} />
        <Route path="/sponsors"  element={<SponsorsPage />} />
        <Route path="/partners"  element={<PartnersPage />} />
      </Route>
    </Routes>
  )
}

export default App

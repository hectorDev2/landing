import { Hero } from './components/Hero'
import { NavHeader } from './components/NavHeader'
import { TopPage } from './components/TopPage'

export default function Home () {
  return (
    <>
      <TopPage />
      <NavHeader />
      <Hero />
    </>
  )
}

import { Features } from './components/features/Features'
import { Hero } from './components/hero/Hero'
import { Projects } from './components/proyects/Projects'
import { SayAbout } from './components/SayAbout'
import { Services } from './components/Services'
import Team from './components/team/Team'

export default function Home () {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Projects />
      <Team />
      <SayAbout />
    </>
  )
}

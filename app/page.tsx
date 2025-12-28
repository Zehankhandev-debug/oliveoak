import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Projects from './components/Projects'
import Services from './components/Services'
import CTA from './components/CTA'
import Blog from './components/Blog'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <Services />
      <CTA />
      <Blog />
    </main>
  )
}
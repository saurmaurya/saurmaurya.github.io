import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import ImpactMetrics from './components/ImpactMetrics'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Timeline from './components/Timeline'
import ResumeCard from './components/ResumeCard'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import StickyCTA from './components/StickyCTA'
import CommandPalette from './components/CommandPalette'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-hero-gradient opacity-20" />

      {/* Single fixed header wrapper: contains both TopBar + Navbar */}
      <div className="fixed top-0 inset-x-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      {/* Reserve vertical space for TopBar + Navbar */}
      {/* Adjust this once visually. Start with ~120px and tweak. */}
      <main className="pt-[120px]">
        <Hero />
        <ImpactMetrics />
        <div className="section">
          <TechMarquee />
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Timeline />
        <ResumeCard />
        <Contact />
      </main>

      <Footer />
      <StickyCTA />
      <CommandPalette />
    </div>
  )
}

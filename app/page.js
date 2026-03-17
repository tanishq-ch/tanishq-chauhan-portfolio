import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import Experience from '@/components/Experience'
import Achievements from '@/components/Achievements'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
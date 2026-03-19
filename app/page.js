import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
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
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
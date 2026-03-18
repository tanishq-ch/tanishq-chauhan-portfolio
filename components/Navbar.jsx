'use client';
import { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Initialize dark mode class on body if needed
    document.body.classList.toggle('light-mode', !darkMode);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="font-display text-2xl font-bold gradient-text">TC</a>
          
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link text-sm font-medium hover:text-primary transition-colors" style={{ color: 'var(--text)' }}>
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg glass hover:scale-105 transition-transform" aria-label="Toggle dark mode">
              {darkMode ? <Icons.Sun /> : <Icons.Moon />}
            </button>
            <a href="/TanishqChauhan_Resume.pdf" download= "TanishqChauhan_Resume.pdf" className="btn-primary px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 text-white">
              <span className="flex items-center gap-2"><Icons.Download /> Resume</span>
            </a>
          </div>
          
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 right-0 w-72 glass lg:hidden transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 pt-20">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium hover:text-primary transition-colors py-2" style={{ color: 'var(--text)' }}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
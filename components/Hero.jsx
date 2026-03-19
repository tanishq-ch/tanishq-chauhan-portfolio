'use client';
import { useState, useEffect } from 'react';
import { Icons } from './Icons';
import Particles from './Particles';

const texts = ['Data Analyst', 'AI Enthusiast', 'Machine Learning Developer', 'Problem Solver'];

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark animate-gradient">
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>
      
      <Particles />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full glass mb-6 text-sm font-medium" style={{ color: 'var(--muted)' }}>
              Welcome to my portfolio
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span style={{ color: 'var(--text)' }}>Hi, I'm </span>
              <span className="gradient-text">Tanishq Chauhan</span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 h-12" style={{ color: 'var(--muted)' }}>
              <span>{displayText}</span>
              <span className="typing-cursor" />
            </div>
            <p className="text-lg mb-8 max-w-2xl mx-auto lg:mx-0" style={{ color: 'var(--muted)' }}>
              Passionate about transforming data into insights and building intelligent systems. Specializing in Machine Learning, Deep Learning, and AI solutions for real-world problems.
            </p>

            {/* --- Updated Button Section --- */}
            <div className="flex flex-col gap-6 items-center lg:items-start">
                
                {/* Top Row: View Projects & Resume */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <a 
                        href="https://github.com/tanishq-ch" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-primary px-8 py-3 rounded-lg font-semibold text-white"
                    >
                        <span className="flex items-center gap-2">
                        View Projects
                        <Icons.ExternalLink />
                        </span>
                    </a>
                    <a 
                        href="/TanishqChauhan_Resume.pdf" 
                        download="TanishqChauhan_Resume.pdf"
                        className="px-8 py-3 rounded-lg font-semibold glass border border-primary/50 hover:bg-primary/10 transition-colors" 
                        style={{ color: 'var(--text)' }}
                    >
                        <span className="flex items-center gap-2">
                        <Icons.Download /> 
                        Download Resume
                        </span>
                    </a>
                </div>

                {/* Bottom Row: Contact Icons with Colors */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {/* Email Button - Green */}
                    <a 
                        href="mailto:tanishqchauhan767@gmail.com" 
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
                    >
                        <Icons.Mail />
                        Email
                    </a>

                    {/* LinkedIn Button - Blue */}
                    <a 
                        href="https://www.linkedin.com/in/tanishq--chauhan/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
                    >
                        <Icons.LinkedIn />
                        LinkedIn
                    </a>

                    {/* GitHub Button - Purple */}
                    <a 
                        href="https://github.com/tanishq-ch" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300"
                    >
                        <Icons.Github />
                        GitHub
                    </a>

                    {/* Phone Button - Orange */}
                    <a 
                        href="tel:+91-9971505019" 
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                    >
                        <Icons.Phone />
                        Call
                    </a>
                </div>
            </div>
            {/* --- End Updated Section --- */}

          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full glass p-1 border-2 border-primary/30">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Tanishq Chauhan" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-lg glass animate-pulse-glow">
                <span className="text-accent font-semibold">Open to Opportunities</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2" style={{ color: 'var(--muted)' }}>
            <span className="text-sm">Scroll Down</span>
            <Icons.ChevronDown />
          </a>
        </div>
      </div>
    </section>
  );
}
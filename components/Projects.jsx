'use client';
import { useEffect, useRef, useState } from 'react';
import { projects } from '@/lib/data';
import { Icons } from './Icons';

export default function Projects() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Key Projects</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Innovative solutions at the intersection of AI and real-world applications
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title} 
                className={`glass rounded-2xl overflow-hidden card-hover scale-in ${isVisible ? 'visible' : ''}`} 
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>
                    {project.title}
                  </h3>
                  
                  {/* Short Description */}
                  <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                    {project.shortDescription}
                  </p>
                  
                  {/* Bullet Points with Proper Alignment */}
                  <ul className="mb-4 space-y-1 text-sm list-disc pl-4" style={{ color: 'var(--muted)' }}>
                    {project.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-full text-xs font-medium" 
                        style={{ background: 'var(--bg-lighter)', color: 'var(--text)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors" 
                      style={{ color: 'var(--muted)' }}
                    >
                      <Icons.Github /> GitHub
                    </a>
                    <a 
                      href={project.demo} 
                      className="flex items-center gap-2 text-sm font-medium hover:text-secondary transition-colors" 
                      style={{ color: 'var(--muted)' }}
                    >
                      <Icons.ExternalLink /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
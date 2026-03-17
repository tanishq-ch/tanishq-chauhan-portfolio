'use client';
import { useEffect, useRef, useState } from 'react';
import { experience } from '@/lib/data';

export default function Experience() {
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
    <section id="experience" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            My professional journey and work experience
          </p>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={exp.role} className={`timeline-item relative pl-12 lg:pl-16 slide-in-left ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.15}s` }}>
                  <div className="glass rounded-2xl p-6 card-hover">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary">{exp.duration}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text)' }}>{exp.role}</h3>
                    <p className="text-lg mb-3" style={{ color: 'var(--secondary)' }}>{exp.company}</p>
                    <p className="mb-4" style={{ color: 'var(--muted)' }}>{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />{achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
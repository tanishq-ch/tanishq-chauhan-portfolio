'use client';
import { useEffect, useRef, useState } from 'react';
import { certifications } from '@/lib/data';

export default function Certifications() {
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
    <section id="certifications" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Certifications & Training</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Continuous learning and professional development in cutting-edge technologies
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={cert.name} className={`glass rounded-2xl p-6 text-center card-hover scale-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-xl mx-auto mb-4 overflow-hidden glass flex items-center justify-center text-2xl font-bold text-primary">
                  {cert.issuer[0]}
                </div>
                <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text)' }}>{cert.name}</h3>
                <p className="text-sm mb-1" style={{ color: 'var(--muted)' }}>{cert.issuer}</p>
                <p className="text-xs font-semibold text-primary">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
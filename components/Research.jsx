'use client';
import { useEffect, useRef, useState } from 'react';
import { research } from '@/lib/data';
import { Icons } from './Icons';

export default function Research() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status) => {
    if (status === 'Published') return 'bg-accent/20 text-accent';
    if (status === 'Under Review') return 'bg-yellow-500/20 text-yellow-500';
    return 'bg-primary/20 text-primary';
  };

  return (
    <section id="research" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Research & Publications</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            My academic contributions and ongoing research work
          </p>
          
          <div className="space-y-6">
            {research.map((item, index) => (
              <div key={item.title} className={`glass rounded-2xl p-6 lg:p-8 card-hover slide-in-left ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-3">
                  <Icons.BookOpen />
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text)' }}>{item.title}</h3>
                <p className="mb-4" style={{ color: 'var(--muted)' }}>{item.abstract}</p>
                <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}><strong>Venue:</strong> {item.venue}</p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'var(--bg-lighter)', color: 'var(--text)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
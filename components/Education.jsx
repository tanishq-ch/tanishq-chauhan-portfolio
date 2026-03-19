'use client';
import { useEffect, useRef, useState } from 'react';
import { education } from '@/lib/data';
import { Icons } from './Icons';

export default function Education() {
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
    <section id="education" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Building a strong foundation in computer science and AI
          </p>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((item, index) => (
              <div
                key={item.school}
                className={`glass rounded-2xl p-6 lg:p-8 card-hover slide-in-left ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon Section */}
                  <div className="flex-shrink-0 flex md:justify-center">
                    <div className="w-16 h-16 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500">
                      <Icons.GraduationCap />
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text)' }}>
                        {item.school}
                      </h3>
                      <span className="text-sm font-medium text-primary mt-1 sm:mt-0">
                        {item.duration}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-medium mb-2" style={{ color: 'var(--secondary)' }}>
                      {item.degree}
                    </h4>
                    
                    <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ background: 'var(--bg-lighter)', color: 'var(--text)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
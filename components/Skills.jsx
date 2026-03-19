'use client';
import { useEffect, useRef, useState } from 'react';
import { skillsData, specializations } from '@/lib/data';
import { Icons } from './Icons';

export default function Skills() {
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
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Full Stack AI & Data Science Expertise
          </p>
          
          {/* Main Skills Grid - 6 Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {Object.entries(skillsData).map(([category, skills], index) => (
              <div
                key={category}
                className={`glass rounded-2xl p-6 card-hover scale-in ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <h3 className="font-display text-md font-semibold mb-4 text-center" style={{ color: 'var(--text)' }}>
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-md text-xs font-medium"
                      style={{ background: 'var(--bg-lighter)', color: 'var(--muted)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Specializations Section */}
          <div className="mt-20">
            <h3 className="font-display text-2xl font-semibold text-center mb-8" style={{ color: 'var(--text)' }}>
              Specializations
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {specializations.map((spec, index) => (
                <div
                  key={spec.title}
                  className={`glass rounded-2xl p-6 card-hover scale-in ${isVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${(index + 6) * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 text-white">
                    <Icons.Code />
                  </div>
                  <h4 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>
                    {spec.title}
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    {spec.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';
import { useEffect, useRef, useState } from 'react';
import { skillsData } from '@/lib/data';
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

  // Map icon names to actual components
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent /> : <Icons.Code />;
  };

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Comprehensive expertise across the AI and data science stack
          </p>
          
          {/* 3 Columns Grid (creates 2 rows for 6 items) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((item, index) => (
              <div
                key={item.category}
                className={`glass rounded-2xl p-8 card-hover scale-in group ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  
                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    {getIcon(item.icon)}
                  </div>
                  
                  {/* Category Title */}
                  <h3 className="font-display text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>
                    {item.category}
                  </h3>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-lg text-sm font-medium cursor-default transition-all duration-300 hover:bg-primary hover:text-white"
                        style={{ background: 'var(--bg-lighter)', color: 'var(--muted)' }}
                      >
                        {skill}
                      </span>
                    ))}
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
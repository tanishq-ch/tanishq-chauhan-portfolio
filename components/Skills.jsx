'use client';
import { useEffect, useRef, useState } from 'react';
import { skillsData } from '@/lib/data';
import { Icons } from './Icons';

export default function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const allSkills = Object.values(skillsData).flat();
      allSkills.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedBars(prev => [...prev, index]);
        }, index * 50);
      });
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Technologies and tools I work with
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <div key={category} className={`glass rounded-2xl p-6 card-hover scale-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${categoryIndex * 0.1}s` }}>
                <h3 className="font-display text-lg font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <Icons.Code />
                  </div>
                  {category}
                </h3>
                <div className="space-y-4">
                  {skills.map((skill) => {
                    const globalIndex = Object.values(skillsData).flat().findIndex(s => s.name === skill.name);
                    return (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span style={{ color: 'var(--text)' }}>{skill.name}</span>
                          <span style={{ color: 'var(--muted)' }}>{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div className={`skill-bar-fill ${animatedBars.includes(globalIndex) ? 'animate' : ''}`} style={{ width: `${skill.level}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
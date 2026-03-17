'use client';
import { useEffect, useRef, useState } from 'react';
import { achievements } from '@/lib/data';
import { Icons } from './Icons';

export default function Achievements() {
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
    <section id="achievements" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Recognition and accomplishments along my journey
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className={`glass rounded-2xl p-6 card-hover scale-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 text-white">
                  <Icons.Award />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>{achievement.title}</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
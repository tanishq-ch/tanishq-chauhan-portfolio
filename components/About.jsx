'use client';
import { useEffect, useRef, useState } from 'react';
import { Icons } from './Icons';

export default function About() {
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
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Get to know more about my background and interests
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`slide-in-left ${isVisible ? 'visible' : ''}`}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden glass p-2">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" alt="Profile" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              </div>
            </div>
            
            <div className={`slide-in-right ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <h3 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
                Computer Science Engineer & Data Science Specialist
              </h3>
              <p className="mb-6" style={{ color: 'var(--muted)' }}>
                I'm a 4th-year Computer Science Engineering student with a specialization in Data Science. My passion lies in leveraging machine learning and artificial intelligence to solve complex real-world problems.
              </p>
              <p className="mb-8" style={{ color: 'var(--muted)' }}>
                I have hands-on experience in building end-to-end machine learning pipelines, developing deep learning models for computer vision tasks, and creating data-driven solutions that make a meaningful impact.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'Computer Vision', 'Software Engineering'].map((topic) => (
                  <div key={topic} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span style={{ color: 'var(--text)' }}>{topic}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2"><Icons.GraduationCap /><span className="font-semibold" style={{ color: 'var(--text)' }}>Education</span></div>
                  <p style={{ color: 'var(--muted)' }}>B.Tech in Computer Science</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-2"><Icons.MapPin /><span className="font-semibold" style={{ color: 'var(--text)' }}>Location</span></div>
                  <p style={{ color: 'var(--muted)' }}>Noida, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
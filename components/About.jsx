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
          
          {/* Removed the grid layout, centered content instead */}
          <div className="max-w-3xl mx-auto text-center">
            <div className={`slide-in-right ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <h3 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
                Data Analyst | AI Enthusiast | Software Engineer
              </h3>
              <p className="mb-6" style={{ color: 'var(--muted)' }}>
                I'm a 4th-year Computer Science Engineering student with a specialization in Data Science and Analytics. My passion lies in leveraging machine learning and artificial intelligence to solve complex real-world problems.
              </p>
              <p className="mb-8" style={{ color: 'var(--muted)' }}>
                I have hands-on experience in building end-to-end machine learning pipelines, developing deep learning models for computer vision tasks, and creating data-driven solutions that make a meaningful impact.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 justify-center">
                {['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Deep Learning', 'Computer Vision', 'Software Engineering'].map((topic) => (
                  <div key={topic} className="flex items-center justify-center gap-2 p-2 glass rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span style={{ color: 'var(--text)' }}>{topic}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center justify-center gap-3 mb-2"><Icons.GraduationCap /><span className="font-semibold" style={{ color: 'var(--text)' }}>Education</span></div>
                  <p style={{ color: 'var(--muted)' }}>B.Tech in Computer Science and Engineering</p>
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center justify-center gap-3 mb-2"><Icons.MapPin /><span className="font-semibold" style={{ color: 'var(--text)' }}>Location</span></div>
                  <p style={{ color: 'var(--muted)' }}>Noida, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
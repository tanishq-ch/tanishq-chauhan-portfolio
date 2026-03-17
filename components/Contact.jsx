'use client';
import { useEffect, useRef, useState } from 'react';
import { Icons } from './Icons';

export default function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <section id="contact" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-center mb-16 max-w-2xl mx-auto" style={{ color: 'var(--muted)' }}>
            Let's connect and discuss opportunities
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`slide-in-left ${isVisible ? 'visible' : ''}`}>
              <h3 className="font-display text-2xl font-semibold mb-6" style={{ color: 'var(--text)' }}>Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:alex.chen@email.com" className="flex items-center gap-4 glass rounded-xl p-4 card-hover">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary"><Icons.Mail /></div>
                  <div><p className="text-sm" style={{ color: 'var(--muted)' }}>Email</p><p className="font-medium" style={{ color: 'var(--text)' }}>alex.chen@email.com</p></div>
                </a>
                <a href="#" className="flex items-center gap-4 glass rounded-xl p-4 card-hover">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary"><Icons.LinkedIn /></div>
                  <div><p className="text-sm" style={{ color: 'var(--muted)' }}>LinkedIn</p><p className="font-medium" style={{ color: 'var(--text)' }}>linkedin.com/in/alexchen</p></div>
                </a>
                <a href="#" className="flex items-center gap-4 glass rounded-xl p-4 card-hover">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent"><Icons.Github /></div>
                  <div><p className="text-sm" style={{ color: 'var(--muted)' }}>GitHub</p><p className="font-medium" style={{ color: 'var(--text)' }}>github.com/alexchen</p></div>
                </a>
                <div className="flex items-center gap-4 glass rounded-xl p-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary"><Icons.MapPin /></div>
                  <div><p className="text-sm" style={{ color: 'var(--muted)' }}>Location</p><p className="font-medium" style={{ color: 'var(--text)' }}>New Delhi, India</p></div>
                </div>
              </div>
            </div>
            
            <div className={`slide-in-right ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 lg:p-8">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Name</label>
                  <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary transition-all" style={{ background: 'var(--bg-lighter)', color: 'var(--text)' }} placeholder="Your name" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Email</label>
                  <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary transition-all" style={{ background: 'var(--bg-lighter)', color: 'var(--text)' }} placeholder="your@email.com" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Message</label>
                  <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none" style={{ background: 'var(--bg-lighter)', color: 'var(--text)' }} placeholder="Your message..." />
                </div>
                <button type="submit" className="btn-primary w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2">
                  <span className="flex items-center gap-2"><Icons.Send /> Send Message</span>
                </button>
                {formStatus && <p className="mt-4 text-center text-accent font-medium">{formStatus}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
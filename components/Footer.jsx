import { Icons } from './Icons';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-display text-xl font-bold gradient-text">Tanishq Chauhan</span>
            <span style={{ color: 'var(--muted)' }}>|</span>
            <span className="text-sm" style={{ color: 'var(--muted)' }}>Data Science Engineer</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-lg glass hover:scale-105 transition-transform" aria-label="GitHub"><Icons.Github /></a>
            <a href="#" className="p-2 rounded-lg glass hover:scale-105 transition-transform" aria-label="LinkedIn"><Icons.LinkedIn /></a>
            <a href="mailto:alex.chen@email.com" className="p-2 rounded-lg glass hover:scale-105 transition-transform" aria-label="Email"><Icons.Mail /></a>
          </div>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>© {new Date().getFullYear()} Tanishq Chauhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
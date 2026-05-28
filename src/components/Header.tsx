import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';
import { hero } from '../data/portfolioData';

const navLinks = [
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-50/75 dark:bg-[#0A0A0B]/75 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <nav className="flex justify-between items-center">
          <a
            href="#home"
            className="text-[11px] font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-50 hover:opacity-85 transition-opacity"
          >
            R. Bedekar
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="focus-ring text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors rounded"
              >
                {link.name}
              </a>
            ))}
            <a
              href={hero.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors rounded"
            >
              <ExternalLink size={12} />
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="focus-ring p-1.5 rounded-md text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 transition-colors"
              aria-label={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-400"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden mt-2.5 pt-2.5 border-t border-zinc-200/50 dark:border-zinc-800/50 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={hero.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

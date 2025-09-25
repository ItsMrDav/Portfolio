import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Footer', href: '#footer' },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={cn(
          'fixed w-full z-40 transition-all duration-300',
          isScrolled
            ? 'py-3 bg-background/80 backdrop-blur-md shadow-sm'
            : 'py-5'
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            className="text-2xl font-black text-primary flex items-center font-mono"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Davut</span>Simsek
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 font-black hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="md:hidden p-2 text-foreground z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Theme Toggle (only on desktop) */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Overlay (SEPARATE from <nav>) */}
      <div
        className={cn(
          'fixed inset-0 bg-background/85 backdrop-blur-md z-50 flex flex-col items-center justify-center md:hidden',
          'transition-all duration-300',
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

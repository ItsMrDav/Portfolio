import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function ThemeToggle() {
  // State: track current theme (dark or light)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On mount → load saved theme or fallback to system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const dark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDarkMode(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  // Toggle theme manually
  const toggleTheme = () => {
    const dark = !isDarkMode;
    setIsDarkMode(dark);
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'fixed max-sm:hidden top-10 right-10 z-50 p-2 rounded-full transition-color duration-300',
        'focus:outline-hidden'
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
}

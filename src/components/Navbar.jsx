import { useState } from 'react';
import { Menu, X, Brush, Palette } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/60 dark:bg-black/40 border border-white/30 dark:border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md">
                <Brush size={18} />
              </span>
              <span className="font-semibold text-gray-900 dark:text-white tracking-tight">YourName.Design</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-gray-700/90 dark:text-gray-100/90 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 text-sm font-medium hover:shadow-lg transition-shadow">
                <Palette size={16} /> Hire Me
              </a>
            </nav>

            <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/10">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-black/5 dark:border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-gray-800 dark:text-gray-100 hover:bg-black/5 dark:hover:bg-white/10">
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 text-sm font-medium">
                  <Palette size={16} /> Hire Me
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

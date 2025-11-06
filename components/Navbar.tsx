import Link from 'next/link';
import { useState } from 'react';

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className = '' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/aalayam', label: 'Aalayam' },
    { href: '/aashramam', label: 'Aashramam' },
    { href: '/guru-parampara', label: 'Guru Parampara' },
    { href: '/mahapadayatra', label: 'Mahapadayatra' },
    { href: '/donate', label: 'Donate' },
    { href: '/feedback', label: 'Feedback' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 ${className}`}>
      <div className="mx-auto max-w-4xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            Bhuvaneshwari Peetham
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4 text-sm">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-orange-600 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block py-2 px-4 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
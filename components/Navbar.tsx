'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '@/app/constants/links';
import { SubMenu } from './SubMenu';
import { TopButtons } from './TopButtons';

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className = '' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`bg-brand-orange text-brand-ivory sticky top-0 z-50 shadow-lg ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Row */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4 ml-2">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/images/bp-logo.jpg" 
                alt="Bhuvaneshwari Peetham Logo" 
                className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold"
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="font-serif text-xl font-bold text-brand-gold">Bhuvaneshwari Peetham</span>
                <small className="text-xs text-brand-ivory/80">Aalayam & Ashramam</small>
              </div>
            </Link>
          </div>
          <nav className="hidden lg:flex gap-6 items-center text-sm">
            <TopButtons />
            <div className="flex items-center gap-4 ml-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.142v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.405 0 22.675 0z"/></svg>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
              </a>
              <a href="https://youtu.be/LfDiX4pJPvc" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </nav>
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="hidden lg:flex items-center justify-center h-12 bg-brand-maroon/50 rounded-t-lg">
          <nav className="flex gap-8 items-center text-base">
            {navLinks.bottomRow.map((link) => (
              <div key={link.href} className="relative group">
                <Link href={link.href} className="hover:text-brand-gold transition-colors duration-300 flex items-center gap-1">
                  {link.label}
                  {link.submenu && (
                    <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  )}
                </Link>
                {link.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 opacity-0 group-hover:opacity-100 group-hover:mt-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <SubMenu items={link.submenu} />
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-brand-maroon/95 backdrop-blur-sm absolute top-full left-0 w-full">
          <nav className="flex flex-col p-4 gap-2">
            {[...navLinks.topRow, ...navLinks.bottomRow].map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 rounded-md hover:bg-white/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.submenu && (
                  <div className="pl-4 pt-2">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className="block py-1.5 px-3 text-sm rounded-md hover:bg-white/10 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

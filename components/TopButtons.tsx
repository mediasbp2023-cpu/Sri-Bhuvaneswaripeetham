"use client";

import Link from 'next/link';
import { navLinks } from '@/app/constants/links';

export interface TopButtonsProps {
  className?: string;
}

export function TopButtons({ className = '' }: TopButtonsProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {navLinks.topRow.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#800000] font-semibold rounded-full hover:from-[#FFA500] hover:to-[#FFD700] transition-all duration-300 shadow-md text-sm"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

import Image from 'next/image';

export interface HeroBannerProps {
  className?: string;
  title: string;
  description?: string;
  // Support subtitle alias commonly used across pages
  subtitle?: string;
  // Make image optional to avoid empty string errors
  imageSrc?: string;
  imageAlt?: string;
  height?: 'small' | 'medium' | 'large';
  overlay?: boolean;
}

export function HeroBanner({
  className = '',
  title,
  description,
  subtitle,
  imageSrc,
  imageAlt,
  height = 'medium',
  overlay = true,
}: HeroBannerProps) {
  return null;
}

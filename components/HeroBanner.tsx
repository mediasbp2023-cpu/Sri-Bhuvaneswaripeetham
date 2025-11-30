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
  const heightClasses = {
    small: 'h-[300px]',
    medium: 'h-[400px]',
    large: 'h-[500px]',
  };

  const shouldShowImage = typeof imageSrc === 'string'
    ? imageSrc.trim().length > 0
    : Boolean(imageSrc);

  return (
    <div className={`relative w-full ${heightClasses[height]} ${className}`}>
      {shouldShowImage ? (
        <Image
          src={imageSrc as string}
          alt={imageAlt || title}
          fill
          className="object-cover"
          priority
        />
      ) : (
        // Fallback brand gradient when no image is provided
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-orange to-brand-gold" aria-hidden />
      )}

      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/70 via-brand-gold/40 to-brand-orange/30" />
      )}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-maroon mb-4 relative z-10 drop-shadow-lg">
          {title}
        </h1>
        <div className="w-28 h-1 bg-gradient-to-r from-brand-gold via-brand-orange to-brand-gold rounded-full mb-4 relative z-10" aria-hidden />
        {(description || subtitle) && (
          <p className="text-lg md:text-xl text-white/95 max-w-2xl relative z-10">
            {description || subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

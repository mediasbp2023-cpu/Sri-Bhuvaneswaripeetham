import Image from 'next/image';

export interface HeroBannerProps {
  className?: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  height?: 'small' | 'medium' | 'large';
  overlay?: boolean;
}

export function HeroBanner({
  className = '',
  title,
  description,
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

  return (
    <div className={`relative w-full ${heightClasses[height]} ${className}`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl relative z-10">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
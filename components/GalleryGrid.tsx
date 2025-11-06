import Image from 'next/image';
import { useState } from 'react';

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface GalleryGridProps {
  className?: string;
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export function GalleryGrid({
  className = '',
  images,
  columns = 3,
}: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const columnClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <>
      <div className={`grid ${columnClass[columns]} gap-4 ${className}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {image.caption && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="relative w-full max-w-4xl max-h-[80vh]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="object-contain mx-auto"
            />
            {selectedImage.caption && (
              <p className="text-white text-center mt-4">{selectedImage.caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
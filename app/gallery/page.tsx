"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { HeroBanner } from "@/components";
import Link from "next/link";

// Get all images from SBP gallery folders
const getAllSBPImages = () => {
  const images: Array<{ src: string; alt: string; width: number; height: number }> = [];
  
  // Alayam Album images
  const alayamImages = [
    "aalayam 1.png", "aalayam 2.png", "aalayam 3.png", "aalayam 4.jpg",
    "aalayam 5.png", "aalayam 6.jpg", "aalayam 7.png", "aalayam 8.jpg",
    "aalayam 9.jpg", "Ashrama Dwaram.jpg", "Panchamukha Anjaneya Swamy.jpg",
    "Sri Satyananda Bharathi Swamy Samadhi.jpg"
  ];
  
  alayamImages.forEach((img) => {
    images.push({
      src: `/images/sbp-gallery/Alayam_Album/${img}`,
      alt: img.replace(/\.[^/.]+$/, "").replace(/\s+/g, " "),
      width: 1200,
      height: 800
    });
  });
  
  // Ashramam Album images
  const ashramamImages = [
    "aashramam 1.jpg", "aashramam 2.jpg", "aashramam 3.png", "aashramam 4.jpg",
    "aashramam 5.jpg", "aashramam 6.jpg", "aashramam 7.png", "aashramam 8.jpg",
    "aashramam 8.png", "aashramam 9.jpg", "aashramam 10.jpg", "aashramam 11.jpg",
    "aashramam 12.png", "aashramam 13.jpg", "aashramam 14.jpg", "aashramam 15.jpg",
    "aashramam 16.jpg", "aashramam 17.jpg", "aashramam 18.png"
  ];
  
  ashramamImages.forEach((img) => {
    images.push({
      src: `/images/sbp-gallery/Ashramam_Album/${img}`,
      alt: img.replace(/\.[^/.]+$/, "").replace(/\s+/g, " "),
      width: 1200,
      height: 800
    });
  });
  
  // Pooja Album images
  const poojaImages = [
    "pooja 1.jpg", "pooja 2.jpg", "pooja 3.jpg", "pooja 4.jpg",
    "pooja 5.jpg", "pooja 6.jpg", "pooja 7.jpg", "pooja 8.jpg", "pooja 9.jpg"
  ];
  
  poojaImages.forEach((img) => {
    images.push({
      src: `/images/sbp-gallery/Pooja_Album/${img}`,
      alt: img.replace(/\.[^/.]+$/, "").replace(/\s+/g, " "),
      width: 1200,
      height: 800
    });
  });
  
  return images;
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const allImages = useMemo(() => getAllSBPImages(), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-cream via-white to-brand-gold/10">
      <HeroBanner
        title="Sacred Moments Gallery"
        description="All divine moments and spiritual experiences"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <svg
              className="w-8 h-8"
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

          <div
            className="relative w-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Selected image"
              width={1200}
              height={800}
              className="object-contain mx-auto w-full h-full"
            />
          </div>
        </div>
      )}

      <div className="text-center mt-12 pb-8">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-brand-maroon text-brand-gold rounded-lg hover:bg-brand-maroon/90 transition-colors font-semibold"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}


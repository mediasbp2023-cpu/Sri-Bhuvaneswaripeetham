'use client';

import { useRouter } from 'next/navigation';

export function BackNav() {
  const router = useRouter();

  const handleBack = () => {
    try {
      router.back();
    } catch {
      window.location.href = '/';
    }
  };

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center h-12">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-3 text-sm text-orange-600 hover:text-orange-700 px-3 py-1 rounded-md transition"
            aria-label="Go back"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}

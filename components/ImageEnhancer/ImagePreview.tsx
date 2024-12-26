import React from 'react';

interface ImagePreviewProps {
  original: string | null;
  enhanced: string | null;
}

export function ImagePreview({ original, enhanced }: ImagePreviewProps) {
  if (!original) return null;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-900 text-center md:text-left">Original</h3>
        <div className="relative aspect-square rounded-lg overflow-hidden bg-white shadow-sm">
          <img
            src={original}
            alt="Original"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-900 text-center md:text-left">Enhanced</h3>
        <div className="relative aspect-square rounded-lg overflow-hidden bg-white shadow-sm">
          {enhanced ? (
            <img
              src={enhanced}
              alt="Enhanced"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-sm text-gray-500">Enhancing image...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
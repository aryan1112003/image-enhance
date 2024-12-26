import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploaderProps {
  onImageSelect: (file: File) => void;
}

export function ImageUploader({ onImageSelect }: ImageUploaderProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        onImageSelect(file);
      }
    },
    [onImageSelect]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        onImageSelect(file);
      }
    },
    [onImageSelect]
  );

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full max-w-2xl mx-auto p-4 sm:p-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors bg-white/50 backdrop-blur-sm"
    >
      <label className="flex flex-col items-center justify-center space-y-4 cursor-pointer">
        <div className="relative">
          <Upload className="w-8 sm:w-12 h-8 sm:h-12 text-blue-500" />
          <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-pulse" />
        </div>
        <div className="text-center">
          <span className="text-base sm:text-lg font-medium text-gray-600 block">
            Drop your image here or click to upload
          </span>
          <span className="text-xs sm:text-sm text-gray-500 block mt-1">
            Supports: JPG, PNG (Max 10MB)
          </span>
        </div>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileInput}
        />
      </label>
    </div>
  );
}
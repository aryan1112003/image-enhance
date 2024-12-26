import React, { useState, useCallback } from 'react';
import { Download } from 'lucide-react';
import { ImageUploader } from './ImageUploader';
import { ImagePreview } from './ImagePreview';
import { enhanceImage } from '../../utils/imageProcessing';
import { Hero } from './Hero';

export function ImageEnhancer() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);

  const handleImageSelect = useCallback(async (file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      setOriginalImage(dataUrl);
      setEnhancedImage(null);
      
      try {
        const enhanced = await enhanceImage(dataUrl);
        setEnhancedImage(enhanced);
      } catch (error) {
        console.error('Error enhancing image:', error);
      }
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDownload = useCallback(() => {
    if (enhancedImage) {
      const link = document.createElement('a');
      link.href = enhancedImage;
      link.download = 'enhanced-image.png';
      link.click();
    }
  }, [enhancedImage]);

  return (
    <div className="space-y-8 sm:space-y-12">
      <Hero />
      <ImageUploader onImageSelect={handleImageSelect} />
      
      {originalImage && (
        <div className="space-y-8">
          <ImagePreview
            original={originalImage}
            enhanced={enhancedImage}
          />
          
          {enhancedImage && (
            <div className="flex justify-center">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm hover:shadow-md"
              >
                <Download className="w-5 h-5" />
                <span className="font-medium">Download Enhanced Image</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
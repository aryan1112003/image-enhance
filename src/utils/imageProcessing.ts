import * as tf from '@tensorflow/tfjs';
import { addWatermark } from './watermark';

export async function enhanceImage(imageUrl: string): Promise<string> {
  // Load the image
  const img = await loadImage(imageUrl);
  
  // Convert to tensor
  const tensor = tf.browser.fromPixels(img);
  
  // Normalize the values
  const normalized = tensor.toFloat().div(tf.scalar(255));
  
  // Apply enhancement operations
  const enhanced = tf.tidy(() => {
    // Increase contrast
    const contrast = tf.sub(normalized, 0.5);
    const contrasted = tf.mul(contrast, 1.2);
    const backScaled = tf.add(contrasted, 0.5);
    
    // Ensure values are in valid range
    return tf.clipByValue(backScaled, 0, 1);
  });
  
  // Convert back to image data
  const outputCanvas = document.createElement('canvas');
  outputCanvas.width = img.width;
  outputCanvas.height = img.height;
  
  await tf.browser.toPixels(enhanced, outputCanvas);
  
  // Add watermark
  addWatermark(outputCanvas, '© Aryan Acharya');
  
  // Cleanup
  tensor.dispose();
  enhanced.dispose();
  
  return outputCanvas.toDataURL('image/png');
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = url;
  });
}
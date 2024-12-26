export function addWatermark(canvas: HTMLCanvasElement, text: string): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Configure watermark text
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.font = '16px Arial';
  
  // Add watermark in bottom right
  const padding = 10;
  const textWidth = ctx.measureText(text).width;
  const x = canvas.width - textWidth - padding;
  const y = canvas.height - padding;
  
  ctx.fillText(text, x, y);
}
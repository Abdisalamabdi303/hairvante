import { useEffect, useState } from "react";
import logo from "@/assets/hairvante-logo.png";
import { removeBackground, loadImage } from "@/utils/backgroundRemoval";

interface LogoProps {
  className?: string;
  alt?: string;
}

const Logo = ({ className = "h-20 md:h-28 w-auto", alt = "HairVante - Premium Hair Transplant Turkey" }: LogoProps) => {
  const [processedLogo, setProcessedLogo] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processLogo = async () => {
      try {
        // Load the original image
        const response = await fetch(logo);
        const blob = await response.blob();
        const img = await loadImage(blob);
        
        // Remove background
        const processedBlob = await removeBackground(img);
        const url = URL.createObjectURL(processedBlob);
        
        setProcessedLogo(url);
        setIsProcessing(false);
      } catch (error) {
        console.error('Failed to process logo:', error);
        // Fallback to original logo if processing fails
        setProcessedLogo(logo);
        setIsProcessing(false);
      }
    };

    processLogo();

    return () => {
      if (processedLogo && processedLogo !== logo) {
        URL.revokeObjectURL(processedLogo);
      }
    };
  }, []);

  if (isProcessing) {
    return (
      <div className={className}>
        <div className="animate-pulse bg-primary/20 rounded-lg h-full w-48" />
      </div>
    );
  }

  return (
    <img 
      src={processedLogo || logo} 
      alt={alt}
      className={`${className} drop-shadow-2xl`}
      style={{ filter: 'drop-shadow(0 4px 20px rgba(212, 175, 55, 0.3))' }}
    />
  );
};

export default Logo;

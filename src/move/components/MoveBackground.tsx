import React from 'react';

type MoveBackgroundProps = {
  images?: string[];
};

const FALLBACK_IMAGES = [
  '/images/agosto.jpg',
  '/images/setembro.jpg'
];

export default function MoveBackground({
  images = FALLBACK_IMAGES
}: MoveBackgroundProps) {
  const validImages = images.length > 0 ? images : FALLBACK_IMAGES;

  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    if (validImages.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrentImage((current) => {
        return (current + 1) % validImages.length;
      });
    }, 7000);

    return () => window.clearInterval(interval);
  }, [validImages.length]);

  return (
    <div
      className="
        pointer-events-none
        fixed inset-0
        z-0
        overflow-hidden
        bg-black
      "
    >
      {validImages.map((image, index) => (
        <div
          key={image}
          className={`
            absolute inset-0
            bg-cover bg-center
            transition-opacity
            duration-[1800ms]
            ${
              index === currentImage
                ? 'opacity-100'
                : 'opacity-0'
            }
          `}
          style={{
            backgroundImage: `url("${image}")`
          }}
        />
      ))}

      {/* Overlay mais leve */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradiente para preservar leitura */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/20
          via-black/30
          to-black/65
        "
      />

      {/* leve destaque central */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(0,82,255,0.08),transparent_55%)]
        "
      />
    </div>
  );
}

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
  const validImages =
    images.length > 0
      ? images
      : FALLBACK_IMAGES;

  const [currentImage, setCurrentImage] =
    React.useState(0);

  React.useEffect(() => {
    if (validImages.length <= 1) {
      return;
    }

    const interval =
      window.setInterval(() => {
        setCurrentImage((current) => {
          return (
            (current + 1) %
            validImages.length
          );
        });
      }, 7000);

    return () => {
      window.clearInterval(interval);
    };
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
      {/* IMAGENS */}
      {validImages.map(
        (image, index) => (
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
              backgroundImage:
                `url("${image}")`
            }}
          />
        )
      )}

      {/* ESCURECIMENTO UNIFORME */}
      <div
        className="
          absolute inset-0
          bg-black/55
        "
      />

      {/* BLUR LEVE */}
      <div
        className="
          absolute inset-0
          backdrop-blur-[1px]
        "
      />

      {/* GRADIENTE */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/45
          via-black/25
          to-black/70
        "
      />

      {/* DESTAQUE AZUL MUITO SUAVE */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(0,82,255,0.07),transparent_60%)]
        "
      />
    </div>
  );
}

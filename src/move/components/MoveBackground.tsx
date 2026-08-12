import React from 'react';

const images = [
  '/images/agosto.jpg',
  '/images/setembro.jpg',
  '/images/novembro.jpg'
];

export default function MoveBackground() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 9000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {images.map((image, imageIndex) => (
        <div
          key={image}
          className={`
            absolute inset-0
            bg-cover bg-center
            transition-opacity
            duration-[1800ms]
            ${
              imageIndex === index
                ? 'opacity-100'
                : 'opacity-0'
            }
          `}
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      ))}

      {/* CAMADA ESCURA PARA LEITURA */}
      <div className="absolute inset-0 bg-black/80" />

      {/* GRADIENTE EXTRA */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />
    </div>
  );
}

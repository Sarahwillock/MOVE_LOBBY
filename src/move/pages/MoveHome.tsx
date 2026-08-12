type SlideshowProps = {
  images: readonly string[];
  fallbackImage?: string;
  delay?: number;
  startOffset?: number;
};

function Slideshow({
  images,
  fallbackImage = '/images/agosto.jpg',
  delay = 6000,
  startOffset = 0
}: SlideshowProps) {
  const availableImages =
    images.length > 0
      ? images
      : [fallbackImage];

  const [currentImage, setCurrentImage] =
    React.useState(
      startOffset % availableImages.length
    );

  React.useEffect(() => {
    if (availableImages.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentImage(
        (current) =>
          (current + 1) % availableImages.length
      );
    }, delay);

    return () => {
      window.clearInterval(interval);
    };
  }, [availableImages.length, delay]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">

      {availableImages.map((image, index) => {
        const isActive = index === currentImage;

        return (
          <React.Fragment key={`${image}-${index}`}>

            {/* FUNDO DESFOCADO */}
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className={`
                absolute inset-0
                h-full w-full
                scale-110
                object-cover
                blur-2xl
                transition-opacity
                duration-[1800ms]
                ease-in-out
                ${
                  isActive
                    ? 'opacity-60'
                    : 'opacity-0'
                }
              `}
            />

            {/* FOTO INTEIRA */}
            <img
              src={image}
              alt=""
              className={`
                absolute inset-0
                h-full w-full
                object-contain
                object-center
                transition-all
                duration-[1800ms]
                ease-in-out
                ${
                  isActive
                    ? 'scale-100 opacity-100'
                    : 'scale-[1.02] opacity-0'
                }
              `}
            />

          </React.Fragment>
        );
      })}

      {/* leve escurecimento */}
      <div className="absolute inset-0 bg-black/10" />

    </div>
  );
}

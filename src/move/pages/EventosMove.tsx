import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';

import { moveImages } from '../moveImages';

const agostoImages = moveImages.filter(
  (_, index) => index % 2 === 0
);

const setembroImages = moveImages.filter(
  (_, index) => index % 2 !== 0
);

const months = [
  {
    name: 'AGOSTO',
    monthNumber: 8,
    path: '/move/agosto',
    image: '/images/agosto.jpg',
    border: 'border-blue-600'
  },
  {
    name: 'SETEMBRO',
    monthNumber: 9,
    path: '/move/setembro',
    image: '/images/setembro.jpg',
    border: 'border-pink-600'
  },
  {
    name: 'OUTUBRO',
    monthNumber: 10,
    path: '/move/outubro',
    image: '/images/outubro.jpg',
    border: 'border-orange-600'
  },
  {
    name: 'NOVEMBRO',
    monthNumber: 11,
    path: '/move/novembro',
    image: '/images/novembro.jpg',
    border: 'border-violet-600'
  },
  {
    name: 'DEZEMBRO',
    monthNumber: 12,
    path: '/move/dezembro',
    image: '/images/dezembro.jpg',
    border: 'border-emerald-600'
  }
];

type SlideshowProps = {
  images: readonly string[];
  fallbackImage: string;
  delay?: number;
  startOffset?: number;
};

function Slideshow({
  images,
  fallbackImage,
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
    setCurrentImage(
      startOffset % availableImages.length
    );
  }, [
    startOffset,
    availableImages.length
  ]);

  React.useEffect(() => {
    if (availableImages.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentImage(
        (current) =>
          (current + 1) %
          availableImages.length
      );
    }, delay);

    return () => {
      window.clearInterval(interval);
    };
  }, [
    availableImages.length,
    delay
  ]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {availableImages.map((image, index) => {
        const isActive =
          index === currentImage;

        return (
          <React.Fragment
            key={`${image}-${index}`}
          >
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

      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}

export default function EventosMove() {
  const currentMonth =
    new Date().getMonth() + 1;

  const startMonth =
    currentMonth < 8
      ? 8
      : currentMonth > 12
      ? 12
      : currentMonth;

  const visibleMonths = months.filter(
    (month) =>
      month.monthNumber >= startMonth &&
      month.monthNumber <= startMonth + 1
  );

  const visibleMonthsLabel =
    visibleMonths.length === 2
      ? `${visibleMonths[0].name} E ${visibleMonths[1].name}`
      : visibleMonths[0]?.name ?? '';

  return (
    <div className="mx-auto w-full max-w-[1500px] p-4 sm:p-6 lg:p-8">

      {/* CABEÇALHO */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-pink-500">
          <CalendarDays className="h-5 w-5" />

          <span className="text-xs font-black uppercase tracking-[0.25em]">
            MOVE ALPHAVILLE
          </span>
        </div>

        <h1 className="mt-2 text-4xl font-black italic uppercase text-white sm:text-5xl lg:text-6xl">
          Eventos MOVE
        </h1>

        <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-neutral-400">
          Escolha o mês para conferir os eventos e GCs da MOVE Alphaville.
          Dentro de cada evento você pode adicioná-lo diretamente ao
          calendário do seu celular.
        </p>
      </header>

      {/* MESES VISÍVEIS */}
      <div className="mb-5">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-500">
          Programação disponível
        </p>

        <h2 className="mt-1 text-xl font-black uppercase text-white">
          {visibleMonthsLabel}
        </h2>
      </div>

      {/* CARDS DOS MESES */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

        {visibleMonths.map((month) => (
          <Link
            key={month.name}
            to={month.path}
            className={`
              group relative block
              aspect-[4/3]
              min-h-[230px]
              overflow-hidden
              rounded-2xl
              border
              bg-neutral-900
              shadow-xl
              transition-transform
              duration-300
              hover:scale-[1.01]
              active:scale-[0.99]
              ${month.border}
            `}
          >
            <Slideshow
              images={
                month.name === 'AGOSTO'
                  ? agostoImages
                  : month.name === 'SETEMBRO'
                  ? setembroImages
                  : moveImages
              }
              fallbackImage={month.image}
              delay={
                month.name === 'AGOSTO'
                  ? 5200
                  : month.name === 'SETEMBRO'
                  ? 6400
                  : 6000
              }
              startOffset={
                month.name === 'AGOSTO'
                  ? 0
                  : month.name === 'SETEMBRO'
                  ? 1
                  : 0
              }
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black/90
                via-black/20
                to-transparent
              "
            />

            <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/60">
                Ver eventos
              </p>

              <span className="mt-1 block text-4xl font-black italic uppercase text-white sm:text-5xl">
                {month.name}
              </span>

              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white/60">
                Toque para abrir
              </p>
            </div>
          </Link>
        ))}

      </div>

      {/* INFORMAÇÃO */}
      <section className="mt-8 rounded-2xl border border-pink-600/30 bg-pink-600/10 p-5">
        <p className="text-sm font-semibold leading-relaxed text-neutral-300">
          📅 Escolha um evento dentro do mês e toque em{' '}
          <strong>Adicionar ao calendário</strong> para salvá-lo no seu
          celular.
        </p>
      </section>

    </div>
  );
}

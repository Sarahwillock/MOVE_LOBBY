import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';

import {
  MONTHS_2026,
  getUpcomingMoveEventsByMonth
} from '../data/events2026';

import { moveImages } from '../moveImages';

const agostoImages = moveImages.filter(
  (_, index) => index % 5 === 0
);

const setembroImages = moveImages.filter(
  (_, index) => index % 5 === 1
);

const outubroImages = moveImages.filter(
  (_, index) => index % 5 === 2
);

const novembroImages = moveImages.filter(
  (_, index) => index % 5 === 3
);

const dezembroImages = moveImages.filter(
  (_, index) => index % 5 === 4
);

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

function getImagesForMonth(
  monthNumber: number
) {
  switch (monthNumber) {
    case 8:
      return agostoImages;

    case 9:
      return setembroImages;

    case 10:
      return outubroImages;

    case 11:
      return novembroImages;

    case 12:
      return dezembroImages;

    default:
      return moveImages;
  }
}

function getFallbackImage(
  monthNumber: number
) {
  switch (monthNumber) {
    case 8:
      return '/images/agosto.jpg';

    case 9:
      return '/images/setembro.jpg';

    case 10:
      return '/images/outubro.jpg';

    case 11:
      return '/images/novembro.jpg';

    case 12:
      return '/images/dezembro.jpg';

    default:
      return '/images/agosto.jpg';
  }
}

function getBorder(
  monthNumber: number
) {
  switch (monthNumber) {
    case 8:
      return 'border-blue-600';

    case 9:
      return 'border-pink-600';

    case 10:
      return 'border-orange-600';

    case 11:
      return 'border-violet-600';

    case 12:
      return 'border-emerald-600';

    default:
      return 'border-white/20';
  }
}

export default function EventosMove() {
  /* =======================================================
     SOMENTE EVENTOS FUTUROS DA MOVE
  ======================================================= */

  const monthsWithEvents =
    MONTHS_2026.map(
      (month) => {
        const events =
          getUpcomingMoveEventsByMonth(
            month.number
          );

        return {
          ...month,
          events
        };
      }
    );

  /*
   * Remove automaticamente os meses
   * que não possuem mais nenhum evento futuro.
   */
  const visibleMonths =
    monthsWithEvents.filter(
      (month) =>
        month.events.length > 0
    );

  return (
    <div className="mx-auto w-full max-w-[1500px] p-4 sm:p-6 lg:p-8">

      {/* ===================================================
          CABEÇALHO
      =================================================== */}

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
          Confira os próximos eventos da
          MOVE, dos GCs e das programações
          realizadas em conjunto com a Igreja.
        </p>

      </header>

      {/* ===================================================
          PROGRAMAÇÃO
      =================================================== */}

      <div className="mb-5">

        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-500">
          Próximos eventos
        </p>

        <h2 className="mt-1 text-xl font-black uppercase text-white">
          Agosto a Dezembro
        </h2>

      </div>

      {/* ===================================================
          CARDS DOS MESES
      =================================================== */}

      {visibleMonths.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {visibleMonths.map(
            (month, index) => {
              const images =
                getImagesForMonth(
                  month.number
                );

              const fallbackImage =
                getFallbackImage(
                  month.number
                );

              const border =
                getBorder(
                  month.number
                );

              return (
                <Link
                  key={month.number}
                  to={month.path}
                  aria-label={`Abrir eventos de ${month.name}`}
                  className={`
                    group relative
                    block
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

                    ${border}
                  `}
                >

                  {/* FOTOS */}
                  <Slideshow
                    images={images}
                    fallbackImage={
                      fallbackImage
                    }
                    delay={
                      5000 +
                      index * 700
                    }
                    startOffset={
                      index
                    }
                  />

                  {/* GRADIENTE */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/90
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* INFORMAÇÕES */}
                  <div
                    className="
                      absolute
                      bottom-0 left-0 right-0
                      z-10
                      p-5
                    "
                  >

                    <p
                      className="
                        text-[10px]
                        font-black uppercase
                        tracking-[0.22em]
                        text-white/60
                      "
                    >
                      Ver próximos eventos
                    </p>

                    <span
                      className="
                        mt-1 block
                        text-4xl
                        font-black italic
                        uppercase
                        text-white
                        sm:text-5xl
                      "
                    >
                      {month.name}
                    </span>

                    <p
                      className="
                        mt-2
                        text-xs
                        font-bold uppercase
                        tracking-wider
                        text-white/60
                      "
                    >
                      {month.events.length}{' '}
                      {month.events.length === 1
                        ? 'evento futuro'
                        : 'eventos futuros'}
                    </p>

                  </div>

                </Link>
              );
            }
          )}

        </div>
      ) : (
        <section
          className="
            rounded-2xl
            border
            border-dashed
            border-white/10
            bg-black/50
            p-8
            text-center
            backdrop-blur-md
          "
        >
          <CalendarDays className="mx-auto h-7 w-7 text-neutral-500" />

          <h2 className="mt-4 text-lg font-black uppercase text-white">
            Nenhum próximo evento
          </h2>

          <p className="mt-2 text-sm font-medium text-neutral-400">
            Não há eventos futuros da MOVE
            cadastrados no momento.
          </p>

        </section>
      )}

      {/* ===================================================
          INFORMAÇÃO
      =================================================== */}

      <section className="mt-8 rounded-2xl border border-pink-600/30 bg-pink-600/10 p-5">

        <p className="text-sm font-semibold leading-relaxed text-neutral-300">
          Aqui aparecem apenas eventos futuros
          relacionados à MOVE: Movenites,
          Hangouts, GCs e eventos realizados em
          conjunto com a Igreja.
        </p>

      </section>

    </div>
  );
}

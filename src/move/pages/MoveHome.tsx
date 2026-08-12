import React from 'react';
import { Link } from 'react-router-dom';

import {
  CalendarDays,
  Clock,
  MapPin
} from 'lucide-react';

import { moveImages } from '../moveImages';

const CHURCH_MAP_URL =
  'https://maps.app.goo.gl/Un9HZ4mLqykChKxSA';

const months = [
  {
    name: 'AGOSTO',
    monthNumber: 8,
    path: '/move/agosto',
    fallbackImage: '/images/agosto.jpg',
    border: 'border-blue-600'
  },
  {
    name: 'SETEMBRO',
    monthNumber: 9,
    path: '/move/setembro',
    fallbackImage: '/images/setembro.jpg',
    border: 'border-pink-600'
  },
  {
    name: 'OUTUBRO',
    monthNumber: 10,
    path: '/move/outubro',
    fallbackImage: '/images/outubro.jpg',
    border: 'border-orange-600'
  },
  {
    name: 'NOVEMBRO',
    monthNumber: 11,
    path: '/move/novembro',
    fallbackImage: '/images/novembro.jpg',
    border: 'border-violet-600'
  },
  {
    name: 'DEZEMBRO',
    monthNumber: 12,
    path: '/move/dezembro',
    fallbackImage: '/images/dezembro.jpg',
    border: 'border-emerald-600'
  }
];

const nextMoveEvent = {
  title: 'MOVENITE',
  date: '29 DE AGOSTO',
  weekday: 'SÁBADO',
  time: '19H',
  location: 'Prédio da igreja',
  monthPath: '/move/agosto'
};

type MonthSlideshowProps = {
  images: readonly string[];
  fallbackImage: string;
  alt: string;
  delay?: number;
  startOffset?: number;
};

function MonthSlideshow({
  images,
  fallbackImage,
  alt,
  delay = 5500,
  startOffset = 0
}: MonthSlideshowProps) {
  const availableImages =
    images.length > 0
      ? images
      : [fallbackImage];

  const initialIndex =
    startOffset % availableImages.length;

  const [currentImage, setCurrentImage] =
    React.useState(initialIndex);

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
      setCurrentImage((current) =>
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
    <div className="absolute inset-0 bg-neutral-900">

      {availableImages.map(
        (image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt={
              index === currentImage
                ? alt
                : ''
            }
            aria-hidden={
              index !== currentImage
            }
            className={`
              absolute inset-0
              h-full w-full
              object-cover
              transition-all
              duration-[1600ms]
              ease-in-out
              ${
                index === currentImage
                  ? 'scale-100 opacity-100'
                  : 'scale-105 opacity-0'
              }
            `}
          />
        )
      )}

    </div>
  );
}

export default function MoveHome() {
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
    <div className="mx-auto w-full max-w-[1500px] p-4 sm:p-6 lg:p-7">

      {/* PRÓXIMO EVENTO MOVE */}
      <section
        className="
          mb-8
          overflow-hidden
          rounded-2xl
          border border-blue-500/40
          border-l-4 border-l-white
          bg-blue-600
          p-5
          shadow-xl
          sm:p-7
          lg:p-8
        "
      >
        <p className="text-lg font-black italic uppercase sm:text-xl">
          PRÓXIMO EVENTO MOVE
        </p>

        <div className="mt-3 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">

          <div className="min-w-0">

            <h1 className="max-w-4xl text-3xl font-black uppercase leading-none sm:text-4xl lg:text-5xl">
              {nextMoveEvent.title}
            </h1>

            <div className="mt-4 flex flex-col gap-2 text-sm font-black uppercase sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">

              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 shrink-0" />

                {nextMoveEvent.date} · {nextMoveEvent.weekday}
              </span>

              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />

                {nextMoveEvent.time}
              </span>

              <a
                href={CHURCH_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-white/80"
              >
                <MapPin className="h-4 w-4 shrink-0" />

                <span className="underline underline-offset-4">
                  {nextMoveEvent.location}
                </span>
              </a>

            </div>
          </div>

          {/* BOTÕES */}
          <div className="grid w-full gap-3 sm:grid-cols-2 xl:w-auto">

            <Link
              to="/move/eventos"
              className="
                flex min-h-[52px]
                items-center justify-center
                rounded-xl
                bg-white
                px-6 py-3
                text-center
                font-black uppercase
                text-blue-600
                transition
                hover:scale-[1.02]
                hover:bg-neutral-100
                active:scale-[0.98]
              "
            >
              VER EVENTOS MOVE
            </Link>

            <Link
              to={nextMoveEvent.monthPath}
              className="
                flex min-h-[52px]
                items-center justify-center
                rounded-xl
                border border-white
                px-6 py-3
                text-center
                font-black uppercase
                text-white
                transition
                hover:bg-white
                hover:text-blue-600
                active:scale-[0.98]
              "
            >
              VER AGOSTO
            </Link>

          </div>
        </div>
      </section>

      {/* EVENTOS MOVE */}
      <section>

        <div className="mb-5">

          <p className="text-xs font-black uppercase tracking-[0.25em] text-neutral-400">
            {visibleMonthsLabel}
          </p>

          <h2 className="mt-1 text-4xl font-black italic uppercase text-blue-600 sm:text-5xl">
            EVENTOS MOVE
          </h2>

        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          {visibleMonths.map(
            (month, index) => (
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
                  ${month.border}
                `}
              >

                {/* SLIDESHOW DAS FOTOS */}
                <MonthSlideshow
                  images={moveImages}
                  fallbackImage={
                    month.fallbackImage
                  }
                  alt={`Eventos MOVE - ${month.name}`}
                  delay={
                    index % 2 === 0
                      ? 5200
                      : 6400
                  }
                  startOffset={
                    index * 3
                  }
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/20
                    to-black/10
                  "
                />

                {/* LEVE ESCURECIMENTO */}
                <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />

                {/* TEXTO */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-6">

                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/70">
                    Eventos MOVE
                  </p>

                  <span className="mt-1 block text-4xl font-black italic uppercase text-white sm:text-5xl">
                    {month.name}
                  </span>

                </div>

              </Link>
            )
          )}

        </div>
      </section>

      {/* AVISO */}
      <section
        className="
          mt-8
          rounded-2xl
          border border-blue-600/30
          bg-black/60
          p-5
          backdrop-blur-md
        "
      >
        <p className="text-sm font-semibold leading-relaxed text-neutral-300">
          <strong>Importante:</strong>{' '}
          fique atento às comunicações dos
          líderes e dos GCs para informações
          adicionais, orientações e possíveis
          alterações na programação.
        </p>
      </section>

    </div>
  );
}

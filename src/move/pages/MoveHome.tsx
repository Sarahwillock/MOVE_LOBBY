import React from 'react';
import { Link } from 'react-router-dom';

import {
  CalendarDays,
  Clock,
  Instagram,
  MapPin
} from 'lucide-react';

import { moveImages } from '../moveImages';

const heroImages = [...moveImages];

const agostoImages = moveImages.filter(
  (_, index) => index % 2 === 0
);

const setembroImages = moveImages.filter(
  (_, index) => index % 2 !== 0
);

const CHURCH_MAP_URL =
  'https://maps.app.goo.gl/Un9HZ4mLqykChKxSA';

const INSTAGRAM_URL =
  'https://www.instagram.com/move.alphaville/';

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

export default function MoveHome() {
  const currentMonth =
    new Date().getMonth() + 1;

  const startMonth =
    currentMonth < 8
      ? 8
      : currentMonth > 12
      ? 12
      : currentMonth;

  const visibleMonths =
    months.filter(
      (month) =>
        month.monthNumber >= startMonth &&
        month.monthNumber <= startMonth + 1
    );

  return (
    <div className="mx-auto w-full max-w-[1500px] px-4 pb-12 pt-4 sm:px-6 lg:px-7">

      {/* =========================================
          HERO / SOBRE A MOVE
      ========================================= */}
      <section
        className="
          relative
          min-h-[520px]
          overflow-hidden
          rounded-3xl
          border border-white/10
          shadow-2xl
          sm:min-h-[600px]
          lg:min-h-[680px]
        "
      >
        <Slideshow
          images={heroImages}
          delay={6500}
          startOffset={2}
        />

        {/* ESCURECIMENTO */}
        <div className="absolute inset-0 bg-black/35" />

        {/* GRADIENTE LATERAL */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-black/85
            via-black/45
            to-black/10
          "
        />

        {/* GRADIENTE INFERIOR */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/75
            via-transparent
            to-black/15
          "
        />

        {/* CONTEÚDO HERO */}
        <div
          className="
            relative z-10
            flex min-h-[520px]
            items-end
            p-6
            sm:min-h-[600px]
            sm:p-10
            lg:min-h-[680px]
            lg:p-14
          "
        >
          <div className="max-w-3xl">

            <p
              className="
                text-xs
                font-black uppercase
                tracking-[0.3em]
                text-blue-500
              "
            >
              MOVE ALPHAVILLE
            </p>

            <h1
              className="
                mt-3
                text-4xl
                font-black italic
                uppercase
                leading-[0.95]
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              UMA GERAÇÃO
              <br />
              EM MOVIMENTO.
            </h1>

            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                font-medium
                leading-relaxed
                text-white/80
                sm:text-base
                lg:text-lg
              "
            >
              A MOVE é um lugar para viver
              comunidade, criar conexões,
              crescer na fé e caminhar junto
              com pessoas que compartilham
              o mesmo propósito.
            </p>

            {/* BOTÕES HERO */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              {/* INSTAGRAM */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex min-h-[52px]
                  items-center justify-center
                  gap-2
                  rounded-xl
                  bg-pink-600
                  px-6 py-3
                  font-black uppercase
                  text-white
                  transition
                  hover:bg-pink-500
                  active:scale-[0.98]
                "
              >
                <Instagram className="h-5 w-5" />
                NOSSO INSTAGRAM
              </a>

              {/* LOCAL */}
              <Link
                to="/move/local"
                className="
                  inline-flex min-h-[52px]
                  items-center justify-center
                  rounded-xl
                  border border-white/30
                  bg-black/20
                  px-6 py-3
                  font-black uppercase
                  text-white
                  backdrop-blur-md
                  transition
                  hover:bg-white
                  hover:text-black
                  active:scale-[0.98]
                "
              >
                AONDE NOS VEMOS?
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PRÓXIMO EVENTO
      ========================================= */}
      <section className="mt-8">

        <div className="mb-4">
          <p
            className="
              text-[10px]
              font-black uppercase
              tracking-[0.25em]
              text-neutral-400
            "
          >
            FIQUE POR DENTRO
          </p>

          <h2
            className="
              mt-1
              text-2xl
              font-black italic
              uppercase
              text-white
              sm:text-3xl
            "
          >
            PRÓXIMO EVENTO
          </h2>
        </div>

        <div
          className="
            rounded-2xl
            border border-blue-500/40
            bg-blue-600/95
            p-5
            shadow-xl
            sm:p-6
          "
        >
          <div
            className="
              flex flex-col
              gap-5
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div>

              <p
                className="
                  text-[10px]
                  font-black uppercase
                  tracking-[0.25em]
                  text-white/70
                "
              >
                PRÓXIMO EVENTO MOVE
              </p>

              <h3
                className="
                  mt-2
                  text-3xl
                  font-black uppercase
                  text-white
                  sm:text-4xl
                "
              >
                {nextMoveEvent.title}
              </h3>

              <div
                className="
                  mt-4
                  flex flex-col
                  gap-2
                  text-xs
                  font-black uppercase
                  text-white
                  sm:flex-row
                  sm:flex-wrap
                  sm:items-center
                  sm:gap-4
                "
              >

                {/* DATA */}
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />

                  {nextMoveEvent.date}
                  {' · '}
                  {nextMoveEvent.weekday}
                </span>

                {/* HORÁRIO */}
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />

                  {nextMoveEvent.time}
                </span>

                {/* LOCALIZAÇÃO */}
                <a
                  href={CHURCH_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center
                    gap-2
                    underline
                    underline-offset-4
                  "
                >
                  <MapPin className="h-4 w-4" />

                  {nextMoveEvent.location}
                </a>

              </div>
            </div>

            {/* BOTÃO VER EVENTO */}
            <Link
              to={nextMoveEvent.monthPath}
              className="
                inline-flex min-h-[48px]
                shrink-0
                items-center justify-center
                rounded-xl
                bg-white
                px-6 py-3
                text-sm
                font-black uppercase
                text-blue-600
                transition
                hover:bg-neutral-100
                active:scale-[0.98]
              "
            >
              VER EVENTO
            </Link>

          </div>
        </div>
      </section>

      {/* =========================================
          EVENTOS MOVE
      ========================================= */}
      <section className="mt-10">

        <div className="mb-4">

          <p
            className="
              text-[10px]
              font-black uppercase
              tracking-[0.25em]
              text-neutral-400
            "
          >
            AGOSTO E SETEMBRO
          </p>

          <h2
            className="
              mt-1
              text-2xl
              font-black italic
              uppercase
              text-white
              sm:text-3xl
            "
          >
            EVENTOS MOVE
          </h2>

        </div>

        {/* CARDS DOS MESES */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {visibleMonths.map(
            (month, index) => (
              <Link
                key={month.name}
                to={month.path}
                aria-label={`Abrir eventos de ${month.name}`}
                className={`
                  group relative
                  block
                  aspect-[16/9]
                  min-h-[190px]
                  overflow-hidden
                  rounded-2xl
                  border
                  shadow-xl
                  transition-transform
                  duration-300
                  hover:scale-[1.01]
                  active:scale-[0.99]
                  sm:min-h-[220px]
                  ${month.border}
                `}
              >

                {/* SLIDESHOW DO MÊS */}
                <Slideshow
                  images={
                    month.name === 'AGOSTO'
                      ? agostoImages
                      : month.name === 'SETEMBRO'
                      ? setembroImages
                      : moveImages
                  }
                  fallbackImage={
                    month.fallbackImage
                  }
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
                      : index * 2
                  }
                />

                {/* GRADIENTE */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/85
                    via-black/10
                    to-transparent
                  "
                />

                {/* NOME DO MÊS */}
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
                      text-[9px]
                      font-black uppercase
                      tracking-[0.2em]
                      text-white/70
                    "
                  >
                    Eventos MOVE
                  </p>

                  <h3
                    className="
                      mt-1
                      text-3xl
                      font-black italic
                      uppercase
                      text-white
                      sm:text-4xl
                    "
                  >
                    {month.name}
                  </h3>

                </div>

              </Link>
            )
          )}

        </div>
      </section>

      {/* =========================================
          AVISO FINAL
      ========================================= */}
      <section
        className="
          mt-8
          rounded-2xl
          border border-white/10
          bg-black/60
          p-5
          backdrop-blur-md
        "
      >
        <p
          className="
            text-center
            text-sm
            font-semibold
            leading-relaxed
            text-neutral-300
          "
        >
          Acompanhe nossas redes e fique atento às
          comunicações dos líderes e dos GCs para
          não perder nenhuma novidade.
        </p>
      </section>

    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarDays,
  Clock,
  MapPin,
  Instagram
} from 'lucide-react';

import { moveImages } from '../moveImages';

const CHURCH_MAP_URL =
  'https://maps.app.goo.gl/Un9HZ4mLqykChKxSA';

const INSTAGRAM_URL =
  'https://www.instagram.com/move.alphaville/';

/* =========================================================
   IMAGENS
========================================================= */

const heroImages = moveImages.filter(
  (_, index) => index % 3 === 0
);

const backgroundImages = moveImages.filter(
  (_, index) => index % 3 === 1
);

/* =========================================================
   PRÓXIMO EVENTO
========================================================= */

const nextMoveEvent = {
  title: 'MOVENITE',
  date: '29 DE AGOSTO',
  weekday: 'SÁBADO',
  time: '19H',
  location: 'Prédio da igreja',
  path: '/move/agosto'
};

/* =========================================================
   SLIDESHOW
========================================================= */

type SlideshowProps = {
  images: readonly string[];
  interval?: number;
};

function Slideshow({
  images,
  interval = 6000
}: SlideshowProps) {
  const [currentImage, setCurrentImage] =
    React.useState(0);

  React.useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentImage(
        (current) =>
          (current + 1) % images.length
      );
    }, interval);

    return () => {
      window.clearInterval(timer);
    };
  }, [images.length, interval]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
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
              ${
                index === currentImage
                  ? 'opacity-50'
                  : 'opacity-0'
              }
            `}
          />

          {/* FOTO PRINCIPAL */}
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
              ${
                index === currentImage
                  ? 'scale-100 opacity-100'
                  : 'scale-[1.02] opacity-0'
              }
            `}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

/* =========================================================
   PÁGINA
========================================================= */

export default function MoveHome() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ===================================================
          FUNDO DA PÁGINA
      =================================================== */}

      <div className="fixed inset-0 -z-20 bg-black">
        <Slideshow
          images={
            backgroundImages.length
              ? backgroundImages
              : moveImages
          }
          interval={9000}
        />
      </div>

      {/* ESCURECIMENTO DO FUNDO */}
      <div
        className="
          fixed inset-0
          -z-10
          bg-black/60
          backdrop-blur-[2px]
        "
      />

      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          p-4
          sm:p-6
          lg:p-8
        "
      >

        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="
            relative
            min-h-[420px]
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-black
            shadow-2xl
            sm:min-h-[460px]
          "
        >

          <Slideshow
            images={
              heroImages.length
                ? heroImages
                : moveImages
            }
            interval={6000}
          />

          {/* OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-black/95
              via-black/65
              to-black/20
            "
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/80
              via-transparent
              to-black/20
            "
          />

          {/* CONTEÚDO */}
          <div
            className="
              relative z-10
              flex min-h-[420px]
              items-end
              p-6
              sm:min-h-[460px]
              sm:p-10
              lg:p-12
            "
          >

            <div className="max-w-2xl">

              <p
                className="
                  mb-3
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.3em]
                  text-blue-500
                "
              >
                MOVE ALPHAVILLE
              </p>

              <h1
                className="
                  text-4xl
                  font-black
                  italic
                  uppercase
                  leading-[0.9]
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                UMA GERAÇÃO
                <br />
                EM MOVIMENTO.
              </h1>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-sm
                  font-semibold
                  leading-relaxed
                  text-neutral-300
                  sm:text-base
                "
              >
                A MOVE é um lugar para viver
                comunidade, criar conexões,
                crescer na fé e caminhar junto
                com pessoas que compartilham o
                mesmo propósito.
              </p>

              {/* BOTÕES */}
              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >

                {/* INSTAGRAM */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    min-h-[52px]
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-pink-600
                    px-6
                    py-3
                    text-sm
                    font-black
                    uppercase
                    text-white
                    transition
                    hover:bg-pink-500
                    active:scale-[0.98]
                  "
                >
                  <Instagram className="h-5 w-5" />

                  NOSSO INSTAGRAM
                </a>

                {/* AONDE NOS VEMOS? */}
                <Link
                  to="/move/eventos"
                  className="
                    inline-flex
                    min-h-[52px]
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/30
                    bg-black/30
                    px-6
                    py-3
                    text-sm
                    font-black
                    uppercase
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

        {/* =================================================
            PRÓXIMO EVENTO
        ================================================= */}

        <section className="mt-8">

          <div className="mb-3">
            <p
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.3em]
                text-neutral-500
              "
            >
              FIQUE POR DENTRO
            </p>

            <h2
              className="
                mt-1
                text-2xl
                font-black
                italic
                uppercase
                text-white
              "
            >
              PRÓXIMO EVENTO
            </h2>
          </div>

          <div
            className="
              rounded-2xl
              border
              border-blue-500/40
              bg-blue-600
              p-5
              shadow-xl
              sm:p-6
            "
          >

            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <div>

                <p
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.25em]
                    text-white/70
                  "
                >
                  PRÓXIMO EVENTO MOVE
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-black
                    uppercase
                    text-white
                    sm:text-3xl
                  "
                >
                  {nextMoveEvent.title}
                </h3>

                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    gap-3
                    text-[11px]
                    font-black
                    uppercase
                    text-white
                  "
                >

                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" />

                    {nextMoveEvent.date} ·{' '}
                    {nextMoveEvent.weekday}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />

                    {nextMoveEvent.time}
                  </span>

                  <a
                    href={CHURCH_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-1.5
                      underline
                      underline-offset-4
                    "
                  >
                    <MapPin className="h-4 w-4" />

                    {nextMoveEvent.location}
                  </a>

                </div>
              </div>

              <Link
                to={nextMoveEvent.path}
                className="
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  px-6
                  py-3
                  text-xs
                  font-black
                  uppercase
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

        {/* =================================================
            AVISO FINAL
        ================================================= */}

        <section
          className="
            mt-6
            rounded-2xl
            border
            border-white/10
            bg-black/60
            p-5
            text-center
            backdrop-blur-xl
          "
        >
          <p
            className="
              text-xs
              font-semibold
              leading-relaxed
              text-neutral-300
            "
          >
            Acompanhe nossas redes e fique
            atento às comunicações dos líderes
            e dos GCs para não perder nenhuma
            novidade.
          </p>
        </section>

      </div>
    </div>
  );
}

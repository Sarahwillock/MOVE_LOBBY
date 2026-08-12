import { Link } from 'react-router-dom';
import {
  CalendarDays,
  Clock,
  MapPin
} from 'lucide-react';

const CHURCH_MAP_URL =
  'https://maps.app.goo.gl/Un9HZ4mLqykChKxSA';

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

const nextMoveEvent = {
  title: 'MOVENITE',
  date: '29 DE AGOSTO',
  weekday: 'SÁBADO',
  time: '19H',
  location: 'Prédio da igreja',
  monthPath: '/move/agosto'
};

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
      <section className="mb-8 overflow-hidden border-l-4 border-white bg-blue-600 p-5 sm:p-7 lg:p-8">
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

          <div className="grid w-full gap-3 sm:grid-cols-2 xl:w-auto">

            <Link
              to="/move/eventos"
              className="
                flex min-h-[52px]
                items-center justify-center
                bg-white px-6 py-3
                text-center font-black uppercase
                text-blue-600
                transition
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
                border border-white
                px-6 py-3
                text-center font-black uppercase
                text-white
                transition
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

          <p className="text-xs font-black uppercase tracking-[0.25em] text-neutral-500">
            {visibleMonthsLabel}
          </p>

          <h2 className="mt-1 text-4xl font-black italic uppercase text-blue-600 sm:text-5xl">
            EVENTOS MOVE
          </h2>

        </div>

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
                ${month.border}
              `}
            >
              <img
                src={month.image}
                alt={`Eventos MOVE - ${month.name}`}
                loading="lazy"
                className="
                  h-full w-full
                  object-cover grayscale
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">

                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/60">
                  Eventos MOVE
                </p>

                <span className="mt-1 block text-4xl font-black italic uppercase text-white sm:text-5xl">
                  {month.name}
                </span>

              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* AVISO */}
      <section className="mt-8 rounded-2xl border border-blue-600/30 bg-blue-600/10 p-5">
        <p className="text-sm font-semibold leading-relaxed text-neutral-300">
           <strong>Importante:</strong> fique atento às comunicações dos
          líderes e dos GCs para informações adicionais, orientações e
          possíveis alterações na programação.
        </p>
      </section>

    </div>
  );
}

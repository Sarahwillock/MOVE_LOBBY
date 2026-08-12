import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';

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

export default function EventosMove() {
  const currentMonth = new Date().getMonth() + 1;

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

  return (
    <div className="mx-auto w-full max-w-[1500px] p-4 sm:p-6 lg:p-8">

      <header className="mb-8">
        <div className="flex items-center gap-2 text-pink-500">
          <CalendarDays className="h-5 w-5" />

          <p className="text-xs font-black uppercase tracking-[0.25em]">
            MOVE ALPHAVILLE
          </p>
        </div>

        <h1 className="mt-2 text-4xl font-black italic uppercase text-white sm:text-5xl lg:text-6xl">
          Eventos MOVE
        </h1>

        <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-neutral-400">
          Confira os eventos, encontros e GCs da MOVE.
        </p>
      </header>

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
    </div>
  );
}

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

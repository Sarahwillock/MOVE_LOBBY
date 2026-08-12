import {
  CalendarDays,
  Clock,
  MapPin
} from 'lucide-react';

type MoveEvent = {
  date: string;
  weekday: string;
  title: string;
  time?: string;
  location?: string;
};

const EVENTS: MoveEvent[] = [
  {
    date: '12/12',
    weekday: 'SÁBADO',
    title: 'Movenite',
    time: '19h',
    location: 'Prédio da igreja'
  }
];

export default function Dezembro() {
  return (
    <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8">

      {/* CABEÇALHO */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-emerald-500">
          <CalendarDays className="h-5 w-5" />

          <span className="text-xs font-black uppercase tracking-[0.25em]">
            Eventos MOVE 2026
          </span>
        </div>

        <h1 className="mt-2 text-5xl font-black italic uppercase text-white sm:text-6xl">
          Dezembro
        </h1>

        <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-neutral-400">
          Eventos da MOVE Alphaville em dezembro.
        </p>
      </header>

      {/* EVENTOS */}
      <div className="space-y-3">
        {EVENTS.map((event, index) => (
          <article
            key={`${event.date}-${index}`}
            className="
              rounded-2xl
              border border-emerald-600/50
              bg-emerald-600/10
              p-4 sm:p-5
            "
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

              {/* DATA */}
              <div
                className="
                  flex min-w-[80px]
                  shrink-0 items-center
                  justify-center
                  rounded-xl
                  bg-emerald-600
                  px-3 py-3
                  text-center
                  font-black text-white
                "
              >
                {event.date}
              </div>

              {/* CONTEÚDO */}
              <div className="min-w-0 flex-1">

                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                    {event.weekday}
                  </p>

                  <span
                    className="
                      rounded-full
                      bg-emerald-600
                      px-2.5 py-1
                      text-[9px]
                      font-black uppercase
                      tracking-wider
                      text-white
                    "
                  >
                    Agenda MOVE
                  </span>
                </div>

                <h2 className="mt-2 text-lg font-black leading-tight text-white sm:text-xl">
                  {event.title}
                </h2>

                <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">

                  {event.time && (
                    <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">
                      <Clock className="h-4 w-4 shrink-0 text-emerald-500" />
                      {event.time}
                    </div>
                  )}

                  {event.location && (
                    <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">
                      <MapPin className="h-4 w-4 shrink-0 text-emerald-500" />
                      {event.location}
                    </div>
                  )}

                </div>
              </div>

            </div>
          </article>
        ))}
      </div>

      {/* AVISO */}
      <div className="mt-8 rounded-2xl border border-emerald-600/30 bg-emerald-600/10 p-5">
        <p className="text-sm font-semibold leading-relaxed text-neutral-300">
          ❤️ Fique atento às comunicações dos líderes e dos GCs para
          informações adicionais e possíveis alterações na programação.
        </p>
      </div>

    </div>
  );
}

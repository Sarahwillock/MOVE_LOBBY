import {
  CalendarDays,
  Clock,
  MapPin
} from 'lucide-react';

type Event = {
  date: string;
  weekday: string;
  title: string;
  time?: string;
  location?: string;
  description?: string;
  highlight?: boolean;
};

const EVENTS: Event[] = [
  {
    date: '11/08',
    weekday: 'TERÇA-FEIRA',
    title: 'Capacitação e Treinamento para Novos Líderes',
    time: '20h',
    location: 'Online',
    description: '1ª aula'
  },
  {
    date: '13 a 16/08',
    weekday: 'QUINTA A DOMINGO',
    title: 'Jejum de 40 Horas',
    highlight: true,
    description:
      '13/08: compartilhar nos GCs na quinta-feira. 14/08: início no prédio da igreja às 20h. 15/08: programação de oração por GCs, online ou presencial — cada GC definirá o formato. 16/08: encerramento durante o Culto de Celebração às 10h.'
  },
  {
    date: '18/08',
    weekday: 'TERÇA-FEIRA',
    title: 'Capacitação e Treinamento para Novos Líderes',
    time: '20h',
    location: 'Online',
    description: '2ª aula'
  },
  {
    date: '19/08',
    weekday: 'QUARTA-FEIRA',
    title: 'Aula Inaugural | Escola Huios',
    time: '20h',
    location: 'Campus Alphaville'
  },
  {
    date: '25/08',
    weekday: 'TERÇA-FEIRA',
    title: 'Capacitação e Treinamento para Novos Líderes',
    time: '20h',
    location: 'Online',
    description: '3ª aula'
  },
  {
    date: '26/08',
    weekday: 'QUARTA-FEIRA',
    title: 'Discipulado de Líderes',
    location: 'Prédio da igreja',
    description:
      '19h — Pastor + Líderes • 20h — Líderes + GCD'
  },
  {
    date: '28/08',
    weekday: 'SEXTA-FEIRA',
    title: 'Chá das Sisters'
  },
  {
    date: '29/08',
    weekday: 'SÁBADO',
    title: 'Movenite',
    time: '19h',
    location: 'Prédio da igreja',
    highlight: true
  }
];

export default function Agosto() {
  return (
    <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8">

      <header className="mb-8">
        <div className="flex items-center gap-2 text-blue-500">
          <CalendarDays className="h-5 w-5" />

          <span className="text-xs font-black uppercase tracking-[0.25em]">
            Agenda 2026
          </span>
        </div>

        <h1 className="mt-2 text-5xl font-black italic uppercase text-white sm:text-6xl">
          Agosto
        </h1>

        <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-neutral-400">
          Programação da igreja e da MOVE para agosto.
        </p>
      </header>

      <div className="space-y-3">
        {EVENTS.map((event, index) => (
          <article
            key={`${event.date}-${index}`}
            className={`
              rounded-2xl border p-4 sm:p-5
              ${
                event.highlight
                  ? 'border-blue-600/50 bg-blue-600/10'
                  : 'border-white/10 bg-neutral-900'
              }
            `}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

              <div
                className={`
                  flex min-w-[80px] shrink-0
                  items-center justify-center
                  rounded-xl px-3 py-3
                  text-center font-black
                  ${
                    event.highlight
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-white'
                  }
                `}
              >
                {event.date}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">
                  {event.weekday}
                </p>

                <h2 className="mt-1 text-lg font-black leading-tight text-white sm:text-xl">
                  {event.title}
                </h2>

                {(event.time || event.location) && (
                  <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">

                    {event.time && (
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">
                        <Clock className="h-4 w-4 shrink-0 text-blue-500" />
                        {event.time}
                      </div>
                    )}

                    {event.location && (
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">
                        <MapPin className="h-4 w-4 shrink-0 text-blue-500" />
                        {event.location}
                      </div>
                    )}
                  </div>
                )}

                {event.description && (
                  <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-400">
                    {event.description}
                  </p>
                )}
              </div>

            </div>
          </article>
        ))}
      </div>

    </div>
  );
}

import {
  CalendarDays,
  Clock,
  MapPin
} from 'lucide-react';

type MoveEventType =
  | 'gc'
  | 'move'
  | 'igreja-move';

type MoveEvent = {
  date: string;
  weekday: string;
  title: string;
  time?: string;
  location?: string;
  description?: string;
  type: MoveEventType;
};

const EVENTS: MoveEvent[] = [
  {
    date: '07/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC LOBBY',
    description: 'GC de jovens de 19 a 30 anos',
    time: '19h',
    location: 'Alphaville',
    type: 'gc'
  },
  {
    date: '07/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC ROCK',
    description: 'GC de adolescentes de 15 a 18 anos',
    time: '20h',
    location: 'Alphaville',
    type: 'gc'
  },
  {
    date: '07/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC ROCK',
    description: 'GC de pré-adolescentes de 12 a 14 anos',
    time: '20h',
    location: 'Prédio da igreja',
    type: 'gc'
  },
  {
    date: '13/08',
    weekday: 'QUINTA-FEIRA',
    title: 'GC CONECTA',
    description: 'GC de jovens 30+',
    time: '20h',
    location: 'Alphaville',
    type: 'gc'
  },
  {
    date: '14/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC ROCK',
    description: 'GC de adolescentes de 15 a 18 anos',
    time: '20h',
    location: 'Alphaville',
    type: 'gc'
  },
  {
    date: '14/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC ROCK',
    description: 'GC de pré-adolescentes de 12 a 14 anos',
    time: '20h',
    location: 'Prédio da igreja',
    type: 'gc'
  },
  {
    date: '21/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC LOBBY',
    description: 'GC de jovens de 19 a 30 anos',
    time: '19h',
    location: 'Alphaville',
    type: 'gc'
  },
  {
    date: '21/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC ROCK',
    description: 'GC de adolescentes de 15 a 18 anos',
    time: '20h',
    location: 'Alphaville',
    type: 'gc'
  },
  {
    date: '21/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC ROCK',
    description: 'GC de pré-adolescentes de 12 a 14 anos',
    time: '20h',
    location: 'Prédio da igreja',
    type: 'gc'
  },
  {
    date: '28/08',
    weekday: 'SEXTA-FEIRA',
    title: 'Chá das Sisters',
    description: 'Evento da Igreja + MOVE.',
    type: 'igreja-move'
  },
  {
    date: '29/08',
    weekday: 'SÁBADO',
    title: 'Movenite',
    time: '19h',
    location: 'Prédio da igreja',
    type: 'move'
  }
];

function getEventStyles(type: MoveEventType) {
  if (type === 'gc') {
    return {
      card: 'border-blue-600/50 bg-blue-600/10',
      date: 'bg-blue-600',
      badge: 'bg-blue-600',
      icon: 'text-blue-500',
      label: 'GC MOVE'
    };
  }

  if (type === 'igreja-move') {
    return {
      card: 'border-violet-600/50 bg-violet-600/10',
      date: 'bg-violet-600',
      badge: 'bg-violet-600',
      icon: 'text-violet-500',
      label: 'Igreja + MOVE'
    };
  }

  return {
    card: 'border-pink-600/50 bg-pink-600/10',
    date: 'bg-pink-600',
    badge: 'bg-pink-600',
    icon: 'text-pink-500',
    label: 'Agenda MOVE'
  };
}

export default function Agosto() {
  return (
    <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8">

      <header className="mb-8">
        <div className="flex items-center gap-2 text-pink-500">
          <CalendarDays className="h-5 w-5" />

          <span className="text-xs font-black uppercase tracking-[0.25em]">
            Eventos MOVE 2026
          </span>
        </div>

        <h1 className="mt-2 text-5xl font-black italic uppercase text-white sm:text-6xl">
          Agosto
        </h1>

        <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-neutral-400">
          Eventos e GCs da MOVE Alphaville em agosto.
        </p>
      </header>

      <div className="space-y-3">
        {EVENTS.map((event, index) => {
          const styles = getEventStyles(event.type);

          return (
            <article
              key={`${event.date}-${event.title}-${index}`}
              className={`
                rounded-2xl border p-4 sm:p-5
                ${styles.card}
              `}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

                <div
                  className={`
                    flex min-w-[80px] shrink-0
                    items-center justify-center
                    rounded-xl px-3 py-3
                    text-center font-black text-white
                    ${styles.date}
                  `}
                >
                  {event.date}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                      {event.weekday}
                    </p>

                    <span
                      className={`
                        rounded-full px-2.5 py-1
                        text-[9px] font-black uppercase
                        tracking-wider text-white
                        ${styles.badge}
                      `}
                    >
                      {styles.label}
                    </span>
                  </div>

                  <h2 className="mt-2 text-lg font-black leading-tight text-white sm:text-xl">
                    {event.title}
                  </h2>

                  {(event.time || event.location) && (
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">

                      {event.time && (
                        <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">
                          <Clock
                            className={`h-4 w-4 shrink-0 ${styles.icon}`}
                          />
                          {event.time}
                        </div>
                      )}

                      {event.location && (
  event.location === 'Prédio da igreja' ? (
    <a
      href="https://maps.app.goo.gl/Un9HZ4mLqykChKxSA"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-bold text-neutral-300 transition hover:text-white"
    >
      <MapPin
        className={`h-4 w-4 shrink-0 ${styles.icon}`}
      />

      <span className="underline underline-offset-4">
        {event.location}
      </span>
    </a>
  ) : (
    <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">
      <MapPin
        className={`h-4 w-4 shrink-0 ${styles.icon}`}
      />

      {event.location}
    </div>
  )
)}}

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
          );
        })}
      </div>

    </div>
  );
}

import {
  CalendarDays,
  Clock,
  MapPin
} from 'lucide-react';

import EventActions from '../components/EventActions';

import {
  getUpcomingMoveEventsByMonth,
  type EventType,
  type MoveEvent
} from '../data/events2026';

const CHURCH_MAP_URL =
  'https://maps.app.goo.gl/Un9HZ4mLqykChKxSA';

function getEventStyles(
  type: EventType
) {
  if (type === 'gc') {
    return {
      card:
        'border-emerald-600/50 bg-emerald-600/10',
      date:
        'bg-emerald-600',
      badge:
        'bg-emerald-600',
      icon:
        'text-emerald-500',
      label:
        'GC MOVE'
    };
  }

  if (type === 'igreja-move') {
    return {
      card:
        'border-violet-600/50 bg-violet-600/10',
      date:
        'bg-violet-600',
      badge:
        'bg-violet-600',
      icon:
        'text-violet-500',
      label:
        'Igreja + MOVE'
    };
  }

  return {
    card:
      'border-pink-600/50 bg-pink-600/10',
    date:
      'bg-pink-600',
    badge:
      'bg-pink-600',
    icon:
      'text-pink-500',
    label:
      'Agenda MOVE'
  };
}

function EventCard({
  event
}: {
  event: MoveEvent;
}) {
  const styles =
    getEventStyles(
      event.type
    );

  const isChurchLocation =
    event.location ===
    'Prédio da igreja';

  const calendarTime =
    event.time
      ? event.time.replace(
          ':',
          'h'
        )
      : undefined;

  return (
    <article
      className={`
        rounded-2xl
        border
        p-4
        backdrop-blur-md
        sm:p-5
        ${styles.card}
      `}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

        {/* DATA */}
        <div
          className={`
            flex
            min-w-[80px]
            shrink-0
            items-center
            justify-center
            rounded-xl
            px-3 py-3
            text-center
            font-black
            text-white
            ${styles.date}
          `}
        >
          {event.date}
        </div>

        {/* INFORMAÇÕES */}
        <div className="min-w-0 flex-1">

          <div className="flex flex-wrap items-center gap-2">

            {event.weekday && (
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                {event.weekday}
              </p>
            )}

            <span
              className={`
                rounded-full
                px-2.5 py-1
                text-[9px]
                font-black uppercase
                tracking-wider
                text-white
                ${styles.badge}
              `}
            >
              {styles.label}
            </span>

          </div>

          {/* TÍTULO */}
          <h2 className="mt-2 text-lg font-black leading-tight text-white sm:text-xl">
            {event.title}
          </h2>

          {/* HORÁRIO / LOCAL */}
          {(event.time ||
            event.location) && (
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">

              {event.time && (
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">

                  <Clock
                    className={`h-4 w-4 shrink-0 ${styles.icon}`}
                  />

                  {event.endTime
                    ? `${event.time} às ${event.endTime}`
                    : event.time}

                </div>
              )}

              {event.location &&
                (
                  isChurchLocation
                    ? (
                      <a
                        href={CHURCH_MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          gap-2
                          text-sm
                          font-bold
                          text-neutral-300
                          transition
                          hover:text-white
                        "
                      >
                        <MapPin
                          className={`h-4 w-4 shrink-0 ${styles.icon}`}
                        />

                        <span className="underline underline-offset-4">
                          {event.location}
                        </span>
                      </a>
                    )
                    : (
                      <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">

                        <MapPin
                          className={`h-4 w-4 shrink-0 ${styles.icon}`}
                        />

                        {event.location}

                      </div>
                    )
                )}

            </div>
          )}

          {/* DESCRIÇÃO */}
          {event.description && (
            <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-400">
              {event.description}
            </p>
          )}

          {/* ADICIONAR AO CALENDÁRIO */}
          {!event.endDay && (
            <EventActions
              title={event.title}
              date={event.date}
              time={calendarTime}
              location={event.location}
              isGC={event.type === 'gc'}
            />
          )}

        </div>

      </div>
    </article>
  );
}

export default function Setembro() {
  const events =
    getUpcomingMoveEventsByMonth(
      9
    );

  return (
    <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8">

      {/* CABEÇALHO */}
      <header className="mb-8">

        <div className="flex items-center gap-2 text-pink-500">

          <CalendarDays className="h-5 w-5" />

          <span className="text-xs font-black uppercase tracking-[0.25em]">
            Eventos MOVE 2026
          </span>

        </div>

        <h1 className="mt-2 text-5xl font-black italic uppercase text-white sm:text-6xl">
          Setembro
        </h1>

        <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-neutral-400">
          Confira os próximos eventos,
          encontros e GCs da MOVE Alphaville
          em setembro.
        </p>

      </header>

      {/* EVENTOS */}
      {events.length > 0 ? (
        <div className="space-y-3">

          {events.map(
            (event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            )
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
            Não há mais eventos da MOVE
            cadastrados para setembro.
          </p>

        </section>
      )}

    </div>
  );
}

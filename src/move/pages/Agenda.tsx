import React from 'react';

import {
  CalendarDays,
  Clock,
  MapPin,
  Info,
  Heart
} from 'lucide-react';

import EventActions from '../components/EventActions';

import {
  EVENTS_2026,
  MONTHS_2026,
  sortEvents,
  type EventType,
  type MoveEvent
} from '../data/events2026';

type FilterType =
  | 'todos'
  | 'igreja'
  | 'move'
  | 'gc';

const CHURCH_MAP_URL =
  'https://maps.app.goo.gl/Un9HZ4mLqykChKxSA';

/* =========================================================
   BADGE
========================================================= */

function TypeBadge({
  type
}: {
  type: EventType;
}) {
  if (type === 'move') {
    return (
      <span className="rounded-full bg-pink-600 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white">
        Agenda MOVE
      </span>
    );
  }

  if (type === 'gc') {
    return (
      <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white">
        GC MOVE
      </span>
    );
  }

  if (type === 'igreja-move') {
    return (
      <span className="rounded-full bg-violet-600 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white">
        Igreja + MOVE
      </span>
    );
  }

  return (
    <span className="rounded-full bg-blue-600/20 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-blue-400">
      Agenda Igreja
    </span>
  );
}

/* =========================================================
   ESTILOS
========================================================= */

function getEventStyles(
  event: MoveEvent
) {
  if (event.type === 'move') {
    return {
      card:
        'border-pink-600/40 bg-pink-600/10',
      date: 'bg-pink-600',
      icon: 'text-pink-500'
    };
  }

  if (event.type === 'gc') {
    return {
      card:
        'border-emerald-600/40 bg-emerald-600/10',
      date: 'bg-emerald-600',
      icon: 'text-emerald-500'
    };
  }

  if (
    event.type ===
    'igreja-move'
  ) {
    return {
      card:
        'border-violet-600/40 bg-violet-600/10',
      date: 'bg-violet-600',
      icon: 'text-violet-500'
    };
  }

  if (event.highlight) {
    return {
      card:
        'border-blue-600/40 bg-blue-600/10',
      date: 'bg-blue-600',
      icon: 'text-blue-500'
    };
  }

  return {
    card:
      'border-white/10 bg-neutral-900/90',
    date: 'bg-blue-600',
    icon: 'text-blue-500'
  };
}

/* =========================================================
   CARD
========================================================= */

function EventCard({
  event
}: {
  event: MoveEvent;
}) {
  const styles =
    getEventStyles(event);

  const isChurchLocation =
    event.location ===
    'Prédio da igreja';

  const canAddToCalendar =
    !event.endDay;

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
        overflow-hidden
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
        <div className="shrink-0">
          <div
            className={`
              inline-flex
              min-w-[80px]
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
        </div>

        {/* CONTEÚDO */}
        <div className="min-w-0 flex-1">

          <div className="mb-2 flex flex-wrap items-center gap-2">

            {event.weekday && (
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                {event.weekday}
              </p>
            )}

            <TypeBadge
              type={event.type}
            />

          </div>

          <h3 className="text-lg font-black leading-tight text-white sm:text-xl">
            {event.title}
          </h3>

          {(event.time ||
            event.location) && (
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">

              {/* HORÁRIO */}
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

              {/* LOCAL */}
              {event.location &&
                (isChurchLocation ? (
                  <a
                    href={
                      CHURCH_MAP_URL
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center
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
                      {
                        event.location
                      }
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">

                    <MapPin
                      className={`h-4 w-4 shrink-0 ${styles.icon}`}
                    />

                    {
                      event.location
                    }

                  </div>
                ))}

            </div>
          )}

          {/* DESCRIÇÃO */}
          {event.description && (
            <p className="mt-3 text-sm font-medium leading-relaxed text-neutral-400">
              {
                event.description
              }
            </p>
          )}

          {/* CALENDÁRIO */}
          {canAddToCalendar && (
            <EventActions
              title={
                event.title
              }
              date={
                event.date
              }
              time={
                calendarTime
              }
              location={
                event.location
              }
              isGC={
                event.type ===
                'gc'
              }
            />
          )}

        </div>
      </div>
    </article>
  );
}

/* =========================================================
   PÁGINA
========================================================= */

export default function Agenda() {
  const [
    filter,
    setFilter
  ] =
    React.useState<FilterType>(
      'todos'
    );

  const filters: {
    label: string;
    value: FilterType;
  }[] = [
    {
      label: 'Todos',
      value: 'todos'
    },
    {
      label: 'Igreja',
      value: 'igreja'
    },
    {
      label: 'MOVE',
      value: 'move'
    },
    {
      label: 'GCs',
      value: 'gc'
    }
  ];

  /* =======================================================
     FILTRO
  ======================================================= */

  const filteredEvents =
    sortEvents(
      EVENTS_2026.filter(
        (event) => {
          if (
            filter ===
            'todos'
          ) {
            return true;
          }

          if (
            filter ===
            'igreja'
          ) {
            return (
              event.type ===
                'igreja' ||
              event.type ===
                'igreja-move'
            );
          }

          if (
            filter ===
            'move'
          ) {
            return (
              event.type ===
                'move' ||
              event.type ===
                'igreja-move'
            );
          }

          if (
            filter ===
            'gc'
          ) {
            return (
              event.type ===
              'gc'
            );
          }

          return true;
        }
      )
    );

  /* =======================================================
     AGRUPA POR MÊS
  ======================================================= */

  const agendaByMonth =
    MONTHS_2026.map(
      (month) => {
        const events =
          filteredEvents.filter(
            (event) =>
              event.month ===
              month.number
          );

        return {
          ...month,
          events
        };
      }
    );

  return (
    <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 lg:p-8">

      {/* CABEÇALHO */}
      <header className="mb-8">

        <div className="mb-3 flex items-center gap-2 text-blue-500">

          <CalendarDays className="h-5 w-5" />

          <p className="text-xs font-black uppercase tracking-[0.25em]">
            MOVE ALPHAVILLE
          </p>

        </div>

        <h1 className="text-4xl font-black uppercase leading-none text-white sm:text-5xl lg:text-6xl">
          Agenda
          <br />
          2026
        </h1>

        <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-neutral-400 sm:text-base">
          Confira toda a programação
          da Igreja Dinamus Alphaville,
          da MOVE e dos GCs entre agosto
          e dezembro.
        </p>

      </header>

      {/* LEGENDA */}
      <section className="mb-6 rounded-2xl border border-white/10 bg-neutral-900/90 p-4 backdrop-blur-md">

        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
          Identificação da agenda
        </p>

        <div className="flex flex-wrap gap-2">

          <TypeBadge
            type="igreja"
          />

          <TypeBadge
            type="move"
          />

          <TypeBadge
            type="gc"
          />

          <TypeBadge
            type="igreja-move"
          />

        </div>

      </section>

      {/* FILTROS */}
      <div
        className="
          sticky top-16 z-20
          -mx-4 mb-6
          border-y border-white/10
          bg-black/95
          px-4 py-3
          backdrop-blur-xl

          sm:mx-0
          sm:rounded-2xl
          sm:border
        "
      >
        <div
          className="
            flex gap-2
            overflow-x-auto
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {filters.map(
            (item) => {
              const active =
                filter ===
                item.value;

              return (
                <button
                  key={
                    item.value
                  }
                  type="button"
                  onClick={() =>
                    setFilter(
                      item.value
                    )
                  }
                  className={`
                    min-h-11
                    shrink-0
                    rounded-full
                    px-5 py-2
                    text-xs
                    font-black uppercase
                    tracking-wider
                    transition
                    active:scale-95

                    ${
                      active
                        ? item.value ===
                          'move'
                          ? 'bg-pink-600 text-white'
                          : item.value ===
                            'igreja'
                          ? 'bg-blue-600 text-white'
                          : item.value ===
                            'gc'
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white text-black'
                        : 'border border-white/10 bg-neutral-900 text-neutral-400'
                    }
                  `}
                >
                  {
                    item.label
                  }
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* NAVEGAÇÃO DOS MESES */}
      <div
        className="
          mb-8 flex gap-2
          overflow-x-auto
          pb-2
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {MONTHS_2026.map(
          (month) => (
            <a
              key={
                month.number
              }
              href={`#mes-${month.number}`}
              className="
                flex min-h-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border border-white/10
                bg-neutral-900/90
                px-5
                text-xs
                font-black uppercase
                tracking-wider
                text-neutral-300
                transition
                hover:border-blue-500
                hover:text-white
                active:scale-95
              "
            >
              {
                month.name
              }
            </a>
          )
        )}
      </div>

      {/* EVENTOS */}
      <div className="space-y-12">

        {agendaByMonth.map(
          (month) => (
            <section
              key={
                month.number
              }
              id={`mes-${month.number}`}
              className="scroll-mt-40"
            >

              {/* CABEÇALHO DO MÊS */}
              <div className="mb-5 flex items-center gap-3">

                <div className="h-9 w-1 rounded-full bg-blue-600" />

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-500">
                    Agenda 2026
                  </p>

                  <h2 className="text-3xl font-black italic uppercase text-blue-500 sm:text-4xl">
                    {
                      month.name
                    }
                  </h2>
                </div>

              </div>

              {/* EVENTOS DO MÊS */}
              {month.events.length >
              0 ? (
                <div className="space-y-3">

                  {month.events.map(
                    (event) => (
                      <EventCard
                        key={
                          event.id
                        }
                        event={
                          event
                        }
                      />
                    )
                  )}

                </div>
              ) : (
                <div
                  className="
                    rounded-2xl
                    border
                    border-dashed
                    border-white/10
                    bg-black/40
                    p-6
                    text-center
                    backdrop-blur-md
                  "
                >
                  <p className="text-sm font-bold text-neutral-500">
                    Nenhum evento
                    nesta categoria
                    neste mês.
                  </p>
                </div>
              )}

            </section>
          )
        )}

      </div>

      {/* AVISO */}
      <section className="mt-12 rounded-2xl border border-blue-600/30 bg-blue-600/10 p-5 sm:p-6">

        <div className="flex items-start gap-3">

          <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />

          <div>

            <h3 className="font-black uppercase text-white">
              Importante
            </h3>

            <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-300">
              Fique atento às
              comunicações dos líderes
              e dos GCs para informações
              adicionais, orientações e
              possíveis alterações na
              programação.
            </p>

          </div>
        </div>

      </section>

      {/* RODAPÉ */}
      <div className="mt-6 flex items-center justify-center gap-2 pb-4 text-center text-neutral-500">

        <Heart className="h-4 w-4 shrink-0" />

        <p className="text-xs font-bold">
          Salve as datas e compartilhe
          com quem precisa estar com a
          gente!
        </p>

      </div>

    </div>
  );
}

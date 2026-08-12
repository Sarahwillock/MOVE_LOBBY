import React from 'react';

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

import EventActions from './EventActions';

type EventType =
  | 'igreja'
  | 'move'
  | 'gc';

type CalendarEvent = {
  day: number;
  type: EventType;
  title: string;
  time?: string;
  location?: string;
};

type MonthData = {
  name: string;
  monthIndex: number;
  events: CalendarEvent[];
};

const MONTHS: MonthData[] = [
  {
    name: 'AGOSTO',
    monthIndex: 7,
    events: [
      // GCs
      {
        day: 7,
        type: 'gc',
        title: 'GC Lobby',
        time: '19h',
        location: 'Alphaville'
      },
      {
        day: 7,
        type: 'gc',
        title: 'GC Rock — 15 a 18 anos',
        time: '20h',
        location: 'Alphaville'
      },
      {
        day: 7,
        type: 'gc',
        title: 'GC Rock — 12 a 14 anos',
        time: '20h',
        location: 'Prédio da igreja'
      },

      // IGREJA
      {
        day: 11,
        type: 'igreja',
        title: 'Capacitação e Treinamento para Novos Líderes',
        time: '20h',
        location: 'Online'
      },

      {
        day: 13,
        type: 'igreja',
        title: 'Jejum de 40 Horas'
      },
      {
        day: 13,
        type: 'gc',
        title: 'GC Conecta',
        time: '20h',
        location: 'Alphaville'
      },

      {
        day: 14,
        type: 'igreja',
        title: 'Jejum de 40 Horas',
        time: '20h',
        location: 'Prédio da igreja'
      },
      {
        day: 14,
        type: 'gc',
        title: 'GC Rock — 15 a 18 anos',
        time: '20h',
        location: 'Alphaville'
      },
      {
        day: 14,
        type: 'gc',
        title: 'GC Rock — 12 a 14 anos',
        time: '20h',
        location: 'Prédio da igreja'
      },

      {
        day: 15,
        type: 'igreja',
        title: 'Jejum de 40 Horas — Programação de oração por GCs'
      },

      {
        day: 16,
        type: 'igreja',
        title: 'Encerramento do Jejum',
        time: '10h'
      },

      {
        day: 18,
        type: 'igreja',
        title: 'Capacitação e Treinamento para Novos Líderes',
        time: '20h',
        location: 'Online'
      },

      {
        day: 19,
        type: 'igreja',
        title: 'Aula Inaugural | Escola Huios',
        time: '20h',
        location: 'Campus Alphaville'
      },

      {
        day: 21,
        type: 'gc',
        title: 'GC Lobby',
        time: '19h',
        location: 'Alphaville'
      },
      {
        day: 21,
        type: 'gc',
        title: 'GC Rock — 15 a 18 anos',
        time: '20h',
        location: 'Alphaville'
      },
      {
        day: 21,
        type: 'gc',
        title: 'GC Rock — 12 a 14 anos',
        time: '20h',
        location: 'Prédio da igreja'
      },

      {
        day: 25,
        type: 'igreja',
        title: 'Capacitação e Treinamento para Novos Líderes',
        time: '20h',
        location: 'Online'
      },

      {
        day: 26,
        type: 'igreja',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja'
      },

      // IGREJA + MOVE
      {
        day: 28,
        type: 'igreja',
        title: 'Chá das Sisters'
      },
      {
        day: 28,
        type: 'move',
        title: 'Chá das Sisters'
      },

      // MOVE
      {
        day: 29,
        type: 'move',
        title: 'Movenite',
        time: '19h',
        location: 'Prédio da igreja'
      }
    ]
  },

  {
    name: 'SETEMBRO',
    monthIndex: 8,
    events: [
      {
        day: 1,
        type: 'igreja',
        title: 'Capacitação e Treinamento para Novos Líderes',
        time: '20h',
        location: 'Prédio da igreja'
      },

      {
        day: 6,
        type: 'igreja',
        title: 'Início do Jejum de 14 Dias'
      },

      {
        day: 12,
        type: 'igreja',
        title: 'Conferência Kids',
        location: 'Santo André'
      },

      {
        day: 16,
        type: 'igreja',
        title: 'Oração Geral | Período de Jejum',
        time: '19h',
        location: 'Prédio da igreja'
      },

      {
        day: 19,
        type: 'move',
        title: 'Movenite',
        time: '19h',
        location: 'Prédio da igreja'
      },

      {
        day: 20,
        type: 'igreja',
        title: 'Culto de Encerramento do Jejum'
      },

      {
        day: 23,
        type: 'igreja',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja'
      },

      {
        day: 25,
        type: 'igreja',
        title: 'Culto das Mulheres',
        time: '19h',
        location: 'Prédio da igreja'
      },

      {
        day: 26,
        type: 'move',
        title: 'Hangout dos Jovens',
        time: '19h',
        location: 'Prédio da igreja'
      }
    ]
  }
];

const WEEK_DAYS = [
  'DOM',
  'SEG',
  'TER',
  'QUA',
  'QUI',
  'SEX',
  'SÁB'
];

const colorByType: Record<EventType, string> = {
  igreja: 'bg-blue-500',
  move: 'bg-red-500',
  gc: 'bg-emerald-500'
};

const borderByType: Record<EventType, string> = {
  igreja: 'border-blue-500/30',
  move: 'border-red-500/30',
  gc: 'border-emerald-500/30'
};

const labelByType: Record<EventType, string> = {
  igreja: 'Igreja',
  move: 'MOVE',
  gc: 'GC'
};

const CHURCH_MAP_URL =
  'https://maps.app.goo.gl/Un9HZ4mLqykChKxSA';

export default function MoveCalendar() {
  const [open, setOpen] =
    React.useState(false);

  const [monthPosition, setMonthPosition] =
    React.useState(0);

  const [selectedDay, setSelectedDay] =
    React.useState<number | null>(null);

  const year = 2026;

  const currentMonth =
    MONTHS[monthPosition];

  const firstDay = new Date(
    year,
    currentMonth.monthIndex,
    1
  ).getDay();

  const totalDays = new Date(
    year,
    currentMonth.monthIndex + 1,
    0
  ).getDate();

  const days = Array.from(
    { length: totalDays },
    (_, index) => index + 1
  );

  const getEventsForDay = (
    day: number
  ) =>
    currentMonth.events.filter(
      (event) =>
        event.day === day
    );

  const selectedEvents =
    selectedDay !== null
      ? getEventsForDay(
          selectedDay
        )
      : [];

  const closeCalendar = () => {
    setOpen(false);
    setSelectedDay(null);
  };

  const goPrevious = () => {
    if (monthPosition === 0) {
      return;
    }

    setMonthPosition(
      (current) =>
        current - 1
    );

    setSelectedDay(null);
  };

  const goNext = () => {
    if (
      monthPosition ===
      MONTHS.length - 1
    ) {
      return;
    }

    setMonthPosition(
      (current) =>
        current + 1
    );

    setSelectedDay(null);
  };

  React.useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      'hidden';

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (
        event.key === 'Escape'
      ) {
        closeCalendar();
      }
    };

    window.addEventListener(
      'keydown',
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, [open]);

  return (
    <>
      {/* BOTÃO DO CALENDÁRIO */}
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setMonthPosition(0);
          setSelectedDay(null);
        }}
        aria-label="Abrir calendário"
        className="
          flex h-11 w-11
          items-center justify-center
          rounded-xl
          border border-blue-600/30
          bg-blue-600/10
          text-blue-500
          transition
          hover:bg-blue-600
          hover:text-white
          active:scale-95
        "
      >
        <CalendarDays className="h-5 w-5" />
      </button>

      {/* FULLSCREEN */}
      {open && (
        <div
          className="
            fixed inset-0
            z-[9999]
            h-[100dvh] w-screen
            overflow-y-auto
            bg-black
            text-white
          "
        >
          <div className="min-h-[100dvh] w-full">

            {/* CABEÇALHO FIXO */}
            <header
              className="
                sticky top-0 z-50
                border-b border-blue-600/40
                bg-black/95
                backdrop-blur-xl
              "
            >
              <div
                className="
                  mx-auto flex
                  w-full max-w-6xl
                  items-center
                  gap-2
                  px-3 py-3
                  sm:gap-3
                  sm:px-6
                  sm:py-4
                "
              >
                {/* ANTERIOR */}
                <button
                  type="button"
                  onClick={goPrevious}
                  disabled={
                    monthPosition === 0
                  }
                  aria-label="Mês anterior"
                  className="
                    flex h-10 w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-white
                    transition
                    hover:bg-white/20
                    disabled:cursor-not-allowed
                    disabled:opacity-20
                    sm:h-11 sm:w-11
                  "
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* MÊS */}
                <div className="min-w-0 flex-1 text-center">
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-blue-500 sm:text-[9px]">
                    Calendário 2026
                  </p>

                  <h2 className="mt-0.5 truncate text-xl font-black uppercase text-white sm:mt-1 sm:text-3xl">
                    {currentMonth.name}
                  </h2>
                </div>

                {/* PRÓXIMO */}
                <button
                  type="button"
                  onClick={goNext}
                  disabled={
                    monthPosition ===
                    MONTHS.length - 1
                  }
                  aria-label="Próximo mês"
                  className="
                    flex h-10 w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-white
                    transition
                    hover:bg-white/20
                    disabled:cursor-not-allowed
                    disabled:opacity-20
                    sm:h-11 sm:w-11
                  "
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* X - SEMPRE VISÍVEL */}
                <button
                  type="button"
                  onClick={closeCalendar}
                  aria-label="Fechar calendário"
                  title="Fechar calendário"
                  className="
                    flex h-10 w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border border-red-500/30
                    bg-red-500/10
                    text-red-400
                    transition
                    hover:bg-red-500
                    hover:text-white
                    active:scale-95
                    sm:h-11 sm:w-11
                  "
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </header>

            {/* CONTEÚDO */}
            <main
              className="
                mx-auto
                w-full max-w-6xl
                px-3 py-5
                sm:px-6
                sm:py-6
                lg:py-8
              "
            >
              {/* LEGENDA */}
              <div className="mb-5 flex flex-wrap justify-center gap-3 sm:mb-6 sm:gap-4">

                <div className="flex items-center gap-2 text-[9px] font-black uppercase text-neutral-300 sm:text-[10px]">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                  Igreja
                </div>

                <div className="flex items-center gap-2 text-[9px] font-black uppercase text-neutral-300 sm:text-[10px]">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  MOVE
                </div>

                <div className="flex items-center gap-2 text-[9px] font-black uppercase text-neutral-300 sm:text-[10px]">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  GCs
                </div>

              </div>

              {/* CALENDÁRIO */}
              <section
                className="
                  rounded-2xl
                  border border-white/10
                  bg-neutral-950/95
                  p-2
                  backdrop-blur-md
                  sm:p-5
                  lg:p-6
                "
              >
                <div className="grid grid-cols-7 gap-1 sm:gap-2">

                  {/* DIAS DA SEMANA */}
                  {WEEK_DAYS.map(
                    (day) => (
                      <div
                        key={day}
                        className="
                          py-2
                          text-center
                          text-[8px]
                          font-black
                          text-neutral-500
                          sm:text-[10px]
                        "
                      >
                        {day}
                      </div>
                    )
                  )}

                  {/* ESPAÇOS */}
                  {Array.from({
                    length: firstDay
                  }).map(
                    (_, index) => (
                      <div
                        key={`empty-${index}`}
                      />
                    )
                  )}

                  {/* DIAS */}
                  {days.map((day) => {
                    const events =
                      getEventsForDay(
                        day
                      );

                    const types =
                      Array.from(
                        new Set(
                          events.map(
                            (event) =>
                              event.type
                          )
                        )
                      );

                    const selected =
                      selectedDay === day;

                    return (
                      <button
                        key={day}
                        type="button"
                        disabled={
                          events.length ===
                          0
                        }
                        onClick={() =>
                          setSelectedDay(
                            (current) =>
                              current === day
                                ? null
                                : day
                          )
                        }
                        className={`
                          relative
                          flex aspect-square
                          min-h-[40px]
                          flex-col
                          items-center
                          justify-center
                          rounded-lg
                          border
                          transition
                          sm:min-h-[64px]
                          sm:rounded-xl
                          lg:min-h-[80px]

                          ${
                            selected
                              ? 'border-white bg-white/15'
                              : events.length > 0
                              ? 'border-white/15 bg-white/[0.04] hover:bg-white/[0.08]'
                              : 'border-transparent'
                          }
                        `}
                      >
                        <span
                          className={`
                            text-xs
                            font-black
                            sm:text-base
                            lg:text-lg

                            ${
                              events.length > 0
                                ? 'text-white'
                                : 'text-neutral-600'
                            }
                          `}
                        >
                          {day}
                        </span>

                        {/* PONTOS */}
                        {types.length >
                          0 && (
                          <div
                            className="
                              absolute
                              bottom-1
                              flex gap-0.5
                              sm:bottom-2
                              sm:gap-1
                            "
                          >
                            {types.map(
                              (type) => (
                                <span
                                  key={type}
                                  className={`
                                    h-1.5 w-1.5
                                    rounded-full
                                    sm:h-2 sm:w-2
                                    ${colorByType[type]}
                                  `}
                                />
                              )
                            )}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* DETALHES DO DIA */}
              {selectedEvents.length >
                0 && (
                <section
                  className="
                    mt-5
                    rounded-2xl
                    border border-white/10
                    bg-black/75
                    p-4
                    backdrop-blur-md
                    sm:mt-6
                    sm:p-5
                  "
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500">
                        Eventos do dia
                      </p>

                      <h3 className="mt-1 text-xl font-black text-white">
                        {String(
                          selectedDay
                        ).padStart(
                          2,
                          '0'
                        )}
                        /
                        {String(
                          currentMonth.monthIndex +
                            1
                        ).padStart(
                          2,
                          '0'
                        )}
                      </h3>
                    </div>

                    {/* FECHA SÓ OS DETALHES */}
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedDay(
                          null
                        )
                      }
                      aria-label="Fechar eventos do dia"
                      className="
                        flex h-9 w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-white/10
                        text-neutral-300
                        transition
                        hover:bg-white/20
                        hover:text-white
                      "
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">

                    {selectedEvents.map(
                      (
                        event,
                        index
                      ) => {
                        const isChurch =
                          event.location ===
                          'Prédio da igreja';

                        const eventDate =
                          `${String(
                            selectedDay
                          ).padStart(
                            2,
                            '0'
                          )}/${String(
                            currentMonth.monthIndex +
                              1
                          ).padStart(
                            2,
                            '0'
                          )}`;

                        return (
                          <div
                            key={`${event.title}-${index}`}
                            className={`
                              rounded-xl
                              border
                              bg-black/70
                              p-4
                              backdrop-blur-md
                              ${borderByType[event.type]}
                            `}
                          >
                            <div className="flex items-start gap-3">

                              {/* COR */}
                              <span
                                className={`
                                  mt-1.5
                                  h-2.5 w-2.5
                                  shrink-0
                                  rounded-full
                                  ${colorByType[event.type]}
                                `}
                              />

                              <div className="min-w-0 flex-1">

                                {/* TIPO */}
                                <p className="text-[9px] font-black uppercase tracking-wider text-neutral-500">
                                  {
                                    labelByType[
                                      event.type
                                    ]
                                  }
                                </p>

                                {/* TÍTULO */}
                                <p className="mt-1 text-sm font-bold text-white sm:text-base">
                                  {
                                    event.title
                                  }
                                </p>

                                {/* HORÁRIO */}
                                {event.time && (
                                  <p className="mt-2 text-xs font-semibold text-neutral-400">
                                    {
                                      event.time
                                    }
                                  </p>
                                )}

                                {/* LOCAL */}
                                {event.location &&
                                  (isChurch ? (
                                    <a
                                      href={
                                        CHURCH_MAP_URL
                                      }
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="
                                        mt-1
                                        inline-block
                                        text-xs
                                        font-semibold
                                        text-blue-400
                                        underline
                                        underline-offset-4
                                      "
                                    >
                                      Prédio da igreja
                                    </a>
                                  ) : (
                                    <p className="mt-1 text-xs font-semibold text-neutral-400">
                                      {
                                        event.location
                                      }
                                    </p>
                                  ))}

                                {/* AÇÕES */}
                                <EventActions
                                  title={
                                    event.title
                                  }
                                  date={
                                    eventDate
                                  }
                                  time={
                                    event.time
                                  }
                                  location={
                                    event.location
                                  }
                                  isGC={
                                    event.type ===
                                    'gc'
                                  }
                                />

                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}

                  </div>
                </section>
              )}

              {/* ESPAÇO INFERIOR MOBILE */}
              <div className="h-6" />

            </main>
          </div>
        </div>
      )}
    </>
  );
}

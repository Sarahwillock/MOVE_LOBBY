import React from 'react';

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

import EventActions from './EventActions';

import {
  EVENTS_2026,
  MONTHS_2026,
  getEventsByDate,
  sortEvents,
  type EventType,
  type MoveEvent
} from '../data/events2026';

const WEEK_DAYS = [
  'DOM',
  'SEG',
  'TER',
  'QUA',
  'QUI',
  'SEX',
  'SÁB'
];

const CHURCH_MAP_URL =
  'https://maps.app.goo.gl/Un9HZ4mLqykChKxSA';

/* =========================================================
   CORES
========================================================= */

const colorByType: Record<EventType, string> = {
  igreja: 'bg-blue-500',
  move: 'bg-pink-500',
  gc: 'bg-emerald-500',
  'igreja-move': 'bg-violet-500'
};

const borderByType: Record<EventType, string> = {
  igreja: 'border-blue-500/30',
  move: 'border-pink-500/30',
  gc: 'border-emerald-500/30',
  'igreja-move': 'border-violet-500/30'
};

const labelByType: Record<EventType, string> = {
  igreja: 'Igreja',
  move: 'MOVE',
  gc: 'GC',
  'igreja-move': 'Igreja + MOVE'
};

/* =========================================================
   COMPONENTE
========================================================= */

export default function MoveCalendar() {
  const [open, setOpen] =
    React.useState(false);

  const [monthPosition, setMonthPosition] =
    React.useState(0);

  const [selectedDay, setSelectedDay] =
    React.useState<number | null>(null);

  const year = 2026;

  /* =======================================================
     MÊS ATUAL
  ======================================================= */

  const currentMonth =
    MONTHS_2026[monthPosition];

  const monthNumber =
    currentMonth.number;

  const monthIndex =
    monthNumber - 1;

  const firstDay = new Date(
    year,
    monthIndex,
    1
  ).getDay();

  const totalDays = new Date(
    year,
    monthIndex + 1,
    0
  ).getDate();

  const days = Array.from(
    { length: totalDays },
    (_, index) => index + 1
  );

  /* =======================================================
     EVENTOS DO MÊS
  ======================================================= */

  const monthEvents =
    React.useMemo(() => {
      return sortEvents(
        EVENTS_2026.filter(
          (event) =>
            event.year === year &&
            event.month === monthNumber
        )
      );
    }, [monthNumber]);

  /* =======================================================
     EVENTOS DE UM DIA

     Usa getEventsByDate porque ele também considera
     eventos que duram vários dias.
  ======================================================= */

  const getEventsForDay = (
    day: number
  ): MoveEvent[] => {
    return sortEvents(
      getEventsByDate(
        year,
        monthNumber,
        day
      )
    );
  };

  const selectedEvents =
    selectedDay !== null
      ? getEventsForDay(selectedDay)
      : [];

  /* =======================================================
     FECHAR
  ======================================================= */

  const closeCalendar = () => {
    setOpen(false);
    setSelectedDay(null);
  };

  /* =======================================================
     NAVEGAÇÃO
  ======================================================= */

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
      MONTHS_2026.length - 1
    ) {
      return;
    }

    setMonthPosition(
      (current) =>
        current + 1
    );

    setSelectedDay(null);
  };

  /* =======================================================
     BLOQUEIA SCROLL + ESC
  ======================================================= */

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
      if (event.key === 'Escape') {
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

  /* =======================================================
     ABRIR

     Começa em agosto.
  ======================================================= */

  const openCalendar = () => {
    setMonthPosition(0);
    setSelectedDay(null);
    setOpen(true);
  };

  return (
    <>
      {/* ================================================
          BOTÃO CALENDÁRIO
      ================================================= */}

      <button
        type="button"
        onClick={openCalendar}
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

      {/* ================================================
          FULLSCREEN
      ================================================= */}

      {open && (
        <div
          className="
            fixed inset-0
            z-[9999]
            h-[100dvh]
            w-screen
            overflow-y-auto
            bg-black
            text-white
          "
        >
          <div className="min-h-[100dvh] w-full">

            {/* ==========================================
                CABEÇALHO
            =========================================== */}

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
                  mx-auto
                  flex w-full
                  max-w-6xl
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
                    MONTHS_2026.length - 1
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

                {/* FECHAR */}

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

            {/* ==========================================
                CONTEÚDO
            =========================================== */}

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
                  <span className="h-2.5 w-2.5 rounded-full bg-pink-500" />
                  MOVE
                </div>

                <div className="flex items-center gap-2 text-[9px] font-black uppercase text-neutral-300 sm:text-[10px]">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  GCs
                </div>

                <div className="flex items-center gap-2 text-[9px] font-black uppercase text-neutral-300 sm:text-[10px]">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                  Igreja + MOVE
                </div>

              </div>

              {/* ========================================
                  CALENDÁRIO
              ========================================= */}

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

                  {/* ESPAÇOS ANTES DO DIA 1 */}

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
                      getEventsForDay(day);

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
                          events.length === 0
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

                        {/* PONTOS DOS TIPOS */}

                        {types.length > 0 && (
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

              {/* ========================================
                  RESUMO DO MÊS
              ========================================= */}

              <div className="mt-3 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                  {monthEvents.length}{' '}
                  {monthEvents.length === 1
                    ? 'evento cadastrado'
                    : 'eventos cadastrados'}
                </p>
              </div>

              {/* ========================================
                  DETALHES DO DIA
              ========================================= */}

              {selectedEvents.length > 0 && (
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

                  {/* CABEÇALHO DETALHES */}

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
                          monthNumber
                        ).padStart(
                          2,
                          '0'
                        )}
                      </h3>
                    </div>

                    {/* FECHA SOMENTE O DIA */}

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedDay(null)
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
                        active:scale-95
                      "
                    >
                      <X className="h-4 w-4" />
                    </button>

                  </div>

                  {/* EVENTOS */}

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">

                    {selectedEvents.map(
                      (event) => {
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
                            monthNumber
                          ).padStart(
                            2,
                            '0'
                          )}`;

                        const calendarTime =
                          event.time
                            ? event.time.replace(
                                ':',
                                'h'
                              )
                            : undefined;

                        return (
                          <div
                            key={event.id}
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
                                  {event.title}
                                </p>

                                {/* DESCRIÇÃO */}

                                {event.description && (
                                  <p className="mt-2 text-xs font-medium leading-relaxed text-neutral-400">
                                    {
                                      event.description
                                    }
                                  </p>
                                )}

                                {/* HORÁRIO */}

                                {event.time && (
                                  <p className="mt-2 text-xs font-semibold text-neutral-400">
                                    {event.endTime
                                      ? `${event.time} às ${event.endTime}`
                                      : event.time}
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

                                {!event.endDay && (
                                  <EventActions
                                    title={
                                      event.title
                                    }
                                    date={
                                      eventDate
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
                          </div>
                        );
                      }
                    )}

                  </div>
                </section>
              )}

              {/* MOBILE */}

              <div className="h-8" />

            </main>
          </div>
        </div>
      )}
    </>
  );
}

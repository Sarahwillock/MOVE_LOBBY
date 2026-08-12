import React from 'react';

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

import EventActions from './EventActions';

import {
  MONTHS_2026,
  getEventsByDate,
  getUpcomingEvents,
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
     HOJE
  ======================================================= */

  const today = React.useMemo(
    () => new Date(),
    []
  );

  const todayYear =
    today.getFullYear();

  const todayMonth =
    today.getMonth() + 1;

  const todayDay =
    today.getDate();

  /* =======================================================
     MÊS ATUAL DO CALENDÁRIO
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
     VERIFICA SE A DATA JÁ PASSOU
  ======================================================= */

  const isPastDay = (
    day: number
  ) => {
    const date = new Date(
      year,
      monthNumber - 1,
      day,
      23,
      59,
      59,
      999
    );

    const currentDate = new Date(
      todayYear,
      todayMonth - 1,
      todayDay,
      0,
      0,
      0,
      0
    );

    return (
      date.getTime() <
      currentDate.getTime()
    );
  };

  const isToday = (
    day: number
  ) => {
    return (
      year === todayYear &&
      monthNumber === todayMonth &&
      day === todayDay
    );
  };

  /* =======================================================
     EVENTOS FUTUROS DO MÊS
  ======================================================= */

  const monthEvents =
    React.useMemo(() => {
      return sortEvents(
        getUpcomingEvents().filter(
          (event) =>
            event.year === year &&
            event.month === monthNumber
        )
      );
    }, [monthNumber]);

  /* =======================================================
     EVENTOS FUTUROS DE UM DIA
  ======================================================= */

  const getEventsForDay = (
    day: number
  ): MoveEvent[] => {
    if (isPastDay(day)) {
      return [];
    }

    return sortEvents(
      getEventsByDate(
        year,
        monthNumber,
        day
      ).filter((event) => {
        /*
         * Como o dia não passou,
         * mantemos os eventos dessa data.
         */
        return true;
      })
    );
  };

  const selectedEvents =
    selectedDay !== null
      ? getEventsForDay(
          selectedDay
        )
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
     ABRIR CALENDÁRIO

     Abre automaticamente no mês atual
     quando estivermos entre agosto e dezembro.

     Antes de agosto -> abre agosto.
     Depois de dezembro -> abre dezembro.
  ======================================================= */

  const openCalendar = () => {
    let initialPosition = 0;

    if (
      todayYear === year &&
      todayMonth >= 8 &&
      todayMonth <= 12
    ) {
      const foundIndex =
        MONTHS_2026.findIndex(
          (month) =>
            month.number ===
            todayMonth
        );

      if (foundIndex >= 0) {
        initialPosition =
          foundIndex;
      }
    } else if (
      todayYear > year ||
      (
        todayYear === year &&
        todayMonth > 12
      )
    ) {
      initialPosition =
        MONTHS_2026.length - 1;
    }

    setMonthPosition(
      initialPosition
    );

    setSelectedDay(null);

    setOpen(true);
  };

  return (
    <>

      {/* =================================================
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

      {/* =================================================
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

            {/* =============================================
                CABEÇALHO
            ============================================= */}

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

            {/* =============================================
                CONTEÚDO
            ============================================= */}

            <main
              className="
                mx-auto
                w-full
                max-w-6xl
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

              {/* ===========================================
                  CALENDÁRIO
              =========================================== */}

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
                    const past =
                      isPastDay(day);

                    const todayDate =
                      isToday(day);

                    const events =
                      past
                        ? []
                        : getEventsForDay(
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
                      selectedDay ===
                      day;

                    const hasEvents =
                      events.length > 0;

                    return (
                      <button
                        key={day}
                        type="button"
                        disabled={
                          !hasEvents
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
                              : todayDate
                              ? 'border-blue-500 bg-blue-500/10'
                              : hasEvents
                              ? 'border-white/15 bg-white/[0.04] hover:bg-white/[0.08]'
                              : 'border-transparent'
                          }

                          ${
                            past
                              ? 'opacity-30'
                              : ''
                          }
                        `}
                      >

                        {/* NÚMERO */}

                        <span
                          className={`
                            text-xs
                            font-black
                            sm:text-base
                            lg:text-lg

                            ${
                              todayDate
                                ? 'text-blue-400'
                                : hasEvents
                                ? 'text-white'
                                : 'text-neutral-600'
                            }
                          `}
                        >
                          {day}
                        </span>

                        {/* HOJE */}

                        {todayDate && (
                          <span
                            className="
                              absolute
                              top-1
                              text-[6px]
                              font-black
                              uppercase
                              tracking-wider
                              text-blue-400
                              sm:top-2
                              sm:text-[7px]
                            "
                          >
                            HOJE
                          </span>
                        )}

                        {/* PONTOS DOS EVENTOS */}

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

              {/* ===========================================
                  RESUMO
              =========================================== */}

              <div className="mt-3 text-center">

                <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-600">
                  {monthEvents.length}{' '}
                  {monthEvents.length === 1
                    ? 'próximo evento'
                    : 'próximos eventos'}
                </p>

              </div>

              {/* ===========================================
                  DETALHES DO DIA
              =========================================== */}

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

                  {/* CABEÇALHO */}

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

                    {/* FECHAR DIA */}

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
                            key={
                              event.id
                            }
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
                                    {event.description}
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
                                  (
                                    isChurch
                                      ? (
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
                                      )
                                      : (
                                        <p className="mt-1 text-xs font-semibold text-neutral-400">
                                          {event.location}
                                        </p>
                                      )
                                  )}

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

              <div className="h-8" />

            </main>

          </div>
        </div>
      )}

    </>
  );
}

import React from 'react';
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

type EventType = 'igreja' | 'move' | 'gc';

type CalendarEvent = {
  day: number;
  type: EventType;
  title: string;
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
      // IGREJA
      { day: 11, type: 'igreja', title: 'Capacitação de Líderes' },
      { day: 13, type: 'igreja', title: 'Jejum de 40 Horas' },
      { day: 14, type: 'igreja', title: 'Jejum de 40 Horas' },
      { day: 15, type: 'igreja', title: 'Jejum de 40 Horas' },
      { day: 16, type: 'igreja', title: 'Encerramento do Jejum' },
      { day: 18, type: 'igreja', title: 'Capacitação de Líderes' },
      { day: 19, type: 'igreja', title: 'Escola Huios' },
      { day: 25, type: 'igreja', title: 'Capacitação de Líderes' },
      { day: 26, type: 'igreja', title: 'Discipulado de Líderes' },

      // IGREJA + MOVE
      { day: 28, type: 'igreja', title: 'Chá das Sisters' },
      { day: 28, type: 'move', title: 'Chá das Sisters' },

      // MOVE
      { day: 29, type: 'move', title: 'Movenite' },

      // GCs
      { day: 7, type: 'gc', title: 'GC Lobby' },
      { day: 7, type: 'gc', title: 'GC Rock 15 a 18' },
      { day: 7, type: 'gc', title: 'GC Rock 12 a 14' },

      { day: 13, type: 'gc', title: 'GC Conecta' },

      { day: 14, type: 'gc', title: 'GC Rock 15 a 18' },
      { day: 14, type: 'gc', title: 'GC Rock 12 a 14' },

      { day: 21, type: 'gc', title: 'GC Lobby' },
      { day: 21, type: 'gc', title: 'GC Rock 15 a 18' },
      { day: 21, type: 'gc', title: 'GC Rock 12 a 14' }
    ]
  },

  {
    name: 'SETEMBRO',
    monthIndex: 8,
    events: [
      // IGREJA
      { day: 1, type: 'igreja', title: 'Capacitação de Líderes' },
      { day: 6, type: 'igreja', title: 'Início do Jejum de 14 Dias' },
      { day: 12, type: 'igreja', title: 'Conferência Kids' },
      { day: 16, type: 'igreja', title: 'Oração Geral' },
      { day: 20, type: 'igreja', title: 'Encerramento do Jejum' },
      { day: 23, type: 'igreja', title: 'Discipulado de Líderes' },
      { day: 25, type: 'igreja', title: 'Culto das Mulheres' },

      // MOVE
      { day: 19, type: 'move', title: 'Movenite' },
      { day: 26, type: 'move', title: 'Hangout dos Jovens' }
    ]
  },

  {
    name: 'OUTUBRO',
    monthIndex: 9,
    events: [
      // IGREJA
      { day: 6, type: 'igreja', title: 'Encontro para Casais' },
      { day: 7, type: 'igreja', title: 'Discipulado de Líderes' },
      { day: 12, type: 'igreja', title: 'Dia das Crianças' },
      { day: 13, type: 'igreja', title: 'Encontro para Casais' },
      { day: 17, type: 'igreja', title: 'Encontro Kids' },
      { day: 20, type: 'igreja', title: 'Encontro para Casais' },
      { day: 21, type: 'igreja', title: 'Discipulado de Líderes' },
      { day: 27, type: 'igreja', title: 'Encontro para Casais' },
      { day: 31, type: 'igreja', title: 'Chá das Sisters' },

      // MOVE
      { day: 10, type: 'move', title: 'Movenite' }
    ]
  },

  {
    name: 'NOVEMBRO',
    monthIndex: 10,
    events: [
      // IGREJA
      { day: 4, type: 'igreja', title: 'Discipulado de Líderes' },
      { day: 13, type: 'igreja', title: 'Reunião do Presbitério Geral' },
      { day: 14, type: 'igreja', title: 'Conferência de Líderes' },
      { day: 18, type: 'igreja', title: 'Discipulado de Líderes' },
      { day: 27, type: 'igreja', title: 'Culto das Mulheres' },

      // MOVE
      { day: 7, type: 'move', title: 'Movenite' }
    ]
  },

  {
    name: 'DEZEMBRO',
    monthIndex: 11,
    events: [
      // IGREJA
      { day: 2, type: 'igreja', title: 'Discipulado de Líderes' },
      { day: 6, type: 'igreja', title: 'Batismo + Aniversário da Igreja' },
      { day: 19, type: 'igreja', title: 'Culto de Natal' },
      { day: 31, type: 'igreja', title: 'Culto da Virada' },

      // MOVE
      { day: 12, type: 'move', title: 'Movenite' }
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

const textByType: Record<EventType, string> = {
  igreja: 'Igreja',
  move: 'MOVE',
  gc: 'GC'
};

export default function MoveCalendar() {
  const [open, setOpen] = React.useState(false);
  const [monthPosition, setMonthPosition] = React.useState(0);
  const [selectedDay, setSelectedDay] = React.useState<number | null>(null);

  const year = 2026;
  const currentMonth = MONTHS[monthPosition];

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

  const getEventsForDay = (day: number) =>
    currentMonth.events.filter(
      (event) => event.day === day
    );

  const selectedEvents =
    selectedDay !== null
      ? getEventsForDay(selectedDay)
      : [];

  const goPrevious = () => {
    setSelectedDay(null);

    setMonthPosition((current) =>
      current === 0
        ? MONTHS.length - 1
        : current - 1
    );
  };

  const goNext = () => {
    setSelectedDay(null);

    setMonthPosition((current) =>
      current === MONTHS.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
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

      {open && (
        <div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/80
            p-3
            backdrop-blur-sm
            sm:p-4
          "
        >
          <div
            className="
              max-h-[92vh]
              w-full max-w-lg
              overflow-y-auto
              rounded-3xl
              border border-white/10
              bg-neutral-950
              p-4
              shadow-2xl
              sm:p-6
            "
          >
            {/* CABEÇALHO */}
            <div className="mb-5 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={goPrevious}
                aria-label="Mês anterior"
                className="
                  flex h-10 w-10
                  shrink-0 items-center justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition
                  hover:bg-white/20
                "
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="text-center">
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-blue-500">
                  Calendário 2026
                </p>

                <h2 className="mt-1 text-2xl font-black uppercase text-white sm:text-3xl">
                  {currentMonth.name}
                </h2>
              </div>

              <button
                type="button"
                onClick={goNext}
                aria-label="Próximo mês"
                className="
                  flex h-10 w-10
                  shrink-0 items-center justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition
                  hover:bg-white/20
                "
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* LEGENDA */}
            <div className="mb-5 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase text-neutral-300">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                Igreja
              </div>

              <div className="flex items-center gap-2 text-[10px] font-black uppercase text-neutral-300">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                MOVE
              </div>

              <div className="flex items-center gap-2 text-[10px] font-black uppercase text-neutral-300">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                GCs
              </div>
            </div>

            {/* CALENDÁRIO */}
            <div className="grid grid-cols-7 gap-1">
              {WEEK_DAYS.map((day) => (
                <div
                  key={day}
                  className="
                    py-2
                    text-center
                    text-[8px]
                    font-black
                    text-neutral-500
                    sm:text-[9px]
                  "
                >
                  {day}
                </div>
              ))}

              {Array.from({
                length: firstDay
              }).map((_, index) => (
                <div key={`empty-${index}`} />
              ))}

              {days.map((day) => {
                const dayEvents =
                  getEventsForDay(day);

                const types = Array.from(
                  new Set(
                    dayEvents.map(
                      (event) => event.type
                    )
                  )
                );

                const selected =
                  selectedDay === day;

                return (
                  <button
                    key={day}
                    type="button"
                    disabled={dayEvents.length === 0}
                    onClick={() =>
                      setSelectedDay(day)
                    }
                    className={`
                      relative
                      flex aspect-square
                      min-h-[42px]
                      flex-col
                      items-center
                      justify-center
                      rounded-xl
                      border
                      transition
                      ${
                        selected
                          ? 'border-white bg-white/10'
                          : dayEvents.length > 0
                          ? 'border-white/15 bg-white/[0.04] hover:bg-white/[0.08]'
                          : 'border-transparent'
                      }
                    `}
                  >
                    <span
                      className={`
                        text-xs font-black
                        sm:text-sm
                        ${
                          dayEvents.length > 0
                            ? 'text-white'
                            : 'text-neutral-600'
                        }
                      `}
                    >
                      {day}
                    </span>

                    {types.length > 0 && (
                      <div className="absolute bottom-1 flex gap-0.5 sm:bottom-1.5 sm:gap-1">
                        {types.map((type) => (
                          <span
                            key={type}
                            className={`
                              h-1.5 w-1.5
                              rounded-full
                              sm:h-2 sm:w-2
                              ${colorByType[type]}
                            `}
                          />
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* DETALHES DO DIA */}
            {selectedEvents.length > 0 && (
              <section
                className="
                  mt-5
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-4
                "
              >
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500">
                  Eventos do dia
                </p>

                <h3 className="mt-1 text-xl font-black text-white">
                  {String(selectedDay).padStart(2, '0')}
                  /
                  {String(
                    currentMonth.monthIndex + 1
                  ).padStart(2, '0')}
                </h3>

                <div className="mt-4 space-y-2">
                  {selectedEvents.map(
                    (event, index) => (
                      <div
                        key={`${event.title}-${index}`}
                        className="
                          flex items-start gap-3
                          rounded-xl
                          bg-black/30
                          p-3
                        "
                      >
                        <span
                          className={`
                            mt-1.5 h-2.5 w-2.5
                            shrink-0 rounded-full
                            ${colorByType[event.type]}
                          `}
                        />

                        <div>
                          <p className="text-[9px] font-black uppercase tracking-wider text-neutral-500">
                            {textByType[event.type]}
                          </p>

                          <p className="mt-1 text-sm font-bold text-white">
                            {event.title}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </section>
            )}

            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setSelectedDay(null);
              }}
              className="
                mt-5 flex min-h-12
                w-full items-center
                justify-center gap-2
                rounded-xl
                bg-white
                px-4 py-3
                font-black uppercase
                text-black
                transition
                hover:bg-blue-600
                hover:text-white
                active:scale-[0.98]
              "
            >
              <X className="h-4 w-4" />
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

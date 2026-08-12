import React from 'react';
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

type EventType = 'igreja' | 'move' | 'gc';

type CalendarEvent = {
  date: string;
  type: EventType;
  title: string;
};

type MonthConfig = {
  name: string;
  monthIndex: number;
  events: CalendarEvent[];
};

const MONTHS: MonthConfig[] = [
  {
    name: 'AGOSTO',
    monthIndex: 7,
    events: [
      // IGREJA
      {
        date: '11/08',
        type: 'igreja',
        title: 'Capacitação e Treinamento para Novos Líderes'
      },
      {
        date: '13/08',
        type: 'igreja',
        title: 'Jejum de 40 Horas'
      },
      {
        date: '14/08',
        type: 'igreja',
        title: 'Jejum de 40 Horas'
      },
      {
        date: '15/08',
        type: 'igreja',
        title: 'Jejum de 40 Horas'
      },
      {
        date: '16/08',
        type: 'igreja',
        title: 'Encerramento do Jejum'
      },
      {
        date: '18/08',
        type: 'igreja',
        title: 'Capacitação e Treinamento para Novos Líderes'
      },
      {
        date: '19/08',
        type: 'igreja',
        title: 'Escola Huios'
      },
      {
        date: '25/08',
        type: 'igreja',
        title: 'Capacitação e Treinamento para Novos Líderes'
      },
      {
        date: '26/08',
        type: 'igreja',
        title: 'Discipulado de Líderes'
      },

      // IGREJA + MOVE
      {
        date: '28/08',
        type: 'igreja',
        title: 'Chá das Sisters'
      },
      {
        date: '28/08',
        type: 'move',
        title: 'Chá das Sisters'
      },

      // MOVE
      {
        date: '29/08',
        type: 'move',
        title: 'Movenite'
      },

      // GCs
      {
        date: '07/08',
        type: 'gc',
        title: 'GC Lobby'
      },
      {
        date: '07/08',
        type: 'gc',
        title: 'GC Rock 15 a 18'
      },
      {
        date: '07/08',
        type: 'gc',
        title: 'GC Rock 12 a 14'
      },
      {
        date: '13/08',
        type: 'gc',
        title: 'GC Conecta'
      },
      {
        date: '14/08',
        type: 'gc',
        title: 'GC Rock'
      },
      {
        date: '21/08',
        type: 'gc',
        title: 'GC Lobby'
      },
      {
        date: '21/08',
        type: 'gc',
        title: 'GC Rock'
      }
    ]
  },

  {
    name: 'SETEMBRO',
    monthIndex: 8,
    events: [
      {
        date: '01/09',
        type: 'igreja',
        title: 'Capacitação e Treinamento para Novos Líderes'
      },
      {
        date: '06/09',
        type: 'igreja',
        title: 'Início do Jejum de 14 Dias'
      },
      {
        date: '12/09',
        type: 'igreja',
        title: 'Conferência Kids'
      },
      {
        date: '16/09',
        type: 'igreja',
        title: 'Oração Geral'
      },
      {
        date: '19/09',
        type: 'move',
        title: 'Movenite'
      },
      {
        date: '20/09',
        type: 'igreja',
        title: 'Culto de Encerramento do Jejum'
      },
      {
        date: '23/09',
        type: 'igreja',
        title: 'Discipulado de Líderes'
      },
      {
        date: '25/09',
        type: 'igreja',
        title: 'Culto das Mulheres'
      },
      {
        date: '26/09',
        type: 'move',
        title: 'Hangout dos Jovens'
      }
    ]
  },

  {
    name: 'OUTUBRO',
    monthIndex: 9,
    events: [
      {
        date: '06/10',
        type: 'igreja',
        title: 'Encontro para Casais'
      },
      {
        date: '07/10',
        type: 'igreja',
        title: 'Discipulado de Líderes'
      },
      {
        date: '10/10',
        type: 'move',
        title: 'Movenite'
      },
      {
        date: '12/10',
        type: 'igreja',
        title: 'Dia das Crianças'
      },
      {
        date: '13/10',
        type: 'igreja',
        title: 'Encontro para Casais'
      },
      {
        date: '17/10',
        type: 'igreja',
        title: 'Encontro Kids'
      },
      {
        date: '20/10',
        type: 'igreja',
        title: 'Encontro para Casais'
      },
      {
        date: '21/10',
        type: 'igreja',
        title: 'Discipulado de Líderes'
      },
      {
        date: '27/10',
        type: 'igreja',
        title: 'Encontro para Casais'
      },
      {
        date: '31/10',
        type: 'igreja',
        title: 'Chá das Sisters'
      }
    ]
  },

  {
    name: 'NOVEMBRO',
    monthIndex: 10,
    events: [
      {
        date: '04/11',
        type: 'igreja',
        title: 'Discipulado de Líderes'
      },
      {
        date: '07/11',
        type: 'move',
        title: 'Movenite'
      },
      {
        date: '13/11',
        type: 'igreja',
        title: 'Reunião do Presbitério Geral'
      },
      {
        date: '14/11',
        type: 'igreja',
        title: 'Conferência de Líderes'
      },
      {
        date: '18/11',
        type: 'igreja',
        title: 'Discipulado de Líderes'
      },
      {
        date: '27/11',
        type: 'igreja',
        title: 'Culto das Mulheres'
      }
    ]
  },

  {
    name: 'DEZEMBRO',
    monthIndex: 11,
    events: [
      {
        date: '02/12',
        type: 'igreja',
        title: 'Discipulado de Líderes'
      },
      {
        date: '06/12',
        type: 'igreja',
        title: 'Batismo + Aniversário da Igreja'
      },
      {
        date: '12/12',
        type: 'move',
        title: 'Movenite'
      },
      {
        date: '19/12',
        type: 'igreja',
        title: 'Culto de Natal'
      },
      {
        date: '31/12',
        type: 'igreja',
        title: 'Culto da Virada'
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

const eventColors: Record<EventType, string> = {
  igreja: 'bg-blue-500',
  move: 'bg-red-500',
  gc: 'bg-emerald-500'
};

function getDayFromDate(date: string) {
  return Number(date.split('/')[0]);
}

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
      (event) => getDayFromDate(event.date) === day
    );

  const selectedEvents =
    selectedDay !== null
      ? getEventsForDay(selectedDay)
      : [];

  const previousMonth = () => {
    setSelectedDay(null);

    setMonthPosition((current) =>
      current === 0
        ? MONTHS.length - 1
        : current - 1
    );
  };

  const nextMonth = () => {
    setSelectedDay(null);

    setMonthPosition((current) =>
      current === MONTHS.length - 1
        ? 0
        : current + 1
    );
  };

  return (
    <>
      {/* BOTÃO */}
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

      {/* MODAL */}
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
                onClick={previousMonth}
                aria-label="Mês anterior"
                className="
                  flex h-10 w-10
                  shrink-0 items-center
                  justify-center
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
                  MOVE 2026
                </p>

                <h2 className="mt-1 text-2xl font-black uppercase text-white sm:text-3xl">
                  {currentMonth.name}
                </h2>
              </div>

              <button
                type="button"
                onClick={nextMonth}
                aria-label="Próximo mês"
                className="
                  flex h-10 w-10
                  shrink-0 items-center
                  justify-center
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

            {/* DIAS DA SEMANA */}
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

              {/* ESPAÇOS */}
              {Array.from({
                length: firstDay
              }).map((_, index) => (
                <div key={`empty-${index}`} />
              ))}

              {/* DIAS */}
              {days.map((day) => {
                const events =
                  getEventsForDay(day);

                const types = Array.from(
                  new Set(
                    events.map(
                      (event) => event.type
                    )
                  )
                );

                const isSelected =
                  selectedDay === day;

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() =>
                      events.length > 0
                        ? setSelectedDay(day)
                        : undefined
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
                        isSelected
                          ? 'border-white bg-white/10'
                          : events.length > 0
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
                          events.length > 0
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
                              ${eventColors[type]}
                            `}
                          />
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* EVENTOS DO DIA */}
            {selectedDay !== null &&
              selectedEvents.length > 0 && (
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
                    {String(selectedDay).padStart(
                      2,
                      '0'
                    )}
                    /
                    {String(
                      currentMonth.monthIndex + 1
                    ).padStart(2, '0')}
                  </h3>

                  <div className="mt-4 space-y-3">
                    {selectedEvents.map(
                      (event, index) => (
                        <div
                          key={`${event.title}-${index}`}
                          className="
                            flex items-start
                            gap-3
                            rounded-xl
                            bg-black/30
                            p-3
                          "
                        >
                          <span
                            className={`
                              mt-1.5
                              h-2.5 w-2.5
                              shrink-0
                              rounded-full
                              ${eventColors[event.type]}
                            `}
                          />

                          <div>
                            <p className="text-[9px] font-black uppercase tracking-wider text-neutral-500">
                              {event.type ===
                              'igreja'
                                ? 'Igreja'
                                : event.type ===
                                  'move'
                                ? 'MOVE'
                                : 'GC'}
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

            {/* FECHAR */}
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

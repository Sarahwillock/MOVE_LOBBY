import React from 'react';
import { CalendarDays, X } from 'lucide-react';

type EventType = 'igreja' | 'move' | 'gc';

type CalendarEvent = {
  day: number;
  type: EventType;
  title: string;
};

const EVENTS: CalendarEvent[] = [
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
  { day: 7, type: 'gc', title: 'GC Lobby / Rock' },
  { day: 13, type: 'gc', title: 'GC Conecta' },
  { day: 14, type: 'gc', title: 'GC Rock' },
  { day: 21, type: 'gc', title: 'GC Lobby / Rock' }
];

const DAYS = [
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

export default function MoveCalendar() {
  const [open, setOpen] = React.useState(false);

  const year = 2026;
  const month = 7; // agosto = 7

  const firstDay = new Date(year, month, 1).getDay();

  const totalDays = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const days = Array.from(
    { length: totalDays },
    (_, index) => index + 1
  );

  const getEventsForDay = (day: number) =>
    EVENTS.filter((event) => event.day === day);

  return (
    <>
      {/* BOTÃO DO CALENDÁRIO */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir calendário da MOVE"
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">

          <div
            className="
              relative
              w-full max-w-md
              rounded-3xl
              border border-white/10
              bg-neutral-950
              p-5
              shadow-2xl
              sm:p-6
            "
          >

            {/* TOPO */}
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">
                  MOVE 2026
                </p>

                <h2 className="mt-1 text-3xl font-black uppercase text-white">
                  Agosto
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition
                  hover:bg-white/20
                "
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* LEGENDA */}
            <div className="mb-5 flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-wider">
              <div className="flex items-center gap-2 text-neutral-300">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                Igreja
              </div>

              <div className="flex items-center gap-2 text-neutral-300">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                MOVE
              </div>

              <div className="flex items-center gap-2 text-neutral-300">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                GCs
              </div>
            </div>

            {/* DIAS DA SEMANA */}
            <div className="grid grid-cols-7 gap-1">
              {DAYS.map((day) => (
                <div
                  key={day}
                  className="
                    py-2
                    text-center
                    text-[9px]
                    font-black
                    text-neutral-500
                  "
                >
                  {day}
                </div>
              ))}

              {/* ESPAÇOS ANTES DO DIA 1 */}
              {Array.from({
                length: firstDay
              }).map((_, index) => (
                <div key={`empty-${index}`} />
              ))}

              {/* DIAS */}
              {days.map((day) => {
                const dayEvents =
                  getEventsForDay(day);

                return (
                  <div
                    key={day}
                    className={`
                      relative
                      flex aspect-square
                      flex-col
                      items-center
                      justify-center
                      rounded-xl
                      border
                      ${
                        dayEvents.length > 0
                          ? 'border-white/15 bg-white/[0.04]'
                          : 'border-transparent'
                      }
                    `}
                  >
                    <span
                      className={`
                        text-sm font-black
                        ${
                          dayEvents.length > 0
                            ? 'text-white'
                            : 'text-neutral-500'
                        }
                      `}
                    >
                      {day}
                    </span>

                    {dayEvents.length > 0 && (
                      <div className="absolute bottom-1.5 flex gap-1">
                        {Array.from(
                          new Set(
                            dayEvents.map(
                              (event) =>
                                event.type
                            )
                          )
                        ).map((type) => (
                          <span
                            key={type}
                            className={`
                              h-1.5 w-1.5
                              rounded-full
                              ${
                                colorByType[
                                  type as EventType
                                ]
                              }
                            `}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* AVISO */}
            <p className="mt-5 text-center text-xs font-medium text-neutral-500">
              Azul: Igreja · Vermelho: MOVE · Verde: GCs
            </p>

          </div>
        </div>
      )}
    </>
  );
}

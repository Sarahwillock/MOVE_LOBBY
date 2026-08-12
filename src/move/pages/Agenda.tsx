import React from 'react';
import {
  CalendarDays,
  Clock,
  MapPin,
  Info,
  Heart
} from 'lucide-react';

type AgendaType = 'igreja' | 'move' | 'igreja-move';

type AgendaEvent = {
  date: string;
  weekday: string;
  title: string;
  time?: string;
  location?: string;
  description?: string;
  highlight?: boolean;
  type: AgendaType;
};

type MonthAgenda = {
  month: string;
  events: AgendaEvent[];
};

type FilterType = 'todos' | 'igreja' | 'move';

const CHURCH_MAP_URL =
  'https://maps.app.goo.gl/Un9HZ4mLqykChKxSA';

const AGENDA: MonthAgenda[] = [
  {
    month: 'AGOSTO',
    events: [
      {
        date: '11/08',
        weekday: 'TERÇA-FEIRA',
        title: 'Capacitação e Treinamento para Novos Líderes',
        time: '20h',
        location: 'Online',
        description: '1ª aula',
        type: 'igreja'
      },
      {
        date: '13 a 16/08',
        weekday: 'QUINTA A DOMINGO',
        title: 'Jejum de 40 Horas',
        description:
          '13/08: compartilhar nos GCs na quinta-feira. 14/08: início no prédio da igreja às 20h. 15/08: programação de oração por GCs, online ou presencial — cada GC definirá o formato. 16/08: encerramento durante o Culto de Celebração às 10h.',
        highlight: true,
        type: 'igreja'
      },
      {
        date: '18/08',
        weekday: 'TERÇA-FEIRA',
        title: 'Capacitação e Treinamento para Novos Líderes',
        time: '20h',
        location: 'Online',
        description: '2ª aula',
        type: 'igreja'
      },
      {
        date: '19/08',
        weekday: 'QUARTA-FEIRA',
        title: 'Aula Inaugural | Escola Huios',
        time: '20h',
        location: 'Campus Alphaville',
        type: 'igreja'
      },
      {
        date: '25/08',
        weekday: 'TERÇA-FEIRA',
        title: 'Capacitação e Treinamento para Novos Líderes',
        time: '20h',
        location: 'Online',
        description: '3ª aula',
        type: 'igreja'
      },
      {
        date: '26/08',
        weekday: 'QUARTA-FEIRA',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja',
        description:
          '19h — Pastor + Líderes • 20h — Líderes + GCD',
        type: 'igreja'
      },
      {
        date: '28/08',
        weekday: 'SEXTA-FEIRA',
        title: 'Chá das Sisters',
        type: 'igreja-move'
      },
      {
        date: '29/08',
        weekday: 'SÁBADO',
        title: 'Movenite',
        time: '19h',
        location: 'Prédio da igreja',
        highlight: true,
        type: 'move'
      }
    ]
  },

  {
    month: 'SETEMBRO',
    events: [
      {
        date: '01/09',
        weekday: 'TERÇA-FEIRA',
        title: 'Capacitação e Treinamento para Novos Líderes',
        time: '20h',
        location: 'Prédio da igreja',
        description: '4ª e última aula',
        type: 'igreja'
      },
      {
        date: '06 a 20/09',
        weekday: '',
        title: 'Jejum de 14 Dias',
        highlight: true,
        type: 'igreja'
      },
      {
        date: '12/09',
        weekday: 'SÁBADO',
        title: 'Conferência Kids',
        location: 'Santo André',
        description:
          'Para todos os envolvidos no Ministério Infantil.',
        type: 'igreja'
      },
      {
        date: '16/09',
        weekday: 'QUARTA-FEIRA',
        title: 'Oração Geral | Período de Jejum',
        time: '19h',
        location: 'Prédio da igreja',
        type: 'igreja'
      },
      {
        date: '19/09',
        weekday: 'SÁBADO',
        title: 'Movenite',
        time: '19h',
        location: 'Prédio da igreja',
        highlight: true,
        type: 'move'
      },
      {
        date: '20/09',
        weekday: 'DOMINGO',
        title: 'Culto de Encerramento do Jejum',
        type: 'igreja'
      },
      {
        date: '23/09',
        weekday: 'QUARTA-FEIRA',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja',
        description:
          '19h — Pastor + Líderes • 20h — Líderes + GCD',
        type: 'igreja'
      },
      {
        date: '25/09',
        weekday: 'SEXTA-FEIRA',
        title: 'Culto das Mulheres',
        time: '19h',
        location: 'Prédio da igreja',
        type: 'igreja'
      },
      {
        date: '26/09',
        weekday: 'SÁBADO',
        title: 'Hangout dos Jovens',
        time: '19h',
        location: 'Prédio da igreja',
        highlight: true,
        type: 'move'
      }
    ]
  },

  {
    month: 'OUTUBRO',
    events: [
      {
        date: '06/10',
        weekday: 'TERÇA-FEIRA',
        title: 'Encontro para Casais',
        time: '20h',
        location: 'Reunião Online',
        description:
          'Jovens solteiros, viúvos e divorciados + casais de noivos e casados.',
        type: 'igreja'
      },
      {
        date: '07/10',
        weekday: 'QUARTA-FEIRA',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja',
        description:
          '19h — Pastor + Líderes • 20h — Líderes + GCD',
        type: 'igreja'
      },
      {
        date: '10/10',
        weekday: 'SÁBADO',
        title: 'Movenite',
        time: '19h',
        location: 'Prédio da igreja',
        highlight: true,
        type: 'move'
      },
      {
        date: '12/10',
        weekday: 'SEGUNDA-FEIRA',
        title: 'Dia das Crianças',
        type: 'igreja'
      },
      {
        date: '13/10',
        weekday: 'TERÇA-FEIRA',
        title: 'Encontro para Casais',
        time: '20h',
        location: 'Reunião Online',
        description:
          'Jovens solteiros, viúvos e divorciados + casais de noivos e casados.',
        type: 'igreja'
      },
      {
        date: '17/10',
        weekday: 'SÁBADO',
        title: 'Encontro Kids',
        type: 'igreja'
      },
      {
        date: '20/10',
        weekday: 'TERÇA-FEIRA',
        title: 'Encontro para Casais',
        time: '20h',
        location: 'Reunião Online',
        description:
          'Jovens solteiros, viúvos e divorciados + casais de noivos e casados.',
        type: 'igreja'
      },
      {
        date: '21/10',
        weekday: 'QUARTA-FEIRA',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja',
        description:
          '19h — Pastor + Líderes • 20h — Líderes + GCD',
        type: 'igreja'
      },
      {
        date: '27/10',
        weekday: 'TERÇA-FEIRA',
        title: 'Encontro para Casais',
        time: '20h',
        location: 'Reunião Online',
        description:
          'Jovens solteiros, viúvos e divorciados + casais de noivos e casados.',
        type: 'igreja'
      },
      {
        date: '31/10',
        weekday: 'SÁBADO',
        title: 'Chá das Sisters',
        type: 'igreja'
      }
    ]
  },

  {
    month: 'NOVEMBRO',
    events: [
      {
        date: '04/11',
        weekday: 'QUARTA-FEIRA',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja',
        description:
          '19h — Pastor + Líderes • 20h — Líderes + GCD',
        type: 'igreja'
      },
      {
        date: '07/11',
        weekday: 'SÁBADO',
        title: 'Movenite',
        time: '19h',
        location: 'Prédio da igreja',
        highlight: true,
        type: 'move'
      },
      {
        date: '13/11',
        weekday: 'SEXTA-FEIRA',
        title: 'Reunião do Presbitério Geral',
        type: 'igreja'
      },
      {
        date: '14/11',
        weekday: 'SÁBADO',
        title: 'Conferência de Líderes',
        type: 'igreja'
      },
      {
        date: '18/11',
        weekday: 'QUARTA-FEIRA',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja',
        description:
          '19h — Pastor + Líderes • 20h — Líderes + GCD',
        type: 'igreja'
      },
      {
        date: '27/11',
        weekday: 'SEXTA-FEIRA',
        title: 'Culto das Mulheres',
        type: 'igreja'
      }
    ]
  },

  {
    month: 'DEZEMBRO',
    events: [
      {
        date: '02/12',
        weekday: 'QUARTA-FEIRA',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja',
        description:
          '19h — Pastor + Líderes • 20h — Líderes + GCD',
        type: 'igreja'
      },
      {
        date: '06/12',
        weekday: 'DOMINGO',
        title: 'Batismo + Aniversário da Igreja',
        type: 'igreja'
      },
      {
        date: '12/12',
        weekday: 'SÁBADO',
        title: 'Movenite',
        time: '19h',
        location: 'Prédio da igreja',
        highlight: true,
        type: 'move'
      },
      {
        date: '19/12',
        weekday: 'SÁBADO',
        title: 'Culto de Natal',
        description: 'Teatro especial',
        type: 'igreja'
      },
      {
        date: '31/12',
        weekday: 'QUINTA-FEIRA',
        title: 'Culto da Virada',
        time: '18h às 21h',
        type: 'igreja'
      }
    ]
  }
];

function TypeBadge({ type }: { type: AgendaType }) {
  if (type === 'move') {
    return (
      <span className="rounded-full bg-pink-600 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white">
        Agenda MOVE
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

function EventCard({ event }: { event: AgendaEvent }) {
  const isChurchLocation =
    event.location === 'Prédio da igreja';

  return (
    <article
      className={`
        overflow-hidden rounded-2xl border p-4 sm:p-5
        ${
          event.type === 'move'
            ? 'border-pink-600/40 bg-pink-600/10'
            : event.type === 'igreja-move'
            ? 'border-violet-600/40 bg-violet-600/10'
            : event.highlight
            ? 'border-blue-600/40 bg-blue-600/10'
            : 'border-white/10 bg-neutral-900'
        }
      `}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="shrink-0">
          <div
            className={`
              inline-flex min-w-[80px]
              items-center justify-center
              rounded-xl px-3 py-3
              text-center font-black text-white
              ${
                event.type === 'move'
                  ? 'bg-pink-600'
                  : event.type === 'igreja-move'
                  ? 'bg-violet-600'
                  : 'bg-blue-600'
              }
            `}
          >
            {event.date}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {event.weekday && (
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                {event.weekday}
              </p>
            )}

            <TypeBadge type={event.type} />
          </div>

          <h3 className="text-lg font-black leading-tight text-white sm:text-xl">
            {event.title}
          </h3>

          {(event.time || event.location) && (
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">
              {event.time && (
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">
                  <Clock
                    className={`h-4 w-4 shrink-0 ${
                      event.type === 'move'
                        ? 'text-pink-500'
                        : event.type === 'igreja-move'
                        ? 'text-violet-500'
                        : 'text-blue-500'
                    }`}
                  />

                  {event.time}
                </div>
              )}

              {event.location &&
                (isChurchLocation ? (
                  <a
                    href={CHURCH_MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-neutral-300 transition hover:text-white"
                  >
                    <MapPin
                      className={`h-4 w-4 shrink-0 ${
                        event.type === 'move'
                          ? 'text-pink-500'
                          : event.type === 'igreja-move'
                          ? 'text-violet-500'
                          : 'text-blue-500'
                      }`}
                    />

                    <span className="underline underline-offset-4">
                      {event.location}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">
                    <MapPin
                      className={`h-4 w-4 shrink-0 ${
                        event.type === 'move'
                          ? 'text-pink-500'
                          : event.type === 'igreja-move'
                          ? 'text-violet-500'
                          : 'text-blue-500'
                      }`}
                    />

                    {event.location}
                  </div>
                ))}
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
}

export default function Agenda() {
  const [filter, setFilter] =
    React.useState<FilterType>('todos');

  /*
    FILTRO POR TIPO:
    Todos / Igreja / MOVE
  */
  const filteredAgenda = AGENDA.map((month) => {
    const events = month.events.filter((event) => {
      if (filter === 'todos') {
        return true;
      }

      if (filter === 'igreja') {
        return (
          event.type === 'igreja' ||
          event.type === 'igreja-move'
        );
      }

      if (filter === 'move') {
        return (
          event.type === 'move' ||
          event.type === 'igreja-move'
        );
      }

      return true;
    });

    return {
      ...month,
      events
    };
  }).filter((month) => month.events.length > 0);

  /*
    JANELA DE 2 MESES

    Agosto   -> Agosto + Setembro
    Setembro -> Setembro + Outubro
    Outubro  -> Outubro + Novembro
    Novembro -> Novembro + Dezembro
    Dezembro -> Dezembro

    Os meses futuros continuam cadastrados,
    apenas ficam ocultos.
  */
  const currentMonth = new Date().getMonth() + 1;

  const startMonth =
    currentMonth < 8
      ? 8
      : currentMonth > 12
      ? 12
      : currentMonth;

  const monthNumberMap: Record<string, number> = {
    AGOSTO: 8,
    SETEMBRO: 9,
    OUTUBRO: 10,
    NOVEMBRO: 11,
    DEZEMBRO: 12
  };

  const visibleAgenda = filteredAgenda.filter(
    (month) => {
      const monthNumber =
        monthNumberMap[month.month];

      return (
        monthNumber >= startMonth &&
        monthNumber <= startMonth + 1
      );
    }
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
    }
  ];

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
          Confira a programação da Igreja Dinamus
          Alphaville e os eventos específicos da MOVE.
        </p>
      </header>

      {/* LEGENDA */}
      <section className="mb-6 rounded-2xl border border-white/10 bg-neutral-900 p-4">
        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
          Identificação da agenda
        </p>

        <div className="flex flex-wrap gap-2">
          <TypeBadge type="igreja" />
          <TypeBadge type="move" />
          <TypeBadge type="igreja-move" />
        </div>
      </section>

      {/* FILTROS */}
      <div className="sticky top-16 z-20 -mx-4 mb-8 border-y border-white/10 bg-black/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border">
        <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((item) => {
            const active =
              filter === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() =>
                  setFilter(item.value)
                }
                className={`
                  min-h-11 shrink-0 rounded-full
                  px-5 py-2
                  text-xs font-black uppercase
                  tracking-wider transition
                  active:scale-95
                  ${
                    active
                      ? item.value === 'move'
                        ? 'bg-pink-600 text-white'
                        : item.value === 'igreja'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-black'
                      : 'border border-white/10 bg-neutral-900 text-neutral-400'
                  }
                `}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* NAVEGAÇÃO DE MESES */}
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {visibleAgenda.map((month) => (
          <a
            key={month.month}
            href={`#${month.month.toLowerCase()}`}
            className="
              flex min-h-11 shrink-0
              items-center justify-center
              rounded-full
              border border-white/10
              bg-neutral-900
              px-5
              text-xs font-black uppercase
              tracking-wider
              text-neutral-300
              transition
              hover:border-blue-500
              hover:text-white
              active:scale-95
            "
          >
            {month.month}
          </a>
        ))}
      </div>

      {/* EVENTOS */}
      <div className="space-y-12">
        {visibleAgenda.map((month) => (
          <section
            key={month.month}
            id={month.month.toLowerCase()}
            className="scroll-mt-36"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="h-9 w-1 bg-blue-600" />

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-500">
                  Agenda 2026
                </p>

                <h2 className="text-3xl font-black italic uppercase text-blue-500 sm:text-4xl">
                  {month.month}
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              {month.events.map(
                (event, index) => (
                  <EventCard
                    key={`${month.month}-${event.date}-${index}`}
                    event={event}
                  />
                )
              )}
            </div>
          </section>
        ))}
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
              Fique atento às comunicações dos líderes e
              dos GCs para informações adicionais,
              orientações e possíveis alterações na
              programação.
            </p>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <div className="mt-6 flex items-center justify-center gap-2 pb-4 text-center text-neutral-500">
        <Heart className="h-4 w-4 shrink-0" />

        <p className="text-xs font-bold">
          Salve as datas e compartilhe com quem precisa
          estar com a gente!
        </p>
      </div>

    </div>
  );
}

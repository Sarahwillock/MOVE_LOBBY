import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Heart,
  Info
} from 'lucide-react';

type AgendaEvent = {
  date: string;
  weekday: string;
  title: string;
  time?: string;
  location?: string;
  description?: string;
  highlight?: boolean;
};

type MonthAgenda = {
  month: string;
  events: AgendaEvent[];
};

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
        description: '1ª aula'
      },
      {
        date: '13 a 16/08',
        weekday: 'QUINTA A DOMINGO',
        title: 'Jejum de 40 Horas',
        highlight: true,
        description:
          '13/08: compartilhar nos GCs na quinta-feira. 14/08: início no prédio da igreja às 20h. 15/08: programação de oração por GCs, online ou presencial — cada GC definirá o formato. 16/08: encerramento durante o Culto de Celebração às 10h.'
      },
      {
        date: '18/08',
        weekday: 'TERÇA-FEIRA',
        title: 'Capacitação e Treinamento para Novos Líderes',
        time: '20h',
        location: 'Online',
        description: '2ª aula'
      },
      {
        date: '19/08',
        weekday: 'QUARTA-FEIRA',
        title: 'Aula Inaugural | Escola Huios',
        time: '20h',
        location: 'Campus Alphaville'
      },
      {
        date: '25/08',
        weekday: 'TERÇA-FEIRA',
        title: 'Capacitação e Treinamento para Novos Líderes',
        time: '20h',
        location: 'Online',
        description: '2ª aula'
      },
      {
        date: '26/08',
        weekday: 'QUARTA-FEIRA',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja',
        description:
          '19h — Pastor + Líderes • 20h — Líderes + GCD'
      },
      {
        date: '28/08',
        weekday: 'SEXTA-FEIRA',
        title: 'Chá das Sisters'
      },
      {
        date: '29/08',
        weekday: 'SÁBADO',
        title: 'Movenite',
        time: '19h',
        location: 'Prédio da igreja',
        highlight: true
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
        description: '4ª e última aula'
      },
      {
        date: '06 a 20/09',
        weekday: '',
        title: 'Jejum de 14 Dias',
        highlight: true
      },
      {
        date: '12/09',
        weekday: 'SÁBADO',
        title: 'Conferência Kids',
        location: 'Santo André',
        description:
          'Para todos os envolvidos no Ministério Infantil'
      },
      {
        date: '16/09',
        weekday: 'QUARTA-FEIRA',
        title: 'Oração Geral | Período de Jejum',
        time: '19h',
        location: 'Prédio da igreja'
      },
      {
        date: '19/09',
        weekday: 'SÁBADO',
        title: 'Movenite',
        time: '19h',
        location: 'Prédio da igreja',
        highlight: true
      },
      {
        date: '20/09',
        weekday: 'DOMINGO',
        title: 'Culto de Encerramento do Jejum'
      },
      {
        date: '23/09',
        weekday: 'QUARTA-FEIRA',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja',
        description:
          '19h — Pastor + Líderes • 20h — Líderes + GCD'
      },
      {
        date: '25/09',
        weekday: 'SEXTA-FEIRA',
        title: 'Culto das Mulheres',
        time: '19h',
        location: 'Prédio da igreja'
      },
      {
        date: '26/09',
        weekday: 'SÁBADO',
        title: 'Hangout dos Jovens',
        time: '19h',
        location: 'Prédio da igreja',
        highlight: true
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
          'Jovens solteiros, viúvos e divorciados + casais de noivos e casados.'
      },
      {
        date: '07/10',
        weekday: 'QUARTA-FEIRA',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja',
        description:
          '19h — Pastor + Líderes • 20h — Líderes + GCD'
      },
      {
        date: '10/10',
        weekday: 'SÁBADO',
        title: 'Movenite',
        time: '19h',
        location: 'Prédio da igreja',
        highlight: true
      },
      {
        date: '12/10',
        weekday: 'SEGUNDA-FEIRA',
        title: 'Dia das Crianças'
      },
      {
        date: '13/10',
        weekday: 'TERÇA-FEIRA',
        title: 'Encontro para Casais',
        time: '20h',
        location: 'Reunião Online',
        description:
          'Jovens solteiros, viúvos e divorciados + casais de noivos e casados.'
      },
      {
        date: '17/10',
        weekday: 'SÁBADO',
        title: 'Encontro Kids'
      },
      {
        date: '20/10',
        weekday: 'TERÇA-FEIRA',
        title: 'Encontro para Casais',
        time: '20h',
        location: 'Reunião Online',
        description:
          'Jovens solteiros, viúvos e divorciados + casais de noivos e casados.'
      },
      {
        date: '21/10',
        weekday: 'QUARTA-FEIRA',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja',
        description:
          '19h — Pastor + Líderes • 20h — Líderes + GCD'
      },
      {
        date: '27/10',
        weekday: 'TERÇA-FEIRA',
        title: 'Encontro para Casais',
        time: '20h',
        location: 'Reunião Online',
        description:
          'Jovens solteiros, viúvos e divorciados + casais de noivos e casados.'
      },
      {
        date: '31/10',
        weekday: 'SÁBADO',
        title: 'Chá das Sisters'
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
          '19h — Pastor + Líderes • 20h — Líderes + GCD'
      },
      {
        date: '07/11',
        weekday: 'SÁBADO',
        title: 'Movenite',
        time: '19h',
        location: 'Prédio da igreja',
        highlight: true
      },
      {
        date: '13/11',
        weekday: 'SEXTA-FEIRA',
        title: 'Reunião do Presbitério Geral'
      },
      {
        date: '14/11',
        weekday: 'SÁBADO',
        title: 'Conferência de Líderes',
        highlight: true
      },
      {
        date: '18/11',
        weekday: 'QUARTA-FEIRA',
        title: 'Discipulado de Líderes',
        location: 'Prédio da igreja',
        description:
          '19h — Pastor + Líderes • 20h — Líderes + GCD'
      },
      {
        date: '27/11',
        weekday: 'SEXTA-FEIRA',
        title: 'Culto das Mulheres'
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
          '19h — Pastor + Líderes • 20h — Líderes + GCD'
      },
      {
        date: '06/12',
        weekday: 'DOMINGO',
        title: 'Batismo + Aniversário da Igreja',
        highlight: true
      },
      {
        date: '12/12',
        weekday: 'SÁBADO',
        title: 'Movenite',
        time: '19h',
        location: 'Prédio da igreja',
        highlight: true
      },
      {
        date: '19/12',
        weekday: 'SÁBADO',
        title: 'Culto de Natal',
        description: 'Teatro especial',
        highlight: true
      },
      {
        date: '31/12',
        weekday: 'QUINTA-FEIRA',
        title: 'Culto da Virada',
        time: '18h às 21h',
        highlight: true
      }
    ]
  }
];

function EventCard({ event }: { event: AgendaEvent }) {
  return (
    <article
      className={`
        overflow-hidden rounded-2xl border p-4
        sm:p-5
        ${
          event.highlight
            ? 'border-blue-600/50 bg-blue-600/10'
            : 'border-white/10 bg-neutral-900'
        }
      `}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

        {/* DATA */}
        <div className="shrink-0">
          <div
            className={`
              inline-flex min-w-[74px]
              flex-col items-center justify-center
              rounded-xl px-3 py-2
              ${
                event.highlight
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-white'
              }
            `}
          >
            <span className="text-lg font-black leading-none">
              {event.date}
            </span>
          </div>
        </div>

        {/* INFORMAÇÕES */}
        <div className="min-w-0 flex-1">
          {event.weekday && (
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">
              {event.weekday}
            </p>
          )}

          <h3 className="mt-1 text-lg font-black leading-tight text-white sm:text-xl">
            {event.title}
          </h3>

          {(event.time || event.location) && (
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-4">

              {event.time && (
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">
                  <Clock className="h-4 w-4 shrink-0 text-blue-500" />
                  {event.time}
                </div>
              )}

              {event.location && (
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-300">
                  <MapPin className="h-4 w-4 shrink-0 text-blue-500" />
                  {event.location}
                </div>
              )}

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
          Agenda da
          <br />
          Igreja
        </h1>

        <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-neutral-400 sm:text-base">
          Agosto a dezembro. Confira nossa programação, salve as datas e
          prepare-se para viver tudo o que Deus tem preparado para nós.
        </p>
      </header>

      {/* NAVEGAÇÃO RÁPIDA DOS MESES */}
      <div
        className="
          mb-8 flex gap-2
          overflow-x-auto pb-2
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {AGENDA.map((month) => (
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
              text-xs font-black
              uppercase tracking-wider
              text-neutral-300
              transition
              active:scale-95
            "
          >
            {month.month}
          </a>
        ))}
      </div>

      {/* MESES */}
      <div className="space-y-12">
        {AGENDA.map((month) => (
          <section
            key={month.month}
            id={month.month.toLowerCase()}
            className="scroll-mt-24"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="h-8 w-1 bg-blue-600" />

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
              {month.events.map((event, index) => (
                <EventCard
                  key={`${month.month}-${event.date}-${index}`}
                  event={event}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* IMPORTANTE */}
      <section className="mt-12 rounded-2xl border border-blue-600/30 bg-blue-600/10 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />

          <div>
            <h3 className="font-black uppercase text-white">
              Importante
            </h3>

            <p className="mt-2 text-sm font-medium leading-relaxed text-neutral-300">
              Fique atento às comunicações dos líderes e dos GCs para
              informações adicionais, orientações e possíveis alterações
              na programação.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <div className="mt-6 flex items-center justify-center gap-2 pb-4 text-center text-neutral-500">
        <Heart className="h-4 w-4" />

        <p className="text-xs font-bold">
          Salve as datas e compartilhe com quem precisa estar com a gente!
        </p>
      </div>

    </div>
  );
}

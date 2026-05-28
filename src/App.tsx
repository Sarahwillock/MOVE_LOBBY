import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  X,
  MapPin
} from 'lucide-react';

interface AgendaEvent {
  id: string;
  date: string;
  day: number;
  weekday: string;
  title: string;
  time: string;
  description?: string;
  link?: string;
  location?: string;
  mapsUrl?: string;
}

const ORIGEM_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSedtZ_ZARZikrsqdW2M4jO_tMz6WGHe7rlFtylIgYhOsbK7wQ/viewform';

const ENCONTRO_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSdgWzeA98aJUBhthxpSdppgh_ho-H8vu5NBsD8E-j4eH-mCZw/viewform';

const GC_LOCATION_URL =
  'https://www.google.com/maps/place/R.+Augusto+dos+Anjos,+139+-+Melville+Empresarial+II,+Barueri+-+SP,+06485-370/@-23.4835537,-46.8479933,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf024161977ca9:0x4c79892493db5477!8m2!3d-23.4835537!4d-46.8479933!16s%2Fg%2F11c1ckvdhj?entry=ttu';

const GC_ADDRESS =
  'Casa da Keth - R. Augusto dos Anjos, 139';

const DINAMUS_MAPS_URL =
  'https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?entry=ttu';

const DINAMUS_ADDRESS =
  'Igreja Dinamus Alphaville';

const EVENTS: AgendaEvent[] = [
  {
    id: 'junho-1',
    date: '04/06',
    day: 4,
    weekday: 'Quinta-feira',
    title: 'Resenha com a Move',
    time: '17:00',
    description:
      'Um tempo especial de comunhão, resenha e conexão com a Move.',
    location: DINAMUS_ADDRESS,
    mapsUrl: DINAMUS_MAPS_URL
  },
  {
    id: 'junho-2',
    date: '06/06',
    day: 6,
    weekday: 'Sábado',
    title: 'Encontro com Deus',
    time: '08:00 - 19:00',
    description:
      'Encontro com Deus das 08h às 19h.',
    link: ENCONTRO_LINK,
    location: DINAMUS_ADDRESS,
    mapsUrl: DINAMUS_MAPS_URL
  },
  {
    id: 'junho-3',
    date: '13/06',
    day: 13,
    weekday: 'Sábado',
    title: 'Jogo do Brasil',
    time: 'EM BREVE MAIS INFORMAÇÕES',
    description:
      'Dia de torcer juntos pelo Brasil.'
  },
  {
    id: 'junho-4',
    date: '27/06',
    day: 27,
    weekday: 'Sábado',
    title: 'Culto na DNMS Santo André',
    time: 'EM BREVE MAIS INFORMAÇÕES',
    description:
      'Culto especial na DNMS Santo André.'
  }
];

const MAY_EVENTS: AgendaEvent[] = [
  {
    id: 'maio-1',
    date: '30/05',
    day: 30,
    weekday: 'Sábado',
    title: 'Origem',
    time: '09:00',
    description:
      'Apenas para novos membros.',
    link: ORIGEM_LINK,
    location: DINAMUS_ADDRESS,
    mapsUrl: DINAMUS_MAPS_URL
  },
  {
    id: 'maio-2',
    date: '30/05',
    day: 30,
    weekday: 'Sábado',
    title: 'GC LOBBY na Casa da Keth',
    time: '15:00',
    description:
      'Encontro do GC Lobby na Casa da Keth.',
    location: GC_ADDRESS,
    mapsUrl: GC_LOCATION_URL
  },
  {
    id: 'maio-3',
    date: '30/05',
    day: 30,
    weekday: 'Sábado',
    title: 'MOVENITE',
    time: '19:00',
    description:
      'Culto dos jovens.',
    location: DINAMUS_ADDRESS,
    mapsUrl: DINAMUS_MAPS_URL
  }
];

const BACKGROUND_IMAGES = [
  '/images/WhatsApp Image 2026-05-28 at 16.44.45 (1).jpeg',
  '/images/WhatsApp Image 2026-05-28 at 16.44.46 (1).jpeg',
  '/images/WhatsApp Image 2026-05-28 at 16.44.44.jpeg'
];

const MONTH_COVER = [
  {
    label: 'Maio',
    subtitle: 'Eventos confirmados',
    image: '/images/maio.jpg'
  },
  {
    label: 'Junho',
    subtitle: 'Agenda confirmada',
    image: '/images/junho.manu.jpg'
  },
  {
    label: 'Aguarde novidades',
    subtitle: 'Novas datas chegando',
    image: '/images/abril.jpg'
  }
];

export default function App() {
  const [bgIndex, setBgIndex] =
    React.useState(0);

  const [selectedMonth, setSelectedMonth] =
    React.useState<
      typeof MONTH_COVER[number] | null
    >(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex(
        (prev) =>
          (prev + 1) %
          BACKGROUND_IMAGES.length
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const addToCalendar = (
    event: AgendaEvent
  ) => {
    const [day, month] =
      event.date.split('/');

    const year = 2026;

    const startTimeStr =
      event.time.includes(':')
        ? event.time
            .split(' ')[0]
            .replace(':', '')
        : '1900';

    const startDate = `${year}${month}${day}T${startTimeStr}00`;

    const endDate = `${year}${month}${day}T${(
      parseInt(startTimeStr) + 100
    )
      .toString()
      .padStart(4, '0')}00`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//MOVE//Agenda//PT',
      'BEGIN:VEVENT',
      `UID:${event.id}-2026-move`,
      `DTSTAMP:${new Date()
        .toISOString()
        .replace(/[-:]/g, '')
        .split('.')[0]}Z`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description || ''}`,
      `LOCATION:${event.location || 'A definir'}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob(
      [icsContent],
      {
        type: 'text/calendar;charset=utf-8'
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement('a');

    link.href = url;

    link.setAttribute(
      'download',
      `${event.title
        .toLowerCase()
        .replace(/\s+/g, '-')}.ics`
    );

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const renderMonthEvents = () => {
    if (!selectedMonth) return null;

    if (selectedMonth.label === 'Junho') {
      return EVENTS.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onSave={addToCalendar}
        />
      ));
    }

    if (selectedMonth.label === 'Maio') {
      return MAY_EVENTS.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onSave={addToCalendar}
        />
      ));
    }

    return (
      <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
        <p className="text-sm font-bold text-neutral-700">
          Novas datas chegando em breve.
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{
              opacity: 0,
              scale: 1.05
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.95
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut'
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${BACKGROUND_IMAGES[bgIndex]})`
            }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 pb-20">
        <main className="max-w-md mx-auto px-4 pt-4">
          <motion.section
            initial={{
              opacity: 0,
              y: 24
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-neutral-950/55 p-6 shadow-2xl backdrop-blur-xl mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-transparent to-white/10" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                MOVE
              </div>

              <h2 className="mt-5 text-4xl font-display font-bold leading-none text-white">
                Eventos
                <br />
                do semestre
              </h2>

              <p className="mt-3 text-sm font-semibold leading-relaxed text-white/65">
                Toque em um mês para ver as
                informações e eventos.
              </p>

              <div className="mt-6 grid gap-3">
                {MONTH_COVER.map(
                  (item, index) => (
                    <motion.button
                      type="button"
                      key={item.label}
                      onClick={() =>
                        setSelectedMonth(item)
                      }
                      initial={{
                        opacity: 0,
                        x: -18
                      }}
                      animate={{
                        opacity: 1,
                        x: 0
                      }}
                      transition={{
                        delay:
                          0.1 + index * 0.08
                      }}
                      className="group relative min-h-[92px] w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 text-left"
                    >
                      <div
                        className="absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          backgroundPosition:
                            'center 28%'
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />

                      <div className="relative z-10 flex h-full min-h-[92px] items-center justify-between p-4">
                        <div>
                          <p className="text-2xl font-display font-bold text-white leading-tight">
                            {item.label}
                          </p>

                          <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/55">
                            {item.subtitle}
                          </p>
                        </div>

                        <div className="rounded-2xl bg-white/15 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/15">
                          {index === 1
                            ? 'Ver agenda'
                            : index === 2
                            ? 'Em breve'
                            : 'Ver maio'}
                        </div>
                      </div>
                    </motion.button>
                  )
                )}
              </div>
            </div>
          </motion.section>

          <AnimatePresence>
            {selectedMonth && (
              <>
                <motion.div
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}
                  exit={{
                    opacity: 0
                  }}
                  onClick={() =>
                    setSelectedMonth(null)
                  }
                  className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                    y: 20
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.92,
                    y: 20
                  }}
                  className="fixed left-5 right-5 top-1/2 z-50 max-h-[82vh] -translate-y-1/2 overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl"
                >
                  <button
                    onClick={() =>
                      setSelectedMonth(null)
                    }
                    className="absolute right-5 top-5 rounded-full bg-neutral-100 p-2 text-neutral-500"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary">
                    Informações gerais
                  </p>

                  <h2 className="mt-2 text-3xl font-display font-bold text-neutral-900">
                    {selectedMonth.label}
                  </h2>

                  <p className="mt-1 text-sm font-semibold text-neutral-500">
                    {selectedMonth.subtitle}
                  </p>

                  <div className="mt-5 space-y-3">
                    {renderMonthEvents()}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function EventCard({
  event,
  onSave
}: {
  event: AgendaEvent;
  onSave: (
    event: AgendaEvent
  ) => void;
}) {
  return (
    <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
      <p className="text-sm font-black text-neutral-900">
        {event.date} - {event.title}
      </p>

      <p className="mt-1 text-xs font-semibold text-neutral-500">
        {event.weekday} • {event.time}
      </p>

      {event.description && (
        <p className="mt-2 text-xs font-medium leading-relaxed text-neutral-500">
          {event.description}
        </p>
      )}

      {event.location && (
        <a
          href={event.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex items-center gap-1 text-xs font-bold text-brand-primary underline underline-offset-2"
        >
          <MapPin className="h-3.5 w-3.5" />
          {event.location}
        </a>
      )}

      <div className="mt-3 flex gap-2">
        {event.link ? (
          <a
            href={event.link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-xl bg-brand-primary px-3 py-3 text-center text-[10px] font-black uppercase tracking-widest text-white"
          >
            Inscrever-se
          </a>
        ) : (
          <button
            onClick={() =>
              onSave(event)
            }
            className="flex-1 rounded-xl bg-brand-primary px-3 py-3 text-[10px] font-black uppercase tracking-widest text-white"
          >
            Salvar
          </button>
        )}

        {event.mapsUrl && (
          <button
            onClick={() =>
              window.open(
                event.mapsUrl,
                '_blank'
              )
            }
            className="rounded-xl bg-neutral-200 px-4 py-3 text-neutral-600"
          >
            <MapPin className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

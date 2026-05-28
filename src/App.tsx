import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MessageSquare, Share2, Bell, Sparkles, X, MapPin } from 'lucide-react';

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

const ORIGEM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSedtZ_ZARZikrsqdW2M4jO_tMz6WGHe7rlFtylIgYhOsbK7wQ/viewform';

const GC_LOCATION_URL = "https://www.google.com/maps/place/R.+Augusto+dos+Anjos,+139+-+Melville+Empresarial+II,+Barueri+-+SP,+06485-370/@-23.4835537,-46.8479933,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf024161977ca9:0x4c79892493db5477!8m2!3d-23.4835537!4d-46.8479933!16s%2Fg%2F11c1ckvdhj?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D";
const GC_ADDRESS = "Casa da Keth - R. Augusto dos Anjos, 139";

const DINAMUS_MAPS_URL = "https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D";
const DINAMUS_ADDRESS = "Igreja Dinamus Alphaville";

const EVENTS: AgendaEvent[] = [
  {
    id: 'junho-1',
    date: '04/06',
    day: 4,
    weekday: 'Quinta-feira',
    title: 'Resenha com a Move',
    time: 'A definir',
    description: 'Um tempo especial de comunhão, resenha e conexão com a Move.'
  },
  {
    id: 'junho-2',
    date: '06/06',
    day: 6,
    weekday: 'Sábado',
    title: 'Encontro com Deus',
    time: '08:00 - 19:00',
    description: 'Encontro com Deus das 08h às 19h.'
  },
  {
    id: 'junho-3',
    date: '13/06',
    day: 13,
    weekday: 'Sábado',
    title: 'Jogo do Brasil',
    time: 'A definir',
    description: 'Dia de torcer juntos pelo Brasil.'
  },
  {
    id: 'junho-4',
    date: '27/06',
    day: 27,
    weekday: 'Sábado',
    title: 'Culto na DNMS Santo André',
    time: 'A definir',
    description: 'Culto especial na DNMS Santo André.'
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
    description: 'Apenas para novos membros.',
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
    description: 'Encontro do GC Lobby na Casa da Keth.',
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
    description: 'Culto dos jovens.',
    location: DINAMUS_ADDRESS,
    mapsUrl: DINAMUS_MAPS_URL
  }
];

const BACKGROUND_IMAGES = [
  '/images/IMG_3794.jpg',
  '/images/lider1.jpg',
  '/images/junho.manu.jpg'
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
    image: '/images/lider1.jpg'
  }
];

const GENERAL_EVENTS = [
  {
    day: 'Domingos',
    title: 'Culto',
    time: '10:00',
    location: DINAMUS_ADDRESS,
    mapsUrl: DINAMUS_MAPS_URL,
    type: 'weekly'
  },
  {
    day: 'Terças',
    title: 'Escola Huios',
    time: '19:00',
    location: DINAMUS_ADDRESS,
    mapsUrl: DINAMUS_MAPS_URL,
    type: 'weekly'
  },
  {
    day: 'Quartas',
    title: 'Oração dos Homens',
    time: '06:00',
    location: DINAMUS_ADDRESS,
    mapsUrl: DINAMUS_MAPS_URL,
    type: 'weekly'
  },
  {
    day: 'Quartas',
    title: 'Oração das Mulheres',
    time: '08:00',
    location: DINAMUS_ADDRESS,
    mapsUrl: DINAMUS_MAPS_URL,
    type: 'weekly'
  }
];

export default function App() {
  const [bgIndex, setBgIndex] = React.useState(0);
  const [showFullCalendar, setShowFullCalendar] = React.useState(false);
  const [showNotification, setShowNotification] = React.useState(false);
  const [selectedMonth, setSelectedMonth] = React.useState<typeof MONTH_COVER[number] | null>(null);

  const nextEvent = MAY_EVENTS[0];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const addToCalendar = (event: AgendaEvent) => {
    const [day, month] = event.date.split('/');
    const year = 2026;

    const startTimeStr = event.time.includes(':')
      ? event.time.split(' ')[0].replace(':', '')
      : '1900';

    const startDate = `${year}${month}${day}T${startTimeStr}00`;
    const endDate = `${year}${month}${day}T${(parseInt(startTimeStr) + 100).toString().padStart(4, '0')}00`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//MOVE//Agenda//PT',
      'BEGIN:VEVENT',
      `UID:${event.id}-2026-move-lobby`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description || ''}`,
      `LOCATION:${event.location || 'A definir'}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.setAttribute('download', `${event.title.toLowerCase().replace(/\s+/g, '-')}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareOnWhatsApp = (event: AgendaEvent) => {
    const message = `🚨 *LEMBRETE MOVE LOBBY* 🚨\n\n📅 *Data:* ${event.date} (${event.weekday})\n🕒 *Hora:* ${event.time}\n📍 *Local:* ${event.location || 'A definir'}\n\n📝 *Evento:* ${event.title}\n${event.description ? `\n_${event.description}_` : ''}\n${event.link ? `\n🔗 Inscrição: ${event.link}` : ''}\n${event.mapsUrl ? `\n🗺️ Mapa: ${event.mapsUrl}` : ''}\n\n*Nos vemos lá!* 🙌`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noreferrer');
  };

  const renderMonthEvents = () => {
    if (!selectedMonth) return null;

    if (selectedMonth.label === 'Junho') {
      return EVENTS.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onSave={addToCalendar}
          onShare={shareOnWhatsApp}
        />
      ));
    }

    if (selectedMonth.label === 'Maio') {
      return MAY_EVENTS.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onSave={addToCalendar}
          onShare={shareOnWhatsApp}
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
    <div className="min-h-screen relative font-sans overflow-x-hidden selection:bg-brand-primary/30">
      <div className="fixed inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BACKGROUND_IMAGES[bgIndex]})` }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 pb-32">
        <header className="sticky top-0 z-30">
          <div className="bg-white/10 backdrop-blur-2xl border-b border-white/10">
            <div className="max-w-md mx-auto px-5 py-5 flex items-center justify-between">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl font-display font-bold text-white tracking-tight"
                >
                  Agenda de Eventos
                </motion.h1>

                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
                  <span className="text-white/70 font-semibold text-[11px] uppercase tracking-wider">
                    AGENDA MOVE • MAIO E JUNHO
                  </span>
                </div>
              </div>

              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowFullCalendar(true)}
                className="bg-brand-primary p-2.5 rounded-xl shadow-xl shadow-brand-primary/20 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>
        </header>

        <main className="max-w-md mx-auto px-4 mt-4">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-neutral-950/55 p-6 shadow-2xl backdrop-blur-xl mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/30 via-transparent to-white/10" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80 border border-white/10">
                <Sparkles className="w-3.5 h-3.5 text-brand-primary" />
                Move Lobby
              </div>

              <h2 className="mt-5 text-4xl font-display font-bold leading-none text-white">
                Eventos<br />da MOVE
              </h2>

              <p className="mt-3 text-sm font-semibold leading-relaxed text-white/65">
                Toque em um mês para ver as informações e eventos.
              </p>

              <div className="mt-6 grid gap-3">
                {MONTH_COVER.map((item, index) => (
                  <motion.button
                    type="button"
                    key={item.label}
                    onClick={() => setSelectedMonth(item)}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08 }}
                    className="group relative min-h-[92px] w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 text-left"
                  >
                    <div
                      className="absolute inset-0 bg-cover transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundPosition: 'center 28%',
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
                        {index === 1 ? 'Ver agenda' : index === 2 ? 'Em breve' : 'Ver maio'}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl p-4 flex items-center gap-4"
          >
            <div className="bg-brand-primary p-2 rounded-xl text-white shadow-lg shadow-brand-primary/20">
              <Bell className="w-4 h-4 animate-bounce" />
            </div>

            <div>
              <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest">
                Próximo Evento
              </p>
              <p className="text-white text-sm font-bold">
                {nextEvent.title} • {nextEvent.date} às {nextEvent.time}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 text-center px-6 pb-12"
          >
            <div className="inline-flex items-center justify-center p-1 bg-white/10 border border-white/20 rounded-full backdrop-blur-md mb-6">
              <span className="text-[9px] font-black text-white px-5 py-1 uppercase tracking-[0.2em]">
                Agenda Move • Maio, Junho e novidades
              </span>
            </div>

            <p className="text-white/40 text-[10px] font-medium leading-relaxed">
              Toque em um mês para ver as informações e eventos.
            </p>
          </motion.div>

          <AnimatePresence>
            {selectedMonth && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedMonth(null)}
                  className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 20 }}
                  className="fixed left-5 right-5 top-1/2 z-50 max-h-[82vh] -translate-y-1/2 overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl"
                >
                  <button
                    onClick={() => setSelectedMonth(null)}
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

        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] max-w-sm h-16 bg-neutral-900/90 backdrop-blur-3xl rounded-2xl shadow-2xl flex items-center justify-around px-2 z-40 border border-white/10 overflow-hidden">
          <button
            onClick={() => setShowFullCalendar(true)}
            className="flex-1 flex flex-col items-center justify-center gap-1 group"
          >
            <div className="p-2 rounded-lg bg-brand-primary text-white shadow-lg shadow-brand-primary/40 transition-transform group-active:scale-90">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-[8px] font-black text-white uppercase tracking-tighter">
              Calendário
            </span>
          </button>

          <div className="w-[1px] h-6 bg-white/10" />

          <button
            onClick={() => setShowNotification(true)}
            className="flex-1 flex flex-col items-center justify-center gap-1 text-white/50 hover:text-white transition-all group relative"
          >
            <div className="relative">
              <Bell className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-primary rounded-full border-2 border-neutral-900"
              />
            </div>
            <span className="text-[8px] font-black uppercase tracking-tighter">
              Alertas
            </span>
          </button>
        </nav>

        <AnimatePresence>
          {showNotification && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowNotification(false)}
                className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm px-6 flex items-center justify-center"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed top-1/3 left-6 right-6 z-50 bg-white rounded-3xl p-6 shadow-2xl border border-neutral-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-brand-primary p-3 rounded-2xl text-white shadow-lg shadow-brand-primary/20">
                    <Bell className="w-6 h-6 animate-bounce" />
                  </div>

                  <div className="flex-1">
                    <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">
                      Lembrete
                    </span>

                    <h2 className="text-xl font-display font-bold text-neutral-900 mt-1">
                      Próximo Evento
                    </h2>
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100 mb-6">
                  <h3 className="text-lg font-bold text-neutral-900 leading-tight mb-2">
                    {nextEvent.title}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm font-semibold text-neutral-600">
                      <Calendar className="w-4 h-4 mr-2 text-brand-primary/60" />
                      {nextEvent.date} ({nextEvent.weekday})
                    </div>

                    <div className="flex items-center text-sm font-semibold text-neutral-600">
                      <Clock className="w-4 h-4 mr-2 text-brand-primary/60" />
                      {nextEvent.time}
                    </div>

                    {nextEvent.location && (
                      <a
                        href={nextEvent.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-sm font-semibold text-brand-primary underline underline-offset-2"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        {nextEvent.location}
                      </a>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setShowNotification(false)}
                  className="w-full bg-neutral-900 text-white font-black text-[10px] uppercase tracking-widest py-4 rounded-xl"
                >
                  Entendi
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showFullCalendar && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowFullCalendar(false)}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-[2.5rem] pb-12 pt-8 px-6 shadow-2xl max-h-[85vh] overflow-y-auto"
              >
                <div className="w-12 h-1.5 bg-neutral-200 rounded-full mx-auto mb-8" />

                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-display font-bold text-neutral-900">
                      Calendário Geral
                    </h2>
                    <p className="text-neutral-500 text-sm font-medium">
                      Dinamus Alphaville
                    </p>
                  </div>

                  <button
                    onClick={() => setShowFullCalendar(false)}
                    className="p-2 bg-neutral-100 rounded-xl text-neutral-400"
                  >
                    <Share2 className="w-5 h-5 rotate-45" />
                  </button>
                </div>

                <div className="space-y-4">
                  {GENERAL_EVENTS.map((event, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100"
                    >
                      <div className="w-16 flex flex-col items-center">
                        <span className="text-[10px] font-black text-brand-primary uppercase">
                          {event.type === 'weekly' ? 'Semanal' : 'Evento'}
                        </span>
                        <span className="text-sm font-bold text-neutral-900">
                          {event.day}
                        </span>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-[15px] font-bold text-neutral-900">
                          {event.title}
                        </h3>

                        <div className="flex items-center gap-3 mt-1">
                          <span className="flex items-center text-[11px] font-semibold text-neutral-500">
                            <Clock className="w-3 h-3 mr-1 text-brand-primary" />
                            {event.time}
                          </span>

                          <a
                            href={event.mapsUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center text-[11px] font-semibold text-brand-secondary underline underline-offset-2"
                          >
                            Ver no Maps
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={() => setShowFullCalendar(false)}
                  className="w-full mt-8 bg-neutral-900 text-white font-black text-xs uppercase tracking-widest py-4 rounded-2xl"
                >
                  Fechar Calendário
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function EventCard({
  event,
  onSave,
  onShare
}: {
  event: AgendaEvent;
  onSave: (event: AgendaEvent) => void;
  onShare: (event: AgendaEvent) => void;
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
            onClick={() => onSave(event)}
            className="flex-1 rounded-xl bg-brand-primary px-3 py-3 text-[10px] font-black uppercase tracking-widest text-white"
          >
            Salvar
          </button>
        )}

        <button
          onClick={() => onShare(event)}
          className="rounded-xl bg-neutral-200 px-4 py-3 text-neutral-600"
        >
          <MessageSquare className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

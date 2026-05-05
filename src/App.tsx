import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MessageSquare, MapPin, Share2, Bell } from 'lucide-react';

interface AgendaEvent {
  id: string;
  date: string;
  day: number;
  weekday: string;
  title: string;
  time: string;
  description?: string;
  location?: string;
  mapsUrl?: string;
}

const GC_LOCATION_URL = "https://www.google.com/maps/place/R.+Augusto+dos+Anjos,+139+-+Melville+Empresarial+II,+Barueri+-+SP,+06485-370/@-23.4835537,-46.8479933,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf024161977ca9:0x4c79892493db5477!8m2!3d-23.4835537!4d-46.8479933!16s%2Fg%2F11c1ckvdhj?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D";
const GC_ADDRESS = "R. Augusto dos Anjos, 139";

const DINAMUS_MAPS_URL = "https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D";

const EVENTS: AgendaEvent[] = [
  {
    id: '1',
    date: '09/05',
    day: 9,
    weekday: 'Sábado',
    title: 'GC',
    time: '17:00',
    description: 'Encontro do GC Lobby.',
    location: GC_ADDRESS,
    mapsUrl: GC_LOCATION_URL
  },
  {
    id: '2',
    date: '16/05',
    day: 16,
    weekday: 'Sábado',
    title: 'Lab (apenas GCD)',
    time: '09:00',
    description: 'Lab preparatório apenas para o GCD no prédio da igreja.',
    location: 'Igreja Dinamus Alphaville',
    mapsUrl: DINAMUS_MAPS_URL
  },
  {
    id: '5',
    date: '16/05',
    day: 16,
    weekday: 'Sábado',
    title: 'CHURRAS NO HUGO',
    time: '17:00',
    description: 'Churras da Lobby',
    location: 'Casa do Hugo'
  },
  {
    id: '3',
    date: '23/05',
    day: 23,
    weekday: 'Sábado',
    title: 'Encontro',
    time: '08:00 - 17:00',
    description: 'Encontro especial de dia inteiro.',
    location: 'Igreja Dinamus Alphaville',
    mapsUrl: DINAMUS_MAPS_URL
  },
  {
    id: '6',
    date: '30/05',
    day: 30,
    weekday: 'Sábado',
    title: 'GC',
    time: '15:0',
    description: 'GC às 15h na casa da Keth',
    location: 'GC_ADDRESS',
    mapsUrl: GC_LOCATION_URL
  },
  {
    id: '4',
    date: '30/05',
    day: 30,
    weekday: 'Sábado',
    title: 'MOVENITE',
    time: '19:00',
    description: 'MOVENITE às 19h.',
    location: 'Igreja Dinamus Alphaville',
    mapsUrl: DINAMUS_MAPS_URL
  }
];

const BACKGROUND_IMAGES = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80'
];

const GENERAL_EVENTS = [
  {
    day: 'Domingos',
    title: 'Culto',
    time: '10:00',
    location: 'Igreja Dinamus Alphaville',
    mapsUrl: DINAMUS_MAPS_URL,
    type: 'weekly'
  },
  {
    day: 'Terças',
    title: 'Escola Huios',
    time: '19:00',
    location: 'Igreja Dinamus Alphaville',
    mapsUrl: DINAMUS_MAPS_URL,
    type: 'weekly'
  },
  {
    day: 'Quartas',
    title: 'Oração dos Homens',
    time: '06:00',
    location: 'Igreja Dinamus Alphaville',
    mapsUrl: DINAMUS_MAPS_URL,
    type: 'weekly'
  },
  {
    day: 'Quartas',
    title: 'Oração das Mulheres',
    time: '08:00',
    location: 'Igreja Dinamus Alphaville',
    mapsUrl: DINAMUS_MAPS_URL,
    type: 'weekly'
  },
  {
    day: '30/05',
    title: 'Origem',
    time: '09:00',
    location: 'Igreja Dinamus Alphaville',
    mapsUrl: DINAMUS_MAPS_URL,
    type: 'special'
  }
];

export default function App() {
  const [bgIndex, setBgIndex] = React.useState(0);
  const [showFullCalendar, setShowFullCalendar] = React.useState(false);
  const [showNotification, setShowNotification] = React.useState(false);

  const nextEvent = React.useMemo(() => {
    // We use the fixed date from metadata as "now" since this is a 2026 agenda
    const now = new Date('2026-05-05T20:45:00Z');
    return EVENTS.find(event => {
      const [day, month] = event.date.split('/');
      const eventDate = new Date(2026, parseInt(month) - 1, parseInt(day), 23, 59);
      return eventDate >= now;
    }) || EVENTS[0];
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const addToCalendar = (event: AgendaEvent) => {
    const [day, month] = event.date.split('/');
    const year = 2026;
    
    // Simplistic time parsing for ICS
    const startTimeStr = event.time.split(' ')[0].replace(':', '');
    const startDate = `${year}${month}${day}T${startTimeStr}00`;
    
    // Default duration 1 hour if not specified
    const endDate = `${year}${month}${day}T${(parseInt(startTimeStr) + 100).toString().padStart(4, '0')}00`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//GC Lobby//Agenda//PT',
      'BEGIN:VEVENT',
      `UID:${event.id}-2026-gc-lobby`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `SUMMARY:${event.title}`,
      `DESCRIPTION:${event.description || ''}`,
      `LOCATION:${event.location || 'Igreja da Cidade'}`,
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
    const message = `🚨 *LEMBRETE GC LOBBY* 🚨\n\n📅 *Data:* ${event.date} (${event.weekday})\n🕒 *Hora:* ${event.time}\n📍 *Local:* ${event.location}\n\n📝 *Evento:* ${event.title}\n${event.description ? `\n_${event.description}_` : ''}\n\n*Nos vemos lá!* 🙌`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noreferrer');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link da agenda copiado!');
  };

  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden selection:bg-brand-primary/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BACKGROUND_IMAGES[bgIndex]})` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 pb-32">
        {/* Header */}
        <header className="sticky top-0 z-30">
          <div className="bg-white/10 backdrop-blur-2xl border-b border-white/10">
            <div className="max-w-md mx-auto px-5 py-5 flex items-center justify-between">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl font-display font-bold text-white tracking-tight"
                >
                  Agenda de Maio
                </motion.h1>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
                  <span className="text-white/70 font-semibold text-[11px] uppercase tracking-wider">GC LOBBY • 2026</span>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 bg-brand-primary/10 border border-brand-primary/20 rounded-2xl p-4 flex items-center gap-4"
          >
            <div className="bg-brand-primary p-2 rounded-xl text-white shadow-lg shadow-brand-primary/20">
              <Bell className="w-4 h-4 animate-bounce" />
            </div>
            <div>
              <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Próximo Evento</p>
              <p className="text-white text-sm font-bold">
                {nextEvent.title} • {nextEvent.date} às {nextEvent.time.split(' ')[0]}
              </p>
            </div>
          </motion.div>

          <div className="space-y-4">
            {EVENTS.map((event, index) => (
              <motion.div
                key={event.id}
                id={`event-${event.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/95 rounded-[2rem] p-5 shadow-xl shadow-black/5 border border-white/50 hover:bg-white transition-all overflow-hidden active:scale-[0.98]"
              >
                <div className="flex flex-col sm:flex-row gap-5">
                  {/* Date Badge */}
                  <div className="flex sm:flex-col items-center justify-center sm:justify-start gap-1 sm:gap-0 sm:w-12">
                    <span className="text-[9px] font-black text-brand-primary uppercase tracking-[0.1em]">
                      MAIO
                    </span>
                    <span className="text-3xl font-display font-bold text-neutral-900 leading-none">
                      {event.day.toString().padStart(2, '0')}
                    </span>
                    <div className="hidden sm:block w-0.5 h-6 bg-neutral-100 rounded-full mt-2" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col gap-0.5">
                      <h2 className="text-xl font-bold text-neutral-900 leading-tight group-hover:text-brand-secondary transition-colors">
                        {event.title}
                      </h2>
                      <p className="text-neutral-500 text-xs font-semibold flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                        {event.weekday}
                      </p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <div className="flex items-center text-[11px] font-bold text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-xl border border-neutral-200/40">
                        <Clock className="w-3 h-3 mr-1.5 text-brand-primary" />
                        {event.time}
                      </div>
                      {event.location && (
                        <a 
                          href={event.mapsUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center text-[11px] font-bold text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-xl border border-neutral-200/40 hover:bg-neutral-200 transition-colors"
                        >
                          <MapPin className="w-3 h-3 mr-1.5 text-brand-primary" />
                          {event.location}
                        </a>
                      )}
                    </div>

                    {event.description && (
                      <p className="mt-3 text-[13px] text-neutral-600 leading-relaxed font-medium bg-neutral-50 p-3.5 rounded-xl border border-neutral-100">
                        {event.description}
                      </p>
                    )}

                    <div className="mt-5 flex gap-2">
                      <button
                        onClick={() => addToCalendar(event)}
                        className="flex-1 flex items-center justify-center gap-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-black text-[11px] uppercase tracking-wider py-3.5 px-4 rounded-xl transition-all active:scale-[0.96] shadow-lg shadow-brand-primary/10 group/btn"
                      >
                        <Calendar className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <span>Marque na sua agenda</span>
                      </button>
                      <button
                        onClick={() => shareOnWhatsApp(event)}
                        className="p-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-600 rounded-xl transition-all active:scale-90 border border-neutral-200/50"
                        title="Compartilhar no WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 text-center px-6 pb-12"
          >
            <div className="inline-flex items-center justify-center p-1 bg-white/10 border border-white/20 rounded-full backdrop-blur-md mb-6">
              <span className="text-[9px] font-black text-white px-5 py-1 uppercase tracking-[0.2em]">
                Agenda Oficial • Maio 2026
              </span>
            </div>
            <p className="text-white/40 text-[10px] font-medium leading-relaxed">
              Toque nos cards para salvar os eventos no seu calendário ou compartilhar com seu GC no WhatsApp.
            </p>
          </motion.div>
        </main>

        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] max-w-sm h-16 bg-neutral-900/90 backdrop-blur-3xl rounded-2xl shadow-2xl flex items-center justify-around px-2 z-40 border border-white/10 overflow-hidden">
          <button 
            onClick={() => setShowFullCalendar(true)}
            className="flex-1 flex flex-col items-center justify-center gap-1 group"
          >
            <div className="p-2 rounded-lg bg-brand-primary text-white shadow-lg shadow-brand-primary/40 transition-transform group-active:scale-90">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-[8px] font-black text-white uppercase tracking-tighter">Calendário</span>
          </button>
          
          <div className="w-[1px] h-6 bg-white/10" />
          
          <button 
            onClick={() => {
              setShowNotification(true);
            }}
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
            <span className="text-[8px] font-black uppercase tracking-tighter">Alertas</span>
          </button>
        </nav>

        {/* Next Event Notification Modal */}
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
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Lembrete</span>
                      <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">{nextEvent.date}</span>
                    </div>
                    <h2 className="text-xl font-display font-bold text-neutral-900 mt-1">Próximo Evento</h2>
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100 mb-6">
                  <h3 className="text-lg font-bold text-neutral-900 leading-tight mb-2">{nextEvent.title}</h3>
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
                      <div className="flex items-center text-sm font-semibold text-neutral-600">
                        <MapPin className="w-4 h-4 mr-2 text-brand-primary/60" />
                        {nextEvent.location}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  {nextEvent.mapsUrl && (
                    <a 
                      href={nextEvent.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-brand-primary text-white text-center font-black text-[10px] uppercase tracking-widest py-4 rounded-xl shadow-lg shadow-brand-primary/20"
                    >
                      Como Chegar
                    </a>
                  )}
                  <button 
                    onClick={() => setShowNotification(false)}
                    className="flex-1 bg-neutral-900 text-white font-black text-[10px] uppercase tracking-widest py-4 rounded-xl"
                  >
                    Entendi
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Full Calendar Modal */}
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
                    <h2 className="text-2xl font-display font-bold text-neutral-900">Calendário Geral</h2>
                    <p className="text-neutral-500 text-sm font-medium">Dinamus Alphaville</p>
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
                        <span className="text-[10px] font-black text-brand-primary uppercase">{event.type === 'weekly' ? 'Semanal' : 'Evento'}</span>
                        <span className="text-sm font-bold text-neutral-900">{event.day}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[15px] font-bold text-neutral-900">{event.title}</h3>
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


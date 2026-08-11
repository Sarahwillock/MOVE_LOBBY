import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Download } from 'lucide-react';
import { MOVE_EVENTS } from '../constants/events';
import { saveToCalendar } from '../lib/calendar';

export default function FullSchedule() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8"
    >
      <div className="mb-8 flex items-center gap-3 sm:mb-12 sm:gap-4">
        <div className="bg-move-pink p-3 neo-brutalist-shadow sm:p-4">
          <Calendar className="text-white" size={40} />
        </div>
        <h1 className="text-3xl font-black italic uppercase tracking-tighter text-move-pink sm:text-4xl lg:text-6xl">AGENDA COMPLETA</h1>
      </div>

      <div className="space-y-6">
        {MOVE_EVENTS.map((event) => (
          <div 
            key={event.id}
            className={`glass-card border-l-4 p-4 sm:border-l-8 sm:p-6 ${
              event.color === 'move-blue' ? 'border-move-blue' : 
              event.color === 'move-pink' ? 'border-move-pink' : 
              event.color === 'move-orange' ? 'border-move-orange' : 'border-white'
            } flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:bg-white/5 transition-all`}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex flex-col items-center justify-center bg-white text-black px-4 py-2 min-w-[100px] neo-brutalist-shadow">
                <span className="text-2xl font-black">{event.date.split('/')[0]}</span>
                <span className="text-xs font-bold uppercase">{event.month.substring(0, 3)}</span>
              </div>
              
              <div>
                <h3 className="mb-2 text-2xl font-black uppercase leading-none sm:text-3xl group-hover:text-move-blue transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm font-bold uppercase tracking-tight text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{event.day} · {event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.location.split(' - ')[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => saveToCalendar(event)}
              className="flex min-h-12 w-full items-center justify-center gap-3 bg-move-blue md:w-auto text-white px-6 py-3 font-black uppercase tracking-tighter hover:bg-move-pink transition-all active:scale-95"
            >
              <Download size={20} />
              TE VEJO LÁ
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 border-2 bg-black p-5 sm:mt-12 sm:p-8 border-move-blue text-center">
        <p className="text-xl font-bold uppercase tracking-widest mb-4">Acompanhe todas as novidades no Instagram</p>
        <a 
          href="https://www.instagram.com/move.alphaville/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="break-all text-xl font-black text-move-blue sm:text-3xl italic uppercase hover:text-move-pink transition-colors"
        >
          @MOVE.ALPHAVILLE
        </a>
      </div>
    </motion.div>
  );
}

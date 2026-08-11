import { motion } from 'motion/react';
import MonthSwitcher from '../components/MonthSwitcher';
import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';

export default function April() {
  const aprilEvents = MOVE_EVENTS.filter(e => e.month === 'Abril');

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Image */}
      <img 
        src="/images/abril.jpg" 
        alt="MOVE April"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-50 saturate-[1.2]"
        referrerPolicy="no-referrer"
      />

      {/* Decorative shapes */}
      <div className="absolute z-0 opacity-60 w-64 h-64 rounded-full -top-20 -right-20 bg-move-orange/30 blur-[40px]" />
      <div className="absolute z-0 opacity-60 w-96 h-96 -bottom-48 -left-20 rotate-45 bg-move-blue/20 blur-[60px]" />

      <div className="relative z-10 flex h-full flex-col p-4 sm:p-6 md:p-12 lg:p-20">
        <MonthSwitcher />
        <header className="flex justify-between items-start">
          <div className="flex flex-col">
            <a 
              href="https://www.instagram.com/move.alphaville/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-move-blue font-bold tracking-widest text-sm mb-2 hover:underline"
            >
              MOVE ALPHAVILLE
            </a>
            <h1 className="font-bauhaus text-5xl uppercase leading-none sm:text-7xl md:text-9xl">ABRIL</h1>
            <p className="text-2xl md:text-3xl font-black mt-[-10px] italic text-move-pink">2026</p>
          </div>
          <div className="hidden md:block">
            <a 
              href="https://www.instagram.com/move.alphaville/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border-2 font-bold text-xl border-move-orange text-move-orange uppercase hover:bg-move-orange hover:text-white transition-all block"
            >
              @MOVE.ALPHAVILLE
            </a>
          </div>
        </header>

        <section className="my-12 max-w-4xl">
          <h2 className="mb-6 text-3xl font-black leading-tight sm:text-4xl md:text-6xl">
            VEM VIVER ISSO <br />
            <span className="text-outline">COM A GENTE.</span>
          </h2>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {aprilEvents.map((event) => (
            <div key={event.id} className={`glass-card border-l-4 p-5 sm:border-l-8 sm:p-8 ${event.color === 'move-blue' ? 'border-move-blue' : 'border-move-pink'}`}>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className={`font-bauhaus text-3xl sm:text-5xl ${event.color === 'move-blue' ? 'text-move-blue' : 'text-move-pink'}`}>{event.date}</span>
                <span className="bg-white text-black px-3 py-1 text-xs font-black uppercase">{event.day}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 uppercase">{event.title}</h3>
              <a 
                href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 text-sm leading-relaxed uppercase hover:${event.color === 'move-blue' ? 'text-move-blue' : 'text-move-pink'} transition-colors block`}
              >
                Prédio da Igreja
              </a>
              <div className="mt-6 flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${event.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink'}`} />
                  <span className="text-xs font-bold uppercase tracking-wider">{event.time}</span>
                </div>
                <button 
                  onClick={() => saveToCalendar(event)}
                  className={`min-h-11 px-4 py-2 text-[10px] font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 ${event.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink'} text-white`}
                >
                  TE VEJO LÁ
                </button>
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-12 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 glass-card px-6 py-4 rounded-full border-0">
              <span className="text-2xl">💾</span>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Salva esse post</p>
                <p className="text-sm font-bold">Para não esquecer</p>
              </div>
            </div>
            <div className="flex items-center gap-3 glass-card px-6 py-4 rounded-full border-0">
              <span className="text-2xl">📲</span>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase">Compartilha</p>
                <p className="text-sm font-bold">Manda pra alguém</p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => saveToCalendar(aprilEvents[0])}
            className="min-h-12 w-full bg-move-blue px-6 py-4 text-lg font-black text-white sm:w-auto sm:px-10 sm:py-5 sm:text-xl uppercase tracking-tighter transition-all hover:scale-105 active:scale-95"
          >
            TE VEJO LÁ
          </button>
        </footer>
      </div>
    </div>
  );
}

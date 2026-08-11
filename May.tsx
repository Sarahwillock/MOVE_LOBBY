import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import MonthSwitcher from '../components/MonthSwitcher';
import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';

export default function May() {
  const mayEvents = MOVE_EVENTS.filter(e => e.month === 'Maio');

  return (
    <div className="relative min-h-screen bg-black flex flex-col">
      <div className="p-4 md:p-8 relative z-50">
        <MonthSwitcher />
      </div>
      {/* Hero Section */}
      <section className="relative flex min-h-[620px] w-full items-center justify-center overflow-hidden py-8 sm:min-h-[680px] lg:h-[80vh] lg:py-0">
        <img 
          src="/images/maio.jpg" 
          alt="MOVE May"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-60"
          referrerPolicy="no-referrer"
        />
        
        {/* Bauhaus Overlays */}
        <div className="absolute right-[-3rem] top-10 h-40 w-40 sm:right-10 sm:h-64 sm:w-64 bg-move-blue/20 -rotate-12 border-2 border-move-blue" />
        <div className="absolute bottom-20 left-2 h-72 w-28 sm:left-10 sm:h-96 sm:w-48 bg-move-pink/10 rotate-6 border-r-4 border-move-pink" />

        <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-end gap-6 px-4 sm:px-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8 flex flex-col items-start">
            <div className="mb-2 flex flex-wrap items-center gap-2 sm:gap-4">
              <span className="bg-move-blue px-3 py-1 text-lg font-black text-white sm:px-4 sm:text-2xl uppercase tracking-tighter">12.05</span>
              <span className="text-sm font-black italic uppercase tracking-wider text-move-pink sm:text-xl sm:tracking-widest">SÃO PAULO / BR</span>
            </div>
            <h1 className="text-[4.6rem] leading-[0.82] sm:text-[7rem] md:text-[10rem] xl:text-[13rem] font-black italic uppercase tracking-tighter text-white drop-shadow-2xl">
              MAIO
            </h1>
          </div>

          <div className="flex flex-col gap-3 pb-2 md:col-span-4 md:gap-4 md:pb-12">
            <div className="bg-move-blue p-4 sm:p-6 border-l-8 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
              <h3 className="font-black text-3xl uppercase leading-none mb-2">O FUTURO</h3>
              <p className="font-bold text-sm tracking-widest opacity-90 uppercase">Conferência Palco Principal</p>
            </div>
            <div className="bg-move-pink p-4 sm:p-6 border-l-8 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
              <h3 className="font-black text-3xl uppercase leading-none mb-2">IMERSÃO</h3>
              <p className="font-bold text-sm tracking-widest opacity-90 uppercase">Série de Laboratórios Interativos</p>
            </div>
            <div className="bg-move-orange p-4 sm:p-6 border-l-8 border-white shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]">
              <h3 className="font-black text-3xl uppercase leading-none mb-2">NETWORKING</h3>
              <p className="font-bold text-sm tracking-widest opacity-90 uppercase">Noite Lounge no Terraço</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Bento Grid */}
      <section className="bg-neutral-900 px-4 py-10 sm:px-6 sm:py-12 border-t-2 border-move-blue">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-12 lg:flex-row lg:items-end">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-move-blue sm:text-4xl lg:text-6xl">CRONOGRAMA DIÁRIO</h2>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Link to="/move/full-schedule" className="flex min-h-11 items-center justify-center bg-white px-6 py-2 text-center text-sm font-black uppercase text-black transition-colors hover:bg-move-pink hover:text-white">Lista Completa</Link>
              <button onClick={() => window.print()} className="min-h-11 border-2 border-move-blue px-6 py-2 text-sm font-black uppercase text-move-blue transition-colors hover:bg-move-blue hover:text-white">Imprimir / PDF</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mayEvents.map((event) => (
              <div key={event.id} className={`relative min-h-[230px] overflow-hidden border-2 bg-neutral-800 p-5 sm:p-8 border-transparent hover:border-${event.color === 'move-blue' ? 'move-blue' : 'move-pink'} transition-all group`}>
                <div className={`absolute -right-10 -top-10 text-9xl font-black opacity-10 group-hover:opacity-30 transition-opacity`}>{event.date.split('/')[0]}</div>
                <span className={`${event.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink'} text-white text-xs font-black px-2 py-1 uppercase mb-4 inline-block`}>{event.time}</span>
                <h4 className="mt-2 text-2xl font-black uppercase leading-none sm:text-4xl">{event.title}</h4>
                <div className="mt-5 flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-end">
                  <a 
                    href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-neutral-400 uppercase font-bold text-xs hover:text-${event.color === 'move-blue' ? 'move-blue' : 'move-pink'} transition-colors block`}
                  >
                    {event.day} · Prédio da Igreja
                  </a>
                  <button 
                    onClick={() => saveToCalendar(event)}
                    className={`min-h-11 px-4 py-2 text-[10px] font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 ${event.color === 'move-blue' ? 'bg-move-blue' : 'bg-move-pink'} text-white`}
                  >
                    TE VEJO LÁ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex justify-center pb-12">
          <button 
            onClick={() => saveToCalendar(mayEvents[0])}
            className="min-h-12 w-full bg-move-pink px-6 py-4 text-lg font-black text-white sm:w-auto sm:px-12 sm:py-6 sm:text-2xl uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]"
          >
            TE VEJO LÁ
          </button>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { Verified, ArrowRight, QrCode, Bolt } from 'lucide-react';
import MonthSwitcher from '../components/MonthSwitcher';
import { saveToCalendar } from '../lib/calendar';
import { MOVE_EVENTS } from '../constants/events';

export default function June() {
  const juneEvents = MOVE_EVENTS.filter(e => e.month === 'Junho');

  return (
    <div className="min-h-screen bg-[#0e0e0e] p-4 text-white sm:p-5 md:p-8">
      <div className="max-w-7xl mx-auto">
        <MonthSwitcher />
        {/* Main Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-move-blue overflow-hidden">
          {/* Left Vertical Accent */}
          <div className="hidden border-r-2 border-black bg-move-blue py-10 lg:col-span-1 lg:flex lg:flex-col lg:items-center lg:justify-between">
            <span className="text-white font-black text-xl vertical-text rotate-180 uppercase tracking-[0.25em]">CENTRO CULTURAL</span>
            <div className="w-12 h-12 bg-white flex items-center justify-center neo-brutalist-shadow">
              <Bolt className="text-move-blue font-bold" size={32} />
            </div>
          </div>

          {/* Central Content */}
          <div className="relative min-h-[440px] bg-neutral-900 sm:min-h-[520px] lg:col-span-8 lg:min-h-[600px] overflow-hidden group">
            <img 
              src="/images/junho.manu.jpg" 
              alt="Event speaker" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75 transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            <div className="relative h-full flex flex-col justify-end p-6 md:p-12 z-10 bg-gradient-to-t from-black/80 to-transparent">
              <h1 className="text-[20vw] sm:text-[15vw] md:text-[10vw] lg:text-[8vw] font-black text-white uppercase leading-none tracking-tighter italic">
                JUNHO
              </h1>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-move-pink px-5 py-2.5 sm:px-8 sm:py-3 neo-brutalist-shadow">
                  <span className="text-white font-black italic text-3xl uppercase leading-none">2026</span>
                </div>
                <div className="border-2 border-white bg-black/40 px-4 py-2.5 backdrop-blur-md sm:border-4 sm:px-8 sm:py-3">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-white sm:text-lg sm:tracking-[0.2em]">SÃO PAULO - BR</span>
                </div>
              </div>
            </div>

            {/* Bauhaus Grid */}
            <div className="absolute right-0 top-0 h-24 w-24 sm:h-40 sm:w-40 grid grid-cols-4 grid-rows-4 gap-1 p-2 bg-black/20">
              <div className="bg-move-blue" /><div className="bg-move-pink" /><div className="bg-white" /><div className="bg-move-orange" />
              <div className="bg-white" /><div className="bg-move-blue" /><div className="bg-move-orange" /><div className="bg-move-pink" />
              <div className="bg-move-orange" /><div className="bg-white" /><div className="bg-move-pink" /><div className="bg-move-blue" />
              <div className="bg-move-pink" /><div className="bg-move-orange" /><div className="bg-move-blue" /><div className="bg-white" />
            </div>
          </div>

          {/* Right Detail Column */}
          <div className="flex flex-col border-black lg:col-span-3 lg:border-l-2">
            {juneEvents.map((event) => (
              <div key={event.id} className={`${event.color === 'move-orange' ? 'bg-move-orange' : event.color === 'white' ? 'bg-white' : 'bg-move-blue'} flex flex-1 flex-col justify-center p-5 sm:p-8 border-b-2 border-black group/item`}>
                <div className={`${event.color === 'white' ? 'text-black' : 'text-white'} mb-3 text-4xl font-black sm:mb-4 sm:text-6xl tracking-tighter`}>{event.date.split('/')[0]}</div>
                <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-end">
                  <a 
                    href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${event.color === 'white' ? 'text-black border-move-blue' : 'text-white border-white'} font-bold uppercase tracking-tight text-sm leading-relaxed border-l-4 pl-4 hover:text-move-pink transition-colors block`}
                  >
                    {event.title} - {event.day} · {event.time.split(' ')[0]} · Prédio da Igreja
                  </a>
                  <button 
                    onClick={() => saveToCalendar(event)}
                    className={`min-h-11 px-4 py-2 text-[9px] sm:ml-4 font-black uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 ${event.color === 'white' ? 'bg-move-blue text-white' : 'bg-white text-black'}`}
                  >
                    TE VEJO LÁ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Content Below */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative min-h-[280px] sm:h-72 md:col-span-2 border-4 border-move-blue group overflow-hidden neo-brutalist-shadow">
            <div className="absolute inset-0 bg-neutral-900">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSPdN2pB06pRpNjvO3jJbIKi8_mOKL0n1pEVnENGYgtGdzP9OJb0lDYQo2NX7-GuXnbcacWnszeyatvNOTdtfaTykuw6XLTB98Ppp3-dsYZAgZuHFgLlW-iw1lxkkkLWGYvmPuDNgc7GlsksnB-qzy9wmu4Z8sCUrHSKqQJXska9spWvQmUBcdnCn0ChMyYKdDBaeORVwxzD8A1O3_h5sP5yRXU3eZbWAR9KV6mCTJaU62G63uOBOTyh8yF9J_wHeDmlir1LnED7rI" 
                alt="Map"
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <a 
              href="https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/@-23.4535947,-46.8986446,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf038c37463f3b:0x49e17d54b4abbcc5!8m2!3d-23.4535947!4d-46.8960697!16s%2Fg%2F11p76kdcpq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex h-full flex-col justify-between p-5 sm:p-8 group/loc"
            >
              <div className="bg-move-blue inline-block self-start px-4 py-1 font-black text-xs uppercase text-white tracking-widest">LOCALIZAÇÃO</div>
              <div>
                <h3 className="text-3xl font-black uppercase sm:text-5xl text-white leading-none tracking-tighter group-hover/loc:text-move-blue transition-colors">IGREJA DINAMUS ALPHAVILLE</h3>
                <p className="text-white font-bold uppercase text-sm mt-3 bg-black/60 inline-block px-2">Alameda Mamoré, 521 - Alphaville, Barueri - SP</p>
              </div>
            </a>
          </div>

          <div className="bg-move-pink p-5 sm:p-8 flex flex-col justify-between border-4 border-black text-white neo-brutalist-shadow group hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="w-16 h-16 border-4 border-white bg-black flex items-center justify-center mb-6">
              <QrCode size={32} />
            </div>
            <div>
              <h4 className="text-3xl font-black uppercase leading-none mb-3">ACESSO VIP</h4>
              <p className="text-sm font-bold uppercase opacity-90 leading-tight">DOWNLOAD DO MOVE APP PARA ACESSO EXCLUSIVO AOS WORKSHOPS E NETWORKING.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => saveToCalendar(juneEvents[0])}
            className="min-h-12 w-full bg-move-blue px-6 py-4 text-lg font-black text-white sm:w-auto sm:px-12 sm:py-6 sm:text-2xl uppercase tracking-tighter transition-all hover:scale-105 active:scale-95 neo-brutalist-shadow"
          >
            TE VEJO LÁ
          </button>
        </div>
      </div>
    </div>
  );
}

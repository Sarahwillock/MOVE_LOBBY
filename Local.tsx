import { MapPin, Clock } from 'lucide-react';

export default function Local() {
  return (
    <div className="min-h-screen bg-black p-4 text-white sm:p-6 md:p-10">
      <div className="mx-auto max-w-5xl pt-4 sm:pt-8 md:pt-10">
        <div className="overflow-hidden border-2 border-move-blue bg-neutral-950">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-5 sm:p-8 md:p-12">
              <div className="mb-6 inline-block bg-move-pink px-4 py-1 text-[10px] font-black uppercase tracking-widest sm:text-xs">LOCAL DOS EVENTOS</div>
              <h1 className="mb-6 text-3xl font-black uppercase leading-none sm:text-4xl md:text-6xl">IGREJA DINAMUS <br /><span className="text-move-blue">ALPHAVILLE</span></h1>
              <p className="mb-8 text-base text-white/80 sm:text-lg">A maioria dos eventos do MOVE acontece na Igreja Dinamus Alphaville.</p>
              <div className="space-y-6">
                <div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-move-blue" size={22} /><div><div className="text-sm font-bold uppercase text-white/50">Endereço</div><div className="text-lg font-bold sm:text-xl">Estrada Bela Vista, 2914 - Alphaville, Santana de Parnaíba - SP, 06472-005</div></div></div>
                <div className="flex gap-4"><Clock className="mt-1 shrink-0 text-move-pink" size={22} /><div><div className="text-sm font-bold uppercase text-white/50">Cultos</div><div className="text-lg font-bold sm:text-xl">Todos os domingos às 10h</div></div></div>
              </div>
              <a href="https://maps.app.goo.gl/i3fVsntiQtYuizbc8" target="_blank" rel="noopener noreferrer" className="mt-10 inline-block bg-move-blue px-6 py-4 text-center font-black uppercase transition hover:bg-move-pink sm:px-8">VER NO MAPA</a>
            </div>
            <div className="min-h-[320px] bg-neutral-900">
              <iframe title="Mapa da Igreja Dinamus Alphaville" src="https://www.google.com/maps?q=Estrada%20Bela%20Vista%2C%202914%20-%20Alphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP&z=15&output=embed" className="h-full min-h-[320px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

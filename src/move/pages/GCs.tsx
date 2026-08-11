import { motion } from 'motion/react';
import {
  Users,
  Clock,
  MapPin,
  Instagram
} from 'lucide-react';

const gcs = [
  {
    name: 'GC Lobby',
    leader: 'Hugo',
    schedule: 'Sábado (15 em 15 dias)',
    time: '17:00',
    location: 'Alphaville',
    color: 'blue'
  },
  {
    name: 'GC Conecta',
    leader: 'Bia e Gui',
    schedule: 'Quinta (15 em 15 dias)',
    time: '20:00',
    location: 'Alphaville',
    color: 'pink'
  }
];

export default function GCs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8"
    >
      {/* CABEÇALHO */}
      <header className="mb-8 sm:mb-12">
        <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-blue-500">
          MOVE ALPHAVILLE
        </p>

        <h1 className="text-4xl font-black italic uppercase leading-none text-white sm:text-5xl lg:text-6xl">
          GRUPOS DE
          <br />
          <span className="text-blue-500">
            CONEXÃO
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-neutral-400 sm:text-base">
          Um lugar para criar conexões, caminhar juntos e viver comunidade.
        </p>
      </header>

      {/* CARDS */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
        {gcs.map((gc) => {
          const isBlue = gc.color === 'blue';

          return (
            <article
              key={gc.name}
              className={`
                relative overflow-hidden
                rounded-2xl
                border border-white/10
                border-l-4
                bg-neutral-900
                p-5 sm:p-7
                ${
                  isBlue
                    ? 'border-l-blue-600'
                    : 'border-l-pink-600'
                }
              `}
            >
              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={`
                        mb-2 text-[10px]
                        font-black uppercase
                        tracking-[0.2em]
                        ${
                          isBlue
                            ? 'text-blue-500'
                            : 'text-pink-500'
                        }
                      `}
                    >
                      Grupo de Conexão
                    </p>

                    <h2 className="text-3xl font-black uppercase leading-none text-white sm:text-4xl">
                      {gc.name}
                    </h2>

                    <p className="mt-3 text-sm font-black uppercase tracking-widest text-orange-500 sm:text-base">
                      Líder: {gc.leader}
                    </p>
                  </div>

                  <Users className="h-7 w-7 shrink-0 text-white/20" />
                </div>

                <div className="mb-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-neutral-500" />

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">
                        Quando
                      </p>

                      <p className="mt-1 text-sm font-bold text-white sm:text-base">
                        {gc.schedule} · {gc.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-neutral-500" />

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">
                        Onde
                      </p>

                      <p className="mt-1 text-sm font-bold text-white sm:text-base">
                        {gc.location}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/move.alphaville/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex min-h-[52px]
                    w-full items-center
                    justify-center gap-2
                    rounded-xl
                    px-5 py-4
                    text-center
                    font-black uppercase
                    text-white
                    transition
                    active:scale-[0.98]
                    ${
                      isBlue
                        ? 'bg-blue-600 hover:bg-blue-500'
                        : 'bg-pink-600 hover:bg-pink-500'
                    }
                  `}
                >
                  <Instagram className="h-5 w-5" />
                  FALAR COM O GC
                </a>
              </div>

              <div
                className="
                  pointer-events-none
                  absolute -bottom-4 right-2
                  select-none
                  text-7xl font-black italic
                  uppercase text-white/[0.03]
                  sm:text-8xl
                "
              >
                {gc.name.split(' ')[1]}
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA */}
      <section
        className="
          mt-10 rounded-2xl
          border border-dashed
          border-blue-600/40
          bg-blue-600/5
          p-6 text-center
          sm:mt-14 sm:p-8
        "
      >
        <h3 className="text-xl font-black uppercase text-white sm:text-2xl">
          Quer saber mais sobre os GCs?
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-neutral-400">
          Fale com a equipe MOVE para encontrar o grupo que faz mais sentido para você.
        </p>

        <a
          href="https://www.instagram.com/move.alphaville/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-6 inline-flex min-h-[50px]
            items-center justify-center
            gap-2 rounded-xl
            bg-white px-7 py-3
            font-black uppercase
            text-black
            transition
            hover:bg-pink-600
            hover:text-white
            active:scale-[0.98]
          "
        >
          <Instagram className="h-5 w-5" />
          FALAR COM A GENTE
        </a>
      </section>
    </motion.div>
  );
}

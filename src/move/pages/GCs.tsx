import { motion } from 'motion/react';
import {
  Users,
  Clock,
  MapPin,
  MessageCircle,
  Instagram
} from 'lucide-react';

const WHATSAPP_NUMBER = '5511952809396';

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
    leader: 'Guilherme e Bia',
    schedule: 'Quinta (15 em 15 dias)',
    time: '20:00',
    location: 'Alphaville',
    color: 'pink'
  },
  {
    name: 'Rock 12 a 14',
    leader: 'Robinho e Bea',
    schedule: 'Toda sexta-feira',
    time: '20:00',
    location: 'Prédio da igreja',
    color: 'orange'
  },
  {
    name: 'Rock 15 a 18',
    leader: 'Gab',
    schedule: 'Toda sexta-feira',
    time: '20:00',
    location: 'Alphaville',
    color: 'violet'
  }
];

function getColorClasses(color: string) {
  switch (color) {
    case 'blue':
      return {
        border: 'border-l-blue-600',
        text: 'text-blue-500',
        button: 'bg-blue-600 hover:bg-blue-500'
      };

    case 'pink':
      return {
        border: 'border-l-pink-600',
        text: 'text-pink-500',
        button: 'bg-pink-600 hover:bg-pink-500'
      };

    case 'orange':
      return {
        border: 'border-l-orange-600',
        text: 'text-orange-500',
        button: 'bg-orange-600 hover:bg-orange-500'
      };

    case 'violet':
      return {
        border: 'border-l-violet-600',
        text: 'text-violet-500',
        button: 'bg-violet-600 hover:bg-violet-500'
      };

    default:
      return {
        border: 'border-l-blue-600',
        text: 'text-blue-500',
        button: 'bg-blue-600 hover:bg-blue-500'
      };
  }
}

export default function GCs() {
  const openWhatsApp = (gcName: string) => {
    const message =
      `Olá! Vi o ${gcName} no site da MOVE Alphaville e tenho interesse em participar. Poderia me passar mais informações?`;

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const openGeneralWhatsApp = () => {
    const message =
      'Olá! Vi os Grupos de Conexão no site da MOVE Alphaville e gostaria de saber qual GC é mais indicado para mim.';

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
  };

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
          const colors = getColorClasses(gc.color);

          const isChurchLocation =
            gc.location === 'Prédio da igreja';

          return (
            <article
              key={gc.name}
              className={`
                relative overflow-hidden
                rounded-2xl
                border border-white/10
                border-l-4
                bg-neutral-900
                p-5
                sm:p-7
                ${colors.border}
              `}
            >
              <div className="relative z-10">

                {/* NOME */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={`
                        mb-2
                        text-[10px]
                        font-black uppercase
                        tracking-[0.2em]
                        ${colors.text}
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

                {/* INFORMAÇÕES */}
                <div className="mb-6 space-y-4">

                  {/* QUANDO */}
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

                  {/* ONDE */}
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-neutral-500" />

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">
                        Onde
                      </p>

                      {isChurchLocation ? (
                        <a
                          href="https://maps.app.goo.gl/Un9HZ4mLqykChKxSA"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-block text-sm font-bold text-white underline underline-offset-4 transition hover:text-blue-400 sm:text-base"
                        >
                          {gc.location}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-bold text-white sm:text-base">
                          {gc.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* QUERO PARTICIPAR */}
                <button
                  type="button"
                  onClick={() => openWhatsApp(gc.name)}
                  className={`
                    flex min-h-[52px]
                    w-full
                    items-center justify-center
                    gap-2
                    rounded-xl
                    px-5 py-4
                    text-center
                    font-black uppercase
                    text-white
                    transition
                    active:scale-[0.98]
                    ${colors.button}
                  `}
                >
                  <MessageCircle className="h-5 w-5" />

                  QUERO PARTICIPAR
                </button>

              </div>

              {/* TEXTO DECORATIVO */}
              <div
                className="
                  pointer-events-none
                  absolute -bottom-4 right-2
                  select-none
                  text-7xl
                  font-black italic uppercase
                  text-white/[0.03]
                  sm:text-8xl
                "
              >
                {gc.name.split(' ')[1]}
              </div>
            </article>
          );
        })}
      </div>

      {/* CTA FINAL */}
      <section
        className="
          mt-10
          rounded-2xl
          border border-dashed
          border-blue-600/40
          bg-blue-600/5
          p-6
          text-center
          sm:mt-14
          sm:p-8
        "
      >
        <h3 className="text-xl font-black uppercase text-white sm:text-2xl">
          Não sabe qual GC escolher?
        </h3>

        <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-neutral-400">
          Fale com a equipe MOVE. A gente te ajuda a encontrar o grupo que
          mais combina com sua fase de vida.
        </p>

        <button
          type="button"
          onClick={openGeneralWhatsApp}
          className="
            mt-6
            inline-flex min-h-[50px]
            items-center justify-center
            gap-2
            rounded-xl
            bg-emerald-600
            px-7 py-3
            font-black uppercase
            text-white
            transition
            hover:bg-emerald-500
            active:scale-[0.98]
          "
        >
          <MessageCircle className="h-5 w-5" />

          FALAR PELO WHATSAPP
        </button>

        <a
          href="https://www.instagram.com/move.alphaville/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mx-auto mt-3
            flex min-h-[48px]
            w-fit
            items-center justify-center
            gap-2
            px-4
            text-xs
            font-black uppercase
            text-neutral-400
            transition
            hover:text-pink-500
          "
        >
          <Instagram className="h-4 w-4" />

          @MOVE.ALPHAVILLE
        </a>
      </section>
    </motion.div>
  );
}

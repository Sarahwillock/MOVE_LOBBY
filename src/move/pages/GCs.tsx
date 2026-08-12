import {
  Clock,
  MapPin,
  MessageCircle,
  Users
} from 'lucide-react';

type GCColor =
  | 'blue'
  | 'pink'
  | 'orange'
  | 'violet';

type GC = {
  name: string;
  leader: string;
  schedule: string;
  time: string;
  description?: string;
  location: string;
  color: GCColor;
};

const CHURCH_MAP_URL =
  'https://maps.app.goo.gl/Un9HZ4mLqykChKxSA';

/* =========================================================
   GRUPOS DE CONEXÃO
========================================================= */

const groups: GC[] = [
  {
    name: 'GC Lobby',
    leader: 'Hugo',
    schedule: 'Sábado (15 em 15 dias)',
    time: '17:00',
    description: 'Jovens a partir de 20 anos',
    location: 'Alphaville',
    color: 'blue'
  },
  {
    name: 'GC Conecta',
    leader: 'Guilherme e Bia',
    schedule: 'Quinta (15 em 15 dias)',
    time: '20:00',
    description: 'Jovens a partir de 20 anos',
    location: 'Alphaville',
    color: 'pink'
  },
  {
    name: 'Rock 12 a 14',
    leader: 'Robinho e Bea',
    schedule: 'Toda sexta-feira',
    time: '20:00',
    description: 'Pré-adolescentes de 12 a 14 anos',
    location: 'Prédio da igreja',
    color: 'orange'
  },
  {
    name: 'Rock 15 a 18',
    leader: 'Gab',
    schedule: 'Toda sexta-feira',
    time: '20:00',
    description: 'Adolescentes de 15 a 18 anos',
    location: 'Alphaville',
    color: 'violet'
  }
];

/* =========================================================
   CORES
========================================================= */

function getColors(color: GCColor) {
  switch (color) {
    case 'blue':
      return {
        border: 'border-blue-600',
        accent: 'text-blue-500',
        button: 'bg-blue-600 hover:bg-blue-500',
        badge: 'text-blue-500'
      };

    case 'pink':
      return {
        border: 'border-pink-600',
        accent: 'text-pink-500',
        button: 'bg-pink-600 hover:bg-pink-500',
        badge: 'text-pink-500'
      };

    case 'orange':
      return {
        border: 'border-orange-600',
        accent: 'text-orange-500',
        button: 'bg-orange-600 hover:bg-orange-500',
        badge: 'text-orange-500'
      };

    case 'violet':
      return {
        border: 'border-violet-600',
        accent: 'text-violet-500',
        button: 'bg-violet-600 hover:bg-violet-500',
        badge: 'text-violet-500'
      };
  }
}

/* =========================================================
   WHATSAPP
========================================================= */

function getWhatsAppLink(group: GC) {
  const message = encodeURIComponent(
    `Olá! Tenho interesse em participar do ${group.name}. Poderia me passar mais informações?`
  );

  return `https://wa.me/?text=${message}`;
}

/* =========================================================
   COMPONENTE
========================================================= */

export default function GCs() {
  return (
    <div className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8">

      {/* ===================================================
          CABEÇALHO
      =================================================== */}

      <header className="mb-10">

        <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-500">
          MOVE ALPHAVILLE
        </p>

        <h1 className="mt-2 text-5xl font-black italic uppercase leading-[0.9] text-white sm:text-6xl">
          Grupos de
          <span className="block text-blue-500">
            Conexão
          </span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm font-semibold leading-relaxed text-neutral-400 sm:text-base">
          Um lugar para criar conexões, caminhar juntos e viver comunidade.
        </p>

      </header>

      {/* ===================================================
          CARDS
      =================================================== */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        {groups.map((gc) => {
          const colors =
            getColors(gc.color);

          const isChurch =
            gc.location ===
            'Prédio da igreja';

          return (
            <article
              key={gc.name}
              className={`
                relative
                overflow-hidden
                rounded-2xl
                border
                border-l-4
                bg-neutral-900/95
                p-5
                shadow-xl
                backdrop-blur-md
                sm:p-6
                ${colors.border}
              `}
            >

              {/* ÍCONE DECORATIVO */}
              <Users
                className="
                  absolute
                  right-5
                  top-5
                  h-7
                  w-7
                  text-white/10
                "
              />

              {/* GRUPO DE CONEXÃO */}
              <p
                className={`
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.3em]
                  ${colors.badge}
                `}
              >
                Grupo de Conexão
              </p>

              {/* NOME */}
              <h2 className="mt-3 pr-10 text-2xl font-black uppercase leading-none text-white sm:text-3xl">
                {gc.name}
              </h2>

              {/* LÍDER */}
              <p className="mt-3 text-sm font-black uppercase tracking-wider text-orange-500">
                Líder: {gc.leader}
              </p>

              {/* ===========================================
                  DESCRIÇÃO / FAIXA ETÁRIA
              =========================================== */}

              {gc.description && (
                <div className="mt-4">
                  <span
                    className="
                      inline-flex
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-3
                      py-1.5
                      text-xs
                      font-black
                      uppercase
                      tracking-wider
                      text-neutral-300
                    "
                  >
                    {gc.description}
                  </span>
                </div>
              )}

              {/* ===========================================
                  QUANDO
              =========================================== */}

              <div className="mt-6 flex items-start gap-3">

                <Clock
                  className={`
                    mt-0.5
                    h-5
                    w-5
                    shrink-0
                    ${colors.accent}
                  `}
                />

                <div>

                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500">
                    Quando
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    {gc.schedule} · {gc.time}
                  </p>

                </div>

              </div>

              {/* ===========================================
                  ONDE
              =========================================== */}

              <div className="mt-5 flex items-start gap-3">

                <MapPin
                  className={`
                    mt-0.5
                    h-5
                    w-5
                    shrink-0
                    ${colors.accent}
                  `}
                />

                <div>

                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-500">
                    Onde
                  </p>

                  {isChurch ? (
                    <a
                      href={CHURCH_MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-1
                        block
                        text-sm
                        font-bold
                        text-white
                        underline
                        underline-offset-4
                        transition
                        hover:text-blue-400
                      "
                    >
                      {gc.location}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-bold text-white">
                      {gc.location}
                    </p>
                  )}

                </div>

              </div>

              {/* ===========================================
                  BOTÃO
              =========================================== */}

              <a
                href={getWhatsAppLink(gc)}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  mt-7
                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  px-5
                  py-3
                  text-center
                  text-sm
                  font-black
                  uppercase
                  text-white
                  transition
                  active:scale-[0.98]
                  ${colors.button}
                `}
              >
                <MessageCircle className="h-5 w-5" />

                Quero participar
              </a>

            </article>
          );
        })}

      </div>

      {/* ===================================================
          AVISO FINAL
      =================================================== */}

      <section
        className="
          mt-10
          rounded-2xl
          border
          border-blue-600/30
          bg-blue-600/10
          p-5
          text-center
        "
      >
        <p className="text-sm font-semibold leading-relaxed text-neutral-300">
          Quer fazer parte de um GC? Escolha o grupo que mais combina com
          você e fale com a gente.
        </p>
      </section>

    </div>
  );
}

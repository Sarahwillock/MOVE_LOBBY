import { motion } from 'motion/react';
import {
  Instagram,
  Mail,
  MapPin
} from 'lucide-react';

const leaders = [
  {
    name: 'Hugo',
    role: 'Líder da Casa',
    image: '/lider1.jpg',
    bio: 'Líder visionário focado em despertar o propósito em cada jovem.',
    instagram: 'https://www.instagram.com/move.alphaville/'
  },
  {
    name: 'Guilherme e Bia',
    role: 'Líderes',
    image: '/lideres.jpeg',
    bio: 'Dedicados a construir conexões reais e profundas através dos GCs.',
    instagram: 'https://www.instagram.com/move.alphaville/'
  }
];

const MAPS_URL =
  'https://www.google.com/maps/place/Igreja+Dinamus+Alphaville/';

export default function Leaders() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">

      {/* EFEITOS DE FUNDO */}
      <div
        className="
          pointer-events-none
          absolute right-0 top-0 -z-10
          h-[320px] w-[320px]
          bg-blue-600/10 blur-[120px]
          sm:h-[500px] sm:w-[500px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 -z-10
          h-[320px] w-[320px]
          bg-pink-600/10 blur-[120px]
          sm:h-[500px] sm:w-[500px]
        "
      />

      <div
        className="
          relative z-10
          mx-auto max-w-7xl
          p-4
          sm:p-6
          md:p-10
          lg:p-12
        "
      >

        {/* CABEÇALHO */}
        <header className="mb-10 sm:mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
          >
            <p
              className="
                mb-3 text-xs
                font-black uppercase
                tracking-[0.25em]
                text-blue-500
              "
            >
              MOVE ALPHAVILLE
            </p>

            <h1
              className="
                text-4xl
                font-black uppercase
                leading-none
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              LÍDERES
              <br />

              <span className="text-blue-500">
                DA CASA
              </span>
            </h1>

            <div
              className="
                mb-6 mt-4
                h-2 w-20
                bg-pink-600
                sm:mb-8 sm:w-24
              "
            />

            <p
              className="
                max-w-2xl
                text-sm font-bold uppercase
                tracking-[0.12em]
                text-gray-400
                sm:text-base
                md:text-lg
              "
            >
              Conheça as pessoas que dedicam suas vidas
              para construir o MOVE e servir a nossa
              comunidade.
            </p>
          </motion.div>
        </header>

        {/* LÍDERES */}
        <div
          className="
            grid grid-cols-1
            gap-8
            lg:grid-cols-2
            lg:gap-12
          "
        >
          {leaders.map((leader, index) => (
            <motion.article
              key={leader.name}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -30 : 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true,
                amount: 0.15
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15
              }}
              className="group"
            >
              <div
                className="
                  relative
                  aspect-[4/5]
                  min-h-[420px]
                  overflow-hidden
                  rounded-2xl
                  border-2
                  border-blue-600/30
                  bg-neutral-900
                  transition-all
                  duration-500
                  group-hover:border-blue-600
                "
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  className="
                    h-full w-full
                    object-cover object-center
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black
                    via-black/30
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute bottom-0 left-0
                    w-full
                    p-5
                    sm:p-6
                    lg:p-8
                  "
                >
                  <span
                    className="
                      mb-3 inline-block
                      rounded-full
                      bg-pink-600
                      px-3 py-1
                      text-[10px]
                      font-black uppercase
                      tracking-widest
                      text-white
                      sm:mb-4
                      sm:text-xs
                    "
                  >
                    {leader.role}
                  </span>

                  <h2
                    className="
                      mb-2
                      text-3xl
                      font-black uppercase italic
                      tracking-tighter
                      text-white
                      sm:text-4xl
                      md:text-5xl
                    "
                  >
                    {leader.name}
                  </h2>

                  <p
                    className="
                      mb-5
                      max-w-md
                      text-sm
                      font-medium
                      leading-relaxed
                      text-gray-300
                      sm:mb-6
                    "
                  >
                    {leader.bio}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={leader.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${leader.name}`}
                      className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-full
                        border border-white/20
                        bg-black/20
                        text-white
                        backdrop-blur
                        transition
                        hover:border-blue-500
                        hover:bg-blue-600
                        active:scale-95
                      "
                    >
                      <Instagram className="h-5 w-5" />
                    </a>

                    <a
                      href="mailto:"
                      aria-label={`Enviar e-mail para ${leader.name}`}
                      className="
                        flex h-11 w-11
                        items-center justify-center
                        rounded-full
                        border border-white/20
                        bg-black/20
                        text-white
                        backdrop-blur
                        transition
                        hover:border-pink-500
                        hover:bg-pink-600
                        active:scale-95
                      "
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* LOCALIZAÇÃO */}
        <section
          className="
            relative mt-12
            overflow-hidden
            rounded-2xl
            border border-blue-600/30
            bg-white/[0.04]
            p-6
            sm:mt-20
            sm:p-8
            lg:mt-24
            lg:p-10
          "
        >
          <div
            className="
              pointer-events-none
              absolute right-0 top-0
              p-4
              opacity-10
            "
          >
            <MapPin
              className="
                h-24 w-24
                text-blue-500
                sm:h-32 sm:w-32
              "
            />
          </div>

          <div className="relative z-10">
            <p
              className="
                mb-2
                text-xs
                font-black uppercase
                tracking-[0.25em]
                text-blue-500
              "
            >
              MOVE ALPHAVILLE
            </p>

            <h3
              className="
                mb-4
                text-2xl
                font-black uppercase
                text-white
                sm:mb-6
                sm:text-3xl
              "
            >
              ONDE NOS ENCONTRAR?
            </h3>

            <p
              className="
                mb-6
                max-w-xl
                text-sm
                font-bold
                leading-relaxed
                text-gray-400
                sm:mb-8
                sm:text-base
              "
            >
              Estamos nos GCs e nos eventos mensais
              realizados no prédio da Igreja Dinamus
              Alphaville.
            </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-[52px]
                items-center justify-center
                gap-2
                rounded-xl
                bg-blue-600
                px-6 py-4
                font-black uppercase
                text-white
                transition
                hover:bg-pink-600
                active:scale-[0.98]
                sm:px-8
              "
            >
              <MapPin className="h-5 w-5" />

              VER LOCALIZAÇÃO
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}

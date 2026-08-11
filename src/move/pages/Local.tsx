import {
  MapPin,
  Clock,
  Navigation
} from 'lucide-react';

const MAPS_URL =
  'https://maps.app.goo.gl/i3fVsntiQtYuizbc8';

export default function Local() {
  return (
    <div className="min-h-screen bg-black p-4 text-white sm:p-6 md:p-10">
      <div className="mx-auto max-w-5xl pt-2 sm:pt-6 md:pt-8">

        <div
          className="
            overflow-hidden
            rounded-2xl
            border-2 border-blue-600
            bg-neutral-950
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* INFORMAÇÕES */}
            <div className="flex flex-col justify-center p-5 sm:p-8 md:p-10 lg:p-12">

              <div
                className="
                  mb-5 inline-flex
                  w-fit items-center
                  rounded-full
                  bg-pink-600
                  px-4 py-2
                  text-[10px]
                  font-black uppercase
                  tracking-widest
                  text-white
                  sm:text-xs
                "
              >
                LOCAL DOS EVENTOS
              </div>

              <h1
                className="
                  mb-5
                  text-3xl
                  font-black uppercase
                  leading-none
                  text-white
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                "
              >
                IGREJA DINAMUS
                <br />

                <span className="text-blue-500">
                  ALPHAVILLE
                </span>
              </h1>

              <p
                className="
                  mb-8
                  max-w-xl
                  text-sm
                  font-medium
                  leading-relaxed
                  text-white/70
                  sm:text-base
                  md:text-lg
                "
              >
                A maioria dos eventos do MOVE acontece
                na Igreja Dinamus Alphaville.
              </p>

              <div className="space-y-6">

                {/* ENDEREÇO */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex h-11 w-11
                      shrink-0 items-center
                      justify-center
                      rounded-xl
                      bg-blue-600/10
                    "
                  >
                    <MapPin className="h-5 w-5 text-blue-500" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[10px]
                        font-black uppercase
                        tracking-[0.18em]
                        text-white/40
                      "
                    >
                      Endereço
                    </p>

                    <p
                      className="
                        mt-1
                        text-base
                        font-bold
                        leading-relaxed
                        text-white
                        sm:text-lg
                      "
                    >
                      Estrada Bela Vista, 2914
                      <br />
                      Alphaville, Santana de Parnaíba - SP
                      <br />
                      06472-005
                    </p>
                  </div>
                </div>

                {/* CULTOS */}
                <div className="flex items-start gap-4">
                  <div
                    className="
                      flex h-11 w-11
                      shrink-0 items-center
                      justify-center
                      rounded-xl
                      bg-pink-600/10
                    "
                  >
                    <Clock className="h-5 w-5 text-pink-500" />
                  </div>

                  <div>
                    <p
                      className="
                        text-[10px]
                        font-black uppercase
                        tracking-[0.18em]
                        text-white/40
                      "
                    >
                      Cultos
                    </p>

                    <p
                      className="
                        mt-1
                        text-base
                        font-bold
                        text-white
                        sm:text-lg
                      "
                    >
                      Todos os domingos às 10h
                    </p>
                  </div>
                </div>

              </div>

              {/* BOTÃO */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  flex min-h-[54px]
                  w-full
                  items-center justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-6 py-4
                  text-center
                  font-black uppercase
                  text-white
                  transition
                  hover:bg-pink-600
                  active:scale-[0.98]
                  sm:w-fit
                  sm:px-8
                "
              >
                <Navigation className="h-5 w-5" />
                VER NO MAPA
              </a>

            </div>

            {/* MAPA */}
            <div className="min-h-[320px] bg-neutral-900 sm:min-h-[380px] lg:min-h-full">
              <iframe
                title="Mapa da Igreja Dinamus Alphaville"
                src="https://www.google.com/maps?q=Estrada%20Bela%20Vista%2C%202914%20-%20Alphaville%2C%20Santana%20de%20Parna%C3%ADba%20-%20SP&z=15&output=embed"
                className="h-full min-h-[320px] w-full border-0 sm:min-h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>

        {/* AVISO */}
        <div
          className="
            mt-5
            rounded-2xl
            border border-white/10
            bg-neutral-900
            p-4
            text-center
            sm:p-5
          "
        >
          <p className="text-sm font-semibold leading-relaxed text-neutral-400">
            Para alguns eventos, o local pode ser diferente.
            Consulte sempre as informações na agenda.
          </p>
        </div>

      </div>
    </div>
  );
}

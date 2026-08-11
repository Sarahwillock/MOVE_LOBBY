import { Link } from 'react-router-dom';
import { CalendarPlus } from 'lucide-react';

const months = [
  {
    name: 'ABRIL',
    path: '/move/abril',
    image: '/images/abril.jpg',
    border: 'border-blue-600'
  },
  {
    name: 'MAIO',
    path: '/move/maio',
    image: '/images/maio.jpg',
    border: 'border-pink-600'
  },
  {
    name: 'JUNHO',
    path: '/move/junho',
    image: '/images/junho.manu.jpg',
    border: 'border-orange-600'
  }
];

export default function MoveHome() {
  const addNextEventToCalendar = () => {
    const content = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//MOVE Alphaville//Agenda//PT-BR',
      'BEGIN:VEVENT',
      'DTSTART:20260411T150000',
      'DTEND:20260411T180000',
      'SUMMARY:Seminário de Evangelismo',
      'DESCRIPTION:Seminário de Evangelismo - MOVE Alphaville',
      'LOCATION:Igreja Dinamus Alphaville',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([content], {
      type: 'text/calendar;charset=utf-8'
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = 'seminario-evangelismo-move.ics';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto w-full max-w-[1500px] p-4 sm:p-6 lg:p-7">

      {/* PRÓXIMO EVENTO */}
      <section className="mb-8 border-l-4 border-white bg-blue-600 p-5 sm:p-7 lg:p-8">
        <p className="text-lg font-black italic uppercase sm:text-xl">
          PRÓXIMO EVENTO
        </p>

        <div className="mt-2 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">

          <div>
            <h1 className="max-w-4xl text-3xl font-black uppercase leading-none sm:text-4xl lg:text-5xl">
              SEMINÁRIO DE EVANGELISMO
            </h1>

            <p className="mt-3 text-sm font-black uppercase tracking-wider sm:text-base">
              11 DE ABRIL · SÁBADO · 15:00
            </p>
          </div>

          <div className="grid w-full gap-3 sm:grid-cols-2 xl:w-auto">

            <button
              type="button"
              onClick={addNextEventToCalendar}
              className="
                flex min-h-[52px]
                items-center justify-center gap-2
                bg-white px-6 py-3
                font-black uppercase
                text-blue-600
                transition active:scale-[0.98]
              "
            >
              <CalendarPlus className="h-5 w-5" />
              TE VEJO LÁ
            </button>

            <Link
              to="/move/abril"
              className="
                flex min-h-[52px]
                items-center justify-center
                border border-white
                px-6 py-3
                text-center font-black uppercase
                text-white
                transition
                active:scale-[0.98]
              "
            >
              VER DETALHES
            </Link>

          </div>
        </div>
      </section>

      {/* EVENTOS */}
      <section>
        <h2 className="mb-5 text-4xl font-black italic uppercase text-blue-600 sm:text-5xl">
          EVENTOS MOVE
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {months.map((month) => (
            <Link
              key={month.name}
              to={month.path}
              className={`
                group relative block
                aspect-[4/3]
                min-h-[230px]
                overflow-hidden
                border
                ${month.border}
              `}
            >
              <img
                src={month.image}
                alt={`Eventos MOVE - ${month.name}`}
                loading="lazy"
                className="
                  h-full w-full
                  object-cover grayscale
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />

              <span className="absolute bottom-5 left-5 text-4xl font-black italic uppercase text-white sm:text-5xl">
                {month.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}

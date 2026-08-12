import {
  CalendarPlus,
  MessageCircle
} from 'lucide-react';

type EventActionsProps = {
  title: string;
  date: string;
  time?: string;
  location?: string;
  isGC?: boolean;
};

const WHATSAPP_NUMBER = '5511952809396';

function formatDateForICS(date: string, time?: string) {
  const [day, month] = date.split('/');

  const year = '2026';

  const cleanTime = time
    ? time
        .toLowerCase()
        .replace('h', ':')
        .replace(':', '')
        .padEnd(4, '0')
    : '0900';

  return `${year}${month}${day}T${cleanTime}00`;
}

export default function EventActions({
  title,
  date,
  time,
  location,
  isGC = false
}: EventActionsProps) {

  const addToCalendar = () => {
    const start = formatDateForICS(
      date,
      time
    );

    /*
      Por enquanto usamos duração padrão de 2 horas.
      Depois podemos colocar horário final específico
      em cada evento.
    */
    const startDate = new Date(
      Number(start.slice(0, 4)),
      Number(start.slice(4, 6)) - 1,
      Number(start.slice(6, 8)),
      Number(start.slice(9, 11)),
      Number(start.slice(11, 13))
    );

    const endDate = new Date(
      startDate.getTime() +
        2 * 60 * 60 * 1000
    );

    const formatICSDate = (
      value: Date
    ) => {
      const year = value
        .getFullYear()
        .toString();

      const month = String(
        value.getMonth() + 1
      ).padStart(2, '0');

      const day = String(
        value.getDate()
      ).padStart(2, '0');

      const hours = String(
        value.getHours()
      ).padStart(2, '0');

      const minutes = String(
        value.getMinutes()
      ).padStart(2, '0');

      return `${year}${month}${day}T${hours}${minutes}00`;
    };

    const content = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//MOVE Alphaville//Agenda 2026//PT-BR',
      'CALSCALE:GREGORIAN',

      'BEGIN:VEVENT',

      `UID:${Date.now()}@move-alphaville`,

      `DTSTART:${formatICSDate(
        startDate
      )}`,

      `DTEND:${formatICSDate(
        endDate
      )}`,

      `SUMMARY:${title}`,

      `DESCRIPTION:${title} - MOVE Alphaville`,

      `LOCATION:${
        location || 'MOVE Alphaville'
      }`,

      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob(
      [content],
      {
        type: 'text/calendar;charset=utf-8'
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement('a');

    link.href = url;

    link.download = `${title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(
        /[^a-z0-9-]/g,
        ''
      )}.ics`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  const contactGC = () => {
    const message =
      `Olá! Vi o GC ${title} no site da MOVE Alphaville e tenho interesse em participar. Poderia me passar mais informações?`;

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">

      {/* ADICIONAR AO CALENDÁRIO */}
      <button
        type="button"
        onClick={addToCalendar}
        className="
          flex min-h-11
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-white
          px-4 py-2
          text-xs
          font-black
          uppercase
          text-black
          transition
          hover:bg-blue-600
          hover:text-white
          active:scale-[0.98]
        "
      >
        <CalendarPlus className="h-4 w-4" />

        Adicionar ao calendário
      </button>

      {/* WHATSAPP DO GC */}
      {isGC && (
        <button
          type="button"
          onClick={contactGC}
          className="
            flex min-h-11
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-emerald-600
            px-4 py-2
            text-xs
            font-black
            uppercase
            text-white
            transition
            hover:bg-emerald-500
            active:scale-[0.98]
          "
        >
          <MessageCircle className="h-4 w-4" />

          Quero participar
        </button>
      )}

    </div>
  );
}

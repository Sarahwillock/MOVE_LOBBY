export type EventType =
  | 'igreja'
  | 'move'
  | 'gc'
  | 'igreja-move';

export type MoveEvent = {
  id: string;

  // Data
  year: number;
  month: number;
  day: number;
  date: string;
  weekday: string;

  // Evento
  title: string;
  description?: string;
  time?: string;
  endTime?: string;
  location?: string;

  // Categoria
  type: EventType;
};

/* =========================================================
   MESES DISPONÍVEIS
========================================================= */

export const MONTHS_2026 = [
  {
    name: 'AGOSTO',
    number: 8,
    path: '/move/agosto'
  },
  {
    name: 'SETEMBRO',
    number: 9,
    path: '/move/setembro'
  },
  {
    name: 'OUTUBRO',
    number: 10,
    path: '/move/outubro'
  },
  {
    name: 'NOVEMBRO',
    number: 11,
    path: '/move/novembro'
  },
  {
    name: 'DEZEMBRO',
    number: 12,
    path: '/move/dezembro'
  }
] as const;

/* =========================================================
   EVENTOS 2026

   Essa será a ÚNICA base de eventos.

   Agenda       -> usa todos
   Calendário   -> usa todos
   Eventos MOVE -> filtra MOVE / GC / Igreja + MOVE
========================================================= */

export const EVENTS_2026: MoveEvent[] = [

  /* =======================================================
     AGOSTO
  ======================================================= */

  {
    id: '2026-08-07-gc-lobby',
    year: 2026,
    month: 8,
    day: 7,
    date: '07/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC LOBBY',
    description: 'GC de jovens de 19 a 30 anos',
    time: '19:00',
    location: 'Alphaville',
    type: 'gc'
  },

  {
    id: '2026-08-07-gc-rock-15-18',
    year: 2026,
    month: 8,
    day: 7,
    date: '07/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC ROCK',
    description: 'GC de adolescentes de 15 a 18 anos',
    time: '20:00',
    location: 'Alphaville',
    type: 'gc'
  },

  {
    id: '2026-08-07-gc-rock-12-14',
    year: 2026,
    month: 8,
    day: 7,
    date: '07/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC ROCK',
    description: 'GC de pré-adolescentes de 12 a 14 anos',
    time: '20:00',
    location: 'Prédio da igreja',
    type: 'gc'
  },

  {
    id: '2026-08-13-gc-conecta',
    year: 2026,
    month: 8,
    day: 13,
    date: '13/08',
    weekday: 'QUINTA-FEIRA',
    title: 'GC CONECTA',
    description: 'GC de jovens 30+',
    time: '20:00',
    location: 'Alphaville',
    type: 'gc'
  },

  {
    id: '2026-08-14-gc-rock-15-18',
    year: 2026,
    month: 8,
    day: 14,
    date: '14/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC ROCK',
    description: 'GC de adolescentes de 15 a 18 anos',
    time: '20:00',
    location: 'Alphaville',
    type: 'gc'
  },

  {
    id: '2026-08-14-gc-rock-12-14',
    year: 2026,
    month: 8,
    day: 14,
    date: '14/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC ROCK',
    description: 'GC de pré-adolescentes de 12 a 14 anos',
    time: '20:00',
    location: 'Prédio da igreja',
    type: 'gc'
  },

  {
    id: '2026-08-21-gc-lobby',
    year: 2026,
    month: 8,
    day: 21,
    date: '21/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC LOBBY',
    description: 'GC de jovens de 19 a 30 anos',
    time: '19:00',
    location: 'Alphaville',
    type: 'gc'
  },

  {
    id: '2026-08-21-gc-rock-15-18',
    year: 2026,
    month: 8,
    day: 21,
    date: '21/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC ROCK',
    description: 'GC de adolescentes de 15 a 18 anos',
    time: '20:00',
    location: 'Alphaville',
    type: 'gc'
  },

  {
    id: '2026-08-21-gc-rock-12-14',
    year: 2026,
    month: 8,
    day: 21,
    date: '21/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC ROCK',
    description: 'GC de pré-adolescentes de 12 a 14 anos',
    time: '20:00',
    location: 'Prédio da igreja',
    type: 'gc'
  },

  {
    id: '2026-08-28-cha-das-sisters',
    year: 2026,
    month: 8,
    day: 28,
    date: '28/08',
    weekday: 'SEXTA-FEIRA',
    title: 'Chá das Sisters',
    description: 'Evento da Igreja + MOVE.',
    type: 'igreja-move'
  },

  {
    id: '2026-08-29-movenite',
    year: 2026,
    month: 8,
    day: 29,
    date: '29/08',
    weekday: 'SÁBADO',
    title: 'Movenite',
    time: '19:00',
    location: 'Prédio da igreja',
    type: 'move'
  },

  /* =======================================================
     SETEMBRO
  ======================================================= */

  {
    id: '2026-09-19-movenite',
    year: 2026,
    month: 9,
    day: 19,
    date: '19/09',
    weekday: 'SÁBADO',
    title: 'Movenite',
    time: '19:00',
    location: 'Prédio da igreja',
    type: 'move'
  },

  {
    id: '2026-09-26-hangout-jovens',
    year: 2026,
    month: 9,
    day: 26,
    date: '26/09',
    weekday: 'SÁBADO',
    title: 'Hangout dos Jovens',
    time: '19:00',
    location: 'Prédio da igreja',
    type: 'move'
  }

  /* =======================================================
     OUTUBRO
     Adicionaremos aqui os eventos confirmados.
  ======================================================= */

  /* =======================================================
     NOVEMBRO
     Adicionaremos aqui os eventos confirmados.
  ======================================================= */

  /* =======================================================
     DEZEMBRO
     Adicionaremos aqui os eventos confirmados.
  ======================================================= */

];

/* =========================================================
   HELPERS
========================================================= */

/**
 * Todos os eventos de determinado mês.
 * Usado principalmente pela Agenda e pelo Calendário.
 */
export function getEventsByMonth(month: number) {
  return EVENTS_2026.filter(
    (event) => event.month === month
  );
}

/**
 * Eventos relacionados à MOVE.
 *
 * Não inclui eventos exclusivamente da Igreja.
 */
export function getMoveEvents() {
  return EVENTS_2026.filter(
    (event) =>
      event.type === 'move' ||
      event.type === 'gc' ||
      event.type === 'igreja-move'
  );
}

/**
 * Eventos MOVE de determinado mês.
 */
export function getMoveEventsByMonth(
  month: number
) {
  return EVENTS_2026.filter(
    (event) =>
      event.month === month &&
      (
        event.type === 'move' ||
        event.type === 'gc' ||
        event.type === 'igreja-move'
      )
  );
}

/**
 * Eventos exclusivos da Igreja.
 */
export function getChurchEvents() {
  return EVENTS_2026.filter(
    (event) => event.type === 'igreja'
  );
}

/**
 * Retorna eventos de uma data específica.
 *
 * Muito útil para o calendário:
 * a pessoa toca no dia e vê todos os eventos.
 */
export function getEventsByDate(
  year: number,
  month: number,
  day: number
) {
  return EVENTS_2026.filter(
    (event) =>
      event.year === year &&
      event.month === month &&
      event.day === day
  );
}

/**
 * Ordena eventos por data e horário.
 */
export function sortEvents(
  events: MoveEvent[]
) {
  return [...events].sort((a, b) => {
    const dateA = new Date(
      a.year,
      a.month - 1,
      a.day
    );

    const dateB = new Date(
      b.year,
      b.month - 1,
      b.day
    );

    const dateDifference =
      dateA.getTime() -
      dateB.getTime();

    if (dateDifference !== 0) {
      return dateDifference;
    }

    return (a.time ?? '').localeCompare(
      b.time ?? ''
    );
  });
}

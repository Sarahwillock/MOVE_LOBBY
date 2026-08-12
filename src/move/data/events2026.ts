export type EventType =
  | 'igreja'
  | 'move'
  | 'gc'
  | 'igreja-move';

export type MoveEvent = {
  id: string;

  year: number;
  month: number;
  day: number;

  /**
   * Para eventos que duram vários dias.
   * Ex:
   * 13 a 16 de agosto
   */
  endDay?: number;

  /**
   * Texto mostrado na tela.
   * Ex:
   * 13 a 16/08
   */
  date: string;

  weekday: string;

  title: string;
  description?: string;

  time?: string;
  endTime?: string;

  location?: string;

  type: EventType;

  /**
   * Pode ser usado para dar mais destaque visual.
   */
  highlight?: boolean;
};

/* =========================================================
   MESES
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
========================================================= */

export const EVENTS_2026: MoveEvent[] = [

  /* =======================================================
     AGOSTO
  ======================================================= */

  /* GCs */

  {
    id: '2026-08-07-gc-lobby',
    year: 2026,
    month: 8,
    day: 7,
    date: '07/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC LOBBY',
    description: 'GC de jovens apartir de 20 anos',
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

  /* IGREJA */

  {
    id: '2026-08-11-capacitacao-lideres',
    year: 2026,
    month: 8,
    day: 11,
    date: '11/08',
    weekday: 'TERÇA-FEIRA',
    title:
      'Capacitação e Treinamento para Novos Líderes',
    time: '20:00',
    location: 'Online',
    description: '1ª aula',
    type: 'igreja'
  },

  {
    id: '2026-08-13-jejum-40-horas',
    year: 2026,
    month: 8,
    day: 13,
    endDay: 16,
    date: '13 a 16/08',
    weekday: 'QUINTA A DOMINGO',
    title: 'Jejum de 40 Horas',
    description: 'REVIVA O DOM QUE HÁ EM TI',
    highlight: true,
    type: 'igreja'
  },

  {
    id: '2026-08-13-gc-conecta',
    year: 2026,
    month: 8,
    day: 13,
    date: '13/08',
    weekday: 'QUINTA-FEIRA',
    title: 'GC CONECTA',
    description: 'GC de jovens apartir de 20 anos',
    time: '20:00',
    location: 'Alphaville',
    type: 'gc'
  },

  {
    id: '2026-08-14-jejum-40-horas',
    year: 2026,
    month: 8,
    day: 14,
    date: '14/08',
    weekday: 'SEXTA-FEIRA',
    title: 'Jejum de 40 Horas',
    time: '20:00',
    location: 'Prédio da igreja',
    description: 'Reviva o Dom que Há em Ti',
    highlight: true,
    type: 'igreja'
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
    id: '2026-08-18-capacitacao-lideres',
    year: 2026,
    month: 8,
    day: 18,
    date: '18/08',
    weekday: 'TERÇA-FEIRA',
    title:
      'Capacitação e Treinamento para Novos Líderes',
    time: '20:00',
    location: 'Online',
    description: '2ª aula',
    type: 'igreja'
  },

  {
    id: '2026-08-19-escola-huios',
    year: 2026,
    month: 8,
    day: 19,
    date: '19/08',
    weekday: 'QUARTA-FEIRA',
    title: 'Aula Inaugural | Escola Huios',
    time: '20:00',
    location: 'Prédio da igreja',
    type: 'igreja'
  },

  {
    id: '2026-08-21-gc-lobby',
    year: 2026,
    month: 8,
    day: 21,
    date: '21/08',
    weekday: 'SEXTA-FEIRA',
    title: 'GC LOBBY',
    description: 'GC de jovens apartir de 20 anos',
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
    id: '2026-08-25-capacitacao-lideres',
    year: 2026,
    month: 8,
    day: 25,
    date: '25/08',
    weekday: 'TERÇA-FEIRA',
    title:
      'Capacitação e Treinamento para Novos Líderes',
    time: '20:00',
    location: 'Online',
    description: '3ª aula',
    type: 'igreja'
  },

  {
    id: '2026-08-26-discipulado-lideres',
    year: 2026,
    month: 8,
    day: 26,
    date: '26/08',
    weekday: 'QUARTA-FEIRA',
    title: 'Discipulado de Líderes',
    location: 'Prédio da igreja',
    description:
      '19h — Pastor + Líderes • 20h — Líderes + GCD',
    type: 'igreja'
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
    highlight: true,
    type: 'move'
  },

  /* =======================================================
     SETEMBRO
  ======================================================= */

  {
    id: '2026-09-01-capacitacao-lideres',
    year: 2026,
    month: 9,
    day: 1,
    date: '01/09',
    weekday: 'TERÇA-FEIRA',
    title:
      'Capacitação e Treinamento para Novos Líderes',
    time: '20:00',
    location: 'Prédio da igreja',
    description: '4ª e última aula',
    type: 'igreja'
  },

  {
    id: '2026-09-06-jejum-14-dias',
    year: 2026,
    month: 9,
    day: 6,
    endDay: 20,
    date: '06 a 20/09',
    weekday: '',
    title: 'Jejum de 14 Dias',
    highlight: true,
    type: 'igreja'
  },

  {
    id: '2026-09-12-conferencia-kids',
    year: 2026,
    month: 9,
    day: 12,
    date: '12/09',
    weekday: 'SÁBADO',
    title: 'Conferência Kids',
    location: 'Santo André',
    description:
      'Para todos os envolvidos no Ministério Infantil.',
    type: 'igreja'
  },

  {
    id: '2026-09-16-oracao-geral',
    year: 2026,
    month: 9,
    day: 16,
    date: '16/09',
    weekday: 'QUARTA-FEIRA',
    title: 'Oração Geral | Período de Jejum',
    time: '19:00',
    location: 'Prédio da igreja',
    type: 'igreja'
  },

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
    highlight: true,
    type: 'move'
  },

  {
    id: '2026-09-20-encerramento-jejum',
    year: 2026,
    month: 9,
    day: 20,
    date: '20/09',
    weekday: 'DOMINGO',
    title: 'Culto de Encerramento do Jejum',
    type: 'igreja'
  },

  {
    id: '2026-09-23-discipulado-lideres',
    year: 2026,
    month: 9,
    day: 23,
    date: '23/09',
    weekday: 'QUARTA-FEIRA',
    title: 'Discipulado de Líderes',
    location: 'Prédio da igreja',
    description:
      '19h — Pastor + Líderes • 20h — Líderes + GCD',
    type: 'igreja'
  },

  {
    id: '2026-09-25-culto-mulheres',
    year: 2026,
    month: 9,
    day: 25,
    date: '25/09',
    weekday: 'SEXTA-FEIRA',
    title: 'Culto das Mulheres',
    time: '19:00',
    location: 'Prédio da igreja',
    type: 'igreja'
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
    highlight: true,
    type: 'move'
  },

  /* =======================================================
     OUTUBRO
  ======================================================= */

  {
    id: '2026-10-06-encontro-casais',
    year: 2026,
    month: 10,
    day: 6,
    date: '06/10',
    weekday: 'TERÇA-FEIRA',
    title: 'Encontro para Casais',
    time: '20:00',
    location: 'Reunião Online',
    description:
      'Jovens solteiros, viúvos e divorciados + casais de noivos e casados.',
    type: 'igreja'
  },

  {
    id: '2026-10-07-discipulado-lideres',
    year: 2026,
    month: 10,
    day: 7,
    date: '07/10',
    weekday: 'QUARTA-FEIRA',
    title: 'Discipulado de Líderes',
    location: 'Prédio da igreja',
    description:
      '19h — Pastor + Líderes • 20h — Líderes + GCD',
    type: 'igreja'
  },

  {
    id: '2026-10-10-movenite',
    year: 2026,
    month: 10,
    day: 10,
    date: '10/10',
    weekday: 'SÁBADO',
    title: 'Movenite',
    time: '19:00',
    location: 'Prédio da igreja',
    highlight: true,
    type: 'move'
  },

  {
    id: '2026-10-12-dia-criancas',
    year: 2026,
    month: 10,
    day: 12,
    date: '12/10',
    weekday: 'SEGUNDA-FEIRA',
    title: 'Dia das Crianças',
    type: 'igreja'
  },

  {
    id: '2026-10-13-encontro-casais',
    year: 2026,
    month: 10,
    day: 13,
    date: '13/10',
    weekday: 'TERÇA-FEIRA',
    title: 'Encontro para Casais',
    time: '20:00',
    location: 'Reunião Online',
    description:
      'Jovens solteiros, viúvos e divorciados + casais de noivos e casados.',
    type: 'igreja'
  },

  {
    id: '2026-10-17-encontro-kids',
    year: 2026,
    month: 10,
    day: 17,
    date: '17/10',
    weekday: 'SÁBADO',
    title: 'Encontro Kids',
    type: 'igreja'
  },

  {
    id: '2026-10-20-encontro-casais',
    year: 2026,
    month: 10,
    day: 20,
    date: '20/10',
    weekday: 'TERÇA-FEIRA',
    title: 'Encontro para Casais',
    time: '20:00',
    location: 'Reunião Online',
    description:
      'Jovens solteiros, viúvos e divorciados + casais de noivos e casados.',
    type: 'igreja'
  },

  {
    id: '2026-10-21-discipulado-lideres',
    year: 2026,
    month: 10,
    day: 21,
    date: '21/10',
    weekday: 'QUARTA-FEIRA',
    title: 'Discipulado de Líderes',
    location: 'Prédio da igreja',
    description:
      '19h — Pastor + Líderes • 20h — Líderes + GCD',
    type: 'igreja'
  },

  {
    id: '2026-10-27-encontro-casais',
    year: 2026,
    month: 10,
    day: 27,
    date: '27/10',
    weekday: 'TERÇA-FEIRA',
    title: 'Encontro para Casais',
    time: '20:00',
    location: 'Reunião Online',
    description:
      'Jovens solteiros, viúvos e divorciados + casais de noivos e casados.',
    type: 'igreja'
  },

  {
    id: '2026-10-31-cha-sisters',
    year: 2026,
    month: 10,
    day: 31,
    date: '31/10',
    weekday: 'SÁBADO',
    title: 'Chá das Sisters',
    type: 'igreja'
  },

  /* =======================================================
     NOVEMBRO
  ======================================================= */

  {
    id: '2026-11-04-discipulado-lideres',
    year: 2026,
    month: 11,
    day: 4,
    date: '04/11',
    weekday: 'QUARTA-FEIRA',
    title: 'Discipulado de Líderes',
    location: 'Prédio da igreja',
    description:
      '19h — Pastor + Líderes • 20h — Líderes + GCD',
    type: 'igreja'
  },

  {
    id: '2026-11-07-movenite',
    year: 2026,
    month: 11,
    day: 7,
    date: '07/11',
    weekday: 'SÁBADO',
    title: 'Movenite',
    time: '19:00',
    location: 'Prédio da igreja',
    highlight: true,
    type: 'move'
  },

  {
    id: '2026-11-13-presbiterio',
    year: 2026,
    month: 11,
    day: 13,
    date: '13/11',
    weekday: 'SEXTA-FEIRA',
    title: 'Reunião do Presbitério Geral',
    type: 'igreja'
  },

  {
    id: '2026-11-14-conferencia-lideres',
    year: 2026,
    month: 11,
    day: 14,
    date: '14/11',
    weekday: 'SÁBADO',
    title: 'Conferência de Líderes',
    type: 'igreja'
  },

  {
    id: '2026-11-18-discipulado-lideres',
    year: 2026,
    month: 11,
    day: 18,
    date: '18/11',
    weekday: 'QUARTA-FEIRA',
    title: 'Discipulado de Líderes',
    location: 'Prédio da igreja',
    description:
      '19h — Pastor + Líderes • 20h — Líderes + GCD',
    type: 'igreja'
  },

  {
    id: '2026-11-27-culto-mulheres',
    year: 2026,
    month: 11,
    day: 27,
    date: '27/11',
    weekday: 'SEXTA-FEIRA',
    title: 'Culto das Mulheres',
    type: 'igreja'
  },

  /* =======================================================
     DEZEMBRO
  ======================================================= */

  {
    id: '2026-12-02-discipulado-lideres',
    year: 2026,
    month: 12,
    day: 2,
    date: '02/12',
    weekday: 'QUARTA-FEIRA',
    title: 'Discipulado de Líderes',
    location: 'Prédio da igreja',
    description:
      '19h — Pastor + Líderes • 20h — Líderes + GCD',
    type: 'igreja'
  },

  {
    id: '2026-12-06-batismo-aniversario',
    year: 2026,
    month: 12,
    day: 6,
    date: '06/12',
    weekday: 'DOMINGO',
    title: 'Batismo + Aniversário da Igreja',
    type: 'igreja'
  },

  {
    id: '2026-12-12-movenite',
    year: 2026,
    month: 12,
    day: 12,
    date: '12/12',
    weekday: 'SÁBADO',
    title: 'Movenite',
    time: '19:00',
    location: 'Prédio da igreja',
    highlight: true,
    type: 'move'
  },

  {
    id: '2026-12-19-culto-natal',
    year: 2026,
    month: 12,
    day: 19,
    date: '19/12',
    weekday: 'SÁBADO',
    title: 'Culto de Natal',
    description: 'Teatro especial',
    type: 'igreja'
  },

  {
    id: '2026-12-31-culto-virada',
    year: 2026,
    month: 12,
    day: 31,
    date: '31/12',
    weekday: 'QUINTA-FEIRA',
    title: 'Culto da Virada',
    time: '18:00',
    endTime: '21:00',
    description: '18h às 21h',
    type: 'igreja'
  }

];

/* =========================================================
   HELPERS
========================================================= */

/**
 * Cria a data inicial do evento.
 */
export function getEventStartDate(
  event: MoveEvent
) {
  return new Date(
    event.year,
    event.month - 1,
    event.day,
    0,
    0,
    0,
    0
  );
}

/**
 * Cria a data final do evento.
 *
 * Se houver endDay, usa o último dia.
 * Caso contrário, usa o próprio dia.
 *
 * O horário é 23:59:59 para que um evento
 * do dia atual não desapareça durante o dia.
 */
export function getEventEndDate(
  event: MoveEvent
) {
  return new Date(
    event.year,
    event.month - 1,
    event.endDay ?? event.day,
    23,
    59,
    59,
    999
  );
}

/**
 * Retorna a data de hoje sem horário.
 */
export function getToday() {
  const now = new Date();

  return new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0,
    0
  );
}

/**
 * Verifica se o evento já terminou.
 *
 * Eventos do dia atual continuam aparecendo.
 *
 * Eventos de vários dias continuam aparecendo
 * até o último dia definido em endDay.
 */
export function isEventPast(
  event: MoveEvent,
  referenceDate: Date = new Date()
) {
  const today = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate(),
    0,
    0,
    0,
    0
  );

  const eventEnd = new Date(
    event.year,
    event.month - 1,
    event.endDay ?? event.day,
    0,
    0,
    0,
    0
  );

  return eventEnd.getTime() < today.getTime();
}

/**
 * Verifica se o evento está acontecendo hoje.
 *
 * Também funciona para eventos de vários dias.
 */
export function isEventToday(
  event: MoveEvent,
  referenceDate: Date = new Date()
) {
  const today = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate(),
    0,
    0,
    0,
    0
  );

  const start = new Date(
    event.year,
    event.month - 1,
    event.day,
    0,
    0,
    0,
    0
  );

  const end = new Date(
    event.year,
    event.month - 1,
    event.endDay ?? event.day,
    0,
    0,
    0,
    0
  );

  return (
    today.getTime() >= start.getTime() &&
    today.getTime() <= end.getTime()
  );
}

/**
 * Ordena eventos por:
 *
 * 1. Data
 * 2. Horário
 */
export function sortEvents(
  events: MoveEvent[]
) {
  return [...events].sort((a, b) => {
    const dateA = new Date(
      a.year,
      a.month - 1,
      a.day
    ).getTime();

    const dateB = new Date(
      b.year,
      b.month - 1,
      b.day
    ).getTime();

    if (dateA !== dateB) {
      return dateA - dateB;
    }

    return (a.time ?? '').localeCompare(
      b.time ?? ''
    );
  });
}

/**
 * Todos os eventos de determinado mês.
 *
 * Inclui eventos passados.
 *
 * Útil quando precisamos consultar
 * o histórico completo.
 */
export function getEventsByMonth(
  month: number
) {
  return sortEvents(
    EVENTS_2026.filter(
      (event) =>
        event.month === month
    )
  );
}

/**
 * Todos os eventos relacionados à MOVE.
 *
 * Inclui:
 *
 * MOVE
 * GC
 * IGREJA + MOVE
 */
export function getMoveEvents() {
  return sortEvents(
    EVENTS_2026.filter(
      (event) =>
        event.type === 'move' ||
        event.type === 'gc' ||
        event.type === 'igreja-move'
    )
  );
}

/**
 * Eventos MOVE de determinado mês.
 */
export function getMoveEventsByMonth(
  month: number
) {
  return sortEvents(
    EVENTS_2026.filter(
      (event) =>
        event.month === month &&
        (
          event.type === 'move' ||
          event.type === 'gc' ||
          event.type === 'igreja-move'
        )
    )
  );
}

/**
 * Eventos exclusivos da Igreja.
 */
export function getChurchEvents() {
  return sortEvents(
    EVENTS_2026.filter(
      (event) =>
        event.type === 'igreja'
    )
  );
}

/**
 * Retorna todos os eventos atuais
 * e futuros.
 *
 * EVENTOS PASSADOS DESAPARECEM
 * AUTOMATICAMENTE.
 *
 * Exemplo:
 *
 * Se hoje for 12/08:
 *
 * 07/08 -> não aparece
 * 11/08 -> não aparece
 * 13/08 -> aparece
 * 14/08 -> aparece
 */
export function getUpcomingEvents(
  referenceDate: Date = new Date()
) {
  return sortEvents(
    EVENTS_2026.filter(
      (event) =>
        !isEventPast(
          event,
          referenceDate
        )
    )
  );
}

/**
 * Retorna somente os próximos eventos
 * relacionados à MOVE.
 *
 * Inclui:
 *
 * MOVE
 * GC
 * IGREJA + MOVE
 */
export function getUpcomingMoveEvents(
  referenceDate: Date = new Date()
) {
  return getUpcomingEvents(
    referenceDate
  ).filter(
    (event) =>
      event.type === 'move' ||
      event.type === 'gc' ||
      event.type === 'igreja-move'
  );
}

/**
 * Próximos eventos de determinado mês.
 *
 * Essa função é ideal para a Agenda.
 */
export function getUpcomingEventsByMonth(
  month: number,
  referenceDate: Date = new Date()
) {
  return getUpcomingEvents(
    referenceDate
  ).filter(
    (event) =>
      event.month === month
  );
}

/**
 * Próximos eventos MOVE
 * de determinado mês.
 */
export function getUpcomingMoveEventsByMonth(
  month: number,
  referenceDate: Date = new Date()
) {
  return getUpcomingMoveEvents(
    referenceDate
  ).filter(
    (event) =>
      event.month === month
  );
}

/**
 * Retorna o próximo evento geral.
 *
 * Igreja + MOVE + GC.
 */
export function getNextEvent(
  referenceDate: Date = new Date()
) {
  return (
    getUpcomingEvents(
      referenceDate
    )[0] ?? null
  );
}

/**
 * Retorna automaticamente
 * o próximo evento da MOVE.
 *
 * Inclui:
 *
 * MOVE
 * GC
 * IGREJA + MOVE
 *
 * Essa é a função que a HOME
 * deve usar no card:
 *
 * "PRÓXIMO EVENTO"
 */
export function getNextMoveEvent(
  referenceDate: Date = new Date()
) {
  return (
    getUpcomingMoveEvents(
      referenceDate
    )[0] ?? null
  );
}

/**
 * Retorna eventos de uma data específica.
 *
 * Também considera eventos que
 * acontecem durante vários dias.
 *
 * Exemplo:
 *
 * Jejum:
 * 13 a 16/08
 *
 * aparecerá ao tocar:
 *
 * 13
 * 14
 * 15
 * 16
 */
export function getEventsByDate(
  year: number,
  month: number,
  day: number
) {
  return sortEvents(
    EVENTS_2026.filter(
      (event) => {
        if (
          event.year !== year ||
          event.month !== month
        ) {
          return false;
        }

        if (event.endDay) {
          return (
            day >= event.day &&
            day <= event.endDay
          );
        }

        return event.day === day;
      }
    )
  );
}

/**
 * Retorna somente eventos atuais/futuros
 * de uma data específica.
 */
export function getUpcomingEventsByDate(
  year: number,
  month: number,
  day: number,
  referenceDate: Date = new Date()
) {
  return getEventsByDate(
    year,
    month,
    day
  ).filter(
    (event) =>
      !isEventPast(
        event,
        referenceDate
      )
  );
}

/**
 * Agrupa os próximos eventos por mês.
 *
 * Pode ser usado na Agenda para criar:
 *
 * AGOSTO
 * eventos...
 *
 * SETEMBRO
 * eventos...
 *
 * OUTUBRO
 * eventos...
 */
export function getUpcomingEventsGroupedByMonth(
  referenceDate: Date = new Date()
) {
  return MONTHS_2026.map(
    (month) => ({
      ...month,

      events:
        getUpcomingEventsByMonth(
          month.number,
          referenceDate
        )
    })
  ).filter(
    (month) =>
      month.events.length > 0
  );
}

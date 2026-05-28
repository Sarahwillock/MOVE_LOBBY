function EventCard({
  event,
  onSave,
}: {
  event: AgendaEvent;
  onSave: (event: AgendaEvent) => void;
}) {
  return (
    <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
      <p className="text-sm font-black text-neutral-900">
        {event.date} - {event.title}
      </p>

      <p className="mt-1 text-xs font-semibold text-neutral-500">
        {event.weekday} • {event.time}
      </p>

      {event.description && (
        <p className="mt-2 text-xs font-medium leading-relaxed text-neutral-500">
          {event.description}
        </p>
      )}

      {event.location && (
        <a
          href={event.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex items-center gap-1 text-xs font-bold text-brand-primary underline underline-offset-2"
        >
          <MapPin className="h-3.5 w-3.5" />
          {event.location}
        </a>
      )}

      <div className="mt-3 flex gap-2">
        {event.link ? (
          <a
            href={event.link}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-xl bg-brand-primary px-3 py-3 text-center text-[10px] font-black uppercase tracking-widest text-white"
          >
            Inscrever-se
          </a>
        ) : (
          <button
            onClick={() => onSave(event)}
            className="flex-1 rounded-xl bg-brand-primary px-3 py-3 text-[10px] font-black uppercase tracking-widest text-white"
          >
            Salvar
          </button>
        )}

        {event.mapsUrl && (
          <button
            onClick={() => window.open(event.mapsUrl, '_blank')}
            className="rounded-xl bg-neutral-200 px-4 py-3 text-neutral-600"
          >
            <MapPin className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

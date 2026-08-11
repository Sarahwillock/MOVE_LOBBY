import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const months = [
  { label: 'Abril', to: '/move/april' },
  { label: 'Maio', to: '/move/may' },
  { label: 'Junho', to: '/move/june' },
];

export default function MonthSwitcher() {
  const location = useLocation();

  return (
    <nav aria-label="Meses do MOVE" className="mb-5 w-full sm:mb-8">
      <div className="flex w-full gap-2 overflow-x-auto pb-1 no-scrollbar sm:w-auto">
        {months.map((month) => {
          const active = location.pathname === month.to;
          return (
            <Link
              key={month.label}
              to={month.to}
              className={cn(
                'min-h-11 min-w-[92px] shrink-0 border-2 px-4 py-2.5 text-center text-xs font-black uppercase tracking-[0.12em] transition-colors sm:min-w-[110px] sm:text-sm',
                active
                  ? 'border-move-pink bg-move-pink text-white'
                  : 'border-white/30 bg-black/70 text-white hover:border-move-blue hover:bg-move-blue'
              )}
            >
              {month.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

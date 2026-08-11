import { Link, useLocation } from 'react-router-dom';
import { Calendar, Mic2, Ticket, MapPin, LayoutGrid, Home } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Portal', path: '/', icon: Home },
  { name: 'Início MOVE', path: '/move/schedules', icon: Home },
  { name: 'Agenda', path: '/move/full-schedule', icon: Calendar },
  { name: 'EVENTOS MOVE', path: '/move/june', icon: LayoutGrid },
  { name: 'Líderes', path: '/move/leaders', icon: Mic2 },
  { name: 'GCs', path: '/move/gcs', icon: Ticket },
  { name: 'Local', path: '/move/local', icon: MapPin },
];

export default function MoveBottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-move-blue/20 bg-neutral-950/95 px-2 pt-2 backdrop-blur-xl [padding-bottom:calc(env(safe-area-inset-bottom)+0.5rem)] lg:hidden">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.path === '/' ? location.pathname === '/' : location.pathname === item.path || location.pathname.startsWith(item.path + '/');

          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'flex min-h-14 min-w-[82px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-center font-bold uppercase transition-all duration-300 sm:min-w-[92px]',
                isActive
                  ? 'bg-move-blue text-white brightness-125 scale-105'
                  : 'text-neutral-400 hover:bg-move-pink hover:text-white'
              )}
            >
              <Icon size={18} />
              <span className="text-[10px] leading-tight tracking-[0.15em]">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

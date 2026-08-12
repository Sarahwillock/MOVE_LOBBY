import ThemeToggle from './ThemeToggle';
import { Link, useLocation } from 'react-router-dom';
import { CalendarDays, Bell, Search } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'INÍCIO', path: '/move/schedules' },
  { name: 'AGENDA', path: '/move/full-schedule' },
  { name: 'EVENTOS MOVE', path: '/move/june' },
  { name: 'LÍDERES DA CASA', path: '/move/leaders' },
  { name: 'GCS', path: '/move/gcs' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 border-b-2 border-move-blue bg-black">
      <div className="flex h-16 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/move/schedules" className="text-2xl font-black italic uppercase text-move-blue">
            MOVE
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'text-sm font-black uppercase transition-colors',
                    isActive
                      ? 'text-move-pink underline underline-offset-8'
                      : 'text-neutral-300 hover:text-white'
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="https://www.instagram.com/move.alphaville/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-black uppercase text-move-pink"
          >
            @MOVE.ALPHAVILLE
          </a>

          <CalendarDays size={18} className="text-move-blue" />
          <Bell size={18} className="text-move-blue" />

          <button className="flex items-center gap-2 border border-move-blue px-4 py-2 text-xs font-black uppercase text-move-blue">
            <Search size={14} />
            Search
          </button>
        </div>
      </div>
    </header>
  );
}

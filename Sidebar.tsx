import { Link, useLocation } from 'react-router-dom';
import {
  Calendar,
  Mic2,
  Ticket,
  MapPin,
  LayoutGrid,
  Home
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  {
    name: 'Portal',
    path: '/',
    icon: Home
  },
  {
    name: 'Início MOVE',
    path: '/move',
    icon: Home
  },
  {
    name: 'Agenda',
    path: '/move/agenda',
    icon: Calendar
  },
  {
    name: 'EVENTOS MOVE',
    path: '/move/agenda',
    icon: LayoutGrid
  },
  {
    name: 'Líderes da Casa',
    path: '/move/leaders',
    icon: Mic2
  },
  {
    name: 'GCs',
    path: '/move/gcs',
    icon: Ticket
  },
  {
    name: 'Local',
    path: '/move/local',
    icon: MapPin
  }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 z-40 hidden h-screen w-64 flex-col border-r-2 border-move-blue bg-neutral-900 font-bold uppercase lg:flex">

      {/* LOGO / INSTAGRAM */}
      <div className="border-b-2 border-move-blue/20 p-6">
        <Link
          to="/move"
          className="text-3xl font-black text-white transition hover:text-move-blue"
        >
          MOVE 2026
        </Link>

        <a
          href="https://www.instagram.com/move.alphaville/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir Instagram MOVE Alphaville"
          className="
            mt-1 block
            w-fit
            text-[10px]
            font-black
            tracking-widest
            text-move-blue
            transition-colors
            hover:text-move-pink
          "
        >
          @MOVE.ALPHAVILLE
        </a>
      </div>

      {/* MENU */}
      <nav className="mt-4 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            item.path === '/move'
              ? location.pathname === '/move'
              : location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'flex items-center gap-4 p-4 transition-colors',
                isActive
                  ? 'bg-move-blue text-white brightness-125'
                  : 'text-neutral-400 hover:bg-move-pink hover:text-white'
              )}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

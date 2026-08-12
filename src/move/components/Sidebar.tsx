import {
  Home,
  Calendar,
  LayoutGrid,
  Mic2,
  Users,
  MapPin
} from 'lucide-react';

import { NavLink } from 'react-router-dom';

const navItems = [
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
    path: '/move/eventos',
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
  return (
    <aside
      className="
        fixed left-0 top-0 z-40
        hidden h-screen w-[215px]
        border-r border-blue-600
        bg-neutral-950
        lg:flex lg:flex-col
      "
    >
      <div className="border-b border-blue-600/40 px-5 py-5">
        <h1 className="text-2xl font-black text-white">
          MOVE 2026
        </h1>

        <a
  href="https://www.instagram.com/move.alphaville/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram MOVE Alphaville"
  className="
    mt-1 inline-block
    text-[9px]
    font-black uppercase
    tracking-widest
    text-blue-500
    transition-colors
    hover:text-pink-500
    hover:underline
  "
>
  @MOVE.ALPHAVILLE
</a>
      </div>

      <nav className="flex-1 px-3 py-4">
        {items.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/move'}
            className={({ isActive }) =>
              `
                mb-1 flex min-h-12 items-center gap-3
                rounded-lg px-3 py-3
                text-sm font-bold
                transition
                ${
                  isActive
                    ? 'bg-blue-600/15 text-blue-500'
                    : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                }
              `
            }
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

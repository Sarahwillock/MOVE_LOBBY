import {
  Home,
  Calendar,
  LayoutGrid,
  Mic2,
  Users,
  MapPin
} from 'lucide-react';

import { NavLink } from 'react-router-dom';

const items = [
  {
    label: 'Início',
    path: '/move',
    icon: Home
  },
  {
    label: 'Agenda',
    path: '/move/agenda',
    icon: Calendar
  },
  {
    label: 'Eventos',
    path: '/move/eventos',
    icon: LayoutGrid
  },
  {
    label: 'Líderes',
    path: '/move/leaders',
    icon: Mic2
  },
  {
    label: 'GCs',
    path: '/move/gcs',
    icon: Users
  },
  {
    label: 'Local',
    path: '/move/local',
    icon: MapPin
  }
];

export default function BottomNav() {
  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0 z-50
        flex overflow-x-auto
        border-t border-blue-600/50
        bg-black/85
        backdrop-blur-xl
        [padding-bottom:env(safe-area-inset-bottom)]
        lg:hidden
      "
    >
      {items.map(({ label, path, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/move'}
          className={({ isActive }) =>
            `
              flex min-h-[64px] min-w-[72px] flex-1
              flex-col items-center justify-center
              gap-1 px-2 py-2
              text-[9px] font-black uppercase
              transition-colors
              ${
                isActive
                  ? 'bg-blue-600/15 text-blue-500'
                  : 'text-neutral-400 hover:text-white'
              }
            `
          }
        >
          <Icon className="h-5 w-5" />

          <span className="whitespace-nowrap">
            {label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}

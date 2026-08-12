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
  const location = useLocation();

  return (
    <aside
      className="
        fixed left-0 top-0 z-40
        hidden h-screen w-[215px]
        flex-col
        border-r border-move-blue/70
        bg-black/75
        font-bold uppercase
        backdrop-blur-xl
        lg:flex
      "
    >
      {/* LOGO / INSTAGRAM */}
      <div className="border-b border-move-blue/30 px-5 py-5">

        <Link
          to="/move"
          className="
            text-2xl
            font-black
            text-white
            transition
            hover:text-move-blue
          "
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
            text-[9px]
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
      <nav className="flex-1 px-3 py-4">

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
                `
                  mb-1
                  flex min-h-12
                  items-center
                  gap-3
                  rounded-lg
                  px-3 py-3
                  text-sm
                  transition
                `,
                isActive
                  ? `
                      bg-move-blue
                      text-white
                      shadow-lg
                      shadow-blue-600/20
                    `
                  : `
                      text-neutral-400
                      hover:bg-move-pink/20
                      hover:text-white
                    `
              )}
            >
              <Icon
                size={18}
                className="shrink-0"
              />

              <span>
                {item.name}
              </span>
            </Link>
          );
        })}

      </nav>
    </aside>
  );
}

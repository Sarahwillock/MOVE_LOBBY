import {
  Link,
  useLocation
} from 'react-router-dom';

import {
  Bell,
  Search
} from 'lucide-react';

import { cn } from '../lib/utils';

import ThemeToggle from './ThemeToggle';
import MoveCalendar from './MoveCalendar';

const navItems = [
  {
    name: 'INÍCIO',
    path: '/move'
  },
  {
    name: 'AGENDA',
    path: '/move/agenda'
  },
  {
    name: 'EVENTOS MOVE',
    path: '/move/eventos'
  },
  {
    name: 'LÍDERES DA CASA',
    path: '/move/leaders'
  },
  {
    name: 'GCS',
    path: '/move/gcs'
  }
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header
      className="
        sticky top-0 z-30
        border-b-2 border-move-blue
        bg-black
      "
    >
      <div
        className="
          flex h-16
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =========================
            ESQUERDA
        ========================= */}
        <div className="flex items-center gap-8">
          <Link
            to="/move"
            className="
              text-2xl
              font-black
              italic
              uppercase
              text-move-blue
            "
          >
            MOVE
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden items-center gap-8 xl:flex">
            {navItems.map((item) => {
              const isActive =
                item.path === '/move'
                  ? location.pathname === '/move'
                  : location.pathname.startsWith(
                      item.path
                    );

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    `
                      text-sm
                      font-black
                      uppercase
                      transition-colors
                    `,
                    isActive
                      ? `
                          text-move-pink
                          underline
                          underline-offset-8
                        `
                      : `
                          text-neutral-300
                          hover:text-white
                        `
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* =========================
            DIREITA
        ========================= */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/move.alphaville/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram MOVE Alphaville"
            className="
              hidden
              text-xs
              font-black
              uppercase
              tracking-wide
              text-move-pink
              transition-colors
              hover:text-pink-400
              lg:block
            "
          >
            @MOVE.ALPHAVILLE
          </a>

          {/* =========================
              MODO CLARO / ESCURO
          ========================= */}
          <ThemeToggle />

          {/* =========================
              CALENDÁRIO
          ========================= */}
          <MoveCalendar />

          {/* =========================
              NOTIFICAÇÕES
          ========================= */}
          <button
            type="button"
            aria-label="Notificações"
            title="Notificações"
            className="
              hidden
              h-11 w-11
              items-center
              justify-center
              rounded-xl
              border
              border-blue-600/30
              bg-blue-600/10
              text-move-blue
              transition
              hover:bg-blue-600
              hover:text-white
              active:scale-95
              lg:flex
            "
          >
            <Bell className="h-5 w-5" />
          </button>

          {/* =========================
              BUSCA
          ========================= */}
          <button
            type="button"
            aria-label="Pesquisar"
            className="
              hidden
              min-h-11
              items-center
              gap-2
              rounded-xl
              border
              border-move-blue
              px-4
              py-2
              text-xs
              font-black
              uppercase
              text-move-blue
              transition
              hover:bg-move-blue
              hover:text-white
              active:scale-[0.98]
              xl:flex
            "
          >
            <Search className="h-4 w-4" />

            <span>
              Search
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

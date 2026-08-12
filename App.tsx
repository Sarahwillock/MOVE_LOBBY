import EventosMove from './move/pages/EventosMove';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import {
  AnimatePresence,
  motion
} from 'motion/react';

import LobbyHome from './LobbyHome';

import MoveBottomNav from './move/components/MoveBottomNav';
import Sidebar from './move/components/Sidebar';
import Navbar from './move/components/Navbar';

import April from './move/pages/April';
import May from './move/pages/May';
import June from './move/pages/June';

import GCs from './move/pages/GCs';
import FullSchedule from './move/pages/FullSchedule';
import Leaders from './move/pages/Leaders';
import Local from './move/pages/Local';
import HomePage from './move/pages/Home';

import { saveToCalendar } from './move/lib/calendar';


function MoveSchedules() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        y: -20
      }}
      transition={{
        duration: 0.3
      }}
    >
      <div className="p-4 sm:p-6 lg:p-8">

        <div
          className="
            mb-8
            border-l-4
            border-white
            bg-move-blue
            p-4
            shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]
            sm:mb-12
            sm:border-l-8
            sm:p-6
            lg:p-8
          "
        >
          <h2
            className="
              mb-2
              text-lg
              font-black
              italic
              uppercase
              tracking-tighter
              text-white
              sm:text-xl
              lg:text-2xl
            "
          >
            PRÓXIMO EVENTO
          </h2>

          <div
            className="
              flex
              flex-col
              justify-between
              gap-4
              md:flex-row
              md:items-center
            "
          >
            <div>

              <h3
                className="
                  text-2xl
                  font-black
                  uppercase
                  leading-tight
                  text-white
                  sm:text-3xl
                "
              >
                Seminário de Evangelismo
              </h3>

              <p className="text-sm text-white/80">
                11 DE ABRIL · 15:00
              </p>

            </div>

            <button
              onClick={() =>
                saveToCalendar({
                  title: 'Seminário de Evangelismo',
                  description:
                    'Seminário de Evangelismo - MOVE Alphaville',
                  location:
                    'Igreja Dinamus Alphaville',
                  startTime:
                    '20260411T150000Z',
                  endTime:
                    '20260411T180000Z'
                })
              }
              className="
                min-h-12
                w-full
                bg-white
                px-6
                py-3
                font-bold
                text-move-blue
                hover:bg-move-pink
                hover:text-white
                md:w-auto
              "
            >
              TE VEJO LÁ
            </button>

          </div>
        </div>

      </div>
    </motion.div>
  );
}


function MoveLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* MENU LATERAL */}
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col lg:ml-64">

        {/* NAVBAR */}
        <Navbar />

        {/* CONTEÚDO */}
        <main className="flex-1 pb-28 lg:pb-0">

          <AnimatePresence mode="wait">

            <Routes location={location}>

              {/* INÍCIO MOVE */}
              <Route
                path="/move"
                element={<HomePage />}
              />

              {/* PÁGINAS ANTIGAS */}
              <Route
                path="/move/june"
                element={<June />}
              />

              <Route
                path="/move/april"
                element={<April />}
              />

              <Route
                path="/move/may"
                element={<May />}
              />

              {/* LOCAL */}
              <Route
                path="/move/local"
                element={<Local />}
              />

              {/* PRÓXIMO EVENTO */}
              <Route
                path="/move/schedules"
                element={<MoveSchedules />}
              />

              {/* GCs */}
              <Route
                path="/move/gcs"
                element={<GCs />}
              />

              {/* AGENDA COMPLETA */}
              <Route
                path="/move/full-schedule"
                element={<FullSchedule />}
              />

              {/* EVENTOS MOVE */}
              <Route
                path="/move/eventos"
                element={<EventosMove />}
              />

              {/* LÍDERES */}
              <Route
                path="/move/leaders"
                element={<Leaders />}
              />

            </Routes>

          </AnimatePresence>

        </main>

        {/* MENU MOBILE */}
        <MoveBottomNav />

      </div>
    </div>
  );
}


function AppRoutes() {
  const location = useLocation();

  const isMoveRoute =
    location.pathname === '/move' ||
    location.pathname.startsWith('/move/');

  if (isMoveRoute) {
    return <MoveLayout />;
  }

  return <LobbyHome />;
}


export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

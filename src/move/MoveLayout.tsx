import { Outlet } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import MoveHeader from './components/MoveHeader';

export default function MoveLayout() {
  return (
    <div className="move-page min-h-screen overflow-x-hidden">
      {/* MENU LATERAL - DESKTOP */}
      <Sidebar />

      {/* CONTEÚDO PRINCIPAL */}
      <div className="min-w-0 lg:ml-[215px]">
        {/* CABEÇALHO */}
        <MoveHeader />

        {/* PÁGINAS */}
        <main className="min-h-screen pb-24 lg:pb-0">
          <Outlet />
        </main>
      </div>

      {/* MENU INFERIOR - MOBILE */}
      <BottomNav />
    </div>
  );
}

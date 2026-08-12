import { Outlet } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import MoveHeader from './components/MoveHeader';
import MoveBackground from './components/MoveBackground';

export default function MoveLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">

      {/* FUNDO COM IMAGENS DA MOVE */}
      <MoveBackground />

      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTEÚDO */}
      <div className="relative z-10 min-w-0 lg:ml-[215px]">

        <MoveHeader />

        <main className="min-h-screen pb-24 lg:pb-0">
          <Outlet />
        </main>

      </div>

      {/* MENU MOBILE */}
      <BottomNav />

    </div>
  );
}

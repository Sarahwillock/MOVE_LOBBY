import { Outlet } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import BottomNav from './components/BottomNav';
import MoveHeader from './components/MoveHeader';

export default function MoveLayout() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Sidebar />

      <div className="min-w-0 lg:ml-[215px]">
        <MoveHeader />

        <main className="min-h-screen pb-24 lg:pb-0">
          <Outlet />
        </main>
      </div>

      <BottomNav />
    </div>
  );
}

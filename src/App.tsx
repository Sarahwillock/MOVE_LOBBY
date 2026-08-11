import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LobbyHome from './LobbyHome';

import MoveLayout from './move/MoveLayout';
import MoveHome from './move/pages/MoveHome';
import Agenda from './move/pages/Agenda';
import April from './move/pages/April';
import May from './move/pages/May';
import June from './move/pages/June';
import Leaders from './move/pages/Leaders';
import GCs from './move/pages/GCs';
import Local from './move/pages/Local';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Lobby atual */}
        <Route path="/" element={<LobbyHome />} />

        {/* Área MOVE */}
        <Route path="/move" element={<MoveLayout />}>
          <Route index element={<MoveHome />} />

          <Route path="agenda" element={<Agenda />} />

          <Route path="abril" element={<April />} />
          <Route path="maio" element={<May />} />
          <Route path="junho" element={<June />} />

          <Route path="leaders" element={<Leaders />} />
          <Route path="gcs" element={<GCs />} />
          <Route path="local" element={<Local />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

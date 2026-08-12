import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import LobbyHome from './LobbyHome';

import MoveLayout from './move/MoveLayout';
import MoveHome from './move/pages/MoveHome';
import Agenda from './move/pages/Agenda';
import EventosMove from './move/pages/EventosMove';

// Vamos criar essas páginas na sequência
import Agosto from './move/pages/Agosto';
import Setembro from './move/pages/Setembro';
import Outubro from './move/pages/Outubro';
import Novembro from './move/pages/Novembro';
import Dezembro from './move/pages/Dezembro';

import Leaders from './move/pages/Leaders';
import GCs from './move/pages/GCs';
import Local from './move/pages/Local';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOBBY PRINCIPAL */}
        <Route
          path="/"
          element={<LobbyHome />}
        />

        {/* ÁREA MOVE */}
        <Route
          path="/move"
          element={<MoveLayout />}
        >
          {/* Início MOVE */}
          <Route
            index
            element={<MoveHome />}
          />

          {/* Agenda */}
          <Route
            path="agenda"
            element={<Agenda />}
          />

          <Route
            path="eventos"
            element={<EventosMove />}
          />

          {/* Meses */}
          <Route
            path="agosto"
            element={<Agosto />}
          />

          <Route
            path="setembro"
            element={<Setembro />}
          />

          <Route
            path="outubro"
            element={<Outubro />}
          />

          <Route
            path="novembro"
            element={<Novembro />}
          />

          <Route
            path="dezembro"
            element={<Dezembro />}
          />

          {/* Outras áreas */}
          <Route
            path="leaders"
            element={<Leaders />}
          />

          <Route
            path="gcs"
            element={<GCs />}
          />

          <Route
            path="local"
            element={<Local />}
          />
        </Route>

        {/* QUALQUER ROTA INVÁLIDA VOLTA PARA O LOBBY */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contacto from './Components/Contacto';
import Eventos from './Components/Eventos';

function App() {
  return (
    <Router>
      <div>
        {/* Define las rutas usando Routes y Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
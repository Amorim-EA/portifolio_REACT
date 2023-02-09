import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/layout/NavBar'
import Footer from './componentes/layout/Footer'
import Home from './componentes/paginas/Home'
import Conhecimento from './componentes/paginas/Conhecimento'
import Servicos from './componentes/paginas/Servicos'
import Contato from './componentes/paginas/Contato'
import './App.css';

function App() {
  return (
    <div>
    <Router>
    <NavBar />
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route path="/conhecimento" element={<Conhecimento />} />
       <Route path="/servicos" element={<Servicos />} />
       <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
     </Router>
    </div>
  );
}

export default App;
